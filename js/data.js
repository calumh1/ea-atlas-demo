/* =========================================================
   ATLAS · data layer
   =========================================================
   SOURCE SWITCH
   -------------
   To flip all data reads from local files to SharePoint REST,
   change the single line at the bottom of this file:

     window.atlasData = build('local');      ← current
     window.atlasData = build('sharepoint'); ← after migration

   No changes to any view file are needed — the API surface
   (getData / loadAll / named accessors) stays identical.

   Local source: populated by data/*.js files loaded before
   this script. Each file writes to window.atlasData:
     window.atlasData.applications = [ ... ];

   SharePoint source: implement fetchEntity() below, then
   flip the switch. Auth is transparent — runs in the user's
   authenticated SharePoint browser session; no tokens needed.
   ========================================================= */

(function () {

  /* ---- local implementation ---- */

  // Snapshot raw arrays written by data/*.js before we overwrite
  // the property names with getter functions.
  const raw = (function () {
    const d = window.atlasData || {};
    return {
      domains:               d.domains               || [],
      capabilities:          d.capabilities          || [],
      capabilityApplications:d.capabilityApplications|| [],
      capabilityMaturity:    d.capabilityMaturity    || [],
      applications:          d.applications          || [],
      taxonomySegments:      d.taxonomySegments      || [],
      taxonomyServices:      d.taxonomyServices      || [],
      technologies:          d.technologies          || [],
      projects:              d.projects              || [],
      projectCapabilities:   d.projectCapabilities   || [],
      projectApplications:   d.projectApplications   || [],
      techDebt:              d.techDebt              || [],
      enterpriseStrategies:  d.enterpriseStrategies  || [],
      strategicInitiatives:  d.strategicInitiatives  || [],
    };
  }());

  function buildLocal() {
    return {
      source: 'local files',

      getData(entity) {
        return Promise.resolve(raw[entity] || []);
      },

      domains()               { return this.getData('domains'); },
      capabilities()          { return this.getData('capabilities'); },
      capabilityApplications(){ return this.getData('capabilityApplications'); },
      capabilityMaturity()    { return this.getData('capabilityMaturity'); },
      applications()          { return this.getData('applications'); },
      taxonomySegments()      { return this.getData('taxonomySegments'); },
      taxonomyServices()      { return this.getData('taxonomyServices'); },
      technologies()          { return this.getData('technologies'); },
      projects()              { return this.getData('projects'); },
      projectCapabilities()   { return this.getData('projectCapabilities'); },
      projectApplications()   { return this.getData('projectApplications'); },
      techDebt()              { return this.getData('techDebt'); },
      enterpriseStrategies()  { return this.getData('enterpriseStrategies'); },
      strategicInitiatives()  { return this.getData('strategicInitiatives'); },

      async loadAll() {
        const keys = [
          'domains','capabilities','capabilityApplications','capabilityMaturity',
          'applications','taxonomySegments','taxonomyServices','technologies',
          'projects','projectCapabilities','projectApplications','techDebt',
          'enterpriseStrategies','strategicInitiatives'
        ];
        const vals = await Promise.all(keys.map(k => this.getData(k)));
        return Object.fromEntries(keys.map((k, i) => [k, vals[i]]));
      }
    };
  }

  /* ---- SharePoint implementation (future) ----------------
     Replace the body of buildSharePoint() with fetch() calls.
     Same method signatures and return shapes as buildLocal().
     Lookup columns need $expand; auth is the browser session.

     Example:
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
       }
  --------------------------------------------------------- */
  function buildSharePoint() {
    return {
      source: 'sharepoint',
      getData()      { throw new Error('SharePoint fetch not yet implemented'); },
      loadAll()      { throw new Error('SharePoint fetch not yet implemented'); },
    };
  }

  function build(source) {
    return source === 'sharepoint' ? buildSharePoint() : buildLocal();
  }

  // ← SINGLE SOURCE SWITCH — change 'local' to 'sharepoint' to migrate
  window.atlasData = build('local');

}());
