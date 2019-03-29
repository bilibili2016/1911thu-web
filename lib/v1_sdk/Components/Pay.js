import http from '../common/HTTP'
import {
  authLog
} from '~/lib/core/logger'
class Pay {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  //试看结束 获取支付二维码
  async getCode({
    ids,
    type,
    attachs
  }) {
    let data = await this.http.post('Wapi/Order/produceOrder', {
      id: ids,
      pay_type: type,
      attach: attachs
    })
    return data
  }
}

export default new Pay()
