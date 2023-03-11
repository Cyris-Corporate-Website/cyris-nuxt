<template>
  <div class="relative group">
    <!-- w-280px -->
    <div
      class="relative suite-card rounded-3xl min-h-[430px] max-w-[310px] sm:min-h-[400px] sm:min-w-[250px]"
    ></div>

    <div
      class="absolute h-full w-[310px] sm:w-[250px] top-0 flex flex-col justify-between p-7 items-start font-body font-semibold rounded-3xl"
      :class="bgColor[text]"
    >
      <slot />
      <p class="group-hover:translate-y-1 sm:max-w-[8rem] group-hover:animate-fade-in">{{ text }}</p>
      <p
        class="hidden group-hover:inline-block group-hover:animate-fade-in text-white font-body text-2xs"
      >
        {{ hiddenText }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['text', 'hiddenText'])
const bgColor = {
  '24/7 support': 'bg-jade-200',
  'Smooth migration': 'bg-violet',
}
</script>
