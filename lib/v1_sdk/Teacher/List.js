import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class List {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 获取老师列表
  async getTeacherList({ pages, limits, recommend }) {
    let data = await this.http.get('Wapi/Index/teacherList', {
      page: pages,
      limit: limits,
      is_recommend: recommend
    })
    return data
  }
}

export default new List()
