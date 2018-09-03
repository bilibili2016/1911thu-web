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
			component: _69f81487,
=======
			component: _f17393ea,
>>>>>>> origin/liyr
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _1b62cf17,
=======
			component: _62910f13,
>>>>>>> origin/liyr
			name: "profile"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _3eb1e902,
=======
			component: _36f8e10a,
>>>>>>> origin/liyr
			name: "project-projectDetail"
		},
		{
			path: "/auth/passwordLogin",
<<<<<<< HEAD
			component: _405916cc,
=======
			component: _753f7450,
>>>>>>> origin/liyr
			name: "auth-passwordLogin"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _29e9dadd,
=======
			component: _5e880bd9,
>>>>>>> origin/liyr
			name: "course-category"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ce5ad8ea,
=======
			component: _00b7e687,
>>>>>>> origin/liyr
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _a8484b50,
=======
					component: _60fe40dc,
>>>>>>> origin/liyr
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _7f289295,
=======
					component: _754b6819,
>>>>>>> origin/liyr
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _7a84165a,
=======
					component: _69ae8056,
>>>>>>> origin/liyr
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _7bdc4d44,
=======
					component: _77343fe2,
>>>>>>> origin/liyr
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/course/detail",
<<<<<<< HEAD
			component: _49058b20,
=======
			component: _22ab7a6c,
>>>>>>> origin/liyr
			name: "course-detail"
		},
		{
			path: "/auth/Register",
<<<<<<< HEAD
			component: _7ef48e75,
=======
			component: _73ba631e,
>>>>>>> origin/liyr
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
>>>>>>> origin/liyr
			name: "auth-codeLogin"
		},
		{
			path: "/shop/wePay",
<<<<<<< HEAD
			component: _5a331c06,
=======
			component: _77813d8a,
>>>>>>> origin/liyr
			name: "shop-wePay"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _d94e95a8,
=======
			component: _192e9728,
>>>>>>> origin/liyr
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/wechatLogin",
<<<<<<< HEAD
			component: _a30c37be,
=======
			component: _0da1d2a5,
>>>>>>> origin/liyr
			name: "auth-wechatLogin"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _099d1907,
=======
			component: _26eb3a8b,
>>>>>>> origin/liyr
			name: "auth-Login"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _c95073e2,
=======
			component: _c1976bea,
>>>>>>> origin/liyr
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
<<<<<<< HEAD
					component: _3f6b5e34,
=======
					component: _8e3fd1a0,
>>>>>>> origin/liyr
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
<<<<<<< HEAD
					component: _3c772f11,
=======
					component: _368d10d6,
>>>>>>> origin/liyr
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
<<<<<<< HEAD
					component: _a3bdd0ae,
=======
					component: _63437e2d,
>>>>>>> origin/liyr
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
<<<<<<< HEAD
					component: _61677ec9,
=======
					component: _0239b64d,
>>>>>>> origin/liyr
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
<<<<<<< HEAD
					component: _0c5c991c,
=======
					component: _027f6ea0,
>>>>>>> origin/liyr
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/shop/customAffirmOrder",
<<<<<<< HEAD
			component: _12226006,
=======
			component: _ec5348ec,
>>>>>>> origin/liyr
			name: "shop-customAffirmOrder",
			children: [
				{
					path: "orderInfo",
<<<<<<< HEAD
					component: _93a5e45a,
=======
					component: _6b4f7457,
>>>>>>> origin/liyr
					name: "shop-customAffirmOrder-orderInfo"
				}
			]
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _894cd6c6,
=======
			component: _59f35421,
>>>>>>> origin/liyr
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
<<<<<<< HEAD
			component: _c2dce71e,
=======
			component: _3d2b4bf5,
>>>>>>> origin/liyr
			name: "shop-payResult"
		},
		{
			path: "/project/customerProject",
<<<<<<< HEAD
			component: _4b281c50,
=======
			component: _6c18dd68,
>>>>>>> origin/liyr
			name: "project-customerProject"
		},
		{
			path: "/project/components/OfflineDesc",
<<<<<<< HEAD
			component: _50406616,
=======
			component: _1ddac4cc,
>>>>>>> origin/liyr
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _2c00292d,
=======
			component: _1b2a9329,
>>>>>>> origin/liyr
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/qrcode",
<<<<<<< HEAD
			component: _f54c7972,
=======
			component: _0b2fa543,
>>>>>>> origin/liyr
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _62a0c9f4,
=======
			component: _54857d02,
>>>>>>> origin/liyr
			name: "home-teacher-list"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _c6f44c82,
=======
			component: _d370008a,
>>>>>>> origin/liyr
			name: "project-components-Detail"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _6b4258e2,
=======
			component: _68f89313,
>>>>>>> origin/liyr
			name: "home-news-list"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _11c2165d,
=======
			component: _ed13dc3e,
>>>>>>> origin/liyr
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _13e23572,
=======
			component: _74da5a43,
>>>>>>> origin/liyr
			name: "profile-pages-myProject"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _2ef36dd4,
=======
			component: _25164358,
>>>>>>> origin/liyr
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _3c13dc21,
=======
			component: _d291f2b6,
>>>>>>> origin/liyr
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/mySettings",
<<<<<<< HEAD
			component: _9371e836,
=======
			component: _10ea3669,
>>>>>>> origin/liyr
			name: "profile-pages-mySettings"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _51f97f88,
=======
			component: _df07cde8,
>>>>>>> origin/liyr
			name: "home-components-homecourse"
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _c71c7138,
=======
			component: _4a173e30,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _59e40862,
=======
			component: _96f19a34,
>>>>>>> origin/liyr
			name: "course-components-Filter"
		},
		{
			path: "/profile/pages/myCustomerProject",
<<<<<<< HEAD
			component: _18d4a089,
=======
			component: _db6d4cf6,
>>>>>>> origin/liyr
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/shop/components/card",
<<<<<<< HEAD
			component: _f57e7a16,
=======
			component: _1a05cf79,
>>>>>>> origin/liyr
			name: "shop-components-card"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _69447d16,
=======
			component: _1e66e39a,
>>>>>>> origin/liyr
			name: "project-components-ProjectCourse"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _7654e646,
=======
			component: _70170c42,
>>>>>>> origin/liyr
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _92bf750a,
=======
			component: _5ee28dff,
>>>>>>> origin/liyr
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _2e6052ac,
=======
			component: _b3d763a0,
>>>>>>> origin/liyr
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ShortList",
<<<<<<< HEAD
			component: _a7ceac88,
=======
			component: _545af240,
>>>>>>> origin/liyr
			name: "project-components-ShortList"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _d5e0dfd4,
=======
			component: _e25c93dc,
>>>>>>> origin/liyr
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a3e3eae8,
=======
			component: _3a172fe0,
>>>>>>> origin/liyr
			name: "other-pages-homeUs"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _0a49987a,
=======
			component: _fc04d804,
>>>>>>> origin/liyr
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _0c527e64,
=======
			component: _718abc52,
>>>>>>> origin/liyr
			name: "profile-pages-myTicket"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _373de708,
=======
			component: _2f84df10,
>>>>>>> origin/liyr
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _06304427,
=======
			component: _0759ccaa,
>>>>>>> origin/liyr
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4af54ed7,
=======
			component: _7fdbac5b,
>>>>>>> origin/liyr
			name: "other-pages-search"
		},
		{
			path: "/shop/affirmorder/noMsg",
<<<<<<< HEAD
			component: _1e02c248,
=======
			component: _d4928468,
>>>>>>> origin/liyr
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _66b564f3,
=======
			component: _0ef40822,
>>>>>>> origin/liyr
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _29a93f2d,
=======
			component: _b9c40fae,
>>>>>>> origin/liyr
			name: "other-activePages-policyProgram"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _e46c7cce,
=======
			component: _7a9fc1c6,
>>>>>>> origin/liyr
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _662225a5,
=======
			component: _73ae24be,
>>>>>>> origin/liyr
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _70e97638,
=======
			component: _a127e088,
>>>>>>> origin/liyr
			name: "course-components-ListCard"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _f31f1a3a,
=======
			component: _23547442,
>>>>>>> origin/liyr
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _6f346ba1,
=======
			component: _03f97825,
>>>>>>> origin/liyr
			name: "profile-pages-myHome"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _f67600c2,
=======
			component: _235ebf23,
>>>>>>> origin/liyr
			name: "home-news-info"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _4c6434ba,
=======
			component: _6e92f227,
>>>>>>> origin/liyr
			name: "shop-components-List"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _25e6db98,
=======
			component: _728dd9c8,
>>>>>>> origin/liyr
			name: "other-activePages-userProtocol"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _7262ee22,
=======
			component: _26d550eb,
>>>>>>> origin/liyr
			name: "course-components-CardProject"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _5872edaf,
=======
			component: _25900b9a,
>>>>>>> origin/liyr
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _d26b4820,
=======
			component: _2b8f6874,
>>>>>>> origin/liyr
			name: "profile-pages-myInfo"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _38418f93,
=======
			component: _cf6f50e2,
>>>>>>> origin/liyr
			name: "other-activePages-partypolicy"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _5afc5708,
=======
			component: _5a9f5ae8,
>>>>>>> origin/liyr
			name: "course-components-List"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _12ce39d1,
=======
			component: _eafb9556,
>>>>>>> origin/liyr
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/test",
<<<<<<< HEAD
			component: _25ac6a27,
=======
			component: _c53f34aa,
>>>>>>> origin/liyr
			name: "other-activePages-test"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _74270200,
=======
			component: _5ab18b84,
>>>>>>> origin/liyr
			name: "course-player-player"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _107ee504,
=======
			component: _7135467a,
>>>>>>> origin/liyr
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/components/myticket/statusPopup",
<<<<<<< HEAD
			component: _5c8a0461,
=======
			component: _4524015d,
>>>>>>> origin/liyr
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
<<<<<<< HEAD
			component: _172741af,
=======
			component: _4135efab,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _3c996e36,
=======
			component: _365b9432,
>>>>>>> origin/liyr
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
<<<<<<< HEAD
			component: _409bf22e,
=======
			component: _0a57a96d,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
<<<<<<< HEAD
			component: _3fa34687,
=======
			component: _283d4383,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/common/List",
<<<<<<< HEAD
			component: _24956df4,
=======
			component: _7530b510,
>>>>>>> origin/liyr
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/common/noMsg",
<<<<<<< HEAD
			component: _94d2028c,
=======
			component: _2f0bb7b6,
>>>>>>> origin/liyr
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/mycode/Conversion",
<<<<<<< HEAD
			component: _548cd27e,
=======
			component: _4d505702,
>>>>>>> origin/liyr
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/common/CardTab",
<<<<<<< HEAD
			component: _0dcd5fff,
=======
			component: _06106c0a,
>>>>>>> origin/liyr
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mycode/BindIng",
<<<<<<< HEAD
			component: _3bea2aad,
=======
			component: _2b1494a9,
>>>>>>> origin/liyr
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
<<<<<<< HEAD
			component: _16b34ddb,
=======
			component: _40c1fbd7,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/common/Detail",
<<<<<<< HEAD
			component: _40604ca7,
=======
			component: _14fa99aa,
>>>>>>> origin/liyr
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
<<<<<<< HEAD
			component: _4470a5c6,
=======
			component: _6e7f53c2,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/search",
<<<<<<< HEAD
			component: _460b8b44,
=======
			component: _dbc6be3c,
>>>>>>> origin/liyr
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/common/Card",
<<<<<<< HEAD
			component: _583aa134,
=======
			component: _74b4e6ea,
>>>>>>> origin/liyr
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/detailPopup",
<<<<<<< HEAD
			component: _557fb6e2,
=======
			component: _3e19b3de,
>>>>>>> origin/liyr
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _7e91305e,
=======
			component: _68f9b055,
>>>>>>> origin/liyr
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/myorder/OrderList",
<<<<<<< HEAD
			component: _2f8369d1,
=======
			component: _2846ee55,
>>>>>>> origin/liyr
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/myinfo/Info",
<<<<<<< HEAD
			component: _3a1c5475,
=======
			component: _4a22e80e,
>>>>>>> origin/liyr
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/common/CustomerCard",
<<<<<<< HEAD
			component: _7a793764,
=======
			component: _506daae8,
>>>>>>> origin/liyr
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
<<<<<<< HEAD
			component: _4d063c29,
=======
			component: _35a03925,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _1200cb74,
=======
			component: _1e7c7f7c,
>>>>>>> origin/liyr
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/common/ListTab",
<<<<<<< HEAD
			component: _030b229e,
=======
			component: _24b64ea6,
>>>>>>> origin/liyr
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myorder/DataPick",
<<<<<<< HEAD
			component: _dbf17b94,
=======
			component: _603f1d32,
>>>>>>> origin/liyr
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/invitation",
<<<<<<< HEAD
			component: _7a893f61,
=======
			component: _734cc3e5,
>>>>>>> origin/liyr
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
<<<<<<< HEAD
			component: _ebacdfa6,
=======
			component: _6b44af29,
>>>>>>> origin/liyr
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/ticketRules",
<<<<<<< HEAD
			component: _2e91fd5c,
=======
			component: _5d5e0364,
>>>>>>> origin/liyr
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _66b4c8f5,
=======
			component: _c8c9b30e,
>>>>>>> origin/liyr
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _9d1f8974,
=======
			component: _303bb042,
>>>>>>> origin/liyr
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _135bb60f,
=======
			component: _cd9ccfea,
>>>>>>> origin/liyr
			name: "home-news-detail"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _76ca02fd,
=======
			component: _4674020e,
>>>>>>> origin/liyr
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
