<template>
  <div class="relative">
    <div
      class="transparent-bg rounded-4xl relative bg-violet"
      style="min-height: 400; min-width: 280px"
    ></div>
    <div
      class="flex flex-col justify-between p-7 items-start font-body font-semibold rounded-3xl"
      :class="bgColor[text]"
      style="min-height: 400px"
    >
      <img
        width="35"
        height="35"
        src="@/assets/images/home/icons/Direct.svg"
        alt=""
      />
      <p class="pr-40">{{ text }}</p>
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
