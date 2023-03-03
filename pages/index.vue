<template>
  <layout >
    <!-- bg-home -->
    <home-layout class="bg-home bg-no-repeat ">
      <landing></landing>
    </home-layout>
    <!-- section-8 -->
    <home-layout>
      <Footer />
    </home-layout>
  </layout>
</template>
<script setup>
import layout from '@/layouts/layout.vue'
import homeLayout from '@/layouts/homeLayout.vue'
import Footer from '@/components/shared/Footer.vue'
import Landing from '@/components/sections/home/Landing.vue'
</script>
