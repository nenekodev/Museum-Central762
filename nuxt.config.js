export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { // 这里修改app.html里面的html上的{{ HTML_ATTRS }}属性
      lang: 'zh',
    },
    title: '中原铁道（数字）博物馆',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/base.css' },
      { rel: 'stylesheet', href: '/css/day.css', media: '(prefers-color-scheme: no-preference), (prefers-color-scheme: light)' },
      { rel: 'stylesheet', href: '/css/night.css', media: '(prefers-color-scheme: dark)' }
    ],
    script: [
      { src: '/js/bootstrap.bundle.min.js' },
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   { src: '~/assets/js/bootstrap.bundle.min.js' }
  // ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    runtime: true // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  generate: {
    routes: [
      '/about/help',
      '/about/agreement',
      '/about/privacy',
      '/about/update',

      '/virtualtour/chaoqi',
      '/virtualtour/xudan',
      '/virtualtour/zhuru',
      '/virtualtour/luofu',

      '/life/magazines',
      '/life/references'
    ]
  }
}
