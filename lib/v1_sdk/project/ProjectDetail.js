import http from '../common/HTTP'
class ProjectDetail {
  constructor() {
    this.http = http
  }
  // 项目详情-85
  async getProjectInfo({
    projectId
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/curriculumProjectDetail', {
        id: projectId
      }
    )
    return data
  }
  // 获取评论列表-13
  async getEvaluateList({
    pages,
    limits,
    types,
    ids,
    isRecommend
  }) {
    let data = await this.http.get('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits,
      id: ids,
      type: types,
      is_recommend: isRecommend
    })
    return data
  }
}
export default new ProjectDetail()
