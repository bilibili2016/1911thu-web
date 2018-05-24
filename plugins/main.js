/**
 * 这个文件并不是入口只是用来完成一些在其余代码执行之前的初始化工作
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import Holder from 'holderjs'

import { log } from '../lib/core/logger'

log.info('%cStartask Frontend Version: ' + process.env.VERSION, 'background: #725694 color: #fff')

Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.use(ElementUI)

/**
 * 增加 v-holder 指令
 *
 * 参数跟 HolderJS 一样，只能是字符串，详见 https://github.com/imsky/holder
 */
Vue.directive('holder', {
  bind (el, binding) {
    log.debug('Handle v-holder: ', el, binding.value)
    if (!binding.value) {
      // 默认参数
      el.setAttribute('data-src', 'holder.js/100px100p?auto=yes')
      Holder.run({images: el})

    } else if (Object.prototype.toString.call(binding.value) === '[object String]') {
      el.setAttribute('data-src', 'holder.js/' + binding.value)
      Holder.run({images: el})
    }
  }
})
