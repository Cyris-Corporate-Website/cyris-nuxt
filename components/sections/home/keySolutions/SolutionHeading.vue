<template>
  <div class="flex items-center space-x-6 group">
    <h4 class="text-gray-400 text-md hover:text-black cursor-pointer">
      <slot />
    </h4>
    <img
      class="text-gray-400 hidden group-hover:inline-block"
      src="@/assets/images/home/icons/arrow.svg"
      alt=""
    />
  </div>
</template>
<script setup></script>
