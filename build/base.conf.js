const webpack = require('webpack')
const pkg = require('../package.json')
// 注意，所有语言的 dotenv 默认都不会覆盖 process.env
const dotenvConfig = require('dotenv').config()
// const I18N = require('../lib/core/lang')
let env = process.env
// if (dotenvConfig.error) {
//   throw env.error
// }
let dotenv = dotenvConfig.parsed
var es3ifyPlugin = require('es3ify-webpack-plugin')
var babelPloyfill = require('babel-polyfill')

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
const baseRouter = env.BASE_ROUTER
const config = {
  render: {
    resourceHints: false
  },
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
  entry: {
    'babel-polyfill': 'babel-polyfill',
    app: './src/main.js'
  },
  head: {
    title: '1911学堂-混合式终身教育提供者',
    meta: [{
        charset: 'utf-8'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      // {
      //   name: 'viewport',
      //   content:
      //     'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      // },
      {
        hid: 'description',
        name: 'description',
        content: '1911学堂-混合式终身教育提供者'
      }
    ],
    link: [
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: 'https://static-image.1911edu.com/favicon.png'
      // }
      // 需要直接加载的 CSS
    ]
  },
  // loading: { color: '#3B8070' },
  loading: false,
  css: ['@/assets/style/element.scss', '@/assets/style/icon.scss', '@/assets/style/main.scss'],
  router: {
    base: baseRouter
  },
  plugins: [{
    src: '~/plugins/main',
    ssr: false
  }],
  modules: [
    // ['nuxt-i18n', I18N.I18N]
  ],
  rules: [{
    test: /.js$/,
    enforce: 'post', // post-loader处理
    loader: 'es3ify-loader'
  }],
  postLoaders: [{
    test: /\.js$/,
    loaders: ['es3ify-loader']
  }],
  module: {
    loaders: [{
        test: /.js$/,
        exclude: /node_modules/,
        enforce: 'post', // post-loader处理
        loader: 'es3ify-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015-loose']
        }
      }
    ],
    postLoaders: [{
      test: /\.js$/,
      loaders: ['es3ify-loader']
    }]
  },
  build: {
    extractCSS: true,
    vendor: ['axios', 'loglevel'],
    rules: [{
        test: /.js$/,
        enforce: 'post', // post-loader处理
        loader: 'es3ify-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015-loose']
        }
      }
    ],
    postLoaders: [{
      test: /\.js$/,
      loaders: ['es3ify-loader']
    }],
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: false
        },
        mangle: {
          screw_ie8: false
        },
        output: {
          screw_ie8: false
        }
      })
    ]
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
