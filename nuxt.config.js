// import webpack from 'webpack'
// import { version } from './package.json'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'CookingShooking',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'CookingShooking' || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
    '~/assets/styles/highlight.scss',
    '~/assets/styles/app.scss',
  ],
  styleResources: {
    scss: ['~/assets/styles/tokens.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/filters.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '~/modules/generateContent',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          production: {
            apiKey: 'AIzaSyCjLE7YttfE5aE6eKSQpJPhhadf_PsGi2E',
            authDomain: 'cscom-2019.firebaseapp.com',
            databaseURL: 'https://cscom-2019.firebaseio.com',
            projectId: 'cscom-2019',
            storageBucket: 'cscom-2019.appspot.com',
            messagingSenderId: '13136201488',
          },
          development: {
            apiKey: 'AIzaSyCjLE7YttfE5aE6eKSQpJPhhadf_PsGi2E',
            authDomain: 'cscom-2019.firebaseapp.com',
            databaseURL: 'https://cscom-2019.firebaseio.com',
            projectId: 'cscom-2019',
            storageBucket: 'cscom-2019.appspot.com',
            messagingSenderId: '13136201488',
          },
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          storage: true,
        },
      },
    ],
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    nestedProperties: ['categories.slug'],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // Check build option to improve build speed https://nuxtjs.org/api/configuration-build/
    // analyze: true,
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },
  // target: 'static',
  ssr: true,
  pwa: {
    manifest: {
      name: 'CookingShooking',
      lang: 'en',
    },
  },
  generate: {
    fallback: '404.html',
  },
}
