import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _38b3c83b = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3004aa5a = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3bae3ed2 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _17d85eea = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _6f19a24a = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _3541d7c6 = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _34771022 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _6666d6f2 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _1fe45514 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _1ffc653c = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _3f8bb3cd = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _3f52c2b0 = () => import('../pages/other/activePages/test.vue' /* webpackChunkName: "pages/other/activePages/test" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _5df28997 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _6f362426 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _98f216fe = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _1055938e = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _42927d2a = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _c4aaf7b4 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _32479175 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _5e294b59 = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _1246dd82 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _1cd8fe22 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _091bcb8c = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _8add7c00 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _abd0d830 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _3d9ef7a5 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _46b1819f = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _3cd65a32 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _0fe19fba = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _5c59aedc = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _47ce77f6 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _70576c36 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _a9e50c70 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _68a7e0e0 = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _4d57b156 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _4a01fe44 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _1dea3368 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _46be3ef1 = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _f17393ea = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _62910f13 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _36f8e10a = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _753f7450 = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _5e880bd9 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _00b7e687 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _60fe40dc = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _754b6819 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _69ae8056 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _77343fe2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _22ab7a6c = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _73ba631e = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _145fb93b = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _0da7c6e8 = () => import('../pages/auth/forgotPassword.vue' /* webpackChunkName: "pages/auth/forgotPassword" */).then(m => m.default || m)
const _520a423e = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _77813d8a = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _192e9728 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _0da1d2a5 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _26eb3a8b = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _c1976bea = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _8e3fd1a0 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _368d10d6 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _63437e2d = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _0239b64d = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _027f6ea0 = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _ec5348ec = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _6b4f7457 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _59f35421 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _3d2b4bf5 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _6c18dd68 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _1ddac4cc = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _1b2a9329 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _0b2fa543 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _54857d02 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _d370008a = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _68f89313 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _ed13dc3e = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _74da5a43 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _25164358 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _d291f2b6 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _10ea3669 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _df07cde8 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _4a173e30 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _96f19a34 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _db6d4cf6 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _1a05cf79 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _1e66e39a = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _70170c42 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _5ee28dff = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _b3d763a0 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _545af240 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _e25c93dc = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _3a172fe0 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _fc04d804 = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _718abc52 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _2f84df10 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _0759ccaa = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _7fdbac5b = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _d4928468 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _0ef40822 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _b9c40fae = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _7a9fc1c6 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _73ae24be = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _a127e088 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _23547442 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _03f97825 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _235ebf23 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _6e92f227 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _728dd9c8 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _26d550eb = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _25900b9a = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _2b8f6874 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _cf6f50e2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _5a9f5ae8 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _eafb9556 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _c53f34aa = () => import('../pages/other/activePages/test.vue' /* webpackChunkName: "pages/other/activePages/test" */).then(m => m.default || m)
const _5ab18b84 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _7135467a = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _4524015d = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _4135efab = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _365b9432 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _0a57a96d = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _283d4383 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _7530b510 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _2f0bb7b6 = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _4d505702 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _06106c0a = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _2b1494a9 = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _40c1fbd7 = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _14fa99aa = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _6e7f53c2 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _dbc6be3c = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _74b4e6ea = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _3e19b3de = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _68f9b055 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _2846ee55 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _4a22e80e = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _506daae8 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _35a03925 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _1e7c7f7c = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _24b64ea6 = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _603f1d32 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _734cc3e5 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _6b44af29 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _5d5e0364 = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _c8c9b30e = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _303bb042 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _cd9ccfea = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
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
			path: "/home",
<<<<<<< HEAD
			component: _44f44288,
=======
			component: _f17393ea,
