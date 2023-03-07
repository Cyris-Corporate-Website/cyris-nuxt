<template>
  <div
    class="flex justify-center text-white"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1632px;
    "
  >
    <div>
      <div class="grid grid-cols-2 gap-7">
        <div>
          <sub-heading color="white">Best in Class Software</sub-heading>
          <h2 class="text-xxl mt-12 mb-1">Developer - friendly</h2>
          <p class="text-sm text-text-55 mb-9 font-body">
            Our APIs are ultra-flexible and low code for<br />
            ease of integration, significantly decreasing<br />
            time to market.<br />
            <span class="font-semibold text-jade-100"
              >In short, Devs love us!</span
            >
          </p>
          <BaseButton variant="ghost">
            <div class="flex items-center space-x-2">
              <img src="@/assets/images/home/icons/sandbox.svg" alt="" />
              <p>Sign up for sandbox</p>
            </div>
          </BaseButton>
        </div>
        <img
          src="@/assets/images/home/Developer.png"
          width="555"
          height="393"
          alt=""
        />
        <!--  -->
        <div class="relative">
          <div
            class="relative transparent-bg rounded-4xl"
            style="min-height: 830px; max-width: 555px"
          ></div>
          <div class="absolute top-0 p-12" style="min-height: 830px">
            <div class="flex space-x-4 mb-4">
              <img
                src="@/assets/images/home/icons/API.svg"
                width="40"
                height="37.5"
                alt=""
              />
              <h2 class="text-md font-semibold">API</h2>
            </div>
            <p class="text-xs font-body text-text-55 mb-6">
              <span class="font-semibold text-white"
                >Get real-time access to our service via APIs.</span
              ><br />
              When you know your business case for cards, we’ll<br />
              guide you every step of the way on which APIs you<br />
              need to use. Thanks to our APIs and API<br />
              documentation, it’s easy for developers to create<br />
              what your business wants and needs. <br />
              <br />
              Our partners simply interact with Cyris platform via<br />
              powerful APIs that maximize their processing choices<br />
              and reduce their workload, while transactions are<br />
              authorized in real time.
            </p>
            <CommonReadMore text="Read More" />
            <div class="absolute bottom-0 flex justify-center">
              <img src="@/assets/images/home/API.png" alt="" />
            </div>
          </div>
        </div>
        <!--  -->
        <div
          class="bg-violet relative p-12 rounded-4xl"
          style="min-height: 830px; max-width: 555px"
        >
          <div class="flex space-x-4 mb-4">
            <img
              src="@/assets/images/home/icons/monitor.svg"
              width="40"
              height="37.5"
              alt=""
            />
            <h2 class="text-md font-semibold">CMS</h2>
          </div>
          <p class="text-xs font-body mb-6">
            <span class="font-semibold text-white"
              >Gain unparalleled control and transaction speed.</span
            ><br />
            Our CMS (Cyris Management System) is packed with numerous
            functionalities, enhanced reporting, and intuitive interface
            allowing you to monitor every transaction and internal and external
            processes.<br />
            <br />
            Richer data and deeper insights. Our best-in-class payment and
            transaction processing technology is the heart of our solution,
            working invisibly to authorize customers’ requests quickly and
            reconcile funds seamlessly with all ecosystem partners.
          </p>
          <CommonReadMore text="Explore" />
          <div class="absolute bottom-0">
            <img
              src="@/assets/images/home/CMS.png"
              width="454"
              height="330"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
</script>
