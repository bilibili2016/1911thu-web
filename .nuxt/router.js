import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _df29b6e0 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _f94c5324 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _feb3a7e2 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _e1838dfa = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _200f5f87 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _52437826 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _5e998666 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _31667da2 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _413d64be = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _31c350c4 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _90a5e79e = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _14d166b2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _30102910 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _b82e6854 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _3936f000 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _357b6ffa = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _0b98edb4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _7575b6f3 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _fd8171c4 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _b37544de = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _3df5ee2c = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _7e08ffa5 = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _7d8b0d15 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _6148b718 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _25740cb6 = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _c7f5b62a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _7ca1a86a = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _09353a38 = () => import('../pages/project/components/commonProblems.vue' /* webpackChunkName: "pages/project/components/commonProblems" */).then(m => m.default || m)
const _edbc2b7a = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _3fd5d7c9 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _9076f74c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _04458efe = () => import('../pages/project/components/courseList.vue' /* webpackChunkName: "pages/project/components/courseList" */).then(m => m.default || m)
const _4c356afd = () => import('../pages/project/components/projectEvaluate.vue' /* webpackChunkName: "pages/project/components/projectEvaluate" */).then(m => m.default || m)
const _53b73e6c = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _2ed90195 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _6ad5c246 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _6edd8091 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _6288839a = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _a1188278 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _5b12378d = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _11267c1c = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _80570472 = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _7595577e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _1f045cfa = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _687f7440 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _d4dae5be = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _001abcde = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _9bf49f02 = () => import('../pages/project/components/projectCourse.vue' /* webpackChunkName: "pages/project/components/projectCourse" */).then(m => m.default || m)
const _0b12a8d8 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _b7b43dde = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _1baee328 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _12408b14 = () => import('../pages/project/components/detail.vue' /* webpackChunkName: "pages/project/components/detail" */).then(m => m.default || m)
const _276cc544 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _6e260930 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _3cb99c0e = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _0e94b8a2 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _a18039fa = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _c8356fec = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _8fe1c100 = () => import('../pages/profile/components/Binding.vue' /* webpackChunkName: "pages/profile/components/Binding" */).then(m => m.default || m)
const _6d4a6d71 = () => import('../pages/profile/pages/showPerson.vue' /* webpackChunkName: "pages/profile/pages/showPerson" */).then(m => m.default || m)
const _cb1c56aa = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _0dc52b0d = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _5b0af76c = () => import('../pages/profile/personalSet/components/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/components/updatePassword" */).then(m => m.default || m)
const _7351000a = () => import('../pages/profile/personalSet/components/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/components/setPersonal" */).then(m => m.default || m)
const _3183e79a = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _6fa951c6 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _24b0d0c5 = () => import('../pages/profile/personalSet/components/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/components/showPersonal" */).then(m => m.default || m)
const _0f4139e6 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _a9797c46 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _31008004 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _21c57e57 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _34ad5154 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/home",
			component: _df29b6e0,
			name: "home"
		},
		{
			path: "/profile",
			component: _f94c5324,
			name: "profile"
		},
		{
			path: "/shop/wePay",
			component: _feb3a7e2,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _e1838dfa,
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/forgotpassword",
			component: _200f5f87,
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/paypublic",
			component: _52437826,
			name: "shop-paypublic"
		},
		{
			path: "/project/projectPlayer",
			component: _5e998666,
			name: "project-projectPlayer"
		},
		{
			path: "/course/coursedetail",
			component: _31667da2,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _413d64be,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _31c350c4,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _90a5e79e,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _14d166b2,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/auth/Login",
			component: _30102910,
			name: "auth-Login"
		},
		{
			path: "/project/projectDetail",
			component: _b82e6854,
			name: "project-projectDetail"
		},
		{
			path: "/shop/affirmOrder",
			component: _3936f000,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/payResult",
			component: _357b6ffa,
			name: "shop-payResult"
		},
		{
			path: "/profile/components/Detail",
			component: _0b98edb4,
			name: "profile-components-Detail"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _7575b6f3,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _fd8171c4,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/components/homecourse",
			component: _b37544de,
			name: "home-components-homecourse"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _3df5ee2c,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/profile/components/Card",
			component: _7e08ffa5,
			name: "profile-components-Card"
		},
		{
			path: "/other/activePages/Institutional",
			component: _7d8b0d15,
			name: "other-activePages-Institutional"
		},
		{
			path: "/home/news/list",
			component: _6148b718,
			name: "home-news-list"
		},
		{
			path: "/project/components/shortList",
			component: _25740cb6,
			name: "project-components-shortList"
		},
		{
			path: "/profile/components/Conversion",
			component: _c7f5b62a,
			name: "profile-components-Conversion"
		},
		{
			path: "/other/activePages/degree",
			component: _7ca1a86a,
			name: "other-activePages-degree"
		},
		{
			path: "/project/components/commonProblems",
			component: _09353a38,
			name: "project-components-commonProblems"
		},
		{
			path: "/profile/components/Info",
			component: _edbc2b7a,
			name: "profile-components-Info"
		},
		{
			path: "/course/player/player",
			component: _3fd5d7c9,
			name: "course-player-player"
		},
		{
			path: "/shop/components/banner",
			component: _9076f74c,
			name: "shop-components-banner"
		},
		{
			path: "/project/components/courseList",
			component: _04458efe,
			name: "project-components-courseList"
		},
		{
			path: "/project/components/projectEvaluate",
			component: _4c356afd,
			name: "project-components-projectEvaluate"
		},
		{
			path: "/shop/components/List",
			component: _53b73e6c,
			name: "shop-components-List"
		},
		{
			path: "/other/pages/homeUs",
			component: _2ed90195,
			name: "other-pages-homeUs"
		},
		{
			path: "/home/teacher/list",
			component: _6ad5c246,
			name: "home-teacher-list"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _6edd8091,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/profile/components/List",
			component: _6288839a,
			name: "profile-components-List"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _a1188278,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/BindId",
			component: _5b12378d,
			name: "profile-components-BindId"
		},
		{
			path: "/profile/pages/ticketRules",
			component: _11267c1c,
			name: "profile-pages-ticketRules"
		},
		{
			path: "/profile/components/OrderList",
			component: _80570472,
			name: "profile-components-OrderList"
		},
		{
			path: "/course/components/ListCard",
			component: _7595577e,
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/famous",
			component: _1f045cfa,
			name: "home-teacher-famous"
		},
		{
			path: "/other/pages/search",
			component: _687f7440,
			name: "other-pages-search"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _d4dae5be,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/List",
			component: _001abcde,
			name: "course-components-List"
		},
		{
			path: "/project/components/projectCourse",
			component: _9bf49f02,
			name: "project-components-projectCourse"
		},
		{
			path: "/profile/pages/invitation",
			component: _0b12a8d8,
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/pages/noMsg",
			component: _b7b43dde,
			name: "profile-pages-noMsg"
		},
		{
			path: "/home/news/info",
			component: _1baee328,
			name: "home-news-info"
		},
		{
			path: "/project/components/detail",
			component: _12408b14,
			name: "project-components-detail"
		},
		{
			path: "/course/components/CardPlayer",
			component: _276cc544,
			name: "course-components-CardPlayer"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _6e260930,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _3cb99c0e,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/shop/wepay/payType",
			component: _0e94b8a2,
			name: "shop-wepay-payType"
		},
		{
			path: "/course/components/Card",
			component: _a18039fa,
			name: "course-components-Card"
		},
		{
			path: "/other/activePages/faceteach",
			component: _c8356fec,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/components/Binding",
			component: _8fe1c100,
			name: "profile-components-Binding"
		},
		{
			path: "/profile/pages/showPerson",
			component: _6d4a6d71,
			name: "profile-pages-showPerson"
		},
		{
			path: "/course/components/Filter",
			component: _cb1c56aa,
			name: "course-components-Filter"
		},
		{
			path: "/home/news/components/List",
			component: _0dc52b0d,
			name: "home-news-components-List"
		},
		{
			path: "/profile/personalSet/components/updatePassword",
			component: _5b0af76c,
			name: "profile-personalSet-components-updatePassword"
		},
		{
			path: "/profile/personalSet/components/setPersonal",
			component: _7351000a,
			name: "profile-personalSet-components-setPersonal"
		},
		{
			path: "/home/teacher/components/Card",
			component: _3183e79a,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/components/Info",
			component: _6fa951c6,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/personalSet/components/showPersonal",
			component: _24b0d0c5,
			name: "profile-personalSet-components-showPersonal"
		},
		{
			path: "/home/news/:detail?",
			component: _0f4139e6,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _a9797c46,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _31008004,
			name: "home-teacher-Info"
		},
		{
			path: "/course/:category?",
			component: _21c57e57,
			name: "course-category"
		},
		{
			path: "/",
			component: _34ad5154,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
