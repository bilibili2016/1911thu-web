/**
 * 辅助函数定义文件
 *
 * 系统内部的一些公用函数可以定义在这里。
 */

// import moment from 'moment'
import { isString, assign } from 'lodash'
import { Message } from 'element-ui'
// 时间戳转换成日期
export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  let D =
    (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  let h =
    (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m =
    (date.getMinutes() * 1 < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
    ':'
  let s =
    date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}
// #验证类
// 验证邮箱
export function isEmail(str) {
  return str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
}
// 验证电话
export function isTel(str) {
  return str.match(/1\d{10}$/)
}
// 验证密码
// #元素类

// 增加a标签
export function openNewWindow(url) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.click()

  setTimeout(() => {
    this.removeElement(a)
  })
}
// 增加div元素设置内容
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

// 移除某个元素
export function removeElement(el) {
  el.parentNode.removeChild(el)
}

// 设置元素自定义属性
export function dataset(el, name) {
  return $(el).attr('data-' + name)
}

// 获取URL参数
export function getQueryString() {
  this.qs = location.search.substr(1)
  this.args = {} // 保存参数数据的对象
  this.items = this.qs.length ? this.qs.split('&') : []
  this.item = null
  this.len = this.items.length

  for (var i = 0; i < this.len; i++) {
    this.item = this.items[i].split('=')
    this.name = decodeURIComponent(this.item[0])

    this.value = decodeURIComponent(this.item[1])
    if (this.name) {
      this.args[this.name] = this.value
    }
  }
  return this.args
}
// 获取url参数
export function searchQueryString(name, defaultVal, url) {
  if (!url) url = window.location.href

  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)

  if (!results) return defaultVal
  if (!results[2]) return defaultVal
  let value = decodeURIComponent(results[2].replace(/\+/g, ' '))
  return value || defaultVal
}
// 生成唯一的字符串
export default function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
// 遍历元素到数组
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
// 获取当前时间戳
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

// 返回顶部或某个位置
export function scrollTo(element, to, duration) {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}
/**
 * Dropzone 配置生成函数
 *
 * 注意，配置中绑定事件是会破坏 dropzone 运行机制的，
 * 必须使用 dropzone.on 方法单独绑定。
 *
 * @param option
 */
export function genDropzoneOption(option) {
  let defautOption = {
    url: 'https://httpbin.org/post',
    timeout: 3600000, // 超时时间，当前为 1 小时
    paramName: 'file',
    maxFilesize: 2,
    parallelUploads: 1,
    useFontAwesome: true,
    withCredentials: true,
    // 文本汉化
    dictDefaultMessage: '请将上传文件拖拽到此处',
    dictFallbackMessage: '很抱歉，您的浏览器不支持拖拽上传，请直接选择文件上传',
    dictFileTooBig: '上传文件超出大小限制',
    dictInvalidFileType: '上传文件类型超出限制',
    dictFallbackText:
      'Please use the fallback form below to upload your files like in the olden days.',
    dictResponseError: 'Server responded with {{statusCode}} code.',
    dictCancelUpload: '取消上传',
    dictCancelUploadConfirmation: '您真的想要取消上传吗？',
    dictRemoveFile: '删除文件',
    dictRemoveFileConfirmation: null,
    dictMaxFilesExceeded: '您无法上传更多的文件了。',
    // Hack
    success(file, response) {
      if (response.errCode > 0) {
        // 请求成功，但是响应错误
        this.emit('error', file, response)
      } else {
        // 请求响应成功
        if (file.previewElement) {
          let $el = $(file.previewElement)
          $el.addClass('dz-success')
        }
      }
    },
    error(file, msgOrResponse) {
      if (file.previewElement) {
        let $el = $(file.previewElement)
        let $error = $el.find('.dz-error-message>span')
        $el.addClass('dz-error')
        if (isString(msgOrResponse)) {
          $error.text(msgOrResponse)
        } else {
          if (msgOrResponse.errCode === 10000) {
            $error.text('上传文件未找到，请重新上传')
          } else {
            $error.text(msgOrResponse.msg)
          }
        }
      }
    }
  }

  return assign({}, defautOption, option)
}

export function copy2clipboard(text) {
  let textArea = document.createElement('textarea')

  // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  textArea.style.position = 'fixed'
  textArea.style.top = 0
  textArea.style.left = 0

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em'
  textArea.style.height = '2em'

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0

  // Clean up any borders.
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent'

  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()

  try {
    // let successful = document.execCommand('copy')
    // let msg = successful ? 'succeed' : 'failed'
  } catch (err) {}

  document.body.removeChild(textArea)
}

export function round(num, precision = 0) {
  let ret
  if (precision <= 0) {
    ret = Math.round(num)
  } else {
    let times = Math.pow(10, precision)
    ret = Math.round(num * times) / times
  }
  return ret
}

// 框架紧耦合的辅助函数

/**
 * 消息提示
 *
 * 以前的消息提示已经不再需要，全部可以改写为使用 element-ui 的 Message 实现，这里只是个示范。
 *
 * @param {String} type success/warning/info/error
 * @param {String} message
 * @param {Boolean} isHTML
 */
export function flash(type = 'info', message = '', isHTML = false) {
  Message({
    dangerouslyUseHTMLString: isHTML,
    type,
    message
  })
}

export function showUnknownError(err) {
  let msg
  if (err.code === 408) {
    msg = '网络请求超时，请检查您的网络状态。'
  } else {
    msg = '未知错误！请联系管理人员协助 ...'
  }

  Message({
    type: 'error',
    message: msg
  })
}

// 密码加密
import { JSEncrypt } from 'jsencrypt'
export function encryption(pwd) {
  let pubkey = '-----BEGIN PUBLIC KEY-----'
  pubkey += 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCr2tsrQsKa3Prj7BEmX4cz6qg/'
  pubkey += 'bdxZaZ903LLoCCMxwYoEL+j3t4JYWxautOkSuYD7IsthqysPn1P0DrUrWF2PzLOm'
  pubkey += 'sm9JU4HSrQvn6GZSSwMMcMhzJ81AdtUCcDABPLla0uR4iXqpjh+BmQGNYFKOgwiG'
  pubkey += 'TzA2e1w6NqOdyGj5QwIDAQAB'
  pubkey += '-----END PUBLIC KEY-----'
  // 利用公钥加密
  let encrypt = new JSEncrypt()
  encrypt.setPublicKey(pubkey)
  return encrypt.encrypt(pwd)
}

// 数组去重的方法
export function unique(arr) {
  var newArr = [arr[0]]
  for (var i = 1; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
