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
;(config.head.link = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: 'http://papn9j3ys.bkt.clouddn.com/favicon.png'
  },
  {
    rel: 'stylesheet',
    href:
      'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css'
  }
]),
  (config.head.script = [
    {
      src: 'https://hm.baidu.com/hm.js?218b87493661d1bdd50d23f9ae6ae5f0',
      async: true
    },
    {
      src: 'http://parq881t8.bkt.clouddn.com/jquery-1.11.3.min.js',
      async: true
    },
    {
      src: 'http://pcgdozq49.bkt.clouddn.com/aliplayer-h5-min.js',
      async: true
    },
    {
      src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
      async: true
    },
    { src: 'http://pcgdozq49.bkt.clouddn.com/socket.io.js', async: true }
  ]),
  (config.render = { resourceHints: false })

module.exports = config
