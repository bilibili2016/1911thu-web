import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Home {
  constructor () {
    this.http = http
    authLog.debug(this)
  }
  setToken (token) {
    this.http.setToken(token)
  }
  // 获取分类列表
  async getClassifyList({
    classify,
  }) {
    let data = await this.http.get('Wapi/Category/categoryList', {
      page: classify,
    })
    return data
  }
  // 获取新上课程列表
  async getNewCourseList ({
    pages,
    limits,
    evaluateLimit
  }) {
    let data = await this.http.get('Wapi/Curriculum/newsCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit
    })
    return data
  }
  // 获取经典课程列表
  async getClassicCourseList ({
    pages,
    limits,
    categoryId,
    sortBy
  }) {
    let data = await this.http.get('Wapi/Curriculum/recommendCurriculumList', {
      page: pages,
      limit: limits,
      category_id: categoryId,
      sort_by: sortBy
    })
    return data
  }
  // 获取老师列表
  async getTeacherList ({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Index/teacherList', {

      page: pages,
      limit: limits
    })
    return data
  }
  // 获取评论列表
  async getEvaluateList ({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取资讯列表
  async getNewInfoList ({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/News/newsList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取资讯详情
  async getNewInfoDetail ({
    ids
  }) {
    let data = await this.http.get('Wapi/News/newsDetail', {
      id: ids
    })
    return data
  }
  // 获取课程详情
  async getCourseDetail ({
    ids
  }) {
    let data = await this.http.post('Wapi/Curriculum/curriculumDetail', {
      id: ids
    })
    return data
  }
  // 获取评论列表
  async getEvaluateLists ({
    pages,
    limits,
    ids,
    types,
    isRecommend
  }) {
    let data = await this.http.post('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits,
      id: ids,
      type: types,
      is_recommend: isRecommend
    })
    return data
  }
  // 获取课程目录列表
  async getCourseList ({
    ids
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumCatalogList', {
      curriculum_id: ids
    })
    return data
  }
}
export default new Home()
