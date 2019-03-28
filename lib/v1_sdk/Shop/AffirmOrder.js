import http from '../common/HTTP'
import {
  authLog
} from '~/lib/core/logger'
class AffirmOrder {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取确认订单购物车列表
  async goodsList() {
    let data = await this.http.get('Wapi/Order/buyCourse')
    return data
  }

  // 提交订单
  async commitOrder() {
    let data = await this.http.post('Wapi/Order/addPaySubmit')
    return data
  }
  // 自定义项目
  async customProject({
    curriculumProjectId,
    number
  }) {
    let data = await this.http.post('Wapi/Order/produceBuyCourse', {
      curriculum_project_id: curriculumProjectId,
      study_number: number
    })
    return data
  }
  // vip确认订单
  async produceOrderVip({
    vipID
  }) {
    let data = await this.http.post('Wapi/Order/produceOrderVip', {
      vip_goods_id: vipID
    })
    return data
  }
  // 直接购买->生成订单
  async getCode({
    ids,
    type
  }) {
    let data = await this.http.post('Wapi/Order/produceOrder', {
      id: ids,
      pay_type: type
    })
    return data
  }
  // 会员提交订单
  async addProduceOrderVip({
    vipId,
    number
  }) {
    let data = await this.http.post('Wapi/Order/addProduceOrderVip', {
      vip_goods_id: vipId,
      pay_number: number
    })
    return data
  }
}

export default new AffirmOrder()
