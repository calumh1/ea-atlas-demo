/* =========================================================
   ATLAS · Strategies view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  async function render(host) {
    const { enterpriseStrategies, strategicInitiatives, strategyProjects, projects } = await window.atlasData.loadAll();

    const vision  = enterpriseStrategies.find(s => s.parentId == null);
    const pillars = enterpriseStrategies
      .filter(s => s.parentId != null)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    host.innerHTML = `
      ${vision ? visionBanner(vision) : ''}
      <div class="strategy-grid">
        ${pillars.map(s => strategyCard(s, strategicInitiatives, strategyProjects, projects)).join('')}
      </div>
    `;
  }

  function visionBanner(v) {
    return `
      <div class="strategy-vision" style="--s-colour:${esc(v.colour)}">
        <div class="strategy-vision-eyebrow">Strategic Vision</div>
        <div class="strategy-vision-title">${esc(v.title)}</div>
        ${v.description ? `<p class="strategy-vision-desc">${esc(v.description)}</p>` : ''}
      </div>
    `;
  }

  function strategyCard(s, initiatives, strategyProjects, projects) {
    const inits = initiatives
      .filter(i => i.parentStrategyId === s.id)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    const linkedProjects = (strategyProjects || [])
      .filter(sp => sp.strategyId === s.id)
      .map(sp => ({ ...sp, project: (projects || []).find(p => p.id === sp.projectId) }))
      .filter(sp => sp.project);

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
          ${linkedProjects.length ? `
            <div class="strategy-initiatives">
              <div class="strategy-init-label">Delivering Projects</div>
              <ul class="linked-list">
                ${linkedProjects.map(sp => `
                  <li>
                    <span>${esc(sp.project.title)}</span>
                    <span class="meta">${esc(sp.alignmentNote)}</span>
                  </li>`).join('')}
              </ul>
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
