import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Tabs {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取分类列表
  async getClassifyList({ classify }) {
    let data = await this.http.get('Wapi/Category/categoryList', {
      page: classify
    })
    return data
  }
}

export default new Tabs()
