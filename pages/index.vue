<template>
  <NuxtLayout :name="layout"  class="bg-home bg-no-repeat w-full">
    <landing />
  </NuxtLayout>
  <NuxtLayout :name="layout"  class="bg-gray-600 w-full">
    <trusted-partners />
  </NuxtLayout>
  <NuxtLayout
    :name="layout" 
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
  </NuxtLayout>
  <NuxtLayout :name="layout" >
    <Footer />
  </NuxtLayout>
</template>
<script setup>
import Footer from '@/components/shared/Footer.vue'
import Landing from '@/components/sections/home/Landing.vue'
import TrustedPartners from '~~/components/sections/home/TrustedPartners.vue'
import KeySolutions from '@/components/sections/home/keySolutions/KeySolutions.vue'

const layout = 'home-layout'
</script>
