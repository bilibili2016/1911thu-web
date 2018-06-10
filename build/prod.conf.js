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
config.head.link = [{
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico'
  },
  {
    rel: 'stylesheet',
    href: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css'
  }
],


config.head.script = [
  { src: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js', async: true },
  {
    src: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/lib/hls.min.0.8.8.js',
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

module.exports = config

