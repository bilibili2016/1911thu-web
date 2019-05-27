import http from '../common/HTTP'
class Order {
  constructor() {
    this.http = http
  }
  // 再次购买
  async buyAgain({
    ids
  }) {
    let data = await this.http.get('Wapi/Order/againPay', {
      order_id: ids
    })
    return data
  }
  // 取消订单
  async cancelOrder({
    ids
  }) {
    let data = await this.http.get('Wapi/Order/cancelOrder', {
      order_id: ids
    })
    return data
  }
  // 删除订单到回收站
  async doOrderTrash({
    id
  }) {
    let data = await this.http.post('Wapi/Order/doOrderTrash', {
      order_id: id
    })
    return data
  }
  // 回收站订单列表
  async getOrderTrashList({
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Order/orderTrashList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 永久删除订单
  async doDeleteOrder({
    id
  }) {
    let data = await this.http.post('Wapi/Order/doDeleteOrder', {
      order_id: id
    })
    return data
  }
}
export default new Order()
