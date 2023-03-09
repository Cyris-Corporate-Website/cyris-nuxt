<template>
  <div class="flex justify-center">
    <div class="text-gray-600 space-y-4 max-w-[600px]">
      <img
        class="hidden sm:block"
        src="@/assets/images/home/static-stepper.png"
        alt=""
      />
      <div
        class="flex flex-col content-center sm:flex-row justify-between py-12 sm:py-0 text-center items-center font-body text-links font-normal relative min-h-[700px]"
      >
        <div class="relative">
          <img width="68px" src="@/assets/images/home/1.svg" alt="" />
          <p class="max-w-[12rem] absolute mt-2">
            Fill up the contact form and get access
          </p>
        </div>
        <div class="relative">
          <img width="68px" src="@/assets/images/home/2.svg" alt="" />
          <p class="max-w-[12rem] absolute mt-2">
            Explore our extended API documentation
          </p>
          <div
            class="rotate-90 sm:rotate-0 border-b-2 border-text-40 absolute w-56 top-80 -left-15 sm:left-16 sm:top-8"
          ></div>
          <div
            class="rotate-90 sm:rotate-0 border-b-2 border-text-40 absolute sm:w-52 w-56 bottom-60 -left-15 sm:-left-[205px] sm:top-8"
          ></div>
        </div>
        <div class="relative">
          <img width="68px" src="@/assets/images/home/3.svg" alt="" />
          <p class="max-w-[12rem] absolute mt-2">
            Get access to Sand BOX testing environment
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
