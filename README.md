# ATLAS — Architecture, Technology, Landscape & Strategy

Local prototype. Liberty-branded. No build step, no dependencies, no server required.

## How to run

Double-click `index.html`. It opens in your browser and works entirely offline.

The data layer doesn't use ES modules, so the `file://` protocol works without spinning up a server. If you'd rather serve it (e.g. for testing the SharePoint swap below), `python -m http.server` from this folder works fine.

## What's in here

| Path | Purpose |
|---|---|
| `index.html` | App shell + script load order |
| `css/styles.css` | All styling. Liberty palette + ATLAS branding tokens at the top. |
| `js/app.js` | Two-tier nav router and the shared detail-panel helper (`atlasUI.openPanel`). |
| `js/data.js` | **Data contract.** Every view talks to `window.atlasData` and nothing else. |
| `js/data-embedded.js` | Today's source — JSON literals + mock mappings. |
| `js/views/*.js` | One file per view. Each registers itself onto `window.atlasViews`. |

## Swapping to SharePoint Lists

Replace `js/data.js` with a fetch-based implementation. The contract stays identical:

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
        id: x.Id, title: x.Title,
        type: x.DomainType, sortOrder: x.SortOrder,
        description: x.Description
      })));
  },
  // ... same shape for every other method
  loadAll() { /* Promise.all of the above */ }
};
```

Don't touch any view file. The footer's data-source label is wired to `atlasData.source`, so once you change it to `'sharepoint'` the UI reflects the live data source automatically.

The SharePoint list schemas (column names and types) match `liberty_ea_sharepoint_lists.xlsx`.

## What's mock vs real

**Real data** (sourced from your project JSON files):
- 14 domains, 56 capabilities (with descriptions, sort orders, core/supporting flags)
- 19 applications (vendor, type, EA tier, owners, lifecycle, EOL, attestation)
- 16 taxonomy segments (with `LayoutHint` driving the spatial layout)
- 72 services
- 157 technologies (lifecycle status, descriptions, strategy alignment, URLs)

**Mock data** (illustrative, generated to make the heatmap and roadmap meaningful):
- 41 capability ↔ application mappings — inferred from app descriptions. Ready to be replaced when you supply the `CapabilityApplications` file.
- 56 capability maturity scores — random within a per-domain profile.
- 12 projects — your 8 inline projects plus 4 invented ones (Win11 migration, Intune co-management, GitHub Enterprise, Sentinel One completion) so the roadmap has more density.
- 32 project ↔ capability mappings, 5 project ↔ application mappings.
- 17 tech debt items — derived from declining-lifecycle technologies plus a couple of enhancements.

The SharePoint `Projects` list is leaner than the prototype's project records. The prototype keeps the rich fields (CPEX, OPEX impact, ROI, comments, programme, priority, sponsor, owner, carry-over) because they're useful — when you provision the SharePoint list you'll want to extend the schema to match, or accept that some fields will be empty until then.

## Views

- **Architecture → BCM** — domain grid with four overlay modes: structural, application count, EOL risk, maturity. Click any capability for the detail panel.
- **Technology → Applications** — sortable, filterable application registry.
- **Technology → Technology Taxonomy** — spatial layout driven by segment `LayoutHint`. Click a service for its technology standards.
- **Landscapes → Tech Debt** — filterable card grid with risk scoring (mock layout, real shape).
- **Strategies → Projects** — sortable project table.
- **Strategies → Roadmap** — quarterly timeline. Bars stack within lanes when projects overlap. Programme or capability swim lanes. Today line + EOL markers.

## Caveats

- Mode switcher and panel transitions assume a modern browser. Tested on Chromium.
- The roadmap's EOL markers infer year from the application's `EOLDate` text. When dates are real ISO dates the precision improves automatically.
- All data is read-only in this prototype. Edit operations would go through a SharePoint REST POST in the data layer.
