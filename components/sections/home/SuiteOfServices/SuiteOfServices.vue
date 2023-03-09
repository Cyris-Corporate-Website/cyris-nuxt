<template>
  <div class="flex justify-center items-center sm:min-h-[1632px] text-white">
    <div class="grid sm:grid-cols-2 items-center gap-32">
      <div class="space-y-12">
        <sub-heading color="white">What makes Cyris different?</sub-heading>
        <h2 class="text-xxl">Complete suite of services</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-8">
        <SuiteCard text="Direct integrations" icon="Direct">
          <img
            src="@/assets/images/home/icons/Direct.svg"
            width="35"
            height="35"
            alt=""
          />
        </SuiteCard>
        <SuiteCard text="24/7 support">
          <img
            src="@/assets/images/home/icons/24support.svg"
            width="33"
            height="34"
            alt=""
          />
        </SuiteCard>
        <SuiteCard text="Smooth migration">
          <img
            src="@/assets/images/home/icons/smooth-migration.svg"
            width="32"
            height="26"
            alt=""
          />
        </SuiteCard>
        <SuiteCard text="PCI DSS compliant">
          <img
            src="@/assets/images/home/icons/pci-dss.svg"
            width="25"
            height="34"
            alt=""
          />
        </SuiteCard>
        <SuiteCard text="Maximum uptime">
          <img
            src="@/assets/images/home/icons/maximum-uptime.svg"
            width="35"
            height="35"
            alt=""
          />
        </SuiteCard>
        <SuiteCard text="Control in your hands">
          <img
            src="@/assets/images/home/icons/control-in-your-hand.svg"
            width="26"
            height="41"
            alt=""
          />
        </SuiteCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
import SuiteCard from '@/components/sections/home/SuiteOfServices/SuiteCard.vue'
</script>
