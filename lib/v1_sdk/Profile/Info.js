import http from '../common/HTTP'
class Info {
  constructor() {
    this.http = http
  }
  // 我的消息
  async userMessage() {
    let data = await this.http.get('Wapi/MyInfo/userMessage')
    return data
  }
}
export default new Info()
