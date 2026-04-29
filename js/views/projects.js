/* =========================================================
   ATLAS · Projects view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  let cache = null;
  let state = { sort: 'priority', dir: 1, filterStatus: '', filterProgram: '', search: '' };

  async function render(host) {
    cache = cache || await window.atlasData.loadAll();

    const programs = [...new Set(cache.projects.map(p => p.program))].sort();
    const statuses = [...new Set(cache.projects.map(p => p.status))];

    host.innerHTML = `
      <div class="view-header">
        <div class="toolbar">
          <input type="search" id="proj-search" placeholder="Search projects, sponsors…">
          <select id="proj-status">
            <option value="">All statuses</option>
            ${statuses.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join('')}
          </select>
          <select id="proj-program">
            <option value="">All programmes</option>
            ${programs.map(p => `<option value="${esc(p)}">${esc(p)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div id="proj-stats" class="stats-bar"></div>

      <div class="data-table-wrap">
        <table class="data-table" id="proj-table">
          <thead>
            <tr>
              <th data-sort="title">Project</th>
              <th data-sort="program">Programme</th>
              <th data-sort="priority">Priority</th>
              <th data-sort="status">Status</th>
              <th data-sort="startDate">Start</th>
              <th data-sort="endDate">End</th>
              <th data-sort="totalCpex">CPEX</th>
              <th data-sort="opexImpact">OPEX impact</th>
              <th>Capabilities</th>
            </tr>
          </thead>
          <tbody id="proj-tbody"></tbody>
        </table>
      </div>
    `;

    host.querySelector('#proj-search').oninput = e => { state.search = e.target.value.toLowerCase(); paint(); };
    host.querySelector('#proj-status').onchange = e => { state.filterStatus = e.target.value; paint(); };
    host.querySelector('#proj-program').onchange = e => { state.filterProgram = e.target.value; paint(); };
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
    const p = cache.projects;
    const inflight = p.filter(x => x.status === 'In-Flight').length;
    const proposed = p.filter(x => x.status === 'Proposed').length;
    const totalCpex = p.filter(x => x.status !== 'Withdrawn').reduce((s, x) => s + (x.totalCpex || 0), 0);
    const tier1 = p.filter(x => x.priority === 'Tier 1' && x.status !== 'Withdrawn').length;

    document.getElementById('proj-stats').innerHTML = [
      ['Total projects', p.length, ''],
      ['In-flight / Proposed', `${inflight} / ${proposed}`, ''],
      ['Active Tier 1', tier1, 'excludes withdrawn'],
      ['Funded CPEX', '$' + (totalCpex / 1_000_000).toFixed(2) + 'M', '2026 plan'],
    ].map(([l, v, s]) => `<div class="stat-card">
      <div class="stat-label">${l}</div>
      <div class="stat-value">${v}</div>
      <div class="stat-sub">${s || '&nbsp;'}</div>
    </div>`).join('');
  }

  function renderRows() {
    let rows = cache.projects.slice();
    if (state.filterStatus)  rows = rows.filter(p => p.status === state.filterStatus);
    if (state.filterProgram) rows = rows.filter(p => p.program === state.filterProgram);
    if (state.search) {
      const q = state.search;
      rows = rows.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.executiveSponsor || '').toLowerCase().includes(q) ||
        (p.projectOwner || '').toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q));
    }

    rows.sort((a, b) => {
      const av = a[state.sort], bv = b[state.sort];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number') return (av - bv) * state.dir;
      return String(av).localeCompare(String(bv)) * state.dir;
    });

    const tbody = document.getElementById('proj-tbody');
    tbody.innerHTML = rows.map(p => {
      const capCount = cache.projectCapabilities.filter(pc => pc.projectId === p.id).length;
      return `
        <tr data-pid="${p.id}">
          <td><strong>${esc(p.title)}</strong></td>
          <td>${esc(p.program)}</td>
          <td><span class="pill ${priorityClass(p.priority)}">${esc(p.priority)}</span></td>
          <td><span class="pill ${statusClass(p.status)}">${esc(p.status)}</span></td>
          <td>${esc(p.startDate || '')}</td>
          <td>${esc(p.endDate || '')}</td>
          <td>${p.totalCpex ? '$' + (p.totalCpex / 1000).toFixed(0) + 'K' : '—'}</td>
          <td>${esc(p.opexImpact || '')}</td>
          <td>${capCount || '<span style="color:var(--ink-3)">—</span>'}</td>
        </tr>`;
    }).join('');

    tbody.querySelectorAll('tr').forEach(tr => {
      tr.onclick = () => openDetail(parseInt(tr.dataset.pid, 10));
    });
  }

  function priorityClass(p) {
    if (p === 'Tier 1') return 'tier-1';
    if (p === 'Tier 2') return 'tier-2';
    if (p === 'Tier 3') return 'tier-3';
    return 'tier-4';
  }

  function statusClass(s) {
    if (s === 'In-Flight')  return 'st-inflight';
    if (s === 'Proposed')   return 'st-proposed';
    if (s === 'Withdrawn')  return 'st-withdrawn';
    if (s === 'Completed')  return 'st-completed';
    if (s === 'On Hold')    return 'st-onhold';
    return '';
  }

  function openDetail(pid) {
    const p = cache.projects.find(x => x.id === pid);
    const caps = cache.projectCapabilities
      .filter(pc => pc.projectId === pid)
      .map(pc => ({ ...pc, capability: cache.capabilities.find(c => c.id === pc.capabilityId) }))
      .filter(x => x.capability);
    const apps = cache.projectApplications
      .filter(pa => pa.projectId === pid)
      .map(pa => ({ ...pa, application: cache.applications.find(a => a.id === pa.applicationId) }))
      .filter(x => x.application);

    window.atlasUI.openPanel({
      eyebrow: `${p.program} · ${p.category}`,
      title: p.title,
      body: `
        <div class="tag-row" style="margin-bottom:12px">
          <span class="pill ${priorityClass(p.priority)}">${esc(p.priority)}</span>
          <span class="pill ${statusClass(p.status)}">${esc(p.status)}</span>
          ${p.carryingOver ? `<span class="tag cyan">2025 carry-over</span>` : ''}
        </div>

        <div class="detail-prose">${esc(p.description)}</div>

        <div class="detail-section">
          <div class="detail-section-label">Schedule</div>
          <div class="detail-prose">${esc(p.startDate)} → ${esc(p.endDate)}</div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Investment</div>
          <div class="detail-prose">
            CPEX: <strong>${p.totalCpex ? '$' + p.totalCpex.toLocaleString() : '—'}</strong><br>
            OPEX impact: <strong>${esc(p.opexImpact || '—')}</strong><br>
            Expected ROI: <strong>${esc(p.roi || '—')}</strong>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Sponsorship</div>
          <div class="detail-prose">
            Executive sponsor: <strong>${esc(p.executiveSponsor)}</strong><br>
            Project owner: <strong>${esc(p.projectOwner)}</strong>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Capabilities (${caps.length})</div>
          ${caps.length ? `<ul class="linked-list">
            ${caps.map(c => `<li>
              <span>${esc(c.capability.title)} <span class="meta">${esc(c.capability.domain)}</span></span>
              <span class="meta">${esc(c.impactType)}</span>
            </li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No capability impacts mapped yet.</div>`}
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Applications (${apps.length})</div>
          ${apps.length ? `<ul class="linked-list">
            ${apps.map(a => `<li>
              <span>${esc(a.application.title)}</span>
              <span class="meta">${esc(a.relationshipType)}</span>
            </li>`).join('')}
          </ul>` : `<div class="detail-prose" style="color:var(--ink-3)">No application impacts mapped yet.</div>`}
        </div>

        ${p.comments ? `<div class="detail-section">
          <div class="detail-section-label">Comments</div>
          <div class="detail-prose">${esc(p.comments)}</div>
        </div>` : ''}
      `
    });
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  window.atlasViews.projects = { render };
})();
