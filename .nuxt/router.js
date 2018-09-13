import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7cbfc059 = () => import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */).then(m => m.default || m)
const _51deb99a = () => import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */).then(m => m.default || m)
const _3aedb28a = () => import('..\\pages\\project\\projectDetail.vue' /* webpackChunkName: "pages_project_projectDetail" */).then(m => m.default || m)
const _762adea8 = () => import('..\\pages\\auth\\passwordLogin.vue' /* webpackChunkName: "pages_auth_passwordLogin" */).then(m => m.default || m)
const _3af71e03 = () => import('..\\pages\\course\\category.vue' /* webpackChunkName: "pages_course_category" */).then(m => m.default || m)
const _0d9dd3b1 = () => import('..\\pages\\course\\coursedetail.vue' /* webpackChunkName: "pages_course_coursedetail" */).then(m => m.default || m)
const _851539d6 = () => import('..\\pages\\course\\coursedetail\\UserEvaluate.vue' /* webpackChunkName: "pages_course_coursedetail_UserEvaluate" */).then(m => m.default || m)
const _defa3fdc = () => import('..\\pages\\course\\coursedetail\\EvaluateDialog.vue' /* webpackChunkName: "pages_course_coursedetail_EvaluateDialog" */).then(m => m.default || m)
const _c7c8b586 = () => import('..\\pages\\course\\coursedetail\\CourseCatalog.vue' /* webpackChunkName: "pages_course_coursedetail_CourseCatalog" */).then(m => m.default || m)
const _58a93bca = () => import('..\\pages\\course\\coursedetail\\teacherIntro.vue' /* webpackChunkName: "pages_course_coursedetail_teacherIntro" */).then(m => m.default || m)
const _cda5e1d4 = () => import('..\\pages\\course\\detail.vue' /* webpackChunkName: "pages_course_detail" */).then(m => m.default || m)
const _7e166895 = () => import('..\\pages\\auth\\Register.vue' /* webpackChunkName: "pages_auth_Register" */).then(m => m.default || m)
const _733323bb = () => import('..\\pages\\shop\\affirmOrder.vue' /* webpackChunkName: "pages_shop_affirmOrder" */).then(m => m.default || m)
const _d5cd90e0 = () => import('..\\pages\\auth\\forgotpassword.vue' /* webpackChunkName: "pages_auth_forgotpassword" */).then(m => m.default || m)
const _ceec26cc = () => import('..\\pages\\auth\\codeLogin.vue' /* webpackChunkName: "pages_auth_codeLogin" */).then(m => m.default || m)
const _ac52efec = () => import('..\\pages\\shop\\wePay.vue' /* webpackChunkName: "pages_shop_wePay" */).then(m => m.default || m)
const _d66f06b0 = () => import('..\\pages\\shop\\shoppingcart.vue' /* webpackChunkName: "pages_shop_shoppingcart" */).then(m => m.default || m)
const _9a3f53fe = () => import('..\\pages\\auth\\wechatLogin.vue' /* webpackChunkName: "pages_auth_wechatLogin" */).then(m => m.default || m)
const _30b672e7 = () => import('..\\pages\\auth\\Login.vue' /* webpackChunkName: "pages_auth_Login" */).then(m => m.default || m)
const _c58c3d6a = () => import('..\\pages\\project\\projectPlayer.vue' /* webpackChunkName: "pages_project_projectPlayer" */).then(m => m.default || m)
const _06cf718e = () => import('..\\pages\\project\\projectPlayer\\playerTop.vue' /* webpackChunkName: "pages_project_projectPlayer_playerTop" */).then(m => m.default || m)
const _f65d27a8 = () => import('..\\pages\\project\\projectPlayer\\player.vue' /* webpackChunkName: "pages_project_projectPlayer_player" */).then(m => m.default || m)
const _d2dd6178 = () => import('..\\pages\\project\\projectPlayer\\CourseList.vue' /* webpackChunkName: "pages_project_projectPlayer_CourseList" */).then(m => m.default || m)
const _07b23db8 = () => import('..\\pages\\project\\projectPlayer\\evaluate.vue' /* webpackChunkName: "pages_project_projectPlayer_evaluate" */).then(m => m.default || m)
const _ccc55412 = () => import('..\\pages\\project\\projectPlayer\\playerBottom.vue' /* webpackChunkName: "pages_project_projectPlayer_playerBottom" */).then(m => m.default || m)
const _060fe60a = () => import('..\\pages\\shop\\customAffirmOrder.vue' /* webpackChunkName: "pages_shop_customAffirmOrder" */).then(m => m.default || m)
const _731c0382 = () => import('..\\pages\\shop\\customAffirmOrder\\orderInfo.vue' /* webpackChunkName: "pages_shop_customAffirmOrder_orderInfo" */).then(m => m.default || m)
const _739f5ea1 = () => import('..\\pages\\shop\\paypublic.vue' /* webpackChunkName: "pages_shop_paypublic" */).then(m => m.default || m)
const _56d75675 = () => import('..\\pages\\shop\\payResult.vue' /* webpackChunkName: "pages_shop_payResult" */).then(m => m.default || m)
const _5cf0588c = () => import('..\\pages\\project\\customerProject.vue' /* webpackChunkName: "pages_project_customerProject" */).then(m => m.default || m)
const _08c6c662 = () => import('..\\pages\\project\\components\\OfflineDesc.vue' /* webpackChunkName: "pages_project_components_OfflineDesc" */).then(m => m.default || m)
const _e7f76858 = () => import('..\\pages\\project\\components\\CommonProblems.vue' /* webpackChunkName: "pages_project_components_CommonProblems" */).then(m => m.default || m)
const _cbbf9390 = () => import('..\\pages\\shop\\wepay\\qrcode.vue' /* webpackChunkName: "pages_shop_wepay_qrcode" */).then(m => m.default || m)
const _e2c0eff2 = () => import('..\\pages\\home\\teacher\\list.vue' /* webpackChunkName: "pages_home_teacher_list" */).then(m => m.default || m)
const _77ae9366 = () => import('..\\pages\\project\\components\\Detail.vue' /* webpackChunkName: "pages_project_components_Detail" */).then(m => m.default || m)
const _1b6c8e3a = () => import('..\\pages\\home\\news\\list.vue' /* webpackChunkName: "pages_home_news_list" */).then(m => m.default || m)
const _2b797dcc = () => import('..\\pages\\profile\\pages\\myCourse.vue' /* webpackChunkName: "pages_profile_pages_myCourse" */).then(m => m.default || m)
const _13446bb8 = () => import('..\\pages\\profile\\pages\\myProject.vue' /* webpackChunkName: "pages_profile_pages_myProject" */).then(m => m.default || m)
const _6118bfe6 = () => import('..\\pages\\project\\components\\ProjectEvaluate.vue' /* webpackChunkName: "pages_project_components_ProjectEvaluate" */).then(m => m.default || m)
const _06c77778 = () => import('..\\pages\\other\\activePages\\degree.vue' /* webpackChunkName: "pages_other_activePages_degree" */).then(m => m.default || m)
const _3fc25394 = () => import('..\\pages\\profile\\pages\\mySettings.vue' /* webpackChunkName: "pages_profile_pages_mySettings" */).then(m => m.default || m)
const _4b2857d9 = () => import('..\\pages\\home\\components\\homecourse.vue' /* webpackChunkName: "pages_home_components_homecourse" */).then(m => m.default || m)
const _1c8ec911 = () => import('..\\pages\\shop\\affirmorder\\orderInfo.vue' /* webpackChunkName: "pages_shop_affirmorder_orderInfo" */).then(m => m.default || m)
const _f1dd561a = () => import('..\\pages\\course\\components\\Filter.vue' /* webpackChunkName: "pages_course_components_Filter" */).then(m => m.default || m)
const _755925fa = () => import('..\\pages\\profile\\pages\\myCustomerProject.vue' /* webpackChunkName: "pages_profile_pages_myCustomerProject" */).then(m => m.default || m)
const _1a1da246 = () => import('..\\pages\\shop\\components\\card.vue' /* webpackChunkName: "pages_shop_components_card" */).then(m => m.default || m)
const _a3242ce2 = () => import('..\\pages\\project\\components\\ProjectCourse.vue' /* webpackChunkName: "pages_project_components_ProjectCourse" */).then(m => m.default || m)
const _b7c15ed6 = () => import('..\\pages\\shop\\shopCart\\tableHeader.vue' /* webpackChunkName: "pages_shop_shopCart_tableHeader" */).then(m => m.default || m)
const _877a3ce8 = () => import('..\\pages\\course\\components\\CardPlayer.vue' /* webpackChunkName: "pages_course_components_CardPlayer" */).then(m => m.default || m)
const _271ba2bd = () => import('..\\pages\\shop\\shopCart\\allCheck.vue' /* webpackChunkName: "pages_shop_shopCart_allCheck" */).then(m => m.default || m)
const _74553ab5 = () => import('..\\pages\\project\\components\\ShortList.vue' /* webpackChunkName: "pages_project_components_ShortList" */).then(m => m.default || m)
const _67a524c9 = () => import('..\\pages\\shop\\affirmorder\\orderBtn.vue' /* webpackChunkName: "pages_shop_affirmorder_orderBtn" */).then(m => m.default || m)
const _6a29368a = () => import('..\\pages\\other\\pages\\homeUs.vue' /* webpackChunkName: "pages_other_pages_homeUs" */).then(m => m.default || m)
const _965a556a = () => import('..\\pages\\course\\components\\Card.vue' /* webpackChunkName: "pages_course_components_Card" */).then(m => m.default || m)
const _138e283d = () => import('..\\pages\\profile\\pages\\myTicket.vue' /* webpackChunkName: "pages_profile_pages_myTicket" */).then(m => m.default || m)
const _251109a6 = () => import('..\\pages\\profile\\pages\\myOrder.vue' /* webpackChunkName: "pages_profile_pages_myOrder" */).then(m => m.default || m)
const _009b1c8a = () => import('..\\pages\\other\\activePages\\enterprisecustom.vue' /* webpackChunkName: "pages_other_activePages_enterprisecustom" */).then(m => m.default || m)
const _67d2a906 = () => import('..\\pages\\other\\pages\\search.vue' /* webpackChunkName: "pages_other_pages_search" */).then(m => m.default || m)
const _bfd4bb16 = () => import('..\\pages\\shop\\affirmorder\\noMsg.vue' /* webpackChunkName: "pages_shop_affirmorder_noMsg" */).then(m => m.default || m)
const _aef83420 = () => import('..\\pages\\other\\activePages\\faceteach.vue' /* webpackChunkName: "pages_other_activePages_faceteach" */).then(m => m.default || m)
const _23b60cac = () => import('..\\pages\\other\\activePages\\policyProgram.vue' /* webpackChunkName: "pages_other_activePages_policyProgram" */).then(m => m.default || m)
const _11d1acc8 = () => import('..\\pages\\shop\\wepay\\payType.vue' /* webpackChunkName: "pages_shop_wepay_payType" */).then(m => m.default || m)
const _15a828d8 = () => import('..\\pages\\shop\\affirmorder\\backShopCart.vue' /* webpackChunkName: "pages_shop_affirmorder_backShopCart" */).then(m => m.default || m)
const _07f5e289 = () => import('..\\pages\\course\\components\\ListCard.vue' /* webpackChunkName: "pages_course_components_ListCard" */).then(m => m.default || m)
const _0a1923a4 = () => import('..\\pages\\home\\teacher\\famous.vue' /* webpackChunkName: "pages_home_teacher_famous" */).then(m => m.default || m)
const _252ce2d0 = () => import('..\\pages\\profile\\pages\\myHome.vue' /* webpackChunkName: "pages_profile_pages_myHome" */).then(m => m.default || m)
const _545a8b6c = () => import('..\\pages\\home\\news\\info.vue' /* webpackChunkName: "pages_home_news_info" */).then(m => m.default || m)
const _6eaac4f4 = () => import('..\\pages\\shop\\components\\List.vue' /* webpackChunkName: "pages_shop_components_List" */).then(m => m.default || m)
const _23fb5d7b = () => import('..\\pages\\other\\activePages\\userProtocol.vue' /* webpackChunkName: "pages_other_activePages_userProtocol" */).then(m => m.default || m)
const _757f6efe = () => import('..\\pages\\course\\components\\CardProject.vue' /* webpackChunkName: "pages_course_components_CardProject" */).then(m => m.default || m)
const _0e6b64de = () => import('..\\pages\\profile\\pages\\myCode.vue' /* webpackChunkName: "pages_profile_pages_myCode" */).then(m => m.default || m)
const _4cc2d31f = () => import('..\\pages\\profile\\pages\\myInfo.vue' /* webpackChunkName: "pages_profile_pages_myInfo" */).then(m => m.default || m)
const _4073c550 = () => import('..\\pages\\other\\activePages\\partypolicy.vue' /* webpackChunkName: "pages_other_activePages_partypolicy" */).then(m => m.default || m)
const _058593d9 = () => import('..\\pages\\course\\components\\List.vue' /* webpackChunkName: "pages_course_components_List" */).then(m => m.default || m)
const _381eee3c = () => import('..\\pages\\shop\\components\\banner.vue' /* webpackChunkName: "pages_shop_components_banner" */).then(m => m.default || m)
const _a73301ec = () => import('..\\pages\\other\\activePages\\test.vue' /* webpackChunkName: "pages_other_activePages_test" */).then(m => m.default || m)
const _bd3e6cf2 = () => import('..\\pages\\course\\player\\player.vue' /* webpackChunkName: "pages_course_player_player" */).then(m => m.default || m)
const _8787700a = () => import('..\\pages\\other\\activePages\\Institutional.vue' /* webpackChunkName: "pages_other_activePages_Institutional" */).then(m => m.default || m)
const _491103a6 = () => import('..\\pages\\profile\\components\\myticket\\statusPopup.vue' /* webpackChunkName: "pages_profile_components_myticket_statusPopup" */).then(m => m.default || m)
const _dec50f0a = () => import('..\\pages\\profile\\components\\myticket\\ticketHistory.vue' /* webpackChunkName: "pages_profile_components_myticket_ticketHistory" */).then(m => m.default || m)
const _6214b770 = () => import('..\\pages\\home\\news\\components\\List.vue' /* webpackChunkName: "pages_home_news_components_List" */).then(m => m.default || m)
const _ef2efcba = () => import('..\\pages\\profile\\components\\mysetting\\setPersonal.vue' /* webpackChunkName: "pages_profile_components_mysetting_setPersonal" */).then(m => m.default || m)
const _82de7f5a = () => import('..\\pages\\profile\\components\\myticket\\ticketPopup.vue' /* webpackChunkName: "pages_profile_components_myticket_ticketPopup" */).then(m => m.default || m)
const _559fd9ae = () => import('..\\pages\\profile\\components\\common\\List.vue' /* webpackChunkName: "pages_profile_components_common_List" */).then(m => m.default || m)
const _b44beb80 = () => import('..\\pages\\profile\\components\\common\\noMsg.vue' /* webpackChunkName: "pages_profile_components_common_noMsg" */).then(m => m.default || m)
const _20bf37d4 = () => import('..\\pages\\profile\\components\\mycode\\Conversion.vue' /* webpackChunkName: "pages_profile_components_mycode_Conversion" */).then(m => m.default || m)
const _0d08bbf6 = () => import('..\\pages\\profile\\components\\common\\CardTab.vue' /* webpackChunkName: "pages_profile_components_common_CardTab" */).then(m => m.default || m)
const _0c03b517 = () => import('..\\pages\\profile\\components\\mycode\\BindIng.vue' /* webpackChunkName: "pages_profile_components_mycode_BindIng" */).then(m => m.default || m)
const _dfacf6b2 = () => import('..\\pages\\profile\\components\\myticket\\ticketConfirm.vue' /* webpackChunkName: "pages_profile_components_myticket_ticketConfirm" */).then(m => m.default || m)
const _587eb1e1 = () => import('..\\pages\\profile\\components\\common\\Detail.vue' /* webpackChunkName: "pages_profile_components_common_Detail" */).then(m => m.default || m)
const _9aecfb68 = () => import('..\\pages\\profile\\components\\mysetting\\showPersonal.vue' /* webpackChunkName: "pages_profile_components_mysetting_showPersonal" */).then(m => m.default || m)
const _15cec0d0 = () => import('..\\pages\\profile\\components\\common\\search.vue' /* webpackChunkName: "pages_profile_components_common_search" */).then(m => m.default || m)
const _04ed1b20 = () => import('..\\pages\\profile\\components\\common\\Card.vue' /* webpackChunkName: "pages_profile_components_common_Card" */).then(m => m.default || m)
const _57259ea4 = () => import('..\\pages\\profile\\components\\myticket\\detailPopup.vue' /* webpackChunkName: "pages_profile_components_myticket_detailPopup" */).then(m => m.default || m)
const _8c58b1a2 = () => import('..\\pages\\home\\teacher\\components\\Card.vue' /* webpackChunkName: "pages_home_teacher_components_Card" */).then(m => m.default || m)
const _3e9d0ee2 = () => import('..\\pages\\profile\\components\\myorder\\OrderList.vue' /* webpackChunkName: "pages_profile_components_myorder_OrderList" */).then(m => m.default || m)
const _18fc996d = () => import('..\\pages\\profile\\components\\myinfo\\Info.vue' /* webpackChunkName: "pages_profile_components_myinfo_Info" */).then(m => m.default || m)
const _55a1491e = () => import('..\\pages\\profile\\components\\common\\CustomerCard.vue' /* webpackChunkName: "pages_profile_components_common_CustomerCard" */).then(m => m.default || m)
const _68189416 = () => import('..\\pages\\profile\\components\\myticket\\ticketOrder.vue' /* webpackChunkName: "pages_profile_components_myticket_ticketOrder" */).then(m => m.default || m)
const _1c7ae380 = () => import('..\\pages\\home\\news\\components\\Info.vue' /* webpackChunkName: "pages_home_news_components_Info" */).then(m => m.default || m)
const _2bae9e92 = () => import('..\\pages\\profile\\components\\common\\ListTab.vue' /* webpackChunkName: "pages_profile_components_common_ListTab" */).then(m => m.default || m)
const _139d63b8 = () => import('..\\pages\\profile\\components\\myorder\\DataPick.vue' /* webpackChunkName: "pages_profile_components_myorder_DataPick" */).then(m => m.default || m)
const _46bba4b7 = () => import('..\\pages\\profile\\components\\mycode\\invitation.vue' /* webpackChunkName: "pages_profile_components_mycode_invitation" */).then(m => m.default || m)
const _5505399a = () => import('..\\pages\\profile\\components\\mysetting\\updatePassword.vue' /* webpackChunkName: "pages_profile_components_mysetting_updatePassword" */).then(m => m.default || m)
const _67a47b1e = () => import('..\\pages\\profile\\components\\myticket\\ticketRules.vue' /* webpackChunkName: "pages_profile_components_myticket_ticketRules" */).then(m => m.default || m)
const _b67b07d8 = () => import('..\\pages\\home\\teacher\\_Info.vue' /* webpackChunkName: "pages_home_teacher__Info" */).then(m => m.default || m)
const _9a268f76 = () => import('..\\pages\\course\\list\\_courselist.vue' /* webpackChunkName: "pages_course_list__courselist" */).then(m => m.default || m)
const _60097784 = () => import('..\\pages\\home\\news\\_detail.vue' /* webpackChunkName: "pages_home_news__detail" */).then(m => m.default || m)
const _58c21c98 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _7cbfc059,
			name: "home"
		},
		{
			path: "/profile",
			component: _51deb99a,
			name: "profile"
		},
		{
			path: "/project/projectDetail",
			component: _3aedb28a,
			name: "project-projectDetail"
		},
		{
			path: "/auth/passwordLogin",
			component: _762adea8,
			name: "auth-passwordLogin"
		},
		{
			path: "/course/category",
			component: _3af71e03,
			name: "course-category"
		},
		{
			path: "/course/coursedetail",
			component: _0d9dd3b1,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _851539d6,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _defa3fdc,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _c7c8b586,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _58a93bca,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/course/detail",
			component: _cda5e1d4,
			name: "course-detail"
		},
		{
			path: "/auth/Register",
			component: _7e166895,
			name: "auth-Register"
		},
		{
			path: "/shop/affirmOrder",
			component: _733323bb,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotpassword",
			component: _d5cd90e0,
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/codeLogin",
			component: _ceec26cc,
			name: "auth-codeLogin"
		},
		{
			path: "/shop/wePay",
			component: _ac52efec,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _d66f06b0,
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/wechatLogin",
			component: _9a3f53fe,
			name: "auth-wechatLogin"
		},
		{
			path: "/auth/Login",
			component: _30b672e7,
			name: "auth-Login"
		},
		{
			path: "/project/projectPlayer",
			component: _c58c3d6a,
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
					component: _06cf718e,
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
					component: _f65d27a8,
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
					component: _d2dd6178,
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
					component: _07b23db8,
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
					component: _ccc55412,
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/shop/customAffirmOrder",
			component: _060fe60a,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _731c0382,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/shop/paypublic",
			component: _739f5ea1,
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
			component: _56d75675,
			name: "shop-payResult"
		},
		{
			path: "/project/customerProject",
			component: _5cf0588c,
			name: "project-customerProject"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _08c6c662,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/CommonProblems",
			component: _e7f76858,
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _cbbf9390,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/teacher/list",
			component: _e2c0eff2,
			name: "home-teacher-list"
		},
		{
			path: "/project/components/Detail",
			component: _77ae9366,
			name: "project-components-Detail"
		},
		{
			path: "/home/news/list",
			component: _1b6c8e3a,
			name: "home-news-list"
		},
		{
			path: "/profile/pages/myCourse",
			component: _2b797dcc,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myProject",
			component: _13446bb8,
			name: "profile-pages-myProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _6118bfe6,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/degree",
			component: _06c77778,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/mySettings",
			component: _3fc25394,
			name: "profile-pages-mySettings"
		},
		{
			path: "/home/components/homecourse",
			component: _4b2857d9,
			name: "home-components-homecourse"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _1c8ec911,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/course/components/Filter",
			component: _f1dd561a,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _755925fa,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/shop/components/card",
			component: _1a1da246,
			name: "shop-components-card"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _a3242ce2,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _b7c15ed6,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardPlayer",
			component: _877a3ce8,
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _271ba2bd,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ShortList",
			component: _74553ab5,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _67a524c9,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/pages/homeUs",
			component: _6a29368a,
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/Card",
			component: _965a556a,
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myTicket",
			component: _138e283d,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/pages/myOrder",
			component: _251109a6,
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _009b1c8a,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/pages/search",
			component: _67d2a906,
			name: "other-pages-search"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _bfd4bb16,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/faceteach",
			component: _aef83420,
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _23b60cac,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/shop/wepay/payType",
			component: _11d1acc8,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _15a828d8,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
			component: _07f5e289,
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/famous",
			component: _0a1923a4,
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/myHome",
			component: _252ce2d0,
			name: "profile-pages-myHome"
		},
		{
			path: "/home/news/info",
			component: _545a8b6c,
			name: "home-news-info"
		},
		{
			path: "/shop/components/List",
			component: _6eaac4f4,
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _23fb5d7b,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/CardProject",
			component: _757f6efe,
			name: "course-components-CardProject"
		},
		{
			path: "/profile/pages/myCode",
			component: _0e6b64de,
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myInfo",
			component: _4cc2d31f,
			name: "profile-pages-myInfo"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _4073c550,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/course/components/List",
			component: _058593d9,
			name: "course-components-List"
		},
		{
			path: "/shop/components/banner",
			component: _381eee3c,
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/test",
			component: _a73301ec,
			name: "other-activePages-test"
		},
		{
			path: "/course/player/player",
			component: _bd3e6cf2,
			name: "course-player-player"
		},
		{
			path: "/other/activePages/Institutional",
			component: _8787700a,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _491103a6,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _dec50f0a,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/home/news/components/List",
			component: _6214b770,
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _ef2efcba,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _82de7f5a,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/common/List",
			component: _559fd9ae,
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/common/noMsg",
			component: _b44beb80,
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _20bf37d4,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _0d08bbf6,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _0c03b517,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _dfacf6b2,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/common/Detail",
			component: _587eb1e1,
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
			component: _9aecfb68,
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/search",
			component: _15cec0d0,
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/common/Card",
			component: _04ed1b20,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _57259ea4,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/home/teacher/components/Card",
			component: _8c58b1a2,
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _3e9d0ee2,
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _18fc996d,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _55a1491e,
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _68189416,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/home/news/components/Info",
			component: _1c7ae380,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _2bae9e92,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _139d63b8,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _46bba4b7,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _5505399a,
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/ticketRules",
			component: _67a47b1e,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/home/teacher/:Info?",
			component: _b67b07d8,
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
			component: _9a268f76,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _60097784,
			name: "home-news-detail"
		},
		{
			path: "/",
			component: _58c21c98,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
