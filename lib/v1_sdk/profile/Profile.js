import http from '../common/HTTP'
class Profile {
  constructor() {
    this.http = http
  }
  // 收藏列表
  async collectionList({
    categoryId,
    pages,
    limits
  }) {
    let data = await this.http.get('Wapi/Collection/collectionList', {
      category_id: categoryId,
      limit: limits,
      page: pages
    })
    return data
  }

}
export default new Profile()
