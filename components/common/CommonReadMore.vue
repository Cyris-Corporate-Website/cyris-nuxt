<template>
  <div
    class="flex items-center space-x-3 font-body font-semibold cursor-pointer"
    :class="color"
  >
    <p>{{ text && 'Learn more' }}</p>
    <img src="@/assets/images/home/icons/chevron.svg" alt=">" />
  </div>
</template>
<script setup>
const props = defineProps(['text', 'color'])
</script>
