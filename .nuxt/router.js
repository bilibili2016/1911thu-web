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
			component: _4bb7511c,
			name: "profile"
		},
		{
			path: "/home",
			component: _de783be8,
			name: "home"
		},
		{
			path: "/other/faceteach",
			component: _16f3c47f,
			name: "other-faceteach"
		},
		{
			path: "/activity/faceteach",
			component: _21c4caa2,
			name: "activity-faceteach"
		},
		{
			path: "/shop/wePay",
			component: _fe022cea,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _e9cecff2,
			name: "shop-shoppingcart"
		},
		{
			path: "/course/search",
			component: _a4aae6bc,
			name: "course-search"
		},
		{
			path: "/project/commonproblems",
			component: _30f5483f,
			name: "project-commonproblems"
		},
		{
			path: "/other/partypolicy",
			component: _5b3387c2,
			name: "other-partypolicy"
		},
		{
			path: "/project/projectDetail",
			component: _5db408da,
			name: "project-projectDetail"
		},
		{
			path: "/news/list",
			component: _230af640,
			name: "news-list"
		},
		{
			path: "/other/Institutional",
			component: _c92771ec,
			name: "other-Institutional"
		},
		{
			path: "/other/homeUs",
			component: _73606ca6,
			name: "other-homeUs"
		},
		{
			path: "/shop/checkedCourseList",
			component: _2a8e1071,
			name: "shop-checkedCourseList"
		},
		{
			path: "/course/classifycourse",
			component: _5a62cdce,
			name: "course-classifycourse"
		},
		{
			path: "/shop/paypublic",
			component: _566dd0bc,
			name: "shop-paypublic"
		},
		{
			path: "/course/chooselesson",
			component: _115d4009,
			name: "course-chooselesson"
		},
		{
			path: "/course/media",
			component: _446b73da,
			name: "course-media"
		},
		{
			path: "/other/hrEntry",
			component: _88218ce2,
			name: "other-hrEntry"
		},
		{
			path: "/other/enterprisecustom",
			component: _da04e1ca,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/freelesson",
			component: _29c8eac4,
			name: "course-freelesson"
		},
		{
			path: "/other/aboutUs",
			component: _5da89d92,
			name: "other-aboutUs"
		},
		{
			path: "/course/qualitylesson",
			component: _f57b1126,
			name: "course-qualitylesson"
		},
		{
			path: "/other/degree",
			component: _32808815,
			name: "other-degree"
		},
		{
			path: "/other/policyProgram",
			component: _65560e8e,
			name: "other-policyProgram"
		},
		{
			path: "/famous/list",
			component: _cd967390,
			name: "famous-list"
		},
		{
			path: "/project/projectevaluate",
			component: _2313e67c,
			name: "project-projectevaluate"
		},
		{
			path: "/shop/payResult",
			component: _8ffde114,
			name: "shop-payResult"
		},
		{
			path: "/project/projectcourse",
			component: _8dc400f8,
			name: "project-projectcourse"
		},
		{
			path: "/course/player",
			component: _54ef7d5b,
			name: "course-player"
		},
		{
			path: "/course/coursedetail",
			component: _bfb5a8b4,
			name: "course-coursedetail"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c267f9a,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/newlesson",
			component: _0f89ac64,
			name: "course-newlesson"
		},
		{
			path: "/shop/affirmOrder",
			component: _30d2a07c,
			name: "shop-affirmOrder"
		},
		{
			path: "/other/userProtocol",
			component: _5f507ee8,
			name: "other-userProtocol"
		},
		{
			path: "/home/components/teacher",
			component: _45f4e39f,
			name: "home-components-teacher"
		},
		{
			path: "/home/components/newcourse",
			component: _5cff4090,
			name: "home-components-newcourse"
		},
		{
			path: "/profile/pages/invitation",
			component: _15241d54,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/project",
			component: _a9fa2154,
			name: "home-components-project"
		},
		{
			path: "/home/components/forgotpassword",
			component: _cd76f6de,
			name: "home-components-forgotpassword"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _a4da5c12,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/profile/components/personalset",
			component: _7ec18eb9,
			name: "profile-components-personalset"
		},
		{
			path: "/profile/components/binding",
			component: _202bbd1c,
			name: "profile-components-binding"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _f234c806,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/home/components/partner",
			component: _1d211185,
			name: "home-components-partner"
		},
		{
			path: "/home/components/famous",
			component: _51be314e,
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/courselist",
			component: _11b3e0f4,
			name: "profile-pages-courselist"
		},
		{
			path: "/course/components/List",
			component: _7f8f050d,
			name: "course-components-List"
		},
		{
			path: "/profile/components/conversion",
			component: _360e51cf,
			name: "profile-components-conversion"
		},
		{
			path: "/profile/components/bindid",
			component: _52f88a51,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/free",
			component: _ae8c7202,
			name: "home-components-free"
		},
		{
			path: "/course/components/Filter",
			component: _b6f96db2,
			name: "course-components-Filter"
		},
		{
			path: "/home/components/evaluate",
			component: _d005eda8,
			name: "home-components-evaluate"
		},
		{
			path: "/news/components/List",
			component: _4c2a7045,
			name: "news-components-List"
		},
		{
			path: "/home/components/classic",
			component: _4a830f62,
			name: "home-components-classic"
		},
		{
			path: "/home/components/tab",
			component: _1f58a052,
			name: "home-components-tab"
		},
		{
			path: "/home/components/info",
			component: _0f062441,
			name: "home-components-info"
		},
		{
			path: "/home/components/teacherResource",
			component: _bc656466,
			name: "home-components-teacherResource"
		},
		{
			path: "/profile/components/info",
			component: _0d90dbb2,
			name: "profile-components-info"
		},
		{
			path: "/profile/pages/order",
			component: _ef99fd3a,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/new",
			component: _2c22e646,
			name: "home-components-new"
		},
		{
			path: "/news/:detail?",
			component: _05fb371e,
			name: "news-detail"
		},
		{
			path: "/course/:category?",
			component: _19612ed3,
			name: "course-category"
		},
		{
			path: "/",
			component: _2dfb1658,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
