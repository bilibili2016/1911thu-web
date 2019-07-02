import http from '../common/HTTP'
class Category {
  constructor() {
    this.http = http
  }
  // 获取一二级列表
  async childCategoryList() {
    let data = await this.http.post('Wapi/Category/childCategoryList')

    return data
  }
  // 获取最新项目页面顶部list
  async getNewProject() {
    let data = await this.http.get('Wapi/Category/projectCategoryList')
    return data
  }
  // 新获取分类列表
  async curriculumListNew({
    cids,
    pids,
    sortBy,
    pages,
    limits,
    isFree
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      category_id_a: cids,
      category_id_b: pids,
      sort_by: sortBy,
      page: pages,
      limit: limits,
      is_free: isFree
    })
    return data
  }
  // 我要选课课程列表
  async chooseCurriculumList({
    pages,
    limits,
    cids,
    pids
  }) {
    let data = await this.http.get('Wapi/Curriculum/chooseCurriculumList', {
      page: pages,
      limit: limits,
      category_id_a: cids,
      category_id_b: pids
    })
    return data
  }
  // 获取最新项目列表
  async curriculumProjectList({
    cids,
    pids,
    sortBy,
    pages,
    limits,
    isFree,
    type,
    is_recommend
  }) {
    let data = await this.http.get(
      'Wapi/CurriculumProject/curriculumProjectList', {
        category_id_a: cids,
        category_id_b: pids,
        sort_by: sortBy,
        page: pages,
        limit: limits,
        is_free: isFree,
        type: type,
        is_recommend: is_recommend
      }
    )
    return data
  }
  async curriculumList({
    categoryIda,
    categoryIdb,
    sortBy,
    pages,
    limits,
    isFree
  }) {
    let data = await this.http.get('Wapi/Curriculum/curriculumList', {
      category_id_a: categoryIda,
      category_id_b: categoryIdb,
      sort_by: sortBy,
      page: pages,
      limit: limits,
      is_free: isFree
    })
    return data
  }
  // 添加购物车
  async addShopCart({
    cartid,
    type
  }) {
    let data = await this.http.post('Wapi/CurriculumCart/addShopCart', {
      operation_id: cartid,
      type: type
    })
    return data
  }
  // 选课页面 card list
  async chooseCurriculumList({
    cids,
    pids,
    sortBy,
    pages,
    limits,
    isFree
  }) {
    let data = await this.http.get('Wapi/Curriculum/chooseCurriculumList', {
      category_id_a: cids,
      category_id_b: pids,
      sort_by: sortBy,
      page: pages,
      limit: limits
    })
    return data
  }
}
export default new Category()
