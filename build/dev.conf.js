const config = require('./base.conf')

// 本地环境每次执行 npm run build 都要生成包分析报告
config.analyze = {
  analyzerMode: 'html'
}
if (window.location.host === 'http://ceshi.1911thu.com/') {
  var host = 'http://ceshi.1911thu.com/other/ie'
} else if (window.location.host === 'http://edu.1911thu.com/') {
  var host = 'http://edu.1911thu.com/other/ie'
}
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
      window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
    } else if (fIEVersion == 7) {
      window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
    } else if (fIEVersion == 8) {
      window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
    } else if (fIEVersion == 9) {
      console.log('9')
      window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
    } else if (fIEVersion == 10) {
      // window.location.repla('http://ceshi.1911thu.com/other/ie')
    } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
      // return 'IE11'
    } else {
      // return '0'
    }
  }
  // if (isFF) {
  //   return 'FF'
  // }
  // if (isOpera) {
  //   return 'Opera'
  // }
  // if (isSafari) {
  //   return 'Safari'
  // }
  // if (isChrome) {
  //   return 'Chrome'
  // }
  // if (isEdge) {
  //   return 'Edge'
  // }
} //myBrowser() end
// BrowserType()
var isIE = function(ver) {
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}
if (isIE(6)) {
  console.log('6')
  // IE 6
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
}
if (isIE(7)) {
  console.log('7')
  // IE 9
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
}
if (isIE(8)) {
  console.log('8')
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
  // IE 9
}
// ...
if (isIE(9)) {
  console.log('9')
  window.location.replace('http://test.1911thu.com/Wapi/ErrorView/index')
  // IE 9
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
      src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
      async: true
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
