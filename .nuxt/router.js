import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _26a9bbc9 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _1d69bfc7 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _6ed6c9dd = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _545cd830 = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _1ecba1a2 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _903560e0 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _cba19c0c = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _2282e0de = () => import('../pages/other/policyProgram.vue' /* webpackChunkName: "pages/other/policyProgram" */).then(m => m.default || m)
const _4c3f3176 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _42aba35d = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _0e7597be = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _d7b9e804 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _668b282e = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _39628a66 = () => import('../pages/project/partypolicy.vue' /* webpackChunkName: "pages/project/partypolicy" */).then(m => m.default || m)
const _39b93d18 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _7c23a540 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _eb018ffa = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _7a727269 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _3efebf6e = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _6c5f8956 = () => import('../pages/course/media.vue' /* webpackChunkName: "pages/course/media" */).then(m => m.default || m)
const _564296f2 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _a70d4b32 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _41bd8724 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _07910e54 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _d8700ba8 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _1f7b8840 = () => import('../pages/other/ie.vue' /* webpackChunkName: "pages/other/ie" */).then(m => m.default || m)
const _f6467512 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _1be6d81d = () => import('../pages/home/components/newcourse.vue' /* webpackChunkName: "pages/home/components/newcourse" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _03f83144 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _cb391fb2 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _c68ce680 = () => import('../pages/news/components/List.vue' /* webpackChunkName: "pages/news/components/List" */).then(m => m.default || m)
const _5082834c = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _ce7c7418 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _35ff8d74 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _74868877 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _5ce0e1bc = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _5f9540bc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _8a0fc9ee = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _5b61b31c = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _918a4068 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _c541fa94 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _453e2cf0 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _69063cfb = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _22945157 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _3f1c7502 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _49b741ac = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _100d6b48 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _0d6e390c = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _7e080fb4 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _47cfc0ce = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _e94002ce = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _121a4c47,
			name: "home"
		},
		{
			path: "/profile",
			component: _01587f57,
			name: "profile"
		},
		{
			path: "/course/newlesson",
			component: _26a9bbc9,
			name: "course-newlesson"
		},
		{
			path: "/other/userProtocol",
			component: _1d69bfc7,
			name: "other-userProtocol"
		},
		{
			path: "/shop/wePay",
			component: _025553c6,
			name: "shop-wePay"
		},
		{
			path: "/activity/faceteach",
			component: _6ed6c9dd,
			name: "activity-faceteach"
		},
		{
			path: "/shop/payResult",
			component: _7751e431,
			name: "shop-payResult"
		},
		{
			path: "/course/qualitylesson",
			component: _545cd830,
			name: "course-qualitylesson"
		},
		{
			path: "/other/Institutional",
			component: _1ecba1a2,
			name: "other-Institutional"
		},
		{
			path: "/other/degree",
			component: _903560e0,
			name: "other-degree"
		},
		{
			path: "/project/commonproblems",
			component: _cba19c0c,
			name: "project-commonproblems"
		},
		{
			path: "/other/policyProgram",
			component: _2282e0de,
			name: "other-policyProgram"
		},
		{
			path: "/news/list",
			component: _4c3f3176,
			name: "news-list"
		},
		{
			path: "/famous/list",
			component: _42aba35d,
			name: "famous-list"
		},
		{
			path: "/other/homeUs",
			component: _0e7597be,
			name: "other-homeUs"
		},
		{
			path: "/project/projectDetail",
			component: _1f087bbf,
			name: "project-projectDetail"
		},
		{
			path: "/course/classifycourse",
			component: _d7b9e804,
			name: "course-classifycourse"
		},
		{
			path: "/shop/paypublic",
			component: _d7cc2746,
			name: "shop-paypublic"
		},
		{
			path: "/course/chooselesson",
			component: _668b282e,
			name: "course-chooselesson"
		},
		{
			path: "/project/partypolicy",
			component: _39628a66,
			name: "project-partypolicy"
		},
		{
			path: "/other/hrEntry",
			component: _39b93d18,
			name: "other-hrEntry"
		},
		{
			path: "/course/player",
			component: _7c23a540,
			name: "course-player"
		},
		{
			path: "/course/freelesson",
			component: _eb018ffa,
			name: "course-freelesson"
		},
		{
			path: "/course/coursedetail",
			component: _1559d86a,
			name: "course-coursedetail"
		},
		{
			path: "/project/projectcourse",
			component: _7a727269,
			name: "project-projectcourse"
		},
		{
			path: "/shop/affirmOrder",
			component: _5f413277,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/checkedCourse",
			component: _3efebf6e,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/media",
			component: _6c5f8956,
			name: "course-media"
		},
		{
			path: "/course/search",
			component: _564296f2,
			name: "course-search"
		},
		{
			path: "/shop/shoppingcart",
			component: _2a7c456c,
			name: "shop-shoppingcart"
		},
		{
			path: "/project/projectevaluate",
			component: _a70d4b32,
			name: "project-projectevaluate"
		},
		{
			path: "/other/faceteach",
			component: _41bd8724,
			name: "other-faceteach"
		},
		{
			path: "/other/enterprisecustom",
			component: _07910e54,
			name: "other-enterprisecustom"
		},
		{
			path: "/shop/checkedCourseList",
			component: _d8700ba8,
			name: "shop-checkedCourseList"
		},
		{
			path: "/other/ie",
			component: _1f7b8840,
			name: "other-ie"
		},
		{
			path: "/other/aboutUs",
			component: _f6467512,
			name: "other-aboutUs"
		},
		{
			path: "/home/components/newcourse",
			component: _1be6d81d,
			name: "home-components-newcourse"
		},
		{
			path: "/course/components/Filter",
			component: _b22c9fbc,
			name: "course-components-Filter"
		},
		{
			path: "/home/components/teacher",
			component: _03f83144,
			name: "home-components-teacher"
		},
		{
			path: "/home/components/evaluate",
			component: _cb391fb2,
			name: "home-components-evaluate"
		},
		{
			path: "/profile/pages/invitation",
			component: _178a844f,
			name: "profile-pages-invitation"
		},
		{
			path: "/news/components/List",
			component: _c68ce680,
			name: "news-components-List"
		},
		{
			path: "/home/components/forgotpassword",
			component: _5082834c,
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/classic",
			component: _ce7c7418,
			name: "home-components-classic"
		},
		{
			path: "/profile/components/personalset",
			component: _35ff8d74,
			name: "profile-components-personalset"
		},
		{
			path: "/home/components/tab",
			component: _74868877,
			name: "home-components-tab"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _5ce0e1bc,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/home/components/info",
			component: _5f9540bc,
			name: "home-components-info"
		},
		{
			path: "/home/components/famous",
			component: _8a0fc9ee,
			name: "home-components-famous"
		},
		{
			path: "/home/components/teacherResource",
			component: _5b61b31c,
			name: "home-components-teacherResource"
		},
		{
			path: "/course/components/List",
			component: _2e6e2270,
			name: "course-components-List"
		},
		{
			path: "/profile/components/info",
			component: _918a4068,
			name: "profile-components-info"
		},
		{
			path: "/profile/components/bindid",
			component: _c541fa94,
			name: "profile-components-bindid"
		},
		{
			path: "/profile/pages/order",
			component: _453e2cf0,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/project",
			component: _69063cfb,
			name: "home-components-project"
		},
		{
			path: "/profile/components/binding",
			component: _22945157,
			name: "profile-components-binding"
		},
		{
			path: "/home/components/new",
			component: _3f1c7502,
			name: "home-components-new"
		},
		{
			path: "/home/components/partner",
			component: _49b741ac,
			name: "home-components-partner"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _100d6b48,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/home/components/free",
			component: _0d6e390c,
			name: "home-components-free"
		},
		{
			path: "/profile/components/conversion",
			component: _7e080fb4,
			name: "profile-components-conversion"
		},
		{
			path: "/profile/pages/courselist",
			component: _141a47ef,
			name: "profile-pages-courselist"
		},
		{
			path: "/course/:category?",
			component: _47cfc0ce,
			name: "course-category"
		},
		{
			path: "/news/:detail?",
			component: _e94002ce,
			name: "news-detail"
		},
		{
			path: "/",
			component: _06d81986,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
