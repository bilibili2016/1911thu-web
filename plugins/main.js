/**
 * 这个文件并不是入口只是用来完成一些在其余代码执行之前的初始化工作
 */
import Vue from 'vue'
import ElementUI from 'element-ui'

import { log } from '../lib/core/logger'

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
// } else {
//   alert('非IE')
// }

function BrowserType() {
  var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf('Opera') > -1 //判断是否Opera浏览器
  // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  var isIE = window.ActiveXObject || 'ActiveXObject' in window
  // var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf('Chrome') > -1 &&
    userAgent.indexOf('Safari') > -1 &&
    !isEdge //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (userAgent.indexOf('MSIE 6.0') != -1) {
      return 'IE6'
    } else if (fIEVersion == 7) {
      return 'IE7'
    } else if (fIEVersion == 8) {
      return 'IE8'
    } else if (fIEVersion == 9) {
      return 'IE9'
    } else if (fIEVersion == 10) {
      return 'IE10'
    } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
      return 'IE11'
    } else {
      return '0'
    } //IE版本过低
  } //isIE end

  if (isFF) {
    return 'FF'
  }
  if (isOpera) {
    return 'Opera'
  }
  if (isSafari) {
    return 'Safari'
  }
  if (isChrome) {
    return 'Chrome'
  }
  if (isEdge) {
    return 'Edge'
  }
} //myBrowser() end

alert(BrowserType())
var isIE = function(ver) {
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  console.log(b.getElementsByTagName('i').length === 1, '123')
  return b.getElementsByTagName('i').length === 1
}
console.log('1')
alert(
  'ie6:' +
    isIE(6) +
    '\n' +
    'ie7:' +
    isIE(7) +
    '\n' +
    'ie8:' +
    isIE(8) +
    '\n' +
    'ie9:' +
    isIE(9) +
    '\n' +
    'ie:' +
    isIE()
)
