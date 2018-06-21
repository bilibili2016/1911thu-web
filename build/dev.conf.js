const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
}
;(config.head.link = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico'
  },
  {
    rel: 'stylesheet',
    href: 'http://imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css'
  }
]),
  (config.head.script = [
    // { src: '/script/jquery.js', async: true },
    // {
    //   src:
    //     'http://imgcache.qq.com/open/qcloud/video/tcplayer/lib/hls.min.0.8.8.js',
    //   async: true
    // },
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
    }
  ])

module.exports = config

