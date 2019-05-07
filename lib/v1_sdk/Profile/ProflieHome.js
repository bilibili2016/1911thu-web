import http from '../common/HTTP'
import {
  authLog
} from '~/lib/core/logger'
class ProflieHome {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 收藏列表collectionList
  async collectionList({
    categoryId,
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Collection/collectionList', {
      category_id: categoryId,
      limit: limits,
      page: pages
    })
    return data
  }
  // 我的课程列表
  async studyCurriculumList({
    categoryId,
    types,
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/MyInfo/studyCurriculumList', {
      category_id: categoryId,
      type: types,
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取一二级列表
  async childCategoryList() {
    let data = await this.http.post('Wapi/Category/childCategoryList')

    return data
  }
  // 个人中心 获取订单列表
  async getAllOrderData({
    pages,
    limits,
    payStatus,
    startTime,
    endTime,
    orderSn
  }) {
    let data = await this.http.get('Wapi/Order/orderList', {
      page: pages,
      limit: limits,
      pay_status: payStatus,
      start_time: startTime,
      end_time: endTime,
      search_word: orderSn
    })
    return data
  }
  //未开发票订单
  async orderNotInvoice({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Invoice/orderNotInvoice', {
      page: pages,
      limit: limits
    })
    return data
  }
  //发票历史
  async tickethistory({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Invoice/invoiceHistory', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 专属兑换码
  async getCodeList({
    pages,
    limits,
    ordersn
  }) {
    let data = await this.http.get(
      'Wapi/InvitationCode/orderInvitationCodeList', {
        page: pages,
        limit: limits,
        order_sn: ordersn
      }
    )
    return data
  }
  // 兑换码-42
  async getUsedInvitationCodeList() {
    let data = await this.http.get(
      'Wapi/InvitationCode/buildIngInvitationCodeList'
    )
    return data
  }
  // 购买课程申请列表
  async curriculumPayApply({
    ids
  }) {
    let data = await this.http.get('Wapi/Order/orderDetail', {
      order_id: ids
    })

    return data
  }
  // 兑换码管理 课程码列表
  async getRecordList({
    pages,
    limits,
    code
  }) {
    let data = await this.http.get(
      'Wapi/InvitationCode/usedInvitationCodeList', {
        page: pages,
        limit: limits,
        invitation_code: code
      }
    )
    return data
  }
  // 我的项目列表
  async getProjectList({
    types,
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/MyInfo/studyProjectList', {
      type: types,
      page: pages,
      limit: limits
    })
    return data
  }
  //项目-收藏列表
  async getProjectCollectList({
    types,
    pages,
    limits
  }) {
    let data = await this.http.get(
      'Wapi/Collection/collectionCurriculumProjectList', {
        type: types,
        limit: limits,
        page: pages
      }
    )
    return data
  }
  // 添加购物车
  async addShopCart({
    cartid,
    type
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      operation_id: cartid,
      type: type
    })
    return data
  }
  // 自定制项目
  async customerProjectList({
    pages,
    limits
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/customizedCurriculumProjectList', {
        page: pages,
        limit: limits
      }
    )
    return data
  }
  //删除自定制项目
  async deleteCustomerProject({
    id
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/deleteCustomizedCurriculumProject', {
        curriculum_project_id: id
      }
    )
    return data
  }
  //获取预约老师信息
  async teacherBespokeList({
    type,
    limit,
    page,
    statusType
  }) {
    let data = await this.http.get('Wapi/LiveBroadcast/teacherBespokeList', {
      status_type: statusType,
      type: type,
      limit: limit,
      page: page
    })
    return data
  }
  //获取个人中心-导师信息
  async teacherRecruitDetail() {
    let data = await this.http.get('Wapi/MyInfo/teacherRecruitDetail')
    return data
  }
  //  导师信息 编辑 editTeacherRecruit
  async editTeacherRecruit({
    id,
    name, // 姓名
    tel, // 手机号
    school, //所在学校
    identity, //身份
    dutyName, //职称
    email, // 常用邮箱
    directionArr, // 擅长领域（多选）
    otherArea, //擅长领域（其他）
    service, // 合作形式
    otherService, //其他合作形式
    consult, //是否提供咨询服务
    courseName, // 授课名称
    resume, // 简历
    otherInfo, //其他信息
    academic, //学历
    studentCard, //学生证
    photo, //个人照片
    teacherRemark
  }) {
    let data = await this.http.post('Wapi/MyInfo/editTeacherRecruit', {
      id: id,
      teacher_name: name, // 姓名
      mobile: tel, // 手机号
      school: school, //所在学校
      identity: identity, //身份
      title: dutyName, // 职称
      email: email, // 邮箱
      study_direction: directionArr, // 擅长领域
      other_study_direction: otherArea, // 擅长领域
      offer_service: service, // 合作形式
      other_offer_service: otherService, // 其他合作形式
      is_meet: consult, //是否提供咨询服务
      curriculum_name: courseName, // 课程名称
      resume_url: resume, // 简历文件地址
      remark: otherInfo, //其他信息
      education: academic, //学历
      student_card: studentCard, //学生证
      photo: photo, //个人照片
      teacher_remark: teacherRemark
    })
    return data
  }
  //删除自定制项目
  async otherAli({
    room
  }) {
    let data = await this.http.get(
      'Welcome/test7', {
        room: room
      }
    )
    return data
  }

}

export default new ProflieHome()
