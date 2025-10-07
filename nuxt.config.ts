// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/apollo'
  ],
  ui: {
    theme: {
      colors: ['primary', 'error'],
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://nuxt.getmakedigital.com/backend/public/api/graphql'
      }
    },
  },
})