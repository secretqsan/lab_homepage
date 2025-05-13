export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: [
    '@/assets/css/global.css'
  ],
  i18n: {
    vueI18n: '@/i18n.config.js'
  }
})