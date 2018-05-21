/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-18 09:53:38
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-05-10 09:41:10
  * @File Type:
 * @Describe:
 */
import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
import { other } from '../index'
class Auth {
  constructor () {
    this.http = http
    authLog.debug(this)
  }
  setToken (token) {
    this.http.setToken(token)
  }

  // https://server.startask.net
  async workerSignUp ({ username, phoneNumber, smsCode, password, fullname }) {
    let data = await this.http.post('worker/sign_up', {
      code: smsCode,
      fullname: fullname,
      username: username,
      phone: phoneNumber,
      password: password
    })
    // this.http.setToken(data.access_token)
    persistStore.set('token', data)
    return data
  }
  async companySignUp ({ email, fullname, password }) {
    let data = await this.http.post('company/sign_up', {
      email: email,
      fullname: fullname,
      password: password
    })
    // this.http.setToken(data.access_token)
    return data
  }
  async workerSignIn ({ username, password }) {
    let data = await this.http.post('worker/sign_in', {
      phone: username,
      password: password
    })
    this.http.setToken(data.token)
    return data
  }
  async companySignIn ({ email, password }) {
    let data = await this.http.post('company/sign_in', {
      email: email,
      password: password
    })
    this.http.setToken(data.token)
    return data
  }
  async signOut () {
    this.http.setToken('')
  }

  async refresh () {
    let data = await this.http.post('auth/refresh')

    this.http.setToken(data.access_token)
    return data
  }

  async me () {
    return this.http.get('auth/me')
  }
  async smsCode ({ username }) {
    let data = await this.http.post('worker/verification_code', {
      phone: username
    })
    // this.http.setToken(data.access_token)
    return data
  }

}
export default new Auth()
