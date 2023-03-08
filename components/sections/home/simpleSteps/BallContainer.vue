<template>
  <div class="relative">
    <div class="flex">
      <ball-video class="w-full h-full" />
      <div
      class="hidden sm:block rounded-r-3xl"
        style="
          width: 100%;
          background: #12183c 0% 0% no-repeat padding-box;
          opacity: 1;
          backdrop-filter: blur(48px);
          -webkit-backdrop-filter: blur(48px);
        "
      >
      </div>
    </div>
    <div class="flex justify-center">
      <div class="text-center absolute top-16" style="max-width: 390px">
        <h2 class="text-md">
          Still not sure if Cyris is the right fit for you?
        </h2>
        <p class="font-body text-xs text-text-55 pt-3.5 pb-6">
          Start innovating your payments with us<br />
          Speak to our experts in your region and we'll get you informed, up,
          and running, quickly and easily.
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
</template>
<script setup>
import BallVideo from './BallVideo.vue'
</script>
