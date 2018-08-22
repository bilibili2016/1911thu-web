import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Search {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 添加编辑发票信息
  async searchHotWord({ limits, pages }) {
    let data = await this.http.post('Wapi/SearchRecord/hotSearchRecord', {
      limit: limits,
      page: pages
    })
    return data
  }
}

export default new Search()
