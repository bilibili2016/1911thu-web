/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 10:50:01
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-04-25 21:24:58
 * @Describe:  交互错误文件
 */

import { BaseError } from 'make-error'

export class ClientError extends BaseError {
  constructor (code, message, data) {
    super(message)
    this.code = code
    this.data = data
  }
}

export class ServerError extends BaseError {
  constructor (code, message) {
    super(message)
    this.code = code
  }
}
