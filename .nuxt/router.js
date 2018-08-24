import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _6666d6f2 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _1fe45514 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _34771022 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _e55401ee = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _2a95a9e5 = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _79e43c9e = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _3669b9d4 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _ca8e16aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _bebb874e = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _7acc2446 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _bcf1c354 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _b99b2138 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _08f7b686 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _ab86863a = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _40706888 = () => import('../pages/profile/components/DataPick.vue' /* webpackChunkName: "pages/profile/components/DataPick" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _0773ca26 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _b43289b6 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _583c6f84 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _62910f13 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f17393ea = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _36f8e10a = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _0da1d2a5 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _c1976bea = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _0239b64d = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _145fb93b = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _753f7450 = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _0da7c6e8 = () => import('../pages/auth/forgotPassword.vue' /* webpackChunkName: "pages/auth/forgotPassword" */).then(m => m.default || m)
const _73ba631e = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _5e880bd9 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _192e9728 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _ec5348ec = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _6b4f7457 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _59f35421 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _22ab7a6c = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _00b7e687 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _60fe40dc = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _754b6819 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _69ae8056 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _77343fe2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _520a423e = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _6c18dd68 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _26eb3a8b = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _5a9f5ae8 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6ba526a0 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _0b2fa543 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _21b7cab3 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _057e72db = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _c09cfba4 = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _d291f2b6 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _22c9f24b = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _5ab18b84 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _a1956b34 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _23547442 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _728dd9c8 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _1e66e39a = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _26d550eb = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _db62e6e8 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _6e92f227 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _f8aebe9c = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _e25c93dc = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _261b84ce = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _3b624757 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _df07cde8 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _25900b9a = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _d370008a = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _53b42c98 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _3a172fe0 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _7fcfa9c3 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _25164358 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _6287b9f6 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _6c191a74 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _81383ffc = () => import('../pages/profile/components/search.vue' /* webpackChunkName: "pages/profile/components/search" */).then(m => m.default || m)
const _737749f6 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _0e1a58a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _d4928468 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _fc04d804 = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _25280713 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _4a173e30 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _b9c40fae = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _545af240 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _ed13dc3e = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _1b2a9329 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _5ee28dff = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _1a05cf79 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _03f97825 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _718abc52 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _18a47f40 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _235ebf23 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _b3d763a0 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _70170c42 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _73ae24be = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _2b8f6874 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _0759ccaa = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _7135467a = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _116b72fc = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _7184a8b6 = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _68f89313 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _53487390 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _a127e088 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _96f19a34 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _0ef40822 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _afaa0632 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _7a9fc1c6 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _03016e0a = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _7fdbac5b = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _db6d4cf6 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _54857d02 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _cf6f50e2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2f84df10 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _74da5a43 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _35ef459a = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
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
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c



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
			component: _62910f13,
			name: "profile"
		},
		{
			path: "/home",
			component: _f17393ea,
			name: "home"
		},
		{
			path: "/project/projectDetail",
			component: _36f8e10a,
			name: "project-projectDetail"
		},
		{
<<<<<<< HEAD
			path: "/auth/Register",
			component: _076214d4,
			name: "auth-Register"
=======
			path: "/auth/wechatLogin",
			component: _0da1d2a5,
			name: "auth-wechatLogin"
		},
		{
			path: "/project/projectPlayer",
			component: _c1976bea,
			name: "project-projectPlayer",
			children: [
				{
					path: "evaluate",
					component: _0239b64d,
					name: "project-projectPlayer-evaluate"
				}
			]
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/affirmOrder",
			component: _145fb93b,
			name: "shop-affirmOrder"
		},
		{
<<<<<<< HEAD
			path: "/course/category",
			component: _4d0f457c,
			name: "course-category"
=======
			path: "/auth/passwordLogin",
			component: _753f7450,
			name: "auth-passwordLogin"
		},
		{
			path: "/auth/forgotPassword",
			component: _0da7c6e8,
			name: "auth-forgotPassword"
		},
		{
			path: "/auth/Register",
			component: _73ba631e,
			name: "auth-Register"
		},
		{
			path: "/course/category",
			component: _5e880bd9,
			name: "course-category"
		},
		{
			path: "/shop/shoppingcart",
			component: _192e9728,
			name: "shop-shoppingcart"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/customAffirmOrder",
			component: _ec5348ec,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _6b4f7457,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/shop/paypublic",
			component: _59f35421,
			name: "shop-paypublic"
		},
		{
<<<<<<< HEAD
			path: "/course/coursedetail",
			component: _7ff396aa,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _15932199,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _582b0d96,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _47b5b739,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _2bc9209f,
					name: "course-coursedetail-teacherIntro"
				}
			]
