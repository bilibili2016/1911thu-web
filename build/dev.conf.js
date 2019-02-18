const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
};
(config.head.link = [{
    rel: 'icon',
    type: 'image/x-icon',
    href: 'http://static-image.1911edu.com/favicon.png'
  },
  {
    rel: 'stylesheet',
    href: 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css'
  }
]),
(config.head.script = [{
    src: 'https://hm.baidu.com/hm.js?b3d07e5a1ff80ed44d2a56cc704327ea',
    async: true
  },
  {
    src: 'http://js.1911edu.com/jquery-1.11.3.min.js',
    async: true
  },
  {
    src: 'http://js.1911edu.com/aliplayer-h5-min.js',
    async: true
  },
  {
    src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
    async: true
  },
  {
    // src: 'https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js',
    src: 'http://js.1911edu.com/socket.io.js',
    async: true
  }
]),
(config.render = {
  resourceHints: false
}) // 阿里播放器样式 // 阿里播放器 //

module.exports = config
