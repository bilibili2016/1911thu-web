import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Auth {
  constructor () {
    this.http = http
    authLog.debug(this)
  }
  setToken (token) {
    this.http.setToken(token)
  }
  // 退出 登录
  async signOut() {
     this.http.setToken('')
  }

  // 注册 获取手机验证码
  async smsCodes ({ phones, types }) {
    let data = await this.http.post('Publics/PhoneSms/appSendSms?', {
      phone: phones,
      type: types
    })
    return data
  }

  // 注册接口
  async signUp ({ phones, passwords, codes, companyCodes }) {
    let data = await this.http.post('Wapi/Login/registerAjax', {
      user_name: phones,
      password: passwords,
      phoneSmsCode: codes,
      company_code: companyCodes
    })
    // this.http.setToken(data.access_token)
    return data
  }
  // 登录接口
  async signIns ({ phonenum, password, loginTypes }) {
    let data = await this.http.post('Wapi/Login/loginCheck', {

      user_name: phonenum,

      password: password,
      loginType: loginTypes
      // phoneSmsCode: null

    })
    return data
  }

  // 微信登录接口
  async wechat ({
    QRcode
  }) {
    let data = await this.http.get('Wapi/Index/wxIndex', {
      wxurl: QRcode
    })
    return data
  }

}
export default new Auth()
