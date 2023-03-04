<template>
  <div class="flex flex-col">
    <label v-if="props.label">{{ label }}</label>
    <input
      :class="disabledClass[disabled]"
      :type="type"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      class="rounded-lg font-body-regular border border-gray-400 text-text-300 py-1 px-3 focus:border focus:border-gray-600 focus:outline-none"
    />
  </div>
</template>

<script setup>
const props = defineProps(['type', 'disabled', 'placeholder', 'required', 'label'])
const disabledClass = {
  undefined: '',
  true: 'bg-gray-200 cursor-not-allowed',
}
const errorClass = {
  true: 'border border-raspberry',
}


</script>
