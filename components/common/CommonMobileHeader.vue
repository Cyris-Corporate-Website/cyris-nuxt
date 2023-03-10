<template>
  <nav class="w-full z-30">
    <div class="flex justify-between items-center w-full text-white">
      <common-logo class="mr-5" />
      <div class="relative cursor-pointer" @click="isVisible = !isVisible">
        <img src="@/assets/images/home/icons/hamburger.svg" alt="" />
      </div>
    </div>
    <div
      v-show="isVisible"
      class="absolute top-0 left-0 bg-white text-gray-600 rounded-b-[15px] min-h-[515px] min-w-full z-50"
    >
      <div class="flex flex-col justify-between">
        <div class="px-4 flex justify-between items-center w-full">
          <common-logo class="mr-5" />
          <img src="@/assets/images/home/icons/>-black.svg" alt="" />
        </div>
        <div>
          <common-nav-link class="px-6 flex justify-between items-center">
            <h2>Services</h2>
            <img src="@/assets/images/home/icons/>-black.svg" alt=""
          /></common-nav-link>
          <common-nav-link class="px-6 flex justify-between items-center">
            <h2>Platform</h2>
            <img
              src="@/assets/images/home/icons/>-black.svg"
              alt="" /></common-nav-link
          ><common-nav-link class="px-6 flex justify-between items-center">
            <h2>Company</h2>
            <img
              src="@/assets/images/home/icons/>-black.svg"
              alt="" /></common-nav-link
          ><common-nav-link class="px-6 flex justify-between items-center">
            <h2>Developers</h2>
            <img src="@/assets/images/home/icons/>-black.svg" alt=""
          /></common-nav-link>
        </div>
        <div class="flex justify-center text-center">
          <div>
            <hr class="w-96" />
            <base-button class="mb-3.5 mt-4">Contact us</base-button>
            <h2>Login</h2>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const isVisible = false
</script>
