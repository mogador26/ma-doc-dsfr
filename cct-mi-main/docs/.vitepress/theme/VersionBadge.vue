
<script setup>
const version = process.env.VITE_APP_VERSION || 'inconnue';
</script>

<template>
  <span class="fr-badge fr-badge--sm fr-badge--blue-ecume">
    version : {{ version }}
  </span>
</template>
