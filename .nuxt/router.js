import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _1d69bfc7 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _545cd830 = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _41bd8724 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _eb018ffa = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _668b282e = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _42aba35d = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _d8700ba8 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _3efebf6e = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _6ed6c9dd = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _26a9bbc9 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _1ecba1a2 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _903560e0 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _1f7b8840 = () => import('../pages/other/ie.vue' /* webpackChunkName: "pages/other/ie" */).then(m => m.default || m)
const _4c3f3176 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _0e7597be = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _07910e54 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _d7b9e804 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _7c23a540 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _fe19ef14 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _39b93d18 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _f6467512 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _564296f2 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _cb391fb2 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _69063cfb = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _453e2cf0 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _35ff8d74 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _74868877 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _c541fa94 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _03f83144 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _ce7c7418 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _3f1c7502 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _5082834c = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _0d6e390c = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _49b741ac = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _5b61b31c = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _5f9540bc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _8a0fc9ee = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _918a4068 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _e94002ce = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _87dc3c1e = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _440a116d = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _2a6e0b71 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _9a1cc5dc = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _a7662d20 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _c35a288c = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _174dcf19 = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _0bdf5c78 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _50b27a1a = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _adeb3e54 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _4c030b18 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _7bdb1587 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _5cc0e9f3 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _b0cac5f2 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _f7c14e76 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _916a46fc = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _7b63ba8c = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _1b97340a = () => import('../pages/other/ie.vue' /* webpackChunkName: "pages/other/ie" */).then(m => m.default || m)
const _192a745b = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _d54f3ebe = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _032e074b = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _1179df80 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _5b042814 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _82559154 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _7f85d4e8 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _25d4f38a = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _ea5ad64a = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _746c409a = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _70e350e6 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _1790469d = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _ee4f853e = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _68a6d451 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _07dea8de = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _70e6131e = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _ba24abc4 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _752d144c = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _080bb20d = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _d0efb868 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _d1fac04c = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _2bcc348a = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _5abcc2d0 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _03e9551c = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _851ec014 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _532e26b8 = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _34642f0e = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _3b44a7ce = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _6e2ecdc0 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _03249f08 = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _3cb549e6 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _5f8afc9a = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _4a454e62 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _d46e5c7a = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
const _35ebfb53 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> origin/dev



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
			component: _121a4c47,
=======
			component: _87dc3c1e,
>>>>>>> origin/dev
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _01587f57,
=======
			component: _440a116d,
