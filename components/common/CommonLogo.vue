<template>
  <NuxtLink to="/">
    <img v-if="!dark" src="@/assets/images/logo.svg" />
    <img v-else src="@/assets/images/logo-d.svg" />
  </NuxtLink>
</template>
<script setup>
const props = defineProps(['dark'])
</script>
