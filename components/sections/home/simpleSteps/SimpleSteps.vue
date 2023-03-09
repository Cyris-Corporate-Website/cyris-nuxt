<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col justify-between items-center sm:min-h-[828px] my-12 sm:my-36 sm:py-0"
    >
      <div class="my-0 mx-auto sm:max-w-[870px]">
        <div>
          <h2 class="text-center text-lg text-gray-600">
            Start innovating your payments with us.<br />
            Follow the
            <span class="text-jade-100 font-bold">3 simple</span> and<br />
            revolutionize your business
          </h2>
          <div class="mb-12 sm:my-0">
            <StaticStepper />
          </div>
        </div>
      </div>
      <ball-container class="max-w-[360px] sm:min-w-[1140px]" />
    </div>
  </div>
</template>
<script setup>
import BallContainer from './BallContainer.vue'
import StaticStepper from './StaticStepper.vue'
</script>
