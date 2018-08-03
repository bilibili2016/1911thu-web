import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4bb7511c = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _de783be8 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _16f3c47f = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _21c4caa2 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _fe022cea = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _e9cecff2 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _a4aae6bc = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _30f5483f = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _5b3387c2 = () => import('../pages/other/partypolicy.vue' /* webpackChunkName: "pages/other/partypolicy" */).then(m => m.default || m)
const _5db408da = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _230af640 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _c92771ec = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _73606ca6 = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _2a8e1071 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _5a62cdce = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _566dd0bc = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _115d4009 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _446b73da = () => import('../pages/course/media.vue' /* webpackChunkName: "pages/course/media" */).then(m => m.default || m)
const _88218ce2 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _da04e1ca = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _29c8eac4 = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _5da89d92 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _f57b1126 = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _32808815 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _65560e8e = () => import('../pages/other/policyProgram.vue' /* webpackChunkName: "pages/other/policyProgram" */).then(m => m.default || m)
const _cd967390 = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _2313e67c = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _8ffde114 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _8dc400f8 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _54ef7d5b = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _bfb5a8b4 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _1c267f9a = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _0f89ac64 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _30d2a07c = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _5f507ee8 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _45f4e39f = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _5cff4090 = () => import('../pages/home/components/newcourse.vue' /* webpackChunkName: "pages/home/components/newcourse" */).then(m => m.default || m)
const _15241d54 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _a9fa2154 = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _cd76f6de = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _a4da5c12 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _7ec18eb9 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _202bbd1c = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _f234c806 = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _1d211185 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _51be314e = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _11b3e0f4 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _7f8f050d = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _360e51cf = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _52f88a51 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _ae8c7202 = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _b6f96db2 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _d005eda8 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _4c2a7045 = () => import('../pages/news/components/List.vue' /* webpackChunkName: "pages/news/components/List" */).then(m => m.default || m)
const _4a830f62 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _1f58a052 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _0f062441 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _bc656466 = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _0d90dbb2 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _ef99fd3a = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _2c22e646 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _05fb371e = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
const _19612ed3 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _2dfb1658 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
<<<<<<< HEAD
			component: _01587f57,
