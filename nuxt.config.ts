// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    // Module Options
    locales: ["pl", "en"],
    defaultLocale: "pl",
  },
})
