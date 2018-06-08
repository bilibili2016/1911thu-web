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

  // 添加购物车
  async addShopCart ({
    curriculumId
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      curriculum_id: curriculumId
    })
    return data
  }

  // 绑定课程ID
  async getUsedInvitationCodeList () {
    let data = await this.http.post('Wapi/MyInfo/usedInvitationCodeList')
    return data
  }
  // 绑定课程id
  async bindingCurriculumPrivate ({
    invitationCode
  }) {
    let data = await this.http.post('Wapi/MyInfo/bindingCurriculumPrivate', {
      invitation_code: invitationCode
    })
    return data
  }
  // 我的消息
  async userMessage () {
    let data = await this.http.get('Wapi/MyInfo/userMessage')
    return data
  }
  // 修改密码
  async editPassWord ({
    oldps,
    newpass,
    newpasso
  }) {
    let data = await this.http.post('Wapi/MyInfo/editPassWordAjax')
    return data
  }
  // 修改个人信息
  async perInformation ({ nick_name, birthday, email, sex, position, province, city, area }) {
    let data = await this.http.post('Wapi/MyInfo/perInformationAjax', {
      nick_name: nick_name,
      birthday: birthday,
      email: email,
      sex: sex,
      position: position,
      province: province,
      city: city,
      area: area
    })
    return data
  }
  // 获取个人信息
  async getUserInfo () {
    let data = await this.http.post('Wapi/MyInfo/userInfo')
    return data
  }

  // 获取省、市、区
  async getRegionList (regionCode) {
    let data = await this.http.post('Wapi/MyInfo/regionList', { region_code: regionCode })
    return data
  }
  // 获取职业
  async positionList (regionCode) {
    let data = await this.http.get('Wapi/MyInfo/positionList')
    return data
  }
}

export default new Home()
