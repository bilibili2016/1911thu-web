/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 11:48:50
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-04-28 09:36:37
 * @Describe:  validatefn 文件
 * https://github.com/yiminghe/async-validator#type
 */
import { validateEmail, validatePhone } from './validate'
/**
  * username 验证器
     *
     * @param rule 当前 rule 对象
     * @param value 当前字段的 value
     * @param fn 验证结束用回调函数
     */
export function checkUsername (rule, value, fn) {
  let role = 'worker'
  if (role === 'worker') {
    if (validatePhone(value)) {
      // 表示验证通过
      fn()
    } else {
      // 验证失败
      fn(new Error('请填入有效的手机号。'))
    }
  } else {
    // company 用户可以使用邮箱
    if (validatePhone(value) || validateEmail(value)) {
      fn()
    } else {
      fn(new Error('请填入有效的手机号或邮箱。'))
    }
  }
}
export function checkEmail (rule, value, fn) {
  let role = 'company'
  if (role === 'company') {
    if (validateEmail(value)) {
      // 表示验证通过
      fn()
    } else {
      // 验证失败
      fn(new Error('请填入有效的邮箱'))
    }
  } else {
    // company 用户可以使用邮箱
    if (validateEmail(value) || validateEmail(value)) {
      fn()
    } else {
      fn(new Error('请填入有效的邮箱'))
    }
  }
}
