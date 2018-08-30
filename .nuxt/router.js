import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _3c00c192 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3f6b5e34 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3c772f11 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _a3bdd0ae = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _61677ec9 = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _0c5c991c = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _a30c37be = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _12226006 = () => import('../pages/shop/customAffirmOrder.vue' /* webpackChunkName: "pages/shop/customAffirmOrder" */).then(m => m.default || m)
const _93a5e45a = () => import('../pages/shop/customAffirmOrder/orderInfo.vue' /* webpackChunkName: "pages/shop/customAffirmOrder/orderInfo" */).then(m => m.default || m)
const _991efa8c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _49058b20 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _4b281c50 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _7ef48e75 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _405916cc = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _9371e836 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _0f474de8 = () => import('../pages/profile/components/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/CustomerCard" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _50406616 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _18d4a089 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _f57e7a16 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _40604ca7 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _7a893f61 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _583aa134 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _ebacdfa6 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _460b8b44 = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _0dcd5fff = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _5c8a0461 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _16b34ddb = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _3a1c5475 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _4d063c29 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _4470a5c6 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _94d2028c = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _3bea2aad = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _2e91fd5c = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _dbf17b94 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _172741af = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _3fa34687 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _030b229e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _2f8369d1 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _557fb6e2 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _409bf22e = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _548cd27e = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _24956df4 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _38b3c83b = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _076214d4 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _3f8bb3cd = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _4d0f457c = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _1ffc653c = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _63eac0cf = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
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
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _0d9c6be8 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _74cf0226 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _07f5e8d5 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _7d3225b0 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _67276a44 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _fb7fb894 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _4ea6126e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _d86c869e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _6f362426 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _2deaf1a6 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _f164784a = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _55724e70 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _5a087752 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _dea97e34 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _3f52c2b0 = () => import('../pages/other/activePages/test.vue' /* webpackChunkName: "pages/other/activePages/test" */).then(m => m.default || m)
const _e60742cc = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _54085936 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _be22b4aa = () => import('../pages/profile/components/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/CustomerCard" */).then(m => m.default || m)
const _6c33cc62 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _4dcd0e04 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _a30d1d64 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _0bf90016 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _0179c99e = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _96fe1562 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _496e53b6 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _5df28997 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _3d9ef7a5 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _3cd65a32 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _46b1819f = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _c4aaf7b4 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _32479175 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _1055938e = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _5c59aedc = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _46be3ef1 = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _42927d2a = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _1dea3368 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _68a7e0e0 = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _4a01fe44 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _abd0d830 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _1cd8fe22 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _4d57b156 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _1246dd82 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _47ce77f6 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _8add7c00 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _a9e50c70 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _091bcb8c = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _0fe19fba = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _98f216fe = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _5e294b59 = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
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
<<<<<<< HEAD
			path: "/test",
			component: _3c00c192,
			name: "test"
		},
		{
=======
>>>>>>> dev
			path: "/home",
			component: _69f81487,
			name: "home"
		},
		{
			path: "/profile",
			component: _1b62cf17,
			name: "profile"
		},
		{
			path: "/project/projectDetail",
			component: _f8d87a44,
			name: "project-projectDetail"
		},
		{
			path: "/auth/codeLogin",
			component: _38b3c83b,
			name: "auth-codeLogin"
		},
		{
			path: "/auth/Register",
			component: _076214d4,
			name: "auth-Register"
		},
		{
			path: "/auth/passwordLogin",
			component: _3f8bb3cd,
			name: "auth-passwordLogin"
		},
		{
			path: "/course/category",
			component: _4d0f457c,
			name: "course-category"
		},
		{
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
			path: "/course/detail",
			component: _63eac0cf,
			name: "course-detail"
		},
		{
			path: "/auth/forgotpassword",
			component: _6e9c788f,
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/wePay",
			component: _352f4a07,
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
			component: _d94e95a8,
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/Login",
			component: _36cd71f0,
			name: "auth-Login"
		},
		{
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
		},
		{
<<<<<<< HEAD
			path: "/project/projectDetail",
			component: _3eb1e902,
			name: "project-projectDetail"
		},
		{
			path: "/auth/Login",
			component: _099d1907,
			name: "auth-Login"
		},
		{
			path: "/course/category",
			component: _29e9dadd,
			name: "course-category"
		},
		{
=======
>>>>>>> dev
			path: "/project/projectPlayer",
			component: _c95073e2,
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
					component: _3f6b5e34,
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
					component: _3c772f11,
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
					component: _a3bdd0ae,
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
					component: _61677ec9,
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
					component: _0c5c991c,
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
<<<<<<< HEAD
			path: "/auth/wechatLogin",
			component: _a30c37be,
			name: "auth-wechatLogin"
		},
		{
=======
>>>>>>> dev
			path: "/shop/customAffirmOrder",
			component: _12226006,
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
					component: _93a5e45a,
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
<<<<<<< HEAD
			path: "/auth/codeLogin",
			component: _991efa8c,
			name: "auth-codeLogin"
		},
		{
			path: "/shop/wePay",
			component: _5a331c06,
			name: "shop-wePay"
		},
		{
			path: "/course/detail",
			component: _49058b20,
			name: "course-detail"
=======
			path: "/shop/paypublic",
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
			component: _23d4d1f2,
			name: "shop-payResult"
>>>>>>> dev
		},
		{
			path: "/project/customerProject",
			component: _4b281c50,
			name: "project-customerProject"
		},
		{
<<<<<<< HEAD
			path: "/shop/payResult",
			component: _c2dce71e,
			name: "shop-payResult"
		},
		{
			path: "/shop/paypublic",
			component: _894cd6c6,
			name: "shop-paypublic"
		},
		{
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/Register",
			component: _7ef48e75,
			name: "auth-Register"
		},
		{
			path: "/shop/affirmOrder",
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/passwordLogin",
			component: _405916cc,
			name: "auth-passwordLogin"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _06304427,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/CardProject",
			component: _7262ee22,
			name: "course-components-CardProject"
		},
		{
			path: "/shop/wepay/payType",
			component: _e46c7cce,
			name: "shop-wepay-payType"
		},
		{
			path: "/project/components/CommonProblems",
			component: _2c00292d,
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _f54c7972,
			name: "shop-wepay-qrcode"
=======
			path: "/home/news/info",
			component: _0a084520,
			name: "home-news-info"
		},
		{
			path: "/project/components/CommonProblems",
			component: _0d9c6be8,
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _74cf0226,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _1fec77f2,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/home/components/homecourse",
			component: _e8f8e8ee,
			name: "home-components-homecourse"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _07f5e8d5,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _7d3225b0,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myCourse",
			component: _67276a44,
			name: "profile-pages-myCourse"
		},
		{
			path: "/shop/components/card",
			component: _fb7fb894,
			name: "shop-components-card"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _4ea6126e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/degree",
			component: _15fa173c,
			name: "other-activePages-degree"
		},
		{
			path: "/other/pages/search",
			component: _4a27ebd8,
			name: "other-pages-search"
		},
		{
			path: "/home/teacher/famous",
			component: _6d917602,
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d86c869e,
			name: "profile-pages-myInfo"
>>>>>>> dev
		},
		{
			path: "/profile/pages/mySettings",
			component: _9371e836,
			name: "profile-pages-mySettings"
		},
		{
<<<<<<< HEAD
			path: "/other/activePages/policyProgram",
			component: _29a93f2d,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/home/components/homecourse",
			component: _51f97f88,
			name: "home-components-homecourse"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _38418f93,
			name: "other-activePages-partypolicy"
=======
			path: "/home/teacher/list",
			component: _83b64c36,
			name: "home-teacher-list"
		},
		{
			path: "/course/components/List",
			component: _15a68b89,
			name: "course-components-List"
>>>>>>> dev
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2e6052ac,
			name: "shop-shopCart-allCheck"
		},
		{
<<<<<<< HEAD
			path: "/other/pages/search",
			component: _4af54ed7,
			name: "other-pages-search"
		},
		{
			path: "/profile/components/CustomerCard",
			component: _0f474de8,
			name: "profile-components-CustomerCard"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _c71c7138,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _25e6db98,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/player/player",
			component: _74270200,
			name: "course-player-player"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _7654e646,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _50406616,
			name: "project-components-OfflineDesc"
=======
			path: "/other/activePages/enterprisecustom",
			component: _419a81b0,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/course/components/CardPlayer",
			component: _94515588,
			name: "course-components-CardPlayer"
		},
		{
			path: "/course/player/player",
			component: _7a28407e,
			name: "course-player-player"
		},
		{
			path: "/profile/pages/myOrder",
			component: _f164784a,
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/myCode",
			component: _55724e70,
			name: "profile-pages-myCode"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _5a087752,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/other/activePages/faceteach",
			component: _5e6cd912,
			name: "other-activePages-faceteach"
>>>>>>> dev
		},
		{
			path: "/other/activePages/Institutional",
			component: _107ee504,
			name: "other-activePages-Institutional"
		},
		{
			path: "/course/components/Filter",
			component: _12d320a3,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myProject",
			component: _13e23572,
			name: "profile-pages-myProject"
		},
		{
<<<<<<< HEAD
			path: "/project/components/ShortList",
			component: _a7ceac88,
			name: "project-components-ShortList"
		},
		{
			path: "/course/components/Card",
			component: _0a49987a,
			name: "course-components-Card"
		},
		{
			path: "/home/news/list",
			component: _6b4258e2,
			name: "home-news-list"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _2ef36dd4,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/pages/myCode",
			component: _5872edaf,
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myCourse",
			component: _11c2165d,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _18d4a089,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myOrder",
			component: _373de708,
			name: "profile-pages-myOrder"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _1e02c248,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/news/info",
			component: _f67600c2,
			name: "home-news-info"
		},
		{
			path: "/project/components/Detail",
			component: _c6f44c82,
			name: "project-components-Detail"
		},
		{
			path: "/course/components/List",
			component: _5afc5708,
			name: "course-components-List"
		},
		{
			path: "/course/components/ListCard",
			component: _70e97638,
			name: "course-components-ListCard"
		},
		{
			path: "/shop/components/card",
			component: _f57e7a16,
			name: "shop-components-card"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _69447d16,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/home/teacher/famous",
			component: _f31f1a3a,
			name: "home-teacher-famous"
=======
			path: "/other/activePages/test",
			component: _3f52c2b0,
			name: "other-activePages-test"
		},
		{
			path: "/shop/wepay/payType",
			component: _e60742cc,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _54085936,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _5b88e868,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/CustomerCard",
			component: _be22b4aa,
			name: "profile-components-CustomerCard"
		},
		{
			path: "/profile/pages/myHome",
			component: _6c33cc62,
			name: "profile-pages-myHome"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _3398ff19,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/other/pages/homeUs",
			component: _a57eb0e6,
			name: "other-pages-homeUs"
		},
		{
			path: "/shop/components/banner",
			component: _650f235c,
			name: "shop-components-banner"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _4dcd0e04,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/shop/components/List",
			component: _52657338,
			name: "shop-components-List"
		},
		{
			path: "/project/components/ShortList",
			component: _a9608d06,
			name: "project-components-ShortList"
		},
		{
			path: "/course/components/CardProject",
			component: _a30d1d64,
			name: "course-components-CardProject"
		},
		{
			path: "/course/components/Card",
			component: _7618660a,
			name: "course-components-Card"
>>>>>>> dev
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _d5e0dfd4,
			name: "shop-affirmorder-orderBtn"
		},
		{
<<<<<<< HEAD
			path: "/profile/pages/myHome",
			component: _6f346ba1,
			name: "profile-pages-myHome"
		},
		{
			path: "/course/components/Filter",
			component: _59e40862,
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d26b4820,
			name: "profile-pages-myInfo"
		},
		{
			path: "/shop/components/List",
			component: _4c6434ba,
			name: "shop-components-List"
		},
		{
			path: "/shop/components/banner",
			component: _12ce39d1,
			name: "shop-components-banner"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _662225a5,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/CardPlayer",
			component: _92bf750a,
			name: "course-components-CardPlayer"
		},
		{
			path: "/home/teacher/list",
			component: _62a0c9f4,
			name: "home-teacher-list"
		},
		{
			path: "/other/pages/homeUs",
			component: _a3e3eae8,
			name: "other-pages-homeUs"
		},
		{
			path: "/other/activePages/degree",
			component: _3c13dc21,
			name: "other-activePages-degree"
		},
		{
			path: "/other/activePages/faceteach",
			component: _66b564f3,
			name: "other-activePages-faceteach"
		},
		{
			path: "/profile/pages/myTicket",
			component: _0c527e64,
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/components/common/Detail",
			component: _40604ca7,
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _7a893f61,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/common/Card",
			component: _583aa134,
			name: "profile-components-common-Card"
=======
			path: "/home/news/list",
			component: _4fa21910,
			name: "home-news-list"
		},
		{
			path: "/course/components/ListCard",
			component: _ab18fb8e,
			name: "course-components-ListCard"
		},
		{
			path: "/project/components/Detail",
			component: _0179c99e,
			name: "project-components-Detail"
		},
		{
			path: "/profile/pages/myTicket",
			component: _96fe1562,
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _496e53b6,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _5df28997,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
			component: _3d9ef7a5,
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/Card",
			component: _3cd65a32,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/common/search",
			component: _46b1819f,
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _c4aaf7b4,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/home/news/components/List",
			component: _bce543d6,
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/common/List",
			component: _32479175,
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _1055938e,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _5c59aedc,
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/myticket/ticketRules",
			component: _46be3ef1,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _42927d2a,
			name: "profile-components-mysetting-setPersonal"
>>>>>>> dev
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _ebacdfa6,
			name: "profile-components-mysetting-updatePassword"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/common/search",
			component: _460b8b44,
			name: "profile-components-common-search"
=======
			path: "/profile/components/common/ListTab",
			component: _68a7e0e0,
			name: "profile-components-common-ListTab"
>>>>>>> dev
		},
		{
			path: "/profile/components/common/CardTab",
			component: _0dcd5fff,
			name: "profile-components-common-CardTab"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/myticket/statusPopup",
			component: _5c8a0461,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _16b34ddb,
			name: "profile-components-myticket-ticketConfirm"
=======
			path: "/profile/components/common/Detail",
			component: _abd0d830,
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _1cd8fe22,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/home/news/components/Info",
			component: _5bf38a25,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _4d57b156,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _1246dd82,
			name: "profile-components-mycode-Conversion"
>>>>>>> dev
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _3a1c5475,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _8add7c00,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _4d063c29,
			name: "profile-components-myticket-ticketOrder"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/mysetting/showPersonal",
			component: _4470a5c6,
			name: "profile-components-mysetting-showPersonal"
		},
		{
=======
>>>>>>> dev
			path: "/home/teacher/components/Card",
			component: _7e91305e,
			name: "home-teacher-components-Card"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/common/noMsg",
			component: _94d2028c,
			name: "profile-components-common-noMsg"
		},
		{
=======
>>>>>>> dev
			path: "/profile/components/mycode/BindIng",
			component: _3bea2aad,
			name: "profile-components-mycode-BindIng"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/myticket/ticketRules",
			component: _2e91fd5c,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _dbf17b94,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/home/news/components/Info",
			component: _1200cb74,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _172741af,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _3fa34687,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _030b229e,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _2f8369d1,
			name: "profile-components-myorder-OrderList"
=======
			path: "/profile/components/myticket/ticketConfirm",
			component: _0fe19fba,
			name: "profile-components-myticket-ticketConfirm"
>>>>>>> dev
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _557fb6e2,
			name: "profile-components-myticket-detailPopup"
		},
		{
<<<<<<< HEAD
			path: "/profile/components/mysetting/setPersonal",
			component: _409bf22e,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _548cd27e,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/common/List",
			component: _24956df4,
			name: "profile-components-common-List"
		},
		{
			path: "/home/news/components/List",
			component: _3c996e36,
			name: "home-news-components-List"
=======
			path: "/profile/components/common/noMsg",
			component: _5e294b59,
			name: "profile-components-common-noMsg"
>>>>>>> dev
		},
		{
			path: "/home/teacher/:Info?",
			component: _66b4c8f5,
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
			component: _9d1f8974,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _135bb60f,
			name: "home-news-detail"
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
