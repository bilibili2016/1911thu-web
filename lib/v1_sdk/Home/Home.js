import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Home {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken (token) {
    this.http.setToken(token)
  }

  // 获取新上课程列表
  async getNewCourseList ({
    pages,
    limits,
    evaluateLimit
  }) {
    let data = await this.http.post('Wapi/Curriculum/newsCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit
    })
    return data
  }
}
export default new Home()

