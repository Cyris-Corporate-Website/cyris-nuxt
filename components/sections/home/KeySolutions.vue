<template>
  <div class="mb-40 mt-36 text-gray-600">
    <h1 class="text-center mb-24">
      Here are the <span class="text-jade-100 font-bold">key solutions</span
      ><br />
      that Cyris provides to its partners
    </h1>
    <div class="flex justify-between items-start">
      <div class="space-y-20">
        <sub-heading color="black">Explore Our Solutions</sub-heading>
        <h4>Acquirers’ Processing</h4>
        <h4>Issuers’ Processing</h4>
        <h4>Clearing and Sattlement</h4>
        <h4>Security and compliance</h4>
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
          <h6 class="text-white">
            Extend your payments reach and streamline costs,<br />
            connect with multiple national and international<br />
            networks, channels and acquirers and authorize<br />
            operations in real time.
          </h6>
          <Button variant="ghost"> Learn more </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/shared/SubHeading.vue'
import Button from '~~/components/buttons/Button.vue'
</script>
