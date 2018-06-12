const webpack = require('webpack')
const pkg = require('../package.json')
// 注意，所有语言的 dotenv 默认都不会覆盖 process.env
const dotenvConfig = require('dotenv').config()
const I18N = require('../lib/core/lang')
let env = process.env
// if (dotenvConfig.error) {
//   throw env.error
// }
let dotenv = dotenvConfig.parsed

/**
 * 检查值是否为 true
 *
 * 因为 process.env 中只有字符串一种数据类型
 *
 * @param {*} value
 */
function isTrue(value) {
  return value === 'true'
}

// process.env.DEBUG 在 nuxt 中也有使用，所以这里只用 dotenv 中的
// const DEBUG = isTrue(dotenv.DEBUG)
const baseRouter = env.BASE_ROUTER
const config = {
  mode: 'spa',
  env: {
    VERSION: pkg.version,
    NODE_ENV: env.NODE_ENV, // TODO 这里本地总是 development
    // DEBUG: DEBUG,
    BASE_URL: env.BASE_URL,
    BASE_ROUTER: baseRouter,

    // stardust 接口配置
    API_STARDUST_BASE_URL: env.API_STARDUST_BASE_URL,
    API_STARDUST_TIMEOUT: env.API_STARDUST_TIMEOUT
  },
  head: {
    title: '1911学堂',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'renderer', content: 'webkit' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: '1911学堂' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 需要直接加载的 CSS
      {
        rel: 'stylesheet',
        href: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css'
      }

      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    script: [
      {
        src:
          'http://imgcache.qq.com/open/qcloud/video/tcplayer/lib/hls.min.0.8.8.js',
        async: true
      },
      {
        src: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.js',
        async: true
      },
      {
        src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
        async: true
      }
    ]

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
  plugins: ['~/plugins/main'],
  modules: [
    // ['nuxt-i18n', I18N.I18N]
  ],
  build: {
    extractCSS: true,
    vendor: ['axios', 'loglevel']
    // extend(config, { isDev, isClient }) {
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
  // 关于代理的配置方法详见： https://github.com/chimurai/http-proxy-middleware
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
    // 可配置是否开启 stardust 接口的 proxy
    config.proxy[env.API_STARDUST_BASE_URL] = env.API_STARDUST_PROXY_TARGET
  }
}

module.exports = config