>>>>>>> origin/dev
			name: "profile"
		},
		{
			path: "/other/userProtocol",
<<<<<<< HEAD
			component: _1d69bfc7,
=======
			component: _2a6e0b71,
>>>>>>> origin/dev
			name: "other-userProtocol"
		},
		{
			path: "/course/qualitylesson",
<<<<<<< HEAD
			component: _545cd830,
=======
			component: _9a1cc5dc,
>>>>>>> origin/dev
			name: "course-qualitylesson"
		},
		{
			path: "/shop/wePay",
<<<<<<< HEAD
			component: _025553c6,
=======
			component: _a7662d20,
>>>>>>> origin/dev
			name: "shop-wePay"
		},
		{
			path: "/other/faceteach",
<<<<<<< HEAD
			component: _41bd8724,
=======
			component: _c35a288c,
>>>>>>> origin/dev
			name: "other-faceteach"
		},
		{
			path: "/course/freelesson",
<<<<<<< HEAD
			component: _eb018ffa,
=======
			component: _174dcf19,
>>>>>>> origin/dev
			name: "course-freelesson"
		},
		{
			path: "/course/chooselesson",
<<<<<<< HEAD
			component: _668b282e,
=======
			component: _0bdf5c78,
>>>>>>> origin/dev
			name: "course-chooselesson"
		},
		{
			path: "/famous/list",
<<<<<<< HEAD
			component: _42aba35d,
=======
			component: _50b27a1a,
>>>>>>> origin/dev
			name: "famous-list"
		},
		{
			path: "/shop/checkedCourseList",
<<<<<<< HEAD
			component: _d8700ba8,
=======
			component: _adeb3e54,
>>>>>>> origin/dev
			name: "shop-checkedCourseList"
		},
		{
			path: "/shop/checkedCourse",
<<<<<<< HEAD
			component: _3efebf6e,
=======
			component: _4c030b18,
>>>>>>> origin/dev
			name: "shop-checkedCourse"
		},
		{
			path: "/activity/faceteach",
<<<<<<< HEAD
			component: _6ed6c9dd,
=======
			component: _7bdb1587,
>>>>>>> origin/dev
			name: "activity-faceteach"
		},
		{
			path: "/course/newlesson",
<<<<<<< HEAD
			component: _26a9bbc9,
=======
			component: _5cc0e9f3,
>>>>>>> origin/dev
			name: "course-newlesson"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _d7cc2746,
=======
			component: _b0cac5f2,
>>>>>>> origin/dev
			name: "shop-paypublic"
		},
		{
			path: "/other/Institutional",
<<<<<<< HEAD
			component: _1ecba1a2,
=======
			component: _f7c14e76,
>>>>>>> origin/dev
			name: "other-Institutional"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _2a7c456c,
=======
			component: _916a46fc,
>>>>>>> origin/dev
			name: "shop-shoppingcart"
		},
		{
			path: "/other/degree",
<<<<<<< HEAD
			component: _903560e0,
=======
			component: _7b63ba8c,
>>>>>>> origin/dev
			name: "other-degree"
		},
		{
			path: "/other/ie",
<<<<<<< HEAD
			component: _1f7b8840,
=======
			component: _1b97340a,
>>>>>>> origin/dev
			name: "other-ie"
		},
		{
			path: "/news/list",
<<<<<<< HEAD
			component: _4c3f3176,
=======
			component: _192a745b,
>>>>>>> origin/dev
			name: "news-list"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _5f413277,
=======
			component: _d54f3ebe,
>>>>>>> origin/dev
			name: "shop-affirmOrder"
		},
		{
			path: "/other/homeUs",
<<<<<<< HEAD
			component: _0e7597be,
=======
			component: _032e074b,
>>>>>>> origin/dev
			name: "other-homeUs"
		},
		{
			path: "/other/enterprisecustom",
<<<<<<< HEAD
			component: _07910e54,
=======
			component: _1179df80,
>>>>>>> origin/dev
			name: "other-enterprisecustom"
		},
		{
			path: "/course/classifycourse",
<<<<<<< HEAD
			component: _d7b9e804,
=======
			component: _5b042814,
>>>>>>> origin/dev
			name: "course-classifycourse"
		},
		{
			path: "/course/player",
<<<<<<< HEAD
			component: _7c23a540,
=======
			component: _82559154,
>>>>>>> origin/dev
			name: "course-player"
		},
		{
			path: "/shop/test",
<<<<<<< HEAD
			component: _fe19ef14,
=======
			component: _7f85d4e8,
>>>>>>> origin/dev
			name: "shop-test"
		},
		{
			path: "/other/hrEntry",
<<<<<<< HEAD
			component: _39b93d18,
=======
			component: _25d4f38a,
>>>>>>> origin/dev
			name: "other-hrEntry"
		},
		{
			path: "/shop/payResult",
<<<<<<< HEAD
			component: _7751e431,
=======
			component: _ea5ad64a,
>>>>>>> origin/dev
			name: "shop-payResult"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _69347b1d,
=======
			component: _746c409a,
>>>>>>> origin/dev
			name: "course-category"
		},
		{
			path: "/other/aboutUs",
<<<<<<< HEAD
			component: _f6467512,
=======
			component: _70e350e6,
>>>>>>> origin/dev
			name: "other-aboutUs"
		},
		{
			path: "/course/search",
<<<<<<< HEAD
			component: _564296f2,
=======
			component: _1790469d,
>>>>>>> origin/dev
			name: "course-search"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _1559d86a,
=======
			component: _ee4f853e,
>>>>>>> origin/dev
			name: "course-coursedetail"
		},
		{
			path: "/home/components/evaluate",
<<<<<<< HEAD
			component: _cb391fb2,
=======
			component: _68a6d451,
>>>>>>> origin/dev
			name: "home-components-evaluate"
		},
		{
			path: "/home/components/project",
<<<<<<< HEAD
			component: _69063cfb,
=======
			component: _07dea8de,
>>>>>>> origin/dev
			name: "home-components-project"
		},
		{
			path: "/profile/pages/order",
<<<<<<< HEAD
			component: _453e2cf0,
=======
			component: _70e6131e,
>>>>>>> origin/dev
			name: "profile-pages-order"
		},
		{
			path: "/profile/components/personalset",
<<<<<<< HEAD
			component: _35ff8d74,
=======
			component: _ba24abc4,
>>>>>>> origin/dev
			name: "profile-components-personalset"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _b22c9fbc,
=======
			component: _752d144c,
>>>>>>> origin/dev
			name: "course-components-Filter"
		},
		{
			path: "/home/components/tab",
<<<<<<< HEAD
			component: _74868877,
=======
			component: _080bb20d,
>>>>>>> origin/dev
			name: "home-components-tab"
		},
		{
			path: "/profile/components/bindid",
<<<<<<< HEAD
			component: _c541fa94,
=======
			component: _d0efb868,
>>>>>>> origin/dev
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/teacher",
<<<<<<< HEAD
			component: _03f83144,
=======
			component: _d1fac04c,
>>>>>>> origin/dev
			name: "home-components-teacher"
		},
		{
			path: "/home/components/classic",
<<<<<<< HEAD
			component: _ce7c7418,
=======
			component: _2bcc348a,
>>>>>>> origin/dev
			name: "home-components-classic"
		},
		{
			path: "/home/components/new",
<<<<<<< HEAD
			component: _3f1c7502,
=======
			component: _5abcc2d0,
>>>>>>> origin/dev
			name: "home-components-new"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _2e6e2270,
=======
			component: _03e9551c,
>>>>>>> origin/dev
			name: "course-components-List"
		},
		{
			path: "/home/components/forgotpassword",
<<<<<<< HEAD
			component: _5082834c,
=======
			component: _851ec014,
>>>>>>> origin/dev
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/free",
<<<<<<< HEAD
			component: _0d6e390c,
=======
			component: _532e26b8,
>>>>>>> origin/dev
			name: "home-components-free"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _178a844f,
=======
			component: _34642f0e,
>>>>>>> origin/dev
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _141a47ef,
=======
			component: _3b44a7ce,
>>>>>>> origin/dev
			name: "profile-pages-courselist"
		},
		{
			path: "/home/components/partner",
<<<<<<< HEAD
			component: _49b741ac,
=======
			component: _6e2ecdc0,
>>>>>>> origin/dev
			name: "home-components-partner"
		},
		{
			path: "/home/components/teacherResource",
<<<<<<< HEAD
			component: _5b61b31c,
=======
			component: _03249f08,
>>>>>>> origin/dev
			name: "home-components-teacherResource"
		},
		{
			path: "/home/components/info",
<<<<<<< HEAD
			component: _5f9540bc,
=======
			component: _3cb549e6,
>>>>>>> origin/dev
			name: "home-components-info"
		},
		{
			path: "/home/components/famous",
<<<<<<< HEAD
			component: _8a0fc9ee,
=======
			component: _5f8afc9a,
>>>>>>> origin/dev
			name: "home-components-famous"
		},
		{
			path: "/profile/components/info",
<<<<<<< HEAD
			component: _918a4068,
=======
			component: _4a454e62,
>>>>>>> origin/dev
			name: "profile-components-info"
		},
		{
			path: "/news/:detail?",
<<<<<<< HEAD
			component: _e94002ce,
=======
			component: _d46e5c7a,
>>>>>>> origin/dev
			name: "news-detail"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _06d81986,
=======
			component: _35ebfb53,
>>>>>>> origin/dev
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
