import http from '../common/HTTP'
import {
    authLog
} from '~/lib/core/logger'
class PersonalSet {
    constructor() {
        this.http = http
        authLog.debug(this)
    }
    setToken(token) {
            this.http.setToken(token)
        }
        // 修改个人信息
    async perInformation({
            real_name,
            nick_name,
            birthday,
            email,
            sex,
            position,
            province,
            city,
            area,
            company_name,
            bank_name,
            bank_card
        }) {
            let data = await this.http.post('Wapi/MyInfo/perInformationAjax', {
                real_name: real_name,
                nick_name: nick_name,
                birthday: birthday,
                email: email,
                sex: sex,
                position: position,
                province: province,
                city: city,
                area: area,
                company_name: company_name,
                bank_card: bank_card,
                bank_name: bank_name
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
        // 获取个人信息
    async getUserInfo() {
            let data = await this.http.post('Wapi/MyInfo/userInfo')
            return data
        }
        // 获取省、市、区
    async getRegionList(regionCode) {
        let data = await this.http.post('Wapi/MyInfo/regionList', {
            region_code: regionCode
        })
        return data
    }

    // 验证手机号与绑定手机号是否一致
    async confirmPhoneByUser({
        phones
    }) {
        let data = await this.http.post('Wapi/Login/confirmPhoneByUser', {
            phone: phones
        })
        return data
    }

    // 绑定手机号
    async editPhone({
        phones,
        oldPhone,
        codes
    }) {
        let data = await this.http.post('Wapi/MyInfo/editPhone', {
            phone: phones,
            old_phone: oldPhone,
            sms_code: codes
        })
        return data
    }
}
export default new PersonalSet()