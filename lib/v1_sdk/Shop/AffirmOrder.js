import http from '../common/HTTP'
class AffirmOrder {
  constructor() {
    this.http = http
  }
  setToken(token) {
    this.http.setToken(token)
  }
  //  获取确认订单购物车列表
  async goodsList() {
    let data = await this.http.get('Wapi/Order/buyCourse')
    return data
  }

  //提交订单
  async commitOrder() {
    let data = await this.http.post('Wapi/Order/addPaySubmit')
    return data
  }
}

export default new AffirmOrder()
