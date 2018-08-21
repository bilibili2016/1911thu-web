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
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _bebb874e = () => import('../pages/profile/personalSet/setPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/setPersonal" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _bcf1c354 = () => import('../pages/profile/personalSet/showPersonal.vue' /* webpackChunkName: "pages/profile/personalSet/showPersonal" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _0085e558 = () => import('../pages/profile/components/BindIng.vue' /* webpackChunkName: "pages/profile/components/BindIng" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _b99b2138 = () => import('../pages/profile/ticket/detailPopup.vue' /* webpackChunkName: "pages/profile/ticket/detailPopup" */).then(m => m.default || m)
const _6f85133b = () => import('../pages/profile/components/List.vue' /* webpackChunkName: "pages/profile/components/List" */).then(m => m.default || m)
const _29eb3f4b = () => import('../pages/profile/components/Info.vue' /* webpackChunkName: "pages/profile/components/Info" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _e55401ee = () => import('../pages/profile/ticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/ticket/ticketPopup" */).then(m => m.default || m)
const _7acc2446 = () => import('../pages/profile/ticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/ticket/ticketConfirm" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _e40887a4 = () => import('../pages/profile/components/Detail.vue' /* webpackChunkName: "pages/profile/components/Detail" */).then(m => m.default || m)
const _0773ca26 = () => import('../pages/project/components/CourseList.vue' /* webpackChunkName: "pages/project/components/CourseList" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4e3f0dbf = () => import('../pages/profile/components/OrderList.vue' /* webpackChunkName: "pages/profile/components/OrderList" */).then(m => m.default || m)
const _1a9a0bce = () => import('../pages/profile/pages/noMsg.vue' /* webpackChunkName: "pages/profile/pages/noMsg" */).then(m => m.default || m)
const _ab86863a = () => import('../pages/profile/ticket/statusPopup.vue' /* webpackChunkName: "pages/profile/ticket/statusPopup" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _4a26d81a = () => import('../pages/profile/components/Conversion.vue' /* webpackChunkName: "pages/profile/components/Conversion" */).then(m => m.default || m)
const _79e43c9e = () => import('../pages/profile/ticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/ticket/ticketHistory" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _3669b9d4 = () => import('../pages/profile/ticket/ticketRules.vue' /* webpackChunkName: "pages/profile/ticket/ticketRules" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _08f7b686 = () => import('../pages/profile/personalSet/updatePassword.vue' /* webpackChunkName: "pages/profile/personalSet/updatePassword" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _3bfd2470 = () => import('../pages/profile/components/TabSingle.vue' /* webpackChunkName: "pages/profile/components/TabSingle" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _224b2ad6 = () => import('../pages/profile/components/BindId.vue' /* webpackChunkName: "pages/profile/components/BindId" */).then(m => m.default || m)
const _ca8e16aa = () => import('../pages/profile/ticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/ticket/ticketOrder" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _dcb564ce = () => import('../pages/profile/personalSet/personalSet.vue' /* webpackChunkName: "pages/profile/personalSet/personalSet" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _1ed254ad = () => import('../pages/profile/components/Card.vue' /* webpackChunkName: "pages/profile/components/Card" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _b43289b6 = () => import('../pages/shop/result/_payResult.vue' /* webpackChunkName: "pages/shop/result/_payResult" */).then(m => m.default || m)
const _583c6f84 = () => import('../pages/shop/_wePay.vue' /* webpackChunkName: "pages/shop/_wePay" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
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
			component: _b85f5514,
>>>>>>> dev
			name: "profile"
		},
		{
			path: "/home",
<<<<<<< HEAD
			component: _69f81487,
=======
			component: _44f44288,
>>>>>>> dev
			name: "home"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _894cd6c6,
=======
			component: _409cda1e,
>>>>>>> dev
			name: "shop-paypublic"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _29e9dadd,
=======
			component: _4d0f457c,
>>>>>>> dev
			name: "course-category"
		},
		{
			path: "/course/detail",
<<<<<<< HEAD
			component: _49058b20,
=======
			component: _63eac0cf,
>>>>>>> dev
			name: "course-detail"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _95906a92,
=======
			component: _12809810,
>>>>>>> dev
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotpassword",
<<<<<<< HEAD
			component: _f1091520,
=======
			component: _6e9c788f,
>>>>>>> dev
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _d94e95a8,
=======
			component: _fa6417ea,
>>>>>>> dev
			name: "shop-shoppingcart"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _c95073e2,
=======
			component: _3e447d6e,
>>>>>>> dev
			name: "project-projectPlayer"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _099d1907,
=======
			component: _36cd71f0,
>>>>>>> dev
			name: "auth-Login"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _7ef48e75,
=======
			component: _076214d4,
>>>>>>> dev
			name: "auth-Register"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _3eb1e902,
=======
			component: _f8d87a44,
>>>>>>> dev
			name: "project-projectDetail"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ce5ad8ea,
=======
			component: _7ff396aa,
>>>>>>> dev
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _a8484b50,
=======
					component: _15932199,
>>>>>>> dev
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _7f289295,
=======
					component: _582b0d96,
>>>>>>> dev
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _7a84165a,
=======
					component: _47b5b739,
>>>>>>> dev
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _7bdc4d44,
=======
					component: _2bc9209f,
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
			component: _54085936,
>>>>>>> dev
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/profile/personalSet/setPersonal",
<<<<<<< HEAD
			component: _0fe0208c,
=======
			component: _bebb874e,
>>>>>>> dev
			name: "profile-personalSet-setPersonal"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _f54c7972,
=======
			component: _74cf0226,
>>>>>>> dev
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _13e23572,
=======
			component: _dea97e34,
>>>>>>> dev
			name: "profile-pages-myProject"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _59e40862,
=======
			component: _12d320a3,
>>>>>>> dev
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _d26b4820,
=======
			component: _d86c869e,
>>>>>>> dev
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/personalSet/showPersonal",
<<<<<<< HEAD
			component: _37cfd715,
=======
			component: _bcf1c354,
>>>>>>> dev
			name: "profile-personalSet-showPersonal"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _c6f44c82,
=======
			component: _0179c99e,
>>>>>>> dev
			name: "project-components-Detail"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _6f346ba1,
=======
			component: _6c33cc62,
>>>>>>> dev
			name: "profile-pages-myHome"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _7654e646,
=======
			component: _496e53b6,
>>>>>>> dev
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _0a49987a,
=======
			component: _7618660a,
>>>>>>> dev
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _11c2165d,
=======
			component: _67276a44,
>>>>>>> dev
			name: "profile-pages-myCourse"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _74270200,
=======
			component: _7a28407e,
>>>>>>> dev
			name: "course-player-player"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _4c6434ba,
=======
			component: _52657338,
>>>>>>> dev
			name: "shop-components-List"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _70e97638,
=======
			component: _ab18fb8e,
>>>>>>> dev
			name: "course-components-ListCard"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _f67600c2,
=======
			component: _0a084520,
>>>>>>> dev
			name: "home-news-info"
		},
		{
			path: "/profile/components/BindIng",
<<<<<<< HEAD
			component: _72084d52,
=======
			component: _0085e558,
>>>>>>> dev
			name: "profile-components-BindIng"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _69447d16,
=======
			component: _5a087752,
>>>>>>> dev
			name: "project-components-ProjectCourse"
		},
		{
			path: "/profile/ticket/detailPopup",
<<<<<<< HEAD
			component: _69a86363,
=======
			component: _b99b2138,
>>>>>>> dev
			name: "profile-ticket-detailPopup"
		},
		{
			path: "/profile/components/List",
<<<<<<< HEAD
			component: _562e90c8,
=======
			component: _6f85133b,
>>>>>>> dev
			name: "profile-components-List"
		},
		{
			path: "/profile/components/Info",
<<<<<<< HEAD
			component: _e16238a8,
=======
			component: _29eb3f4b,
>>>>>>> dev
			name: "profile-components-Info"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _d5e0dfd4,
=======
			component: _0bf90016,
>>>>>>> dev
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _25e6db98,
=======
			component: _3398ff19,
>>>>>>> dev
			name: "other-activePages-userProtocol"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _1e02c248,
=======
			component: _4ea6126e,
>>>>>>> dev
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/profile/ticket/ticketPopup",
<<<<<<< HEAD
			component: _53cbf308,
=======
			component: _e55401ee,
>>>>>>> dev
			name: "profile-ticket-ticketPopup"
		},
		{
			path: "/profile/ticket/ticketConfirm",
<<<<<<< HEAD
			component: _793a43c8,
=======
			component: _7acc2446,
>>>>>>> dev
			name: "profile-ticket-ticketConfirm"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _38418f93,
=======
			component: _1fec77f2,
>>>>>>> dev
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _107ee504,
=======
			component: _bf5a4bc6,
>>>>>>> dev
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _5872edaf,
=======
			component: _55724e70,
>>>>>>> dev
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/components/Detail",
<<<<<<< HEAD
			component: _2907cc4f,
=======
			component: _e40887a4,
>>>>>>> dev
			name: "profile-components-Detail"
		},
		{
			path: "/project/components/CourseList",
<<<<<<< HEAD
			component: _1fc8e1c7,
=======
			component: _0773ca26,
>>>>>>> dev
			name: "project-components-CourseList"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _29a93f2d,
=======
			component: _5b88e868,
>>>>>>> dev
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/OrderList",
<<<<<<< HEAD
			component: _4f07fdfe,
=======
			component: _4e3f0dbf,
>>>>>>> dev
			name: "profile-components-OrderList"
		},
		{
			path: "/profile/pages/noMsg",
<<<<<<< HEAD
			component: _0b91f6fa,
=======
			component: _1a9a0bce,
>>>>>>> dev
			name: "profile-pages-noMsg"
		},
		{
			path: "/profile/ticket/statusPopup",
<<<<<<< HEAD
			component: _70b2b0e2,
=======
			component: _ab86863a,
>>>>>>> dev
			name: "profile-ticket-statusPopup"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _6af646e2,
=======
			component: _f9181660,
>>>>>>> dev
			name: "profile-pages-invitation"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _f31f1a3a,
=======
			component: _6d917602,
>>>>>>> dev
			name: "home-teacher-famous"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a7ceac88,
=======
			component: _a9608d06,
>>>>>>> dev
			name: "project-components-ShortList"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _66b564f3,
=======
			component: _5e6cd912,
>>>>>>> dev
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _3c13dc21,
=======
			component: _15fa173c,
>>>>>>> dev
			name: "other-activePages-degree"
		},
		{
			path: "/profile/components/Conversion",
<<<<<<< HEAD
			component: _197ca8d8,
=======
			component: _4a26d81a,
>>>>>>> dev
			name: "profile-components-Conversion"
		},
		{
			path: "/profile/ticket/ticketHistory",
<<<<<<< HEAD
			component: _78525c20,
=======
			component: _79e43c9e,
>>>>>>> dev
			name: "profile-ticket-ticketHistory"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _373de708,
=======
			component: _f164784a,
>>>>>>> dev
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/ticket/ticketRules",
<<<<<<< HEAD
			component: _0640a45a,
=======
			component: _3669b9d4,
>>>>>>> dev
			name: "profile-ticket-ticketRules"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2e6052ac,
=======
			component: _2deaf1a6,
>>>>>>> dev
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/profile/personalSet/updatePassword",
<<<<<<< HEAD
			component: _2281a9bc,
=======
			component: _08f7b686,
>>>>>>> dev
			name: "profile-personalSet-updatePassword"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _92bf750a,
=======
			component: _94515588,
>>>>>>> dev
			name: "course-components-CardPlayer"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _7262ee22,
=======
			component: _a30d1d64,
>>>>>>> dev
			name: "course-components-CardProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _2ef36dd4,
=======
			component: _07f5e8d5,
>>>>>>> dev
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _51f97f88,
=======
			component: _e8f8e8ee,
>>>>>>> dev
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _0c527e64,
=======
			component: _96fe1562,
>>>>>>> dev
			name: "profile-pages-myTicket"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _2c00292d,
=======
			component: _0d9c6be8,
>>>>>>> dev
			name: "project-components-CommonProblems"
		},
		{
			path: "/profile/components/TabSingle",
<<<<<<< HEAD
			component: _3cc614af,
=======
			component: _3bfd2470,
>>>>>>> dev
			name: "profile-components-TabSingle"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a3e3eae8,
=======
			component: _a57eb0e6,
>>>>>>> dev
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _5afc5708,
=======
			component: _15a68b89,
>>>>>>> dev
			name: "course-components-List"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _6b4258e2,
=======
			component: _4fa21910,
>>>>>>> dev
			name: "home-news-list"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _71d6bfa2,
=======
			component: _fff88f20,
>>>>>>> dev
			name: "profile-pages-courselist"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4af54ed7,
=======
			component: _4a27ebd8,
>>>>>>> dev
			name: "other-pages-search"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _12ce39d1,
=======
			component: _650f235c,
>>>>>>> dev
			name: "shop-components-banner"
		},
		{
			path: "/profile/components/BindId",
<<<<<<< HEAD
			component: _ec330a94,
=======
			component: _224b2ad6,
>>>>>>> dev
			name: "profile-components-BindId"
		},
		{
			path: "/profile/ticket/ticketOrder",
<<<<<<< HEAD
			component: _612ee8aa,
=======
			component: _ca8e16aa,
>>>>>>> dev
			name: "profile-ticket-ticketOrder"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e46c7cce,
=======
			component: _e60742cc,
>>>>>>> dev
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/personalSet/personalSet",
<<<<<<< HEAD
			component: _2dd9fe0c,
=======
			component: _dcb564ce,
>>>>>>> dev
			name: "profile-personalSet-personalSet"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _662225a5,
=======
			component: _4dcd0e04,
>>>>>>> dev
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/profile/components/Card",
<<<<<<< HEAD
			component: _f7940de4,
=======
			component: _1ed254ad,
>>>>>>> dev
			name: "profile-components-Card"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _62a0c9f4,
=======
			component: _83b64c36,
>>>>>>> dev
			name: "home-teacher-list"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _06304427,
=======
			component: _419a81b0,
>>>>>>> dev
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _3c996e36,
=======
			component: _bce543d6,
>>>>>>> dev
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _1200cb74,
=======
			component: _5bf38a25,
>>>>>>> dev
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _7e91305e,
=======
			component: _802310dc,
>>>>>>> dev
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _135bb60f,
=======
			component: _02d0f4ee,
>>>>>>> dev
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _9d1f8974,
=======
			component: _4c0c96e5,
>>>>>>> dev
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _66b4c8f5,
=======
			component: _65e765f6,
>>>>>>> dev
			name: "home-teacher-Info"
		},
		{
			path: "/shop/result/:payResult?",
<<<<<<< HEAD
			component: _2986f2b8,
=======
			component: _b43289b6,
>>>>>>> dev
			name: "shop-result-payResult"
		},
		{
			path: "/shop/:wePay?",
<<<<<<< HEAD
			component: _4f58361f,
=======
			component: _583c6f84,
>>>>>>> dev
			name: "shop-wePay"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _76ca02fd,
=======
			component: _84114f48,
>>>>>>> dev
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
