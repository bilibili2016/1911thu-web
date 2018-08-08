import http from '../common/HTTP'
class ProjectDetail {
  constructor() {
    this.http = http
  }
  // 项目详情-85
  async getProjectInfo({ projectId }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/curriculumProjectDetail',
      {
        id: projectId
      }
    )
    return data
  }
  // 获取评论列表-13
  async getEvaluateList({ pages, limits, types, ids, isRecommend }) {
    let data = await this.http.get('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits,
      id: ids,
      type: types,
      is_recommend: isRecommend
    })
    return data
  }

  // 项目评论
  async addEvaluate({
    ids,
    curriculumId,
    types,
    scores,
    evaluateContent,
    tag
  }) {
    let data = await this.http.post(
      'Wapi/Evaluate/addCurriculumProjectEvaluate',
      {
        id: ids,
        curriculum_id: curriculumId,
        type: types,
        score: scores,
        evaluate_content: evaluateContent,
        tags: tag
      }
    )
  }

  // 添加购物车
  async addShopCart({ cartid, type }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      operation_id: cartid,
      type: type
    })
    return data
  }
}
export default new ProjectDetail()
