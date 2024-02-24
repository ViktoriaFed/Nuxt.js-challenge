// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  devtools: { enabled: true }
})


