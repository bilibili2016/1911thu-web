import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1e9b7b5f = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _0ea359c6 = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _7b3ab20e = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _6b10753c = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _f4c990da = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _3a5e32bc = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _a5b93886 = () => import('../pages/other/policyProgram.vue' /* webpackChunkName: "pages/other/policyProgram" */).then(m => m.default || m)
const _6bc8cfba = () => import('../pages/other/partypolicy.vue' /* webpackChunkName: "pages/other/partypolicy" */).then(m => m.default || m)
const _1da8a9e6 = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _27549b96 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _616435f0 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _29151597 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _8412633e = () => import('../pages/other/ie.vue' /* webpackChunkName: "pages/other/ie" */).then(m => m.default || m)
const _71e6628a = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _c7ca8cde = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _c17d262e = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _83af856c = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _42048cf0 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _1e3a36a2 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _77568aa6 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _25985183 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _1b4f55c6 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _a3f4b554 = () => import('../pages/course/media.vue' /* webpackChunkName: "pages/course/media" */).then(m => m.default || m)
const _20baef1e = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _7eb4d226 = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _7a83b638 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _460ac3bc = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _093de9fb = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _3054906c = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _49fa5a89 = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _16a5c7d3 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _68016c67 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _b7aa79fe = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _39e3a598 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _9dce4d96 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _8b415a5e = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _a2b8bb56 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _68c861e6 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _0797c153 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _290519bd = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _72ce2ca3 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _7a8e870a = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _662965c1 = () => import('../pages/news/components/List.vue' /* webpackChunkName: "pages/news/components/List" */).then(m => m.default || m)
const _01b1e954 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _064ce0a8 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _50478f4c = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _2d2b77bc = () => import('../pages/home/components/newcourse.vue' /* webpackChunkName: "pages/home/components/newcourse" */).then(m => m.default || m)
const _2610db2b = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _6c86103e = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _41637b62 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _6f95689a = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
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
			path: "/profile",
			component: _b85f5514,
			name: "profile"
		},
		{
			path: "/home",
			component: _44f44288,
			name: "home"
		},
		{
			path: "/course/player",
			component: _1e9b7b5f,
			name: "course-player"
		},
		{
			path: "/course/classifycourse",
			component: _0ea359c6,
			name: "course-classifycourse"
		},
		{
			path: "/shop/wePay",
			component: _352f4a07,
			name: "shop-wePay"
		},
		{
			path: "/other/Institutional",
			component: _7b3ab20e,
			name: "other-Institutional"
		},
		{
			path: "/shop/payResult",
			component: _23d4d1f2,
			name: "shop-payResult"
		},
		{
			path: "/famous/list",
			component: _6b10753c,
			name: "famous-list"
		},
		{
			path: "/other/hrEntry",
			component: _f4c990da,
			name: "other-hrEntry"
		},
		{
			path: "/course/freelesson",
			component: _3a5e32bc,
			name: "course-freelesson"
		},
		{
			path: "/other/policyProgram",
			component: _a5b93886,
			name: "other-policyProgram"
		},
		{
			path: "/other/partypolicy",
			component: _6bc8cfba,
			name: "other-partypolicy"
		},
		{
			path: "/course/chooselesson",
			component: _1da8a9e6,
			name: "course-chooselesson"
		},
		{
			path: "/other/aboutUs",
			component: _27549b96,
			name: "other-aboutUs"
		},
		{
			path: "/other/userProtocol",
			component: _616435f0,
			name: "other-userProtocol"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/other/enterprisecustom",
			component: _29151597,
			name: "other-enterprisecustom"
		},
		{
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/other/ie",
			component: _8412633e,
			name: "other-ie"
		},
		{
			path: "/project/commonproblems",
			component: _71e6628a,
			name: "project-commonproblems"
		},
		{
			path: "/course/coursedetail",
			component: _7ff396aa,
			name: "course-coursedetail"
		},
		{
			path: "/other/degree",
			component: _c7ca8cde,
			name: "other-degree"
		},
		{
			path: "/course/qualitylesson",
			component: _c17d262e,
			name: "course-qualitylesson"
		},
		{
			path: "/course/newlesson",
			component: _83af856c,
			name: "course-newlesson"
		},
		{
			path: "/project/projectcourse",
			component: _42048cf0,
			name: "project-projectcourse"
		},
		{
			path: "/shop/affirmOrder",
			component: _12809810,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/checkedCourse",
			component: _1e3a36a2,
			name: "shop-checkedCourse"
		},
		{
			path: "/course/search",
			component: _77568aa6,
			name: "course-search"
		},
		{
			path: "/other/faceteach",
			component: _25985183,
			name: "other-faceteach"
		},
		{
			path: "/shop/shoppingcart",
			component: _fa6417ea,
			name: "shop-shoppingcart"
		},
		{
			path: "/project/projectevaluate",
			component: _1b4f55c6,
			name: "project-projectevaluate"
		},
		{
			path: "/course/media",
			component: _a3f4b554,
			name: "course-media"
		},
		{
			path: "/activity/faceteach",
			component: _20baef1e,
			name: "activity-faceteach"
		},
		{
			path: "/shop/checkedCourseList",
			component: _7eb4d226,
			name: "shop-checkedCourseList"
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
			path: "/profile/pages/ticketOrder",
			component: _093de9fb,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/home/components/famous",
			component: _3054906c,
			name: "home-components-famous"
		},
		{
			path: "/profile/pages/invitation",
			component: _f9181660,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/partner",
			component: _49fa5a89,
			name: "home-components-partner"
		},
		{
			path: "/profile/components/conversion",
			component: _16a5c7d3,
			name: "profile-components-conversion"
		},
		{
			path: "/profile/pages/order",
			component: _68016c67,
			name: "profile-pages-order"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _b7aa79fe,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/profile/components/binding",
			component: _39e3a598,
			name: "profile-components-binding"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/profile/components/personalset",
			component: _9dce4d96,
			name: "profile-components-personalset"
		},
		{
			path: "/home/components/teacherResource",
			component: _8b415a5e,
			name: "home-components-teacherResource"
		},
		{
			path: "/profile/pages/courselist",
			component: _fff88f20,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/bindid",
			component: _a2b8bb56,
			name: "profile-components-bindid"
		},
		{
			path: "/home/components/forgotpassword",
			component: _68c861e6,
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/classic",
			component: _0797c153,
			name: "home-components-classic"
		},
		{
			path: "/home/components/info",
			component: _290519bd,
			name: "home-components-info"
		},
		{
			path: "/home/components/teacher",
			component: _72ce2ca3,
			name: "home-components-teacher"
		},
		{
			path: "/home/components/free",
			component: _7a8e870a,
			name: "home-components-free"
		},
		{
			path: "/news/components/List",
			component: _662965c1,
			name: "news-components-List"
		},
		{
			path: "/home/components/tab",
			component: _01b1e954,
			name: "home-components-tab"
		},
		{
			path: "/home/components/evaluate",
			component: _064ce0a8,
			name: "home-components-evaluate"
		},
		{
			path: "/home/components/project",
			component: _50478f4c,
			name: "home-components-project"
		},
		{
			path: "/home/components/newcourse",
			component: _2d2b77bc,
			name: "home-components-newcourse"
		},
		{
			path: "/profile/components/info",
			component: _2610db2b,
			name: "profile-components-info"
		},
		{
			path: "/home/components/new",
			component: _6c86103e,
			name: "home-components-new"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/course/:category?",
			component: _41637b62,
			name: "course-category"
		},
		{
			path: "/news/:detail?",
			component: _6f95689a,
			name: "news-detail"
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
