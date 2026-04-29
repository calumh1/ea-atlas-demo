/* =========================================================
   ATLAS · Strategies view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  async function render(host) {
    const { enterpriseStrategies, strategicInitiatives } = await window.atlasData.loadAll();
    const sorted = [...enterpriseStrategies].sort((a, b) => a.sortOrder - b.sortOrder);

    host.innerHTML = `
      <div class="strategy-grid">
        ${sorted.map(s => strategyCard(s, strategicInitiatives)).join('')}
      </div>
    `;
  }

  function strategyCard(s, initiatives) {
    const inits = initiatives
      .filter(i => i.parentStrategyId === s.id)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    return `
      <div class="strategy-card" style="--s-colour:${esc(s.colour)}">
        <div class="strategy-card-accent"></div>
        <div class="strategy-card-body">
          <div class="strategy-card-head">
            <div class="strategy-title">${esc(s.title)}</div>
            <div class="strategy-badges">
              ${s.owner ? `<span class="s-badge">${esc(s.owner)}</span>` : ''}
              <span class="s-badge s-badge--status">${esc(s.status)}</span>
            </div>
          </div>
          <p class="strategy-desc">${esc(s.description)}</p>
          ${inits.length ? `
            <div class="strategy-initiatives">
              <div class="strategy-init-label">Initiatives</div>
              ${inits.map(i => initiativeRow(i)).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function initiativeRow(i) {
    return `
      <div class="initiative-item">
        <div class="initiative-head">
          <div class="initiative-title">${esc(i.title)}</div>
          <div class="initiative-badges">
            ${i.owner ? `<span class="s-badge">${esc(i.owner)}</span>` : ''}
            ${i.targetDate ? `<span class="s-badge">Target: ${esc(i.targetDate)}</span>` : ''}
            <span class="s-badge s-badge--status">${esc(i.status)}</span>
          </div>
        </div>
        ${i.targetOutcome ? `<p class="initiative-outcome">${esc(i.targetOutcome)}</p>` : ''}
      </div>
    `;
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  window.atlasViews.strategies = { render };
})();
