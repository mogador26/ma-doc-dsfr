<script setup lang="ts">
import { useData } from "vitepress";

declare const __CCT_VERSION__: string;

const { page } = useData();

function format(ts?: number) {
  if (!ts) return null;
  const d = new Date(ts);
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(d);
}

const last = format(page.value.lastUpdated);
</script>

<template>
  <div class="fr-text--xs fr-mt-6w fr-mb-2w vp-page-meta">
    <div v-if="last">
      Dernière modification :
      <time :datetime="new Date(page.lastUpdated!).toISOString()">{{ last }}</time>
    </div>
    <div class="fr-mt-1w" v-if="__CCT_VERSION__">
      Version {{ __CCT_VERSION__ }}
    </div>
  </div>
</template>

<style scoped>
.vp-page-meta {
  opacity: 0.85;
}
</style>
