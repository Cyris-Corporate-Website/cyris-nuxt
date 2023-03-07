<template>
  <div class="pt-12 pb-36">
    <div class="mb-36">
      <h4 class="text-md text-center mb-6">Trusted partners</h4>
      <partners />
    </div>
    <div class="flex justify-between items-center">
      <img
        width="453px"
        height="282px"
        src="@/assets/images/home/payment.png"
        alt=""
      />
      <div class="space-y-5">
        <h2 class="text-xxl">
          Legacy payment<br />
          solutions are slow,<br />
          rigid, and lack fraud<br />
          controls.
        </h2>

        <p class="text-sm font-body text-text-55 mt-5">
          With our extensive expertise in modernising<br />
          traditional payment systems, and our platform's<br />
          supreme flexibility, data-richness, and scalability,<br />
          we digitise complex systems, rapidly and smoothly.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Partners from '@/components/sections/home/components/Partners.vue'
</script>
