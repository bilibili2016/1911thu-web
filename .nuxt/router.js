import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _2ae94d91 = () => import('../pages/teacher/list.vue' /* webpackChunkName: "pages/teacher/list" */).then(m => m.default || m)
const _7b3ab20e = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _060f7468 = () => import('../pages/home/info.vue' /* webpackChunkName: "pages/home/info" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _1b4f55c6 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _a5b93886 = () => import('../pages/other/policyProgram.vue' /* webpackChunkName: "pages/other/policyProgram" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _c7ca8cde = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _42048cf0 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _6bc8cfba = () => import('../pages/other/partypolicy.vue' /* webpackChunkName: "pages/other/partypolicy" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _7a83b638 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _460ac3bc = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _25985183 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _29151597 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _71e6628a = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _1e9b7b5f = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _616435f0 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _77568aa6 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _a897d896 = () => import('../pages/home/famous.vue' /* webpackChunkName: "pages/home/famous" */).then(m => m.default || m)
const _208f91d1 = () => import('../pages/news/components/Info.vue' /* webpackChunkName: "pages/news/components/Info" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _694f4066 = () => import('../pages/teacher/components/Card.vue' /* webpackChunkName: "pages/teacher/components/Card" */).then(m => m.default || m)
const _2610db2b = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _662965c1 = () => import('../pages/news/components/List.vue' /* webpackChunkName: "pages/news/components/List" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _68016c67 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _9dce4d96 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _b7aa79fe = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _fb4b9ef8 = () => import('../pages/course/components/Evaluate.vue' /* webpackChunkName: "pages/course/components/Evaluate" */).then(m => m.default || m)
const _1af7f08d = () => import('../pages/profile/components/card.vue' /* webpackChunkName: "pages/profile/components/card" */).then(m => m.default || m)
const _7bb0899d = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _16a5c7d3 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _a2b8bb56 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _b622a1b8 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _6baaaf1b = () => import('../pages/profile/components/list.vue' /* webpackChunkName: "pages/profile/components/list" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _093de9fb = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _39e3a598 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _ef9bae02 = () => import('../pages/course/pages/_courselist.vue' /* webpackChunkName: "pages/course/pages/_courselist" */).then(m => m.default || m)
const _dc9d306c = () => import('../pages/teacher/_Info.vue' /* webpackChunkName: "pages/teacher/_Info" */).then(m => m.default || m)
const _6f95689a = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
const _41637b62 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _44f44288,
			name: "home"
		},
		{
			path: "/profile",
			component: _b85f5514,
			name: "profile"
		},
		{
			path: "/teacher/list",
			component: _2ae94d91,
			name: "teacher-list"
		},
		{
			path: "/other/Institutional",
			component: _7b3ab20e,
			name: "other-Institutional"
		},
		{
			path: "/home/info",
			component: _060f7468,
			name: "home-info"
		},
		{
			path: "/course/coursedetail",
			component: _7ff396aa,
			name: "course-coursedetail"
		},
		{
			path: "/project/projectevaluate",
			component: _1b4f55c6,
			name: "project-projectevaluate"
		},
		{
			path: "/shop/payResult",
			component: _23d4d1f2,
			name: "shop-payResult"
		},
		{
			path: "/shop/shoppingcart",
			component: _fa6417ea,
			name: "shop-shoppingcart"
		},
		{
			path: "/other/policyProgram",
			component: _a5b93886,
			name: "other-policyProgram"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/shop/wePay",
			component: _352f4a07,
			name: "shop-wePay"
		},
		{
			path: "/other/degree",
			component: _c7ca8cde,
			name: "other-degree"
		},
		{
			path: "/project/projectcourse",
			component: _42048cf0,
			name: "project-projectcourse"
		},
		{
			path: "/other/partypolicy",
			component: _6bc8cfba,
			name: "other-partypolicy"
		},
		{
			path: "/project/projectPlayer",
			component: _3e447d6e,
			name: "project-projectPlayer"
		},
		{
			path: "/auth/forgotpassword",
			component: _6e9c788f,
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/affirmOrder",
			component: _12809810,
			name: "shop-affirmOrder"
		},
		{
			path: "/news/list",
			component: _7a83b638,
			name: "news-list"
		},
		{
			path: "/other/homeUs",
			component: _460ac3bc,
			name: "other-homeUs"
		},
		{
			path: "/other/faceteach",
			component: _25985183,
			name: "other-faceteach"
		},
		{
			path: "/other/enterprisecustom",
			component: _29151597,
			name: "other-enterprisecustom"
		},
		{
			path: "/project/commonproblems",
			component: _71e6628a,
			name: "project-commonproblems"
		},
		{
			path: "/course/player",
			component: _1e9b7b5f,
			name: "course-player"
		},
		{
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/other/userProtocol",
			component: _616435f0,
			name: "other-userProtocol"
		},
		{
			path: "/course/search",
			component: _77568aa6,
			name: "course-search"
		},
		{
			path: "/home/famous",
			component: _a897d896,
			name: "home-famous"
		},
		{
			path: "/news/components/Info",
			component: _208f91d1,
			name: "news-components-Info"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/teacher/components/Card",
			component: _694f4066,
			name: "teacher-components-Card"
		},
		{
			path: "/profile/components/info",
			component: _2610db2b,
			name: "profile-components-info"
		},
		{
			path: "/profile/pages/courselist",
			component: _fff88f20,
			name: "profile-pages-courselist"
		},
		{
			path: "/news/components/List",
			component: _662965c1,
			name: "news-components-List"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/order",
			component: _68016c67,
			name: "profile-pages-order"
		},
		{
			path: "/profile/components/personalset",
			component: _9dce4d96,
			name: "profile-components-personalset"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _b7aa79fe,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/course/components/Evaluate",
			component: _fb4b9ef8,
			name: "course-components-Evaluate"
		},
		{
			path: "/profile/components/card",
			component: _1af7f08d,
			name: "profile-components-card"
		},
		{
			path: "/project/components/shortList",
			component: _7bb0899d,
			name: "project-components-shortList"
		},
		{
			path: "/profile/components/conversion",
			component: _16a5c7d3,
			name: "profile-components-conversion"
		},
		{
			path: "/profile/components/bindid",
			component: _a2b8bb56,
			name: "profile-components-bindid"
		},
		{
			path: "/profile/pages/ticketRules",
			component: _b622a1b8,
			name: "profile-pages-ticketRules"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/profile/components/list",
			component: _6baaaf1b,
			name: "profile-components-list"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _093de9fb,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/profile/pages/invitation",
			component: _f9181660,
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/components/binding",
			component: _39e3a598,
			name: "profile-components-binding"
		},
		{
			path: "/course/pages/:courselist?",
			component: _ef9bae02,
			name: "course-pages-courselist"
		},
		{
			path: "/teacher/:Info?",
			component: _dc9d306c,
			name: "teacher-Info"
		},
		{
			path: "/news/:detail?",
			component: _6f95689a,
			name: "news-detail"
		},
		{
			path: "/course/:category?",
			component: _41637b62,
			name: "course-category"
		},
		{
			path: "/",
			component: _84114f48,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
