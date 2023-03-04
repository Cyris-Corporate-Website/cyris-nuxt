<template>
  <nav class="w-full flex justify-between items-center">
    <div class="flex justify-between items-center space-x-8">
      <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
      <NavLink class="font-medium">Services</NavLink>
      <NavLink class="font-medium">Platform</NavLink>
      <NavLink class="font-medium">Company</NavLink>
      <NavLink class="font-medium">Developers</NavLink>
    </div>
    <div class="flex justify-between items-center space-x-6">
      <NavLink>Log in</NavLink>
      <NuxtLink to="/contact-us">
        <Button>Contact us</Button>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import NavLink from '@/components/shared/NavLink.vue'
import Button from '~~/components/base/BaseButton.vue'
</script>
