require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Server config
  server: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },

  env: {},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'logic-king-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'image',
        name: 'image',
        property: 'image',
        content: 'https://logic-king.sgp1.digitaloceanspaces.com/singh_04.png'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://logic-king.sgp1.digitaloceanspaces.com/singh_04.png'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Choengchai Phachonyut'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Choengchai Phachonyut'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Choengchai Phachonyut'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Choengchai Phachonyut'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Choengchai Phachonyut'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Choengchai Phachonyut'
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mali:wght@300;400;600;700&family=Quicksand:wght@300;400;600;700&display=swap'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/ssr.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      purge: {
        enabled: false,
        content: []
      }
    }
  }
}