=======
			path: "/course/detail",
			component: _22ab7a6c,
			name: "course-detail"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/course/coursedetail",
			component: _00b7e687,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _60fe40dc,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _754b6819,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _69ae8056,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _77343fe2,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
<<<<<<< HEAD
			path: "/auth/forgotpassword",
			component: _6e9c788f,
			name: "auth-forgotpassword"
=======
			path: "/auth/codeLogin",
			component: _520a423e,
			name: "auth-codeLogin"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/project/customerProject",
			component: _6c18dd68,
			name: "project-customerProject"
		},
		{
			path: "/auth/Login",
			component: _26eb3a8b,
			name: "auth-Login"
		},
		{
<<<<<<< HEAD
			path: "/other/activePages/policyProgram",
			component: _5b88e868,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/OrderList",
			component: _4e3f0dbf,
			name: "profile-components-OrderList"
=======
			path: "/course/components/List",
			component: _5a9f5ae8,
			name: "course-components-List"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _6ba526a0,
			name: "profile-ticket-ticketConfirm"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/wepay/qrcode",
			component: _0b2fa543,
			name: "shop-wepay-qrcode"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/Card",
			component: _1ed254ad,
			name: "profile-components-Card"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _e55401ee,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _dcb564ce,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/profile/components/List",
			component: _6f85133b,
			name: "profile-components-List"
		},
		{
			path: "/profile/components/search",
			component: _2a95a9e5,
			name: "profile-components-search"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _496e53b6,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/profile/pages/myCode",
			component: _55724e70,
			name: "profile-pages-myCode"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _07f5e8d5,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/components/Info",
			component: _29eb3f4b,
			name: "profile-components-Info"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _79e43c9e,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d86c869e,
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _3669b9d4,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/other/pages/search",
			component: _4a27ebd8,
			name: "other-pages-search"
=======
			path: "/profile/pages/courselist",
			component: _21b7cab3,
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/BindIng",
			component: _057e72db,
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _c09cfba4,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/other/activePages/degree",
			component: _d291f2b6,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/components/Detail",
			component: _22c9f24b,
			name: "profile-components-Detail"
		},
		{
			path: "/course/player/player",
			component: _5ab18b84,
			name: "course-player-player"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _a1956b34,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/home/teacher/famous",
			component: _23547442,
			name: "home-teacher-famous"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _728dd9c8,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _1e66e39a,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/course/components/CardProject",
			component: _26d550eb,
			name: "course-components-CardProject"
		},
		{
			path: "/profile/ticket/ticketPopup",
			component: _db62e6e8,
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/shop/components/List",
			component: _6e92f227,
			name: "shop-components-List"
		},
		{
			path: "/profile/components/BindId",
			component: _f8aebe9c,
			name: "profile-components-BindId"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _e25c93dc,
			name: "shop-affirmorder-orderBtn"
		},
		{
<<<<<<< HEAD
			path: "/other/activePages/enterprisecustom",
			component: _419a81b0,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myProject",
			component: _dea97e34,
			name: "profile-pages-myProject"
		},
		{
			path: "/profile/ticket/ticketOrder",
			component: _ca8e16aa,
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _bebb874e,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _54085936,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/shop/components/card",
			component: _fb7fb894,
			name: "shop-components-card"
		},
		{
			path: "/other/activePages/degree",
			component: _15fa173c,
			name: "other-activePages-degree"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/home/teacher/famous",
			component: _6d917602,
			name: "home-teacher-famous"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/list",
			component: _83b64c36,
			name: "home-teacher-list"
		},
		{
			path: "/profile/pages/noMsg",
			component: _1a9a0bce,
			name: "profile-pages-noMsg"
		},
		{
			path: "/course/player/player",
			component: _7a28407e,
			name: "course-player-player"
		},
		{
			path: "/profile/pages/myHome",
			component: _6c33cc62,
			name: "profile-pages-myHome"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _7d3225b0,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myTicket",
			component: _96fe1562,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/components/BindId",
			component: _224b2ad6,
			name: "profile-components-BindId"
		},
		{
			path: "/other/activePages/faceteach",
			component: _5e6cd912,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/ticket/ticketConfirm",
			component: _7acc2446,
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/home/news/info",
			component: _0a084520,
			name: "home-news-info"
		},
		{
			path: "/course/components/CardProject",
			component: _a30d1d64,
			name: "course-components-CardProject"
=======
			path: "/profile/personalSet/showPersonal",
			component: _261b84ce,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/profile/ticket/ticketRules",
			component: _3b624757,
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/home/components/homecourse",
			component: _df07cde8,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myCode",
			component: _25900b9a,
			name: "profile-pages-myCode"
		},
		{
			path: "/project/components/Detail",
			component: _d370008a,
			name: "project-components-Detail"
		},
		{
			path: "/profile/components/List",
			component: _53b42c98,
			name: "profile-components-List"
		},
		{
			path: "/other/pages/homeUs",
			component: _3a172fe0,
			name: "other-pages-homeUs"
		},
		{
			path: "/project/components/CourseList",
			component: _7fcfa9c3,
			name: "project-components-CourseList"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _25164358,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/personalSet/personalSet",
			component: _6287b9f6,
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/profile/ticket/ticketHistory",
			component: _6c191a74,
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/components/search",
			component: _81383ffc,
			name: "profile-components-search"
		},
		{
			path: "/profile/pages/noMsg",
			component: _737749f6,
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/components/Info",
			component: _0e1a58a8,
			name: "profile-components-Info"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _d4928468,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/course/components/Card",
			component: _fc04d804,
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/invitation",
			component: _25280713,
			name: "profile-pages-invitation"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _4a173e30,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _b9c40fae,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/project/components/ShortList",
			component: _545af240,
			name: "project-components-ShortList"
		},
		{
			path: "/profile/pages/myCourse",
			component: _ed13dc3e,
			name: "profile-pages-myCourse"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/project/components/CommonProblems",
			component: _1b2a9329,
			name: "project-components-CommonProblems"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/Conversion",
			component: _4a26d81a,
			name: "profile-components-Conversion"
		},
		{
			path: "/profile/personalSet/showPersonal",
			component: _bcf1c354,
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/pages/courselist",
			component: _fff88f20,
			name: "profile-pages-courselist"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _1fec77f2,
			name: "other-activePages-partypolicy"
=======
			path: "/course/components/CardPlayer",
			component: _5ee28dff,
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/components/card",
			component: _1a05cf79,
			name: "shop-components-card"
		},
		{
			path: "/profile/pages/myHome",
			component: _03f97825,
			name: "profile-pages-myHome"
		},
		{
			path: "/profile/pages/myTicket",
			component: _718abc52,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _18a47f40,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/home/news/info",
			component: _235ebf23,
			name: "home-news-info"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _b3d763a0,
			name: "shop-shopCart-allCheck"
		},
		{
<<<<<<< HEAD
			path: "/profile/pages/invitation",
			component: _f9181660,
			name: "profile-pages-invitation"
		},
		{
			path: "/project/components/ShortList",
			component: _a9608d06,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/components/List",
			component: _52657338,
			name: "shop-components-List"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _b99b2138,
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _3398ff19,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _4dcd0e04,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/other/pages/homeUs",
			component: _a57eb0e6,
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/personalSet/updatePassword",
			component: _08f7b686,
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/profile/components/TabSingle",
			component: _3bfd2470,
			name: "profile-components-TabSingle"
		},
		{
			path: "/other/activePages/Institutional",
			component: _bf5a4bc6,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/ticket/statusPopup",
			component: _ab86863a,
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/components/DataPick",
			component: _40706888,
			name: "profile-components-DataPick"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _4ea6126e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/project/components/Detail",
			component: _0179c99e,
			name: "project-components-Detail"
=======
			path: "/shop/shopCart/tableHeader",
			component: _70170c42,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _73ae24be,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/profile/pages/myInfo",
			component: _2b8f6874,
			name: "profile-pages-myInfo"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _0759ccaa,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/activePages/Institutional",
			component: _7135467a,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/OrderList",
			component: _116b72fc,
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/personalSet/setPersonal",
			component: _7184a8b6,
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/home/news/list",
			component: _68f89313,
			name: "home-news-list"
		},
		{
			path: "/profile/components/Conversion",
			component: _53487390,
			name: "profile-components-Conversion"
		},
		{
			path: "/course/components/ListCard",
			component: _a127e088,
			name: "course-components-ListCard"
		},
		{
			path: "/course/components/Filter",
			component: _96f19a34,
			name: "course-components-Filter"
		},
		{
			path: "/other/activePages/faceteach",
			component: _0ef40822,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/ticket/detailPopup",
			component: _afaa0632,
			name: "profile-ticket-detailPopup"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/wepay/payType",
			component: _7a9fc1c6,
			name: "shop-wepay-payType"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/BindIng",
			component: _0085e558,
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/pages/myCourse",
			component: _67276a44,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/components/Detail",
			component: _e40887a4,
			name: "profile-components-Detail"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _5a087752,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/home/news/list",
			component: _4fa21910,
			name: "home-news-list"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myOrder",
			component: _f164784a,
			name: "profile-pages-myOrder"
		},
		{
			path: "/project/components/CourseList",
			component: _0773ca26,
			name: "project-components-CourseList"
=======
			path: "/profile/components/Card",
			component: _03016e0a,
			name: "profile-components-Card"
		},
		{
			path: "/other/pages/search",
			component: _7fdbac5b,
			name: "other-pages-search"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _db6d4cf6,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/home/teacher/list",
			component: _54857d02,
			name: "home-teacher-list"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _cf6f50e2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/profile/pages/myOrder",
			component: _2f84df10,
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/myProject",
			component: _74da5a43,
			name: "profile-pages-myProject"
		},
		{
			path: "/profile/components/TabSingle",
			component: _35ef459a,
			name: "profile-components-TabSingle"
		},
		{
			path: "/shop/components/banner",
			component: _eafb9556,
			name: "shop-components-banner"
		},
		{
			path: "/home/news/components/Info",
			component: _1e7c7f7c,
			name: "home-news-components-Info"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/home/news/components/List",
			component: _365b9432,
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
			component: _5bf38a25,
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
			component: _68f9b055,
			name: "home-teacher-components-Card"
		},
		{
<<<<<<< HEAD
			path: "/home/news/:detail?",
			component: _02d0f4ee,
			name: "home-news-detail"
=======
			path: "/home/teacher/:Info?",
			component: _c8c9b30e,
			name: "home-teacher-Info"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/course/list/:courselist?",
			component: _303bb042,
			name: "course-list-courselist"
		},
		{
<<<<<<< HEAD
			path: "/home/teacher/:Info?",
			component: _65e765f6,
			name: "home-teacher-Info"
=======
			path: "/home/news/:detail?",
			component: _cd9ccfea,
			name: "home-news-detail"
>>>>>>> eaadf13c998cef81854090c278bee16e9a541b2c
		},
		{
			path: "/shop/result/:payResult?",
			component: _62f08228,
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
			component: _486375ca,
			name: "shop-wePay"
		},
		{
			path: "/",
			component: _4674020e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
