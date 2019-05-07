const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
};
(config.head.link = [{
    rel: 'icon',
    type: 'image/x-icon',
    href: 'https://static-image.1911edu.com/favicon.png'
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
    src: 'https://js.1911edu.com/jquery-1.11.3.min.js',
    async: true
  },
  // {
  // 	src: 'http://js.1911edu.com/jquery.fly.min.js',
  // 	async: true
  // },
  {
    //   2019年4月22号上午更新的七牛云2.8.1版本
    src: 'https://js.1911edu.com/aliplayer-h5-min.js',
    async: true
  },
  {
    src: 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
    async: true
  },
  {
    src: 'https://js.1911edu.com/swfobject.js',
    async: true
  },
  {
    src: 'https://js.1911edu.com/aliyun-webrtc-sdk-1.6.0.min.js',
    async: true
  },
  {
    // src: 'https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js',
    src: 'https://js.1911edu.com/socket.io.js',
    async: true
  }
]),
(config.render = {
  resourceHints: false
}) // 阿里播放器样式 // 阿里播放器 //

module.exports = config
