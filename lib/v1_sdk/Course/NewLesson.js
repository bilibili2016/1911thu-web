import http from '../common/HTTP'
// 最新课程 请求方法
class NewLesson {
  constructor() {
    this.http = http
  }
  // 获取新上课程列表
  async getNewCourseList({ pages, limits, evaluateLimit, isevaluate }) {
    let data = await this.http.get('Wapi/Curriculum/newsCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit,
      is_evaluate: isevaluate
    })
    return data
  }
}
export default new NewLesson()
