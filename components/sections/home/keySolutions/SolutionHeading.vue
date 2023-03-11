<template>
  <div class="flex items-center space-x-6 group">
    <h3
      class="bg-white rounded-[15px] px-6 py-7 sm:bg-none text-gray-400 text-md hover:text-gray-600 cursor-pointer"
    >
      <slot />
    </h3>
    <img
      class="text-gray-400 hidden group-hover:inline-block"
      src="@/assets/images/home/icons/arrow.svg"
      alt=""
    />
  </div>
</template>
<script setup></script>
