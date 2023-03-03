<template>
  <div>
    <!-- <select
      :class="classes"
      :type="type"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      class="rounded-default font-body border border-gray-400 text-text-300 py-11 px-15 focus:border focus:border-gray-600 focus:outline-none"
      id="cars"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select> -->
    <div
      class="flex justify-between items-center rounded-default font-body border border-gray-400 text-text-300 py-11 px-15 focus:border focus:border-gray-600 focus:outline-none max-w-[190px]"
    >
      <div>
        <!-- icon -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'disabled', 'placeholder', 'required'])

const disabledClass = {
  undefined: '',
  true: 'bg-gray-200 cursor-not-allowed',
}
</script>
