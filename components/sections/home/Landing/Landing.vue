<template>
  <div
    class="flex flex-col-reverse justify-center sm:flex-row sm:justify-between items-center my-auto max-w-layoutWidth w-full min-h-[843px] sm:min-h-[867px]"
  >
    <div>
      <h2 class="font-semibold text-xl text-center sm:text-left mt-7 sm:mt-0">
        Bringing<br />
        Traditional Banking<br />
        into
        <span class="text-jade-100"
          >the
          <span class="font-bold">Future</span>
        </span>
      </h2>
      <p class="font-body text-sm text-text-55 mt-4 mb-12 sm:mb-6">
        All-in-one payment processing for Financial<br />
        institutions, Electronic Money Institution<br />
        (EMI) and progressive Fintech companies.
      </p>
      <div class="flex justify-center sm:block">
        <BaseButton variant="ghost">Get Started</BaseButton>
      </div>
    </div>
    <div class="relative">
      <img
        class="max-w-180 max-h-[280px] sm:max-h-[440px] sm:max-w-[275px]"
        style="backdrop-filter: blur(4px)"
        src="@/assets/images/home/home-card.png"
        alt=""
      />
      <div class="z-50">
        <lottie
          class="lottie absolute -left-10 bottom-2.5"
          :options="defaultOptions"
          v-on:animCreated="handleAnimation"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Lottie from '@/components/Lottie.vue'
import * as animationData from '@/assets/animations/coding-screen.json'

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
