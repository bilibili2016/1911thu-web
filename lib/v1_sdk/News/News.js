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
    async getNewInfoList({ page, limits, type, isRecommend }) {
            let data = await this.http.get('Wapi/News/newsList', {
                page: page,
                limit: limits,
                type: type,
                is_recommend: isRecommend
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
        // async getNewsInfoList({ pages, limits }) {
        //         let data = await this.http.get('Wapi/Index/newsList', {
        //             page: pages,
        //             limit: limits
        //         })
        //         return data
        //     }
        //获取新闻支付信息
    async newsOrder({ newsID }) {
            let data = await this.http.post('Wapi/Order/newsOrder', {
                id: newsID,
            })
            return data
        }
        //新闻订单支付结果
    async payResultNews({ newsOrderID }) {
        let data = await this.http.post('Wapi/Order/payResultNews', {
            order_id: newsOrderID,
        })
        return data
    }
}

export default new News()