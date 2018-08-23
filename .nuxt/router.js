import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _6666d6f2 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _1fe45514 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _34771022 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _7acc2446 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _79e43c9e = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _bcf1c354 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _ab86863a = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _3669b9d4 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _0773ca26 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _e55401ee = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _08f7b686 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _ca8e16aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _bebb874e = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _b99b2138 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _2a95a9e5 = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _b43289b6 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _583c6f84 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _62910f13 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f17393ea = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _c1976bea = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _00b7e687 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _60fe40dc = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _754b6819 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _69ae8056 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _77343fe2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _26eb3a8b = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _213e6f28 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _ec5348ec = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _6b4f7457 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _22ab7a6c = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _192e9728 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _145fb93b = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _73ba631e = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _59f35421 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _5e880bd9 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _6c18dd68 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _36f8e10a = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _0759ccaa = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _6ba526a0 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _0b2fa543 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _6c191a74 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _25280713 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _5ab18b84 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _261b84ce = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _2b8f6874 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _a1956b34 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _116b72fc = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _22c9f24b = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _db6d4cf6 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _03f97825 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _1e66e39a = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _25900b9a = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _5a9f5ae8 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _718abc52 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _e25c93dc = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _35ef459a = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _3b624757 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _03016e0a = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _68f89313 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _0e1a58a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _54857d02 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _26d550eb = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _7fcfa9c3 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _25164358 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _6287b9f6 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _235ebf23 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _3a172fe0 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _cf6f50e2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _d370008a = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _d4928468 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _df07cde8 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _fc04d804 = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _545af240 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _db62e6e8 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _5ee28dff = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _18a47f40 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _1b2a9329 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _74da5a43 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _1a05cf79 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _2f84df10 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _737749f6 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _53487390 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _23547442 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _b3d763a0 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _70170c42 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _73ae24be = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _a127e088 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _057e72db = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _c09cfba4 = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _b9c40fae = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _7184a8b6 = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _7fdbac5b = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _d291f2b6 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _afaa0632 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _728dd9c8 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _96f19a34 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _ed13dc3e = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _7a9fc1c6 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _f8aebe9c = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _21b7cab3 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _53b42c98 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _6e92f227 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _0ef40822 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _81383ffc = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _7135467a = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _4a173e30 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _eafb9556 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _1e7c7f7c = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _365b9432 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _68f9b055 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _c8c9b30e = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _303bb042 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _cd9ccfea = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _62f08228 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _486375ca = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _4674020e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> origin/liyr



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
<<<<<<< HEAD
			component: _b85f5514,
=======
			component: _62910f13,
