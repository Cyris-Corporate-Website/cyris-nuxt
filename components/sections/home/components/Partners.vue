<template>
  <div class="grid grid-cols-4 gap-20 sm:flex sm:justify-between items-center">
    <img
      v-for="partner in partners"
      :key="partner"
      :class="classes[size], classes[theme]"
      :src="renderImg(`${partner}.svg`)"
      alt=""
    />
  </div>
</template>
<script setup>
const props = defineProps(['theme', 'size'])

const renderImg = (img) => {
  const base = '/assets/images/home/logos'
  const imageUrl = `${base}/${img}`
  
  const darkImageUrl = `${base}/dark/${img}`
  if (props?.theme) return darkImageUrl
  return imageUrl
}
const classes = {
  dark: 'max-w-[39px] max-h-[25px]',
  small: 'max-w-[53px] max-h-[30px] sm:max-w-none sm:max-h-none',
}
const partners = [
  'VISA',
  'MC',
  'Maestro',
  'Amex',
  'JCB',
  'Unionpay',
  'Bancontact',
]
</script>
