
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
