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
}
export default new Info()
