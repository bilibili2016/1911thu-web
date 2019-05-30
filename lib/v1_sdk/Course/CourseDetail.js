import http from '../common/HTTP'
// 课程详情方法
class CourseDetail {
  constructor() {
    this.http = http
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
  //评论-评论查看更多 - 分页
  async getEvaluateLists({
    pages,
    limits,
    ids,
    types,
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
  // 课程-获取课程详情
  async getCourseDetail({
    ids
  }) {
    let data = await this.http.post('Wapi/Curriculum/curriculumDetail', {
      id: ids
    })
    return data
  }
  // 获取课程目录列表
  async getCourseList({
    ids
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumCatalogList', {
      curriculum_id: ids
    })
    return data
  }
  // 获取默认课程
  async getdefaultCurriculumCatalog({
    curriculumid
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumCatalog/defaultCurriculumCatalog', {
        curriculum_id: curriculumid
      }
    )
    return data
  }

  // 收藏课程
  async addCollection({
    curriculumId,
    types
  }) {
    let data = await this.http.post('Wapi/Collection/addCollection', {
      curriculum_id: curriculumId,
      type: types
    })
    return data
  }
  // 取消收藏课程
  async deleteCollection({
    curriculumId,
    types
  }) {
    let data = await this.http.post('Wapi/Collection/deleteCollection', {
      curriculum_id: curriculumId,
      type: types
    })
    return data
  }
  // 课程/项目下载列表
  async curriculumResourceList({
    id,
    type,
    page,
    limit
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumResource/curriculumResourceList', {
        id,
        type,
        page,
        limit
      }
    )
    return data
  }
  // 更新下载次数
  async resourceDownloadNum({
    id,
    type
  }) {
    let data = await this.http.post('Wapi/CurriculumResource/resourceDownloadNum', {
      id,
      type
    })
    return data
  }
}
export default new CourseDetail()
