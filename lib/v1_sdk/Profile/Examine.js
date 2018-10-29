import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Examine {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 考试试题详情
  async questionsDetail({ examId, quesionId }) {
    let data = await this.http.get('Wapi/Exam/questionsDetail', {
      exam_record_id: examId,
      user_quesion_id: quesionId
    })

    return data
  }
}

export default new Examine()
