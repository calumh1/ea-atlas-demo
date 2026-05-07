# ATLAS — Claude Code Instructions

## Who you're working with

This is the demo copy of EA ATLAS using fictional CanTor Utilities data (EPRI BCM, fictional apps, projects, and strategies). It is used as a portfolio demonstration piece.

Treat him as a senior technical peer. Don't explain basic IT, cloud, or architecture concepts. Be direct and candid — skip preamble and filler. Prose over bullets in conversation. Honest assessments, including when something is a bad idea. Production-quality code with minimal comments, no over-commenting obvious things. When suggesting design decisions, give a recommendation with reasoning, not a list of options with no opinion.

## What ATLAS is

A custom enterprise architecture tool. The acronym is **A**rchitecture, **T**echnology, **L**andscape & **S**trategy. Demo copy using fictional CanTor Utilities data. Same palette throughout (purple `#7C4DFF`, cyan `#05CFFF`, green `#71E023`, plus yellow/orange/pink), three-colour gradient bar, dark `#080808` header.

## Project structure

```
ea_atlas/
├── index.html              # App shell — load order matters
├── css/styles.css          # All styles. CanTor/ATLAS tokens at top.
├── assets/ea_atlas_logo.png
├── data/                   # One file per entity — edit these when changing data
│   ├── domains.js
│   ├── capabilities.js
│   ├── applications.js
│   ├── taxonomy.js
│   ├── technologies.js
│   ├── projects.js
│   ├── tech-debt.js
│   └── strategies.js
├── js/
│   ├── app.js              # Two-tier nav router + atlasUI panel helper
│   ├── data.js             # Data layer contract — views talk only to this
│   └── views/              # One file per view, each self-registers
│       ├── bcm.js          # BCM heatmap viewer (4 modes)
│       ├── applications.js # Application registry table
│       ├── taxonomy.js     # Spatial CanTor IT Taxonomy v1.0
│       ├── techdebt.js     # Tech Debt landscape (mock)
│       ├── projects.js     # Project portfolio table
│       └── roadmap.js      # Quarterly timeline
└── README.md
```

No build step, no bundler, no npm. Plain HTML + vanilla JS + script tags. `file://` works — double-clicking `index.html` runs it. Don't introduce React, Vite, Webpack, TypeScript, or a build pipeline at this stage. The future stack (FastAPI + React, Azure SQL, Bicep) is for **after** SharePoint Lists hit their limits, not now.

## The architecture contract

Three globals, set in this order by `index.html`:

```
window.atlasData    ← from js/data.js (data layer)
window.atlasViews   ← each view file registers itself onto this
window.atlasUI      ← from js/app.js (shared panel helper)
```

**Views never touch the `data/` files directly.** They only call methods on `window.atlasData`. This is the contract that lets us swap to SharePoint without changing any view. If you find yourself reading `window.atlasData.capabilities` directly from a view, stop — use `loadAll()` or a dedicated method instead.

The data layer methods all return Promises (today they wrap `Promise.resolve(...)`):

```js
atlasData.domains()
atlasData.capabilities()
atlasData.applications()
atlasData.capabilityApplications()
atlasData.capabilityMaturity()
atlasData.taxonomySegments()
atlasData.taxonomyServices()
atlasData.technologies()
atlasData.projects()
atlasData.projectCapabilities()
atlasData.projectApplications()
atlasData.techDebt()
atlasData.loadAll()           // Promise<{ everything keyed by name }>
```

Most views call `loadAll()` once and cache the result. Don't change that pattern unless there's a reason.

The shared detail panel:

```js
atlasUI.openPanel({ eyebrow, title, body });   // body is HTML string
atlasUI.closePanel();
```

Escape user-visible strings before injecting. Each view has its own local `esc()` — keep doing that, don't centralise.

### Adding a new view

