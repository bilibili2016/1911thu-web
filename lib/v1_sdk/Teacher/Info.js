import http from '../common/HTTP'
import {
  authLog
} from '~/lib/core/logger'
class Info {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取老师个人信息
  async getTeacherInfo({
    tids
  }) {
    let data = await this.http.get('Wapi/Teacher/teacherInfo', {
      teacher_id: tids
    })
    return data
  }
  // 获取老师名下课程
  async getTeacherCourse({
    tids
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      teacher_id: tids
    })
    return data
  }
  // 提交预约信息
  async teacherBespoke({
    teacherId,
    name,
    courseTime,
    startTime,
    problems,
    remark
  }) {
    let data = await this.http.post('Wapi/Teacher/teacherBespoke', {
      teacher_id: teacherId,
      real_name: name,
      use_time: courseTime,
      bespoke_id: startTime,
      ask_question: problems,
      remark: remark,
    })
    return data
  }
  // 获取预约参数信息
  async teacherBespokeInfo({
    teacherId
  }) {
    let data = await this.http.get('Wapi/Teacher/teacherBespokeInfo', {
      teacher_id: teacherId
    })
    return data
  }
}

export default new Info()
