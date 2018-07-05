import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _3efebf6e = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _d7b9e804 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _d8700ba8 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _39b93d18 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _0e7597be = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _625b9490 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _6ed6c9dd = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _668b282e = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _7c23a540 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _4c3f3176 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _26a9bbc9 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _f6467512 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _41bd8724 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _903560e0 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _564296f2 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _07910e54 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _7c1819c1 = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _1ecba1a2 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _74868877 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _49b741ac = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _283aca92 = () => import('../pages/profile/pages/companyid.vue' /* webpackChunkName: "pages/profile/pages/companyid" */).then(m => m.default || m)
const _ce7c7418 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _c541fa94 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _5082834c = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _cb391fb2 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _918a4068 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _35ff8d74 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _453e2cf0 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _3f1c7502 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _03f83144 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _8a0fc9ee = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _5f9540bc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _113b5a91 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _7615cb4d = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _0053922e = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _0fc6d4fd = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _6650d2cc = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _367ce07e = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _2b72d11c = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _5202c248 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _d680be9e = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _51a14362 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _6e8f2032 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _eaaa18b4 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _0afd2516 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _147de2e3 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _63ca7037 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _19f386a4 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _e957bd0a = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _fedb0f3a = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _7707e590 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _36b44f18 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _75c72fe8 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _048f1b85 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _e7f2ff0c = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _73a890b0 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _4bdd09a7 = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _0bcd6fd7 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _37530844 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _66d42102 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _59b00475 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _0849650c = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _16df60ae = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _37da3042 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _400da6a6 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _4e587cbc = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _fbd46804 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _26c61d7c = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _165e4352 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _5d2040d5 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _35587a86 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _5ce45a00 = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _0a80d6f0 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _f87adf9e = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _b34f3568 = () => import('../pages/profile/pages/companyid.vue' /* webpackChunkName: "pages/profile/pages/companyid" */).then(m => m.default || m)
const _d4817de2 = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _5941f9e4 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _587aa877 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> dev



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
<<<<<<< HEAD
			path: "/home",
			component: _121a4c47,
			name: "home"
		},
		{
=======
>>>>>>> dev
			path: "/profile",
			component: _01587f57,
			name: "profile"
		},
		{
<<<<<<< HEAD
			path: "/shop/checkedCourse",
			component: _3efebf6e,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/classifycourse",
			component: _d7b9e804,
			name: "course-classifycourse"
=======
			path: "/home",
			component: _7615cb4d,
			name: "home"
		},
		{
			path: "/other/Institutional",
			component: _0053922e,
			name: "other-Institutional"
		},
		{
			path: "/shop/affirmOrder",
			component: _0fc6d4fd,
			name: "shop-affirmOrder"
>>>>>>> dev
		},
		{
			path: "/shop/wePay",
			component: _025553c6,
			name: "shop-wePay"
		},
		{
<<<<<<< HEAD
			path: "/shop/affirmOrder",
			component: _5f413277,
			name: "shop-affirmOrder"
=======
			path: "/course/search",
			component: _367ce07e,
			name: "course-search"
		},
		{
			path: "/news/detail",
			component: _2b72d11c,
			name: "news-detail"
		},
		{
			path: "/other/enterprisecustom",
			component: _5202c248,
			name: "other-enterprisecustom"
		},
		{
			path: "/other/aboutUs",
			component: _d680be9e,
			name: "other-aboutUs"
		},
		{
			path: "/course/newlesson",
			component: _51a14362,
			name: "course-newlesson"
>>>>>>> dev
		},
		{
			path: "/shop/checkedCourseList",
			component: _d8700ba8,
			name: "shop-checkedCourseList"
		},
		{
			path: "/shop/shoppingcart",
			component: _eaaa18b4,
			name: "shop-shoppingcart"
		},
		{
			path: "/other/degree",
			component: _0afd2516,
			name: "other-degree"
		},
		{
			path: "/activity/faceteach",
			component: _147de2e3,
			name: "activity-faceteach"
		},
		{
			path: "/shop/payResult",
			component: _63ca7037,
			name: "shop-payResult"
		},
		{
			path: "/other/hrEntry",
			component: _39b93d18,
			name: "other-hrEntry"
		},
		{
<<<<<<< HEAD
			path: "/other/homeUs",
			component: _0e7597be,
			name: "other-homeUs"
		},
		{
			path: "/news/detail",
			component: _625b9490,
			name: "news-detail"
=======
			path: "/course/classifylist",
			component: _e957bd0a,
			name: "course-classifylist"
>>>>>>> dev
		},
		{
			path: "/shop/paypublic",
			component: _d7cc2746,
			name: "shop-paypublic"
		},
		{
<<<<<<< HEAD
			path: "/shop/payResult",
			component: _7751e431,
			name: "shop-payResult"
		},
		{
			path: "/course/coursedetail",
			component: _1559d86a,
			name: "course-coursedetail"
		},
		{
			path: "/activity/faceteach",
			component: _6ed6c9dd,
			name: "activity-faceteach"
=======
			path: "/course/classifycourse",
			component: _7707e590,
			name: "course-classifycourse"
		},
		{
			path: "/shop/checkedCourse",
			component: _36b44f18,
			name: "shop-checkedCourse"
>>>>>>> dev
		},
		{
			path: "/course/chooselesson",
			component: _668b282e,
			name: "course-chooselesson"
		},
		{
			path: "/course/coursedetail",
			component: _048f1b85,
			name: "course-coursedetail"
		},
		{
			path: "/course/player",
			component: _7c23a540,
			name: "course-player"
		},
		{
<<<<<<< HEAD
			path: "/news/list",
			component: _4c3f3176,
			name: "news-list"
		},
		{
			path: "/course/newlesson",
			component: _26a9bbc9,
			name: "course-newlesson"
		},
		{
			path: "/other/aboutUs",
			component: _f6467512,
			name: "other-aboutUs"
=======
			path: "/shop/test",
			component: _73a890b0,
			name: "shop-test"
		},
		{
			path: "/other/homeUs",
			component: _4bdd09a7,
			name: "other-homeUs"
		},
		{
			path: "/course/category",
			component: _0bcd6fd7,
			name: "course-category"
>>>>>>> dev
		},
		{
			path: "/other/faceteach",
			component: _41bd8724,
			name: "other-faceteach"
		},
		{
<<<<<<< HEAD
			path: "/other/degree",
			component: _903560e0,
			name: "other-degree"
		},
		{
			path: "/shop/shoppingcart",
			component: _2a7c456c,
			name: "shop-shoppingcart"
		},
		{
			path: "/course/category",
			component: _69347b1d,
			name: "course-category"
		},
		{
			path: "/course/search",
			component: _564296f2,
			name: "course-search"
		},
		{
			path: "/other/enterprisecustom",
			component: _07910e54,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/classifylist",
			component: _7c1819c1,
			name: "course-classifylist"
		},
		{
			path: "/other/Institutional",
			component: _1ecba1a2,
			name: "other-Institutional"
		},
		{
			path: "/home/components/tab",
			component: _74868877,
			name: "home-components-tab"
		},
		{
			path: "/home/components/partner",
			component: _49b741ac,
			name: "home-components-partner"
		},
		{
			path: "/profile/pages/companyid",
			component: _283aca92,
			name: "profile-pages-companyid"
		},
		{
			path: "/home/components/classic",
			component: _ce7c7418,
			name: "home-components-classic"
		},
		{
			path: "/profile/components/bindid",
			component: _c541fa94,
			name: "profile-components-bindid"
=======
			path: "/news/list",
			component: _66d42102,
			name: "news-list"
		},
		{
			path: "/profile/pages/courselist",
			component: _59b00475,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/personalset",
			component: _0849650c,
			name: "profile-components-personalset"
		},
		{
			path: "/home/components/classic",
			component: _16df60ae,
			name: "home-components-classic"
		},
		{
			path: "/home/components/info",
			component: _37da3042,
			name: "home-components-info"
		},
		{
			path: "/home/components/evaluate",
			component: _400da6a6,
			name: "home-components-evaluate"
		},
		{
			path: "/home/components/new",
			component: _4e587cbc,
			name: "home-components-new"
		},
		{
			path: "/home/components/teacher",
			component: _fbd46804,
			name: "home-components-teacher"
		},
		{
			path: "/profile/pages/order",
			component: _26c61d7c,
			name: "profile-pages-order"
>>>>>>> dev
		},
		{
			path: "/home/components/forgotpassword",
			component: _5082834c,
			name: "home-components-forgotpassword"
		},
		{
<<<<<<< HEAD
			path: "/home/components/evaluate",
			component: _cb391fb2,
			name: "home-components-evaluate"
		},
		{
=======
>>>>>>> dev
			path: "/profile/pages/invitation",
			component: _178a844f,
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/components/info",
			component: _918a4068,
			name: "profile-components-info"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/personalset",
			component: _35ff8d74,
			name: "profile-components-personalset"
		},
		{
			path: "/profile/pages/order",
			component: _453e2cf0,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/new",
			component: _3f1c7502,
			name: "home-components-new"
		},
		{
			path: "/home/components/teacher",
			component: _03f83144,
			name: "home-components-teacher"
=======
			path: "/home/components/free",
			component: _5ce45a00,
			name: "home-components-free"
		},
		{
			path: "/profile/components/bindid",
			component: _0a80d6f0,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/tab",
			component: _f87adf9e,
			name: "home-components-tab"
		},
		{
			path: "/profile/pages/companyid",
			component: _b34f3568,
			name: "profile-pages-companyid"
>>>>>>> dev
		},
		{
			path: "/home/components/famous",
			component: _8a0fc9ee,
			name: "home-components-famous"
		},
		{
<<<<<<< HEAD
			path: "/profile/pages/courselist",
			component: _141a47ef,
			name: "profile-pages-courselist"
		},
		{
			path: "/home/components/info",
			component: _5f9540bc,
			name: "home-components-info"
=======
			path: "/home/components/partner",
			component: _5941f9e4,
			name: "home-components-partner"
>>>>>>> dev
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
