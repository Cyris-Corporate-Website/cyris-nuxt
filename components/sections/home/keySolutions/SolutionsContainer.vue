<template>
  <div class="sm:flex justify-between items-start">
    <div class="space-y-20">
      <sub-heading color="black">Explore Our Solutions</sub-heading>
      <div v-for="card in solutionCards" :key="card.id">
        <solution-heading @mouseover="switchCard(card.id)">
          {{ card.heading }}
        </solution-heading>
      </div>
    </div>
    <SolutionsCard
      v-for="card in solutionCards"
      :key="card.id"
      v-show="cardNumber == card.id"
      :description="card.description"
      :img-name="card.imgName"
    />
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

const solutionCards = [
  {
    id: 0,
    heading: 'Card Scheme Connectivity',
    description:
      'Extend your payments reach and streamline costs, connect with multiple national and international networks, channels and acquirers and authorize operations in real time.',
    imgName: 'card-connectivity.png',
  },
  {
    id: 1,
    heading: 'Acquirers’ Processing',
    description:
      'Join the next generation of acquirers. Our flexible, modern technology enables acquirers to deliver innovative omnichannel journeys.',
    imgName: 'POS.png',
  },
  {
    id: 2,
    heading: 'Issuers’ Processing',
    description:
      'Turnkey card-issuing and program management, simplified for growing Fintech companies, traditional bank players and e-money institutions.',
    imgName: 'Issuers’-Processing.png',
  },
  {
    id: 3,
    heading: 'Clearing and Sattlement',
    description:
      'Preparation of periodic reports regarding international and local card schemes on behalf of the institution.',
    imgName: 'Clearing-and-Sattlement.png',
  },
  {
    id: 4,
    heading: 'Security and compliance',
    description:
      'Sitting behind every transaction which customers make, Cyris conducts a series of instantaneous checks and verifications to ensure secure, fast, accurate, resilient, and PCI-compliant authorization and settlement processing.',
    imgName: 'key-lock.png',
  },
]
</script>
