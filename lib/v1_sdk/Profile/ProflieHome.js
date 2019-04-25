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
}

export default new ProflieHome()
