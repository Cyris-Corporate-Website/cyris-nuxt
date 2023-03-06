<template>
  <div>
    <input
      :class="disabledClass[disabled]"
      type="checkbox"
      :disabled="disabled"
      :required="required"
      class="rounded-default border border-gray-400 w-5 h-5 focus:border focus:border-gray-600 focus:outline-none"
    />
  </div>
</template>

<script setup>
const props = defineProps(['disabled', 'required'])
const disabledClass = {
  undefined: '',
  true: 'bg-gray-200 cursor-not-allowed',
}
</script>
