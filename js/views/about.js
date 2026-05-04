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
          EA ATLAS is the Liberty Utilities Enterprise Architecture tool. It provides a single,
          authoritative view of the organization's business strategies and capabilities,
          application landscape, technology standards, roadmaps, and how they interact.
        </p>
        <p class="about-intro">
          Its purpose is to give architects, technology leaders, and business stakeholders
          a shared picture of where we are and where we're going, so that they can make
          informed decisions that drive business outcomes.
        </p>
      </div>

      <div class="about-sections">

        <div class="about-card">
          <div class="about-card-accent" style="background:#7C4DFF"></div>
          <div class="about-card-body">
            <div class="about-card-title">Strategies</div>
            <p class="about-card-desc">
              Liberty's enterprise strategies and the initiatives that deliver them.
              These top-level strategic priorities set the direction for change and drive
              priorities. Visibility of these strategies is key to their success — from
              there they can be mapped to the business capabilities, applications,
              technology, and projects that bring them to reality.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#05CFFF"></div>
          <div class="about-card-body">
            <div class="about-card-title">Business Architecture</div>
            <p class="about-card-desc">
              The Liberty Business Capability Model shows what Liberty does — what
              capabilities the business has. This view is mapped to strategies,
              applications, technology, and projects to show where we have duplication,
              where we need to mature to meet our strategies, and what technology
              underpins our core capabilities. These different views enable structured
              planning based on the business priority of developing and maintaining
              key capabilities.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#71E023"></div>
          <div class="about-card-body">
            <div class="about-card-title">Application Architecture</div>
            <p class="about-card-desc">
              The application inventory shows the applications Liberty uses to deliver
              its strategies and capabilities. The list can be filtered by tier,
              lifecycle status, End of Life, or capability. This forms the basis for
              rationalization and investment decisions.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#FF9100"></div>
          <div class="about-card-body">
            <div class="about-card-title">Technology Architecture</div>
            <p class="about-card-desc">
              The Liberty Technology Taxonomy is a structured view of the technology
              that enables our applications — infrastructure, middleware, data services,
              end user computing, and security. This taxonomy can be used to understand
              the standards that apply to our technology, the technical debt landscape,
              risks from ageing or declining-lifecycle components, and to find
              architecture diagrams.
            </p>
          </div>
        </div>

        <div class="about-card">
          <div class="about-card-accent" style="background:#FF3880"></div>
          <div class="about-card-body">
            <div class="about-card-title">Solutions</div>
            <p class="about-card-desc">
              The project portfolio and delivery roadmap — what projects we will execute
              to deliver value aligned with business needs. This can be used to show how
              proposed projects interact with each other, with business strategies and
              capabilities, and with underlying technology. This allows visibility for
              project prioritization and de-risking unforeseen interactions during planning.
            </p>
          </div>
        </div>

      </div>

    `;
  }

  window.atlasViews.about = { render };
})();
