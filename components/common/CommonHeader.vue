<template>
  <nav class="w-full flex justify-between items-center text-white">
    <div class="flex justify-between items-center space-x-8">
      <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
      <common-nav-link>Services</common-nav-link>
      <common-nav-link>Platform</common-nav-link>
      <common-nav-link>Company</common-nav-link>
      <common-nav-link>Developers</common-nav-link>
    </div>
    <div class="flex justify-between items-center space-x-6">
      <common-nav-link>Log in</common-nav-link>
      <NuxtLink to="/contact-us">
        <base-button>Contact us</base-button>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup></script>
