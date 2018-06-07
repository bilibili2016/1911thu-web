/**
 * 生产环境配置
 */
const config = require('./base.conf')
let env = process.env
const pkg = require('../package.json')
// 配置 sentry
config.modules.push('@nuxtjs/sentry')
config.sentry = {
  dsn: env.SENTRY_DSN,
  config: {
    // debug: true,
    release: pkg.version,
    maxBreadcrumbs: 50
  }
}

config.head.script = [
  { src: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js', async: true },
  {
    src: 'https: //imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',

    async: true
  }
]

module.exports = config
