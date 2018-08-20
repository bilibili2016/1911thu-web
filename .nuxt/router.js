import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _38785d32 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _1cb89768 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _09f6c34b = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _57d44e38 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _9cf362cc = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _0eda6eea = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _6c37092a = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _1f188472 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _dd6e8e68 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _40f5c9e2 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _c7ebc6e0 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _1b4de166 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _37a1285d = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _2ed2735a = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _676888f5 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _4dd72763 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _449bc2bc = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _62252398 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _74461dc0 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _3b16683c = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _466587ae = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _15ec69ca = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _5dd75a16 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _8ddd2e66 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _0165a3af = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _e3e57656 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _796972f1 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _73174322 = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _77c6ff94 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _78d5b5cc = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _2d5401b4 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _2bcaa3a1 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _561afdec = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _dfdc649e = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _2decd9e2 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _66852d34 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _5ba8eafe = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _03cd4356 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _24d42b16 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _42c562ce = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _abc2b064 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _25bc12be = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _f62e8f5e = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _dd894cc8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _477c3246 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _da4a26f6 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _0d164d15 = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _01b73d29 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _5552b8bf = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _d0efd14c = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _690be28d = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _08ebc0be = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _b3f51166 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _53a22806 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _4ffb08d4 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _29f8c012 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _540fb2b2 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _944bb628 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _18e49bc8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _07262b67 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _91821566 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _b52c67f2 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _3f414400 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _2c414f1c = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _cb5e3d2e = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _54507b7e = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _78c71683 = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _1757d55e = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _0a6134e4 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _57e06744 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _240a09ea = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _7456c334 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _b28759b0 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _62244db0 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _0cc6ead9 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _3eaf9c88 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _379babd1 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _1bfc503e = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _2b12ff54 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _3645a6e9 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _7076beaa = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _70e9b8be = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _a60a588c = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _85bee20c = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _1490dc18 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _38785d32,
			name: "profile"
		},
		{
			path: "/home",
			component: _1cb89768,
			name: "home"
		},
		{
			path: "/auth/forgotpassword",
			component: _09f6c34b,
			name: "auth-forgotpassword"
		},
		{
			path: "/course/category",
			component: _57d44e38,
			name: "course-category"
		},
		{
			path: "/project/projectDetail",
			component: _9cf362cc,
			name: "project-projectDetail"
		},
		{
			path: "/course/detail",
			component: _0eda6eea,
			name: "course-detail"
		},
		{
			path: "/project/projectPlayer",
			component: _6c37092a,
			name: "project-projectPlayer"
		},
		{
			path: "/shop/shoppingcart",
			component: _1f188472,
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/Login",
			component: _dd6e8e68,
			name: "auth-Login"
		},
		{
			path: "/shop/paypublic",
			component: _40f5c9e2,
			name: "shop-paypublic"
		},
		{
			path: "/auth/Register",
			component: _c7ebc6e0,
			name: "auth-Register"
		},
		{
			path: "/course/coursedetail",
			component: _1b4de166,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _37a1285d,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _2ed2735a,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _676888f5,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _4dd72763,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/shop/affirmOrder",
			component: _449bc2bc,
			name: "shop-affirmOrder"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _62252398,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _74461dc0,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _3b16683c,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _466587ae,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _15ec69ca,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/components/banner",
			component: _5dd75a16,
			name: "shop-components-banner"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _8ddd2e66,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/profile/components/Conversion",
			component: _0165a3af,
			name: "profile-components-Conversion"
		},
		{
			path: "/profile/pages/noMsg",
			component: _e3e57656,
			name: "profile-pages-noMsg"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _796972f1,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _73174322,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/profile/pages/invitation",
			component: _77c6ff94,
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/personalSet/showPersonal",
			component: _78d5b5cc,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/other/activePages/degree",
			component: _2d5401b4,
			name: "other-activePages-degree"
		},
		{
			path: "/home/teacher/list",
			component: _2bcaa3a1,
			name: "home-teacher-list"
		},
		{
			path: "/course/components/CardProject",
			component: _561afdec,
			name: "course-components-CardProject"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _dfdc649e,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/project/components/CourseList",
			component: _2decd9e2,
			name: "project-components-CourseList"
		},
		{
			path: "/profile/components/TabSingle",
			component: _66852d34,
			name: "profile-components-TabSingle"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _5ba8eafe,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _03cd4356,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _24d42b16,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _42c562ce,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/faceteach",
			component: _abc2b064,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _25bc12be,
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/profile/components/BindId",
			component: _f62e8f5e,
			name: "profile-components-BindId"
		},
		{
			path: "/other/pages/search",
			component: _dd894cc8,
			name: "other-pages-search"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _477c3246,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/player/player",
			component: _da4a26f6,
			name: "course-player-player"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _0d164d15,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _01b73d29,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/course/components/Card",
			component: _5552b8bf,
			name: "course-components-Card"
		},
		{
			path: "/project/components/Detail",
			component: _d0efd14c,
			name: "project-components-Detail"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _690be28d,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/teacher/famous",
			component: _08ebc0be,
			name: "home-teacher-famous"
		},
		{
			path: "/course/components/List",
			component: _b3f51166,
			name: "course-components-List"
		},
		{
			path: "/course/components/ListCard",
			component: _53a22806,
			name: "course-components-ListCard"
		},
		{
			path: "/home/news/list",
			component: _4ffb08d4,
			name: "home-news-list"
		},
		{
			path: "/profile/components/List",
			component: _29f8c012,
			name: "profile-components-List"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _540fb2b2,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _944bb628,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/project/components/CommonProblems",
			component: _18e49bc8,
			name: "project-components-CommonProblems"
		},
		{
			path: "/course/components/Filter",
			component: _07262b67,
			name: "course-components-Filter"
		},
		{
			path: "/home/components/homecourse",
			component: _91821566,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/components/Info",
			component: _b52c67f2,
			name: "profile-components-Info"
		},
		{
			path: "/course/components/CardPlayer",
			component: _3f414400,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/components/BindIng",
			component: _2c414f1c,
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/components/Card",
			component: _cb5e3d2e,
			name: "profile-components-Card"
		},
		{
			path: "/project/components/ShortList",
			component: _54507b7e,
			name: "project-components-ShortList"
		},
		{
			path: "/profile/components/OrderList",
			component: _78c71683,
			name: "profile-components-OrderList"
		},
		{
			path: "/other/pages/homeUs",
			component: _1757d55e,
			name: "other-pages-homeUs"
		},
		{
			path: "/home/news/info",
			component: _0a6134e4,
			name: "home-news-info"
		},
		{
			path: "/shop/wepay/payType",
			component: _57e06744,
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/components/Detail",
			component: _240a09ea,
			name: "profile-components-Detail"
		},
		{
			path: "/profile/pages/courselist",
			component: _7456c334,
			name: "profile-pages-courselist"
		},
		{
			path: "/shop/components/List",
			component: _b28759b0,
			name: "shop-components-List"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _62244db0,
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/other/activePages/Institutional",
			component: _0cc6ead9,
			name: "other-activePages-Institutional"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _3eaf9c88,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/home/news/components/List",
			component: _379babd1,
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
			component: _1bfc503e,
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
			component: _2b12ff54,
			name: "home-teacher-components-Card"
		},
		{
			path: "/shop/result/:payResult?",
			component: _3645a6e9,
			name: "shop-result-payResult"
		},
		{
			path: "/home/news/:detail?",
			component: _7076beaa,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _70e9b8be,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _a60a588c,
			name: "home-teacher-Info"
		},
		{
			path: "/shop/:wePay?",
			component: _85bee20c,
			name: "shop-wePay"
		},
		{
			path: "/",
			component: _1490dc18,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
