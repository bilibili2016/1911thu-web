import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class Certification {
    constructor() {
        this.http = http
        authLog.debug(this)
    }
    setToken(token) {
        this.http.setToken(token)
    }


    // 获取图形验证码
    async createVcode() {
        let data = await this.http.get('Publics/VerificationCode/createVcode')
        return data
    }

    // 证书详情
    async certificateDetail({ number, name, code, validateToken }) {
        let data = await this.http.post('Wapi/Certificate/certificateDetail', {
            certificate_number: number,
            user_name: name,
            verification_code: code,
            identity_token: validateToken
        })
        return data
    }

}

export default new Certification()