>>>>>>> origin/liyr
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _b85f5514,
			name: "profile"
		},
		{
			path: "/auth/codeLogin",
			component: _38b3c83b,
			name: "auth-codeLogin"
		},
		{
			path: "/project/projectPlayer",
			component: _3e447d6e,
=======
			component: _62910f13,
			name: "profile"
		},
		{
			path: "/project/projectDetail",
			component: _36f8e10a,
			name: "project-projectDetail"
		},
		{
			path: "/auth/passwordLogin",
			component: _753f7450,
			name: "auth-passwordLogin"
		},
		{
			path: "/course/category",
			component: _5e880bd9,
			name: "course-category"
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
			path: "/course/detail",
			component: _22ab7a6c,
			name: "course-detail"
		},
		{
			path: "/auth/Register",
			component: _73ba631e,
			name: "auth-Register"
		},
		{
			path: "/shop/affirmOrder",
			component: _145fb93b,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotPassword",
			component: _0da7c6e8,
			name: "auth-forgotPassword"
		},
		{
			path: "/auth/codeLogin",
			component: _520a423e,
			name: "auth-codeLogin"
		},
		{
			path: "/shop/wePay",
			component: _77813d8a,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _192e9728,
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/wechatLogin",
			component: _0da1d2a5,
			name: "auth-wechatLogin"
		},
		{
			path: "/auth/Login",
			component: _26eb3a8b,
			name: "auth-Login"
		},
		{
			path: "/project/projectPlayer",
			component: _c1976bea,
>>>>>>> origin/liyr
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
<<<<<<< HEAD
					component: _3004aa5a,
=======
					component: _8e3fd1a0,
>>>>>>> origin/liyr
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
<<<<<<< HEAD
					component: _3bae3ed2,
=======
					component: _368d10d6,
>>>>>>> origin/liyr
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
<<<<<<< HEAD
					component: _17d85eea,
=======
					component: _63437e2d,
>>>>>>> origin/liyr
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
<<<<<<< HEAD
					component: _6f19a24a,
=======
					component: _0239b64d,
>>>>>>> origin/liyr
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
<<<<<<< HEAD
					component: _3541d7c6,
=======
					component: _027f6ea0,
>>>>>>> origin/liyr
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/project/customerProject",
			component: _34771022,
			name: "project-customerProject"
		},
		{
			path: "/auth/forgotpassword",
			component: _6e9c788f,
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
<<<<<<< HEAD
			path: "/auth/wechatLogin",
			component: _1ffc653c,
			name: "auth-wechatLogin"
		},
		{
			path: "/shop/affirmOrder",
			component: _12809810,
			name: "shop-affirmOrder"
		},
		{
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
			path: "/auth/Login",
			component: _36cd71f0,
			name: "auth-Login"
		},
		{
			path: "/auth/Register",
			component: _076214d4,
			name: "auth-Register"
		},
		{
			path: "/shop/wePay",
			component: _352f4a07,
			name: "shop-wePay"
		},
		{
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/course/category",
			component: _4d0f457c,
			name: "course-category"
		},
		{
			path: "/auth/passwordLogin",
			component: _3f8bb3cd,
			name: "auth-passwordLogin"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _7d3225b0,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _5a087752,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _74cf0226,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/project/components/Detail",
			component: _0179c99e,
			name: "project-components-Detail"
		},
		{
			path: "/other/activePages/degree",
			component: _15fa173c,
			name: "other-activePages-degree"
		},
		{
			path: "/home/teacher/famous",
			component: _6d917602,
			name: "home-teacher-famous"
		},
		{
			path: "/project/components/ShortList",
			component: _a9608d06,
			name: "project-components-ShortList"
		},
		{
			path: "/project/components/CommonProblems",
			component: _0d9c6be8,
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/pages/myCourse",
			component: _67276a44,
			name: "profile-pages-myCourse"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
		},
		{
			path: "/profile/pages/myProject",
			component: _dea97e34,
			name: "profile-pages-myProject"
		},
		{
			path: "/other/activePages/test",
			component: _3f52c2b0,
			name: "other-activePages-test"
		},
		{
			path: "/home/news/list",
			component: _4fa21910,
			name: "home-news-list"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d86c869e,
			name: "profile-pages-myInfo"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _07f5e8d5,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/faceteach",
			component: _5e6cd912,
			name: "other-activePages-faceteach"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _496e53b6,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardProject",
			component: _a30d1d64,
			name: "course-components-CardProject"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _0bf90016,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _4dcd0e04,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/player/player",
			component: _7a28407e,
			name: "course-player-player"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _3398ff19,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/home/teacher/list",
			component: _83b64c36,
			name: "home-teacher-list"
		},
		{
			path: "/profile/pages/myTicket",
			component: _96fe1562,
=======
			path: "/shop/paypublic",
			component: _59f35421,
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
			component: _3d2b4bf5,
			name: "shop-payResult"
		},
		{
			path: "/project/customerProject",
			component: _6c18dd68,
			name: "project-customerProject"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _1ddac4cc,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/CommonProblems",
			component: _1b2a9329,
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _0b2fa543,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/teacher/list",
			component: _54857d02,
			name: "home-teacher-list"
		},
		{
			path: "/project/components/Detail",
			component: _d370008a,
			name: "project-components-Detail"
		},
		{
			path: "/home/news/list",
			component: _68f89313,
			name: "home-news-list"
		},
		{
			path: "/profile/pages/myCourse",
			component: _ed13dc3e,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myProject",
			component: _74da5a43,
			name: "profile-pages-myProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _25164358,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/degree",
			component: _d291f2b6,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/mySettings",
			component: _10ea3669,
			name: "profile-pages-mySettings"
		},
		{
			path: "/home/components/homecourse",
			component: _df07cde8,
			name: "home-components-homecourse"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _4a173e30,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/course/components/Filter",
			component: _96f19a34,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _db6d4cf6,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/shop/components/card",
			component: _1a05cf79,
			name: "shop-components-card"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _1e66e39a,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _70170c42,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardPlayer",
			component: _5ee28dff,
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _b3d763a0,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ShortList",
			component: _545af240,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _e25c93dc,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/pages/homeUs",
			component: _3a172fe0,
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/Card",
			component: _fc04d804,
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myTicket",
			component: _718abc52,
>>>>>>> origin/liyr
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _f164784a,
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/pages/search",
			component: _4a27ebd8,
=======
			component: _2f84df10,
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _0759ccaa,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/pages/search",
			component: _7fdbac5b,
>>>>>>> origin/liyr
			name: "other-pages-search"
		},
		{
			path: "/other/pages/homeUs",
			component: _a57eb0e6,
			name: "other-pages-homeUs"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _4ea6126e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _1fec77f2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/shop/wepay/payType",
			component: _e60742cc,
			name: "shop-wepay-payType"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _5b88e868,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/other/activePages/Institutional",
			component: _bf5a4bc6,
			name: "other-activePages-Institutional"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _5df28997,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/profile/pages/myHome",
			component: _6c33cc62,
			name: "profile-pages-myHome"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
		},
		{
			path: "/shop/components/List",
			component: _52657338,
			name: "shop-components-List"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/pages/mySettings",
			component: _6f362426,
			name: "profile-pages-mySettings"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2deaf1a6,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/profile/pages/myCode",
			component: _55724e70,
			name: "profile-pages-myCode"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _54085936,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/home/news/info",
			component: _0a084520,
			name: "home-news-info"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _419a81b0,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/shop/components/card",
			component: _fb7fb894,
			name: "shop-components-card"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _98f216fe,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _1055938e,
=======
			component: _d4928468,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/faceteach",
			component: _0ef40822,
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _b9c40fae,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/shop/wepay/payType",
			component: _7a9fc1c6,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _73ae24be,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
			component: _a127e088,
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/famous",
			component: _23547442,
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/myHome",
			component: _03f97825,
			name: "profile-pages-myHome"
		},
		{
			path: "/home/news/info",
			component: _235ebf23,
			name: "home-news-info"
		},
		{
			path: "/shop/components/List",
			component: _6e92f227,
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _728dd9c8,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/CardProject",
			component: _26d550eb,
			name: "course-components-CardProject"
		},
		{
			path: "/profile/pages/myCode",
			component: _25900b9a,
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myInfo",
			component: _2b8f6874,
			name: "profile-pages-myInfo"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _cf6f50e2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/course/components/List",
			component: _5a9f5ae8,
			name: "course-components-List"
		},
		{
			path: "/shop/components/banner",
			component: _eafb9556,
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/test",
			component: _c53f34aa,
			name: "other-activePages-test"
		},
		{
			path: "/course/player/player",
			component: _5ab18b84,
			name: "course-player-player"
		},
		{
			path: "/other/activePages/Institutional",
			component: _7135467a,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _4524015d,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _4135efab,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketHistory"
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
			path: "/profile/components/mysetting/setPersonal",
<<<<<<< HEAD
			component: _42927d2a,
=======
			component: _0a57a96d,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
<<<<<<< HEAD
			component: _c4aaf7b4,
=======
			component: _283d4383,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/common/List",
<<<<<<< HEAD
			component: _32479175,
=======
			component: _7530b510,
>>>>>>> origin/liyr
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/common/noMsg",
<<<<<<< HEAD
			component: _5e294b59,
=======
			component: _2f0bb7b6,
>>>>>>> origin/liyr
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/mycode/Conversion",
<<<<<<< HEAD
			component: _1246dd82,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _1cd8fe22,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _091bcb8c,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _8add7c00,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/common/Detail",
			component: _abd0d830,
=======
			component: _4d505702,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _06106c0a,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _2b1494a9,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _40c1fbd7,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/common/Detail",
			component: _14fa99aa,
>>>>>>> origin/liyr
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
<<<<<<< HEAD
			component: _3d9ef7a5,
=======
			component: _6e7f53c2,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/search",
<<<<<<< HEAD
			component: _46b1819f,
=======
			component: _dbc6be3c,
>>>>>>> origin/liyr
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/common/Card",
<<<<<<< HEAD
			component: _3cd65a32,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _0fe19fba,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/home/teacher/components/Card",
			component: _802310dc,
=======
			component: _74b4e6ea,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _3e19b3de,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/home/teacher/components/Card",
			component: _68f9b055,
>>>>>>> origin/liyr
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/myorder/OrderList",
<<<<<<< HEAD
			component: _5c59aedc,
=======
			component: _2846ee55,
>>>>>>> origin/liyr
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/myinfo/Info",
<<<<<<< HEAD
			component: _47ce77f6,
=======
			component: _4a22e80e,
>>>>>>> origin/liyr
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/common/CustomerCard",
<<<<<<< HEAD
			component: _70576c36,
=======
			component: _506daae8,
>>>>>>> origin/liyr
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
<<<<<<< HEAD
			component: _a9e50c70,
=======
			component: _35a03925,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketOrder"
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
			path: "/profile/components/common/ListTab",
<<<<<<< HEAD
			component: _68a7e0e0,
=======
			component: _24b64ea6,
>>>>>>> origin/liyr
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myorder/DataPick",
<<<<<<< HEAD
			component: _4d57b156,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _4a01fe44,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _1dea3368,
=======
			component: _603f1d32,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _734cc3e5,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _6b44af29,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/ticketRules",
<<<<<<< HEAD
			component: _46be3ef1,
=======
			component: _5d5e0364,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketRules"
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
