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
}
export default new Player()
