import http from '../common/HTTP'
class Home {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 获取banner
  async getBannerList({ types }) {
    let data = await this.http.get('Wapi/Index/bannerList', {
      type: types
    })
    return data
  }
  // 获取分类列表
  async getClassifyList({ classify }) {
    let data = await this.http.get('Wapi/Category/categoryList', {
      page: classify
    })
    return data
  }
  // 获取新上课程列表
  async getNewCourseList({ pages, limits, evaluateLimit, isevaluate }) {
    let data = await this.http.get('Wapi/Curriculum/newsCurriculumList', {
      page: pages,
      limit: limits,
      evaluate_limit: evaluateLimit,
      is_evaluate: isevaluate
    })
    return data
  }
  // 获取经典课程列表
  async getClassicCourseList({ pages, limits, categoryId, sortBy, onOff }) {
    let data = await this.http.get('Wapi/Curriculum/recommendCurriculumList', {
      page: pages,
      limit: limits,
      category_id: categoryId,
      sort_by: sortBy,
      is_hide: onOff
    })
    return data
  }

  // 获取课程详情
  async getCourseDetail({ ids }) {
    let data = await this.http.post('Wapi/Curriculum/curriculumDetail', {
      id: ids
    })
    return data
  }
  // 获取评论列表
  async getEvaluateLists({ pages, limits, ids, types, isRecommend }) {
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
  async getCourseList({ ids }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumCatalogList', {
      curriculum_id: ids
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
  // 播放页报告问题
  async reportProblem({ content, curriculumId }) {
    let data = await this.http.post('Wapi/Problem/addProblem', {
      problem_content: content,
      curriculum_id: curriculumId
    })
    return data
  }

  // 增加评论
  async addEvaluate({ ids, evaluatecontent, scores, types, tags }) {
    let data = await this.http.post('Wapi/Evaluate/addEvaluate', {
      id: ids,
      evaluate_content: evaluatecontent,
      score: scores,
      type: types,
      tag: tags
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
  // 取消课程
  async deleteCollection({ curriculumId }) {
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
  // 随机课程（猜你喜欢）
  async getLikeList({ limits }) {
    let data = await this.http.get('Wapi/Curriculum/randCurriculumList', {
      limit: limits
    })
    return data
  }
  // 我的课程列表
  async studyCurriculumList({ types, pages, limits }) {
    let data = await this.http.get('Wapi/MyInfo/studyCurriculumList', {
      type: types,
      page: pages,
      limit: limits
    })
    return data
  }
  // 收藏列表collectionList
  // 收藏列表collectionList
  async collectionList({ pages, limits }) {
    let data = await this.http.get('Wapi/Collection/collectionList', {
      limit: limits,
      page: pages
    })
    return data
  }
  // 添加购物车
  async addShopCart({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      curriculum_id: cartid
    })
    return data
  }

  // 绑定课程ID
  async getUsedInvitationCodeList() {
    let data = await this.http.post('Wapi/MyInfo/usedInvitationCodeList')
    return data
  }
  // 绑定课程id
  async bindingCurriculumPrivate({ courseId }) {
    let data = await this.http.post('Wapi/MyInfo/bindingCurriculumPrivate', {
      invitation_code: courseId
    })
    return data
  }
  // 获取一二级列表
  async childCategoryList() {
    let data = await this.http.post('Wapi/Category/childCategoryList')

    return data
  }
  // 获取分类课程列表 curriculumList
  async curriculumList({ categoryIda, categoryIdb, sortBy, pages, limits }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      category_id_a: categoryIda,
      category_id_b: categoryIdb,
      sort_by: sortBy,
      page: pages,
      limit: limits
    })
    return data
  }

  // 经典课程获取左侧课程列表 Wapi/Category/childCategoryList
  async getClassicsList() {
    let data = await this.http.get('Wapi/Category/childCategoryList')
    return data
  }
  // 我的消息
  async userMessage() {
    let data = await this.http.get('Wapi/MyInfo/userMessage')
    return data
  }
  // 修改密码
  async editPassWord({ oldps, newpass, newpasso }) {
    let data = await this.http.post('Wapi/MyInfo/editPassWordAjax', {
      oldps: oldps,
      newpass: newpass,
      newpasso: newpasso
    })
    return data
  }
  // 获取个人信息
  async getUserInfo() {
    let data = await this.http.post('Wapi/MyInfo/userInfo')
    return data
  }

  // 获取省、市、区
  async getRegionList(regionCode) {
    let data = await this.http.post('Wapi/MyInfo/regionList', {
      region_code: regionCode
    })
    return data
  }
  // 获取职业
  async positionList(regionCode) {
    let data = await this.http.get('Wapi/MyInfo/positionList')
    return data
  }

  // 删除课程 delShopCart
  async delShopCart({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/delShopCart', {
      curriculum_cart_id: cartid
    })
    return data
  }

  //  获取购物车列表
  async shopCartList() {
    let data = await this.http.post('Wapi/CurriculumCart/shopCartList')
    return data
  }
  // 购物车数量变更
  async changeCartNumber({ number }) {
    let data = await this.http.post('Wapi/CurriculumCart/changeCartNumber', {
      number: number
    })
    return data
  }
}
export default new Home()