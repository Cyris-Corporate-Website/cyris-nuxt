<template>
  <div class="w-full h-full relative">
    <div class="flex justify-center">
      <CommonHeader class="hidden sm:flex absolute top-11 max-w-layoutWidth" />
      <CommonMobileHeader
        :aboveTrustedPartners="aboveTrustedPartners"
        :class="aboveTrustedPartners ? 'fixed' : 'absolute'"
        class="sm:hidden top-0 pt-11 max-w-layoutWidth px-3.5"
      />
    </div>
    <slot />
    <div class="flex justify-center bg-bgFooter bg-cover bg-no-repeat">
      <CommonFooter class="sm:max-w-layoutWidth px-3.5 sm:px-0" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)
let aboveTrustedPartners = ref(false)

const checkScrollValue = () => {
  if (scrollY.value > 842) aboveTrustedPartners.value = true
  else aboveTrustedPartners.value = false
}
const handleScroll = () => {
  scrollY.value = window.scrollY
  checkScrollValue()
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
