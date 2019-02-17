import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class PayResult {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 提交订单成功后回调 payComplete attachs
  async payComplete({ orderId, attachs }) {
    let data = await this.http.get('Wapi/Order/payComplete', {
      order_id: orderId,
      attach: attachs
    })
    return data
  }
}

export default new PayResult()
