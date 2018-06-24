import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _de783be8 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _4bb7511c = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _fe022cea = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _46967090 = () => import('../pages/activity/enterpriseCustom.vue' /* webpackChunkName: "pages/activity/enterpriseCustom" */).then(m => m.default || m)
const _d4e5b3de = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _5da89d92 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _1c267f9a = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _88218ce2 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _e21a07b2 = () => import('../pages/shop/shoppingCart.vue' /* webpackChunkName: "pages/shop/shoppingCart" */).then(m => m.default || m)
const _255b5893 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _398a265c = () => import('../pages/activity/degree.vue' /* webpackChunkName: "pages/activity/degree" */).then(m => m.default || m)
const _221f3107 = () => import('../pages/activity/customized.vue' /* webpackChunkName: "pages/activity/customized" */).then(m => m.default || m)
const _2a8e1071 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _21c4caa2 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _30d2a07c = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _230af640 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _8ffde114 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _4cd9d3fe = () => import('../pages/home/pages/classic.vue' /* webpackChunkName: "pages/home/pages/classic" */).then(m => m.default || m)
const _06384b06 = () => import('../pages/course/pages/player.vue' /* webpackChunkName: "pages/course/pages/player" */).then(m => m.default || m)
const _22ac65de = () => import('../pages/course/pages/coursedetail.vue' /* webpackChunkName: "pages/course/pages/coursedetail" */).then(m => m.default || m)
const _12e48f15 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _58fa6591 = () => import('../pages/course/pages/categoryd.vue' /* webpackChunkName: "pages/course/pages/categoryd" */).then(m => m.default || m)
const _f10c3752 = () => import('../pages/profile/pages/personalSet.vue' /* webpackChunkName: "pages/profile/pages/personalSet" */).then(m => m.default || m)
const _811e0f7a = () => import('../pages/course/pages/newlesson.vue' /* webpackChunkName: "pages/course/pages/newlesson" */).then(m => m.default || m)
const _59cdc620 = () => import('../pages/course/pages/categorys.vue' /* webpackChunkName: "pages/course/pages/categorys" */).then(m => m.default || m)
const _44a98140 = () => import('../pages/course/pages/unlogged.vue' /* webpackChunkName: "pages/course/pages/unlogged" */).then(m => m.default || m)
const _5ef35a4d = () => import('../pages/course/pages/search.vue' /* webpackChunkName: "pages/course/pages/search" */).then(m => m.default || m)
const _811831f8 = () => import('../pages/home/pages/tab.vue' /* webpackChunkName: "pages/home/pages/tab" */).then(m => m.default || m)
const _ebec58e2 = () => import('../pages/home/pages/new.vue' /* webpackChunkName: "pages/home/pages/new" */).then(m => m.default || m)
const _a4f89c2e = () => import('../pages/course/pages/classify.vue' /* webpackChunkName: "pages/course/pages/classify" */).then(m => m.default || m)
const _1bf5af37 = () => import('../pages/home/pages/partner.vue' /* webpackChunkName: "pages/home/pages/partner" */).then(m => m.default || m)
const _17e6155c = () => import('../pages/home/pages/famous.vue' /* webpackChunkName: "pages/home/pages/famous" */).then(m => m.default || m)
const _7253b3cf = () => import('../pages/home/pages/info.vue' /* webpackChunkName: "pages/home/pages/info" */).then(m => m.default || m)
const _155a2976 = () => import('../pages/home/pages/lost.vue' /* webpackChunkName: "pages/home/pages/lost" */).then(m => m.default || m)
const _60d1cebf = () => import('../pages/home/pages/forgotPassword.vue' /* webpackChunkName: "pages/home/pages/forgotPassword" */).then(m => m.default || m)
const _7e92713a = () => import('../pages/course/pages/category.vue' /* webpackChunkName: "pages/course/pages/category" */).then(m => m.default || m)
const _5a02ae29 = () => import('../pages/profile/pages/info.vue' /* webpackChunkName: "pages/profile/pages/info" */).then(m => m.default || m)
const _212cdbb4 = () => import('../pages/home/pages/searchNothing.vue' /* webpackChunkName: "pages/home/pages/searchNothing" */).then(m => m.default || m)
const _76d199f3 = () => import('../pages/profile/pages/bindId.vue' /* webpackChunkName: "pages/profile/pages/bindId" */).then(m => m.default || m)
const _73bc21ba = () => import('../pages/home/pages/evaluate.vue' /* webpackChunkName: "pages/home/pages/evaluate" */).then(m => m.default || m)
const _44c98151 = () => import('../pages/home/pages/teacher.vue' /* webpackChunkName: "pages/home/pages/teacher" */).then(m => m.default || m)
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
			path: "/shop/wePay",
			component: _fe022cea,
			name: "shop-wePay"
		},
		{
			path: "/activity/enterpriseCustom",
			component: _46967090,
			name: "activity-enterpriseCustom"
		},
		{
			path: "/shop/test",
			component: _d4e5b3de,
			name: "shop-test"
		},
		{
			path: "/other/aboutUs",
			component: _5da89d92,
			name: "other-aboutUs"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c267f9a,
			name: "shop-checkedCourse"
		},
		{
			path: "/other/hrEntry",
			component: _88218ce2,
			name: "other-hrEntry"
		},
		{
			path: "/shop/shoppingCart",
			component: _e21a07b2,
			name: "shop-shoppingCart"
		},
		{
			path: "/news/detail",
			component: _255b5893,
			name: "news-detail"
		},
		{
			path: "/activity/degree",
			component: _398a265c,
			name: "activity-degree"
		},
		{
			path: "/activity/customized",
			component: _221f3107,
			name: "activity-customized"
		},
		{
			path: "/shop/checkedCourseList",
			component: _2a8e1071,
			name: "shop-checkedCourseList"
		},
		{
			path: "/activity/faceteach",
			component: _21c4caa2,
			name: "activity-faceteach"
		},
		{
			path: "/shop/affirmOrder",
			component: _30d2a07c,
			name: "shop-affirmOrder"
		},
		{
			path: "/news/list",
			component: _230af640,
			name: "news-list"
		},
		{
			path: "/shop/payResult",
			component: _8ffde114,
			name: "shop-payResult"
		},
		{
			path: "/home/pages/classic",
			component: _4cd9d3fe,
			name: "home-pages-classic"
		},
		{
			path: "/course/pages/player",
			component: _06384b06,
			name: "course-pages-player"
		},
		{
			path: "/course/pages/coursedetail",
			component: _22ac65de,
			name: "course-pages-coursedetail"
		},
		{
			path: "/profile/pages/noMsg",
			component: _12e48f15,
			name: "profile-pages-noMsg"
		},
		{
			path: "/course/pages/categoryd",
			component: _58fa6591,
			name: "course-pages-categoryd"
		},
		{
			path: "/profile/pages/personalSet",
			component: _f10c3752,
			name: "profile-pages-personalSet"
		},
		{
			path: "/course/pages/newlesson",
			component: _811e0f7a,
			name: "course-pages-newlesson"
		},
		{
			path: "/course/pages/categorys",
			component: _59cdc620,
			name: "course-pages-categorys"
		},
		{
			path: "/course/pages/unlogged",
			component: _44a98140,
			name: "course-pages-unlogged"
		},
		{
			path: "/course/pages/search",
			component: _5ef35a4d,
			name: "course-pages-search"
		},
		{
			path: "/home/pages/tab",
			component: _811831f8,
			name: "home-pages-tab"
		},
		{
			path: "/home/pages/new",
			component: _ebec58e2,
			name: "home-pages-new"
		},
		{
			path: "/course/pages/classify",
			component: _a4f89c2e,
			name: "course-pages-classify"
		},
		{
			path: "/home/pages/partner",
			component: _1bf5af37,
			name: "home-pages-partner"
		},
		{
			path: "/home/pages/famous",
			component: _17e6155c,
			name: "home-pages-famous"
		},
		{
			path: "/home/pages/info",
			component: _7253b3cf,
			name: "home-pages-info"
		},
		{
			path: "/home/pages/lost",
			component: _155a2976,
			name: "home-pages-lost"
		},
		{
			path: "/home/pages/forgotPassword",
			component: _60d1cebf,
			name: "home-pages-forgotPassword"
		},
		{
			path: "/course/pages/category",
			component: _7e92713a,
			name: "course-pages-category"
		},
		{
			path: "/profile/pages/info",
			component: _5a02ae29,
			name: "profile-pages-info"
		},
		{
			path: "/home/pages/searchNothing",
			component: _212cdbb4,
			name: "home-pages-searchNothing"
		},
		{
			path: "/profile/pages/bindId",
			component: _76d199f3,
			name: "profile-pages-bindId"
		},
		{
			path: "/home/pages/evaluate",
			component: _73bc21ba,
			name: "home-pages-evaluate"
		},
		{
			path: "/home/pages/teacher",
			component: _44c98151,
			name: "home-pages-teacher"
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
