import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _6666d6f2 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _1fe45514 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _34771022 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _e55401ee = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _2a95a9e5 = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _79e43c9e = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _3669b9d4 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _ca8e16aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _bebb874e = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _7acc2446 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _bcf1c354 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _b99b2138 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _08f7b686 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _ab86863a = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _40706888 = () => import('../pages/profile/components/DataPick.vue' /* webpackChunkName: "pages/profile/components/DataPick" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _0773ca26 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _b43289b6 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _583c6f84 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/profile",
			component: _b85f5514,
			name: "profile"
		},
		{
			path: "/home",
			component: _44f44288,
			name: "home"
		},
		{
			path: "/project/projectPlayer",
			component: _3e447d6e,
			name: "project-projectPlayer"
		},
		{
			path: "/auth/Register",
			component: _076214d4,
			name: "auth-Register"
		},
		{
			path: "/auth/Login",
			component: _36cd71f0,
			name: "auth-Login"
		},
		{
			path: "/course/category",
			component: _4d0f457c,
			name: "course-category"
		},
		{
			path: "/shop/customAffirmOrder",
			component: _6666d6f2,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _1fe45514,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/course/detail",
			component: _63eac0cf,
			name: "course-detail"
		},
		{
			path: "/shop/shoppingcart",
			component: _fa6417ea,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmOrder",
			component: _12809810,
			name: "shop-affirmOrder"
		},
		{
			path: "/course/coursedetail",
			component: _7ff396aa,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _15932199,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _582b0d96,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _47b5b739,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _2bc9209f,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/auth/forgotpassword",
			component: _6e9c788f,
			name: "auth-forgotpassword"
		},
		{
			path: "/project/customerProject",
			component: _34771022,
			name: "project-customerProject"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _5b88e868,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/OrderList",
			component: _4e3f0dbf,
			name: "profile-components-OrderList"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _74cf0226,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/components/Card",
			component: _1ed254ad,
			name: "profile-components-Card"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _e55401ee,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _dcb564ce,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/profile/components/List",
			component: _6f85133b,
			name: "profile-components-List"
		},
		{
			path: "/profile/components/search",
			component: _2a95a9e5,
			name: "profile-components-search"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _496e53b6,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/profile/pages/myCode",
			component: _55724e70,
			name: "profile-pages-myCode"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _07f5e8d5,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/components/Info",
			component: _29eb3f4b,
			name: "profile-components-Info"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _79e43c9e,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d86c869e,
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _3669b9d4,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/other/pages/search",
			component: _4a27ebd8,
			name: "other-pages-search"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _0bf90016,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _419a81b0,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myProject",
			component: _dea97e34,
			name: "profile-pages-myProject"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _ca8e16aa,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _bebb874e,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _54085936,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/shop/components/card",
			component: _fb7fb894,
			name: "shop-components-card"
		},
		{
			path: "/other/activePages/degree",
			component: _15fa173c,
			name: "other-activePages-degree"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/home/teacher/famous",
			component: _6d917602,
			name: "home-teacher-famous"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/list",
			component: _83b64c36,
			name: "home-teacher-list"
		},
		{
			path: "/profile/pages/noMsg",
			component: _1a9a0bce,
			name: "profile-pages-noMsg"
		},
		{
			path: "/course/player/player",
			component: _7a28407e,
			name: "course-player-player"
		},
		{
			path: "/profile/pages/myHome",
			component: _6c33cc62,
			name: "profile-pages-myHome"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _7d3225b0,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myTicket",
			component: _96fe1562,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/components/BindId",
			component: _224b2ad6,
			name: "profile-components-BindId"
		},
		{
			path: "/other/activePages/faceteach",
			component: _5e6cd912,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _7acc2446,
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/home/news/info",
			component: _0a084520,
			name: "home-news-info"
		},
		{
			path: "/course/components/CardProject",
			component: _a30d1d64,
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/CommonProblems",
			component: _0d9c6be8,
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/components/Conversion",
			component: _4a26d81a,
			name: "profile-components-Conversion"
		},
		{
			path: "/profile/personalSet/showPersonal",
			component: _bcf1c354,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/pages/courselist",
			component: _fff88f20,
			name: "profile-pages-courselist"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _1fec77f2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2deaf1a6,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/profile/pages/invitation",
			component: _f9181660,
			name: "profile-pages-invitation"
		},
		{
			path: "/project/components/ShortList",
			component: _a9608d06,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/components/List",
			component: _52657338,
			name: "shop-components-List"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _b99b2138,
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _3398ff19,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _4dcd0e04,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/other/pages/homeUs",
			component: _a57eb0e6,
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _08f7b686,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/profile/components/TabSingle",
			component: _3bfd2470,
			name: "profile-components-TabSingle"
		},
		{
			path: "/other/activePages/Institutional",
			component: _bf5a4bc6,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _ab86863a,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/components/DataPick",
			component: _40706888,
			name: "profile-components-DataPick"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _4ea6126e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/project/components/Detail",
			component: _0179c99e,
			name: "project-components-Detail"
		},
		{
			path: "/shop/wepay/payType",
			component: _e60742cc,
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/components/BindIng",
			component: _0085e558,
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/pages/myCourse",
			component: _67276a44,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/components/Detail",
			component: _e40887a4,
			name: "profile-components-Detail"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _5a087752,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/home/news/list",
			component: _4fa21910,
			name: "home-news-list"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myOrder",
			component: _f164784a,
			name: "profile-pages-myOrder"
		},
		{
			path: "/project/components/CourseList",
			component: _0773ca26,
			name: "project-components-CourseList"
		},
		{
			path: "/home/news/components/List",
			component: _bce543d6,
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
			component: _5bf38a25,
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
			component: _802310dc,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/:detail?",
			component: _02d0f4ee,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _4c0c96e5,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _65e765f6,
			name: "home-teacher-Info"
		},
		{
			path: "/shop/result/:payResult?",
			component: _b43289b6,
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
			component: _583c6f84,
			name: "shop-wePay"
		},
		{
			path: "/",
			component: _84114f48,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
