<template>
  <div class="">
    <video
      autoplay
      loop
      muted
      class="z-10 object-cover rounded-3xl w-screen"
      style="height: 418px"
    >
      <source src="@/assets/videos/contact-us.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="text-white flex justify-center">
      <slot class="text-white z-50" />
    </div>
  </div>
</template>