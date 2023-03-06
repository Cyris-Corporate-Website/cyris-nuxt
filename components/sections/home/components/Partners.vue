<template>
  <div v-if="!isFooter" class="flex justify-between items-center">
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/VISA.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      :src="`@/assets/images/home/logos/MC.svg`"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/Maestro.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/Amex.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/JCB.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/Unionpay.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/Bancontact.svg"
      alt=""
    />
  </div>
  <div v-if="isFooter" class="flex justify-between items-center space-x-16">
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/dark/VISA.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      :src="`@/assets/images/home/logos/dark/MC.svg`"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/dark/Maestro.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/dark/Amex.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/dark/JCB.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/dark/Unionpay.svg"
      alt=""
    />
    <img
      :class="isFooter && 'footer-image'"
      src="@/assets/images/home/logos/Bancontact.svg"
      alt=""
    />
  </div>
</template>
<script setup>
const props = defineProps(['section'])
const isFooter = props.section === 'footer'
</script>

<style scoped>
.footer-image {
  height: 25px;
  max-width: 39px;
}
</style>
