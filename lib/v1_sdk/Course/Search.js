import http from '../common/HTTP'
class Search {
  constructor() {
    this.http = http
  }
  // 搜索课程
  async searchCurriculumList({
    pages,
    limits,
    searchword,
    categoryid,
    sortby
  }) {
    let data = await this.http.get('Wapi/Curriculum/searchCurriculumList', {
      page: pages,
      limit: limits,
      search_word: searchword,
      category_id: categoryid
    })
    return data
  }
  // 随机课程（猜你喜欢）
  async getLikeList({ limits }) {
    let data = await this.http.get('Wapi/Curriculum/randCurriculumList', {
      limit: limits
    })
    return data
  }
}
export default new Search()
