import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _bd4618d6 = () => import('../pages/course/media.vue' /* webpackChunkName: "pages/course/media" */).then(m => m.default || m)
const _d7cca222 = () => import('../pages/other/Institutional.vue' /* webpackChunkName: "pages/other/Institutional" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _6d15d7c0 = () => import('../pages/other/ie.vue' /* webpackChunkName: "pages/other/ie" */).then(m => m.default || m)
const _fe9a0bb2 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _1948b07a = () => import('../pages/course/freelesson.vue' /* webpackChunkName: "pages/course/freelesson" */).then(m => m.default || m)
const _05a49d98 = () => import('../pages/other/hrEntry.vue' /* webpackChunkName: "pages/other/hrEntry" */).then(m => m.default || m)
const _0a0aa7ee = () => import('../pages/course/chooselesson.vue' /* webpackChunkName: "pages/course/chooselesson" */).then(m => m.default || m)
const _0272e6e4 = () => import('../pages/other/faceteach.vue' /* webpackChunkName: "pages/other/faceteach" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _e11bf060 = () => import('../pages/other/degree.vue' /* webpackChunkName: "pages/other/degree" */).then(m => m.default || m)
const _c231d592 = () => import('../pages/other/aboutUs.vue' /* webpackChunkName: "pages/other/aboutUs" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _05fb626c = () => import('../pages/shop/checkedCourseList.vue' /* webpackChunkName: "pages/shop/checkedCourseList" */).then(m => m.default || m)
const _0c629a3a = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _27089705 = () => import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */).then(m => m.default || m)
const _222df772 = () => import('../pages/course/search.vue' /* webpackChunkName: "pages/course/search" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _5fc96ff2 = () => import('../pages/other/userProtocol.vue' /* webpackChunkName: "pages/other/userProtocol" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _bb7be7b0 = () => import('../pages/course/qualitylesson.vue' /* webpackChunkName: "pages/course/qualitylesson" */).then(m => m.default || m)
const _32f239c6 = () => import('../pages/famous/list.vue' /* webpackChunkName: "pages/famous/list" */).then(m => m.default || m)
const _d3a41600 = () => import('../pages/course/player.vue' /* webpackChunkName: "pages/course/player" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _5f5c273e = () => import('../pages/other/homeUs.vue' /* webpackChunkName: "pages/other/homeUs" */).then(m => m.default || m)
const _73fb3ec4 = () => import('../pages/other/policyProgram.vue' /* webpackChunkName: "pages/other/policyProgram" */).then(m => m.default || m)
const _7ca05409 = () => import('../pages/course/newlesson.vue' /* webpackChunkName: "pages/course/newlesson" */).then(m => m.default || m)
const _2188521d = () => import('../pages/activity/faceteach.vue' /* webpackChunkName: "pages/activity/faceteach" */).then(m => m.default || m)
const _63c98f94 = () => import('../pages/shop/test.vue' /* webpackChunkName: "pages/shop/test" */).then(m => m.default || m)
const _3c110229 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _1c9f70a4 = () => import('../pages/shop/checkedCourse.vue' /* webpackChunkName: "pages/shop/checkedCourse" */).then(m => m.default || m)
const _6e6ae116 = () => import('../pages/other/enterprisecustom.vue' /* webpackChunkName: "pages/other/enterprisecustom" */).then(m => m.default || m)
const _f2638ae6 = () => import('../pages/project/partypolicy.vue' /* webpackChunkName: "pages/project/partypolicy" */).then(m => m.default || m)
const _55c19bbe = () => import('../pages/course/classifycourse.vue' /* webpackChunkName: "pages/course/classifycourse" */).then(m => m.default || m)
const _18060837 = () => import('../pages/home/components/tab.vue' /* webpackChunkName: "pages/home/components/tab" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _842ca8e8 = () => import('../pages/home/components/forgotpassword.vue' /* webpackChunkName: "pages/home/components/forgotpassword" */).then(m => m.default || m)
const _a144022c = () => import('../pages/home/components/partner.vue' /* webpackChunkName: "pages/home/components/partner" */).then(m => m.default || m)
const _11cd0632 = () => import('../pages/home/components/teacherResource.vue' /* webpackChunkName: "pages/home/components/teacherResource" */).then(m => m.default || m)
const _b76c0bc8 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _4f9c5df8 = () => import('../pages/home/components/teacher.vue' /* webpackChunkName: "pages/home/components/teacher" */).then(m => m.default || m)
const _49afb276 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _2d2b8349 = () => import('../pages/home/components/famous.vue' /* webpackChunkName: "pages/home/components/famous" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _748d488c = () => import('../pages/home/components/free.vue' /* webpackChunkName: "pages/home/components/free" */).then(m => m.default || m)
const _fe3f2d70 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _3d3fdcbb = () => import('../pages/home/components/project.vue' /* webpackChunkName: "pages/home/components/project" */).then(m => m.default || m)
const _b9329498 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _00599997 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _e91700e8 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _3ac8167c = () => import('../pages/home/components/new.vue' /* webpackChunkName: "pages/home/components/new" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6cfb65b4 = () => import('../pages/home/components/classic.vue' /* webpackChunkName: "pages/home/components/classic" */).then(m => m.default || m)
const _2efadf74 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _6f90f046 = () => import('../pages/home/components/newcourse.vue' /* webpackChunkName: "pages/home/components/newcourse" */).then(m => m.default || m)
const _2c05b8fc = () => import('../pages/home/components/info.vue' /* webpackChunkName: "pages/home/components/info" */).then(m => m.default || m)
const _a719623c = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _4d5dc867 = () => import('../pages/home/components/evaluate.vue' /* webpackChunkName: "pages/home/components/evaluate" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _c4734de4 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _62ecb6d9 = () => import('../pages/news/_detail.vue' /* webpackChunkName: "pages/news/_detail" */).then(m => m.default || m)
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
			path: "/profile",
			component: _1b62cf17,
			name: "profile"
		},
		{
			path: "/home",
			component: _69f81487,
			name: "home"
		},
		{
			path: "/course/media",
			component: _bd4618d6,
			name: "course-media"
		},
		{
			path: "/other/Institutional",
			component: _d7cca222,
			name: "other-Institutional"
		},
		{
			path: "/shop/wePay",
			component: _5a331c06,
			name: "shop-wePay"
		},
		{
			path: "/other/ie",
			component: _6d15d7c0,
			name: "other-ie"
		},
		{
			path: "/project/projectevaluate",
			component: _fe9a0bb2,
			name: "project-projectevaluate"
		},
		{
			path: "/course/freelesson",
			component: _1948b07a,
			name: "course-freelesson"
		},
		{
			path: "/other/hrEntry",
			component: _05a49d98,
			name: "other-hrEntry"
		},
		{
			path: "/course/chooselesson",
			component: _0a0aa7ee,
			name: "course-chooselesson"
		},
		{
			path: "/other/faceteach",
			component: _0272e6e4,
			name: "other-faceteach"
		},
		{
			path: "/course/coursedetail",
			component: _ce5ad8ea,
			name: "course-coursedetail"
		},
		{
			path: "/other/degree",
			component: _e11bf060,
			name: "other-degree"
		},
		{
			path: "/other/aboutUs",
			component: _c231d592,
			name: "other-aboutUs"
		},
		{
			path: "/project/projectDetail",
			component: _3eb1e902,
			name: "project-projectDetail"
		},
		{
			path: "/shop/checkedCourseList",
			component: _05fb626c,
			name: "shop-checkedCourseList"
		},
		{
			path: "/project/commonproblems",
			component: _0c629a3a,
			name: "project-commonproblems"
		},
		{
			path: "/news/list",
			component: _27089705,
			name: "news-list"
		},
		{
			path: "/course/search",
			component: _222df772,
			name: "course-search"
		},
		{
			path: "/shop/paypublic",
			component: _894cd6c6,
			name: "shop-paypublic"
		},
		{
			path: "/other/userProtocol",
			component: _5fc96ff2,
			name: "other-userProtocol"
		},
		{
			path: "/shop/shoppingcart",
			component: _d94e95a8,
			name: "shop-shoppingcart"
		},
		{
			path: "/course/qualitylesson",
			component: _bb7be7b0,
			name: "course-qualitylesson"
		},
		{
			path: "/famous/list",
			component: _32f239c6,
			name: "famous-list"
		},
		{
			path: "/course/player",
			component: _d3a41600,
			name: "course-player"
		},
		{
			path: "/shop/affirmOrder",
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/other/homeUs",
			component: _5f5c273e,
			name: "other-homeUs"
		},
		{
			path: "/other/policyProgram",
			component: _73fb3ec4,
			name: "other-policyProgram"
		},
		{
			path: "/course/newlesson",
			component: _7ca05409,
			name: "course-newlesson"
		},
		{
			path: "/activity/faceteach",
			component: _2188521d,
			name: "activity-faceteach"
		},
		{
			path: "/shop/test",
			component: _63c98f94,
			name: "shop-test"
		},
		{
			path: "/project/projectcourse",
			component: _3c110229,
			name: "project-projectcourse"
		},
		{
			path: "/shop/payResult",
			component: _c2dce71e,
			name: "shop-payResult"
		},
		{
			path: "/shop/checkedCourse",
			component: _1c9f70a4,
			name: "shop-checkedCourse"
		},
		{
			path: "/other/enterprisecustom",
			component: _6e6ae116,
			name: "other-enterprisecustom"
		},
		{
			path: "/project/partypolicy",
			component: _f2638ae6,
			name: "project-partypolicy"
		},
		{
			path: "/course/classifycourse",
			component: _55c19bbe,
			name: "course-classifycourse"
		},
		{
			path: "/home/components/tab",
			component: _18060837,
			name: "home-components-tab"
		},
		{
			path: "/profile/pages/invitation",
			component: _6af646e2,
			name: "profile-pages-invitation"
		},
		{
			path: "/home/components/forgotpassword",
			component: _842ca8e8,
			name: "home-components-forgotpassword"
		},
		{
			path: "/home/components/partner",
			component: _a144022c,
			name: "home-components-partner"
		},
		{
			path: "/home/components/teacherResource",
			component: _11cd0632,
			name: "home-components-teacherResource"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _b76c0bc8,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/home/components/teacher",
			component: _4f9c5df8,
			name: "home-components-teacher"
		},
		{
			path: "/profile/components/bindid",
			component: _49afb276,
			name: "profile-components-bindid"
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
			path: "/home/components/free",
			component: _748d488c,
			name: "home-components-free"
		},
		{
			path: "/profile/pages/order",
			component: _fe3f2d70,
			name: "profile-pages-order"
		},
		{
			path: "/home/components/project",
			component: _3d3fdcbb,
			name: "home-components-project"
		},
		{
			path: "/profile/components/personalset",
			component: _b9329498,
			name: "profile-components-personalset"
		},
		{
			path: "/profile/components/binding",
			component: _00599997,
			name: "profile-components-binding"
		},
		{
			path: "/profile/components/info",
			component: _e91700e8,
			name: "profile-components-info"
		},
		{
			path: "/home/components/new",
			component: _3ac8167c,
			name: "home-components-new"
		},
		{
			path: "/course/components/List",
			component: _5afc5708,
			name: "course-components-List"
		},
		{
			path: "/home/components/classic",
			component: _6cfb65b4,
			name: "home-components-classic"
		},
		{
			path: "/profile/components/conversion",
			component: _2efadf74,
			name: "profile-components-conversion"
		},
		{
			path: "/home/components/newcourse",
			component: _6f90f046,
			name: "home-components-newcourse"
		},
		{
			path: "/home/components/info",
			component: _2c05b8fc,
			name: "home-components-info"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _a719623c,
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/home/components/evaluate",
			component: _4d5dc867,
			name: "home-components-evaluate"
		},
		{
			path: "/course/components/Filter",
			component: _59e40862,
			name: "course-components-Filter"
		},
		{
			path: "/course/:category?",
			component: _c4734de4,
			name: "course-category"
		},
		{
			path: "/news/:detail?",
			component: _62ecb6d9,
			name: "news-detail"
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
