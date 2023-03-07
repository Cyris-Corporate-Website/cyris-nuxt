<template>
  <div class="grid grid-cols-12 h-full w-full">
    <div class="col-span-4 bg-gray-600 flex items-center justify-center">
      <CommonLogo />
    </div>
    <div class="col-span-8 flex flex-col p-8 items-start justify-center">
      <h3>Let's get to know each other.</h3>
      <div class="grid grid-cols-2 gap-4">
        <BaseInput label="First name" />
        <BaseInput label="Last name" />
        <BaseInput label="Email address" />
        <BaseInput label="Company" />
      </div>
      <div class="flex">
        <span
          >I accept Cyris’s Privacy Policy and agree to receive promotional
          messages from Cyris about its products and services. You can
          unsubscribe at any time by clicking on the link at the bottom of our
          emails.</span
        >
      </div>
      <div>Captcha</div>
        <BaseButton>Submit</BaseButton>
    </div>
  </div>
</template>
<script setup>
import Button from '~~/components/base/BaseButton.vue'
</script>
