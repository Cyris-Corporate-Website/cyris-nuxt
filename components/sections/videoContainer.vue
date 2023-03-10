<template>
  <div class="">
    <video
      autoplay
      loop
      muted
      class="sm:min-w-full sm:max-w-none w-full z-10 object-cover min-h-[843px] sm:min-h-[867px]"
    >
      <source src="@/assets/videos/home-compressed.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="text-white flex justify-center">
      <slot class="text-white z-20" />
    </div>
  </div>
</template>