1. Create `js/views/yourview.js`.
2. End with `window.atlasViews.yourview = { render };` where `render(host)` paints into a passed-in element.
3. Add a `<script src="js/views/yourview.js">` to `index.html` before `app.js`.
4. Register the route in `app.js`'s `NAV` array under the right primary group.

### Adding a new entity

The flow is: extend the SharePoint schema (in `liberty_ea_sharepoint_lists.xlsx` if it lives there, otherwise note the addition), add a method to `atlasData` in `js/data.js`, add the data to the relevant file in `data/`. **Both halves move together** — adding to `data/` without adding to the contract leaves views unable to reach it; adding the contract without data breaks `loadAll()`.

## Branding rules — non-negotiable

- Gradient bar: 3 colours only — `linear-gradient(90deg, #7C4DFF, #05CFFF, #71E023)`. Don't add yellow/orange/pink to it.
- Full palette available if needed: `#7C4DFF` purple, `#05CFFF` cyan, `#71E023` green, `#FEDD00` yellow, `#FF9100` orange, `#FF3880` pink.
- Header background: `#080808`.
- Primary accent for interactive elements: `#7C4DFF`.
- Logo: `assets/ea_atlas_logo.png`. Use it directly in HTML; SVG approximation only if you genuinely can't reach the file.
- Heatmap fills go grey → green → yellow → amber → pink (low to critical), see `--hm-*` tokens.
- Maturity 1–5 fills: pink → orange → yellow → cyan → green, see `--m-*` tokens.

All branding tokens live as CSS variables at the top of `styles.css`. Use them; don't hardcode hex values inside view HTML.

## Data state — what's real vs mock

**Real, sourced from `data/` files:**
- 14 domains, 57 capabilities (descriptions, sort orders, core/supporting flags)
- 19 applications (vendor, type, EA tier, owners, lifecycle, EOL flag, attestation)
- 16 taxonomy segments with `LayoutHint` driving the spatial layout
- 72 services
- 157 technologies (lifecycle, descriptions, strategy alignment, URLs)

**Mock — to be replaced as Calum supplies real data:**
- 41 capability ↔ application mappings — Calum will supply a `CapabilityApplications` file matching the SharePoint schema. When that arrives, replace the inline list in `data/applications.js` (or whichever file holds mappings). Don't leave both.
- 56 capability maturity scores — random per-domain profile, seeded.
- 12 projects: 8 from Calum's inline plan + 4 invented (Win11 migration, Intune co-management, GitHub Enterprise, Sentinel One completion) to give the roadmap density. The 4 invented ones are flagged in the source — when real project data lands, drop them.
- 32 project ↔ capability mappings, 5 project ↔ application mappings.
- 17 tech debt items derived from declining-lifecycle technologies.

When Calum says "I have the file", confirm the columns match the SharePoint schema before swapping anything in.

## SharePoint Lists migration

Eventual destination. Schemas are in `liberty_ea_sharepoint_lists.xlsx` from the parent project. Lists: Domains, Capabilities, Applications, CapabilityApplications, CapabilityMaturity, TaxonomySegments, TaxonomyServices, Technologies, Projects, ProjectCapabilities, ProjectApplications.

**TaxonomyServices schema addition (not yet in XLSX):** Add `Description` column — single line of text, optional. All 72 service records in `data/taxonomy.js` are populated. When provisioning the SharePoint list, add this column before importing.

ImpactType enum: Enables, Enhances, Retires, Depends On.
RelationshipType enum: Replaces, Upgrades, Decommissions, Implements.

The migration is a single-file change — replace `js/data.js` with a fetch-based implementation. Same method names, same return shapes. Pattern:

