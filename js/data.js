/* =========================================================
   ATLAS · data layer
   ---------------------------------------------------------
   This is the contract every view uses. It wraps the
   embedded source so we can swap to a SharePoint REST
   implementation later without touching any view code.

   To migrate:
     1. Provision the SharePoint Lists per the schema
        in liberty_ea_sharepoint_lists.xlsx.
     2. Replace each method body below with a fetch() call
        of the form:
          fetch("/_api/web/lists/getbytitle('Domains')/items
                 ?$select=Id,Title,DomainType,SortOrder,Description
                 &$orderby=SortOrder",
                { headers: { Accept: 'application/json;odata=nometadata' }})
            .then(r => r.json()).then(j => j.value.map(toModel));
     3. Update window.atlasData.source = 'sharepoint' so the
        footer reflects the live data source.

   The view layer talks only to this object.
   ========================================================= */

(function () {
  const E = window.EmbeddedData;

  const Data = {
    source: 'embedded',

    // Lookups
    domains:                 () => Promise.resolve(E.domains),
    capabilities:            () => Promise.resolve(E.capabilities),
    applications:            () => Promise.resolve(E.applications),
    capabilityApplications:  () => Promise.resolve(E.capabilityApplications),
    capabilityMaturity:      () => Promise.resolve(E.capabilityMaturity),
    taxonomySegments:        () => Promise.resolve(E.taxonomySegments),
    taxonomyServices:        () => Promise.resolve(E.taxonomyServices),
    technologies:            () => Promise.resolve(E.technologies),
    projects:                () => Promise.resolve(E.projects),
    projectCapabilities:     () => Promise.resolve(E.projectCapabilities),
    projectApplications:     () => Promise.resolve(E.projectApplications),
    techDebt:                () => Promise.resolve(E.techDebt),

    // Convenience: bulk load
    async loadAll() {
      const [
        domains, capabilities, applications, capabilityApplications,
        capabilityMaturity, taxonomySegments, taxonomyServices, technologies,
        projects, projectCapabilities, projectApplications, techDebt
      ] = await Promise.all([
        this.domains(), this.capabilities(), this.applications(),
        this.capabilityApplications(), this.capabilityMaturity(),
        this.taxonomySegments(), this.taxonomyServices(), this.technologies(),
        this.projects(), this.projectCapabilities(), this.projectApplications(),
        this.techDebt()
      ]);
      return {
        domains, capabilities, applications, capabilityApplications,
        capabilityMaturity, taxonomySegments, taxonomyServices, technologies,
        projects, projectCapabilities, projectApplications, techDebt
      };
    }
  };

  window.atlasData = Data;
})();
