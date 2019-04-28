/*
 * @Author: Link
 * @Date: 2018-04-14 10:50:42
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2019-04-24 14:27:57
 * @Describe:
 */

export {
    default as http
}
from './common/HTTP'
export {
    default as auth
}
from './Auth/Auth'
    // export { default as presenter } from './Presenter/Presenter'
    // export { default as project } from './Project/Project'
export {
    default as home
}
from './Home/Home'
export {
    default as coursedetail
}
from './Course/CourseDetail'
export {
    default as newlesson
}
from './Course/NewLesson'

// export { default as players } from './Course/Player'
export {
    default as affirmOrder
}
from './Shop/AffirmOrder'
export {
    default as shopcart
}
from './Shop/ShopCart'
export {
    default as wepay
}
from './Shop/WePay'

// profile相关
export {
    default as profileHome
}
from './Profile/ProflieHome'
export {
    default as binding
}
from './Profile/Binding'
export {
    default as conversion
}
from './Profile/Conversion'
export {
    default as info
}
from './Profile/Info'
export {
    default as personalset
}
from './Profile/PersonalSet'
export {
    default as ticketorder
}
from './Profile/TicketOrder'
export {
    default as ticketHistory
}
from './Profile/TicketHistory'
export {
    default as order
}
from './Profile/Order'
export {
    default as courseList
}
from './Profile/CourseList'
export {
    default as examine
}
from './Profile/Examine'
export {
    default as college
}
from './Profile/College'
export {
    default as myTeacher
}
from './Profile/MyTeacher'

// project相关
export {
    default as paypublic
}
from './Shop/PayPublic'
export {
    default as payResult
}
from './Shop/PayResult'
export {
    default as projectdetail
}
from './Project/ProjectDetail'
export {
    default as projectplayer
}
from './Project/ProjectPlayer'

// 新闻
export {
    default as news
}
from './News/News'

// other
export {
    default as other
}
from './Other/Other'
export {
    default as institutional
}
from './Other/Institutional'
export {
    default as About
}
from './About/AboutUs'

// teacher
export {
    default as list
}
from './Teacher/List'
export {
    default as teacherInfo
}
from './Teacher/Info'

// course 相关
export {
    default as search
}
from './Course/Search'
export {
    default as players
}
from './Course/Player'
export {
    default as category
}
from './Course/Category'
export {
    default as categorylist
}
from './Course/CategoryList'
    // components
export {
    default as tabs
}
from './Components/Tabs'
export {
    default as pay
}
from './Components/Pay'
export {
    default as conSearch
}
from './Components/Search'
export {
    default as line
}
from './Components/Line'
export {
    default as header
}
from './Components/Header'
export {
    default as banner
}
from './Components/Banner'
export {
    default as card
}
from './Components/Card'

// 自定制项目
export {
    default as customerProject
}
from './Project/CustomerProject'
    // VIP会员
export {
    default as vip
}
from './Home/Vip'
    // 考试认证

// 城市分校
export {
    default as school
}
from './School/School'

// 查询证书
export {
    default as certification
}
from './Certification/Certification'

// 后台预览
export {
    default as previewapi
}
from './Preview/Previewapi'

// 直播
export {
    default as live
}
from './Live/Live'

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