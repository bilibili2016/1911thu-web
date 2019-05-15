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
    type
  }) {
    let data = await this.http.get('Wapi/LiveBroadcast/teacherBespokeInfo', {
      id: appointId,
      type: type
    })
    return data
  }
  //获取播放房间号
  async getPlayAuthInfo({
    room
  }) {
    let data = await this.http.post(
      'Wapi/LiveBroadcast/getAliRtc', {
        room_number: room
      }
    )
    return data
  }

}
export default new Live()
