<template>
  <div class="text-xxs font-body text-text-55 py-24">
    <div class="grid grid-cols-5 gap-20">
      <div>
        <common-logo></common-logo>
        <p class="text-xxxs text-[#778CAC]">© 2022 All rights reserved</p>
        <div class="flex items-baseline space-x-4 mt-3.5 mb-6">
          <h2 class="text-xs font-semibold font-sans text-white">
            Follow us on
          </h2>
          <div class="flex space-x-4 items-center">
            <img src="@/assets/images/home/logos/linkedin.svg" alt="" />
            <img src="@/assets/images/home/logos/Twitter.svg" alt="" />
            <img src="@/assets/images/home/logos/facebook.svg" alt="" />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <img src="@/assets/images/home/logos/PSD2_logo_w.svg" alt="" />
          <img
            src="@/assets/images/home/logos/PCI-DSS-Copmlians-logo.svg"
            alt=""
          />
          <img src="@/assets/images/home/logos/3d-secure-logo.svg" alt="" />
        </div>
      </div>
      <!--  -->
      <div class="space-y-3.5">
        <h2 class="text-sm font-semibold font-sans text-white">
          Processing Services
        </h2>
        <h6>Acquirers’ Processing</h6>
        <h6>Issuers’ Processing</h6>
        <h6>Clearing and Settlement</h6>
        <h6>Processing Services</h6>
      </div>
      <div class="space-y-3.5">
        <h2 class="text-sm font-semibold font-sans text-white">
          Software Platform
        </h2>
        <h6>API</h6>
        <h6>CMS</h6>
      </div>
      <div class="space-y-3.5">
        <h2 class="text-sm font-semibold font-sans text-white">Company</h2>
        <h6>API</h6>
        <h6>CMS</h6>
      </div>
      <div class="space-y-3.5">
        <h2 class="text-sm font-semibold font-sans text-white">
          Developers Hub
        </h2>
        <h6>API Documentation</h6>
        <h6>Sandbox</h6>
        <h6>Guides</h6>
      </div>
    </div>
    <hr class="border-[#353855] mt-9 mb-6" />
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-sm font-semibold font-sans text-white">Partners</h2>
        <partners section="footer" />
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans text-white">Legal</h2>
        <div class="flex justify-between items-center space-x-5 text-xxxs">
          <h6>Privacy policy</h6>
          <h6>Terms and Conditions</h6>
          <h6>Cookie policy</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Partners from '@/components/sections/home/components/Partners.vue'
</script>
