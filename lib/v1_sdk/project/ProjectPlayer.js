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
  // 播放页报告问题   ,
  async reportProblem({ content, curriculumId, curriculumcatalogid }) {
    let data = await this.http.post('Wapi/Problem/addProblem', {
      problem_content: content,
      curriculum_id: curriculumId,
      curriculum_catalog_id: curriculumcatalogid
    })
    return data
  }
  // 获取视频的信息
  async getPlayerInfos({ curriculumId, catalogId }) {
    let data = await this.http.post(
      'Wapi/CurriculumCatalog/curriculumCatalogPlayerInfo',
      {
        curriculum_id: curriculumId,
        catalog_id: catalogId
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
  async addEvaluate({
    ids,
    evaluatecontent,
    scores,
    types,
    tag,
    curriculumcatalogid
  }) {
    let data = await this.http.post('Wapi/Evaluate/addEvaluate', {
      id: ids,
      evaluate_content: evaluatecontent,
      score: scores,
      type: types,
      tags: tag,
      curriculum_catalog_id: curriculumcatalogid
    })
    return data
  }
  // 收藏课程
  async addCollection({ curriculumId }) {
    let data = await this.http.post('Wapi/Collection/addCollection', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 取消收藏课程
  async deleteCollection({ curriculumId }) {
    let data = await this.http.post('Wapi/Collection/deleteCollection', {
      curriculum_id: curriculumId
    })
    return data
  }
}

export default new ProjectPlayer()
