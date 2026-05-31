<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();

function statusLabel(s?: string) {
  const v = (s || "").toLowerCase();
  if (v === "validé" || v === "valide" || v === "validated") return "Validé";
  if (v === "déprécié" || v === "deprecie" || v === "deprecated") return "Déprécié";
  if (v === "brouillon" || v === "draft") return "Brouillon";
  return s ? s : null;
}

function normLabel(n?: string) {
  const v = (n || "").toUpperCase();
  if (["MUST", "SHOULD", "MAY"].includes(v)) return v;
  return n ? n : null;
}

const status = statusLabel(frontmatter.value?.status);
const norm = normLabel(frontmatter.value?.norm_level);
const tags: string[] = Array.isArray(frontmatter.value?.tags)
  ? frontmatter.value.tags
  : [];

</script>

<template>
  <div class="fr-mb-2w" v-if="status || norm || tags.length">
    <p class="fr-tags-group fr-m-0">
      <span v-if="status" class="fr-tag fr-tag--sm">{{ status }}</span>
      <span v-if="norm" class="fr-tag fr-tag--sm fr-tag--blue-ecume">{{ norm }}</span>
      <span v-for="tag in tags" :key="tag" class="fr-tag fr-tag--sm fr-tag--grey">{{ tag }}</span>
    </p>
  </div>
</template>
