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
  async getPayPublicCode({ orderId, phones }) {
    let data = await this.http.post('Publics/PhoneSms/sendOrderSms', {
      order_id: orderId,
      phone: phones
    })
    return data
  }
}

export default new PayPublic()
