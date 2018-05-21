/**
 * 配置管理类
 *
 * 目前专门用于接受模板注入的数据，方便其他地方使用。
 *
 * @constructor
 */
import * as _ from 'lodash'

class Config {

/**
* 配置输入方法
*
* 注意只能输入一次，因为不建议当做全局变量使用。
*
* @param key
* @param value
*/
  set (key, value) {
    if (_.has(this, key)) {
      throw new Error('Config key [' + key + '] has been defined !')
    }
    _.set(this, key, value)
  }
  /**
* 配置读取方法
*
* @param key
* @param defaultValue
* @returns {*}
*/
  get (key, defaultValue) {
    if (_.has(this.key)) {
      if (defaultValue) {
        return defaultValue
      } else {
        throw new Error('Config key [' + key + '] is undefined !')
      }
    }

    return _.get(this, key)
  }
}

export default Config
