import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _c6620ea6 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _58ef7a9e = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _3b230c8e = () => import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */).then(m => m.default || m)
const _7d04fb9b = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _78796ba0 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _6e6bb87c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _ae4a6df8 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _179a1e96 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _00f1f6f3 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _83308ad2 = () => import('../pages/course/classifylist.vue' /* webpackChunkName: "pages/course/classifylist" */).then(m => m.default || m)
const _a6b5bf80 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _fde46158 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _f2c88a9a = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _4d09fa0c = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _20533ecd = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _4aaa959b = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _6a6cabd8 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _70552ddd = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _37a2b4a1 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _54a1590c = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _81999d3e = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _7e99daca = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _4435a196 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _f4fbdf30 = () => import('../pages/profile/pages/companyid.vue' /* webpackChunkName: "pages/profile/pages/companyid" */).then(m => m.default || m)
const _9253ad66 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _7427a9e8 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _4caf20b6 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _33f635de = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _6739baa6 = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _1fb08a5e = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _632bf939 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _613f771a = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _5fbbbcd9 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _6b65c273 = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _fd27d450 = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _386ba500 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _13ede86c = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _322c2ade = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _148225a2 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _5ea7bada = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _c6620ea6,
			name: "profile"
		},
		{
			path: "/home",
			component: _58ef7a9e,
			name: "home"
		},
		{
			path: "/news/detail",
			component: _3b230c8e,
			name: "news-detail"
		},
		{
			path: "/news/list",
			component: _7d04fb9b,
			name: "news-list"
		},
		{
			path: "/shop/wePay",
			component: _78796ba0,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _6e6bb87c,
			name: "shop-shoppingcart"
		},
		{
			path: "/course/chooselesson",
			component: _ae4a6df8,
			name: "course-chooselesson"
		},
		{
			path: "/course/player",
			component: _179a1e96,
			name: "course-player"
		},
		{
			path: "/course/category",
			component: _00f1f6f3,
			name: "course-category"
		},
		{
			path: "/course/classifylist",
			component: _83308ad2,
			name: "course-classifylist"
		},
		{
			path: "/other/enterprisecustom",
			component: _a6b5bf80,
			name: "other-enterprisecustom"
		},
		{
			path: "/course/classifycourse",
			component: _fde46158,
			name: "course-classifycourse"
		},
		{
			path: "/course/newlesson",
			component: _f2c88a9a,
			name: "course-newlesson"
		},
		{
			path: "/other/faceteach",
			component: _4d09fa0c,
			name: "other-faceteach"
		},
		{
			path: "/other/aboutUs",
			component: _20533ecd,
			name: "other-aboutUs"
		},
		{
			path: "/shop/payResult",
			component: _4aaa959b,
			name: "shop-payResult"
		},
		{
			path: "/shop/checkedCourse",
			component: _6a6cabd8,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/search",
			component: _70552ddd,
			name: "course-search"
		},
		{
			path: "/course/coursedetail",
			component: _37a2b4a1,
			name: "course-coursedetail"
		},
		{
			path: "/other/degree",
			component: _54a1590c,
			name: "other-degree"
		},
		{
			path: "/shop/affirmOrder",
			component: _81999d3e,
			name: "shop-affirmOrder"
		},
		{
			path: "/other/hrEntry",
			component: _7e99daca,
			name: "other-hrEntry"
		},
		{
			path: "/shop/checkedCourseList",
			component: _4435a196,
			name: "shop-checkedCourseList"
		},
		{
			path: "/profile/pages/companyid",
			component: _f4fbdf30,
			name: "profile-pages-companyid"
		},
		{
			path: "/home/components/tab",
			component: _9253ad66,
			name: "home-components-tab"
		},
		{
			path: "/profile/components/bindid",
			component: _7427a9e8,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/forgotpassword",
			component: _4caf20b6,
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/evaluate",
			component: _33f635de,
			name: "home-components-evaluate"
		},
		{
			path: "/home/components/info",
			component: _6739baa6,
			name: "home-components-info"
		},
		{
			path: "/profile/pages/order",
			component: _1fb08a5e,
			name: "profile-pages-order"
		},
		{
			path: "/profile/pages/invitation",
			component: _632bf939,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/teacher",
			component: _613f771a,
			name: "home-components-teacher"
		},
		{
			path: "/profile/pages/courselist",
			component: _5fbbbcd9,
			name: "profile-pages-courselist"
		},
		{
			path: "/home/components/famous",
			component: _6b65c273,
			name: "home-components-famous"
		},
		{
			path: "/home/components/new",
			component: _fd27d450,
			name: "home-components-new"
		},
		{
			path: "/home/components/partner",
			component: _386ba500,
			name: "home-components-partner"
		},
		{
			path: "/home/components/classic",
			component: _13ede86c,
			name: "home-components-classic"
		},
		{
			path: "/profile/components/personalset",
			component: _322c2ade,
			name: "profile-components-personalset"
		},
		{
			path: "/profile/components/info",
			component: _148225a2,
			name: "profile-components-info"
		},
		{
			path: "/",
			component: _5ea7bada,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
