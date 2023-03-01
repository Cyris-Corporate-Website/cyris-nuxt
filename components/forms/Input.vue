<template>
  <div>
    <input
      :class="classes"
      :type="type"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      class="rounded-default font-body border border-gray-400 text-text-300 py-11 px-15 focus:border focus:border-gray-600 focus:outline-none"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: ['type', 'disabled', 'placeholder', 'required'],
  setup(props) {
    const { type, disabled, placeholder, required } = toRefs(props)
    const classes = ref([])
    const error = ref(false)

    onMounted(() => {
      applyClasses()
    })

    const disabledClass = () => {
      if (disabled.value) classes.value.push('bg-gray-200 cursor-not-allowed ')
    }
    const applyError = () => {
      if (error.value) classes.value.push('border border-raspberry ')
    }

    const applyClasses = () => {
      disabledClass()
      applyError()
    }
    return {
      applyClasses,
      classes,
    }
  },
}
</script>
