/*
 * @Author: Link
 * @Date: 2018-04-14 10:50:42
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-08-07 17:46:50
 * @Describe:
 */

export { default as http } from './common/HTTP'
export { default as auth } from './Auth/Auth'
// export { default as presenter } from './Presenter/Presenter'
// export { default as project } from './Project/Project'
export { default as home } from './Home/Home'
export { default as coursedetail } from './Course/CourseDetail'
export { default as newlesson } from './Course/NewLesson'
export { default as players } from './Course/Player'
export { default as About } from './About/AboutUs'
export { default as affirmOrder } from './Shop/AffirmOrder'
export { default as shopcart } from './Shop/ShopCart'
export { default as wepay } from './Shop/WePay'

// profile相关
export { default as profileHome } from './Profile/ProflieHome'
export { default as bindid } from './Profile/BindId'
export { default as binding } from './profile/Binding'
export { default as conversion } from './profile/Conversion'
export { default as info } from './profile/Info'
export { default as personalset } from './profile/PersonalSet'
export { default as ticketorder } from './profile/TicketOrder'
export { default as ticketHistory } from './profile/Tickethistory'
export { default as order } from './profile/Order'
export { default as courseList } from './profile/CourseList'

// project相关
export { default as paypublic } from './Shop/PayPublic'
export { default as payResult } from './Shop/PayResult'
export { default as projectDetail } from './project/ProjectDetail'
export { default as projectPlayer } from './project/ProjectPlayer'

// 新闻
export { default as news } from './News/News'

// other
export { default as other } from './Other/Other'

//teacher
export { default as list } from './Teacher/List'
export { default as teacherInfo } from './Teacher/Info'

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
