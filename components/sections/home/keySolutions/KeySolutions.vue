<template>
  <div class="text-gray-600 pt-36 pb-40">
    <h2 class="text-center mb-24 text-2xl">
      Here are the <span class="text-jade-100 font-bold">key solutions</span
      ><br />
      that Cyris provides to its partners
    </h2>
    <SolutionsContainer class="hidden sm:block" />
    <SolutionsContainerMobile class="sm:hidden" />
  </div>
</template>
<script setup>
import SolutionsContainer from './SolutionsContainer.vue'
import SolutionsContainerMobile from './SolutionsContainerMobile.vue'
</script>
