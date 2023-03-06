<template>
  <nav
    class="w-full flex justify-between items-center fixed top-11 text-white font-body text-xs"
  >
    <div class="flex justify-between items-center space-x-8">
      <NuxtLink to="/"
        ><img src="@/assets/images/logo.svg" alt="logo" class="mr-5"
      /></NuxtLink>
      <NavLink>Services</NavLink>
      <NavLink>Platform</NavLink>
      <NavLink>Company</NavLink>
      <NavLink>Developers</NavLink>
    </div>
    <div class="flex justify-between items-center space-x-6">
      <NavLink>Log in</NavLink>
      <NuxtLink to="/contact-us">
        <BaseButton>Contact us</BaseButton>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import NavLink from '@/components/shared/NavLink.vue'
</script>
