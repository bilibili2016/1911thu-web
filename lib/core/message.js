
// import { MESSAGE_TYPE } from './constant'
import Vue from 'vue'
export function message (types, message) {
  Vue.prototype.$message({
    type: types,
    message: message
  })
}
