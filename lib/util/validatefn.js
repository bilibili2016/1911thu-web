/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 11:48:50
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-06-09 11:22:33
 * @Describe:  validatefn 文件
 * https://github.com/yiminghe/async-validator#type
 */
import {
  validateCode,
  validatePhone,
  validatePassword

} from './validate'

/**
  * username 验证器
     *
     * @param rule 当前 rule 对象
     * @param value 当前字段的 value
     * @param fn 验证结束用回调函数
     */
export function checkPhone (rule, value, fn) {
  if (validatePhone(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入有效的手机号。'))
  }
}
export function checkCode (rule, value, fn) {
  if (validateCode(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入有效的验证码'))
  }

}
export function checkPassord (rule, value, fn) {
  if (validatePassword(value)) {
    // 表示验证通过
    fn()
  } else {
    // 验证失败
    fn(new Error('请填入符合规则密码'))
  }

}
