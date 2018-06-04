import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4bb7511c = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _de783be8 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _e21a07b2 = () => import('../pages/shop/shoppingCart.vue' /* webpackChunkName: "pages/shop/shoppingCart" */).then(m => m.default || m)
const _2a8e1071 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _21c4caa2 = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _230af640 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _0e0123e4 = () => import('../pages/other/develop.vue' /* webpackChunkName: "pages/other/develop" */).then(m => m.default || m)
const _255b5893 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _1c267f9a = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _1bf5af37 = () => import('../pages/home/pages/partner.vue' /* webpackChunkName: "pages/home/pages/partner" */).then(m => m.default || m)
const _7e92713a = () => import('../pages/course/pages/category.vue' /* webpackChunkName: "pages/course/pages/category" */).then(m => m.default || m)
const _f10c3752 = () => import('../pages/profile/pages/personalSet.vue' /* webpackChunkName: "pages/profile/pages/personalSet" */).then(m => m.default || m)
const _811831f8 = () => import('../pages/home/pages/tab.vue' /* webpackChunkName: "pages/home/pages/tab" */).then(m => m.default || m)
const _17e6155c = () => import('../pages/home/pages/famous.vue' /* webpackChunkName: "pages/home/pages/famous" */).then(m => m.default || m)
const _22ac65de = () => import('../pages/course/pages/coursedetail.vue' /* webpackChunkName: "pages/course/pages/coursedetail" */).then(m => m.default || m)
const _4cd9d3fe = () => import('../pages/home/pages/classic.vue' /* webpackChunkName: "pages/home/pages/classic" */).then(m => m.default || m)
const _241277fa = () => import('../pages/home/pages/aboutUs.vue' /* webpackChunkName: "pages/home/pages/aboutUs" */).then(m => m.default || m)
const _5a02ae29 = () => import('../pages/profile/pages/info.vue' /* webpackChunkName: "pages/profile/pages/info" */).then(m => m.default || m)
const _06384b06 = () => import('../pages/course/pages/player.vue' /* webpackChunkName: "pages/course/pages/player" */).then(m => m.default || m)
const _73bc21ba = () => import('../pages/home/pages/evaluate.vue' /* webpackChunkName: "pages/home/pages/evaluate" */).then(m => m.default || m)
const _44c98151 = () => import('../pages/home/pages/teacher.vue' /* webpackChunkName: "pages/home/pages/teacher" */).then(m => m.default || m)
const _811e0f7a = () => import('../pages/course/pages/newlesson.vue' /* webpackChunkName: "pages/course/pages/newlesson" */).then(m => m.default || m)
const _7253b3cf = () => import('../pages/home/pages/info.vue' /* webpackChunkName: "pages/home/pages/info" */).then(m => m.default || m)
const _a4f89c2e = () => import('../pages/course/pages/classify.vue' /* webpackChunkName: "pages/course/pages/classify" */).then(m => m.default || m)
const _5ef35a4d = () => import('../pages/course/pages/search.vue' /* webpackChunkName: "pages/course/pages/search" */).then(m => m.default || m)
const _ebec58e2 = () => import('../pages/home/pages/new.vue' /* webpackChunkName: "pages/home/pages/new" */).then(m => m.default || m)
const _76d199f3 = () => import('../pages/profile/pages/bindId.vue' /* webpackChunkName: "pages/profile/pages/bindId" */).then(m => m.default || m)
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
			path: "/shop/shoppingCart",
			component: _e21a07b2,
			name: "shop-shoppingCart"
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
			path: "/news/list",
			component: _230af640,
			name: "news-list"
		},
		{
			path: "/other/develop",
			component: _0e0123e4,
			name: "other-develop"
		},
		{
			path: "/news/detail",
			component: _255b5893,
			name: "news-detail"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c267f9a,
			name: "shop-checkedCourse"
		},
		{
			path: "/home/pages/partner",
			component: _1bf5af37,
			name: "home-pages-partner"
		},
		{
			path: "/course/pages/category",
			component: _7e92713a,
			name: "course-pages-category"
		},
		{
			path: "/profile/pages/personalSet",
			component: _f10c3752,
			name: "profile-pages-personalSet"
		},
		{
			path: "/home/pages/tab",
			component: _811831f8,
			name: "home-pages-tab"
		},
		{
			path: "/home/pages/famous",
			component: _17e6155c,
			name: "home-pages-famous"
		},
		{
			path: "/course/pages/coursedetail",
			component: _22ac65de,
			name: "course-pages-coursedetail"
		},
		{
			path: "/home/pages/classic",
			component: _4cd9d3fe,
			name: "home-pages-classic"
		},
		{
			path: "/home/pages/aboutUs",
			component: _241277fa,
			name: "home-pages-aboutUs"
		},
		{
			path: "/profile/pages/info",
			component: _5a02ae29,
			name: "profile-pages-info"
		},
		{
			path: "/course/pages/player",
			component: _06384b06,
			name: "course-pages-player"
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
			path: "/course/pages/newlesson",
			component: _811e0f7a,
			name: "course-pages-newlesson"
		},
		{
			path: "/home/pages/info",
			component: _7253b3cf,
			name: "home-pages-info"
		},
		{
			path: "/course/pages/classify",
			component: _a4f89c2e,
			name: "course-pages-classify"
		},
		{
			path: "/course/pages/search",
			component: _5ef35a4d,
			name: "course-pages-search"
		},
		{
			path: "/home/pages/new",
			component: _ebec58e2,
			name: "home-pages-new"
		},
		{
			path: "/profile/pages/bindId",
			component: _76d199f3,
			name: "profile-pages-bindId"
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
