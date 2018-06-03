import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _53896f97 = () => import('../pages/text.vue' /* webpackChunkName: "pages/text" */).then(m => m.default || m)
const _4e4d7b32 = () => import('../pages/information.vue' /* webpackChunkName: "pages/information" */).then(m => m.default || m)
const _4bb7511c = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _d695f470 = () => import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */).then(m => m.default || m)
const _8e1272a8 = () => import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */).then(m => m.default || m)
const _255b5893 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _2a14b9e6 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _d4e5b3de = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _1f25cf8a = () => import('../pages/shop/categoryList.vue' /* webpackChunkName: "pages/shop/categoryList" */).then(m => m.default || m)
const _f8857498 = () => import('../pages/home/category.vue' /* webpackChunkName: "pages/home/category" */).then(m => m.default || m)
const _230af640 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _337738de = () => import('../pages/home/search.vue' /* webpackChunkName: "pages/home/search" */).then(m => m.default || m)
const _dbaa8a42 = () => import('../pages/home/search/list.vue' /* webpackChunkName: "pages/home/search/list" */).then(m => m.default || m)
const _e21a07b2 = () => import('../pages/shop/shoppingCart.vue' /* webpackChunkName: "pages/shop/shoppingCart" */).then(m => m.default || m)
const _33eac2b0 = () => import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */).then(m => m.default || m)
const _4c9840cd = () => import('../pages/auth/resetPassword.vue' /* webpackChunkName: "pages/auth/resetPassword" */).then(m => m.default || m)
const _17e6155c = () => import('../pages/home/pages/famous.vue' /* webpackChunkName: "pages/home/pages/famous" */).then(m => m.default || m)
const _2fa28354 = () => import('../pages/profile/pages/course.vue' /* webpackChunkName: "pages/profile/pages/course" */).then(m => m.default || m)
const _5a02ae29 = () => import('../pages/profile/pages/info.vue' /* webpackChunkName: "pages/profile/pages/info" */).then(m => m.default || m)
const _ebec58e2 = () => import('../pages/home/pages/new.vue' /* webpackChunkName: "pages/home/pages/new" */).then(m => m.default || m)
const _3d48a098 = () => import('../pages/course/pages/palydetail.vue' /* webpackChunkName: "pages/course/pages/palydetail" */).then(m => m.default || m)
const _1df38c25 = () => import('../pages/profile/pages/setting.vue' /* webpackChunkName: "pages/profile/pages/setting" */).then(m => m.default || m)
const _7253b3cf = () => import('../pages/home/pages/info.vue' /* webpackChunkName: "pages/home/pages/info" */).then(m => m.default || m)
const _73bc21ba = () => import('../pages/home/pages/evaluate.vue' /* webpackChunkName: "pages/home/pages/evaluate" */).then(m => m.default || m)
const _326cbdda = () => import('../pages/profile/pages/home.vue' /* webpackChunkName: "pages/profile/pages/home" */).then(m => m.default || m)
const _0fd99544 = () => import('../pages/course/pages/home.vue' /* webpackChunkName: "pages/course/pages/home" */).then(m => m.default || m)
const _4cd9d3fe = () => import('../pages/home/pages/classic.vue' /* webpackChunkName: "pages/home/pages/classic" */).then(m => m.default || m)
const _811831f8 = () => import('../pages/home/pages/tab.vue' /* webpackChunkName: "pages/home/pages/tab" */).then(m => m.default || m)
const _76d199f3 = () => import('../pages/profile/pages/bindId.vue' /* webpackChunkName: "pages/profile/pages/bindId" */).then(m => m.default || m)
const _1bf5af37 = () => import('../pages/home/pages/partner.vue' /* webpackChunkName: "pages/home/pages/partner" */).then(m => m.default || m)
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
			path: "/text",
			component: _53896f97,
			name: "text"
		},
		{
			path: "/information",
			component: _4e4d7b32,
			name: "information"
		},
		{
			path: "/profile",
			component: _4bb7511c,
			name: "profile"
		},
		{
			path: "/course",
			component: _d695f470,
			name: "course"
		},
		{
			path: "/auth/login",
			component: _8e1272a8,
			name: "auth-login"
		},
		{
			path: "/news/detail",
			component: _255b5893,
			name: "news-detail"
		},
		{
			path: "/auth/wechatLogin",
			component: _2a14b9e6,
			name: "auth-wechatLogin"
		},
		{
			path: "/shop/test",
			component: _d4e5b3de,
			name: "shop-test"
		},
		{
			path: "/shop/categoryList",
			component: _1f25cf8a,
			name: "shop-categoryList"
		},
		{
			path: "/home/category",
			component: _f8857498,
			name: "home-category"
		},
		{
			path: "/news/list",
			component: _230af640,
			name: "news-list"
		},
		{
			path: "/home/search",
			component: _337738de,
			name: "home-search",
			children: [
				{
					path: "list",
					component: _dbaa8a42,
					name: "home-search-list"
				}
			]
		},
		{
			path: "/shop/shoppingCart",
			component: _e21a07b2,
			name: "shop-shoppingCart"
		},
		{
			path: "/auth/register",
			component: _33eac2b0,
			name: "auth-register"
		},
		{
			path: "/auth/resetPassword",
			component: _4c9840cd,
			name: "auth-resetPassword"
		},
		{
			path: "/home/pages/famous",
			component: _17e6155c,
			name: "home-pages-famous"
		},
		{
			path: "/profile/pages/course",
			component: _2fa28354,
			name: "profile-pages-course"
		},
		{
			path: "/profile/pages/info",
			component: _5a02ae29,
			name: "profile-pages-info"
		},
		{
			path: "/home/pages/new",
			component: _ebec58e2,
			name: "home-pages-new"
		},
		{
			path: "/course/pages/palydetail",
			component: _3d48a098,
			name: "course-pages-palydetail"
		},
		{
			path: "/profile/pages/setting",
			component: _1df38c25,
			name: "profile-pages-setting"
		},
		{
			path: "/home/pages/info",
			component: _7253b3cf,
			name: "home-pages-info"
		},
		{
			path: "/home/pages/evaluate",
			component: _73bc21ba,
			name: "home-pages-evaluate"
		},
		{
			path: "/profile/pages/home",
			component: _326cbdda,
			name: "profile-pages-home"
		},
		{
			path: "/course/pages/home",
			component: _0fd99544,
			name: "course-pages-home"
		},
		{
			path: "/home/pages/classic",
			component: _4cd9d3fe,
			name: "home-pages-classic"
		},
		{
			path: "/home/pages/tab",
			component: _811831f8,
			name: "home-pages-tab"
		},
		{
			path: "/profile/pages/bindId",
			component: _76d199f3,
			name: "profile-pages-bindId"
		},
		{
			path: "/home/pages/partner",
			component: _1bf5af37,
			name: "home-pages-partner"
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
