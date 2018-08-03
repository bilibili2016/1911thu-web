import http from '../common/HTTP'
class PersonalSet {
  constructor() {
    this.http = http
  }
  // 修改个人信息
  async perInformation({
    nick_name,
    birthday,
    email,
    sex,
    position,
    province,
    city,
    area,
    company_name
  }) {
    let data = await this.http.post('Wapi/MyInfo/perInformationAjax', {
      nick_name: nick_name,
      birthday: birthday,
      email: email,
      sex: sex,
      position: position,
      province: province,
      city: city,
      area: area,
      company_name: company_name
    })
    return data
  }
  // 修改密码
  async editPassWord({
    oldps,
    newpass,
    newpasso
  }) {
    let data = await this.http.post('Wapi/MyInfo/editPassWordAjax', {
      oldps: oldps,
      newpass: newpass,
      newpasso: newpasso
    })
    return data
  }
  // 获取职业
  async positionList(regionCode) {
    let data = await this.http.get('Wapi/MyInfo/positionList')
    return data
  }
}
export default new PersonalSet()
