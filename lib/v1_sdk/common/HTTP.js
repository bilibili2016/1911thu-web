/**
 * Author: Link<https://github.com/linkdesu>
 */
/* eslint-disable */
import axios from 'axios'
import * as loglevel from 'loglevel'
import { store as persistStore } from '~/lib/core/store'
// import { mock } from '../mock' // 注意！打包上线前请注释
import { ClientError, ServerError } from './Error'
import qs from 'qs'
let level = process.env.DEBUG ? 'debug' : 'warn'

const log = loglevel.getLogger('v1_sdk')
log.setDefaultLevel(level)

/*
 * HTTP
 *
 * 接口请求类，主要是为了将不同接口协议定义的数据格式在进行统一，屏蔽协议细节对其他代码的影响。
 */
class HTTP {
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.API_STARDUST_BASE_URL,
      timeout: process.env.API_STARDUST_TIMEOUT,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded'
        // multipart/form-data
      },
      responseType: 'json'
    })
    // 注意！这个不注释掉，接口永远只会返回 mock 请求
    // mock(this.axios)
    this.axios.interceptors.request.use(config => {
      if (persistStore.get('token')) {
        let token = persistStore.get('token')
        config.headers.common['Authorization'] = token
      }
      return config
    }, error => {
      Promise.reject(error)
    })
  }
  /**
   * 注册/删除 jwt token
   *
   * @param {string} token
   */
  setToken (token) {
    if (token) {
      token = 'JWT ' + token
    }
    this.axios.defaults.headers.common['Authorization'] = token
  }
  getToken () {
    if (persistStore.get('token')) {
      let token = persistStore.get('token')
      return token
    } else {
      let token = ''
      return token
    }
  }
  setTokenother (token) {
    if (token) {
      token = token
    }

    log.info('Set token: ', token)
    this.axios.defaults.headers.common['Authorization'] = token
  }
  /**
   * 发起 GET 请求
   *
   * @param {string} url
   * @param {object} query
   */
  async get (url, query = null) {
    let res
    try {
      res = await this.axios({
        method: 'get',
        url: url,
        params: query
      })
      console.log(res, '这是get获取的')
    } catch (e) {
      if (e.message === 'Network Error') {
        throw e
      } else {
        this._handleError(e.response)
      }
    }

    return this._handleResponse(res)
  }

  /**
   * 发起 DELETE 请求
   *
   * @param {string} url
   * @param {object} query
   */
  async delete (url, query = null) {
    let res
    try {
      res = await this.axios({
        method: 'delete',
        url: url,
        params: query
      })
    } catch (e) {
      if (e.message === 'Network Error') {
        throw e
      } else {
        this._handleError(e.response)
      }
    }

    return this._handleResponse(res)
  }

  /**
   * 发起 POST 请求
   *
   * @param {string} url
   * @param {object} data
   * @param {object} query
   */
  async post (url, data = null, query = null) {
    let res
      console.log(res)

    try {
      res = await this.axios({
        method: 'post',
        url: url,
        params: query,
        data: qs.stringify(data)

        // data: qs.stringify(data)
      })

    } catch (e) {
      log.debug(e)
      if (e.message === 'Network Error') {
        throw e
      } else {
        this._handleError(e.response)
      }
    }

    return this._handleResponse(res)
  }

  /**
   * 发起 PUT 请求
   *
   * @param {string} url
   * @param {object} data
   * @param {object} query
   */
  async put (url, data = null, query = null) {
    let res

    try {
      res = await this.axios({
        method: 'put',
        url: url,
        params: query,
        data: data
      })
    } catch (e) {
      if (e.message === 'Network Error') {
        throw e
      } else {
        this._handleError(e.response)
      }
    }

    return this._handleResponse(res)
  }

  /**
   * 发起 PATCH 请求
   *
   * @param {string} url
   * @param {object} data
   * @param {object} query
   */
  async patch (url, data = null, query = null) {
    let res

    try {
      res = await this.axios({
        method: 'patch',
        url: url,
        params: query,
        data: data
      })
    } catch (e) {
      if (e.message === 'Network Error') {
        throw e
      } else {
        this._handleError(e.response)
      }
    }

    return this._handleResponse(res)
  }

  _handleResponse (res) {
    log.info('Api response success:', {
      // http_code: res.status, // 请求响应的 HTTP 编码
      method: res.config.method, // 请求方式
      url: res.config.url, // 请求 URL
      request: res.config.data, // 请求数据
      request_header: res.config.headers, // 请求头信息
      response: res.data, // 响应数据
      response_header: res.headers // 响应头信息
    })

    return res.data
  }

  _handleError (res) {
    log.error('Api response error:', {
      http_code: res.status, // 请求响应的 HTTP 编码
      method: res.config.method, // 请求方式
      url: res.config.url, // 请求 URL
      request: res.config.data, // 请求数据
      request_header: res.config.headers, // 请求头信息
      response: res.data, // 响应数据
      response_header: res.headers // 响应头信息
    })

    let httpCode = res.status
    let data = res.data
    if (httpCode >= 400 && httpCode < 500) {
      throw new ClientError(data.code, data.message, data.data)
    } else if (httpCode >= 500) {
      throw new ServerError(data.code, data.message)
    } else {
      throw new Error('Undefined http error')
    }
  }
}

export default new HTTP()
