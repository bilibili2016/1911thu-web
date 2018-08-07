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
  async getLastTicket({ types }) {
    let data = await this.http.get('Wapi/Invoice/lasttimeDetail', {
      type: types
    })
    return data
  }
  // 获取发票信息
  async getTicket({ invoiceId }) {
    let data = await this.http.get('Wapi/Invoice/invoiceDetail', {
      invoice_id: invoiceId
    })
    return data
  }
  // 添加编辑发票信息
  async addInvoiceInfo({
    companyname,
    number,
    zcadd,
    phones,
    bank,
    account,
    tel,
    province,
    city,
    area,
    address,
    types,
    radio,
    others,
    name
  }) {
    let data = await this.http.post('Wapi/Invoice/addInvoice', {
      invoice_name: companyname,
      invoice_number: number,
      type: types,
      company_name: companyname,
      company_phone: phones,
      company_address: zcadd,
      content_type: radio,
      content: others,
      consignee: name,
      phone: tel,
      bank_name: bank,
      bank_card: account,
      province: province,
      city: city,
      area: area,
      address: address
    })
    return data
  }
}
export default new TicketOrder()
