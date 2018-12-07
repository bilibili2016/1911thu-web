/**
 * 过滤不需要传token的接口
 * absolve：不要传的列表
 * filter：检测、过滤
 */
let absolve = [
  'Wapi/Headmaster/doRecruit',
  'Wapi/VipGoods/vipGoodsList'
]
export function filterURL(config) {
  if (absolve.indexOf(config.url) > -1) {
    config.headers.common['Authorization'] = ''
  }
  return config
}
