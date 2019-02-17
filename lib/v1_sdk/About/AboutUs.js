import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
class About {
  constructor() {
    this.http = http
  }
  // 关于我们标题列表
  async titleList() {
    let data = await this.http.get('Wapi/About/aboutTitleList')
    return data
  }
  // 关于我们详情
  async aboutDetail({ id }) {
    let data = await this.http.get('Wapi/About/aboutDetail', {
      id
    })
    return data
  }
}

export default new About()
