import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _ab86863a = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _bebb874e = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _e55401ee = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _bcf1c354 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _ca8e16aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _3669b9d4 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _b99b2138 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _08f7b686 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _0773ca26 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _79e43c9e = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _b43289b6 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _583c6f84 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _380814a0 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _9c815e72 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _4c8d9362 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _64ea3eb5 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _08c47bd0 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _33e0eb56 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _22ff269a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _11d3c11e = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _da252ebc = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _1c7d5387 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _a8614bf0 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _8edbe00c = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _cf7872d2 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _d9b7a410 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _2ba94126 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _00af17dc = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _0d5d6d63 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _8f7aa484 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _acd5bd8c = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _8f009950 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _2a84717c = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _350c0d3b = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _65187484 = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _7606aac8 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _0d07f280 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _82a701b8 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _0946fb68 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _f0dc8256 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _5d85575f = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _65d32b46 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _cfd39f8c = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _e85cb59a = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _edccf83e = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _f92cbf2c = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _1f1a6593 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _74343748 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _e839c9ba = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _d44b34d8 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _f162805a = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _6812773a = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _1f95ac02 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _49cf8d4e = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _3a1e19ba = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _8df33654 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _6d173be7 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _44d46a14 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _2d92ddd2 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _ed2ebd08 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _87a62b28 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _6ed61207 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _57098d26 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _424edbd4 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _95a15436 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _7cb71c8f = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _beca5cde = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _b9c1a962 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _2e823f54 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _89d57828 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _a0074d64 = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _424299b0 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _899c4722 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _4aaeea86 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _df6e8314 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _3f232f91 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _79091e64 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _97f97e96 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4592c8f4 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _ab017362 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _a9061342 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
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
			component: _121a4c47,
>>>>>>> origin/liyr
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _b85f5514,
=======
			component: _01587f57,
>>>>>>> origin/liyr
			name: "profile"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _fa6417ea,
=======
			component: _2a7c456c,
>>>>>>> origin/liyr
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/forgotpassword",
<<<<<<< HEAD
			component: _6e9c788f,
=======
			component: _380814a0,
>>>>>>> origin/liyr
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _36cd71f0,
=======
			component: _9c815e72,
>>>>>>> origin/liyr
			name: "auth-Login"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _4d0f457c,
=======
			component: _69347b1d,
>>>>>>> origin/liyr
			name: "course-category"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _3e447d6e,
=======
			component: _4c8d9362,
>>>>>>> origin/liyr
			name: "project-projectPlayer"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _f8d87a44,
=======
			component: _1f087bbf,
>>>>>>> origin/liyr
			name: "project-projectDetail"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _076214d4,
=======
			component: _64ea3eb5,
>>>>>>> origin/liyr
			name: "auth-Register"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _409cda1e,
=======
			component: _d7cc2746,
>>>>>>> origin/liyr
			name: "shop-paypublic"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _7ff396aa,
=======
			component: _1559d86a,
>>>>>>> origin/liyr
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _15932199,
=======
					component: _08c47bd0,
>>>>>>> origin/liyr
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _582b0d96,
=======
					component: _33e0eb56,
>>>>>>> origin/liyr
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _47b5b739,
=======
					component: _22ff269a,
>>>>>>> origin/liyr
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _2bc9209f,
=======
					component: _11d3c11e,
>>>>>>> origin/liyr
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _12809810,
=======
			component: _5f413277,
>>>>>>> origin/liyr
			name: "shop-affirmOrder"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _f9181660,
=======
			component: _178a844f,
