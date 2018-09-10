const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
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
      src: 'http://parq881t8.bkt.clouddn.com/jquery-1.11.3.min.js',
      async: true
    },
    {
      src: 'https://g.alicdn.com/de/prismplayer/2.7.2/aliplayer-h5-min.js',
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
  ]),
  (config.render = { resourceHints: false }) // 阿里播放器样式 // 阿里播放器 //

module.exports = config
