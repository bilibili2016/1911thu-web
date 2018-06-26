import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _90829708 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _0ed9a1fc = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _30bf8cea = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _7c81ec08 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _44c1241b = () => import('../pages/shop/wepay.vue' /* webpackChunkName: "pages/shop/wepay" */).then(m => m.default || m)
const _9a9aedfc = () => import('../pages/other/aboutus.vue' /* webpackChunkName: "pages/other/aboutus" */).then(m => m.default || m)
const _1ec96474 = () => import('../pages/shop/payresult.vue' /* webpackChunkName: "pages/shop/payresult" */).then(m => m.default || m)
const _67cd379c = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _581d1d2c = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _f3df02f6 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _550af80f = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _7d0a683e = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _448a57ba = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _62ebf13f = () => import('../pages/other/hrentry.vue' /* webpackChunkName: "pages/other/hrentry" */).then(m => m.default || m)
const _42902b99 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _bf9db0d2 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _3e2fbf0c = () => import('../pages/shop/affirmorder.vue' /* webpackChunkName: "pages/shop/affirmorder" */).then(m => m.default || m)
const _fa163eae = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _09144683 = () => import('../pages/shop/checkedcourse.vue' /* webpackChunkName: "pages/shop/checkedcourse" */).then(m => m.default || m)
const _e6b8b720 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _735e54eb = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _8a2c227e = () => import('../pages/shop/checkedcourseList.vue' /* webpackChunkName: "pages/shop/checkedcourseList" */).then(m => m.default || m)
const _5d4fd194 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _1b21786d = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _ac2bbf06 = () => import('../pages/profile/pages/companyid.vue' /* webpackChunkName: "pages/profile/pages/companyid" */).then(m => m.default || m)
const _4e9ed79c = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _709089e1 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _508b8be2 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _b33e4884 = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _68742878 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _7b8dbf01 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _610ac929 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _0430aab1 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _5cd3b515 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _1a711bdf = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _8d34261a = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _38ea35b7 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _f4b0f1a2 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _d77b0430 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _90829708,
			name: "home"
		},
		{
			path: "/profile",
			component: _0ed9a1fc,
			name: "profile"
		},
		{
			path: "/other/enterprisecustom",
			component: _30bf8cea,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/category",
			component: _7c81ec08,
			name: "course-category"
		},
		{
			path: "/shop/wepay",
			component: _44c1241b,
			name: "shop-wepay"
		},
		{
			path: "/other/aboutus",
			component: _9a9aedfc,
			name: "other-aboutus"
		},
		{
			path: "/shop/payresult",
			component: _1ec96474,
			name: "shop-payresult"
		},
		{
			path: "/course/search",
			component: _67cd379c,
			name: "course-search"
		},
		{
			path: "/course/classifylist",
			component: _581d1d2c,
			name: "course-classifylist"
		},
		{
			path: "/other/degree",
			component: _f3df02f6,
			name: "other-degree"
		},
		{
			path: "/other/faceteach",
			component: _550af80f,
			name: "other-faceteach"
		},
		{
			path: "/course/newlesson",
			component: _7d0a683e,
			name: "course-newlesson"
		},
		{
			path: "/news/detail",
			component: _448a57ba,
			name: "news-detail"
		},
		{
			path: "/other/hrentry",
			component: _62ebf13f,
			name: "other-hrentry"
		},
		{
			path: "/course/chooselesson",
			component: _42902b99,
			name: "course-chooselesson"
		},
		{
			path: "/shop/shoppingcart",
			component: _bf9db0d2,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmorder",
			component: _3e2fbf0c,
			name: "shop-affirmorder"
		},
		{
			path: "/course/classifycourse",
			component: _fa163eae,
			name: "course-classifycourse"
		},
		{
			path: "/shop/checkedcourse",
			component: _09144683,
			name: "shop-checkedcourse"
		},
		{
			path: "/news/list",
			component: _e6b8b720,
			name: "news-list"
		},
		{
			path: "/course/player",
			component: _735e54eb,
			name: "course-player"
		},
		{
			path: "/shop/checkedcourseList",
			component: _8a2c227e,
			name: "shop-checkedcourseList"
		},
		{
			path: "/course/coursedetail",
			component: _5d4fd194,
			name: "course-coursedetail"
		},
		{
			path: "/home/components/new",
			component: _1b21786d,
			name: "home-components-new"
		},
		{
			path: "/profile/pages/companyid",
			component: _ac2bbf06,
			name: "profile-pages-companyid"
		},
		{
			path: "/home/components/evaluate",
			component: _4e9ed79c,
			name: "home-components-evaluate"
		},
		{
			path: "/profile/components/bindid",
			component: _709089e1,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/tab",
			component: _508b8be2,
			name: "home-components-tab"
		},
		{
			path: "/home/components/famous",
			component: _b33e4884,
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/invitation",
			component: _68742878,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/forgotpassword",
			component: _7b8dbf01,
			name: "home-components-forgotpassword"
		},
		{
			path: "/profile/components/personalset",
			component: _610ac929,
			name: "profile-components-personalset"
		},
		{
			path: "/home/components/info",
			component: _0430aab1,
			name: "home-components-info"
		},
		{
			path: "/home/components/partner",
			component: _5cd3b515,
			name: "home-components-partner"
		},
		{
			path: "/home/components/classic",
			component: _1a711bdf,
			name: "home-components-classic"
		},
		{
			path: "/profile/pages/order",
			component: _8d34261a,
			name: "profile-pages-order"
		},
		{
			path: "/profile/components/info",
			component: _38ea35b7,
			name: "profile-components-info"
		},
		{
			path: "/home/components/teacher",
			component: _f4b0f1a2,
			name: "home-components-teacher"
		},
		{
			path: "/",
			component: _d77b0430,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
