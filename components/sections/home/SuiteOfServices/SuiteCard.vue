<template>
  <div class="relative">
    <!-- w-280px -->
    <div class="suite-card rounded-3xl min-h-[430px] max-w-[310px] sm:min-h-[400px] sm:min-w-[245px]"></div>
    <div
      class="absolute h-full w-full top-0 flex flex-col justify-between p-7 items-start font-body font-semibold rounded-3xl"
      :class="bgColor[text]"
    >
      <slot />
      <p class="sm:max-w-[8rem]">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
const bgColor = {
  '24/7 support': 'bg-jade-200',
  'Smooth migration': 'bg-violet',
}
</script>
