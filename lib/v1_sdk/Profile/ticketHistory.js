import http from '../common/HTTP'
class TicketHistory {
  constructor() {
    this.http = http
  }
  // 获取发票信息
  async getHistoryTicket({ pages, limits }) {
    let data = await this.http.get('Wapi/Invoice/invoiceHistory', {
      page: pages,
      limit: limits
    })
    return data
  }
  //发票中的订单信息
  async invoiceOrderDetail({ ID }) {
    let data = await this.http.get('Wapi/Invoice/invoiceOrderDetail', {
      invoice_id: ID
    })
    return data
  }
  // 获取发票信息
  async invoiceDetail({ ID }) {
    let data = await this.http.get('Wapi/Invoice/invoiceDetail', {
      invoice_id: ID
    })
    return data
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
export default new TicketHistory()
