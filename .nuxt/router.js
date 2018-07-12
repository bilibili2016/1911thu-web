import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _87dc3c1e = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _440a116d = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _916a46fc = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _f7c14e76 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _a7662d20 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _1179df80 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _5cc0e9f3 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _63cd554e = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _0bdf5c78 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _174dcf19 = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _1790469d = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _2a6e0b71 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _adeb3e54 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _7bdb1587 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _25d4f38a = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _746c409a = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _4c030b18 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _5b042814 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _d54f3ebe = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _b0cac5f2 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _9a1cc5dc = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _70e350e6 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _50b27a1a = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _ee4f853e = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _7b63ba8c = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _7f85d4e8 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _c35a288c = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _192a745b = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _032e074b = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _82559154 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _ea5ad64a = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _2bcc348a = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _5abcc2d0 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _70e6131e = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _03249f08 = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _3cb549e6 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _ba24abc4 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _d0efb868 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _5f8afc9a = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _03e9551c = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _68a6d451 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _080bb20d = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _6e2ecdc0 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _532e26b8 = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _d1fac04c = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _3b44a7ce = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _851ec014 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _4a454e62 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _752d144c = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _34642f0e = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _35ebfb53 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _1ecba1a2 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _07910e54 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _26a9bbc9 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _625b9490 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _668b282e = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _eb018ffa = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _564296f2 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _1d69bfc7 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _d8700ba8 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _6ed6c9dd = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _39b93d18 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _3efebf6e = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _d7b9e804 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _545cd830 = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _f6467512 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _42aba35d = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _903560e0 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _fe19ef14 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _41bd8724 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _4c3f3176 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _0e7597be = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _7c23a540 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _ce7c7418 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _3f1c7502 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _453e2cf0 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _5b61b31c = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _5f9540bc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _35ff8d74 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _c541fa94 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _8a0fc9ee = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _cb391fb2 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _74868877 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _49b741ac = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _0d6e390c = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _03f83144 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _5082834c = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _918a4068 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> origin/liyr



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
<<<<<<< HEAD
			component: _87dc3c1e,
=======
			component: _121a4c47,
>>>>>>> origin/liyr
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _440a116d,
=======
			component: _01587f57,
