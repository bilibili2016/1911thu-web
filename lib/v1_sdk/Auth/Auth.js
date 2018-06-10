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
  // 验证手机号是否存在接口
  async verifyPhone({ phones }) {
    let data = await this.http.post('Wapi/Login/checkPhoneReg', {
      phone: phones
    })
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
  // 忘记密码
  async forgetPasswordAjax ({
    phones,
    password,
    code
  }) {
    let data = await this.http.post('Wapi/Login/forgetPasswordAjax', {
      user_name: phones,
      password: password,
      phoneSmsCode: code
    })
    return data
  }

  // 微信登录接口获取授权
  async getWXAccredit({
    
  }) {
    let data = await this.http.get('', {
      
    })
    return data
  }
  // 微信登录拉取授权接口
  async judgeWX({
      state
    }) {
    let data = await this.http.post('Wapi/Index/getThirdPartUser', {
      scene_id: state
    })
    return data
  }


}
export default new Auth()
