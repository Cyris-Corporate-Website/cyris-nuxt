<template>
  <div class="relative">
    <!-- w-280px -->
    <div
      class="suite-card rounded-3xl"
      style="min-height: 400px; min-width: 245px"
    ></div>
    <div
      class="absolute h-full w-full top-0 flex flex-col justify-between p-7 items-start font-body font-semibold rounded-3xl"
      :class="bgColor[text]"
    >
      <slot />
      <p style="max-width: 8rem">{{ text }}</p>
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
