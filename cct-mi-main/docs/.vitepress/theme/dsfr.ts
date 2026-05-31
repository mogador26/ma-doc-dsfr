import type { App } from "vue";
import Badges from "./Badges.vue";
import PdfThemeBadge from "./PdfThemeBadge.vue";
import VersionBadge from "./VersionBadge.vue";

// VueDsfr (portage Vue 3 du DSFR)
// Objectif : pouvoir utiliser directement les composants DSFR dans les pages VitePress
// (ex: <DsfrCallout />, <DsfrAlert />, <DsfrButton />, etc.).
import VueDsfr from "@gouvminint/vue-dsfr";

import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/utility.min.css";
import "@gouvminint/vue-dsfr/styles";

export function setupDsfr(app: App) {
  // Enregistre les composants VueDsfr globalement.
  // NOTE : côté bundle, ce n'est pas la solution la plus fine (on embarque beaucoup),
  // mais pour un site de documentation c'est généralement un compromis acceptable.
  app.use(VueDsfr);

  app.component("Badges", Badges);
  app.component("PdfThemeBadge", PdfThemeBadge);
  app.component("VersionBadge", VersionBadge);

  // DSFR JS manipule le DOM : éviter l'import côté SSR.
  if (!import.meta.env.SSR) {
    import("@gouvfr/dsfr/dist/dsfr.module.min.js");
  }
}
