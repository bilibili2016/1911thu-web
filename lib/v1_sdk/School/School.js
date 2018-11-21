import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class School {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }

  // 城市分校长招募
  async doRecruit({
    province, // 省份Code
    city, // 城市Code
    name, // 姓名
    tel, // 手机号
    email, // 邮箱
    companyName, // 公司名称
    markAnalyze, // 当地市场分析
    advantageIntro, // 自身优势介绍
    jobImagine, // 未来工作设想
    businessLicense // 营业执照
  }) {
    let data = await this.http.post('Wapi/Headmaster/doRecruit', {
      province: province, // 省份Code
      city: city, // 城市Code
      headmaster_name: name, // 预约人
      mobile: tel, // 手机号
      email: email, // 邮箱
      company_name: companyName, // 公司名称
      market_analysis: markAnalyze, // 当地市场分析
      advantage: advantageIntro, // 自身优势介绍
      working_assumption: jobImagine, // 未来工作设想
      license_url: businessLicense // 营业执照
    })
    return data
  }

  // 获取区域列表
  async getRegionList() {
    let data = await this.http.get('Wapi/Headmaster/getRegionList')
    return data
  }

  // 三级联动 根据区域请求省市
  async getRegionAreaList({ regionID }) {
    let data = await this.http.get('Wapi/Headmaster/getRegionAreaList', {
      region_id: regionID // 区域ID
    })
    return data
  }

  // 分校校址列表
  async headmasterList({
    page, // 页数
    limit, // 每页显示条数
    region, // 区域ID
    province, // 省份Code
    city // 城市Code
  }) {
    let data = await this.http.get('Wapi/Headmaster/headmasterList', {
      page: page, // 页数
      limit: limit, // 每页显示条数
      region_id: region, // 区域ID
      province_code: province, // 省份Code
      city_code: city // 城市Code
    })
    return data
  }
}

export default new School()
