// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   modules: ['@nuxtjs/tailwindcss'],
   css: ['v-calendar/dist/style.css'],
    buildModules: [
      '@pinia/nuxt',
      '@nuxtjs/moment'
  ],
      typescript: {
    strict: true,
  },
    publicRuntimeConfig: {
    apiKey: process.env.WEATHER_API_KEY,
  },
})
