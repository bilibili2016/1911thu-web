/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 11:48:50
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2019-04-28 10:57:51
 * @Describe:  validatefn 文件
 * https://github.com/yiminghe/async-validator#type
 */
import {
  validateCode,
  validatePhone,
  validatePassword,
  validateSearch,
  validateSNum,
  validateEmail
} from './validate'

/**
 * username 验证器
 *
 * @param rule 当前 rule 对象
 * @param value 当前字段的 value
 * @param fn 验证结束用回调函数
 */
export function checkPhone(rule, value, fn) {
  if (validatePhone(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入有效的手机号'))
  }
}
export function checkRegisterPhone(rule, value, fn) {
  if (validatePhone(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入有效的手机号'))
  }
}
export function checkCode(rule, value, fn) {
  if (validateCode(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入有效的验证码'))
  }
}
export function checkPassord(rule, value, fn) {
  if (validatePassword(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入符合规则密码'))
  }
}
// 验证 search 输入框
export function checkSearch(value, fn) {
  if (validateSearch(value)) {
    fn(value)
  } else {
    // 验证失败
    fn(new Error('请输入不包含特殊字符且小于30个字符的关键词！'))
  }
}

// 验证 邮箱
export function checkEmail(value, fn) {
  if (validateEmail(value)) {
    fn(value)
  } else {
    // 验证失败
    fn(new Error('请输入正确的邮箱格式！'))
  }
}
