import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Info {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取老师个人信息
  async getTeacherInfo({ tids }) {
    let data = await this.http.get('Wapi/Teacher/teacherInfo', {
      teacher_id: tids
    })
    return data
  }
  // 获取老师名下课程
  async getTeacherCourse({ tids }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      teacher_id: tids
    })
    return data
  }
}

export default new Info()