>>>>>>> origin/liyr
			name: "profile"
		},
		{
			path: "/home",
<<<<<<< HEAD
			component: _44f44288,
=======
			component: _f17393ea,
>>>>>>> origin/liyr
			name: "home"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _3e447d6e,
=======
			component: _c1976bea,
>>>>>>> origin/liyr
			name: "project-projectPlayer"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _7ff396aa,
=======
			component: _00b7e687,
>>>>>>> origin/liyr
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _15932199,
=======
					component: _60fe40dc,
>>>>>>> origin/liyr
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _582b0d96,
=======
					component: _754b6819,
>>>>>>> origin/liyr
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _47b5b739,
=======
					component: _69ae8056,
>>>>>>> origin/liyr
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _2bc9209f,
=======
					component: _77343fe2,
>>>>>>> origin/liyr
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _36cd71f0,
=======
			component: _26eb3a8b,
>>>>>>> origin/liyr
			name: "auth-Login"
		},
		{
			path: "/auth/forgotpassword",
<<<<<<< HEAD
			component: _6e9c788f,
=======
			component: _213e6f28,
>>>>>>> origin/liyr
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/customAffirmOrder",
<<<<<<< HEAD
			component: _6666d6f2,
=======
			component: _ec5348ec,
>>>>>>> origin/liyr
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
<<<<<<< HEAD
					component: _1fe45514,
=======
					component: _6b4f7457,
>>>>>>> origin/liyr
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/course/detail",
<<<<<<< HEAD
			component: _63eac0cf,
=======
			component: _22ab7a6c,
>>>>>>> origin/liyr
			name: "course-detail"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _fa6417ea,
=======
			component: _192e9728,
>>>>>>> origin/liyr
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _12809810,
=======
			component: _145fb93b,
>>>>>>> origin/liyr
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _076214d4,
=======
			component: _73ba631e,
>>>>>>> origin/liyr
			name: "auth-Register"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _409cda1e,
=======
			component: _59f35421,
>>>>>>> origin/liyr
			name: "shop-paypublic"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _4d0f457c,
=======
			component: _5e880bd9,
>>>>>>> origin/liyr
			name: "course-category"
		},
		{
			path: "/project/customerProject",
<<<<<<< HEAD
			component: _34771022,
=======
			component: _6c18dd68,
>>>>>>> origin/liyr
			name: "project-customerProject"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _f8d87a44,
=======
			component: _36f8e10a,
>>>>>>> origin/liyr
			name: "project-projectDetail"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _419a81b0,
=======
			component: _0759ccaa,
>>>>>>> origin/liyr
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/profile/ticket/ticketConfirm",
<<<<<<< HEAD
			component: _7acc2446,
=======
			component: _6ba526a0,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _74cf0226,
=======
			component: _0b2fa543,
>>>>>>> origin/liyr
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/ticket/ticketHistory",
<<<<<<< HEAD
			component: _79e43c9e,
=======
			component: _6c191a74,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _f9181660,
=======
			component: _25280713,
>>>>>>> origin/liyr
			name: "profile-pages-invitation"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _7a28407e,
=======
			component: _5ab18b84,
>>>>>>> origin/liyr
			name: "course-player-player"
		},
		{
			path: "/profile/personalSet/showPersonal",
<<<<<<< HEAD
			component: _bcf1c354,
=======
			component: _261b84ce,
>>>>>>> origin/liyr
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _d86c869e,
=======
			component: _2b8f6874,
>>>>>>> origin/liyr
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/ticket/statusPopup",
<<<<<<< HEAD
			component: _ab86863a,
=======
			component: _a1956b34,
>>>>>>> origin/liyr
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/components/OrderList",
<<<<<<< HEAD
			component: _4e3f0dbf,
=======
			component: _116b72fc,
>>>>>>> origin/liyr
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/components/Detail",
<<<<<<< HEAD
			component: _e40887a4,
=======
			component: _22c9f24b,
>>>>>>> origin/liyr
			name: "profile-components-Detail"
		},
		{
			path: "/profile/pages/myCustomerProject",
<<<<<<< HEAD
			component: _7d3225b0,
=======
			component: _db6d4cf6,
>>>>>>> origin/liyr
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _6c33cc62,
=======
			component: _03f97825,
>>>>>>> origin/liyr
			name: "profile-pages-myHome"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _5a087752,
=======
			component: _1e66e39a,
>>>>>>> origin/liyr
			name: "project-components-ProjectCourse"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _55724e70,
=======
			component: _25900b9a,
>>>>>>> origin/liyr
			name: "profile-pages-myCode"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _15a68b89,
=======
			component: _5a9f5ae8,
>>>>>>> origin/liyr
			name: "course-components-List"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _96fe1562,
=======
			component: _718abc52,
>>>>>>> origin/liyr
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _0bf90016,
=======
			component: _e25c93dc,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/profile/components/TabSingle",
<<<<<<< HEAD
			component: _3bfd2470,
=======
			component: _35ef459a,
>>>>>>> origin/liyr
			name: "profile-components-TabSingle"
		},
		{
			path: "/profile/ticket/ticketRules",
<<<<<<< HEAD
			component: _3669b9d4,
=======
			component: _3b624757,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/profile/components/Card",
<<<<<<< HEAD
			component: _1ed254ad,
=======
			component: _03016e0a,
>>>>>>> origin/liyr
			name: "profile-components-Card"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _4fa21910,
=======
			component: _68f89313,
>>>>>>> origin/liyr
			name: "home-news-list"
		},
		{
			path: "/profile/components/Info",
<<<<<<< HEAD
			component: _29eb3f4b,
=======
			component: _0e1a58a8,
>>>>>>> origin/liyr
			name: "profile-components-Info"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _83b64c36,
=======
			component: _54857d02,
>>>>>>> origin/liyr
			name: "home-teacher-list"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _a30d1d64,
=======
			component: _26d550eb,
>>>>>>> origin/liyr
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/CourseList",
<<<<<<< HEAD
			component: _0773ca26,
=======
			component: _7fcfa9c3,
>>>>>>> origin/liyr
			name: "project-components-CourseList"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _07f5e8d5,
=======
			component: _25164358,
>>>>>>> origin/liyr
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/personalSet/personalSet",
<<<<<<< HEAD
			component: _dcb564ce,
=======
			component: _6287b9f6,
>>>>>>> origin/liyr
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _0a084520,
=======
			component: _235ebf23,
>>>>>>> origin/liyr
			name: "home-news-info"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a57eb0e6,
=======
			component: _3a172fe0,
>>>>>>> origin/liyr
			name: "other-pages-homeUs"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _1fec77f2,
=======
			component: _cf6f50e2,
>>>>>>> origin/liyr
			name: "other-activePages-partypolicy"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _0179c99e,
=======
			component: _d370008a,
>>>>>>> origin/liyr
			name: "project-components-Detail"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _4ea6126e,
=======
			component: _d4928468,
>>>>>>> origin/liyr
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _e8f8e8ee,
=======
			component: _df07cde8,
>>>>>>> origin/liyr
			name: "home-components-homecourse"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _7618660a,
=======
			component: _fc04d804,
>>>>>>> origin/liyr
			name: "course-components-Card"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a9608d06,
=======
			component: _545af240,
>>>>>>> origin/liyr
			name: "project-components-ShortList"
		},
		{
			path: "/profile/ticket/ticketPopup",
<<<<<<< HEAD
			component: _e55401ee,
=======
			component: _db62e6e8,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _94515588,
=======
			component: _5ee28dff,
>>>>>>> origin/liyr
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/personalSet/updatePassword",
<<<<<<< HEAD
			component: _08f7b686,
=======
			component: _18a47f40,
>>>>>>> origin/liyr
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _0d9c6be8,
=======
			component: _1b2a9329,
>>>>>>> origin/liyr
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _dea97e34,
=======
			component: _74da5a43,
>>>>>>> origin/liyr
			name: "profile-pages-myProject"
		},
		{
			path: "/shop/components/card",
<<<<<<< HEAD
			component: _fb7fb894,
=======
			component: _1a05cf79,
>>>>>>> origin/liyr
			name: "shop-components-card"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _f164784a,
=======
			component: _2f84df10,
>>>>>>> origin/liyr
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/noMsg",
<<<<<<< HEAD
			component: _1a9a0bce,
=======
			component: _737749f6,
>>>>>>> origin/liyr
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/components/Conversion",
<<<<<<< HEAD
			component: _4a26d81a,
=======
			component: _53487390,
>>>>>>> origin/liyr
			name: "profile-components-Conversion"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _6d917602,
=======
			component: _23547442,
>>>>>>> origin/liyr
			name: "home-teacher-famous"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2deaf1a6,
=======
			component: _b3d763a0,
>>>>>>> origin/liyr
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _496e53b6,
=======
			component: _70170c42,
>>>>>>> origin/liyr
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _4dcd0e04,
=======
			component: _73ae24be,
>>>>>>> origin/liyr
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _ab18fb8e,
=======
			component: _a127e088,
>>>>>>> origin/liyr
			name: "course-components-ListCard"
		},
		{
			path: "/profile/components/BindIng",
<<<<<<< HEAD
			component: _0085e558,
=======
			component: _057e72db,
>>>>>>> origin/liyr
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/ticket/ticketOrder",
<<<<<<< HEAD
			component: _ca8e16aa,
=======
			component: _c09cfba4,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _5b88e868,
=======
			component: _b9c40fae,
>>>>>>> origin/liyr
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/personalSet/setPersonal",
<<<<<<< HEAD
			component: _bebb874e,
=======
			component: _7184a8b6,
>>>>>>> origin/liyr
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4a27ebd8,
=======
			component: _7fdbac5b,
>>>>>>> origin/liyr
			name: "other-pages-search"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _15fa173c,
=======
			component: _d291f2b6,
>>>>>>> origin/liyr
			name: "other-activePages-degree"
		},
		{
			path: "/profile/ticket/detailPopup",
<<<<<<< HEAD
			component: _b99b2138,
=======
			component: _afaa0632,
>>>>>>> origin/liyr
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _3398ff19,
=======
			component: _728dd9c8,
>>>>>>> origin/liyr
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _12d320a3,
=======
			component: _96f19a34,
>>>>>>> origin/liyr
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _67276a44,
=======
			component: _ed13dc3e,
>>>>>>> origin/liyr
			name: "profile-pages-myCourse"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e60742cc,
=======
			component: _7a9fc1c6,
>>>>>>> origin/liyr
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/components/BindId",
<<<<<<< HEAD
			component: _224b2ad6,
=======
			component: _f8aebe9c,
>>>>>>> origin/liyr
			name: "profile-components-BindId"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _fff88f20,
=======
			component: _21b7cab3,
>>>>>>> origin/liyr
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/List",
<<<<<<< HEAD
			component: _6f85133b,
=======
			component: _53b42c98,
>>>>>>> origin/liyr
			name: "profile-components-List"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _52657338,
=======
			component: _6e92f227,
>>>>>>> origin/liyr
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _5e6cd912,
=======
			component: _0ef40822,
>>>>>>> origin/liyr
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/components/search",
<<<<<<< HEAD
			component: _2a95a9e5,
=======
			component: _81383ffc,
>>>>>>> origin/liyr
			name: "profile-components-search"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _bf5a4bc6,
=======
			component: _7135467a,
>>>>>>> origin/liyr
			name: "other-activePages-Institutional"
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _54085936,
=======
			component: _4a173e30,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _650f235c,
=======
			component: _eafb9556,
>>>>>>> origin/liyr
			name: "shop-components-banner"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _5bf38a25,
=======
			component: _1e7c7f7c,
>>>>>>> origin/liyr
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _bce543d6,
=======
			component: _365b9432,
>>>>>>> origin/liyr
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _802310dc,
=======
			component: _68f9b055,
>>>>>>> origin/liyr
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _65e765f6,
=======
			component: _c8c9b30e,
>>>>>>> origin/liyr
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _4c0c96e5,
=======
			component: _303bb042,
>>>>>>> origin/liyr
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _02d0f4ee,
=======
			component: _cd9ccfea,
>>>>>>> origin/liyr
			name: "home-news-detail"
		},
		{
			path: "/shop/result/:payResult?",
<<<<<<< HEAD
			component: _b43289b6,
=======
			component: _62f08228,
>>>>>>> origin/liyr
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
<<<<<<< HEAD
			component: _583c6f84,
=======
			component: _486375ca,
>>>>>>> origin/liyr
			name: "shop-wePay"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _84114f48,
=======
			component: _4674020e,
>>>>>>> origin/liyr
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
