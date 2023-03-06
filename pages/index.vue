<template>
  <!-- bg-home -->
  <section-container class="bg-home bg-no-repeat w-full">
    <landing />
  </section-container>
  <section-container class="bg-gray-600 w-full">
    <trusted-partners />
  </section-container>
  <section-container
    class="bg-gray-250 w-full"
    style="
      background: #ebf0f8 0% 0% no-repeat padding-box;
      border-radius: 50px;
      opacity: 1;
      backdrop-filter: blur(50px);
      -webkit-backdrop-filter: blur(50px);
    "
  >
    <key-solutions />
  </section-container>
  <section-container>
    <!--  -->
  </section-container>
</template>
<script setup>
import Landing from '@/components/sections/home/Landing.vue'
import TrustedPartners from '@/components/sections/home/TrustedPartners.vue'
import KeySolutions from '@/components/sections/home/keySolutions/KeySolutions.vue'
import sectionContainer from '@/components/sections/sectionContainer.vue'
</script>
