export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: '吕中元课题组主页' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/mdc'
  ],
  css: [
    '~/assets/css/global.css',
    'primeicons/primeicons.css'
  ],
  i18n: {
    legacy: false,
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh.json'
      }
    ]
  }
})

