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
  // 提交答案
  async addAnswer({ selectId, quesionId }) {
    let data = await this.http.get('Wapi/Exam/addAnswer', {
      user_key: selectId,
      user_quesion_id: quesionId
    })
    return data
  }
  // 交卷确认信息
  async submitTestPaper({ recordId }) {
    let data = await this.http.get('Wapi/Exam/submitTestPaper', {
      exam_record_id: recordId
    })
    return data
  }
  // 提交答卷
  async addSubmitTestPaper({ recordId }) {
    let data = await this.http.get('Wapi/Exam/addSubmitTestPaper', {
      exam_record_id: recordId
    })
    return data
  }
}

export default new Examine()
