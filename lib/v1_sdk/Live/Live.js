import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Live {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 直播信息
  async teacherBespokeInfo({
    appointId,
    userId
  }) {
    let data = await this.http.post('Wapi/LiveBroadcast/teacherBespokeInfo', {
      id: appointId,
      user_id: userId
    })
    return data
  }
}
export default new Live()
