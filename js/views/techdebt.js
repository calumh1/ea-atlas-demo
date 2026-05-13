/* =========================================================
   ATLAS · Tech Debt view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;
  let state = { kind: 'all', sort: 'risk', dir: -1, search: '' };

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    host.innerHTML = `
      <div class="view-header">
        <div>
          <h1 class="view-title">Technology Landscape · Debt &amp; Enhancements</h1>
          <p class="view-subtitle">Items surfaced from declining-lifecycle technology, EOL applications, and capability gap reviews</p>
        </div>
        <div class="toolbar">
          <input type="search" id="debt-search" placeholder="Search items, sources, capabilities…" style="min-width:260px">
          <div class="btn-group" id="debt-kind">
            <button class="btn active" data-k="all">All</button>
            <button class="btn" data-k="debt">Debt</button>
            <button class="btn" data-k="enhancement">Enhancements</button>
          </div>
        </div>
      </div>

      <div id="debt-stats" class="stats-bar"></div>

      <div class="data-table-wrap" id="debt-grid"></div>
    `;

    host.querySelector('#debt-search').oninput = e => { state.search = e.target.value.toLowerCase(); paint(); };
    host.querySelectorAll('#debt-kind .btn').forEach(b => {
      b.onclick = () => {
        host.querySelectorAll('#debt-kind .btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.kind = b.dataset.k;
        paint();
      };
    });

    paint();
  }

  function paint() {
    renderStats();
    renderGrid();
  }

  function renderStats() {
    const d = cache.techDebt;
    const debt = d.filter(x => x.kind === 'debt');
    const enh = d.filter(x => x.kind === 'enhancement');
    const high = d.filter(x => combinedRisk(x) >= 7);
    const remed = d.filter(x => x.status === 'In Remediation').length;

    document.getElementById('debt-stats').innerHTML = [
      ['Total items', d.length, ''],
      ['Debt / Enhancements', `${debt.length} / ${enh.length}`, ''],
      ['High risk', high.length, 'combined risk ≥ 7'],
      ['In remediation', remed, ''],
    ].map(([l, v, s]) => `<div class="stat-card">
      <div class="stat-label">${l}</div>
      <div class="stat-value">${v}</div>
      <div class="stat-sub">${s || '&nbsp;'}</div>
    </div>`).join('');
  }

  function combinedRisk(x) { return (x.itRisk || 0) + (x.businessRisk || 0); }

  function renderGrid() {
    let rows = cache.techDebt.slice();
    if (state.kind !== 'all') rows = rows.filter(x => x.kind === state.kind);
    if (state.search) {
      const q = state.search;
      rows = rows.filter(x =>
        x.title.toLowerCase().includes(q) ||
        (x.source || '').toLowerCase().includes(q) ||
        (x.capability || '').toLowerCase().includes(q) ||
        (x.description || '').toLowerCase().includes(q));
    }

    rows.sort((a, b) => {
      const av = state.sort === 'risk' ? combinedRisk(a) : a[state.sort];
      const bv = state.sort === 'risk' ? combinedRisk(b) : b[state.sort];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number') return (av - bv) * state.dir;
      return String(av).localeCompare(String(bv)) * state.dir;
    });

    const sc = k => state.sort === k ? (state.dir === 1 ? 'sort-asc' : 'sort-desc') : '';

    const grid = document.getElementById('debt-grid');
    grid.innerHTML = `
      <table class="data-table">
        <thead>
          <tr>
            <th data-sort="title" class="${sc('title')}">Item</th>
            <th data-sort="kind" class="${sc('kind')}">Type</th>
            <th data-sort="source" class="${sc('source')}">Source</th>
            <th data-sort="capability" class="${sc('capability')}">Capability</th>
            <th data-sort="itRisk" class="${sc('itRisk')}" style="text-align:center">IT</th>
            <th data-sort="businessRisk" class="${sc('businessRisk')}" style="text-align:center">Biz</th>
            <th data-sort="risk" class="${sc('risk')}" style="text-align:center">Combined</th>
            <th data-sort="status" class="${sc('status')}">Status</th>
            <th data-sort="dateLogged" class="${sc('dateLogged')}">Logged</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(x => `
            <tr data-id="${x.id}">
              <td style="font-weight:600;max-width:260px">${esc(x.title)}</td>
              <td><span style="font-size:11.5px;font-weight:500;color:${x.kind === 'debt' ? 'var(--cantor-pink)' : 'var(--cantor-cyan)'}">${x.kind === 'debt' ? 'Debt' : 'Enhancement'}</span></td>
              <td style="color:var(--ink-2)">${esc(x.sourceType)} · ${esc(x.source)}</td>
              <td style="color:var(--ink-2)">${esc(x.capability)}</td>
              <td style="text-align:center"><span class="debt-score ${riskClass(x.itRisk)}">${x.itRisk}</span></td>
              <td style="text-align:center"><span class="debt-score ${riskClass(x.businessRisk)}">${x.businessRisk}</span></td>
              <td style="text-align:center"><span class="debt-score ${riskClass(Math.ceil(combinedRisk(x) / 2))}">${combinedRisk(x)}</span></td>
              <td><span class="pill ${pillForStatus(x.status)}">${esc(x.status)}</span></td>
              <td style="color:var(--ink-3);white-space:nowrap">${esc(x.dateLogged)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    grid.querySelectorAll('thead th[data-sort]').forEach(th => {
      th.onclick = () => {
        const s = th.dataset.sort;
        if (state.sort === s) state.dir *= -1;
        else { state.sort = s; state.dir = 1; }
        paint();
      };
    });

    grid.querySelectorAll('tbody tr').forEach(row => {
      row.onclick = () => openDetail(parseInt(row.dataset.id, 10));
    });
  }

  function riskClass(n) {
    if (n >= 4) return 's-high';
    if (n >= 3) return 's-med';
    return 's-low';
  }

  function pillForStatus(s) {
    if (s === 'Active')         return 'st-inflight';
    if (s === 'In Remediation') return 'st-proposed';
    if (s === 'Planned')        return 'st-onhold';
    if (s === 'On Hold')        return 'st-withdrawn';
    return 'st-completed';
  }

  function openDetail(id) {
    const x = cache.techDebt.find(d => d.id === id);

    const tech = x.technologyTitle
      ? cache.technologies.find(t => t.Title === x.technologyTitle)
      : null;
    const app = x.applicationId
      ? cache.applications.find(a => a.id === x.applicationId)
      : null;

    const linkedSection = (tech || app) ? `
      <div class="detail-section">
        <div class="detail-section-label">Linked ${tech ? 'technology' : 'application'}</div>
        ${tech ? `
          <div class="detail-prose">
            <strong>${esc(tech.Title)}</strong> <span style="color:var(--ink-3)">· ${esc(tech.Service)}</span><br>
            <span class="pill lc-${lcClass(tech.LifecycleStatus)}" style="margin:6px 0;display:inline-block">${esc(tech.LifecycleStatus)}</span>
            ${tech.StrategyAlignment ? `<br><span style="color:var(--ink-2);font-size:12.5px">${esc(tech.StrategyAlignment)}</span>` : ''}
          </div>` : ''}
        ${app ? `
          <div class="detail-prose">
            <strong>${esc(app.title)}</strong> <span style="color:var(--ink-3)">· ${esc(app.vendor || '')}</span><br>
            <span class="pill tier-${app.eaTier}" style="margin:6px 0;display:inline-block">Tier ${app.eaTier}</span>
            <span class="pill lc-${lcClass(app.lifecycleStatus)}" style="margin:6px 0 6px 4px;display:inline-block">${esc(app.lifecycleStatus)}</span>
          </div>` : ''}
      </div>` : '';

    window.atlasUI.openPanel({
      eyebrow: `${x.kind === 'debt' ? 'Tech debt' : 'Enhancement'} · ${x.sourceType}`,
      title: x.title,
      body: `
        <div class="tag-row" style="margin-bottom:12px">
          <span class="pill ${pillForStatus(x.status)}">${esc(x.status)}</span>
          <span class="tag">Source: ${esc(x.source)}</span>
          <span class="tag">${esc(x.capability)}</span>
        </div>
        <div class="detail-prose">${esc(x.description)}</div>

        ${linkedSection}

        <div class="detail-section">
          <div class="detail-section-label">Risk scoring</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="stat-card" style="box-shadow:none">
              <div class="stat-label">IT risk</div>
              <div class="stat-value ${riskClass(x.itRisk)}">${x.itRisk} / 5</div>
            </div>
            <div class="stat-card" style="box-shadow:none">
              <div class="stat-label">Business risk</div>
              <div class="stat-value ${riskClass(x.businessRisk)}">${x.businessRisk} / 5</div>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Logged</div>
          <div class="detail-prose">${esc(x.dateLogged)}</div>
        </div>
      `
    });
  }

  function lcClass(s) {
    if (!s) return 'pending';
    const l = s.toLowerCase();
    if (l === 'core')        return 'core';
    if (l === 'emerging')    return 'emerging';
    if (l === 'declining')   return 'declining';
    if (l === 'special use') return 'special';
    if (l === 'not permitted') return 'not';
    return 'pending';
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.techdebt = { render };
})();
