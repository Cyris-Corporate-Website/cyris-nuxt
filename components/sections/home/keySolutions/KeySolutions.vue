<template>
  <div class="text-gray-600 pt-36 pb-40">
    <h2 class="text-center mb-24 text-xxl">
      Here are the <span class="text-jade-100 font-bold">key solutions</span
      ><br />
      that Cyris provides to its partners
    </h2>
    <div class="flex justify-between items-start">
      <div class="space-y-20">
        <sub-heading color="black">Explore Our Solutions</sub-heading>
        <solution-heading>Card Scheme Connectivity</solution-heading>
        <solution-heading>Acquirers’ Processing</solution-heading>
        <solution-heading>Issuers’ Processing</solution-heading>
        <solution-heading>Clearing and Sattlement</solution-heading>
        <solution-heading>Security and compliance</solution-heading>
      </div>
      <div class="relative">
        <img
          class=""
          width="555px"
          height="600px"
          src="@/assets/images/home/Card-Scheme-Connectivity.png"
          alt=""
        />
        <div class="absolute bottom-12 mx-12 space-y-6">
          <h6 class="text-white font-body text-xs">
            Extend your payments reach and streamline costs,<br />
            connect with multiple national and international<br />
            networks, channels and acquirers and authorize<br />
            operations in real time.
          </h6>
          <BaseButton variant="ghost"> Learn more </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
import SolutionHeading from './SolutionHeading.vue'
</script>
