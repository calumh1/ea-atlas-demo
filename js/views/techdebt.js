/* =========================================================
   ATLAS · Tech Debt view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;
  let state = { kind: 'all', sort: 'risk', search: '' };

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
          <select id="debt-sort">
            <option value="risk">Sort: combined risk</option>
            <option value="itRisk">Sort: IT risk</option>
            <option value="businessRisk">Sort: Business risk</option>
            <option value="dateLogged">Sort: Date logged</option>
          </select>
        </div>
      </div>

      <div class="stub-banner">
        <strong>Stub data.</strong> Tech debt records below are mock entries derived from declining-lifecycle technologies and EOL applications. The schema (item, kind, source, capability, IT risk, business risk, date logged, status) is the target shape — the SharePoint backing list will follow this structure.
      </div>

      <div id="debt-stats" class="stats-bar"></div>

      <div class="debt-grid" id="debt-grid"></div>
    `;

    host.querySelector('#debt-search').oninput = e => { state.search = e.target.value.toLowerCase(); paint(); };
    host.querySelector('#debt-sort').onchange = e => { state.sort = e.target.value; paint(); };
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
      if (state.sort === 'risk')        return combinedRisk(b) - combinedRisk(a);
      if (state.sort === 'itRisk')      return (b.itRisk || 0) - (a.itRisk || 0);
      if (state.sort === 'businessRisk') return (b.businessRisk || 0) - (a.businessRisk || 0);
      if (state.sort === 'dateLogged')  return (b.dateLogged || '').localeCompare(a.dateLogged || '');
      return 0;
    });

    const grid = document.getElementById('debt-grid');
    grid.innerHTML = rows.map(x => `
      <div class="debt-card kind-${x.kind}" data-id="${x.id}">
        <div class="debt-card-head">
          <div>
            <div class="debt-card-title">${esc(x.title)}</div>
            <div class="debt-card-source">${esc(x.sourceType)} · ${esc(x.source)}</div>
          </div>
          <span class="pill ${pillForStatus(x.status)}">${esc(x.status)}</span>
        </div>
        <div style="font-size:12.5px;color:var(--ink-2)">${esc(x.description)}</div>
        <div class="debt-card-meta">
          <span><span class="debt-score ${riskClass(x.itRisk)}">${x.itRisk}</span><br>IT risk</span>
          <span><span class="debt-score ${riskClass(x.businessRisk)}">${x.businessRisk}</span><br>Biz risk</span>
          <span style="margin-left:auto;text-align:right">
            <span style="color:var(--ink)">${esc(x.capability)}</span><br>
            ${esc(x.dateLogged)}
          </span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.debt-card').forEach(card => {
      card.onclick = () => openDetail(parseInt(card.dataset.id, 10));
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

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.techdebt = { render };
})();
