<template>
  <div
    class="flex justify-between items-center my-auto max-w-layoutWidth w-full"
    style="height: 867px"
  >
    <div>
      <h2 class="font-semibold text-xl">
        Bringing<br />
        Traditional Banking<br />
        into
        <span class="text-jade-100"
          >the <span class="font-bold">Future</span></span
        >
      </h2>

      <p class="font-body text-sm text-text-55 mt-4 mb-6">
        All-in-one payment processing for Financial<br />
        institutions, Electronic Money Institution<br />
        (EMI) and progressive Fintech companies.
      </p>
      <BaseButton variant="ghost">Get Started</BaseButton>
    </div>
    <div class="relative">
      <!-- <CodeAnimation /> -->
      <img
        style="height: 440px; width: 275px"
        src="@/assets/images/home/home-card.png"
        alt=""
      />
      <lottie
        class="absolute bottom-0 right-20 skew-y-6 bg-raspberry opacity-80"
        :options="defaultOptions"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </div>
</template>
<script>
import CodeAnimation from './CodeAnimation.vue'
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

<style>
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
