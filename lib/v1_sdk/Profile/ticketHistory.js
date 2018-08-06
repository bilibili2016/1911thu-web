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
}
export default new ticketHistory()
