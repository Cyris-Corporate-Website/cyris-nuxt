<template>
  <div class="relative">
    <div class="max-w-[555px] max-h-[600px]">
      <img :src="`/assets/images/home/${imgName}`" alt="" />
    </div>
    <div class="absolute bottom-0 mx-12 space-y-6">
      <h6 class="text-white font-body text-xs">
        {{ description }}
      </h6>
      <BaseButton class="hidden sm:block" variant="ghost"
        >Learn more</BaseButton
      >
      <Common-Read-More class="sm:hidden" text="Learn More" color="text-white" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['description', 'imgName'])
</script>
