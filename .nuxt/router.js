import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _7ef48e75 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3f6b5e34 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3c772f11 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _a3bdd0ae = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _61677ec9 = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _0c5c991c = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _49058b20 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _4e79b13c = () => import('../pages/project/projectPlayer的副本.vue' /* webpackChunkName: "pages/project/projectPlayer的副本" */).then(m => m.default || m)
const _4b281c50 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _12226006 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _93a5e45a = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _70b2b0e2 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _37cfd715 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _18d4a089 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _197ca8d8 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _e16238a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _f7940de4 = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _562e90c8 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _2907cc4f = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _0fe0208c = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _53cbf308 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _2dd9fe0c = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _74bc8bf4 = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _612ee8aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _78525c20 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _69a86363 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _0b91f6fa = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _72084d52 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _793a43c8 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _3cc614af = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _f57e7a16 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _2281a9bc = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _4f07fdfe = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _ec330a94 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _0640a45a = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _2986f2b8 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _4f58361f = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _1b62cf17,
			name: "profile"
		},
		{
			path: "/home",
			component: _69f81487,
			name: "home"
		},
		{
			path: "/auth/Register",
			component: _7ef48e75,
			name: "auth-Register"
		},
		{
			path: "/project/projectPlayer",
			component: _c95073e2,
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
					component: _3f6b5e34,
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
					component: _3c772f11,
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
					component: _a3bdd0ae,
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
					component: _61677ec9,
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
					component: _0c5c991c,
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/shop/paypublic",
			component: _894cd6c6,
			name: "shop-paypublic"
		},
		{
			path: "/course/detail",
			component: _49058b20,
			name: "course-detail"
		},
		{
			path: "/project/projectPlayer的副本",
			component: _4e79b13c,
			name: "project-projectPlayer的副本"
		},
		{
			path: "/project/customerProject",
			component: _4b281c50,
			name: "project-customerProject"
		},
		{
			path: "/shop/affirmOrder",
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/shoppingcart",
			component: _d94e95a8,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/customAffirmOrder",
			component: _12226006,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _93a5e45a,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/project/projectDetail",
			component: _3eb1e902,
			name: "project-projectDetail"
		},
		{
			path: "/course/category",
			component: _29e9dadd,
			name: "course-category"
		},
		{
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/course/coursedetail",
			component: _ce5ad8ea,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _a8484b50,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _7f289295,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _7a84165a,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _7bdc4d44,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/auth/Login",
			component: _099d1907,
			name: "auth-Login"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _70b2b0e2,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/personalSet/showPersonal",
			component: _37cfd715,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _f54c7972,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _18d4a089,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/components/Conversion",
			component: _197ca8d8,
			name: "profile-components-Conversion"
		},
		{
			path: "/course/components/Filter",
			component: _59e40862,
			name: "course-components-Filter"
		},
		{
			path: "/profile/components/Info",
			component: _e16238a8,
			name: "profile-components-Info"
		},
		{
			path: "/profile/pages/invitation",
			component: _6af646e2,
			name: "profile-pages-invitation"
		},
		{
			path: "/course/components/List",
			component: _5afc5708,
			name: "course-components-List"
		},
		{
			path: "/profile/components/Card",
			component: _f7940de4,
			name: "profile-components-Card"
		},
		{
			path: "/profile/pages/courselist",
			component: _71d6bfa2,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/pages/myOrder",
			component: _373de708,
			name: "profile-pages-myOrder"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _1e02c248,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _06304427,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/ListCard",
			component: _70e97638,
			name: "course-components-ListCard"
		},
		{
			path: "/shop/components/List",
			component: _4c6434ba,
			name: "shop-components-List"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2e6052ac,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/course/components/CardPlayer",
			component: _92bf750a,
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _d5e0dfd4,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/home/teacher/famous",
			component: _f31f1a3a,
			name: "home-teacher-famous"
		},
		{
			path: "/other/pages/search",
			component: _4af54ed7,
			name: "other-pages-search"
		},
		{
			path: "/profile/components/List",
			component: _562e90c8,
			name: "profile-components-List"
		},
		{
			path: "/course/components/CardProject",
			component: _7262ee22,
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/CommonProblems",
			component: _2c00292d,
			name: "project-components-CommonProblems"
		},
		{
			path: "/other/activePages/Institutional",
			component: _107ee504,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/Detail",
			component: _2907cc4f,
			name: "profile-components-Detail"
		},
		{
			path: "/profile/pages/myCourse",
			component: _11c2165d,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myProject",
			component: _13e23572,
			name: "profile-pages-myProject"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _0fe0208c,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/home/news/info",
			component: _f67600c2,
			name: "home-news-info"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _53cbf308,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _2dd9fe0c,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/other/activePages/degree",
			component: _3c13dc21,
			name: "other-activePages-degree"
		},
		{
			path: "/other/activePages/faceteach",
			component: _66b564f3,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/components/search",
			component: _74bc8bf4,
			name: "profile-components-search"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _38418f93,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _25e6db98,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _612ee8aa,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _78525c20,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _c71c7138,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/home/components/homecourse",
			component: _51f97f88,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _69a86363,
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/shop/wepay/payType",
			component: _e46c7cce,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _7654e646,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/player/player",
			component: _74270200,
			name: "course-player-player"
		},
		{
			path: "/profile/pages/noMsg",
			component: _0b91f6fa,
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/components/BindIng",
			component: _72084d52,
			name: "profile-components-BindIng"
		},
		{
			path: "/project/components/Detail",
			component: _c6f44c82,
			name: "project-components-Detail"
		},
		{
			path: "/course/components/Card",
			component: _0a49987a,
			name: "course-components-Card"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _69447d16,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _793a43c8,
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/profile/pages/myCode",
			component: _5872edaf,
			name: "profile-pages-myCode"
		},
		{
			path: "/shop/components/banner",
			component: _12ce39d1,
			name: "shop-components-banner"
		},
		{
			path: "/profile/components/TabSingle",
			component: _3cc614af,
			name: "profile-components-TabSingle"
		},
		{
			path: "/profile/pages/myTicket",
			component: _0c527e64,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d26b4820,
			name: "profile-pages-myInfo"
		},
		{
			path: "/project/components/ShortList",
			component: _a7ceac88,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/components/card",
			component: _f57e7a16,
			name: "shop-components-card"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _2281a9bc,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/profile/pages/myHome",
			component: _6f346ba1,
			name: "profile-pages-myHome"
		},
		{
			path: "/home/news/list",
			component: _6b4258e2,
			name: "home-news-list"
		},
		{
			path: "/profile/components/OrderList",
			component: _4f07fdfe,
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/components/BindId",
			component: _ec330a94,
			name: "profile-components-BindId"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _0640a45a,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/other/pages/homeUs",
			component: _a3e3eae8,
			name: "other-pages-homeUs"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _2ef36dd4,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/home/teacher/list",
			component: _62a0c9f4,
			name: "home-teacher-list"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _662225a5,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _29a93f2d,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/home/news/components/Info",
			component: _1200cb74,
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
			component: _3c996e36,
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/components/Card",
			component: _7e91305e,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/teacher/:Info?",
			component: _66b4c8f5,
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
			component: _9d1f8974,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _135bb60f,
			name: "home-news-detail"
		},
		{
			path: "/shop/result/:payResult?",
			component: _2986f2b8,
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
			component: _4f58361f,
			name: "shop-wePay"
		},
		{
			path: "/",
			component: _76ca02fd,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
