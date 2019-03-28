import http from '../common/HTTP'
class Info {
  constructor() {
    this.http = http
  }
  // 我的消息
  async userMessage({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/MyInfo/userMessage', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 更新用户消息已读状态
  async updateMyInfo({
    infoId
  }) {
    let data = await this.http.post('Wapi/MyInfo/updateMessageReadStatus', {
      message_id: infoId
    })
    return data
  }
}
export default new Info()
