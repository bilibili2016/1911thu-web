import http from '../common/HTTP'
class Binding {
  constructor() {
    this.http = http
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
  // 兑换码-42
  async getUsedInvitationCodeList() {
    let data = await this.http.get(
      'Wapi/InvitationCode/buildIngInvitationCodeList'
    )
    return data
  }
}
export default new Binding()
