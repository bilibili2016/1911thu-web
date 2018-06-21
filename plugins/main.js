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
