/* =========================================================
   ATLAS · BCM view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  const MODES = [
    { id: 'bcm',         label: 'BCM',         desc: 'Structural view — no overlay.' },
    { id: 'application', label: 'Applications', desc: 'Application count per capability.' },
    { id: 'eol',         label: 'EOL Risk',     desc: 'Capabilities backed by applications nearing end-of-life.' },
    { id: 'maturity',    label: 'Maturity',     desc: 'Maturity score (1 Initial → 5 Optimizing).' }
  ];

  let state = {
    mode: 'application',
    selectedCapId: null
  };
  let cache = null;

  async function render(host, mode) {
    cache = cache || await window.atlasData.loadAll();
    state.mode = mode || 'bcm';
    state.selectedCapId = null;

    host.innerHTML = `
      <div id="bcm-stats" class="stats-bar"></div>
      <div id="bcm-body"></div>
      <div id="bcm-legend" class="legend"></div>
    `;

    renderAll(host);
  }

  function renderAll(host) {
    renderStats(host);
    renderLegend(host);
    renderBody(host);
  }

  // ----- stats -----
  function renderStats(host) {
    const { capabilities, applications, capabilityApplications, capabilityMaturity } = cache;
    const el = host.querySelector('#bcm-stats');

    const cards = [];
    if (state.mode === 'bcm') {
      const coreCount = cache.domains.filter(d => d.type === 'Core').length;
      cards.push(['Domains', cache.domains.length, `${coreCount} core · ${cache.domains.length - coreCount} supporting`]);
      cards.push(['Capabilities', capabilities.length, '']);
      cards.push(['Applications', applications.length, 'in registry']);
      cards.push(['Mappings', capabilityApplications.length, 'capability ↔ application']);
    } else if (state.mode === 'application') {
      const counts = capCounts(capabilityApplications, 'capabilityId');
      const dup = Object.values(counts).filter(n => n >= 3).length;
      const uncovered = capabilities.length - Object.keys(counts).length;
      cards.push(['Capabilities mapped', Object.keys(counts).length, `${uncovered} uncovered`]);
      cards.push(['Total mappings', capabilityApplications.length, '']);
      cards.push(['Duplication hotspots', dup, '≥ 3 apps per capability']);
      cards.push(['Applications in scope', new Set(capabilityApplications.map(m => m.applicationId)).size, '']);
    } else if (state.mode === 'eol') {
      const eolApps = applications.filter(a => a.eolDate);
      const eolCapIds = new Set(
        capabilityApplications
          .filter(m => eolApps.some(a => a.id === m.applicationId))
          .map(m => m.capabilityId)
      );
      cards.push(['Applications with EOL flag', eolApps.length, '']);
      cards.push(['Capabilities at EOL risk', eolCapIds.size, '']);
      cards.push(['EOL by 2026/27', eolApps.filter(a => /2026|2027/.test(a.eolDate || '')).length, '']);
      cards.push(['EOL TBD', eolApps.filter(a => /TBD|To Be Determined/i.test(a.eolDate || '')).length, '']);
    } else if (state.mode === 'maturity') {
      const scores = capabilityMaturity.map(m => m.score);
      const avg = scores.reduce((s, n) => s + n, 0) / scores.length;
      const dist = [1, 2, 3, 4, 5].map(s => scores.filter(n => n === s).length);
      cards.push(['Average maturity', avg.toFixed(2), 'across all capabilities']);
      cards.push(['At Defined or above', dist[2] + dist[3] + dist[4], `score ≥ 3`]);
      cards.push(['Below Developing', dist[0], 'score = 1']);
      cards.push(['At Optimizing', dist[4], 'score = 5']);
    }

    el.innerHTML = cards.map(([label, value, sub]) => `
      <div class="stat-card">
        <div class="stat-label">${label}</div>
        <div class="stat-value">${value}</div>
        <div class="stat-sub">${sub || '&nbsp;'}</div>
      </div>
    `).join('');
  }

  // ----- legend -----
  function renderLegend(host) {
    const el = host.querySelector('#bcm-legend');
    if (state.mode === 'bcm') {
      el.innerHTML = `
        <span><span class="legend-swatch" style="background:#efe7ff"></span>Core domain</span>
        <span><span class="legend-swatch" style="background:#d8f7ff"></span>Supporting domain</span>
        <span class="legend-divider"></span>
        <span><span class="legend-swatch" style="background:#e8f9e0"></span>Fully Shared</span>
        <span><span class="legend-swatch" style="background:#fff3e0"></span>Commodity Specific</span>`;
    } else if (state.mode === 'application' || state.mode === 'eol') {
      el.innerHTML = `
        <span><span class="legend-swatch" style="background:var(--hm-none)"></span>None</span>
        <span><span class="legend-swatch" style="background:var(--hm-low)"></span>1</span>
        <span><span class="legend-swatch" style="background:var(--hm-med)"></span>2</span>
        <span><span class="legend-swatch" style="background:var(--hm-high)"></span>3–4</span>
        <span><span class="legend-swatch" style="background:var(--hm-crit)"></span>5+</span>`;
    } else if (state.mode === 'maturity') {
      el.innerHTML = `
        <span><span class="legend-swatch" style="background:var(--m-0)"></span>Not assessed</span>
        <span><span class="legend-swatch" style="background:var(--m-1)"></span>1 Initial</span>
        <span><span class="legend-swatch" style="background:var(--m-2)"></span>2 Developing</span>
        <span><span class="legend-swatch" style="background:var(--m-3)"></span>3 Defined</span>
        <span><span class="legend-swatch" style="background:var(--m-4)"></span>4 Managed</span>
        <span><span class="legend-swatch" style="background:var(--m-5)"></span>5 Optimizing</span>`;
    }
  }

  // ----- body grid -----
  function renderBody(host) {
    const el = host.querySelector('#bcm-body');
    const { domains, capabilities } = cache;

    const renderDomainGroup = (typeFilter, label) => {
      const ds = domains.filter(d => d.type === typeFilter).sort((a, b) => a.sortOrder - b.sortOrder);
      const html = `
        <div class="bcm-section-label">${label}</div>
        <div class="bcm-grid">
          ${ds.map(d => domainCard(d, capabilities)).join('')}
        </div>
      `;
      return html;
    };

    el.innerHTML = renderDomainGroup('Core', 'Core domains') + renderDomainGroup('Supporting', 'Supporting domains');

    el.querySelectorAll('.bcm-cap').forEach(cap => {
      cap.onclick = () => openDetail(parseInt(cap.dataset.capId, 10));
    });
  }

  function domainCard(d, capabilities) {
    const caps = capabilities.filter(c => c.domain === d.title).sort((a, b) => a.sortOrder - b.sortOrder);
    const sharedType = d.sharedType || 'fully-shared';
    const sharedLabel = sharedType === 'commodity-specific' ? 'Commodity' : 'Shared';
    return `
      <div class="bcm-domain">
        <div class="bcm-domain-head">
          <div class="bcm-domain-name">${d.title}</div>
          <div class="bcm-domain-tags">
            <div class="bcm-domain-tag ${d.type.toLowerCase()}">${d.type}</div>
            <div class="bcm-domain-tag ${sharedType}">${sharedLabel}</div>
          </div>
        </div>
        <div class="bcm-cap-list">
          ${caps.map(c => capChip(c)).join('')}
        </div>
      </div>
    `;
  }

  function capChip(c) {
    const cls = capClass(c);
    const badge = capBadge(c);
    return `<div class="bcm-cap ${cls}" data-cap-id="${c.id}" title="${escape(c.description || '')}">
              <div class="bcm-cap-name">${c.title}</div>
              ${badge}
            </div>`;
  }

  function capClass(c) {
    if (state.mode === 'bcm') return '';
    if (state.mode === 'application') {
      const n = countAppsForCap(c.id);
      return countToHm(n);
    }
    if (state.mode === 'eol') {
      const n = countEolAppsForCap(c.id);
      return countToHm(n);
    }
    if (state.mode === 'maturity') {
      const m = cache.capabilityMaturity.find(x => x.capabilityId === c.id);
      return 'm-' + (m ? m.score : 0);
    }
    return '';
  }

  function capBadge(c) {
    if (state.mode === 'application') {
      const n = countAppsForCap(c.id);
      return n ? `<div class="bcm-cap-badge">${n}</div>` : '';
    }
    if (state.mode === 'eol') {
      const n = countEolAppsForCap(c.id);
      return n ? `<div class="bcm-cap-badge">${n}</div>` : '';
    }
    if (state.mode === 'maturity') {
      const m = cache.capabilityMaturity.find(x => x.capabilityId === c.id);
      return m ? `<div class="bcm-cap-badge">${m.score}</div>` : '';
    }
    return '';
  }

  function countToHm(n) {
    if (!n) return '';
    if (n === 1) return 'hm-low';
    if (n === 2) return 'hm-med';
    if (n <= 4) return 'hm-high';
    return 'hm-crit';
  }

  function countAppsForCap(capId) {
    return cache.capabilityApplications.filter(m => m.capabilityId === capId).length;
  }
  function countEolAppsForCap(capId) {
    const eolAppIds = new Set(cache.applications.filter(a => a.eolDate).map(a => a.id));
    return cache.capabilityApplications
      .filter(m => m.capabilityId === capId && eolAppIds.has(m.applicationId)).length;
  }
  function capCounts(arr, field) {
    return arr.reduce((acc, x) => { acc[x[field]] = (acc[x[field]] || 0) + 1; return acc; }, {});
  }

  // ----- detail panel -----
  function openDetail(capId) {
    const cap = cache.capabilities.find(c => c.id === capId);
    const apps = cache.capabilityApplications
      .filter(m => m.capabilityId === capId)
      .map(m => cache.applications.find(a => a.id === m.applicationId))
      .filter(Boolean);

    const proj = cache.projectCapabilities
      .filter(pc => pc.capabilityId === capId)
      .map(pc => ({ ...pc, project: cache.projects.find(p => p.id === pc.projectId) }))
      .filter(x => x.project);

    const mat = cache.capabilityMaturity.find(m => m.capabilityId === capId);

    window.atlasUI.openPanel({
      eyebrow: cap.domain,
      title: cap.title,
      body: `
        <div class="detail-prose">${escape(cap.description || '')}</div>

        ${mat ? `<div class="detail-section">
          <div class="detail-section-label">Maturity</div>
          <div class="tag-row"><span class="tag" style="background:var(--m-${mat.score}); color:${mat.score===3?'#4a3500':(mat.score===5?'#1f3a00':'white')}">Score ${mat.score} · ${maturityLabel(mat.score)}</span></div>
        </div>` : ''}

        <div class="detail-section">
          <div class="detail-section-label">Applications (${apps.length})</div>
          ${apps.length ? `<ul class="linked-list">
            ${apps.map(a => `<li>
              <span>${a.title}</span>
              <span class="meta">${a.vendor || ''} ${a.eolDate ? `· EOL ${escape(a.eolDate)}` : ''}</span>
            </li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No applications mapped yet.</div>`}
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Projects (${proj.length})</div>
          ${proj.length ? `<ul class="linked-list">
            ${proj.map(p => `<li>
              <span>${p.project.title}</span>
              <span class="meta">${p.impactType}</span>
            </li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No projects linked yet.</div>`}
        </div>
      `
    });
  }

  function maturityLabel(s) {
    return ['', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimizing'][s] || '';
  }

  function escape(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.bcm_struct      = { render: h => render(h, 'bcm') };
  window.atlasViews.bcm_application = { render: h => render(h, 'application') };
  window.atlasViews.bcm_eol         = { render: h => render(h, 'eol') };
  window.atlasViews.bcm_maturity    = { render: h => render(h, 'maturity') };
})();
