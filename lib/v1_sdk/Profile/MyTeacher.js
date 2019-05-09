import http from '../common/HTTP'
class myTeacher {
  constructor() {
    this.http = http
  }
  // 可预约时间列表
  async bespokeTimeList({
    page,
    limit
  }) {
    let data = await this.http.get(
      'Wapi/Teacher/bespokeTimeList', {
        page,
        limit
      }
    )
    return data
  }
  // 录入可预约时间
  async doBespokeTime({
    date,
    startTime,
    endTime
  }) {
    let data = await this.http.post(
      'Wapi/Teacher/doBespokeTime', {
        bespoke_date: date,
        bespoke_start_time: startTime,
        bespoke_end_time: endTime
      }
    )
    return data
  }
  // 接受预约邀请
  async acceptInvitation({
    id
  }) {
    let data = await this.http.post(
      'Wapi/Teacher/acceptInvitation', {
        bespoke_id: id
      }
    )
    return data
  }
  //申请修改预约时间页面所需数据
  async modifyBespokeTime({
    id
  }) {
    let data = await this.http.get(
      'Wapi/Teacher/modifyBespokeTime', {
        bespoke_id: id
      }
    )
    return data
  }
  //申请修改预约时间(POST)
  async doModifyBespokeTime({
    id,
    nextTime, //选择其他时间
    customTime, //自定义时间
    describe, //修改原因描述
  }) {
    let data = await this.http.post(
      'Wapi/Teacher/doModifyBespokeTime', {
        bespoke_id: id,
        other_id: nextTime,
        bespoke_start_time: customTime,
        update_reason: describe
      }
    )
    return data
  }
  //列表详情
  async BespokeDetail({
    id,
    type
  }) {
    let data = await this.http.get(
      'Wapi/LiveBroadcast/teacherBespokeDetail', {
        id,
        type
      }
    )
    return data
  }
  //申请修改预约时间(POST)
  async deleteBespokeTime({
    id,
  }) {
    let data = await this.http.post(
      'Wapi/Teacher/deleteBespokeTime', {
        bespoke_id: id,
      }
    )
    return data
  }
}
export default new myTeacher()
