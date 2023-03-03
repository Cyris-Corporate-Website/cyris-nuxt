<template>
  <nav class="w-full flex justify-between items-center">
    <div class="flex justify-between items-center space-x-8">
      <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
      <NavLink>Services</NavLink>
      <NavLink>Platform</NavLink>
      <NavLink>Company</NavLink>
      <NavLink>Developers</NavLink>
    </div>
    <div class="flex justify-between items-center space-x-6">
      <NavLink>Log in</NavLink>
      <Button>Contact us</Button>
    </div>
  </nav>
</template>
<script setup>
import NavLink from '@/components/shared/NavLink.vue'
import Button from '@/components/buttons/Button.vue'
</script>
