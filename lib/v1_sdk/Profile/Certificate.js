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
  async examRecordLog({ page, limit }) {
    let data = await this.http.get('Wapi/Exam/examRecordLog', {
      page: page,
      limit: limit
    })
    return data
  }
  // 去考试全县验证
  async validateExamPrivilege({ id }) {
    let data = await this.http.get('Wapi/Exam/validateExamPrivilege', {
      id: id
    })
    return data
  }
}
export default new Certificate()
