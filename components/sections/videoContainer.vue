<template>
  <div class="">
    <video
      autoplay
      loop
      muted
      class="min-w-full max-w-none h-full w-full z-10"
      style="z-index: 0 !important"
    >
      <source src="@/assets/videos/home.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <slot class="text-white z-50" />
  </div>
</template>
