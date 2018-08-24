import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _62910f13 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f17393ea = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _c1976bea = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _0239b64d = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _00b7e687 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _60fe40dc = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _754b6819 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _69ae8056 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _77343fe2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _26eb3a8b = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _213e6f28 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _ec5348ec = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _6b4f7457 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _22ab7a6c = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _192e9728 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _145fb93b = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _73ba631e = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _59f35421 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _5e880bd9 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _6c18dd68 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _36f8e10a = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _0759ccaa = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _6ba526a0 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _0b2fa543 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _6c191a74 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _25280713 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _5ab18b84 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _261b84ce = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _2b8f6874 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _a1956b34 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _116b72fc = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _22c9f24b = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _db6d4cf6 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _03f97825 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _1e66e39a = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _25900b9a = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _5a9f5ae8 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _718abc52 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _e25c93dc = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _35ef459a = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _3b624757 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _03016e0a = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _68f89313 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _0e1a58a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _54857d02 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _26d550eb = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _7fcfa9c3 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _25164358 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _6287b9f6 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _235ebf23 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _3a172fe0 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _cf6f50e2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _d370008a = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _d4928468 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _df07cde8 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _fc04d804 = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _545af240 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _db62e6e8 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _5ee28dff = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _18a47f40 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _1b2a9329 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _74da5a43 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _1a05cf79 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _2f84df10 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _737749f6 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _53487390 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _23547442 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _b3d763a0 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _70170c42 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _73ae24be = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _a127e088 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _057e72db = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _c09cfba4 = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _b9c40fae = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _7184a8b6 = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _7fdbac5b = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _d291f2b6 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _afaa0632 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _728dd9c8 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _96f19a34 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _ed13dc3e = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _7a9fc1c6 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _f8aebe9c = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _21b7cab3 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _53b42c98 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _6e92f227 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _0ef40822 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _81383ffc = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _7135467a = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _4a173e30 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _eafb9556 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _1e7c7f7c = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _365b9432 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _68f9b055 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _c8c9b30e = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _303bb042 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _cd9ccfea = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _62f08228 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _486375ca = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _4674020e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _62910f13,
			name: "profile"
		},
		{
			path: "/home",
			component: _f17393ea,
			name: "home"
		},
		{
			path: "/project/projectPlayer",
			component: _c1976bea,
			name: "project-projectPlayer",
			children: [
				{
					path: "evaluate",
					component: _0239b64d,
					name: "project-projectPlayer-evaluate"
				}
			]
		},
		{
			path: "/course/coursedetail",
			component: _00b7e687,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _60fe40dc,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _754b6819,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _69ae8056,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _77343fe2,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/auth/Login",
			component: _26eb3a8b,
			name: "auth-Login"
		},
		{
			path: "/auth/forgotpassword",
			component: _213e6f28,
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/customAffirmOrder",
			component: _ec5348ec,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _6b4f7457,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/course/detail",
			component: _22ab7a6c,
			name: "course-detail"
		},
		{
			path: "/shop/shoppingcart",
			component: _192e9728,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmOrder",
			component: _145fb93b,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/Register",
			component: _73ba631e,
			name: "auth-Register"
		},
		{
			path: "/shop/paypublic",
			component: _59f35421,
			name: "shop-paypublic"
		},
		{
			path: "/course/category",
			component: _5e880bd9,
			name: "course-category"
		},
		{
			path: "/project/customerProject",
			component: _6c18dd68,
			name: "project-customerProject"
		},
		{
			path: "/project/projectDetail",
			component: _36f8e10a,
			name: "project-projectDetail"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _0759ccaa,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _6ba526a0,
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _0b2fa543,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _6c191a74,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/invitation",
			component: _25280713,
			name: "profile-pages-invitation"
		},
		{
			path: "/course/player/player",
			component: _5ab18b84,
			name: "course-player-player"
		},
		{
			path: "/profile/personalSet/showPersonal",
			component: _261b84ce,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/profile/pages/myInfo",
			component: _2b8f6874,
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _a1956b34,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/components/OrderList",
			component: _116b72fc,
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/components/Detail",
			component: _22c9f24b,
			name: "profile-components-Detail"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _db6d4cf6,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myHome",
			component: _03f97825,
			name: "profile-pages-myHome"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _1e66e39a,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/profile/pages/myCode",
			component: _25900b9a,
			name: "profile-pages-myCode"
		},
		{
			path: "/course/components/List",
			component: _5a9f5ae8,
			name: "course-components-List"
		},
		{
			path: "/profile/pages/myTicket",
			component: _718abc52,
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _e25c93dc,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/profile/components/TabSingle",
			component: _35ef459a,
			name: "profile-components-TabSingle"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _3b624757,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/profile/components/Card",
			component: _03016e0a,
			name: "profile-components-Card"
		},
		{
			path: "/home/news/list",
			component: _68f89313,
			name: "home-news-list"
		},
		{
			path: "/profile/components/Info",
			component: _0e1a58a8,
			name: "profile-components-Info"
		},
		{
			path: "/home/teacher/list",
			component: _54857d02,
			name: "home-teacher-list"
		},
		{
			path: "/course/components/CardProject",
			component: _26d550eb,
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/CourseList",
			component: _7fcfa9c3,
			name: "project-components-CourseList"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _25164358,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _6287b9f6,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/home/news/info",
			component: _235ebf23,
			name: "home-news-info"
		},
		{
			path: "/other/pages/homeUs",
			component: _3a172fe0,
			name: "other-pages-homeUs"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _cf6f50e2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/project/components/Detail",
			component: _d370008a,
			name: "project-components-Detail"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _d4928468,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/components/homecourse",
			component: _df07cde8,
			name: "home-components-homecourse"
		},
		{
			path: "/course/components/Card",
			component: _fc04d804,
			name: "course-components-Card"
		},
		{
			path: "/project/components/ShortList",
			component: _545af240,
			name: "project-components-ShortList"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _db62e6e8,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/course/components/CardPlayer",
			component: _5ee28dff,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _18a47f40,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/project/components/CommonProblems",
			component: _1b2a9329,
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/pages/myProject",
			component: _74da5a43,
			name: "profile-pages-myProject"
		},
		{
			path: "/shop/components/card",
			component: _1a05cf79,
			name: "shop-components-card"
		},
		{
			path: "/profile/pages/myOrder",
			component: _2f84df10,
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/noMsg",
			component: _737749f6,
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/components/Conversion",
			component: _53487390,
			name: "profile-components-Conversion"
		},
		{
			path: "/home/teacher/famous",
			component: _23547442,
			name: "home-teacher-famous"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _b3d763a0,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _70170c42,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _73ae24be,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
			component: _a127e088,
			name: "course-components-ListCard"
		},
		{
			path: "/profile/components/BindIng",
			component: _057e72db,
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _c09cfba4,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _b9c40fae,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _7184a8b6,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/other/pages/search",
			component: _7fdbac5b,
			name: "other-pages-search"
		},
		{
			path: "/other/activePages/degree",
			component: _d291f2b6,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _afaa0632,
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _728dd9c8,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/Filter",
			component: _96f19a34,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCourse",
			component: _ed13dc3e,
			name: "profile-pages-myCourse"
		},
		{
			path: "/shop/wepay/payType",
			component: _7a9fc1c6,
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/components/BindId",
			component: _f8aebe9c,
			name: "profile-components-BindId"
		},
		{
			path: "/profile/pages/courselist",
			component: _21b7cab3,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/List",
			component: _53b42c98,
			name: "profile-components-List"
		},
		{
			path: "/shop/components/List",
			component: _6e92f227,
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/faceteach",
			component: _0ef40822,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/components/search",
			component: _81383ffc,
			name: "profile-components-search"
		},
		{
			path: "/other/activePages/Institutional",
			component: _7135467a,
			name: "other-activePages-Institutional"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _4a173e30,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/shop/components/banner",
			component: _eafb9556,
			name: "shop-components-banner"
		},
		{
			path: "/home/news/components/Info",
			component: _1e7c7f7c,
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
			component: _365b9432,
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/components/Card",
			component: _68f9b055,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/teacher/:Info?",
			component: _c8c9b30e,
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
			component: _303bb042,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _cd9ccfea,
			name: "home-news-detail"
		},
		{
			path: "/shop/result/:payResult?",
			component: _62f08228,
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
			component: _486375ca,
			name: "shop-wePay"
		},
		{
			path: "/",
			component: _4674020e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
