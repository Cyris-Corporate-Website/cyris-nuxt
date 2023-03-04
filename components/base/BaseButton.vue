<template>
  <div>
    <button
      :class="
        buttonClass[variant], buttonHeight[size], disabledClass[disabled]
      "
      @click="nice()"
      :disabled="disabled"
      class="rounded-default font-body-semi hover:cursor-pointer"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['variant', 'size', 'disabled'])

const buttonClass = {
  undefined: 'bg-jade-200 hover:bg-jade-300 text-white',
  primary: 'bg-jade-200 hover:bg-jade-300 text-white',
  secondary: 'bg-white text-text-300 border border-gray-600 hover:border-2',
  ghost: 'text-text-50 border border-white hover:border-2',
}
const buttonHeight = {
  undefined: 'min-w-150 h-50',
  big: 'min-w-150 h-55',
  medium: 'min-w-150 h-50',
}
const disabledClass = {
  undefined: '',
  true: 'opacity-40 cursor-not-allowed',
}

const nice = () => {
  console.log('nice')
}
</script>
