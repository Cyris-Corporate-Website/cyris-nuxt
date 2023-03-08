// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/main.css'],
  components: [
    { path: '~/components/common', prefix: 'Common' },
    { path: '~/components/base', prefix: 'Base' },
    '~/components',
  ],
})
