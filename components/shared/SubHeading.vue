<template>
  <div class="flex items-center space-x-2">
    <img src="@/assets/images/home/icons/subHeading.svg" alt="" />
    <h5 :class="textColor[color]"><slot /></h5>
  </div>
</template>
<script setup>
const props = defineProps(['color'])
const textColor= {
  undefined: 'text-black',
  black: 'text-black',
  white: 'text-white',
}
</script>
