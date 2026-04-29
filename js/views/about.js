/* =========================================================
   ATLAS · About / Home view
   ========================================================= */
(function () {
  window.atlasViews = window.atlasViews || {};

  function render(host) {
    host.innerHTML = `
      <div class="about-hero">
        <h1 class="about-title">EA ATLAS</h1>
        <p class="about-tagline">Architecture, Technology Landscapes and Solutions</p>
        <p class="about-intro">
          EA ATLAS is Liberty Utilities' Enterprise Architecture tool. It provides a single,
          authoritative view of the organisation's business strategies and capabilities,
          application landscape, technology standards, roadmaps, and how they interact.
        </p>
        <p class="about-intro">
          Its purpose is to give architects, technology leaders, and business stakeholders
          a shared picture of where we are and where we're going to make informed decisions
          that drive business outcomes.
        </p>
      </div>

      <div class="about-sections">

        <div class="about-card">
          <div class="about-card-accent" style="background:#7C4DFF"></div>
          <div class="about-card-body">
            <div class="about-card-title">Strategies</div>
            <p class="about-card-desc">
              Liberty's enterprise strategies and the initiatives that deliver them.
              Understand the top-level strategic priorities — cost reduction, customer
              experience, and regulatory outcomes — and how lower-level initiatives
              are aligned to each.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#05CFFF"></div>
          <div class="about-card-body">
            <div class="about-card-title">Business Architecture</div>
            <p class="about-card-desc">
              The Liberty Business Capability Model — 14 domains and 56 capabilities
              spanning core and supporting functions. Switch between views to see
              application coverage, end-of-life risk, and capability maturity scores
              overlaid on the same structure.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#71E023"></div>
          <div class="about-card-body">
            <div class="about-card-title">Application Architecture</div>
            <p class="about-card-desc">
              The application inventory — 19 systems across EA tiers 1 to 4. Filter
              by tier, lifecycle status, or EOL flag. Each record captures vendor,
              ownership, deployment type, and attestation status, forming the basis
              for rationalisation and investment decisions.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#FF9100"></div>
          <div class="about-card-body">
            <div class="about-card-title">Technology Architecture</div>
            <p class="about-card-desc">
              The Liberty IT Taxonomy — 16 segments, 72 services, and 157 technology
              standards. Browse the spatial taxonomy to understand how technologies
              are organised, or review the tech debt landscape to identify risks
              from ageing or declining-lifecycle components.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#FF3880"></div>
          <div class="about-card-body">
            <div class="about-card-title">Solutions</div>
            <p class="about-card-desc">
              The project portfolio and delivery roadmap. Track active and planned
              initiatives by status, programme, and timeline. The roadmap view
              shows quarterly delivery across projects, with capability impact and
              end-of-life markers to surface dependencies and sequencing risks.
            </p>
          </div>
        </div>

      </div>

      <div class="about-footer-note">
        EA ATLAS is a Liberty Utilities Enterprise Architecture tool.
        Data is currently embedded; the platform is designed to migrate to
        SharePoint Lists as the live data source.
      </div>
    `;
  }

  window.atlasViews.about = { render };
})();
