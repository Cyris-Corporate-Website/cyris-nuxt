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
      <div class="relative">
        <ball-container />
        <div class="flex justify-center">
          <div class="text-center absolute top-16" style="max-width: 390px">
            <h2 class="text-md">
              Still not sure if Cyris is the right fit for you?
            </h2>
            <p class="font-body text-xs text-text-55 pt-3.5 pb-6">
              Start innovating your payments with us<br />
              Speak to our experts in your region and we'll get you informed,
              up, and running, quickly and easily.
            </p>
            <BaseButton variant="ghost">
              <div class="flex justify-center items-center space-x-2">
                <img src="@/assets/images/home/icons/sandbox.svg" alt="" />
                <p>Contact us</p>
              </div>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BallContainer from './BallContainer.vue'
import StaticStepper from './StaticStepper.vue'
</script>
