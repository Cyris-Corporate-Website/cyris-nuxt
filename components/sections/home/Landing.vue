<template>
  <div>
    <Header class="absolute top-14" />
    <div class="flex justify-center items-center h-screen">
      <div>
        <h1 class="font-semibold">
          Bringing<br />
          Traditional Banking<br />
          into <span class="text-jade-100">the Future</span>
        </h1>

        <p class="font-body-semi text-text-100">
          All-in-one payment processing for Financial institutions, Electronic
          Money Institution (EMI) and progressive Fintech companies.
        </p>
      </div>
      <div>
        <!-- card -->
        <img
          width="200px"
          height="200px"
          src="@/assets/images/home/Developer.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/shared/Header.vue'
</script>
