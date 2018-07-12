const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
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
      'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css'
  }
]),
  (config.head.script = [
    {
      src: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',
      async: true
    },
    {
      src: 'http://parq881t8.bkt.clouddn.com/jquery-1.11.3.min.js',
      async: true
    },
    {
      src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
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
  (config.render = { resourceHints: false })

module.exports = config
