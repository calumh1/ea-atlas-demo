/* =========================================================
   ATLAS · Technology Taxonomy view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;
  let state = { search: '', selectedSvc: null };

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    host.innerHTML = `
      <div class="view-header">
        <div class="toolbar">
          <input type="search" id="tax-search" placeholder="Search services or technologies…" style="min-width:260px">
        </div>
      </div>

      <div id="tax-stats" class="stats-bar"></div>

      <div class="taxonomy-board" id="tax-board"></div>
    `;

    renderStats();
    renderBoard();

    host.querySelector('#tax-search').oninput = e => {
      state.search = e.target.value.toLowerCase();
      renderBoard();
    };
  }

  function renderStats() {
    const t = cache.technologies;
    const pending  = t.filter(x => x.LifecycleStatus === 'Pending').length;
    const decline  = t.filter(x => x.LifecycleStatus === 'Declining').length;
    const emerging = t.filter(x => x.LifecycleStatus === 'Emerging').length;
    const core     = t.filter(x => x.LifecycleStatus === 'Core').length;
    document.getElementById('tax-stats').innerHTML = [
      ['Services', cache.taxonomyServices.length, ''],
      ['Core', core, ''],
      ['Emerging', emerging, ''],
      ['Declining or Pending', decline + pending, `${decline} declining · ${pending} pending`],
    ].map(([l, v, s]) => `<div class="stat-card">
      <div class="stat-label">${l}</div>
      <div class="stat-value">${v}</div>
      <div class="stat-sub">${s || '&nbsp;'}</div>
    </div>`).join('');
  }

  function renderBoard() {
    const board = document.getElementById('tax-board');
    const segs = cache.taxonomySegments.slice().sort((a, b) => a.SortOrder - b.SortOrder);
    const services = cache.taxonomyServices;

    // We render fragments by LayoutHint into the right grid area.
    // top, app row, main left/center/right, infra row, bottom
    const groupedByHint = {
      'full-width-top':    [],
      'app-row':           [],
      'main-left-tall':    [],
      'main-center':       [],
      'main-right-tall':   [],
      'infra-row':         [],
      'full-width-bottom': []
    };
    segs.forEach(s => groupedByHint[s.LayoutHint]?.push(s));

    const segHtml = (seg) => {
      const svcs = services.filter(s => s.Segment === seg.Title)
                           .sort((a, b) => a.SortOrder - b.SortOrder);
      return `
        <div class="tax-segment">
          <div class="tax-segment-title">${seg.Title.replace(/ Segment$/, '')}</div>
          <div class="tax-services">
            ${svcs.map(svc => serviceTile(svc)).join('')}
          </div>
        </div>`;
    };

    board.innerHTML = `
      ${groupedByHint['full-width-top'].map(s => `<div class="layout-full-width-top">${segHtml(s)}</div>`).join('')}

      <div class="layout-app-row" style="grid-column: 1 / -1">
        <div class="tax-row-stack tax-app-row">
          ${groupedByHint['app-row'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      ${groupedByHint['main-left-tall'].map(s => `<div class="layout-main-left-tall">${segHtml(s)}</div>`).join('')}

      <div class="layout-main-center">
        <div class="tax-center-stack">
          ${groupedByHint['main-center'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      ${groupedByHint['main-right-tall'].map(s => `<div class="layout-main-right-tall">${segHtml(s)}</div>`).join('')}

      <div class="layout-infra-row" style="grid-column: 1 / -1">
        <div class="tax-row-stack tax-infra-row">
          ${groupedByHint['infra-row'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      ${groupedByHint['full-width-bottom'].map(s => `<div class="layout-full-width-bottom">${segHtml(s)}</div>`).join('')}
    `;

    board.querySelectorAll('.tax-service').forEach(el => {
      el.onclick = () => openServicePanel(el.dataset.svc);
    });
  }

  function serviceTile(svc) {
    const techs = cache.technologies.filter(t => t.Service === svc.Title);
    const count = techs.length;
    const q = state.search;
    const hit = q && (
      svc.Title.toLowerCase().includes(q) ||
      techs.some(t => (t.Title || '').toLowerCase().includes(q) ||
                      (t.Description || '').toLowerCase().includes(q))
    );
    return `<button class="tax-service ${hit ? 'search-hit' : ''}" data-svc="${esc(svc.Title)}">
              ${esc(svc.Title)}
              ${count ? `<span class="tax-service-count">${count}</span>` : ''}
            </button>`;
  }

  function openServicePanel(svcTitle) {
    const techs = cache.technologies.filter(t => t.Service === svcTitle);

    const body = techs.length ? `
      <div class="detail-section">
        <div class="detail-section-label">${techs.length} ${techs.length === 1 ? 'standard' : 'standards'}</div>
        <ul class="linked-list">
          ${techs.map(t => `<li style="flex-direction:column;align-items:flex-start;gap:6px">
            <div style="display:flex;justify-content:space-between;width:100%;align-items:center;gap:8px">
              <strong>${esc(t.Title)}</strong>
              <span class="pill ${lcClass(t.LifecycleStatus)}">${esc(t.LifecycleStatus)}</span>
            </div>
            ${t.Description ? `<div class="meta" style="color:var(--ink-2);font-size:12.5px">${esc(t.Description)}</div>` : ''}
            ${t.StrategyAlignment ? `<div class="meta" style="color:var(--ink-3);font-size:12px"><strong>Strategy:</strong> ${esc(t.StrategyAlignment)}</div>` : ''}
            ${t.ConfigStandardsURL || t.SolutionArchitectureURL ? `<div class="tag-row" style="margin-top:4px">
              ${t.ConfigStandardsURL ? `<a href="${esc(t.ConfigStandardsURL)}" target="_blank" class="tag">Config standards ↗</a>` : ''}
              ${t.SolutionArchitectureURL ? `<a href="${esc(t.SolutionArchitectureURL)}" target="_blank" class="tag">Solution architecture ↗</a>` : ''}
            </div>` : ''}
          </li>`).join('')}
        </ul>
      </div>
    ` : `<div class="detail-prose" style="color:var(--ink-3)">No technologies recorded for this service yet.</div>`;

    window.atlasUI.openPanel({
      eyebrow: 'Service',
      title: svcTitle,
      body
    });
  }

  function lcClass(s) {
    return ({
      'Core': 'lc-core',
      'Emerging': 'lc-emerging',
      'Declining': 'lc-declining',
      'Special Use': 'lc-special',
      'Not Permitted': 'lc-not',
      'Pending': 'lc-pending'
    })[s] || '';
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.taxonomy = { render };
})();
