import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class CheckedCourse {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 购买课程申请列表
  async curriculumPayApply({ ids }) {
    let data = await this.http.get('Wapi/Order/orderDetail', {
      order_id: ids
    })

    return data
  }
}

export default new CheckedCourse()
