import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Wepay {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 支付页面 获取商品列表
  async webPay({ orderId }) {
    let data = await this.http.post('Pay/Pay/webPay', {
      order_id: orderId
    })
    return data
  }
  //  获取购物车列表
  async shopCartList() {
    let data = await this.http.post('Wapi/CurriculumCart/shopCartList')
    return data
  }

  async payResult({ orderId, attachs }) {
    let data = await this.http.get('Wapi/Order/payResult', {
      order_id: orderId,
      attach: attachs
    })
    return data
  }
}
export default new Wepay()
