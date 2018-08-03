import http from '../common/HTTP'
class Conversion {
  constructor() {
    this.http = http
  }
  // 兑换码管理 课程码列表
  async getRecordList() {
    let data = await this.http.get('Wapi/InvitationCode/usedInvitationCodeList')
    return data
  }
}
export default new Conversion()
