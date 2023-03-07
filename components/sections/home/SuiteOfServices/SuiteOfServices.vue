<template>
  <div
    class="flex justify-center text-white"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1632px;
    "
  >
    <div class="grid grid-cols-2 items-center gap-32">
      <div class="space-y-12">
        <sub-heading color="white">What makes Cyris different?</sub-heading>
        <h2 class="text-xxl">Complete suite of services</h2>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <SuiteCard text="Direct integrations" />
        <SuiteCard text="24/7 support" />
        <SuiteCard text="Smooth migration" />
        <SuiteCard text="PCI DSS compliant" />
        <SuiteCard text="Maximum uptime" />
        <SuiteCard text="Control in your hands" />
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
import SuiteCard from '@/components/sections/home/SuiteOfServices/SuiteCard.vue'
</script>