=======
			component: _4bb7511c,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile"
		},
		{
			path: "/home",
<<<<<<< HEAD
			component: _121a4c47,
=======
			component: _de783be8,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home"
		},
		{
			path: "/other/faceteach",
<<<<<<< HEAD
			component: _41bd8724,
=======
			component: _16f3c47f,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-faceteach"
		},
		{
			path: "/activity/faceteach",
<<<<<<< HEAD
			component: _6ed6c9dd,
=======
			component: _21c4caa2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "activity-faceteach"
		},
		{
			path: "/shop/wePay",
<<<<<<< HEAD
			component: _025553c6,
=======
			component: _fe022cea,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _2a7c456c,
=======
			component: _e9cecff2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-shoppingcart"
		},
		{
			path: "/course/search",
<<<<<<< HEAD
			component: _564296f2,
=======
			component: _a4aae6bc,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-search"
		},
		{
			path: "/project/commonproblems",
<<<<<<< HEAD
			component: _cba19c0c,
=======
			component: _30f5483f,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "project-commonproblems"
		},
		{
			path: "/other/partypolicy",
<<<<<<< HEAD
			component: _71c9e984,
=======
			component: _5b3387c2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-partypolicy"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _1f087bbf,
=======
			component: _5db408da,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "project-projectDetail"
		},
		{
			path: "/news/list",
<<<<<<< HEAD
			component: _4c3f3176,
=======
			component: _230af640,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "news-list"
		},
		{
			path: "/other/Institutional",
<<<<<<< HEAD
			component: _1ecba1a2,
=======
			component: _c92771ec,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-Institutional"
		},
		{
			path: "/other/homeUs",
<<<<<<< HEAD
			component: _0e7597be,
=======
			component: _73606ca6,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-homeUs"
		},
		{
			path: "/shop/checkedCourseList",
<<<<<<< HEAD
			component: _d8700ba8,
=======
			component: _2a8e1071,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-checkedCourseList"
		},
		{
			path: "/course/classifycourse",
<<<<<<< HEAD
			component: _d7b9e804,
=======
			component: _5a62cdce,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-classifycourse"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _d7cc2746,
=======
			component: _566dd0bc,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-paypublic"
		},
		{
			path: "/course/chooselesson",
<<<<<<< HEAD
			component: _668b282e,
=======
			component: _115d4009,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-chooselesson"
		},
		{
			path: "/course/media",
<<<<<<< HEAD
			component: _6c5f8956,
=======
			component: _446b73da,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-media"
		},
		{
			path: "/other/hrEntry",
<<<<<<< HEAD
			component: _39b93d18,
=======
			component: _88218ce2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-hrEntry"
		},
		{
			path: "/other/enterprisecustom",
<<<<<<< HEAD
			component: _07910e54,
=======
			component: _da04e1ca,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-enterprisecustom"
		},
		{
			path: "/course/freelesson",
<<<<<<< HEAD
			component: _eb018ffa,
=======
			component: _29c8eac4,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-freelesson"
		},
		{
			path: "/other/aboutUs",
<<<<<<< HEAD
			component: _f6467512,
=======
			component: _5da89d92,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-aboutUs"
		},
		{
			path: "/course/qualitylesson",
<<<<<<< HEAD
			component: _545cd830,
=======
			component: _f57b1126,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-qualitylesson"
		},
		{
			path: "/other/degree",
<<<<<<< HEAD
			component: _903560e0,
=======
			component: _32808815,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-degree"
		},
		{
			path: "/other/policyProgram",
<<<<<<< HEAD
			component: _2282e0de,
=======
			component: _65560e8e,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-policyProgram"
		},
		{
			path: "/famous/list",
<<<<<<< HEAD
			component: _42aba35d,
=======
			component: _cd967390,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "famous-list"
		},
		{
			path: "/project/projectevaluate",
<<<<<<< HEAD
			component: _a70d4b32,
=======
			component: _2313e67c,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "project-projectevaluate"
		},
		{
			path: "/shop/payResult",
<<<<<<< HEAD
			component: _7751e431,
=======
			component: _8ffde114,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-payResult"
		},
		{
			path: "/project/projectcourse",
<<<<<<< HEAD
			component: _7a727269,
=======
			component: _8dc400f8,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "project-projectcourse"
		},
		{
			path: "/course/player",
<<<<<<< HEAD
			component: _7c23a540,
=======
			component: _54ef7d5b,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-player"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _1559d86a,
=======
			component: _bfb5a8b4,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-coursedetail"
		},
		{
			path: "/shop/checkedCourse",
<<<<<<< HEAD
			component: _3efebf6e,
=======
			component: _1c267f9a,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-checkedCourse"
		},
		{
			path: "/course/newlesson",
<<<<<<< HEAD
			component: _26a9bbc9,
=======
			component: _0f89ac64,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-newlesson"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _5f413277,
=======
			component: _30d2a07c,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "shop-affirmOrder"
		},
		{
			path: "/other/userProtocol",
<<<<<<< HEAD
			component: _1d69bfc7,
=======
			component: _5f507ee8,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "other-userProtocol"
		},
		{
			path: "/home/components/teacher",
<<<<<<< HEAD
			component: _03f83144,
=======
			component: _45f4e39f,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-teacher"
		},
		{
			path: "/home/components/newcourse",
<<<<<<< HEAD
			component: _1be6d81d,
=======
			component: _5cff4090,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-newcourse"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _178a844f,
=======
			component: _15241d54,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/project",
<<<<<<< HEAD
			component: _69063cfb,
=======
			component: _a9fa2154,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-project"
		},
		{
			path: "/home/components/forgotpassword",
<<<<<<< HEAD
			component: _5082834c,
=======
			component: _cd76f6de,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-forgotpassword"
		},
		{
			path: "/profile/pages/ticketOrder",
<<<<<<< HEAD
			component: _100d6b48,
=======
			component: _a4da5c12,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/profile/components/personalset",
<<<<<<< HEAD
			component: _35ff8d74,
=======
			component: _7ec18eb9,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-components-personalset"
		},
		{
			path: "/profile/components/binding",
<<<<<<< HEAD
			component: _22945157,
=======
			component: _202bbd1c,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-components-binding"
		},
		{
			path: "/profile/pages/ticketHistory",
<<<<<<< HEAD
			component: _5ce0e1bc,
=======
			component: _f234c806,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/home/components/partner",
<<<<<<< HEAD
			component: _49b741ac,
=======
			component: _1d211185,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-partner"
		},
		{
			path: "/home/components/famous",
<<<<<<< HEAD
			component: _8a0fc9ee,
=======
			component: _51be314e,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _141a47ef,
=======
			component: _11b3e0f4,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-pages-courselist"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _2e6e2270,
=======
			component: _7f8f050d,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-components-List"
		},
		{
			path: "/profile/components/conversion",
<<<<<<< HEAD
			component: _7e080fb4,
=======
			component: _360e51cf,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-components-conversion"
		},
		{
			path: "/profile/components/bindid",
<<<<<<< HEAD
			component: _c541fa94,
=======
			component: _52f88a51,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/free",
<<<<<<< HEAD
			component: _0d6e390c,
=======
			component: _ae8c7202,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-free"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _b22c9fbc,
=======
			component: _b6f96db2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-components-Filter"
		},
		{
			path: "/home/components/evaluate",
<<<<<<< HEAD
			component: _cb391fb2,
=======
			component: _d005eda8,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-evaluate"
		},
		{
			path: "/news/components/List",
<<<<<<< HEAD
			component: _c68ce680,
=======
			component: _4c2a7045,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "news-components-List"
		},
		{
			path: "/home/components/classic",
<<<<<<< HEAD
			component: _ce7c7418,
=======
			component: _4a830f62,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-classic"
		},
		{
			path: "/home/components/tab",
<<<<<<< HEAD
			component: _74868877,
=======
			component: _1f58a052,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-tab"
		},
		{
			path: "/home/components/info",
<<<<<<< HEAD
			component: _5f9540bc,
=======
			component: _0f062441,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-info"
		},
		{
			path: "/home/components/teacherResource",
<<<<<<< HEAD
			component: _5b61b31c,
=======
			component: _bc656466,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-teacherResource"
		},
		{
			path: "/profile/components/info",
<<<<<<< HEAD
			component: _918a4068,
=======
			component: _0d90dbb2,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-components-info"
		},
		{
			path: "/profile/pages/order",
<<<<<<< HEAD
			component: _453e2cf0,
=======
			component: _ef99fd3a,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "profile-pages-order"
		},
		{
			path: "/home/components/new",
<<<<<<< HEAD
			component: _3f1c7502,
=======
			component: _2c22e646,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "home-components-new"
		},
		{
			path: "/news/:detail?",
<<<<<<< HEAD
			component: _e94002ce,
=======
			component: _05fb371e,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "news-detail"
		},
		{
			path: "/course/:category?",
<<<<<<< HEAD
			component: _47cfc0ce,
=======
			component: _19612ed3,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "course-category"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _06d81986,
=======
			component: _2dfb1658,
>>>>>>> a29b89b88839fdb577642062281cb53ec38aab5a
			name: "index"
		}
    ],


    fallback: false
  })
}
