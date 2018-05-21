/**
 * 开发环境配置
 */
const config = require('./base.conf')
config.analyze = {
  analyzerMode: 'html'
}

config.head.script = [
  { src: '/script/jquery.js', async: true }
]

module.exports = config
