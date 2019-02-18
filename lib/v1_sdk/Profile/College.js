import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'

class College {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 证书认证列表
  async collegeList({ page, limit }) {
    let data = await this.http.get('Wapi/MyInfo/userVipGoodsList', {
      page: page,
      limit: limit
    })
    return data
  }
}

export default new College()
