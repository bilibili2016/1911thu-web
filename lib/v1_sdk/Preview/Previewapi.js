import http from '../common/HTTP'
class Previewapi {
  constructor() {
    this.http = http
  }
  // 课程-获取课程详情
  async getCourseDetail({
    ids
  }) {
    let data = await this.http.get('/AdminEdu/PreviewApi/curriculumDetail', {
      id: ids
    })
    return data
  }
  // 获取视频的信息
  async getPlayerInfo({
    curriculumId,
    catalogId,
    curriculumType
  }) {
    let data = await this.http.post(
      'AdminEdu/PreviewApi/curriculumCatalogPlayerInfo', {
        curriculum_id: curriculumId,
        catalog_id: catalogId,
        curriculum_type: curriculumType
      }
    )
    return data
  }
  // 获取资讯详情
  async getNewInfoDetail({
    ids
  }) {
    let data = await this.http.get('AdminEdu/PreviewApi/newsDetail', {
      id: ids
    })
    return data
  }
  // 项目详情-85
  async getProjectInfo({
    projectId,
    types
  }) {
    let data = await this.http.get(
      'AdminEdu/PreviewApi/curriculumProjectDetail', {
        id: projectId,
        type: types
      }
    )
    return data
  }
}
export default new Previewapi()
