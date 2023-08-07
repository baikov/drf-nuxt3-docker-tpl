// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  runtimeConfig: {
    // apiSecret: '123',
    public: {
      siteUrl: `${process.env.PROTOCOL}://${process.env.DOMAIN}`,
      apiUrl: `${process.env.PROTOCOL}://${process.env.DOMAIN}/api`,
      siteName: process.env.SITE_NAME || 'Nuxt 3',
      language: 'ru-RU',
      // titleSeparator: '|',
    },
  },
  // ssr: false,  // for SPA with Nginx
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false,
  },
  modules: [
    // '@vueuse/nuxt',
    // '@nuxtjs/color-mode',
    // 'nuxt-icon',
    // '@nuxt/image-edge',
    // '@nuxtjs/google-fonts',
    // "@pinia/nuxt",
    // 'nuxt-headlessui',
    // 'nuxt-simple-sitemap', // https://github.com/harlan-zw/nuxt-simple-sitemap
    // 'nuxt-simple-robots', // https://github.com/harlan-zw/nuxt-simple-robots
    // 'nuxt-unhead', // https://github.com/unjs/unhead
    // 'nuxt-schema-org', // https://github.com/harlan-zw/unhead-schema-org
    // '@artmizu/yandex-metrika-nuxt',
    // 'nuxt-vitest',
  ],
  vite: {
    server: {
      hmr: {
        protocol: process.env.HMR_PROTOCOL || 'ws',
      },
    },
  },
})
