<template>
  <div class="flex justify-center sm:block">
    <div class="flex items-center space-x-2 text-sm font-bold">
      <img src="@/assets/images/home/icons/subHeading.svg" alt="" />
      <h3 :class="textColor[color]"><slot /></h3>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['color'])
const textColor = {
  undefined: 'text-gray-600',
  black: 'text-gray-600',
  white: 'text-white',
}
</script>k
