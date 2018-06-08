import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Home {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取分类列表
  async getClassifyList({
    classify
  }) {
    let data = await this.http.get('Wapi/Category/categoryList', {
      page: classify
    })
    return data
  }
  // 获取新上课程列表
  async getNewCourseList({
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
  async getClassicCourseList({
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
  async getTeacherList({
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
  async getEvaluateList({
    pages,
    limits,
    isRecommend
  }) {
    let data = await this.http.get('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits,
      is_recommend: isRecommend
    })
    return data
  }
  // 获取资讯列表
  async getNewInfoList({
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
  async getNewInfoDetail({
    ids
  }) {
    let data = await this.http.get('Wapi/News/newsDetail', {
      id: ids
    })
    return data
  }
  // 获取课程详情
  async getCourseDetail({
    ids
  }) {
    let data = await this.http.post('Wapi/Curriculum/curriculumDetail', {
      id: ids
    })
    return data
  }
  // 获取评论列表
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
  // 获取课程目录列表
  async getCourseList({
    ids
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumCatalogList', {
      curriculum_id: ids
    })
    return data
  }
  // 获取视频的信息
  async getPlayerInfo({
    curriculumId,
    catalogId
  }) {
    let data = await this.http.post('Wapi/CurriculumCatalog/curriculumCatalogPlayerInfo', {

      curriculum_id: curriculumId,
      catalog_id: catalogId
    })
    return data
  }
  // 获取课程播放详情页
  async getCurriculumPlayInfo({
    curriculumId
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumPlayInfo', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 增加课程
  async addEvaluate({
    ids,
    evaluatecontent,
    scores,
    types
  }) {
    let data = await this.http.post('Wapi/Evaluate/addEvaluate', {

      id: ids,
      evaluate_content: evaluatecontent,
      score: scores,
      type: types
    })
    return data
  }
  // 收藏课程
  async addCollection({
    curriculumId
  }) {
    let data = await this.http.post('Wapi/Collection/addCollection', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 取消课程
  async deleteCollection({
    curriculumId
  }) {
    let data = await this.http.post('Wapi/Collection/deleteCollection', {
      curriculum_id: curriculumId
    })
    return data
  }
  // 搜索课程
  async searchCurriculumList({
    pages,
    limits,
    searchword,
    categoryid,
    sortby
  }) {
    let data = await this.http.get('Wapi/Curriculum/searchCurriculumList', {
      page: pages,
      limit: limits,
      search_word: searchword,
      category_id: categoryid
    })
    return data
  }
  // 我的课程列表
  async studyCurriculumList({
    types,
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/MyInfo/studyCurriculumList', {
      type: types,
      page: pages,
      limit: limits
    })
    return data
  }
  // 收藏列表collectionList
  // 收藏列表collectionList
  async collectionList({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Collection/collectionList', {

      limit: limits,
      page: pages
    })
    return data
  }
  // 添加购物车
  async addShopCart({
    curriculumId
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      curriculum_id: curriculumId
    })
    return data
  }

  // 绑定课程ID
  async getUsedInvitationCodeList() {
    let data = await this.http.post('Wapi/MyInfo/usedInvitationCodeList')
    return data
  }
  // 绑定课程id
  async bindingCurriculumPrivate({
    invitationCode
  }) {
    let data = await this.http.post('Wapi/MyInfo/bindingCurriculumPrivate', {
      invitation_code: invitationCode
    })
    return data
  }
  // 获取一二级列表
async childCategoryList() {
  let data = await this.http.post('Wapi/Category/childCategoryList')

  return data
}
// 获取分类课程列表 curriculumList
  async curriculumList({
      categoryIda,
      categoryIdb,
      sortBy,
      pages,
      limits
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      category_id_a: categoryIda,
      category_id_b: categoryIdb,
      sort_by: sortBy,
      page: pages,
      limit: limits
    })
    return data
  }



}
export default new Home()
