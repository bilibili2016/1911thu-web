import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
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
  // 获取老师列表
  async getTeacherList({ pages, limits }) {
    let data = await this.http.get('Wapi/Index/teacherList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取评论列表
  async getEvaluateList({ pages, limits, isRecommend }) {
    let data = await this.http.get('Wapi/Evaluate/evaluateList', {
      page: pages,
      limit: limits,
      is_recommend: isRecommend
    })
    return data
  }
  // 获取资讯列表
  async getNewInfoList({ pages, limits }) {
    let data = await this.http.get('Wapi/News/newsList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取资讯详情
  async getNewInfoDetail({ ids }) {
    let data = await this.http.get('Wapi/News/newsDetail', {
      id: ids
    })
    return data
  }
  async getPartnerList({ pages, limits }) {
    let data = await this.http.get(
      'Wapi/CollaborationEnterprise/collaborationEnterpriseList',
      {
        page: pages,
        limit: limits
      }
    )
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
  // 获取老师个人信息
  async getTeacherInfo({ tids }) {
    let data = await this.http.get('Wapi/Index/teacherInfo', {
      teacher_id: tids
    })
    return data
  }
  // 获取老师名下课程
  async getTeacherCourse({ tids }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      teacher_id: tids
    })
    return data
  }
  // 选定课程
  async addChecked({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      curriculum_id: cartid
    })
    return data
  }
  // hr入口 添加企业信息
  async addCompany({ name, person, phones, codes, userID }) {
    let data = await this.http.post('Wapi/Company/addCompany', {
      company_name: name,
      contact_person: person,
      phone: phones,
      sms_code: codes,
      user_id: userID
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
  // 修改个人信息
  async perInformation({
    nick_name,
    birthday,
    email,
    sex,
    position,
    province,
    city,
    area,
    company_name
  }) {
    let data = await this.http.post('Wapi/MyInfo/perInformationAjax', {
      nick_name: nick_name,
      birthday: birthday,
      email: email,
      sex: sex,
      position: position,
      province: province,
      city: city,
      area: area,
      company_name: company_name
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
  //  获取确认订单购物车列表
  async goodsList() {
    let data = await this.http.get('Wapi/Order/buyCourse')
    return data
  }
  async commitOrder({ companyId, types }) {
    let data = await this.http.post('Wapi/Order/addPaySubmit', {
      company_id: companyId,
      type: types
    })
    return data
  }
  // 提交公司信息 确认订单
  async addCompanyInfo({
    companyname,
    companyaddress,
    contactperson,
    phones,
    codes
  }) {
    let data = await this.http.post('Wapi/Company/addCompany', {
      company_name: companyname,
      company_address: companyaddress,
      contact_person: contactperson,
      phone: phones,
      sms_code: codes
    })
    return data
  }
  // 提交公司信息 addPaySubmit（购物车）
  async addPaySubmit({
    companyname,
    companyaddress,
    contactperson,
    phones,
    codes
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addPaySubmit', {
      company_name: companyname,
      company_address: companyaddress,
      contact_person: contactperson,
      phone: phones,
      phone_sms_code: codes
    })
    return data
  }
  // 购买课程申请列表
  async curriculumPayApply() {
    let data = await this.http.post('Wapi/CurriculumCart/curriculumPayApply')

    return data
  }
  //  添加选中购物车课程 addChecked
  async addChecked({ curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addChecked', {
      curriculum_cart_id: curriculumcartid
    })
    return data
  }
  // 获取默认课程
  async getdefaultCurriculumCatalog({ curriculumid }) {
    let data = await this.http.get(
      'Wapi/CurriculumCatalog/defaultCurriculumCatalog',
      {
        curriculum_id: curriculumid
      }
    )
    return data
  }
  // 获取评论列表
  async getEvaluateTags() {
    let data = await this.http.get('Wapi/Evaluate/evaluateTags')
    return data
  }
  //搜索企业接口
  async searchCompanyList({ companyname }) {
    let data = await this.http.post('Wapi/Company/searchCompanyList', {
      company_name: companyname
    })
    return data
  }
  // 上传用户头像
  async uploadHeadImg({ FILESS }) {
    let data = await this.http.post('Wapi/MyInfo/uploadHeadImg', {
      FILES: FILESS
    })
    return data
  }
  // 支付页面 获取商品列表
  async webPay({ orderId }) {
    let data = await this.http.post('Pay/Pay/webPay', {
      order_id: orderId
    })
    return data
  }
  async payResult({ orderId }) {
    let data = await this.http.get('Wapi/Order/payResult', {
      order_id: orderId
    })
    return data
  }
  // 提交订单成功后回调 payComplete
  async payComplete({ orderId }) {
    let data = await this.http.get('Wapi/Order/payComplete', {
      order_id: orderId
    })
    return data
  }
}
export default new Home()
