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
}
export default new ShopCart()
