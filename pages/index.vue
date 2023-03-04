<template>
    <home-layout class="bg-home bg-no-repeat h-screen w-full">
      <landing />
    </home-layout>
    <home-layout class="bg-gray-600 h-screen w-full">
      <trusted-partners />
    </home-layout>
    <home-layout
      class="bg-gray-250 h-screen w-full"
      style="
        background: #ebf0f8 0% 0% no-repeat padding-box;
        border-radius: 50px;
        opacity: 1;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
      "
    >
      <key-solutions />
    </home-layout>
    <!-- <home-layout>
      <Footer />
    </home-layout> -->
</template>
<script setup>
import homeLayout from '@/layouts/homeLayout.vue'
import Footer from '@/components/shared/Footer.vue'
import Landing from '@/components/sections/home/Landing.vue'
import TrustedPartners from '@/components/sections/home/TrustedPartners.vue'
import KeySolutions from '@/components/sections/home/KeySolutions.vue'
</script>
