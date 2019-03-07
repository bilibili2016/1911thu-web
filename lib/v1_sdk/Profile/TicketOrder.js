import http from '../common/HTTP'
class TicketOrder {
  constructor() {
    this.http = http
  }
  // 获取省、市、区
  async getRegionList(regionCode) {
    let data = await this.http.post('Wapi/MyInfo/regionList', {
      region_code: regionCode
    })
    return data
  }
  //未开发票订单
  async orderNotInvoice() {
    let data = await this.http.get('Wapi/Invoice/orderNotInvoice')
    return data
  }
  // 获取发票信息
  async invoiceContentList() {
    let data = await this.http.get('Wapi/Invoice/invoiceContentList')
    return data
  }
  // 获取上次开具发票信息
  async getLastTicket() {
    let data = await this.http.get('Wapi/Invoice/lasttimeDetail')
    return data
  }
  // 添加编辑发票信息
  async addInvoiceInfo({
    select,
    types,
    contentId,
    content,
    invoiceType,
    invoicename,
    companyname,
    number,
    zcadd,
    telephone,
    bank,
    account,
    name,
    phone,
    email,
    province,
    city,
    area,
    address,
    note,
    orderID,
  }) {
    let data = await this.http.post('Wapi/Invoice/addInvoice', {
      send_type: select,
      type: types,
      content_type: contentId,
      content: content,
      invoice_type: invoiceType,
      invoice_name: invoicename,
      invoice_number: number,
      company_name: companyname,
      company_address: zcadd,
      company_phone: telephone,
      bank_name: bank,
      bank_card: account,
      consignee: name,
      phone: phone,
      email: email,
      province: province,
      city: city,
      area: area,
      address: address,
      remake: note,
      order_id: orderID
    })
    return data
  }
}
export default new TicketOrder()
