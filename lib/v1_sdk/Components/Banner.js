import http from '../common/HTTP'
import {
  authLog
} from '~/lib/core/logger'
class Banner {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取个人信息
  async getUserInfo() {
    let data = await this.http.post('Wapi/MyInfo/userInfo')
    return data
  }
  // 上传用户头像
  async uploadHeadImg({
    FILESS,
    fileName
  }) {
    let data = await this.http.post('Wapi/MyInfo/uploadHeadImg', {
      FILES: FILESS,
      file_name: fileName
    })
    return data
  }
}

export default new Banner()
