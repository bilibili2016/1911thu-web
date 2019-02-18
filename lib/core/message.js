/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 12:14:51
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-04-27 10:59:57
 * @Describe:  消息提示模块
 * 存放整个项目的消息提示,消息提示比较多，在此统一管理
 */
// import { MESSAGE_TYPE } from './constant'
import Vue from 'vue'
export function message (types, message) {
  Vue.prototype.$message({
    type: types,
    message: message
  })
}
