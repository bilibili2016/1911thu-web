import http from '../common/HTTP'
class ticketHistory {
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
    console.log(ID)

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
}
export default new ticketHistory()
