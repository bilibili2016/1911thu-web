import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _49058b20 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _7ef48e75 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _0fe0208c = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _37cfd715 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _72084d52 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _69a86363 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _562e90c8 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _e16238a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _53cbf308 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _793a43c8 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _2907cc4f = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _1fc8e1c7 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4f07fdfe = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _0b91f6fa = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _70b2b0e2 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _197ca8d8 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _78525c20 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _0640a45a = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _2281a9bc = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _3cc614af = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _ec330a94 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _612ee8aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _2dd9fe0c = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _f7940de4 = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _2986f2b8 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _4f58361f = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _62910f13 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f17393ea = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _59f35421 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _5e880bd9 = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _22ab7a6c = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _145fb93b = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _213e6f28 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _192e9728 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _c1976bea = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _26eb3a8b = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _73ba631e = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _36f8e10a = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _00b7e687 = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _60fe40dc = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _754b6819 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _69ae8056 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _77343fe2 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _4a173e30 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _7184a8b6 = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _0b2fa543 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _74da5a43 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _96f19a34 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _2b8f6874 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _261b84ce = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _d370008a = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _03f97825 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _70170c42 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _fc04d804 = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _ed13dc3e = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _5ab18b84 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _6e92f227 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _a127e088 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _235ebf23 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _057e72db = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _1e66e39a = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _afaa0632 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _53b42c98 = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _0e1a58a8 = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _e25c93dc = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _728dd9c8 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _d4928468 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _db62e6e8 = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _6ba526a0 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _cf6f50e2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _7135467a = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _25900b9a = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _22c9f24b = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _7fcfa9c3 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _b9c40fae = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _116b72fc = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _737749f6 = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _a1956b34 = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _25280713 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _23547442 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _545af240 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _0ef40822 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _d291f2b6 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _53487390 = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _6c191a74 = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _2f84df10 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _3b624757 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _b3d763a0 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _18a47f40 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _5ee28dff = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _26d550eb = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _25164358 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _df07cde8 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _718abc52 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _1b2a9329 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _35ef459a = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _3a172fe0 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _5a9f5ae8 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _68f89313 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _21b7cab3 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _7fdbac5b = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _eafb9556 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _f8aebe9c = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _c09cfba4 = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _7a9fc1c6 = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _6287b9f6 = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _73ae24be = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _03016e0a = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _54857d02 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _0759ccaa = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _365b9432 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _1e7c7f7c = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _68f9b055 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _cd9ccfea = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _303bb042 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _c8c9b30e = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _62f08228 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _486375ca = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _4674020e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> dev



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
			component: _1b62cf17,
=======
			component: _62910f13,
