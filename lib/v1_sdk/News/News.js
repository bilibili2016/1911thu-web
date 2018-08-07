import http from '../common/HTTP'
import { authLog } from '~/lib/core/logger'
class News {
  constructor() {
    this.http = http
    authLog.debug(this)
  }
  setToken(token) {
    this.http.setToken(token)
  }
  // 获取资讯列表
  async getNewInfoList({ pages, limits }) {
    let data = await this.http.get('Wapi/News/newsList', {
      page: pages,
      limit: limits
    })
    return data
  }
  // 获取资讯详情
  async getNewInfoDetail({ ids }) {
    let data = await this.http.get('Wapi/News/newsDetail', {
      id: ids
    })
    return data
  }
  // 获取首页资讯列表
  async getNewsInfoList({ pages, limits }) {
    let data = await this.http.get('Wapi/Index/newsList', {
      page: pages,
      limit: limits
    })
    return data
  }
}

export default new News()
