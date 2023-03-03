<template>
  <div>
    <nav class="flex justify-between items-center">
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
import NavLink from '@/components/shared/NavLink.vue'
import Button from '@/components/buttons/Button.vue'
// import Input from '@/components/forms/Input.vue'
// import Dropdown from '@/components/forms/Dropdown.vue'
// import Checkbox from '@/components/elements/Checkbox.vue'
</script>
