<template>
  <video-container class="relative">
    <landing class="absolute top-0 z-50 px-10 sm:px-0" />
  </video-container>
  <section-container class="bg-bgTrustedPartners bg-cover bg-no-repeat px-10 sm:px-0">
    <trusted-partners />
  </section-container>
  <section-container class="bg-bgKeySolutions bg-cover bg-no-repeat px-10 sm:px-0">
    <key-solutions />
  </section-container>
  <section-container class="bg-bgDevFriendly bg-cover bg-no-repeat px-10 sm:px-0">
    <dev-friendly />
  </section-container>
  <section-container class="bg-bgTopChoice bg-cover bg-no-repeat px-10 sm:px-0">
    <top-choice />
  </section-container>
  <section-container class="bg-bgCompleteSuite bg-cover bg-no-repeat px-10 sm:px-0">
    <suite-of-services />
  </section-container>
  <section-container class="bg-bg3steps bg-cover bg-no-repeat px-10 sm:px-0">
    <simple-steps />
  </section-container>
</template>

<script setup>
import Landing from '@/components/sections/home/Landing/Landing.vue'
import TrustedPartners from '@/components/sections/home/TrustedPartners.vue'
import DevFriendly from '@/components/sections/home/DevFriendly.vue'
import TopChoice from '@/components/sections/home/TopChoice.vue'
import SuiteOfServices from '@/components/sections/home/SuiteOfServices/SuiteOfServices.vue'
import SimpleSteps from '@/components/sections/home/simpleSteps/SimpleSteps.vue'
import KeySolutions from '@/components/sections/home/keySolutions/KeySolutions.vue'
import sectionContainer from '@/components/sections/sectionContainer.vue'
import videoContainer from '@/components/sections/videoContainer.vue'
</script>
