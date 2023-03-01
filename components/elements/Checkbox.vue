<template>
  <div>
    <input
      :class="classes"
      type="checkbox"
      :disabled="disabled"
      :required="required"
      class="rounded-default border border-gray-400 w-5 h-5 focus:border focus:border-gray-600 focus:outline-none"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: ['disabled', 'required'],
  setup(props) {
    const { disabled, required } = toRefs(props)
    const classes = ref([])
    const error = ref(false)

    onMounted(() => {
      applyClasses()
    })

    const disabledClass = () => {
      if (disabled.value) classes.value.push('bg-gray-200 cursor-not-allowed ')
    }

    const applyClasses = () => {
      disabledClass()
    }
    return {
      applyClasses,
      classes,
    }
  },
}
</script>
