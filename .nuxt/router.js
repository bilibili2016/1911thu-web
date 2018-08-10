import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _b622a1b8 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _eab02504 = () => import('../pages/project/components/detail.vue' /* webpackChunkName: "pages/project/components/detail" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _432cfe06 = () => import('../pages/project/components/courseList.vue' /* webpackChunkName: "pages/project/components/courseList" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _857bbe16 = () => import('../pages/project/components/projectEvaluate.vue' /* webpackChunkName: "pages/project/components/projectEvaluate" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _e923e428 = () => import('../pages/project/components/commonProblems.vue' /* webpackChunkName: "pages/project/components/commonProblems" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _7bb0899d = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _2f90f712 = () => import('../pages/project/components/projectCourse.vue' /* webpackChunkName: "pages/project/components/projectCourse" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _b7aa79fe = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _34a88d2e = () => import('../pages/profile/pages/showPerson.vue' /* webpackChunkName: "pages/profile/pages/showPerson" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _093de9fb = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _95755c66 = () => import('../pages/profile/personalSet/components/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/components/showPersonal" */).then(m => m.default || m)
const _18835674 = () => import('../pages/profile/personalSet/components/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/components/updatePassword" */).then(m => m.default || m)
const _1d243e02 = () => import('../pages/profile/personalSet/components/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/components/setPersonal" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _41637b62 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
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
			path: "/auth/Login",
			component: _36cd71f0,
			name: "auth-Login"
		},
		{
			path: "/shop/affirmOrder",
			component: _12809810,
			name: "shop-affirmOrder"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/shop/payResult",
			component: _23d4d1f2,
			name: "shop-payResult"
		},
		{
			path: "/shop/shoppingcart",
			component: _fa6417ea,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
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
			path: "/project/projectPlayer",
			component: _3e447d6e,
			name: "project-projectPlayer"
		},
		{
			path: "/auth/forgotpassword",
			component: _6e9c788f,
			name: "auth-forgotpassword"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _1fec77f2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/profile/components/TabSingle",
			component: _3bfd2470,
			name: "profile-components-TabSingle"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _74cf0226,
			name: "shop-wepay-qrcode"
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
			path: "/profile/pages/invitation",
			component: _f9181660,
			name: "profile-pages-invitation"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _54085936,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/home/news/info",
			component: _0a084520,
			name: "home-news-info"
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
			path: "/profile/pages/ticketRules",
			component: _b622a1b8,
			name: "profile-pages-ticketRules"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/project/components/detail",
			component: _eab02504,
			name: "project-components-detail"
		},
		{
			path: "/home/teacher/famous",
			component: _6d917602,
			name: "home-teacher-famous"
		},
		{
			path: "/other/activePages/degree",
			component: _15fa173c,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/noMsg",
			component: _1a9a0bce,
			name: "profile-pages-noMsg"
		},
		{
			path: "/home/news/list",
			component: _4fa21910,
			name: "home-news-list"
		},
		{
			path: "/project/components/courseList",
			component: _432cfe06,
			name: "project-components-courseList"
		},
		{
			path: "/profile/components/BindIng",
			component: _0085e558,
			name: "profile-components-BindIng"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _4dcd0e04,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/other/activePages/faceteach",
			component: _5e6cd912,
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/pages/search",
			component: _4a27ebd8,
			name: "other-pages-search"
		},
		{
			path: "/other/activePages/Institutional",
			component: _bf5a4bc6,
			name: "other-activePages-Institutional"
		},
		{
			path: "/project/components/projectEvaluate",
			component: _857bbe16,
			name: "project-components-projectEvaluate"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _4ea6126e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/project/components/commonProblems",
			component: _e923e428,
			name: "project-components-commonProblems"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2deaf1a6,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/project/components/shortList",
			component: _7bb0899d,
			name: "project-components-shortList"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _419a81b0,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/components/Info",
			component: _29eb3f4b,
			name: "profile-components-Info"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/project/components/projectCourse",
			component: _2f90f712,
			name: "project-components-projectCourse"
		},
		{
			path: "/profile/components/Card",
			component: _1ed254ad,
			name: "profile-components-Card"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _b7aa79fe,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/home/teacher/list",
			component: _83b64c36,
			name: "home-teacher-list"
		},
		{
			path: "/profile/pages/showPerson",
			component: _34a88d2e,
			name: "profile-pages-showPerson"
		},
		{
			path: "/profile/components/Conversion",
			component: _4a26d81a,
			name: "profile-components-Conversion"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _3398ff19,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _093de9fb,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/shop/components/List",
			component: _52657338,
			name: "shop-components-List"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/shop/wepay/payType",
			component: _e60742cc,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _0bf90016,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/pages/homeUs",
			component: _a57eb0e6,
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/components/Detail",
			component: _e40887a4,
			name: "profile-components-Detail"
		},
		{
			path: "/profile/components/BindId",
			component: _224b2ad6,
			name: "profile-components-BindId"
		},
		{
			path: "/course/player/player",
			component: _7a28407e,
			name: "course-player-player"
		},
		{
			path: "/profile/personalSet/components/showPersonal",
			component: _95755c66,
			name: "profile-personalSet-components-showPersonal"
		},
		{
			path: "/profile/personalSet/components/updatePassword",
			component: _18835674,
			name: "profile-personalSet-components-updatePassword"
		},
		{
			path: "/profile/personalSet/components/setPersonal",
			component: _1d243e02,
			name: "profile-personalSet-components-setPersonal"
		},
		{
			path: "/home/teacher/components/Card",
			component: _802310dc,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/components/Info",
			component: _5bf38a25,
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
			component: _bce543d6,
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/:Info?",
			component: _65e765f6,
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
			component: _4c0c96e5,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _02d0f4ee,
			name: "home-news-detail"
		},
		{
			path: "/course/:category?",
			component: _41637b62,
			name: "course-category"
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
