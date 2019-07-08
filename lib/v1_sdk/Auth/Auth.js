import http from '../common/HTTP'
import {
  store as persistStore
} from '~/lib/core/store'
import {
  authLog
} from '~/lib/core/logger'
class Auth {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 退出 登录
  async signOut() {
    this.http.setToken('')
  }

  // 注册 获取手机验证码
  async smsCodes({
    phones,
    types
  }) {
    let data = await this.http.post('Publics/PhoneSms/appSendSms?', {
      phone: phones,
      type: types
    })
    return data
  }

  // 注册接口
  async signUp({
    phones,
    ectpwd,
    codes,
    companyCodes,
    identity
  }) {
    let data = await this.http.post('Wapi/Login/registerAjax', {
      user_name: phones,
      password: ectpwd,
      phoneSmsCode: codes,
      company_code: companyCodes,
      is_teacher: identity
    })
    // this.http.setToken(data.access_token)
    return data
  }
  // 验证手机号是否存在接口
  async verifyPhone({
    phones
  }) {
    let data = await this.http.post('Wapi/Login/checkPhoneReg', {
      phone: phones
    })
    return data
  }

  // 账号密码登录接口
  async signIns({
    phonenum,
    ectpwd,
    loginTypes
  }) {
    let data = await this.http.post('Wapi/Login/loginCheck', {
      user_name: phonenum,
      password: ectpwd,
      loginType: loginTypes
      // phoneSmsCode: null
    })
    return data
  }
  // 手机验证码 登录接口
  async signInsmobile({
    phones,
    loginTypes,
    codes
  }) {
    let data = await this.http.post('Wapi/Login/loginCheck', {
      user_name: phones,
      loginType: loginTypes,
      phoneSmsCode: codes
    })
    return data
  }
  // 忘记密码
  async forgetPasswordAjax({
    phones,
    ectpwd,
    code
  }) {
    let data = await this.http.post('Wapi/Login/forgetPasswordAjax', {
      user_name: phones,
      password: ectpwd,
      phoneSmsCode: code
    })
    return data
  }

  // 验证手机号是否已经绑定了微信
  async verifywechat({
    phones
  }) {
    let data = await this.http.post('Wapi/Login/getThirdPartUser', {
      phone: phones
    })
    return data
  }
  // 微信登录拉取授权接口
  async getWXAccredit({
    state
  }) {
    let data = await this.http.get('Wapi/Index/getThirdPartUser', {
      scene_id: state
    })
    return data
  }

  //绑定微信 Wapi/Login/registerThirdParty
  async loginWechat({
    phones,
    codes,
    openid,
    companyCodes,
    identity
  }) {
    let data = await this.http.post('Wapi/Login/registerThirdParty', {
      phone: phones,
      phoneSmsCode: codes,
      openid: openid,
      company_code: companyCodes,
      is_teacher: identity
    })
    return data
  }
}
export default new Auth()
