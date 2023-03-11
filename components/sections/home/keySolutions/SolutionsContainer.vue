<template>
  <div class="sm:flex justify-between items-start">
    <div class="space-y-20">
      <sub-heading color="black">Explore Our Solutions</sub-heading>
      <solution-heading @mouseover="switchCard(0)"
        >Card Scheme Connectivity</solution-heading
      >
      <solution-heading @mouseover="switchCard(1)"
        >Acquirers’ Processing</solution-heading
      >
      <solution-heading @mouseover="switchCard(2)"
        >Issuers’ Processing</solution-heading
      >
      <solution-heading @mouseover="switchCard(3)"
        >Clearing and Sattlement</solution-heading
      >
      <solution-heading @mouseover="switchCard(4)"
        >Security and compliance</solution-heading
      >
    </div>
    <SolutionsCard v-show="cardNumber == 0">
      <template #img
        ><img src="@/assets/images/home/card-connectivity.png" alt=""
      /></template>
      <template #text
        >Extend your payments reach and streamline costs, connect with multiple
        national and international networks, channels and acquirers and
        authorize operations in real time.</template
      >
    </SolutionsCard>

    <SolutionsCard v-show="cardNumber == 1">
      <template #img
        ><img src="@/assets/images/home/POS.png" alt=""
      /></template>
      <template #text
        >Join the next generation of acquirers. Our flexible, modern technology
        enables acquirers to deliver innovative omnichannel journeys.</template
      >
    </SolutionsCard>

    <SolutionsCard v-show="cardNumber == 2">
      <template #img
        ><img src="@/assets/images/home/Issuers’-Processing.png" alt=""
      /></template>
      <template #text
        >Turnkey card-issuing and program management, simplified for growing
        Fintech companies, traditional bank players and e-money
        institutions.</template
      >
    </SolutionsCard>

    <SolutionsCard v-show="cardNumber == 3">
      <template #img
        ><img src="@/assets/images/home/Clearing-and-Sattlement.png" alt=""
      /></template>
      <template #text
        >Preparation of periodic reports regarding international and local card
        schemes on behalf of the institution.</template
      >
    </SolutionsCard>

    <SolutionsCard v-show="cardNumber == 4">
      <template #img
        ><img src="@/assets/images/home/key-lock.png" alt=""
      /></template>
      <template #text
        >Sitting behind every transaction which customers make, Cyris conducts a
        series of instantaneous checks and verifications to ensure secure, fast,
        accurate, resilient, and PCI-compliant authorization and settlement
        processing.</template
      >
    </SolutionsCard>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
import SolutionHeading from './SolutionHeading.vue'
import SolutionsCard from './SolutionsCard.vue'
const cardNumber = ref(0)
const switchCard = (cn) => {
  cardNumber.value = cn
}
</script>
