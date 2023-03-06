<template>
  <div class="w-full h-full relative">
    <div class="flex justify-center">
      <CommonHeader class="absolute top-11 max-w-layoutWidth" />
    </div>
    <slot />
    <div class="flex justify-center">
      <CommonFooter class="max-w-layoutWidth" />
    </div>
  </div>
</template>
<script setup></script>
