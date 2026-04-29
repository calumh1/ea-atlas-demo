/* =========================================================
   ATLAS · Applications view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let state = { sort: 'title', dir: 1, filterTier: '', filterStatus: '', search: '' };
  let cache = null;

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    host.innerHTML = `
      <div class="view-header">
        <div class="toolbar">
          <input type="search" id="app-search" placeholder="Search applications, vendors…">
          <select id="app-tier">
            <option value="">All EA tiers</option>
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
            <option value="4">Tier 4</option>
          </select>
          <select id="app-status">
            <option value="">All lifecycle statuses</option>
            <option value="In Use">In Use</option>
            <option value="Build">Build</option>
            <option value="Retire">Retire</option>
          </select>
        </div>
      </div>
      <div id="app-stats" class="stats-bar"></div>
      <div class="data-table-wrap">
        <table class="data-table" id="app-table">
          <thead>
            <tr>
              <th data-sort="title">Application</th>
              <th data-sort="vendor">Vendor</th>
              <th data-sort="applicationType">Type</th>
              <th data-sort="eaTier">EA Tier</th>
              <th data-sort="userBase">Users</th>
              <th data-sort="lifecycleStatus">Lifecycle</th>
              <th data-sort="eolDate">EOL</th>
              <th data-sort="businessOwner">Business Owner</th>
              <th data-sort="enterpriseRegional">Scope</th>
              <th>Capabilities</th>
            </tr>
          </thead>
          <tbody id="app-tbody"></tbody>
        </table>
      </div>
    `;

    host.querySelector('#app-search').oninput = e => { state.search = e.target.value.toLowerCase(); paint(); };
    host.querySelector('#app-tier').onchange = e => { state.filterTier = e.target.value; paint(); };
    host.querySelector('#app-status').onchange = e => { state.filterStatus = e.target.value; paint(); };
    host.querySelectorAll('[data-sort]').forEach(th => {
      th.onclick = () => {
        const s = th.dataset.sort;
        if (state.sort === s) state.dir *= -1;
        else { state.sort = s; state.dir = 1; }
        paint();
      };
    });

    paint();
  }

  function paint() {
    renderStats();
    renderRows();
  }

  function renderStats() {
    const apps = cache.applications;
    const tier1 = apps.filter(a => a.eaTier === 1).length;
    const eol = apps.filter(a => a.eolDate).length;
    const saas = apps.filter(a => a.applicationType === 'SaaS').length;
    const onPrem = apps.filter(a => a.applicationType === 'On Premise').length;
    document.getElementById('app-stats').innerHTML = [
      ['Total applications', apps.length, ''],
      ['Tier 1', tier1, 'EA-critical'],
      ['SaaS / On-prem', `${saas} / ${onPrem}`, 'deployment mix'],
      ['With EOL flag', eol, 'on the roadmap'],
    ].map(([l, v, s]) => `
      <div class="stat-card">
        <div class="stat-label">${l}</div>
        <div class="stat-value">${v}</div>
        <div class="stat-sub">${s || '&nbsp;'}</div>
      </div>`).join('');
  }

  function renderRows() {
    const tbody = document.getElementById('app-tbody');
    let rows = cache.applications.slice();

    if (state.filterTier)   rows = rows.filter(a => String(a.eaTier) === state.filterTier);
    if (state.filterStatus) rows = rows.filter(a => a.lifecycleStatus === state.filterStatus);
    if (state.search) {
      const q = state.search;
      rows = rows.filter(a =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.vendor || '').toLowerCase().includes(q) ||
        (a.description || '').toLowerCase().includes(q));
    }

    rows.sort((a, b) => {
      const av = a[state.sort], bv = b[state.sort];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number') return (av - bv) * state.dir;
      return String(av).localeCompare(String(bv)) * state.dir;
    });

    tbody.innerHTML = rows.map(a => {
      const capCount = cache.capabilityApplications.filter(m => m.applicationId === a.id).length;
      return `
        <tr data-app-id="${a.id}">
          <td><strong>${esc(a.title)}</strong></td>
          <td>${esc(a.vendor || '')}</td>
          <td>${esc(a.applicationType || '')}</td>
          <td><span class="pill tier-${a.eaTier}">Tier ${a.eaTier}</span></td>
          <td>${esc(a.userBase || '')}</td>
          <td><span class="pill ${lifecycleClass(a.lifecycleStatus)}">${esc(a.lifecycleStatus || '')}</span></td>
          <td>${esc(a.eolDate || '')}</td>
          <td>${esc(a.businessOwner || '')}</td>
          <td>${esc(a.enterpriseRegional || '')}</td>
          <td>${capCount || '<span style="color:var(--ink-3)">—</span>'}</td>
        </tr>`;
    }).join('');

    tbody.querySelectorAll('tr').forEach(tr => {
      tr.onclick = () => openDetail(parseInt(tr.dataset.appId, 10));
    });
  }

  function lifecycleClass(s) {
    if (!s) return '';
    const k = s.toLowerCase();
    if (k.includes('use'))    return 'st-inflight';
    if (k.includes('build'))  return 'st-proposed';
    if (k.includes('retire')) return 'st-withdrawn';
    return '';
  }

  function openDetail(appId) {
    const a = cache.applications.find(x => x.id === appId);
    const caps = cache.capabilityApplications
      .filter(m => m.applicationId === appId)
      .map(m => cache.capabilities.find(c => c.id === m.capabilityId))
      .filter(Boolean);

    const projs = cache.projectApplications
      .filter(pa => pa.applicationId === appId)
      .map(pa => ({ ...pa, project: cache.projects.find(p => p.id === pa.projectId) }))
      .filter(x => x.project);

    window.atlasUI.openPanel({
      eyebrow: `${a.vendor || 'Unknown vendor'} · ${a.applicationType || ''}`,
      title: a.title,
      body: `
        <div class="tag-row" style="margin-bottom:10px">
          <span class="pill tier-${a.eaTier}">Tier ${a.eaTier}</span>
          ${a.lifecycleStatus ? `<span class="pill ${lifecycleClass(a.lifecycleStatus)}">${esc(a.lifecycleStatus)}</span>` : ''}
          ${a.attested ? `<span class="tag green">Attested</span>` : `<span class="tag">Not attested</span>`}
          ${a.enterpriseRegional ? `<span class="tag">${esc(a.enterpriseRegional)}</span>` : ''}
        </div>

        <div class="detail-prose">${esc(a.description || '')}</div>

        <div class="detail-section">
          <div class="detail-section-label">Ownership</div>
          <div class="detail-prose">
            Business owner: <strong>${esc(a.businessOwner || '—')}</strong><br>
            IT owner: <strong>${esc(a.itOwner || '—')}</strong><br>
            User base: <strong>${esc(a.userBase || '—')}</strong>
          </div>
        </div>

        ${a.eolDate ? `<div class="detail-section">
          <div class="detail-section-label">End of Life</div>
          <div class="detail-prose"><span class="tag pink">${esc(a.eolDate)}</span></div>
        </div>` : ''}

        <div class="detail-section">
          <div class="detail-section-label">Capabilities (${caps.length})</div>
          ${caps.length ? `<ul class="linked-list">
            ${caps.map(c => `<li><span>${esc(c.title)}</span><span class="meta">${esc(c.domain)}</span></li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No capability mappings yet.</div>`}
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Projects (${projs.length})</div>
          ${projs.length ? `<ul class="linked-list">
            ${projs.map(p => `<li><span>${esc(p.project.title)}</span><span class="meta">${esc(p.relationshipType)}</span></li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No project links yet.</div>`}
        </div>

        ${a.notes ? `<div class="detail-section">
          <div class="detail-section-label">Notes</div>
          <div class="detail-prose" style="white-space:pre-wrap">${esc(a.notes)}</div>
        </div>` : ''}
      `
    });
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.applications = { render };
})();
