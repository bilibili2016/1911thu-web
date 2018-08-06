import http from '../common/HTTP'
class Order {
  constructor() {
    this.http = http
  }
  // 再次购买
  async buyAgain({ ids }) {
    let data = await this.http.get('Wapi/Order/againPay', {
      order_id: ids
    })
    return data
  }
  // 取消订单
  async cancelOrder({ ids }) {
    let data = await this.http.get('Wapi/Order/cancelOrder', {
      order_id: ids
    })
    return data
  }
}
export default new Order()
