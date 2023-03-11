<template>
  <div class="w-full h-full relative">
    <div class="flex justify-center">
      <CommonHeader class="hidden sm:flex absolute top-11 max-w-layoutWidth" />
      <CommonMobileHeader
        class="sm:hidden fixed top-0 pt-11 max-w-layoutWidth px-3.5"
      />
    </div>
    <slot />
    <div class="flex justify-center bg-bgFooter bg-cover bg-no-repeat">
      <CommonFooter class="sm:max-w-layoutWidth px-3.5 sm:px-0" />
    </div>
  </div>
</template>
<script setup></script>
