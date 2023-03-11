<template>
  <div class="flex justify-between items-center space-x-5 group cursor-pointer">
    <slot name="img" />
    <div>
      <h2 class="flex items-center space-x-2">
        <div
          class="text-gray-600 text-links font-body group-hover:text-jade-100"
        >
          <slot name="heading" />
        </div>
        <img
          class="hidden group-hover:inline-block"
          src="@/assets/images/home/icons/arrow-green.svg"
          alt=""
        />
      </h2>
      <p class="text-gray-400 text-2xs font-body">
        <slot name="subheading" />
      </p>
    </div>
  </div>
</template>
