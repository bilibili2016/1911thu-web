/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 10:18:45
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2019-04-29 18:58:22
 * @File Type: 公共验证函数文件
 * @Describe: 系统内部的一些公用验证函数可以定义在这里。例如:表单验证
 * https://github.com/yiminghe/async-validator#type
 */
/**
 * * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
    const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    return re.test(email)
}

export function validateCode(code) {
    const re = /^\d{4}$/
    return re.test(code)
}
/* 验证手机号 */
export function validatePhone(str) {
    const reg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/

    return reg.test(str)
}
// 验证学号
export function validateSNum(str) {
    const reg = /^[2][0-9]{8}$/

    return reg.test(str)
}
/* 验证密码 */
export function validatePassword(str) {
    const reg = /^([\d]|[\w]){6,16}$/

    return reg.test(str)
}
// 验证搜索框
export function validateSearch(str) {
    const reg = !/[@#\$%\^&\*]+/g.test(str) && str !== '' && str.length < 30
    return reg
}