import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class SimulationExam {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 证书认证列表
  async examList({ page, limit }) {
    let data = await this.http.get('Wapi/ExamTest/examList', {
      page: page,
      limit: limit
    })
    return data
  }
  // 考试记录
  async examRecordLog({ vipID, page, limit }) {
    let data = await this.http.get('Wapi/ExamTest/examRecordLog', {
      vip_id: vipID,
      page: page,
      limit: limit
    })
    return data
  }
  // 去考试权限验证
  async validateSimulationExam({ vipId }) {
    let data = await this.http.post('Wapi/ExamTest/validateExamPrivilege', {
      id: vipId
    })
    return data
  }
  // 保存考试认证的用户信息
  async saveExamUserInfo({ name, tel, code, idNumber, unit }) {
    let data = await this.http.post('Wapi/ExamTest/saveExamUserInfo', {
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
    let data = await this.http.get('Wapi/ExamTest/examCertificateDetail', {
      vip_id: id
    })
    return data
  }
  // 开始模拟考试 创建试卷
  async createExamRecordQuestion({ vipId }) {
    let data = await this.http.post('Wapi/ExamTest/createExamRecordQuestion', {
      id: vipId
    })
    return data
  }
  // 考试试题详情
  async questionsDetail({ examId, questionId }) {
    let data = await this.http.get('Wapi/ExamTest/questionsDetail', {
      exam_record_id: examId,
      user_question_id: questionId
    })
    return data
  }
  // 提交答案
  async addAnswer({ selectId, questionId }) {
    let data = await this.http.get('Wapi/ExamTest/addAnswer', {
      user_key: selectId,
      user_question_id: questionId
    })
    return data
  }
  // 交卷确认信息
  async submitTestPaper({ examId }) {
    let data = await this.http.get('Wapi/ExamTest/submitTestPaper', {
      exam_record_id: examId
    })
    return data
  }
  // 提交答卷
  async addSubmitTestPaper({ examId }) {
    let data = await this.http.get('Wapi/ExamTest/addSubmitTestPaper', {
      exam_record_id: examId
    })
    return data
  }
  //
  // 保存申请证书数据接口
  async addApplyCertificate({
    vipID,
    needPaper,
    name,
    tel,
    province,
    city,
    area,
    add
  }) {
    let data = await this.http.get('Wapi/ExamTest/addApplyCertificate', {
      vip_id: vipID,
      is_paper_certificate: needPaper,
      receiver_name: name,
      receiver_mobile: tel,
      province: province,
      city: city,
      area: area,
      address: add
    })
    return data
  }
}

export default new SimulationExam()
