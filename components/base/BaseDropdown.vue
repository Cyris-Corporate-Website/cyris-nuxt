<template>
  <div class="w-full px-4">
    <div
      class="w-full rounded-2xl bg-white p-2 font-body"
      :class="additionalClasses"
    >
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between py-2 text-left text-sm"
        >
          <common-nav-link class="font-semibold">
            <slot name="heading" />
          </common-nav-link>
          <img
            src="@/assets/images/home/icons/chevron-black.svg"
            :class="open ? 'rotate-90 transform' : ''"
            class="h-5 w-5 text-purple-500"
            alt=""
          />
        </DisclosureButton>
        <DisclosurePanel class="pt-4 pb-2 text-sm text-gray-600">
          <slot name="items" />
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
const props = defineProps(['open', 'additionalClasses'])
</script>
