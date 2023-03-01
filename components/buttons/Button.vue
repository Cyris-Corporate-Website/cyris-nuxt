<template>
  <div>
    <button
      :class="classes"
      @click="nice()"
      :disabled="disabled"
      class="rounded-default font-body-semi hover:cursor-pointer"
    >
      <slot />
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: ['variant', 'size', 'disabled'],
  setup(props) {
    const { variant, size, disabled } = toRefs(props)
    const classes = ref([])

    onMounted(() => {
      applyClasses()
    })
    const nice = () => {
      console.log('nice')
    }
    const resize = () => {
      const big = 'w-180 h-55 '
      const medium = 'w-180 h-50 '

      if (size.value === 'big') classes.value.push(big)
      else classes.value.push(medium)
    }
    const colors = () => {
      const primary = 'bg-jade-200 hover:bg-jade-300 text-white '
      const secondary =
        'bg-white text-text-300 border border-gray-600 hover:border-2 '

      if (variant.value === 'secondary') classes.value.push(secondary)
      else classes.value.push(primary)
    }
    const disabledClass = () => {
      // should be less than 40
      if (disabled.value) classes.value.push('opacity-40 cursor-not-allowed ')
    }

    const applyClasses = () => {
      resize()
      colors()
      disabledClass()
    }
    return {
      applyClasses,
      classes,
      nice,
    }
  },
}
</script>
