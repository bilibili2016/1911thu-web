import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _0c629a3a = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _3c110229 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _fe9a0bb2 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _5de35908 = () => import('../pages/profile/components/list.vue' /* webpackChunkName: "pages/profile/components/list" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _ff48d624 = () => import('../pages/profile/components/card.vue' /* webpackChunkName: "pages/profile/components/card" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _b76c0bc8 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _e91700e8 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _2efadf74 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _7c7979dc = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _3ffabf45 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _fe3f2d70 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _b9329498 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _a719623c = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _00599997 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _49afb276 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _25b3fd9f = () => import('../pages/project/components/detail.vue' /* webpackChunkName: "pages/project/components/detail" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _c4734de4 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _4c8d9362 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _380814a0 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _b80af3cc = () => import('../pages/project/commonProblems.vue' /* webpackChunkName: "pages/project/commonProblems" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _1d7762ee = () => import('../pages/project/projectCourse.vue' /* webpackChunkName: "pages/project/projectCourse" */).then(m => m.default || m)
const _9376a2f2 = () => import('../pages/project/projectEvaluate.vue' /* webpackChunkName: "pages/project/projectEvaluate" */).then(m => m.default || m)
const _9c815e72 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _08c47bd0 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _33e0eb56 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _22ff269a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _11d3c11e = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _d8abe0f6 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _beca5cde = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _6812773a = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _f4040d92 = () => import('../pages/profile/components/Binding.vue' /* webpackChunkName: "pages/profile/components/Binding" */).then(m => m.default || m)
const _00af17dc = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _74343748 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _b9c1a962 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _65187484 = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _6d173be7 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _0d07f280 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _0d5d6d63 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _0a357cc8 = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _100d6b48 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _a0074d64 = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _cf7872d2 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _7cb71c8f = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _424edbd4 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _5d85575f = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _5ce0e1bc = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _5c3f4688 = () => import('../pages/profile/pages/personalSet.vue' /* webpackChunkName: "pages/profile/pages/personalSet" */).then(m => m.default || m)
const _89d57828 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _65d32b46 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _350c0d3b = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _cfd39f8c = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _d9b7a410 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _44d46a14 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _2ba94126 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _8f7aa484 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _79c248e8 = () => import('../pages/profile/pages/showPerson.vue' /* webpackChunkName: "pages/profile/pages/showPerson" */).then(m => m.default || m)
const _0946fb68 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _79634ddf = () => import('../pages/project/components/detail.vue' /* webpackChunkName: "pages/project/components/detail" */).then(m => m.default || m)
const _e85cb59a = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _edccf83e = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _f162805a = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _8f009950 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _3a1e19ba = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _4aaeea86 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _df6e8314 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _3f232f91 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _ab017362 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4592c8f4 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _97f97e96 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _47cfc0ce = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80



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
<<<<<<< HEAD
=======
			path: "/home",
			component: _121a4c47,
			name: "home"
		},
		{
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
			path: "/profile",
			component: _01587f57,
			name: "profile"
		},
		{
			path: "/shop/wePay",
			component: _025553c6,
			name: "shop-wePay"
		},
		{
			path: "/project/projectPlayer",
			component: _4c8d9362,
			name: "project-projectPlayer"
		},
		{
			path: "/shop/shoppingcart",
			component: _2a7c456c,
			name: "shop-shoppingcart"
		},
		{
<<<<<<< HEAD
			path: "/course/coursedetail",
			component: _ce5ad8ea,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _a8484b50,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _7f289295,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _7a84165a,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _7bdc4d44,
					name: "course-coursedetail-teacherIntro"
				}
			]
