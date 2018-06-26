import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _de783be8 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _4bb7511c = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _da04e1ca = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _3e6ab878 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _fe022cea = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _5da89d92 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _8ffde114 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _a4aae6bc = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _26ea319c = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _32808815 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _16f3c47f = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _0f89ac64 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _255b5893 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _88218ce2 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _115d4009 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _e21a07b2 = () => import('../pages/shop/shoppingCart.vue' /* webpackChunkName: "pages/shop/shoppingCart" */).then(m => m.default || m)
const _30d2a07c = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _5a62cdce = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _1c267f9a = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _230af640 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _54ef7d5b = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _2a8e1071 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _bfb5a8b4 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _2c22e646 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _339c690d = () => import('../pages/profile/pages/companyId.vue' /* webpackChunkName: "pages/profile/pages/companyId" */).then(m => m.default || m)
const _d005eda8 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _1c5d7671 = () => import('../pages/profile/components/bindId.vue' /* webpackChunkName: "pages/profile/components/bindId" */).then(m => m.default || m)
const _1f58a052 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _51be314e = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _15241d54 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _b9e04e9e = () => import('../pages/home/components/forgotPassword.vue' /* webpackChunkName: "pages/home/components/forgotPassword" */).then(m => m.default || m)
const _3c0bb2ce = () => import('../pages/profile/components/personalSet.vue' /* webpackChunkName: "pages/profile/components/personalSet" */).then(m => m.default || m)
const _0f062441 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _1d211185 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _4a830f62 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _ef99fd3a = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _0d90dbb2 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _45f4e39f = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
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
			path: "/home",
			component: _de783be8,
			name: "home"
		},
		{
			path: "/profile",
			component: _4bb7511c,
			name: "profile"
		},
		{
			path: "/other/enterprisecustom",
			component: _da04e1ca,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/category",
			component: _3e6ab878,
			name: "course-category"
		},
		{
			path: "/shop/wePay",
			component: _fe022cea,
			name: "shop-wePay"
		},
		{
			path: "/other/aboutUs",
			component: _5da89d92,
			name: "other-aboutUs"
		},
		{
			path: "/shop/payResult",
			component: _8ffde114,
			name: "shop-payResult"
		},
		{
			path: "/course/search",
			component: _a4aae6bc,
			name: "course-search"
		},
		{
			path: "/course/classifylist",
			component: _26ea319c,
			name: "course-classifylist"
		},
		{
			path: "/other/degree",
			component: _32808815,
			name: "other-degree"
		},
		{
			path: "/other/faceteach",
			component: _16f3c47f,
			name: "other-faceteach"
		},
		{
			path: "/course/newlesson",
			component: _0f89ac64,
			name: "course-newlesson"
		},
		{
			path: "/news/detail",
			component: _255b5893,
			name: "news-detail"
		},
		{
			path: "/other/hrEntry",
			component: _88218ce2,
			name: "other-hrEntry"
		},
		{
			path: "/course/chooselesson",
			component: _115d4009,
			name: "course-chooselesson"
		},
		{
			path: "/shop/shoppingCart",
			component: _e21a07b2,
			name: "shop-shoppingCart"
		},
		{
			path: "/shop/affirmOrder",
			component: _30d2a07c,
			name: "shop-affirmOrder"
		},
		{
			path: "/course/classifycourse",
			component: _5a62cdce,
			name: "course-classifycourse"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c267f9a,
			name: "shop-checkedCourse"
		},
		{
			path: "/news/list",
			component: _230af640,
			name: "news-list"
		},
		{
			path: "/course/player",
			component: _54ef7d5b,
			name: "course-player"
		},
		{
			path: "/shop/checkedCourseList",
			component: _2a8e1071,
			name: "shop-checkedCourseList"
		},
		{
			path: "/course/coursedetail",
			component: _bfb5a8b4,
			name: "course-coursedetail"
		},
		{
			path: "/home/components/new",
			component: _2c22e646,
			name: "home-components-new"
		},
		{
			path: "/profile/pages/companyId",
			component: _339c690d,
			name: "profile-pages-companyId"
		},
		{
			path: "/home/components/evaluate",
			component: _d005eda8,
			name: "home-components-evaluate"
		},
		{
			path: "/profile/components/bindId",
			component: _1c5d7671,
			name: "profile-components-bindId"
		},
		{
			path: "/home/components/tab",
			component: _1f58a052,
			name: "home-components-tab"
		},
		{
			path: "/home/components/famous",
			component: _51be314e,
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/invitation",
			component: _15241d54,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/forgotPassword",
			component: _b9e04e9e,
			name: "home-components-forgotPassword"
		},
		{
			path: "/profile/components/personalSet",
			component: _3c0bb2ce,
			name: "profile-components-personalSet"
		},
		{
			path: "/home/components/info",
			component: _0f062441,
			name: "home-components-info"
		},
		{
			path: "/home/components/partner",
			component: _1d211185,
			name: "home-components-partner"
		},
		{
			path: "/home/components/classic",
			component: _4a830f62,
			name: "home-components-classic"
		},
		{
			path: "/profile/pages/order",
			component: _ef99fd3a,
			name: "profile-pages-order"
		},
		{
			path: "/profile/components/info",
			component: _0d90dbb2,
			name: "profile-components-info"
		},
		{
			path: "/home/components/teacher",
			component: _45f4e39f,
			name: "home-components-teacher"
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
