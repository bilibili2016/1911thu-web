const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
}

config.head.script = [
  { src: '/script/jquery.js', async: true },
  {
    src: 'https://imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.2.1.js',
    async: true
  }

]

module.exports = config