>>>>>>> origin/liyr
			name: "profile"
		},
		{
			path: "/shop/shoppingcart",
			component: _916a46fc,
			name: "shop-shoppingcart"
		},
		{
			path: "/other/Institutional",
			component: _f7c14e76,
			name: "other-Institutional"
		},
		{
			path: "/shop/wePay",
			component: _a7662d20,
			name: "shop-wePay"
		},
		{
			path: "/other/enterprisecustom",
			component: _1179df80,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/newlesson",
			component: _5cc0e9f3,
			name: "course-newlesson"
		},
		{
			path: "/news/detail",
			component: _63cd554e,
			name: "news-detail"
		},
		{
			path: "/course/chooselesson",
			component: _0bdf5c78,
			name: "course-chooselesson"
		},
		{
			path: "/course/freelesson",
			component: _174dcf19,
			name: "course-freelesson"
		},
		{
			path: "/course/search",
			component: _1790469d,
			name: "course-search"
		},
		{
			path: "/other/userProtocol",
			component: _2a6e0b71,
			name: "other-userProtocol"
		},
		{
			path: "/shop/checkedCourseList",
			component: _adeb3e54,
			name: "shop-checkedCourseList"
		},
		{
			path: "/activity/faceteach",
			component: _7bdb1587,
			name: "activity-faceteach"
		},
		{
			path: "/other/hrEntry",
			component: _25d4f38a,
			name: "other-hrEntry"
		},
		{
			path: "/course/category",
			component: _746c409a,
			name: "course-category"
		},
		{
			path: "/shop/checkedCourse",
			component: _4c030b18,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/classifycourse",
			component: _5b042814,
			name: "course-classifycourse"
		},
		{
			path: "/shop/affirmOrder",
			component: _d54f3ebe,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/paypublic",
			component: _b0cac5f2,
			name: "shop-paypublic"
		},
		{
			path: "/course/qualitylesson",
			component: _9a1cc5dc,
			name: "course-qualitylesson"
		},
		{
			path: "/other/aboutUs",
			component: _70e350e6,
			name: "other-aboutUs"
		},
		{
			path: "/famous/list",
			component: _50b27a1a,
			name: "famous-list"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ee4f853e,
=======
			component: _1559d86a,
>>>>>>> origin/liyr
			name: "course-coursedetail"
		},
		{
			path: "/other/degree",
			component: _7b63ba8c,
			name: "other-degree"
		},
		{
			path: "/shop/test",
<<<<<<< HEAD
			component: _7f85d4e8,
=======
			component: _fe19ef14,
>>>>>>> origin/liyr
			name: "shop-test"
		},
		{
			path: "/other/faceteach",
			component: _c35a288c,
			name: "other-faceteach"
		},
		{
			path: "/news/list",
			component: _192a745b,
			name: "news-list"
		},
		{
			path: "/other/homeUs",
			component: _032e074b,
			name: "other-homeUs"
		},
		{
			path: "/course/player",
			component: _82559154,
			name: "course-player"
		},
		{
			path: "/shop/payResult",
			component: _ea5ad64a,
			name: "shop-payResult"
		},
		{
			path: "/home/components/classic",
			component: _2bcc348a,
			name: "home-components-classic"
		},
		{
			path: "/home/components/new",
			component: _5abcc2d0,
			name: "home-components-new"
		},
		{
			path: "/profile/pages/order",
			component: _70e6131e,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/teacherResource",
			component: _03249f08,
			name: "home-components-teacherResource"
		},
		{
			path: "/home/components/info",
<<<<<<< HEAD
			component: _3cb549e6,
=======
			component: _5f9540bc,
>>>>>>> origin/liyr
			name: "home-components-info"
		},
		{
			path: "/profile/components/personalset",
<<<<<<< HEAD
			component: _ba24abc4,
=======
			component: _35ff8d74,
>>>>>>> origin/liyr
			name: "profile-components-personalset"
		},
		{
			path: "/profile/components/bindid",
<<<<<<< HEAD
			component: _d0efb868,
=======
			component: _c541fa94,
>>>>>>> origin/liyr
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/famous",
			component: _5f8afc9a,
			name: "home-components-famous"
		},
		{
			path: "/course/components/List",
			component: _03e9551c,
			name: "course-components-List"
		},
		{
			path: "/home/components/evaluate",
			component: _68a6d451,
			name: "home-components-evaluate"
		},
		{
			path: "/home/components/tab",
			component: _080bb20d,
			name: "home-components-tab"
		},
		{
			path: "/home/components/partner",
<<<<<<< HEAD
			component: _6e2ecdc0,
=======
			component: _49b741ac,
>>>>>>> origin/liyr
			name: "home-components-partner"
		},
		{
			path: "/home/components/free",
<<<<<<< HEAD
			component: _532e26b8,
=======
			component: _0d6e390c,
>>>>>>> origin/liyr
			name: "home-components-free"
		},
		{
			path: "/home/components/teacher",
			component: _d1fac04c,
			name: "home-components-teacher"
		},
		{
			path: "/profile/pages/courselist",
			component: _3b44a7ce,
			name: "profile-pages-courselist"
		},
		{
			path: "/home/components/forgotpassword",
			component: _851ec014,
			name: "home-components-forgotpassword"
		},
		{
			path: "/profile/components/info",
			component: _4a454e62,
			name: "profile-components-info"
		},
		{
			path: "/course/components/Filter",
			component: _752d144c,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _34642f0e,
=======
			component: _178a844f,
>>>>>>> origin/liyr
			name: "profile-pages-invitation"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _35ebfb53,
=======
			component: _06d81986,
>>>>>>> origin/liyr
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
