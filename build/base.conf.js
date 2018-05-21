const webpack = require('webpack')
const pkg = require('../package.json')
const dotenvConfig = require('dotenv').config()
// const I18N = require('../lib/core/lang')
let env = process.env
let dotenv = dotenvConfig.parsed

/**
 *
 * @param {*} value
 */
function isTrue(value) {
  return value === 'true'
}

const baseRouter = env.BASE_ROUTER
const config = {
  mode: 'spa',
  env: {
    VERSION: pkg.version,
    NODE_ENV: env.NODE_ENV,
    BASE_URL: env.BASE_URL,
    BASE_ROUTER: baseRouter,
    // 接口配置
    API_STARDUST_BASE_URL: env.API_STARDUST_BASE_URL,
    API_STARDUST_TIMEOUT: env.API_STARDUST_TIMEOUT,
  },
  head: {
    title: 'Stardust',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'renderer', content: 'webkit' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'xxxx' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // 需要直接加载的 JS
    // script: [
    //   { src: 'https://cdn.bootcss.com/holder/2.9.4/holder.min.js', async: true }
    // ]
  },
  loading: { color: '#3B8070' },
  css: [
    '@/assets/style/element.scss',
    '@/assets/style/icon.scss',
    '@/assets/style/main.scss'
  ],
  router: {
    base: baseRouter
  },
  plugins: [
    '~/plugins/main'
  ],
  modules: [
    // ['nuxt-i18n', I18N.I18N]
  ],
  build: {
    extractCSS: true,
    vendor: [
      'axios',
      'loglevel'
    ]
    // extend (config, { isDev, isClient }) {
    //   // 可以在此观察、修改 webpack 配置
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

if (env.API_PROXY === 'true') {
  // 可配置是否开启 proxy
  config.modules.push([
    '@nuxtjs/proxy',
    {
      // 调试 URL 重写时建议将此处打开
      logLevel: isTrue(env.API_PROXY_DEBUG) ? 'debug' : 'warn',
      pathRewrite: {
        // 需要重写 URL 时请在这里写
      }
    }
  ])
  config.proxy = {}

  if (isTrue(env.API_STARDUST_PROXY)) {
    config.proxy[env.API_STARDUST_BASE_URL] = env.API_STARDUST_PROXY_TARGET
  }
}

module.exports = config
