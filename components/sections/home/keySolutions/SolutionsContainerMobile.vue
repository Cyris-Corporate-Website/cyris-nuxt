<template>
  <div>
    <sub-heading color="black">Explore Our Solutions</sub-heading>
    <div class="space-y-4 my-6" v-for="card in solutionCards" :key="imgName">
      <base-dropdown additional-classes="p-6">
        <template #heading>{{ card.heading }}</template>
        <template #items>
          <SolutionsCard
            :img-name="card.imgName"
            :description="card.description"
          />
        </template>
      </base-dropdown>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '@/components/sections/home/components/SubHeading.vue'
import SolutionsCard from './SolutionsCard.vue'

const solutionCards = [
  {
    heading: 'Card Scheme Connectivity',
    description:
      'Extend your payments reach and streamline costs, connect with multiple national and international networks, channels and acquirers and authorize operations in real time.',
    imgName: 'card-connectivity.png',
  },
  {
    heading: 'Acquirers’ Processing',
    description:
      'Join the next generation of acquirers. Our flexible, modern technology enables acquirers to deliver innovative omnichannel journeys.',
    imgName: 'POS.png',
  },
  {
    heading: 'Issuers’ Processing',
    description:
      'Turnkey card-issuing and program management, simplified for growing Fintech companies, traditional bank players and e-money institutions.',
    imgName: 'Issuers’-Processing.png',
  },
  {
    heading: 'Clearing and Sattlement',
    description:
      'Preparation of periodic reports regarding international and local card schemes on behalf of the institution.',
    imgName: 'Clearing-and-Sattlement.png',
  },
  {
    heading: 'Security and compliance',
    description:
      'Sitting behind every transaction which customers make, Cyris conducts a series of instantaneous checks and verifications to ensure secure, fast, accurate, resilient, and PCI-compliant authorization and settlement processing.',
    imgName: 'key-lock.png',
  },
]
</script>
