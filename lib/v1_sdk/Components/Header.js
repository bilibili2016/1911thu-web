import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Header {
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
  // 检测兑换码是否包含已购课程
  async detectionCode({ courseId }) {
    let data = await this.http.post(
      'Wapi/InvitationCode/detectionInvitationCode',
      {
        invitation_code: courseId
      }
    )
    return data
  }
  // 兑换码
  async bindingCurriculumPrivate({ courseId }) {
    let data = await this.http.post(
      'Wapi/InvitationCode/buildIngInvitationCodeDone',
      {
        invitation_code: courseId
      }
    )
    return data
  }
  //  获取购物车列表
  async shopCartList() {
    let data = await this.http.post('Wapi/CurriculumCart/shopCartList')
    return data
  }
}

export default new Header()
