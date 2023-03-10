<template>
  <nav class="w-full z-30">
    <div class="flex justify-between items-center w-full text-white">
      <common-logo class="mr-5" />
      <div class="relative cursor-pointer" @click="isVisible = !isVisible">
        <img src="@/assets/images/home/icons/hamburger.svg" alt="" />
      </div>
    </div>
    <div
      v-show="isVisible"
      class="absolute flex flex-col justify-between pb-10 top-0 left-0 bg-white text-gray-600 rounded-b-[15px] min-h-[515px] min-w-full z-50"
    >
      <div>
        <div class="px-4 py-5 flex justify-between items-center w-full">
          <common-logo :dark="true" class="mr-5" />
          <img
            @click="isVisible = !isVisible"
            class="cursor-pointer"
            src="@/assets/images/home/mobileHeader/Group-172636.svg"
            alt=""
          />
        </div>
        <base-dropdown>
          <template #header>Services</template>
          <template #items>
            <div class="space-y-3.5">
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Group-172636.svg"
                  alt=""
                />
                <p>Card Scheme Connectivity</p>
              </div>
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Acquirers’-Processing.svg"
                  alt=""
                />
                <p>Acquirers’ Processing</p>
              </div>
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Issuers’-Processing.svg"
                  alt=""
                />
                <p>Issuers’ Processing</p>
              </div>
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Clearing-and-Settlement.svg"
                  alt=""
                />
                <p>Clearing and Settlement</p>
              </div>
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Security-and-compliance.svg"
                  alt=""
                />
                <p>Security and compliance</p>
              </div>
            </div>
          </template>
        </base-dropdown>
        <base-dropdown>
          <template #header>Platform</template>
          <template #items>
            <div class="space-y-3.5">
              <div class="flex items-end space-x-5">
                <img src="@/assets/images/home/mobileHeader/API.svg" alt="" />
                <p>API</p>
              </div>
              <div class="flex items-end space-x-5">
                <img src="@/assets/images/home/mobileHeader/CMS.svg" alt="" />
                <p>CMS</p>
              </div>
            </div>
          </template>
        </base-dropdown>
        <base-dropdown>
          <template #header>Company</template>
          <template #items>
            <div class="space-y-3.5">
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/About-us.svg"
                  alt=""
                />
                <p>About us</p>
              </div>
              <div class="flex items-end space-x-5">
                <img
                  src="@/assets/images/home/mobileHeader/Careers.svg"
                  alt=""
                />
                <p>Careers</p>
              </div>
              <div class="flex items-end space-x-5">
                <img src="@/assets/images/home/mobileHeader/News.svg" alt="" />
                <p>News</p>
              </div>
            </div>
          </template>
        </base-dropdown>
        <common-nav-link
          class="px-6 pr-7 py-4 font-semibold flex justify-between items-center"
        >
          <p>Developers</p>
          <img src="@/assets/images/home/icons/chevron-black.svg" alt=">" />
        </common-nav-link>
      </div>

      <div class="flex justify-center text-center">
        <div>
          <hr class="w-[330px]" />
          <base-button class="mb-3.5 mt-4">Contact us</base-button>
          <h2>Login</h2>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const isVisible = ref(false)
</script>