>>>>>>> dev
			name: "profile"
		},
		{
			path: "/home",
<<<<<<< HEAD
			component: _69f81487,
=======
			component: _f17393ea,
>>>>>>> dev
			name: "home"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _894cd6c6,
=======
			component: _59f35421,
>>>>>>> dev
			name: "shop-paypublic"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _29e9dadd,
=======
			component: _5e880bd9,
>>>>>>> dev
			name: "course-category"
		},
		{
			path: "/course/detail",
<<<<<<< HEAD
			component: _49058b20,
=======
			component: _22ab7a6c,
>>>>>>> dev
			name: "course-detail"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _95906a92,
=======
			component: _145fb93b,
>>>>>>> dev
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotpassword",
<<<<<<< HEAD
			component: _f1091520,
=======
			component: _213e6f28,
>>>>>>> dev
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _d94e95a8,
=======
			component: _192e9728,
>>>>>>> dev
			name: "shop-shoppingcart"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _c95073e2,
=======
			component: _c1976bea,
>>>>>>> dev
			name: "project-projectPlayer"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _099d1907,
=======
			component: _26eb3a8b,
>>>>>>> dev
			name: "auth-Login"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _7ef48e75,
=======
			component: _73ba631e,
>>>>>>> dev
			name: "auth-Register"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _3eb1e902,
=======
			component: _36f8e10a,
>>>>>>> dev
			name: "project-projectDetail"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ce5ad8ea,
=======
			component: _00b7e687,
>>>>>>> dev
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _a8484b50,
=======
					component: _60fe40dc,
>>>>>>> dev
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _7f289295,
=======
					component: _754b6819,
>>>>>>> dev
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _7a84165a,
=======
					component: _69ae8056,
>>>>>>> dev
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _7bdc4d44,
=======
					component: _77343fe2,
>>>>>>> dev
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _c71c7138,
=======
			component: _4a173e30,
>>>>>>> dev
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/profile/personalSet/setPersonal",
<<<<<<< HEAD
			component: _0fe0208c,
=======
			component: _7184a8b6,
>>>>>>> dev
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _f54c7972,
=======
			component: _0b2fa543,
>>>>>>> dev
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _13e23572,
=======
			component: _74da5a43,
>>>>>>> dev
			name: "profile-pages-myProject"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _59e40862,
=======
			component: _96f19a34,
>>>>>>> dev
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _d26b4820,
=======
			component: _2b8f6874,
>>>>>>> dev
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/personalSet/showPersonal",
<<<<<<< HEAD
			component: _37cfd715,
=======
			component: _261b84ce,
>>>>>>> dev
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _c6f44c82,
=======
			component: _d370008a,
>>>>>>> dev
			name: "project-components-Detail"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _6f346ba1,
=======
			component: _03f97825,
>>>>>>> dev
			name: "profile-pages-myHome"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _7654e646,
=======
			component: _70170c42,
>>>>>>> dev
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _0a49987a,
=======
			component: _fc04d804,
>>>>>>> dev
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _11c2165d,
=======
			component: _ed13dc3e,
>>>>>>> dev
			name: "profile-pages-myCourse"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _74270200,
=======
			component: _5ab18b84,
>>>>>>> dev
			name: "course-player-player"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _4c6434ba,
=======
			component: _6e92f227,
>>>>>>> dev
			name: "shop-components-List"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _70e97638,
=======
			component: _a127e088,
>>>>>>> dev
			name: "course-components-ListCard"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _f67600c2,
=======
			component: _235ebf23,
>>>>>>> dev
			name: "home-news-info"
		},
		{
			path: "/profile/components/BindIng",
<<<<<<< HEAD
			component: _72084d52,
=======
			component: _057e72db,
>>>>>>> dev
			name: "profile-components-BindIng"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _69447d16,
=======
			component: _1e66e39a,
>>>>>>> dev
			name: "project-components-ProjectCourse"
		},
		{
			path: "/profile/ticket/detailPopup",
<<<<<<< HEAD
			component: _69a86363,
=======
			component: _afaa0632,
>>>>>>> dev
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/profile/components/List",
<<<<<<< HEAD
			component: _562e90c8,
=======
			component: _53b42c98,
>>>>>>> dev
			name: "profile-components-List"
		},
		{
			path: "/profile/components/Info",
<<<<<<< HEAD
			component: _e16238a8,
=======
			component: _0e1a58a8,
>>>>>>> dev
			name: "profile-components-Info"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _d5e0dfd4,
=======
			component: _e25c93dc,
>>>>>>> dev
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _25e6db98,
=======
			component: _728dd9c8,
>>>>>>> dev
			name: "other-activePages-userProtocol"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _1e02c248,
=======
			component: _d4928468,
>>>>>>> dev
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/profile/ticket/ticketPopup",
<<<<<<< HEAD
			component: _53cbf308,
=======
			component: _db62e6e8,
>>>>>>> dev
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/profile/ticket/ticketConfirm",
<<<<<<< HEAD
			component: _793a43c8,
=======
			component: _6ba526a0,
>>>>>>> dev
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _38418f93,
=======
			component: _cf6f50e2,
>>>>>>> dev
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _107ee504,
=======
			component: _7135467a,
>>>>>>> dev
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _5872edaf,
=======
			component: _25900b9a,
>>>>>>> dev
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/components/Detail",
<<<<<<< HEAD
			component: _2907cc4f,
=======
			component: _22c9f24b,
>>>>>>> dev
			name: "profile-components-Detail"
		},
		{
			path: "/project/components/CourseList",
<<<<<<< HEAD
			component: _1fc8e1c7,
=======
			component: _7fcfa9c3,
>>>>>>> dev
			name: "project-components-CourseList"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _29a93f2d,
=======
			component: _b9c40fae,
>>>>>>> dev
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/OrderList",
<<<<<<< HEAD
			component: _4f07fdfe,
=======
			component: _116b72fc,
>>>>>>> dev
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/pages/noMsg",
<<<<<<< HEAD
			component: _0b91f6fa,
=======
			component: _737749f6,
>>>>>>> dev
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/ticket/statusPopup",
<<<<<<< HEAD
			component: _70b2b0e2,
=======
			component: _a1956b34,
>>>>>>> dev
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _6af646e2,
=======
			component: _25280713,
>>>>>>> dev
			name: "profile-pages-invitation"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _f31f1a3a,
=======
			component: _23547442,
>>>>>>> dev
			name: "home-teacher-famous"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a7ceac88,
=======
			component: _545af240,
>>>>>>> dev
			name: "project-components-ShortList"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _66b564f3,
=======
			component: _0ef40822,
>>>>>>> dev
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _3c13dc21,
=======
			component: _d291f2b6,
>>>>>>> dev
			name: "other-activePages-degree"
		},
		{
			path: "/profile/components/Conversion",
<<<<<<< HEAD
			component: _197ca8d8,
=======
			component: _53487390,
>>>>>>> dev
			name: "profile-components-Conversion"
		},
		{
			path: "/profile/ticket/ticketHistory",
<<<<<<< HEAD
			component: _78525c20,
=======
			component: _6c191a74,
>>>>>>> dev
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _373de708,
=======
			component: _2f84df10,
>>>>>>> dev
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/ticket/ticketRules",
<<<<<<< HEAD
			component: _0640a45a,
=======
			component: _3b624757,
>>>>>>> dev
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2e6052ac,
=======
			component: _b3d763a0,
>>>>>>> dev
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/profile/personalSet/updatePassword",
<<<<<<< HEAD
			component: _2281a9bc,
=======
			component: _18a47f40,
>>>>>>> dev
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _92bf750a,
=======
			component: _5ee28dff,
>>>>>>> dev
			name: "course-components-CardPlayer"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _7262ee22,
=======
			component: _26d550eb,
>>>>>>> dev
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _2ef36dd4,
=======
			component: _25164358,
>>>>>>> dev
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _51f97f88,
=======
			component: _df07cde8,
>>>>>>> dev
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _0c527e64,
=======
			component: _718abc52,
>>>>>>> dev
			name: "profile-pages-myTicket"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _2c00292d,
=======
			component: _1b2a9329,
>>>>>>> dev
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/components/TabSingle",
<<<<<<< HEAD
			component: _3cc614af,
=======
			component: _35ef459a,
>>>>>>> dev
			name: "profile-components-TabSingle"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a3e3eae8,
=======
			component: _3a172fe0,
>>>>>>> dev
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _5afc5708,
=======
			component: _5a9f5ae8,
>>>>>>> dev
			name: "course-components-List"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _6b4258e2,
=======
			component: _68f89313,
>>>>>>> dev
			name: "home-news-list"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _71d6bfa2,
=======
			component: _21b7cab3,
>>>>>>> dev
			name: "profile-pages-courselist"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4af54ed7,
=======
			component: _7fdbac5b,
>>>>>>> dev
			name: "other-pages-search"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _12ce39d1,
=======
			component: _eafb9556,
>>>>>>> dev
			name: "shop-components-banner"
		},
		{
			path: "/profile/components/BindId",
<<<<<<< HEAD
			component: _ec330a94,
=======
			component: _f8aebe9c,
>>>>>>> dev
			name: "profile-components-BindId"
		},
		{
			path: "/profile/ticket/ticketOrder",
<<<<<<< HEAD
			component: _612ee8aa,
=======
			component: _c09cfba4,
>>>>>>> dev
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e46c7cce,
=======
			component: _7a9fc1c6,
>>>>>>> dev
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/personalSet/personalSet",
<<<<<<< HEAD
			component: _2dd9fe0c,
=======
			component: _6287b9f6,
>>>>>>> dev
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _662225a5,
=======
			component: _73ae24be,
>>>>>>> dev
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/profile/components/Card",
<<<<<<< HEAD
			component: _f7940de4,
=======
			component: _03016e0a,
>>>>>>> dev
			name: "profile-components-Card"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _62a0c9f4,
=======
			component: _54857d02,
>>>>>>> dev
			name: "home-teacher-list"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _06304427,
=======
			component: _0759ccaa,
>>>>>>> dev
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _3c996e36,
=======
			component: _365b9432,
>>>>>>> dev
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _1200cb74,
=======
			component: _1e7c7f7c,
>>>>>>> dev
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _7e91305e,
=======
			component: _68f9b055,
>>>>>>> dev
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _135bb60f,
=======
			component: _cd9ccfea,
>>>>>>> dev
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _9d1f8974,
=======
			component: _303bb042,
>>>>>>> dev
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _66b4c8f5,
=======
			component: _c8c9b30e,
>>>>>>> dev
			name: "home-teacher-Info"
		},
		{
			path: "/shop/result/:payResult?",
<<<<<<< HEAD
			component: _2986f2b8,
=======
			component: _62f08228,
>>>>>>> dev
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
<<<<<<< HEAD
			component: _4f58361f,
=======
			component: _486375ca,
>>>>>>> dev
			name: "shop-wePay"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _76ca02fd,
=======
			component: _4674020e,
>>>>>>> dev
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
