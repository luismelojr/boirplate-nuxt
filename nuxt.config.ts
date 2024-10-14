// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    options: {
      unstyled: true
    },
    importPT: {from: path.resolve(__dirname, './assets/presets/lara')}
  },
  css: ['primeicons/primeicons.css']
})
