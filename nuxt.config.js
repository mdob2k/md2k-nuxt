module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - mdob2k',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'md2k.de website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Mono|Roboto+Slab:400,700'
      }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js',
        defer: true
      }
    ]
  },
  /*
  ** CSS Stylesheets
  */
  css: ['@/assets/styles.scss'],
  /*
  ** Plugins
  */
  plugins: [{ src: '~plugins/analytics.js', ssr: false }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router
  */
  router: {
    linkActiveClass: 'is-active'
  },
  /*
  **
  */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-82102149-1',
        debug: {
          enabled: false,
          trace: false,
          sendHitTask: process.env.NODE_ENV === 'production'
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': { warnings: false }
      }
    },
    extractCSS: true
  }
}
