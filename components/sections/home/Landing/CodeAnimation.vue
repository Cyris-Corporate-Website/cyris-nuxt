<template>
  <div>
    <img
      style="height: 440px; width: 275px"
      src="@/assets/images/home/home-card.png"
      alt=""
    />
    <lottie
      class="absolute bottom-0 right-20"
      :options="defaultOptions"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue'
import * as animationData from '@/assets/animations/new.json'

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>

<style scoped>
body {
  background-color: #002c3e;
}
a {
  position: absolute;
  color: #fff;
  top: 40px;
  right: 40px;
}
</style>
