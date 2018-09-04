import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _405916cc = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _49058b20 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _7ef48e75 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _991efa8c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _a30c37be = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3f6b5e34 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3c772f11 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _a3bdd0ae = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _61677ec9 = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _0c5c991c = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _12226006 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _93a5e45a = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _4b281c50 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _50406616 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _9371e836 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _18d4a089 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _f57e7a16 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _25ac6a27 = () => import('../pages/other/activePages/test.vue' /* webpackChunkName: "pages/other/activePages/test" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _5c8a0461 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _172741af = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _409bf22e = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _3fa34687 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _24956df4 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _94d2028c = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _548cd27e = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _0dcd5fff = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _3bea2aad = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _16b34ddb = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _40604ca7 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _4470a5c6 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _460b8b44 = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _583aa134 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _557fb6e2 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _2f8369d1 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _3a1c5475 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _7a793764 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _4d063c29 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _030b229e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _dbf17b94 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _7a893f61 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _ebacdfa6 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _2e91fd5c = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
<<<<<<< HEAD
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _3f8bb3cd = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _38b3c83b = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _1ffc653c = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3004aa5a = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3bae3ed2 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _17d85eea = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _6f19a24a = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _3541d7c6 = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _6666d6f2 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _1fe45514 = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _34771022 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _5df28997 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _6f362426 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _3f52c2b0 = () => import('../pages/other/activePages/test.vue' /* webpackChunkName: "pages/other/activePages/test" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _8add7c00 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _1055938e = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _42927d2a = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _c4aaf7b4 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _32479175 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _5e294b59 = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _1246dd82 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _4a01fe44 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _091bcb8c = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _0fe19fba = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _abd0d830 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _3d9ef7a5 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _46b1819f = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _3cd65a32 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _98f216fe = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _5c59aedc = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _47ce77f6 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _70576c36 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _a9e50c70 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _68a7e0e0 = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _4d57b156 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _1cd8fe22 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
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
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
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
			path: "/home",
<<<<<<< HEAD
			component: _69f81487,
=======
<<<<<<< HEAD
			component: _44f44288,
=======
			component: _f17393ea,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _1b62cf17,
=======
<<<<<<< HEAD
			component: _b85f5514,
=======
			component: _62910f13,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _3eb1e902,
=======
<<<<<<< HEAD
			component: _f8d87a44,
=======
			component: _36f8e10a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-projectDetail"
		},
		{
			path: "/auth/passwordLogin",
<<<<<<< HEAD
			component: _405916cc,
=======
<<<<<<< HEAD
			component: _3f8bb3cd,
=======
			component: _753f7450,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "auth-passwordLogin"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _29e9dadd,
=======
<<<<<<< HEAD
			component: _4d0f457c,
=======
			component: _5e880bd9,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-category"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ce5ad8ea,
=======
<<<<<<< HEAD
			component: _7ff396aa,
=======
			component: _00b7e687,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _a8484b50,
=======
<<<<<<< HEAD
					component: _15932199,
=======
					component: _60fe40dc,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _7f289295,
=======
<<<<<<< HEAD
					component: _582b0d96,
=======
					component: _754b6819,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _7a84165a,
=======
<<<<<<< HEAD
					component: _47b5b739,
=======
					component: _69ae8056,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _7bdc4d44,
=======
<<<<<<< HEAD
					component: _2bc9209f,
=======
					component: _77343fe2,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/course/detail",
<<<<<<< HEAD
			component: _49058b20,
=======
<<<<<<< HEAD
			component: _63eac0cf,
=======
			component: _22ab7a6c,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-detail"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _7ef48e75,
=======
<<<<<<< HEAD
			component: _076214d4,
=======
			component: _73ba631e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "auth-Register"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/codeLogin",
			component: _991efa8c,
=======
<<<<<<< HEAD
			component: _12809810,
=======
			component: _145fb93b,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotPassword",
			component: _0da7c6e8,
			name: "auth-forgotPassword"
		},
		{
			path: "/auth/codeLogin",
<<<<<<< HEAD
			component: _38b3c83b,
=======
			component: _520a423e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "auth-codeLogin"
		},
		{
			path: "/shop/wePay",
<<<<<<< HEAD
			component: _5a331c06,
=======
<<<<<<< HEAD
			component: _352f4a07,
=======
			component: _77813d8a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _d94e95a8,
=======
<<<<<<< HEAD
			component: _fa6417ea,
=======
			component: _192e9728,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/wechatLogin",
<<<<<<< HEAD
			component: _a30c37be,
=======
<<<<<<< HEAD
			component: _1ffc653c,
=======
			component: _0da1d2a5,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "auth-wechatLogin"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _099d1907,
=======
<<<<<<< HEAD
			component: _36cd71f0,
=======
			component: _26eb3a8b,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "auth-Login"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _c95073e2,
=======
<<<<<<< HEAD
			component: _3e447d6e,
=======
			component: _c1976bea,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
<<<<<<< HEAD
					component: _3f6b5e34,
=======
<<<<<<< HEAD
					component: _3004aa5a,
=======
					component: _8e3fd1a0,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
<<<<<<< HEAD
					component: _3c772f11,
=======
<<<<<<< HEAD
					component: _3bae3ed2,
=======
					component: _368d10d6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
<<<<<<< HEAD
					component: _a3bdd0ae,
=======
<<<<<<< HEAD
					component: _17d85eea,
=======
					component: _63437e2d,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
<<<<<<< HEAD
					component: _61677ec9,
=======
<<<<<<< HEAD
					component: _6f19a24a,
=======
					component: _0239b64d,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
<<<<<<< HEAD
					component: _0c5c991c,
=======
<<<<<<< HEAD
					component: _3541d7c6,
=======
					component: _027f6ea0,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/shop/customAffirmOrder",
<<<<<<< HEAD
			component: _12226006,
=======
<<<<<<< HEAD
			component: _6666d6f2,
=======
			component: _ec5348ec,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
<<<<<<< HEAD
					component: _93a5e45a,
=======
<<<<<<< HEAD
					component: _1fe45514,
=======
					component: _6b4f7457,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _894cd6c6,
=======
<<<<<<< HEAD
			component: _409cda1e,
=======
			component: _59f35421,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
<<<<<<< HEAD
			component: _c2dce71e,
=======
<<<<<<< HEAD
			component: _23d4d1f2,
=======
			component: _3d2b4bf5,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-payResult"
		},
		{
			path: "/project/customerProject",
<<<<<<< HEAD
			component: _4b281c50,
=======
<<<<<<< HEAD
			component: _34771022,
=======
			component: _6c18dd68,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-customerProject"
		},
		{
			path: "/project/components/OfflineDesc",
<<<<<<< HEAD
			component: _50406616,
=======
<<<<<<< HEAD
			component: _5df28997,
=======
			component: _1ddac4cc,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _2c00292d,
=======
<<<<<<< HEAD
			component: _0d9c6be8,
=======
			component: _1b2a9329,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _f54c7972,
=======
<<<<<<< HEAD
			component: _74cf0226,
=======
			component: _0b2fa543,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _62a0c9f4,
=======
<<<<<<< HEAD
			component: _83b64c36,
=======
			component: _54857d02,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-teacher-list"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _c6f44c82,
=======
<<<<<<< HEAD
			component: _0179c99e,
=======
			component: _d370008a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-Detail"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _6b4258e2,
=======
<<<<<<< HEAD
			component: _4fa21910,
=======
			component: _68f89313,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-news-list"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _11c2165d,
=======
<<<<<<< HEAD
			component: _67276a44,
=======
			component: _ed13dc3e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _13e23572,
=======
<<<<<<< HEAD
			component: _dea97e34,
=======
			component: _74da5a43,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _2ef36dd4,
=======
<<<<<<< HEAD
			component: _07f5e8d5,
=======
			component: _25164358,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _3c13dc21,
=======
<<<<<<< HEAD
			component: _15fa173c,
=======
			component: _d291f2b6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/mySettings",
<<<<<<< HEAD
			component: _9371e836,
=======
<<<<<<< HEAD
			component: _6f362426,
=======
			component: _10ea3669,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-mySettings"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _51f97f88,
=======
<<<<<<< HEAD
			component: _e8f8e8ee,
=======
			component: _df07cde8,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-components-homecourse"
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _c71c7138,
=======
<<<<<<< HEAD
			component: _54085936,
=======
			component: _4a173e30,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _59e40862,
=======
<<<<<<< HEAD
			component: _12d320a3,
=======
			component: _96f19a34,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCustomerProject",
<<<<<<< HEAD
			component: _18d4a089,
=======
<<<<<<< HEAD
			component: _7d3225b0,
=======
			component: _db6d4cf6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/shop/components/card",
<<<<<<< HEAD
			component: _f57e7a16,
=======
<<<<<<< HEAD
			component: _fb7fb894,
=======
			component: _1a05cf79,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-components-card"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _69447d16,
=======
<<<<<<< HEAD
			component: _5a087752,
=======
			component: _1e66e39a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _7654e646,
=======
<<<<<<< HEAD
			component: _496e53b6,
=======
			component: _70170c42,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _92bf750a,
=======
<<<<<<< HEAD
			component: _94515588,
=======
			component: _5ee28dff,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2e6052ac,
=======
<<<<<<< HEAD
			component: _2deaf1a6,
=======
			component: _b3d763a0,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a7ceac88,
=======
<<<<<<< HEAD
			component: _a9608d06,
=======
			component: _545af240,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "project-components-ShortList"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _d5e0dfd4,
=======
<<<<<<< HEAD
			component: _0bf90016,
=======
			component: _e25c93dc,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a3e3eae8,
=======
<<<<<<< HEAD
			component: _a57eb0e6,
=======
			component: _3a172fe0,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _0a49987a,
=======
<<<<<<< HEAD
			component: _7618660a,
=======
			component: _fc04d804,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _0c527e64,
=======
<<<<<<< HEAD
			component: _96fe1562,
=======
			component: _718abc52,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _373de708,
=======
<<<<<<< HEAD
			component: _f164784a,
=======
			component: _2f84df10,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _06304427,
=======
<<<<<<< HEAD
			component: _419a81b0,
=======
			component: _0759ccaa,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4af54ed7,
=======
<<<<<<< HEAD
			component: _4a27ebd8,
=======
			component: _7fdbac5b,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-pages-search"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _1e02c248,
=======
<<<<<<< HEAD
			component: _4ea6126e,
=======
			component: _d4928468,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _66b564f3,
=======
<<<<<<< HEAD
			component: _5e6cd912,
=======
			component: _0ef40822,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _29a93f2d,
=======
<<<<<<< HEAD
			component: _5b88e868,
=======
			component: _b9c40fae,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-policyProgram"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e46c7cce,
=======
<<<<<<< HEAD
			component: _e60742cc,
=======
			component: _7a9fc1c6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _662225a5,
=======
<<<<<<< HEAD
			component: _4dcd0e04,
=======
			component: _73ae24be,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _70e97638,
=======
<<<<<<< HEAD
			component: _ab18fb8e,
=======
			component: _a127e088,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _f31f1a3a,
=======
<<<<<<< HEAD
			component: _6d917602,
=======
			component: _23547442,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _6f346ba1,
=======
<<<<<<< HEAD
			component: _6c33cc62,
=======
			component: _03f97825,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myHome"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _f67600c2,
=======
<<<<<<< HEAD
			component: _0a084520,
=======
			component: _235ebf23,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-news-info"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _4c6434ba,
=======
<<<<<<< HEAD
			component: _52657338,
=======
			component: _6e92f227,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _25e6db98,
=======
<<<<<<< HEAD
			component: _3398ff19,
=======
			component: _728dd9c8,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _7262ee22,
=======
<<<<<<< HEAD
			component: _a30d1d64,
=======
			component: _26d550eb,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-CardProject"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _5872edaf,
=======
<<<<<<< HEAD
			component: _55724e70,
=======
			component: _25900b9a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _d26b4820,
=======
<<<<<<< HEAD
			component: _d86c869e,
=======
			component: _2b8f6874,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-pages-myInfo"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _38418f93,
=======
<<<<<<< HEAD
			component: _1fec77f2,
=======
			component: _cf6f50e2,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-partypolicy"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _5afc5708,
=======
<<<<<<< HEAD
			component: _15a68b89,
=======
			component: _5a9f5ae8,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-components-List"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _12ce39d1,
=======
<<<<<<< HEAD
			component: _650f235c,
=======
			component: _eafb9556,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/test",
<<<<<<< HEAD
			component: _25ac6a27,
=======
<<<<<<< HEAD
			component: _3f52c2b0,
=======
			component: _c53f34aa,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-test"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _74270200,
=======
<<<<<<< HEAD
			component: _7a28407e,
=======
			component: _5ab18b84,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-player-player"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _107ee504,
=======
<<<<<<< HEAD
			component: _bf5a4bc6,
=======
			component: _7135467a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/myticket/statusPopup",
<<<<<<< HEAD
			component: _5c8a0461,
=======
<<<<<<< HEAD
			component: _8add7c00,
=======
			component: _4524015d,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
<<<<<<< HEAD
			component: _172741af,
=======
<<<<<<< HEAD
			component: _1055938e,
=======
			component: _4135efab,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _3c996e36,
=======
<<<<<<< HEAD
			component: _bce543d6,
=======
			component: _365b9432,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
<<<<<<< HEAD
			component: _409bf22e,
=======
<<<<<<< HEAD
			component: _42927d2a,
=======
			component: _0a57a96d,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
<<<<<<< HEAD
			component: _3fa34687,
=======
<<<<<<< HEAD
			component: _c4aaf7b4,
=======
			component: _283d4383,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/common/List",
<<<<<<< HEAD
			component: _24956df4,
=======
<<<<<<< HEAD
			component: _32479175,
=======
			component: _7530b510,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/common/noMsg",
<<<<<<< HEAD
			component: _94d2028c,
=======
<<<<<<< HEAD
			component: _5e294b59,
=======
			component: _2f0bb7b6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/mycode/Conversion",
<<<<<<< HEAD
			component: _548cd27e,
=======
<<<<<<< HEAD
			component: _1246dd82,
=======
			component: _4d505702,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/common/CardTab",
<<<<<<< HEAD
			component: _0dcd5fff,
=======
<<<<<<< HEAD
			component: _4a01fe44,
=======
			component: _06106c0a,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mycode/BindIng",
<<<<<<< HEAD
			component: _3bea2aad,
=======
<<<<<<< HEAD
			component: _091bcb8c,
=======
			component: _2b1494a9,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
<<<<<<< HEAD
			component: _16b34ddb,
=======
<<<<<<< HEAD
			component: _0fe19fba,
=======
			component: _40c1fbd7,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/common/Detail",
<<<<<<< HEAD
			component: _40604ca7,
=======
<<<<<<< HEAD
			component: _abd0d830,
=======
			component: _14fa99aa,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
<<<<<<< HEAD
			component: _4470a5c6,
=======
<<<<<<< HEAD
			component: _3d9ef7a5,
=======
			component: _6e7f53c2,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/search",
<<<<<<< HEAD
			component: _460b8b44,
=======
<<<<<<< HEAD
			component: _46b1819f,
=======
			component: _dbc6be3c,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/common/Card",
<<<<<<< HEAD
			component: _583aa134,
=======
<<<<<<< HEAD
			component: _3cd65a32,
=======
			component: _74b4e6ea,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/detailPopup",
<<<<<<< HEAD
			component: _557fb6e2,
=======
<<<<<<< HEAD
			component: _98f216fe,
=======
			component: _3e19b3de,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _7e91305e,
=======
<<<<<<< HEAD
			component: _802310dc,
=======
			component: _68f9b055,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/myorder/OrderList",
<<<<<<< HEAD
			component: _2f8369d1,
=======
<<<<<<< HEAD
			component: _5c59aedc,
=======
			component: _2846ee55,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/myinfo/Info",
<<<<<<< HEAD
			component: _3a1c5475,
=======
<<<<<<< HEAD
			component: _47ce77f6,
=======
			component: _4a22e80e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/common/CustomerCard",
<<<<<<< HEAD
			component: _7a793764,
=======
<<<<<<< HEAD
			component: _70576c36,
=======
			component: _506daae8,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
<<<<<<< HEAD
			component: _4d063c29,
=======
<<<<<<< HEAD
			component: _a9e50c70,
=======
			component: _35a03925,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _1200cb74,
=======
<<<<<<< HEAD
			component: _5bf38a25,
=======
			component: _1e7c7f7c,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/common/ListTab",
<<<<<<< HEAD
			component: _030b229e,
=======
<<<<<<< HEAD
			component: _68a7e0e0,
=======
			component: _24b64ea6,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myorder/DataPick",
<<<<<<< HEAD
			component: _dbf17b94,
=======
<<<<<<< HEAD
			component: _4d57b156,
=======
			component: _603f1d32,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/invitation",
<<<<<<< HEAD
			component: _7a893f61,
=======
<<<<<<< HEAD
			component: _1cd8fe22,
=======
			component: _734cc3e5,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
<<<<<<< HEAD
			component: _ebacdfa6,
=======
<<<<<<< HEAD
			component: _1dea3368,
=======
			component: _6b44af29,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/ticketRules",
<<<<<<< HEAD
			component: _2e91fd5c,
=======
<<<<<<< HEAD
			component: _46be3ef1,
=======
			component: _5d5e0364,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _66b4c8f5,
=======
<<<<<<< HEAD
			component: _65e765f6,
=======
			component: _c8c9b30e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _9d1f8974,
=======
<<<<<<< HEAD
			component: _4c0c96e5,
=======
			component: _303bb042,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _135bb60f,
=======
<<<<<<< HEAD
			component: _02d0f4ee,
=======
			component: _cd9ccfea,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "home-news-detail"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _76ca02fd,
=======
<<<<<<< HEAD
			component: _84114f48,
=======
			component: _4674020e,
>>>>>>> 9c986699ec6b259df23dec046f79519edaef4641
>>>>>>> dev
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
