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
  // {
  //   rel: 'icon',
  //   type: 'image/x-icon',
  //   href: 'http://papn9j3ys.bkt.clouddn.com/favicon.png'
  // },
  {
    rel: 'stylesheet',
    href: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css'
  },
  {
    rel: 'stylesheet',
    href:
      'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css'
  },
  {
    rel: 'stylesheet',
    href:
      'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css'
  }
]),
  (config.head.script = [
    {
      src: 'http://parq881t8.bkt.clouddn.com/jquery-1.11.3.min.js',
      async: true
    },
    {
      src: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',
      async: true
    },
    {
      src:
        'http://imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.2.2.js',
      async: true
    },
    {
      src: 'https://g.alicdn.com/de/prismplayer/2.7.2/aliplayer-h5-min.js',
      async: true
    },
    {
      src:
        'https://player.alicdn.com/aliplayer/presentation/js/aliplayercomponents.min.js',
      async: true
    },
    {
      src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
      async: true
    },
    {
      src: 'https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js',
      async: true
    },
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js',
      async: true
    }
  ]),
  (config.render = { resourceHints: false }) // { src: 'http://pcgdozq49.bkt.clouddn.com/social-share.min.js', async: true }

module.exports = config
