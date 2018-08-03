import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
import { authLog } from '~/lib/core/logger'
class ShopCart {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  //  获取购物车列表
  async shopCartList() {
    let data = await this.http.post('Wapi/CurriculumCart/shopCartList')
    return data
  }

  //搜索单位接口
  async searchCompanyList({ companyname }) {
    let data = await this.http.post('Wapi/Company/searchCompanyList', {
      company_name: companyname
    })
    return data
  }

  //取消选中购物车课程
  async shopCartremoveChecked({ curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/removeChecked', {
      curriculum_cart_id: curriculumcartid
    })
    return data
  }

  //  添加选中购物车课程 addChecked
  async shopCartaddChecked({ curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addChecked', {
      curriculum_cart_id: curriculumcartid
    })
    return data
  }

  // 购买课程申请列表
  async curriculumPayApply({ ids }) {
    let data = await this.http.get('Wapi/Order/orderDetail', {
      order_id: ids
    })

    return data
  }
  //  添加选中购物车课程 addChecked -- 课程
  async shopCartaddChecked({ curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addChecked', {
      curriculum_cart_id: curriculumcartid
    })
    return data
  }
  //  添加选中购物车课程 addChecked -- 项目
  async shopCartaddProjectChecked({ projectcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/addChecked', {
      project_cart_id: projectcartid
    })
    return data
  }

  //取消选中购物车课程 --- 课程
  async shopCartremoveChecked({ curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/removeChecked', {
      curriculum_cart_id: curriculumcartid
    })
    return data
  }

  //取消选中购物车课程 --- 项目
  async shopCartremoveProjectChecked({ projectcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/removeChecked', {
      project_cart_id: projectcartid
    })
    return data
  }
  // 检测下单课程是否已购买
  async existCourse() {
    let data = await this.http.get('Wapi/CurriculumCart/detectionCart')
    return data
  }
  // 删除课程 delShopCart
  async delCourseShopCart({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/delShopCart', {
      curriculum_cart_id: cartid
    })
    return data
  }

  // 删除项目 delShopCart
  async delProjectShopCart({ cartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/delShopCart', {
      project_cart_id: cartid
    })
    return data
  }
  async delAllShopCart({ projectcartid, curriculumcartid }) {
    let data = await this.http.post('Wapi/CurriculumCart/delShopCart', {
      project_cart_id: projectcartid,
      curriculum_cart_id: curriculumcartid
    })
    return data
  }

  // 购物车数量变更
  async changeCartNumber({ number }) {
    let data = await this.http.post('Wapi/CurriculumCart/changeCartNumber', {
      number: number
    })
    return data
  }

  // 提交公司信息 addPaySubmit（购物车）
  async addPaySubmit({
    companyname,
    companyaddress,
    contactperson,
    phones,
    codes
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addPaySubmit', {
      company_name: companyname,
      company_address: companyaddress,
      contact_person: contactperson,
      phone: phones,
      phone_sms_code: codes
    })
    return data
  }
}
export default new ShopCart()
