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
};
(config.head.link = [
  // {
  //   rel: 'icon',
  //   type: 'image/x-icon',
  //   href: 'http://pam8iyw9q.bkt.clouddn.com/favicon.png'
  // },
  {
    rel: 'stylesheet',
    href: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css'
  }
]),
(config.head.script = [{
    src: 'http://parq881t8.bkt.clouddn.com/jquery-1.11.3.min.js',
    async: true
  },
  {
    src: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',
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
    src: 'http://parq881t8.bkt.clouddn.com/iShare_tidy.js',
    async: true
  }
]),
(config.render = {
  resourceHints: false
})

module.exports = config
