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
      style="max-width: 190px"
      class="flex justify-between items-center rounded-default font-body border border-gray-400 text-text-300 py-11 px-15 focus:border focus:border-gray-600 focus:outline-none"
    >
      <div>
        <!-- icon -->
      </div>
    </div>
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
