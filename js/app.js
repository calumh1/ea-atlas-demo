/* =========================================================
   ATLAS · app shell + router
   ========================================================= */
(function () {
  const NAV = [
    { id: 'home', label: 'Home',
      sections: [
        { id: 'about', label: 'About', view: 'about' }
      ]
    },
    { id: 'strategies', label: 'Strategies',
      sections: [
        { id: 'enterprise-strategies', label: 'Enterprise Strategies', view: 'strategies' }
      ]
    },
    { id: 'business-architecture', label: 'Business Architecture',
      sections: [
        { id: 'bcm_struct',      label: 'Business Capability Model', view: 'bcm_struct' },
        { id: 'bcm_application', label: 'Applications View',         view: 'bcm_application' },
        { id: 'bcm_eol',         label: 'End of Life View',          view: 'bcm_eol' },
        { id: 'bcm_maturity',    label: 'Maturity View',             view: 'bcm_maturity' }
      ]
    },
    { id: 'application-architecture', label: 'Application Architecture',
      sections: [
        { id: 'applications', label: 'Application Inventory', view: 'applications' }
      ]
    },
    { id: 'technology-architecture', label: 'Technology Architecture',
      sections: [
        { id: 'taxonomy',        label: 'Technology Taxonomy',       view: 'taxonomy'        },
        { id: 'standards',       label: 'Standards',                 view: 'standards'       },
        { id: 'solarchitecture', label: 'Solution Architecture',     view: 'solarchitecture' },
        { id: 'configstandards', label: 'Configuration Standards',   view: 'configstandards' },
        { id: 'techdebt',        label: 'Technology Debt',           view: 'techdebt'        }
      ]
    },
    { id: 'transformation', label: 'Solutions',
      sections: [
        { id: 'projects', label: 'Projects', view: 'projects' },
        { id: 'roadmap',  label: 'Roadmap',  view: 'roadmap' }
      ]
    }
  ];

  const state = { primary: 'home', secondary: 'about' };
  const viewEl = document.getElementById('view');

  function render() {
    renderPrimary();
    renderSecondary();
    renderView();
  }

  function renderPrimary() {
    const el = document.getElementById('primary-nav');
    el.innerHTML = '';
    NAV.forEach(group => {
      const btn = document.createElement('button');
      btn.textContent = group.label;
      if (group.id === state.primary) btn.classList.add('active');
      btn.onclick = () => {
        state.primary = group.id;
        state.secondary = group.sections[0].id;
        render();
      };
      el.appendChild(btn);
    });
  }

  function renderSecondary() {
    const el = document.getElementById('secondary-nav');
    el.innerHTML = '';
    const group = NAV.find(g => g.id === state.primary);
    if (group.sections.length <= 1) return;
    group.sections.forEach(sec => {
      const btn = document.createElement('button');
      btn.textContent = sec.label;
      if (sec.id === state.secondary) btn.classList.add('active');
      btn.onclick = () => { state.secondary = sec.id; render(); };
      el.appendChild(btn);
    });
  }

  function renderView() {
    const group = NAV.find(g => g.id === state.primary);
    const sec = group.sections.find(s => s.id === state.secondary);
    const view = window.atlasViews[sec.view];
    viewEl.innerHTML = '';
    view.render(viewEl);
  }

  // Footer source label
  document.getElementById('data-source').textContent = window.atlasData.source;

  // ---------- Shared detail-panel helper ----------
  let panelEl = null, overlayEl = null;
  function ensurePanel() {
    if (panelEl) return;
    overlayEl = document.createElement('div');
    overlayEl.className = 'panel-overlay';
    overlayEl.onclick = closePanel;
    document.body.appendChild(overlayEl);

    panelEl = document.createElement('aside');
    panelEl.className = 'detail-panel';
    panelEl.innerHTML = `
      <button class="detail-panel-close" aria-label="Close">×</button>
      <div class="detail-eyebrow"></div>
      <h2 class="detail-title"></h2>
      <div class="detail-body"></div>
    `;
    panelEl.querySelector('.detail-panel-close').onclick = closePanel;
    document.body.appendChild(panelEl);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePanel();
    });
  }
  function openPanel({ eyebrow = '', title = '', body = '' }) {
    ensurePanel();
    panelEl.querySelector('.detail-eyebrow').textContent = eyebrow;
    panelEl.querySelector('.detail-title').textContent = title;
    panelEl.querySelector('.detail-body').innerHTML = body;
    panelEl.classList.add('open');
    overlayEl.classList.add('open');
  }
  function closePanel() {
    if (panelEl) panelEl.classList.remove('open');
    if (overlayEl) overlayEl.classList.remove('open');
  }
  window.atlasUI = { openPanel, closePanel };

  // Boot
  document.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
})();
