<template>
  <video-container class="relative">
    <landing class="absolute top-0 z-50" />
  </video-container>
  <section-container class="bg-bgTrustedPartners">
    <trusted-partners />
  </section-container>
  <section-container class="bg-bgKeySolutions">
    <key-solutions />
  </section-container>
  <section-container class="bg-bgDevFriendly">
    <dev-friendly />
  </section-container>
  <!--  -->
  <section-container class="bg-bgTopChoice">
    <top-choice />
  </section-container>
  <section-container class="bg-bgCompleteSuite">
    <suite-of-services />
  </section-container>
  <section-container class="bg-bg3steps">
    <simple-steps />
  </section-container>
</template>

<script setup>
import Landing from '@/components/sections/home/Landing.vue'
import TrustedPartners from '@/components/sections/home/TrustedPartners.vue'
import DevFriendly from '@/components/sections/home/DevFriendly.vue'
import TopChoice from '~~/components/sections/home/TopChoice.vue'
import SuiteOfServices from '@/components/sections/home/SuiteOfServices.vue'
import SimpleSteps from '@/components/sections/home/SimpleSteps.vue'
import KeySolutions from '@/components/sections/home/keySolutions/KeySolutions.vue'
import sectionContainer from '@/components/sections/sectionContainer.vue'
import videoContainer from '@/components/sections/videoContainer.vue'
</script>
