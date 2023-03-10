<template>
  <div class="relative">
    <div class="w-[555px] h-[600px]">
      <slot name="img"></slot>
    </div>
    <div class="absolute bottom-0 mx-12 space-y-6">
      <h6 class="text-white font-body text-xs">
        <slot name="text"></slot>
      </h6>
      <BaseButton variant="ghost">Learn more</BaseButton>
    </div>
  </div>
</template>
