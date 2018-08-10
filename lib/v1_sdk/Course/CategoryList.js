import http from '../common/HTTP'
class CategoryList {
  constructor() {
    this.http = http
  }
  async getNewCourseList({ pages, limits, evaluateLimit, isevaluate }) {
    let data = await this.http.get('Wapi/Curriculum/newsCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit,
      is_evaluate: isevaluate
    })
    return data
  }
  // 获取经典课程列表
  async getClassicCourseList({ pages, limits, evaluateLimit, isEvaluate }) {
    let data = await this.http.get('Wapi/Curriculum/recommendCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit,
      is_evaluate: isEvaluate
    })
    return data
  }
  // 获取免费课程列表
  async getFreeCourseList({ pages, limits, evaluateLimit, isEvaluate }) {
    let data = await this.http.get('Wapi/Curriculum/freeCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit,
      is_evaluate: isEvaluate
    })
    return data
  }
  // 获取项目列表
  async getProjectList({ pages, limits }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/newCurriculumProjectList',
      {
        page: pages,
        limit: limits
      }
    )
    return data
  }
}
export default new CategoryList()
