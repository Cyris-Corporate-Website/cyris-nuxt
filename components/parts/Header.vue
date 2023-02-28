<template>
  <div>
    <nav class="text-white flex justify-between items-center" style="margin-bottom: 138px;">
      <div class="flex justify-between items-center space-x-8">
        <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
        <NavLink>Services</NavLink>
        <NavLink>Platform</NavLink>
        <NavLink>Company</NavLink>
        <NavLink>Developers</NavLink>
      </div>
      <div class="flex justify-between items-center space-x-6">
        <p>Log in</p>
        <Button>Contact us</Button>
      </div>
    </nav>
  </div>
</template>
<script setup>
import NavLink from './HomeSections/NavLink.vue'
</script>
