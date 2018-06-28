import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _1c9f70a4 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _55c19bbe = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _05fb626c = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _05a49d98 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _5f5c273e = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _72ad7578 = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _2188521d = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _0a0aa7ee = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _d3a41600 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _27089705 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _7ca05409 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _c231d592 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _0272e6e4 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _e11bf060 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _222df772 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _6e6ae116 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _1f979981 = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _d7cca222 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _18060837 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _a144022c = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _07172b5c = () => import('../pages/profile/pages/companyid.vue' /* webpackChunkName: "pages/profile/pages/companyid" */).then(m => m.default || m)
const _6cfb65b4 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _49afb276 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _842ca8e8 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _4d5dc867 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _e91700e8 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _b9329498 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _fe3f2d70 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _3ac8167c = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _4f9c5df8 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _2d2b8349 = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _2c05b8fc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _69f81487,
			name: "home"
		},
		{
			path: "/profile",
			component: _1b62cf17,
			name: "profile"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c9f70a4,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/classifycourse",
			component: _55c19bbe,
			name: "course-classifycourse"
		},
		{
			path: "/shop/wePay",
			component: _5a331c06,
			name: "shop-wePay"
		},
		{
			path: "/shop/affirmOrder",
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/checkedCourseList",
			component: _05fb626c,
			name: "shop-checkedCourseList"
		},
		{
			path: "/other/hrEntry",
			component: _05a49d98,
			name: "other-hrEntry"
		},
		{
			path: "/other/homeUs",
			component: _5f5c273e,
			name: "other-homeUs"
		},
		{
			path: "/news/detail",
			component: _72ad7578,
			name: "news-detail"
		},
		{
			path: "/shop/paypublic",
			component: _894cd6c6,
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
			component: _c2dce71e,
			name: "shop-payResult"
		},
		{
			path: "/course/coursedetail",
			component: _ce5ad8ea,
			name: "course-coursedetail"
		},
		{
			path: "/activity/faceteach",
			component: _2188521d,
			name: "activity-faceteach"
		},
		{
			path: "/course/chooselesson",
			component: _0a0aa7ee,
			name: "course-chooselesson"
		},
		{
			path: "/course/player",
			component: _d3a41600,
			name: "course-player"
		},
		{
			path: "/news/list",
			component: _27089705,
			name: "news-list"
		},
		{
			path: "/course/newlesson",
			component: _7ca05409,
			name: "course-newlesson"
		},
		{
			path: "/other/aboutUs",
			component: _c231d592,
			name: "other-aboutUs"
		},
		{
			path: "/other/faceteach",
			component: _0272e6e4,
			name: "other-faceteach"
		},
		{
			path: "/other/degree",
			component: _e11bf060,
			name: "other-degree"
		},
		{
			path: "/shop/shoppingcart",
			component: _d94e95a8,
			name: "shop-shoppingcart"
		},
		{
			path: "/course/category",
			component: _29e9dadd,
			name: "course-category"
		},
		{
			path: "/course/search",
			component: _222df772,
			name: "course-search"
		},
		{
			path: "/other/enterprisecustom",
			component: _6e6ae116,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/classifylist",
			component: _1f979981,
			name: "course-classifylist"
		},
		{
			path: "/other/Institutional",
			component: _d7cca222,
			name: "other-Institutional"
		},
		{
			path: "/home/components/tab",
			component: _18060837,
			name: "home-components-tab"
		},
		{
			path: "/home/components/partner",
			component: _a144022c,
			name: "home-components-partner"
		},
		{
			path: "/profile/pages/companyid",
			component: _07172b5c,
			name: "profile-pages-companyid"
		},
		{
			path: "/home/components/classic",
			component: _6cfb65b4,
			name: "home-components-classic"
		},
		{
			path: "/profile/components/bindid",
			component: _49afb276,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/forgotpassword",
			component: _842ca8e8,
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/evaluate",
			component: _4d5dc867,
			name: "home-components-evaluate"
		},
		{
			path: "/profile/pages/invitation",
			component: _6af646e2,
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/components/info",
			component: _e91700e8,
			name: "profile-components-info"
		},
		{
			path: "/profile/components/personalset",
			component: _b9329498,
			name: "profile-components-personalset"
		},
		{
			path: "/profile/pages/order",
			component: _fe3f2d70,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/new",
			component: _3ac8167c,
			name: "home-components-new"
		},
		{
			path: "/home/components/teacher",
			component: _4f9c5df8,
			name: "home-components-teacher"
		},
		{
			path: "/home/components/famous",
			component: _2d2b8349,
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/courselist",
			component: _71d6bfa2,
			name: "profile-pages-courselist"
		},
		{
			path: "/home/components/info",
			component: _2c05b8fc,
			name: "home-components-info"
		},
		{
			path: "/",
			component: _76ca02fd,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
