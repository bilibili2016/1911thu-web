/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 10:18:45
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-04-19 20:18:29
 * @File Type: 公共验证函数文件
 * @Describe: 系统内部的一些公用验证函数可以定义在这里。例如:表单验证
 * https://github.com/yiminghe/async-validator#type
 */
/**
 * * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export function validateEmail (email) {
  const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return re.test(email)
}
/* 验证手机号 */
export function validatePhone (str) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/
  return reg.test(str)
}
