// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://nuxt.getmakedigital.com/backend/public/api/graphql'
      }
    },
  },
})