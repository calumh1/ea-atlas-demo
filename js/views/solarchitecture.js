/* =========================================================
   ATLAS · Solution Architecture coverage heatmap
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    host.innerHTML = `
      <div id="sa-stats" class="stats-bar"></div>
      <div class="taxonomy-board" id="sa-board"></div>
    `;

    renderStats();
    renderBoard();
  }

  function renderStats() {
    const svcs   = cache.taxonomyServices;
    const linked = svcs.filter(s => s.SolutionArchitectureURL).length;
    document.getElementById('sa-stats').innerHTML = [
      ['Services',       svcs.length,              ''],
      ['With document',  linked,                    ''],
      ['Missing',        svcs.length - linked,      ''],
    ].map(([l, v, s]) => `<div class="stat-card">
      <div class="stat-label">${l}</div>
      <div class="stat-value">${v}</div>
      <div class="stat-sub">${s || '&nbsp;'}</div>
    </div>`).join('');
  }

  function renderBoard() {
    const board    = document.getElementById('sa-board');
    const segs     = cache.taxonomySegments.slice().sort((a, b) => a.SortOrder - b.SortOrder);
    const services = cache.taxonomyServices;

    const groupedByHint = {
      'full-width-top': [], 'app-row': [], 'main-left-tall': [],
      'main-center': [], 'main-right-tall': [], 'infra-row': [], 'full-width-bottom': []
    };
    segs.forEach(s => groupedByHint[s.LayoutHint]?.push(s));

    const slugSeg = (title) => title
      .replace(/Segment$/i, '').trim().toLowerCase()
      .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const segHtml = (seg) => {
      const svcs = services.filter(s => s.Segment === seg.Title)
                           .sort((a, b) => a.SortOrder - b.SortOrder);
      return `
        <div class="tax-segment tax-segment--${slugSeg(seg.Title)}">
          <div class="tax-segment-title">${seg.Title.replace(/ Segment$/, '')}</div>
          <div class="tax-services">
            ${svcs.map(svc => {
              const url = svc.SolutionArchitectureURL;
              return `<button class="tax-service tax-service--${url ? 'linked' : 'unlinked'}"
                              data-url="${esc(url || '')}">
                        ${esc(svc.Title)}
                      </button>`;
            }).join('')}
          </div>
        </div>`;
    };

    board.innerHTML = `
      ${groupedByHint['full-width-top'].map(s => `<div class="layout-full-width-top">${segHtml(s)}</div>`).join('')}

      <div style="grid-column: 1 / -1; grid-row: 2">
        <div class="tax-row-stack tax-app-row">
          ${groupedByHint['app-row'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      <div style="grid-column: 1 / -1; grid-row: 3">
        <div class="tax-mid-row">
          ${groupedByHint['main-left-tall'].map(s => segHtml(s)).join('')}
          ${groupedByHint['main-center'].map(s => segHtml(s)).join('')}
          ${groupedByHint['main-right-tall'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      <div style="grid-column: 1 / -1; grid-row: 4">
        <div class="tax-row-stack tax-infra-row">
          ${groupedByHint['infra-row'].map(s => segHtml(s)).join('')}
        </div>
      </div>

      ${groupedByHint['full-width-bottom'].map(s => `<div class="layout-full-width-bottom">${segHtml(s)}</div>`).join('')}
    `;

    board.querySelectorAll('.tax-service--linked').forEach(el => {
      el.onclick = () => window.open(el.dataset.url, '_blank');
    });
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.solarchitecture = { render };
})();
