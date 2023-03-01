<template>
  <div>
    <nav class="flex justify-between items-center" style="margin-bottom: 138px">
      <div class="flex justify-between items-center space-x-8">
        <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
        <NavLink>Services</NavLink>
        <NavLink>Platform</NavLink>
        <NavLink>Company</NavLink>
        <NavLink>Developers</NavLink>
        <Button size="big">Big CTA</Button>
      </div>
      <div class="flex justify-between items-center space-x-6">
        <p>Log in</p>
        <Button variant="secondary">Contact us</Button>
      </div>
    </nav>
    <Input type="text" placeholder="PPlaceholding" :disabled="false"></Input>
    <Dropdown></Dropdown>
  </div>
</template>
<script setup>
import NavLink from '@/components/shared/NavLink.vue'
import Button from '@/components/buttons/Button.vue'
import Input from '@/components/forms/Input.vue'
import Dropdown from '@/components/forms/Dropdown.vue'
</script>
