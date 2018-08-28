import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class ProjectPlayer {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 添加购物车
  async addShopCart({ cartid, type }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      operation_id: cartid,
      type: type
    })
    return data
  }
  // 项目播放页
  async getPlayerList({ ids }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/curriculumProjectPlay',
      {
        id: ids
      }
    )
    return data
  }

  // 获取视频的信息
  async getPlayerInfos({ curriculumId, catalogId, projectId, curriculumType }) {
    let data = await this.http.post(
      'Wapi/CurriculumCatalog/curriculumCatalogPlayerInfo',
      {
        curriculum_id: curriculumId,
        catalog_id: catalogId,
        curriculum_project_id: projectId,
        curriculum_type: curriculumType
      }
    )
    return data
  }
  // 获取课程播放详情页
  async getCurriculumPlayInfo({ curriculumId }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumPlayInfo', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 标签-获取标签列表
  async getEvaluateTags() {
    let data = await this.http.get('Wapi/Evaluate/evaluateTags')
    return data
  }
  // 评论-提交评论接口
  async addProjectEvaluate({
    ids,
    curriculumId,
    types,
    evaluateContent,
    scores,
    tag,
    catalogId
  }) {
    let data = await this.http.post(
      'Wapi/Evaluate/addCurriculumProjectEvaluate',
      {
        id: ids,
        curriculum_id: curriculumId,
        type: types,
        evaluate_content: evaluateContent,
        score: scores,
        tags: tag,
        curriculum_catalog_id: catalogId
      }
    )
    return data
  }
}

export default new ProjectPlayer()