```js
window.atlasData = {
  source: 'sharepoint',
  domains() {
    return fetch("/_api/web/lists/getbytitle('Domains')/items"
      + "?$select=Id,Title,DomainType,SortOrder,Description"
      + "&$orderby=SortOrder",
      { headers: { Accept: 'application/json;odata=nometadata' }})
      .then(r => r.json())
      .then(j => j.value.map(x => ({
        id: x.Id, title: x.Title, type: x.DomainType,
        sortOrder: x.SortOrder, description: x.Description
      })));
  },
  // ...same shape for every other method
  loadAll() { /* Promise.all of the above */ }
};
```

Lookup columns need `$expand=` plus the right `$select` syntax (e.g. `$expand=Capability,Application&$select=...,Capability/Title,Application/Title`). Auth is transparent — runs in the user's authenticated SharePoint browser session, no tokens.

The footer reflects `atlasData.source`, so flipping it from `'embedded'` to `'sharepoint'` shows the live source.

**Don't touch any view file during the migration.** If something breaks during the swap, the bug is in the data layer.

## Heads-up: SharePoint `Projects` schema is leaner than the prototype

The SharePoint list has Title, Status, StartDate, EndDate, Budget, Description. The prototype's project records also carry programme, priority, executiveSponsor, projectOwner, opexImpact, roi, totalCpex, comments, carryingOver. When you provision the real list, either extend the schema or accept those fields will be empty until then. Don't strip them from the prototype to match — they're useful.

## Coding conventions

- Vanilla JS, ES2020. No TypeScript.
- Naming: camelCase JS, kebab-case CSS classes, snake_case if you ever touch Python (you shouldn't here).
- No build step. If a feature needs a build step, that's a sign to push back.
- Each view file is a single IIFE that registers itself. Keep it that way — no module imports.
- HTML for UI lives inside the JS as template literals. That's the deal we made.
- Escape user-visible strings (`esc()` helper exists in each view).
- Don't introduce a CSS framework. Existing tokens in `styles.css` cover everything — add tokens, don't import Tailwind/Bootstrap/etc.
- Don't introduce a charting library either. Recharts/Chart.js are not loaded; the roadmap is hand-rolled CSS grid for a reason.

## Verifying changes

Two ways:

1. **Visual check.** Open `index.html` in a browser, click through the views, watch the console for errors. This is the right default for most edits.
2. **Headless smoke test.** When making non-trivial changes, run a quick Playwright pass that opens each view and checks for JS errors. The pattern that worked previously: start a local `python -m http.server`, then a Playwright script that visits each view and asserts no `pageerror` events. Don't add this as a permanent CI step yet — it's heavier than this prototype warrants.

If you make a change to a view, click through that view AND at least one other. Cross-view bugs are easy to introduce because the views share the data cache.

## Outstanding work

In rough priority order:

- **Real CapabilityApplications data swap** when Calum supplies the file. Verify schema match, replace the inline mock, remove or shrink the mock-data banner in any affected views.
- **5-field Technology record completion.** The Technology entity already has Description, StrategyAlignment, ConfigStandardsURL, SolutionArchitectureURL — but most rows have only Description filled in. As Calum populates the source, the taxonomy detail panel will get richer with no code changes.
- **SharePoint REST data layer** — replace `js/data.js`, set `source: 'sharepoint'`. The most consequential change you'll make.
- **CRUD on SharePoint data.** The prototype is read-only. POST/PATCH support in the data layer comes after the read swap is stable.
- **Roadmap polish** — once real `ProjectCapabilities` data exists, the capability swim mode will surface naturally. The mock-layout banner can come off then.

When Calum asks for something else, treat the above as background, not a queue. He'll set the priority.

## What not to do

- Don't add a build step.
- Don't suggest React/Vue/Svelte at this stage.
- Don't reach for a CSS framework.
- Don't quietly drop CanTor branding for "cleaner" defaults.
- Don't leave both mock and real data in the same `data/` file. When real arrives, the mock goes.
- Don't cite "best practice" without reasoning that applies to this specific situation. Calum knows the practices; he wants the judgement call.
- Don't ask permission for small things — make a reasonable assumption, state it inline, move on.
