<template>
  <div class="bg-violet text-xxs font-body">
    <div class="grid grid-cols-5">
      <div>
        <common-logo></common-logo>
        <p class="text-xxxs text-gray-500">© 2022 All rights reserved</p>
        <div class="flex items-center space-x-4">
          <h6>Follow us on</h6>
          <div class="flex space-x-4 items-center">
            <img src="@/assets/images/home/logos/linkedin.svg" alt="" />
            <img src="@/assets/images/home/logos/Twitter.svg" alt="" />
            <img src="@/assets/images/home/logos/facebook.svg" alt="" />
          </div>
        </div>
        <div>
          <img src="@/assets/images/home/logos/PSD2_logo_w.svg" alt="" />
          <img
            src="@/assets/images/home/logos/PCI-DSS-Copmlians-logo.svg"
            alt=""
          />
          <img src="@/assets/images/home/logos/3d-secure-logo.svg" alt="" />
        </div>
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans">Processing Services</h2>
        <h6>Acquirers’ Processing</h6>
        <h6>Issuers’ Processing</h6>
        <h6>Clearing and Settlement</h6>
        <h6>Processing Services</h6>
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans">Software Platform</h2>
        <h6>API</h6>
        <h6>CMS</h6>
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans">Company</h2>
        <h6>API</h6>
        <h6>CMS</h6>
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans">Developers Hub</h2>
        <h6>API Documentation</h6>
        <h6>Sandbox</h6>
        <h6>Guides</h6>
      </div>
    </div>
    <hr />
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-sm font-semibold font-sans">Partners</h2>
        <partners />
      </div>
      <div>
        <h2 class="text-sm font-semibold font-sans">Legal</h2>
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
import Partners from './Partners.vue'
</script>
<style scoped>
h1 {
  margin: 15px 0;
  color: #cbcfd6;
  font-size: 14px;
}
</style>
