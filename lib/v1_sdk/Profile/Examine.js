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
  async questionsDetail({ examId, questionId }) {
    let data = await this.http.get('Wapi/Exam/questionsDetail', {
      exam_record_id: examId,
      user_question_id: questionId
    })

    return data
  }
  // 提交答案
  async addAnswer({ selectId, questionId }) {
    let data = await this.http.get('Wapi/Exam/addAnswer', {
      user_key: selectId,
      user_question_id: questionId
    })
    return data
  }
  // 交卷确认信息
  async submitTestPaper({ examId }) {
    let data = await this.http.get('Wapi/Exam/submitTestPaper', {
      exam_record_id: examId
    })
    return data
  }
  // 提交答卷
  async addSubmitTestPaper({ examId }) {
    let data = await this.http.get('Wapi/Exam/addSubmitTestPaper', {
      exam_record_id: examId
    })
    return data
  }
}

export default new Examine()
