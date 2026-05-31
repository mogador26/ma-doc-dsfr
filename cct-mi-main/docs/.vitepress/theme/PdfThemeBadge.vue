<script setup lang="ts">
import { useRoute } from "vitepress";

const route = useRoute();

const THEMES: Record<string, { pdf: string; label: string }> = {
  "presentation-generale": { pdf: "presentation-generale.pdf", label: "Présentation générale" },
  "guide-integration": { pdf: "guide-integration.pdf", label: "Guide d’intégration" },
  "produit-reference": { pdf: "produit-reference.pdf", label: "Produit de référence" },
  "strategie-api": { pdf: "strategie-api.pdf", label: "Stratégie d’API" },
  "circulation-donnee": { pdf: "circulation-donnee.pdf", label: "Circulation de la donnée" },
  "hebergement": { pdf: "hebergement.pdf", label: "Hébergement" }
};

function themeKeyFromPath(p: string) {
  const parts = p.split("/").filter(Boolean);
  return parts[0] || "";
}

const key = themeKeyFromPath(route.path);
const info = THEMES[key];
</script>

<template>
  <p v-if="info" class="fr-mb-2w">
    <a class="fr-tag fr-tag--sm" :href="`/pdf/${info.pdf}`" download>
      Télécharger le PDF — {{ info.label }}
    </a>
  </p>
</template>
