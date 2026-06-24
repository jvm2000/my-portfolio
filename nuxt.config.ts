// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Fraunces: [400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600, 700],
    },
  },
  css: ['~/assets/css/transitions.css']
})