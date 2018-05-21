
let engine = require('store/src/store-engine')
// 设置 store 实现方案
let storages = [
  require('store/storages/localStorage'),
  require('store/storages/cookieStorage')
]
// 设置 store 插件
let plugins = [
  require('store/plugins/defaults'),
  require('store/plugins/expire')
]

export const store = engine.createStore(storages, plugins)
export default store
