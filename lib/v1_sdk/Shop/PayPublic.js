import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class PayPublic {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 对公打款获取code
  async getPayPublicCode({ orderId, phones, attachs }) {
    let data = await this.http.post('Publics/PhoneSms/sendOrderSms', {
      order_id: orderId,
      phone: phones,
      attach: attachs
    })
    return data
  }
  // 支付页面 获取商品列表
  async webPay({ orderId, attachs }) {
    let data = await this.http.post('Pay/Pay/webPay', {
      order_id: orderId,
      attach: attachs
    })
    return data
  }
}

export default new PayPublic()
