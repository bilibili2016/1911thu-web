
import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
class Auth {
  constructor () {
    this.http = http
    authLog.debug(this)
  }
  setToken (token) {
    this.http.setToken(token)
  }

  // https://server.startask.net
  async signin ({ username, phoneNumber, smsCode, password, fullname }) {
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

}
export default new Auth()
