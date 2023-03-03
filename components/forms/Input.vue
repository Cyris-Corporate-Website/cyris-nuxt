<template>
  <div>
    <input
      :class="disabledClass[disabled]"
      :type="type"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      class="rounded-default font-body border border-gray-400 text-text-300 py-11 px-15 focus:border focus:border-gray-600 focus:outline-none"
    />
  </div>
</template>

<script setup>
const props = defineProps(['type', 'disabled', 'placeholder', 'required'])
const disabledClass = {
  undefined: '',
  true: 'bg-gray-200 cursor-not-allowed',
}
const errorClass = {
  true: 'border border-raspberry',
}
</script>
