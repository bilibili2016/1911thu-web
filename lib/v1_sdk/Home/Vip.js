import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
class Vip {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 会员购买下单
  async addProduceOrderVip({ vipId, number }) {
    let data = await this.http.post('Wapi/Order/addProduceOrderVip', {
      vip_goods_id: vipId,
      pay_number: number
    })
    return data
  }
}
export default new Vip()