=======
			path: "/auth/forgotpassword",
			component: _380814a0,
			name: "auth-forgotpassword"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/shop/payResult",
			component: _7751e431,
			name: "shop-payResult"
		},
		{
			path: "/project/projectDetail",
			component: _1f087bbf,
			name: "project-projectDetail"
		},
		{
			path: "/shop/affirmOrder",
			component: _5f413277,
			name: "shop-affirmOrder"
		},
		{
<<<<<<< HEAD
			path: "/project/commonproblems",
			component: _0c629a3a,
			name: "project-commonproblems"
=======
			path: "/project/commonProblems",
			component: _b80af3cc,
			name: "project-commonProblems"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/shop/paypublic",
			component: _d7cc2746,
			name: "shop-paypublic"
		},
		{
<<<<<<< HEAD
			path: "/project/projectcourse",
			component: _3c110229,
			name: "project-projectcourse"
		},
		{
			path: "/project/projectevaluate",
			component: _fe9a0bb2,
			name: "project-projectevaluate"
		},
		{
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/Login",
			component: _099d1907,
			name: "auth-Login"
=======
			path: "/project/projectCourse",
			component: _1d7762ee,
			name: "project-projectCourse"
		},
		{
			path: "/project/projectEvaluate",
			component: _9376a2f2,
			name: "project-projectEvaluate"
		},
		{
			path: "/auth/Login",
			component: _9c815e72,
			name: "auth-Login"
		},
		{
			path: "/course/coursedetail",
			component: _1559d86a,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _08c47bd0,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _33e0eb56,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _22ff269a,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _11d3c11e,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/profile/pages/ticketRules",
			component: _d8abe0f6,
			name: "profile-pages-ticketRules"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/shop/components/banner",
			component: _beca5cde,
			name: "shop-components-banner"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/list",
			component: _5de35908,
			name: "profile-components-list"
=======
			path: "/profile/pages/noMsg",
			component: _6812773a,
			name: "profile-pages-noMsg"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/profile/components/Binding",
			component: _f4040d92,
			name: "profile-components-Binding"
		},
		{
			path: "/profile/components/List",
			component: _00af17dc,
			name: "profile-components-List"
		},
		{
			path: "/home/components/homecourse",
			component: _74343748,
			name: "home-components-homecourse"
		},
		{
			path: "/home/news/list",
			component: _b9c1a962,
			name: "home-news-list"
		},
		{
<<<<<<< HEAD
			path: "/home/teacher/famous",
			component: _f31f1a3a,
			name: "home-teacher-famous"
=======
			path: "/profile/components/OrderList",
			component: _65187484,
			name: "profile-components-OrderList"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _6d173be7,
			name: "other-activePages-enterprisecustom"
		},
		{
<<<<<<< HEAD
			path: "/course/components/List",
			component: _5afc5708,
			name: "course-components-List"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _b76c0bc8,
			name: "profile-pages-ticketOrder"
=======
			path: "/course/player/player",
			component: _0d07f280,
			name: "course-player-player"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/shop/components/List",
			component: _0d5d6d63,
			name: "shop-components-List"
<<<<<<< HEAD
		},
		{
			path: "/profile/components/info",
			component: _e91700e8,
			name: "profile-components-info"
		},
		{
			path: "/profile/pages/courselist",
			component: _71d6bfa2,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/conversion",
			component: _2efadf74,
			name: "profile-components-conversion"
		},
		{
			path: "/profile/pages/invitation",
			component: _6af646e2,
			name: "profile-pages-invitation"
=======
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/project/components/shortList",
			component: _0a357cc8,
			name: "project-components-shortList"
		},
		{
			path: "/profile/pages/ticketOrder",
			component: _100d6b48,
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/profile/components/Card",
			component: _a0074d64,
			name: "profile-components-Card"
		},
		{
			path: "/other/pages/search",
			component: _cf7872d2,
			name: "other-pages-search"
<<<<<<< HEAD
		},
		{
			path: "/course/components/CardPlayer",
			component: _92bf750a,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/pages/ticketRules",
			component: _3ffabf45,
			name: "profile-pages-ticketRules"
=======
		},
		{
			path: "/profile/components/Detail",
			component: _7cb71c8f,
			name: "profile-components-Detail"
		},
		{
			path: "/course/components/List",
			component: _2e6e2270,
			name: "course-components-List"
		},
		{
			path: "/profile/components/Conversion",
			component: _424edbd4,
			name: "profile-components-Conversion"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/home/news/info",
			component: _5d85575f,
			name: "home-news-info"
		},
		{
<<<<<<< HEAD
			path: "/other/activePages/Institutional",
			component: _107ee504,
			name: "other-activePages-Institutional"
=======
			path: "/profile/pages/ticketHistory",
			component: _5ce0e1bc,
			name: "profile-pages-ticketHistory"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/profile/pages/invitation",
			component: _178a844f,
			name: "profile-pages-invitation"
		},
		{
<<<<<<< HEAD
			path: "/course/player/player",
			component: _74270200,
			name: "course-player-player"
		},
		{
			path: "/course/components/Card",
			component: _0a49987a,
			name: "course-components-Card"
		},
		{
			path: "/profile/components/personalset",
			component: _b9329498,
			name: "profile-components-personalset"
=======
			path: "/profile/pages/personalSet",
			component: _5c3f4688,
			name: "profile-pages-personalSet"
		},
		{
			path: "/profile/components/Info",
			component: _89d57828,
			name: "profile-components-Info"
		},
		{
			path: "/home/teacher/list",
			component: _65d32b46,
			name: "home-teacher-list"
		},
		{
			path: "/course/components/CardPlayer",
			component: _350c0d3b,
			name: "course-components-CardPlayer"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/course/components/Card",
			component: _cfd39f8c,
			name: "course-components-Card"
		},
		{
<<<<<<< HEAD
			path: "/home/news/info",
			component: _f67600c2,
			name: "home-news-info"
		},
		{
			path: "/profile/pages/ticketHistory",
			component: _a719623c,
			name: "profile-pages-ticketHistory"
=======
			path: "/course/components/ListCard",
			component: _d9b7a410,
			name: "course-components-ListCard"
		},
		{
			path: "/profile/components/BindId",
			component: _44d46a14,
			name: "profile-components-BindId"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _2ba94126,
			name: "other-activePages-policyProgram"
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
		},
		{
			path: "/other/activePages/Institutional",
			component: _8f7aa484,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/pages/showPerson",
			component: _79c248e8,
			name: "profile-pages-showPerson"
		},
		{
			path: "/other/pages/homeUs",
			component: _0946fb68,
			name: "other-pages-homeUs"
		},
		{
<<<<<<< HEAD
=======
			path: "/project/components/detail",
			component: _79634ddf,
			name: "project-components-detail"
		},
		{
			path: "/other/activePages/faceteach",
			component: _e85cb59a,
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/degree",
			component: _edccf83e,
			name: "other-activePages-degree"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _f162805a,
			name: "other-activePages-partypolicy"
		},
		{
>>>>>>> 9f608fa13f0b050983b0d9bd854bd45a03852d80
			path: "/course/components/Filter",
			component: _b22c9fbc,
			name: "course-components-Filter"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _8f009950,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/home/teacher/famous",
			component: _3a1e19ba,
			name: "home-teacher-famous"
		},
		{
			path: "/home/news/components/Info",
			component: _4aaeea86,
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
			component: _df6e8314,
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/components/Card",
			component: _3f232f91,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/:detail?",
			component: _ab017362,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _4592c8f4,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _97f97e96,
			name: "home-teacher-Info"
		},
		{
			path: "/course/:category?",
			component: _47cfc0ce,
			name: "course-category"
		},
		{
			path: "/",
			component: _06d81986,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
