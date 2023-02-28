<template>
  <layout>
    <!-- section-1 -->
    <home-layout class="bg-home bg-no-repeat">
      <section1 />
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
import Section1 from '@/components/parts/HomeSections/Section1.vue'
import Footer from '@/components/parts/Footer.vue'
</script>
