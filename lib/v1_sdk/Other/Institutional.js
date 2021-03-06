import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Institutional {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // hr入口 添加单位信息
  async addCompany({ companyname, person, phones, codes, date, time }) {
    let data = await this.http.post('Wapi/CompanyDb/addCompany', {
      company_name: companyname,
      contact_person: person,
      phone: phones,
      sms_code: codes,
      visit_date: date,
      visit_time: time
    })
    return data
  }

  // 搜索单位接口
  async searchCompanyList({ companyname }) {
    let data = await this.http.post('Wapi/Company/searchCompanyList', {
      company_name: companyname
    })
    return data
  }
}

export default new Institutional()
