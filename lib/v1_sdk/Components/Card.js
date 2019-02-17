import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Card {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 删除课程 delShopCart
  async delCourseShopCart({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/delShopCart', {
      curriculum_cart_id: cartid
    })
    return data
  }
  // 添加购物车
  async addShopCart({ cartid, type }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      operation_id: cartid,
      type: type
    })
    return data
  }
}

export default new Card()
