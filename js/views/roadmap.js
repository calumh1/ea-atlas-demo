/* =========================================================
   ATLAS · Roadmap view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;
  let state = { swim: 'program', startYear: 2025, endYear: 2027 };

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    host.innerHTML = `
      <div class="view-header">
        <div>
          <h1 class="view-title">Roadmap</h1>
          <p class="view-subtitle">Quarterly view · projects, capability impact, and end-of-life markers</p>
        </div>
        <div class="toolbar">
          <div class="btn-group" id="rm-swim">
            <button class="btn active" data-s="program">By programme</button>
            <button class="btn" data-s="capability">By capability</button>
          </div>
          <div class="btn-group">
            <button class="btn" id="rm-zoom-in">−</button>
            <button class="btn" id="rm-zoom-out">+</button>
          </div>
        </div>
      </div>

      <div class="stub-banner">
        <strong>Mock layout.</strong> Project–capability and project–application links are illustrative. Once the SharePoint <code>ProjectCapabilities</code> and <code>ProjectApplications</code> lists are populated, this view reads from them directly. EOL markers are pulled from the application registry.
      </div>

      <div class="roadmap-wrap" id="rm-wrap"></div>
    `;

    host.querySelectorAll('#rm-swim .btn').forEach(b => {
      b.onclick = () => {
        host.querySelectorAll('#rm-swim .btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.swim = b.dataset.s;
        paint();
      };
    });
    host.querySelector('#rm-zoom-in').onclick = () => {
      if (state.endYear - state.startYear > 1) state.endYear -= 1;
      paint();
    };
    host.querySelector('#rm-zoom-out').onclick = () => {
      if (state.endYear - state.startYear < 5) state.endYear += 1;
      paint();
    };

    paint();
  }

  function paint() {
    const wrap = document.getElementById('rm-wrap');
    const startQ = state.startYear * 4;
    const endQ = (state.endYear + 1) * 4;
    const cols = endQ - startQ;

    // Build header row of quarters
    const headerCells = [];
    for (let q = 0; q < cols; q++) {
      const yr = state.startYear + Math.floor(q / 4);
      const qq = (q % 4) + 1;
      headerCells.push(`<div class="roadmap-quarter ${qq === 1 ? 'year-start' : ''}">${qq === 1 ? `<strong>${yr}</strong> · ` : ''}Q${qq}</div>`);
    }

    // Build lanes
    const lanes = state.swim === 'program' ? programLanes() : capabilityLanes();
    const laneRowsHtml = lanes.map(lane => {
      const positioned = positionBars(lane.projects);
      const trackCount = positioned.reduce((m, x) => Math.max(m, x.track + 1), 1);
      const rowHeight = Math.max(50, 16 + trackCount * 34);
      const bars = positioned.map(x => barHtml(x.project, startQ, cols, x.track, trackCount)).join('');
      const eols = lane.eols.map(e => eolHtml(e, startQ, cols)).join('');
      return `<div class="roadmap-row" style="min-height:${rowHeight}px">
        <div class="roadmap-row-label" title="${esc(lane.title)}">${esc(lane.label)}</div>
        <div class="roadmap-track" style="min-height:${rowHeight}px">${bars}${eols}</div>
      </div>`;
    }).join('');

    // Today marker
    const today = new Date();
    const todayQ = today.getFullYear() * 4 + Math.floor(today.getMonth() / 3);
    const todayPct = ((todayQ - startQ + (today.getMonth() % 3) / 3) / cols) * 100;
    const todayInRange = todayPct >= 0 && todayPct <= 100;

    wrap.innerHTML = `
      <div class="roadmap-toolbar">
        <span style="color:var(--ink-3)">${state.startYear} → ${state.endYear}</span>
        <span style="color:var(--ink-3);font-size:11.5px">${lanes.length} ${state.swim === 'program' ? 'programmes' : 'capabilities'} · ${lanes.reduce((s, l) => s + l.projects.length, 0)} project bars</span>
      </div>
      <div class="roadmap-grid" style="--rm-cols:${cols}">
        <div class="roadmap-header">
          <div class="roadmap-row-label" style="background:var(--surface-2)">${state.swim === 'program' ? 'Programme' : 'Capability'}</div>
          <div class="roadmap-quarters">${headerCells.join('')}</div>
        </div>
        <div style="display:grid;grid-template-columns:220px 1fr;position:relative">
          <div></div>
          <div style="position:relative">
            ${todayInRange ? `<div class="today-line" style="left:${todayPct}%"></div>` : ''}
          </div>
          <div style="grid-column:1 / -1">${laneRowsHtml}</div>
        </div>
      </div>
    `;

    wrap.querySelectorAll('.roadmap-bar').forEach(b => {
      b.onclick = () => openProjectPanel(parseInt(b.dataset.pid, 10));
    });
  }

  // ---------- lane builders ----------
  function programLanes() {
    const programs = [...new Set(cache.projects.map(p => p.program))].sort();
    return programs.map(prog => {
      const projects = cache.projects.filter(p => p.program === prog);
      const eols = inferEolsForProjects(projects);
      return { label: prog, title: prog, projects, eols };
    });
  }

  function capabilityLanes() {
    // Only include capabilities that have at least one project link
    const linked = new Set(cache.projectCapabilities.map(pc => pc.capabilityId));
    const caps = cache.capabilities
      .filter(c => linked.has(c.id))
      .sort((a, b) => a.domain.localeCompare(b.domain) || a.sortOrder - b.sortOrder);

    return caps.map(c => {
      const projIds = new Set(cache.projectCapabilities.filter(pc => pc.capabilityId === c.id).map(pc => pc.projectId));
      const projects = cache.projects.filter(p => projIds.has(p.id));
      const eols = inferEolsForCapability(c.id);
      return { label: `${c.title}`, title: `${c.domain} · ${c.title}`, projects, eols };
    });
  }

  function inferEolsForProjects(projects) {
    // Pull EOL markers from applications related to this project group
    const projIds = new Set(projects.map(p => p.id));
    const appIds = new Set(
      cache.projectApplications.filter(pa => projIds.has(pa.projectId)).map(pa => pa.applicationId)
    );
    return cache.applications
      .filter(a => appIds.has(a.id) && a.eolDate)
      .map(a => ({ label: a.title, date: parseEolDate(a.eolDate) }))
      .filter(x => x.date);
  }

  function inferEolsForCapability(capId) {
    const appIds = new Set(
      cache.capabilityApplications.filter(m => m.capabilityId === capId).map(m => m.applicationId)
    );
    return cache.applications
      .filter(a => appIds.has(a.id) && a.eolDate)
      .map(a => ({ label: a.title, date: parseEolDate(a.eolDate) }))
      .filter(x => x.date);
  }

  // ---------- bar/eol positioning ----------
  function positionBars(projects) {
    // Greedy track assignment: sort by start, place each bar on the lowest
    // track index that has no time overlap.
    const items = projects.map(p => {
      const s = quarterFromDate(p.startDate);
      const e = quarterFromDate(p.endDate);
      return { project: p, s, e };
    }).filter(x => x.s != null && x.e != null)
      .sort((a, b) => a.s - b.s);

    const trackEnds = []; // last end-quarter on each track
    items.forEach(it => {
      let track = 0;
      while (track < trackEnds.length && trackEnds[track] >= it.s) track++;
      trackEnds[track] = it.e;
      it.track = track;
    });
    return items;
  }

  function barHtml(p, startQ, cols, track, trackCount) {
    const s = quarterFromDate(p.startDate);
    const e = quarterFromDate(p.endDate) + 1; // inclusive end
    if (s == null || e == null) return '';
    const left = clamp(((s - startQ) / cols) * 100);
    const right = clamp(((e - startQ) / cols) * 100);
    if (right <= 0 || left >= 100) return '';

    const tier = (p.priority || '').match(/\d+/)?.[0] || '4';
    const stCls = p.status === 'Withdrawn' ? 'st-withdrawn' : (p.status === 'Proposed' ? 'st-proposed' : '');
    const top = 8 + track * 34;
    return `<div class="roadmap-bar tier-${tier} ${stCls}"
                 data-pid="${p.id}"
                 style="left:${left}%; width:${right - left}%; top:${top}px; transform:none"
                 title="${esc(p.title)} · ${esc(p.startDate)} → ${esc(p.endDate)}">
              ${esc(p.title)}
            </div>`;
  }

  function eolHtml(eol, startQ, cols) {
    const q = quarterFromDate(eol.date);
    if (q == null) return '';
    const left = clamp(((q - startQ) / cols) * 100);
    if (left < 0 || left > 100) return '';
    return `<div class="roadmap-eol" style="left:${left}%" data-label="EOL · ${esc(eol.label)}"></div>`;
  }

  function quarterFromDate(s) {
    if (!s) return null;
    if (s instanceof Date) return s.getFullYear() * 4 + Math.floor(s.getMonth() / 3);
    const m = String(s).match(/(\d{4})-(\d{2})/);
    if (m) return parseInt(m[1], 10) * 4 + Math.floor((parseInt(m[2], 10) - 1) / 3);
    const y = String(s).match(/\b(20\d{2})\b/);
    if (y) return parseInt(y[1], 10) * 4; // Q1 of that year
    return null;
  }

  function parseEolDate(s) {
    if (!s) return null;
    if (/TBD|To Be Determined/i.test(s)) return null;
    const r = String(s).match(/(\d{4})(?:-(\d{4}))?/);
    if (!r) return null;
    return r[1] + '-06-15'; // mid-year assumption when only year is given
  }

  function clamp(n) { return Math.max(0, Math.min(100, n)); }

  // ---------- detail ----------
  function openProjectPanel(pid) {
    // Reuse projects view's detail through atlasViews.projects? It's not exposed.
    // Open a minimal panel here.
    const p = cache.projects.find(x => x.id === pid);
    const caps = cache.projectCapabilities
      .filter(pc => pc.projectId === pid)
      .map(pc => ({ ...pc, capability: cache.capabilities.find(c => c.id === pc.capabilityId) }))
      .filter(x => x.capability);

    window.atlasUI.openPanel({
      eyebrow: `${p.program} · ${p.priority} · ${p.status}`,
      title: p.title,
      body: `
        <div class="detail-prose">${esc(p.description)}</div>

        <div class="detail-section">
          <div class="detail-section-label">Schedule</div>
          <div class="detail-prose">${esc(p.startDate)} → ${esc(p.endDate)}</div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Investment</div>
          <div class="detail-prose">
            CPEX: <strong>${p.totalCpex ? '$' + p.totalCpex.toLocaleString() : '—'}</strong><br>
            OPEX impact: <strong>${esc(p.opexImpact || '—')}</strong>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Capability impact (${caps.length})</div>
          ${caps.length ? `<ul class="linked-list">
            ${caps.map(c => `<li>
              <span>${esc(c.capability.title)} <span class="meta">${esc(c.capability.domain)}</span></span>
              <span class="meta">${esc(c.impactType)}</span>
            </li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No capability impacts mapped.</div>`}
        </div>
      `
    });
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.roadmap = { render };
})();
