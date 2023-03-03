<template>
  <div class="relative">
    <Header class="absolute top-12" />
    <div class="">
      <div
        class="flex justify-between items-center my-auto mx-0"
        style="height: 900px"
      >
        <div>
          <h2 class="font-semibold">
            Bringing<br />
            Traditional Banking<br />
            into
            <span class="text-jade-100"
              >the <span class="font-bold">Future</span></span
            >
          </h2>

          <p class="font-body-regular text-text-55 mt-4 mb-6">
            All-in-one payment processing for Financial<br />
            institutions, Electronic Money Institution<br />
            (EMI) and progressive Fintech companies.
          </p>
          <Button variant="ghost">Get Started</Button>
        </div>
        <div>
          <!-- card -->
          <img
            style="height: 440px; width: 275px"
            src="@/assets/images/home/Developer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/shared/Header.vue'
import Button from '@/components/buttons/Button.vue'
// import Dropdown from '@/components/forms/Dropdown.vue'
// import Checkbox from '@/components/elements/Checkbox.vue'
</script>
