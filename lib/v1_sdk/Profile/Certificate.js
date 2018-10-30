import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
class Certificate {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 证书认证列表
  async examList({ page, limit }) {
    let data = await this.http.get('Wapi/Exam/examList', {
      page: page,
      limit: limit
    })
    return data
  }
  // 考试记录
  async examRecordLog({ vipID, page, limit }) {
    let data = await this.http.get('Wapi/Exam/examRecordLog', {
      vip_id: vipID,
      page: page,
      limit: limit
    })
    return data
  }
  // 去考试权限验证
  async validateExamPrivilege({ id }) {
    let data = await this.http.post('Wapi/Exam/validateExamPrivilege', {
      id: id
    })
    return data
  }
  // 保存考试认证的用户信息
  async saveExamUserInfo({ name, tel, code, idNumber, unit }) {
    let data = await this.http.post('Wapi/Exam/saveExamUserInfo', {
      real_name: name,
      phone: tel,
      sms_code: code,
      icard_no: idNumber,
      company_name: unit
    })
    return data
  }

  // 证书详情
  async examCertificateDetail({ id }) {
    let data = await this.http.post('Wapi/Exam/examCertificateDetail', {
      vip_id: id
    })
    return data
  }
}
export default new Certificate()
