/*
 * @Author: Link
 * @Date: 2018-04-14 10:50:42
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-06-21 18:06:33
 * @Describe:
 */

export { default as http } from './common/HTTP'
export { default as auth } from './Auth/Auth'
// export { default as presenter } from './Presenter/Presenter'
// export { default as project } from './Project/Project'
export { default as home } from './Home/Home'
export * from './common/Error'

export const helper = {
  second2minute(time) {
    let ret = this.round(time / 60, 2)
    return ret
  },
  minute2second(time) {
    let ret = this.round(time * 60)
    return ret
  },
  fen2yuan(money) {
    let ret = money / 100
    return ret
  },
  yuan2fen(money) {
    let ret = money * 100
    return ret
  },
  round(num, precision = 0) {
    let ret
    if (precision <= 0) {
      ret = Math.round(num)
    } else {
      let times = Math.pow(10, precision)
      ret = Math.round(num * times) / times
    }
    return ret
  }
}
