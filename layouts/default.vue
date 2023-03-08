<template>
  <div class="w-full h-full relative">
    <div class="flex justify-center">
      <CommonHeader class="hidden sm:absolute top-11 max-w-layoutWidth" />
      <CommonMobileHeader class="sm:hidden absolute top-11 max-w-layoutWidth px-3.5" />
    </div>
    <slot />
    <div class="flex justify-center bg-bgFooter bg-cover bg-no-repeat">
      <CommonFooter class="max-w-layoutWidth" />
    </div>
  </div>
</template>
<script setup></script>
