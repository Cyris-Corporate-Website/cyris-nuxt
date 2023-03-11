<template>
  <div class="flex justify-center items-center sm:min-h-[1632px] text-white">
    <div class="grid sm:grid-cols-2 items-center gap-32 py-14 sm:py-0">
      <div class="space-y-12">
        <sub-heading color="white">What makes Cyris different?</sub-heading>
        <h2 class="text-2xl text-center sm:text-left">
          Complete suite of services
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-8">
        <SuiteCard
          text="Direct integrations"
          hiddenText="We are migration experts, and we ensure seamless, low-friction and rapid time-to-market integration and migration, thanks to our extensive experience and ultra-flexible APIs. We have not only a dedicated Migration Team but we provide also superbly detailed, developer-friendly documentation."
        >
          <div class="flex justify-between items-start">
            <img
              src="@/assets/images/home/icons/Direct.svg"
              width="35"
              height="35"
              alt=""
            />
            <Partners />
          </div>
        </SuiteCard>
        <SuiteCard
          text="24/7 support"
          hiddenText="With expert technical team and unlimited support, we quarantine a stable and flowless connectivity with maximum uptime. You can simply rely on our services as we are 24/7 available to protect your business and core services. Relax and take advantage of our restless technical support."
        >
          <img
            src="@/assets/images/home/icons/24support.svg"
            width="33"
            height="34"
            alt=""
          />
        </SuiteCard>
        <SuiteCard
          text="Smooth migration"
          hiddenText="Sitting behind every transaction which customers make, Cyris conducts a series of instantaneous checks and verifications to ensure secure, fast, accurate, resilient, and PCI-compliant authorization and settlement processing. We’re PCI DSS Level-1 compliant, meaning we take care of all the certification “heavy-lifting” for you."
        >
          <img
            src="@/assets/images/home/icons/smooth-migration.svg"
            width="32"
            height="26"
            alt=""
          />
        </SuiteCard>
        <SuiteCard
          text="PCI DSS compliant"
          hiddenText="Sitting behind every transaction which customers make, Cyris conducts a series of instantaneous checks and verifications to ensure secure, fast, accurate, resilient, and PCI-compliant authorization and settlement processing. We’re PCI DSS Level-1 compliant, meaning we take care of all the certification “heavy-lifting” for you."
        >
          <img
            src="@/assets/images/home/icons/pci-dss.svg"
            width="25"
            height="34"
            alt=""
          />
        </SuiteCard>
        <SuiteCard
          text="Maximum uptime"
          hiddenText="Cyris provides a high-availability payments infrastructure to ensure uninterrupted operation of your services 24/7/365. We process every transaction with greater capability, extreme speed of execution and attention to the details, this enables smooth deployment and enhancement."
        >
          <img
            src="@/assets/images/home/icons/maximum-uptime.svg"
            width="35"
            height="35"
            alt=""
          />
        </SuiteCard>
        <SuiteCard
          text="Control in your hands"
          hiddenText="Everything is under your control, through the most powerful APIs, and our ultra-intuitive Client Portal. Our CMS (Cyris Management System) is packed with numerous functionalities, enhanced reporting, and intuitive interface allowing you to monitor every transaction and internal and external processes."
        >
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
import Partners from '../components/Partners.vue'
</script>
