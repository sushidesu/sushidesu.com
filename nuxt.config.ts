// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  srcDir: "src/"
})

// import pkg from './package'

// require('dotenv').config()

//const _ = {
//  target: "static",
//  srcDir: "src/",
//  /*
//  ** Headers of the page
//  */
//  head: {
//    title: pkg.name,
//    meta: [
//      { charset: 'utf-8' },
//      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//      { hid: 'description', name: 'description', content: pkg.description }
//    ],
//    link: [
//      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
//    ],
//  },
//
//  env: {
//    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT
//  },
//
//  /*
//  ** Customize the progress-bar color
//  */
//  loading: { color: '#fff' },
//
//  /*
//  ** Global CSS
//  */
//  css: [
//    '~/common/color.css'
//  ],
//
//  /*
//  ** Plugins to load before mounting the App
//  */
//  plugins: [
//  ],
//
//  /*
//  ** Nuxt.js modules
//  */
//  modules: [
//    'nuxt-fontawesome',
//    '@nuxtjs/bulma',
//    [
//      '@nuxtjs/google-gtag',
//      {
//        id: process.env.GAID
//      }
//    ]
//  ],
//
//  /*
//  ** Build configuration
//  */
//  build: {
//    /*
//    ** You can extend webpack config here
//    */
//    extend(config, ctx) {
//    }
//  },
//
//  /*
//  ** TypeScript
//  */
//  buildModules: ['@nuxt/typescript-build'],
//  /*
//  ** FontAwesome
//  */
//  fontawesome: {
//    component: 'fa'
//  }
//}
//
