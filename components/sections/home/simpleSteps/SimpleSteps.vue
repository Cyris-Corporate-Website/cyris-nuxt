<template>
  <div class="flex justify-center items-center" style="height: 1128px">
    <div>
      <div class="my-0 mx-auto" style="max-width: 870px">
        <div>
          <h2 class="text-center text-lg text-gray-600">
            Start innovating your payments with us.<br />
            Follow the
            <span class="text-jade-100 font-bold">3 simple</span> and<br />
            revolutionize your business
          </h2>
          <div class="my-12">
            <StaticStepper />
          </div>
        </div>
      </div>
      <ball-container class="sm:min-w-[1140px]" />
    </div>
  </div>
</template>
<script setup>
import BallContainer from './BallContainer.vue'
import StaticStepper from './StaticStepper.vue'
</script>
