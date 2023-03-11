<template>
  <nav
    class="flex justify-between items-center w-full text-white z-30"
    @mouseleave="unhover"
  >
    <div class="flex justify-between items-center space-x-8 relative">
      <img src="@/assets/images/logo.svg" alt="logo" class="mr-5" />
      <common-nav-link @mouseover="hoverLink(1)">Services</common-nav-link>
      <common-nav-link @mouseover="hoverLink(2)">Platform</common-nav-link>
      <common-nav-link @mouseover="hoverLink(3)">Company</common-nav-link>
      <common-nav-link>Developers</common-nav-link>
    </div>
    <div
      v-show="hoveredLink == 1"
      class="absolute top-12 left-10 bg-white rounded-[25px] p-8 space-y-6"
    >
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/csc-m.svg" alt="" />
        </template>
        <template #heading>Card Scheme Connectivity</template>
        <template #subheading>Secure communication to card schemes</template>
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/ap-m.svg" alt="" />
        </template>
        <template #heading>Acquirers’ Processing</template>
        <template #subheading>E-Commerce transactions processing</template>
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/ip-m.svg" alt="" />
        </template>
        <template #heading>Issuers’ Processing</template>
        <template #subheading>Card-issuing and program management</template>
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/cas-m.svg" alt="" />
        </template>
        <template #heading>Clearing and Settlement</template>
        <template #subheading
          >Exchange of reports, messages, and files</template
        >
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/sac-m.svg" alt="" />
        </template>
        <template #heading>Security and compliance</template>
        <template #subheading>Fully compliant and secured processing</template>
      </HeaderMenuItem>
    </div>
    <div
      v-show="hoveredLink == 2"
      class="absolute top-12 left-32 bg-white rounded-[25px] p-8 space-y-6"
    >
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/api-m.svg" alt="" />
        </template>
        <template #heading>API</template>
        <template #subheading>Ultra flexible and powerful</template>
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/cms-m.svg" alt="" />
        </template>
        <template #heading>CMS</template>
        <template #subheading>Unparallel control and speed</template>
      </HeaderMenuItem>
    </div>
    <div
      v-show="hoveredLink == 3"
      class="absolute top-12 left-60 bg-white rounded-[25px] p-8 space-y-6"
    >
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/logo.svg" alt="" />
        </template>
        <template #heading>About us</template>
        <template #subheading>Company milestones</template>
      </HeaderMenuItem>
      <HeaderMenuItem>
        <template #img>
          <img src="@/assets/images/home/mobileHeader/news-m.svg" alt="" />
        </template>
        <template #heading>News</template>
        <template #subheading>Keep up with our latest news</template>
      </HeaderMenuItem>
    </div>
    <div class="flex justify-between items-center space-x-6">
      <common-nav-link>Log in</common-nav-link>
      <NuxtLink to="/contact-us">
        <base-button>Contact us</base-button>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import HeaderMenuItem from './HeaderMenuItem.vue'
const hoveredLink = ref(0)

const hoverLink = (linkNum) => {
  hoveredLink.value = linkNum
}
const unhover = () => {
  hoveredLink.value = 0
}
</script>
