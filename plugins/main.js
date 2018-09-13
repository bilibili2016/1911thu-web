/**
 * 这个文件并不是入口只是用来完成一些在其余代码执行之前的初始化工作
 */
// import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import { log } from '../lib/core/logger'
// const ES3CompatibleWebpackPlugin = require('es3-compatible-webpack-plugin')
//   .default
// new ES3CompatibleWebpackPlugin()
log.info(
  '%cStartask Frontend Version: ' + process.env.VERSION,
  'background: #725694 color: #fff'
)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.use(ElementUI)

/**
 * 增加 v-holder 指令
 *
 * 参数跟 HolderJS 一样，只能是字符串，详见 https://github.com/imsky/holder
 */

const eventBus = {}

eventBus.install = function(Vue) {
  Vue.prototype.$bus = new Vue()
}

Vue.use(eventBus)

// var userAgent = navigator.userAgent // 取得浏览器的 userAgent 字符串
// if (
//   userAgent.indexOf('compatible') > -1 &&
//   userAgent.indexOf('MSIE') > -1 &&
//   !userAgent.indexOf('Opera') > -1
// ) {
//   alert('IE')
//   // do IE something
//   window.location.replace('http://www.baidu.com')
// } else {
//   window.location.replace('http://www.baidu.com')
//   alert('非IE')
// }
var isIE = function(ver) {
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}
if (isIE(6)) {
  // IE 6
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
}
if (isIE(7)) {
  // IE 9
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
}
if (isIE(8)) {
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
  // IE 9
}
// ...
if (isIE(9)) {
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
  // if (process.client) {
  //   console.log('process.client')
  //   window.history.replaceState = window.history.replaceState || function() {}
  // }
}