>>>>>>> origin/liyr
			name: "profile-pages-invitation"
		},
		{
			path: "/profile/ticket/statusPopup",
<<<<<<< HEAD
			component: _ab86863a,
=======
			component: _da252ebc,
>>>>>>> origin/liyr
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _74cf0226,
=======
			component: _1c7d5387,
>>>>>>> origin/liyr
			name: "shop-wepay-qrcode"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _4ea6126e,
=======
			component: _a8614bf0,
>>>>>>> origin/liyr
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/profile/personalSet/setPersonal",
<<<<<<< HEAD
			component: _bebb874e,
=======
			component: _8edbe00c,
>>>>>>> origin/liyr
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4a27ebd8,
=======
			component: _cf7872d2,
>>>>>>> origin/liyr
			name: "other-pages-search"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _12d320a3,
=======
			component: _b22c9fbc,
>>>>>>> origin/liyr
			name: "course-components-Filter"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _ab18fb8e,
=======
			component: _d9b7a410,
>>>>>>> origin/liyr
			name: "course-components-ListCard"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _5b88e868,
=======
			component: _2ba94126,
>>>>>>> origin/liyr
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/List",
<<<<<<< HEAD
			component: _6f85133b,
=======
			component: _00af17dc,
>>>>>>> origin/liyr
			name: "profile-components-List"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _52657338,
=======
			component: _0d5d6d63,
>>>>>>> origin/liyr
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _bf5a4bc6,
=======
			component: _8f7aa484,
>>>>>>> origin/liyr
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/personalSet/personalSet",
<<<<<<< HEAD
			component: _dcb564ce,
=======
			component: _acd5bd8c,
>>>>>>> origin/liyr
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _3398ff19,
=======
			component: _8f009950,
>>>>>>> origin/liyr
			name: "other-activePages-userProtocol"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a9608d06,
=======
			component: _2a84717c,
>>>>>>> origin/liyr
			name: "project-components-ShortList"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _94515588,
=======
			component: _350c0d3b,
>>>>>>> origin/liyr
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/components/OrderList",
<<<<<<< HEAD
			component: _4e3f0dbf,
=======
			component: _65187484,
>>>>>>> origin/liyr
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/ticket/ticketPopup",
<<<<<<< HEAD
			component: _e55401ee,
=======
			component: _7606aac8,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _7a28407e,
=======
			component: _0d07f280,
>>>>>>> origin/liyr
			name: "course-player-player"
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _54085936,
=======
			component: _82a701b8,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a57eb0e6,
=======
			component: _0946fb68,
>>>>>>> origin/liyr
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/personalSet/showPersonal",
<<<<<<< HEAD
			component: _bcf1c354,
=======
			component: _f0dc8256,
>>>>>>> origin/liyr
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _0a084520,
=======
			component: _5d85575f,
>>>>>>> origin/liyr
			name: "home-news-info"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _83b64c36,
=======
			component: _65d32b46,
>>>>>>> origin/liyr
			name: "home-teacher-list"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _7618660a,
=======
			component: _cfd39f8c,
>>>>>>> origin/liyr
			name: "course-components-Card"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _5e6cd912,
=======
			component: _e85cb59a,
>>>>>>> origin/liyr
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _15fa173c,
=======
			component: _edccf83e,
>>>>>>> origin/liyr
			name: "other-activePages-degree"
		},
		{
			path: "/profile/ticket/ticketOrder",
<<<<<<< HEAD
			component: _ca8e16aa,
=======
			component: _f92cbf2c,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/profile/ticket/ticketRules",
<<<<<<< HEAD
			component: _3669b9d4,
=======
			component: _1f1a6593,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _e8f8e8ee,
=======
			component: _74343748,
>>>>>>> origin/liyr
			name: "home-components-homecourse"
		},
		{
			path: "/profile/ticket/detailPopup",
<<<<<<< HEAD
			component: _b99b2138,
=======
			component: _e839c9ba,
>>>>>>> origin/liyr
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _07f5e8d5,
=======
			component: _d44b34d8,
>>>>>>> origin/liyr
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _fff88f20,
=======
			component: _141a47ef,
>>>>>>> origin/liyr
			name: "profile-pages-courselist"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _1fec77f2,
=======
			component: _f162805a,
>>>>>>> origin/liyr
			name: "other-activePages-partypolicy"
		},
		{
			path: "/profile/pages/noMsg",
<<<<<<< HEAD
			component: _1a9a0bce,
=======
			component: _6812773a,
>>>>>>> origin/liyr
			name: "profile-pages-noMsg"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _0179c99e,
=======
			component: _1f95ac02,
>>>>>>> origin/liyr
			name: "project-components-Detail"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e60742cc,
=======
			component: _49cf8d4e,
>>>>>>> origin/liyr
			name: "shop-wepay-payType"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _6d917602,
=======
			component: _3a1e19ba,
>>>>>>> origin/liyr
			name: "home-teacher-famous"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _5a087752,
=======
			component: _8df33654,
>>>>>>> origin/liyr
			name: "project-components-ProjectCourse"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _419a81b0,
=======
			component: _6d173be7,
>>>>>>> origin/liyr
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/profile/components/BindId",
<<<<<<< HEAD
			component: _224b2ad6,
=======
			component: _44d46a14,
>>>>>>> origin/liyr
			name: "profile-components-BindId"
		},
		{
			path: "/profile/components/BindIng",
<<<<<<< HEAD
			component: _0085e558,
=======
			component: _2d92ddd2,
>>>>>>> origin/liyr
			name: "profile-components-BindIng"
		},
		{
			path: "/profile/personalSet/updatePassword",
<<<<<<< HEAD
			component: _08f7b686,
=======
			component: _ed2ebd08,
>>>>>>> origin/liyr
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2deaf1a6,
=======
			component: _87a62b28,
>>>>>>> origin/liyr
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/CourseList",
<<<<<<< HEAD
			component: _0773ca26,
=======
			component: _6ed61207,
>>>>>>> origin/liyr
			name: "project-components-CourseList"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _0d9c6be8,
=======
			component: _57098d26,
>>>>>>> origin/liyr
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/components/Conversion",
<<<<<<< HEAD
			component: _4a26d81a,
=======
			component: _424edbd4,
>>>>>>> origin/liyr
			name: "profile-components-Conversion"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _4dcd0e04,
=======
			component: _95a15436,
>>>>>>> origin/liyr
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _15a68b89,
=======
			component: _2e6e2270,
>>>>>>> origin/liyr
			name: "course-components-List"
		},
		{
			path: "/profile/components/Detail",
<<<<<<< HEAD
			component: _e40887a4,
=======
			component: _7cb71c8f,
>>>>>>> origin/liyr
			name: "profile-components-Detail"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _650f235c,
=======
			component: _beca5cde,
>>>>>>> origin/liyr
			name: "shop-components-banner"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _4fa21910,
=======
			component: _b9c1a962,
>>>>>>> origin/liyr
			name: "home-news-list"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _0bf90016,
=======
			component: _2e823f54,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/profile/components/Info",
<<<<<<< HEAD
			component: _29eb3f4b,
=======
			component: _89d57828,
>>>>>>> origin/liyr
			name: "profile-components-Info"
		},
		{
			path: "/profile/components/Card",
<<<<<<< HEAD
			component: _1ed254ad,
=======
			component: _a0074d64,
>>>>>>> origin/liyr
			name: "profile-components-Card"
		},
		{
			path: "/profile/ticket/ticketHistory",
<<<<<<< HEAD
			component: _79e43c9e,
=======
			component: _424299b0,
>>>>>>> origin/liyr
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/components/TabSingle",
<<<<<<< HEAD
			component: _3bfd2470,
=======
			component: _899c4722,
>>>>>>> origin/liyr
			name: "profile-components-TabSingle"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _5bf38a25,
=======
			component: _4aaeea86,
>>>>>>> origin/liyr
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _bce543d6,
=======
			component: _df6e8314,
>>>>>>> origin/liyr
			name: "home-news-components-List"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _802310dc,
=======
			component: _3f232f91,
>>>>>>> origin/liyr
			name: "home-teacher-components-Card"
		},
		{
			path: "/shop/result/:payResult?",
<<<<<<< HEAD
			component: _b43289b6,
=======
			component: _79091e64,
>>>>>>> origin/liyr
			name: "shop-result-payResult"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _65e765f6,
=======
			component: _97f97e96,
>>>>>>> origin/liyr
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _4c0c96e5,
=======
			component: _4592c8f4,
>>>>>>> origin/liyr
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _02d0f4ee,
=======
			component: _ab017362,
>>>>>>> origin/liyr
			name: "home-news-detail"
		},
		{
			path: "/shop/:wePay?",
<<<<<<< HEAD
			component: _583c6f84,
=======
			component: _a9061342,
>>>>>>> origin/liyr
			name: "shop-wePay"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _84114f48,
=======
			component: _06d81986,
>>>>>>> origin/liyr
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
