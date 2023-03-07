<template>
  <div class="flex items-center space-x-3 font-body font-semibold cursor-pointer">
    <p>{{ text }}</p>
    <img src="@/assets/images/home/icons/>.svg" alt=">" />
  </div>
</template>
<script setup>
const props = defineProps(['text'])
</script>
