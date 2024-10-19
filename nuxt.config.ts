// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    'nuxt-og-image',
  ],

  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
  },


  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4,
  },
  
  compatibilityDate: "2024-05-14",
})