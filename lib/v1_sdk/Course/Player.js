import http from '../common/HTTP'
class Player {
  constructor() {
    this.http = http
  }
  // 获取课程播放详情页
  async getCurriculumPlayInfo({ curriculumId }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumPlayInfo', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 获取视频的信息
  async getPlayerInfos({ curriculumId, catalogId, curriculumType }) {
    let data = await this.http.post(
      'Wapi/CurriculumCatalog/curriculumCatalogPlayerInfo',
      {
        curriculum_id: curriculumId,
        catalog_id: catalogId,
        curriculum_type: curriculumType
      }
    )
    return data
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
}
export default new Player()
