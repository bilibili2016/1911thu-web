import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _44f44288 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _b85f5514 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _352f4a07 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _3e447d6e = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _fa6417ea = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _36cd71f0 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _23d4d1f2 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _f8d87a44 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _12809810 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _6e9c788f = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _409cda1e = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _55cf95a8 = () => import('../pages/project/projectCourse.vue' /* webpackChunkName: "pages/project/projectCourse" */).then(m => m.default || m)
const _1b4f55c6 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _5e4fba4a = () => import('../pages/project/commonProblems.vue' /* webpackChunkName: "pages/project/commonProblems" */).then(m => m.default || m)
const _7ff396aa = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _15932199 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _582b0d96 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _47b5b739 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _2bc9209f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _b622a1b8 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _650f235c = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _7618660a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _5e6cd912 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _bf5a4bc6 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _6d917602 = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _15fa173c = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _093de9fb = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _f9181660 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _419a81b0 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _52657338 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _a57eb0e6 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _b7aa79fe = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _3398ff19 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _2610db2b = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _16a5c7d3 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _6baaaf1b = () => import('../pages/profile/components/list.vue' /* webpackChunkName: "pages/profile/components/list" */).then(m => m.default || m)
const _4fa21910 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _83b64c36 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _94515588 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _1af7f08d = () => import('../pages/profile/components/card.vue' /* webpackChunkName: "pages/profile/components/card" */).then(m => m.default || m)
const _15a68b89 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _1fec77f2 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _5b88e868 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4a27ebd8 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _7a28407e = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _12d320a3 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _e8f8e8ee = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _fff88f20 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _39e3a598 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _a2b8bb56 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _68016c67 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _a9608d06 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _9dce4d96 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _0a084520 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _ab18fb8e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _bce543d6 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _5bf38a25 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _802310dc = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _65e765f6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4c0c96e5 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _02d0f4ee = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _41637b62 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _84114f48 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
<<<<<<< HEAD
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _3c110229 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _fe9a0bb2 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _0c629a3a = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _3ffabf45 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _b76c0bc8 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _6af646e2 = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _a719623c = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _e91700e8 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _2efadf74 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _5de35908 = () => import('../pages/profile/components/list.vue' /* webpackChunkName: "pages/profile/components/list" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _ff48d624 = () => import('../pages/profile/components/card.vue' /* webpackChunkName: "pages/profile/components/card" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _74270200 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _71d6bfa2 = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _00599997 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _49afb276 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _fe3f2d70 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _7c7979dc = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _b9329498 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _c4734de4 = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _4c8d9362 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _9c815e72 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _380814a0 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _7a727269 = () => import('../pages/project/projectcourse.vue' /* webpackChunkName: "pages/project/projectcourse" */).then(m => m.default || m)
const _a70d4b32 = () => import('../pages/project/projectevaluate.vue' /* webpackChunkName: "pages/project/projectevaluate" */).then(m => m.default || m)
const _cba19c0c = () => import('../pages/project/commonproblems.vue' /* webpackChunkName: "pages/project/commonproblems" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _08c47bd0 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _33e0eb56 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _22ff269a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _11d3c11e = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _d8abe0f6 = () => import('../pages/profile/pages/ticketRules.vue' /* webpackChunkName: "pages/profile/pages/ticketRules" */).then(m => m.default || m)
const _beca5cde = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _cfd39f8c = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _e85cb59a = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _8f7aa484 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _3a1e19ba = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _edccf83e = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _100d6b48 = () => import('../pages/profile/pages/ticketOrder.vue' /* webpackChunkName: "pages/profile/pages/ticketOrder" */).then(m => m.default || m)
const _178a844f = () => import('../pages/profile/pages/invitation.vue' /* webpackChunkName: "pages/profile/pages/invitation" */).then(m => m.default || m)
const _6d173be7 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _0d5d6d63 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _0946fb68 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _5ce0e1bc = () => import('../pages/profile/pages/ticketHistory.vue' /* webpackChunkName: "pages/profile/pages/ticketHistory" */).then(m => m.default || m)
const _8f009950 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _918a4068 = () => import('../pages/profile/components/info.vue' /* webpackChunkName: "pages/profile/components/info" */).then(m => m.default || m)
const _7e080fb4 = () => import('../pages/profile/components/conversion.vue' /* webpackChunkName: "pages/profile/components/conversion" */).then(m => m.default || m)
const _06569888 = () => import('../pages/profile/components/list.vue' /* webpackChunkName: "pages/profile/components/list" */).then(m => m.default || m)
const _b9c1a962 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _65d32b46 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _350c0d3b = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _a7bc15a4 = () => import('../pages/profile/components/card.vue' /* webpackChunkName: "pages/profile/components/card" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _f162805a = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2ba94126 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _cf7872d2 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _0d07f280 = () => import('../pages/course/player/player.vue' /* webpackChunkName: "pages/course/player/player" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _74343748 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _141a47ef = () => import('../pages/profile/pages/courselist.vue' /* webpackChunkName: "pages/profile/pages/courselist" */).then(m => m.default || m)
const _22945157 = () => import('../pages/profile/components/binding.vue' /* webpackChunkName: "pages/profile/components/binding" */).then(m => m.default || m)
const _c541fa94 = () => import('../pages/profile/components/bindid.vue' /* webpackChunkName: "pages/profile/components/bindid" */).then(m => m.default || m)
const _453e2cf0 = () => import('../pages/profile/pages/order.vue' /* webpackChunkName: "pages/profile/pages/order" */).then(m => m.default || m)
const _0a357cc8 = () => import('../pages/project/components/shortList.vue' /* webpackChunkName: "pages/project/components/shortList" */).then(m => m.default || m)
const _35ff8d74 = () => import('../pages/profile/components/personalset.vue' /* webpackChunkName: "pages/profile/components/personalset" */).then(m => m.default || m)
const _5d85575f = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _d9b7a410 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _df6e8314 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _4aaeea86 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _3f232f91 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _97f97e96 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _4592c8f4 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _ab017362 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _47cfc0ce = () => import('../pages/course/_category.vue' /* webpackChunkName: "pages/course/_category" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8



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
<<<<<<< HEAD
			component: _69f81487,
=======
			component: _121a4c47,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home"
		},
		{
			path: "/profile",
<<<<<<< HEAD
			component: _b85f5514,
=======
<<<<<<< HEAD
			component: _1b62cf17,
=======
			component: _01587f57,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile"
		},
		{
			path: "/shop/wePay",
<<<<<<< HEAD
			component: _352f4a07,
=======
<<<<<<< HEAD
			component: _5a331c06,
=======
			component: _025553c6,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-wePay"
		},
		{
			path: "/project/projectPlayer",
<<<<<<< HEAD
			component: _3e447d6e,
=======
			component: _4c8d9362,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "project-projectPlayer"
		},
		{
			path: "/shop/shoppingcart",
<<<<<<< HEAD
			component: _fa6417ea,
=======
			component: _2a7c456c,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-shoppingcart"
		},
		{
			path: "/auth/Login",
<<<<<<< HEAD
			component: _36cd71f0,
=======
			component: _9c815e72,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "auth-Login"
		},
		{
			path: "/shop/payResult",
<<<<<<< HEAD
			component: _23d4d1f2,
=======
			component: _7751e431,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-payResult"
		},
		{
			path: "/project/projectDetail",
<<<<<<< HEAD
			component: _f8d87a44,
=======
			component: _1f087bbf,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "project-projectDetail"
		},
		{
			path: "/shop/affirmOrder",
<<<<<<< HEAD
			component: _12809810,
=======
<<<<<<< HEAD
			component: _95906a92,
=======
			component: _5f413277,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/forgotpassword",
<<<<<<< HEAD
			component: _6e9c788f,
=======
<<<<<<< HEAD
			component: _f1091520,
=======
			component: _380814a0,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "auth-forgotpassword"
		},
		{
			path: "/shop/paypublic",
<<<<<<< HEAD
			component: _409cda1e,
			name: "shop-paypublic"
		},
		{
			path: "/project/projectCourse",
			component: _55cf95a8,
			name: "project-projectCourse"
		},
		{
			path: "/project/projectevaluate",
			component: _1b4f55c6,
			name: "project-projectevaluate"
		},
		{
			path: "/project/commonProblems",
			component: _5e4fba4a,
			name: "project-commonProblems"
		},
		{
			path: "/course/coursedetail",
			component: _7ff396aa,
=======
			component: _d7cc2746,
			name: "shop-paypublic"
		},
		{
			path: "/project/projectcourse",
			component: _7a727269,
			name: "project-projectcourse"
		},
		{
			path: "/project/projectevaluate",
			component: _a70d4b32,
			name: "project-projectevaluate"
		},
		{
			path: "/project/commonproblems",
			component: _cba19c0c,
			name: "project-commonproblems"
		},
		{
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _ce5ad8ea,
=======
			component: _1559d86a,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _15932199,
=======
<<<<<<< HEAD
					component: _a8484b50,
=======
					component: _08c47bd0,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _582b0d96,
=======
<<<<<<< HEAD
					component: _7f289295,
=======
					component: _33e0eb56,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _47b5b739,
=======
<<<<<<< HEAD
					component: _7a84165a,
=======
					component: _22ff269a,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _2bc9209f,
=======
<<<<<<< HEAD
					component: _7bdc4d44,
=======
					component: _11d3c11e,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/profile/pages/ticketRules",
<<<<<<< HEAD
			component: _b622a1b8,
=======
			component: _d8abe0f6,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-pages-ticketRules"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _650f235c,
=======
			component: _beca5cde,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-components-banner"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _7618660a,
=======
			component: _cfd39f8c,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-components-Card"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _5e6cd912,
=======
			component: _e85cb59a,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _bf5a4bc6,
=======
			component: _8f7aa484,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-Institutional"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _6d917602,
=======
			component: _3a1e19ba,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-teacher-famous"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _15fa173c,
=======
			component: _edccf83e,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/ticketOrder",
<<<<<<< HEAD
			component: _093de9fb,
=======
			component: _100d6b48,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-pages-ticketOrder"
		},
		{
			path: "/profile/pages/invitation",
<<<<<<< HEAD
			component: _f9181660,
=======
			component: _178a844f,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-pages-invitation"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _419a81b0,
=======
			component: _6d173be7,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _52657338,
=======
			component: _0d5d6d63,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "shop-components-List"
		},
		{
			path: "/other/pages/homeUs",
<<<<<<< HEAD
			component: _a57eb0e6,
=======
			component: _0946fb68,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/pages/ticketHistory",
<<<<<<< HEAD
			component: _b7aa79fe,
=======
			component: _5ce0e1bc,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-pages-ticketHistory"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _3398ff19,
=======
			component: _8f009950,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-userProtocol"
		},
		{
			path: "/profile/components/info",
<<<<<<< HEAD
			component: _2610db2b,
=======
			component: _918a4068,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-info"
		},
		{
			path: "/profile/components/conversion",
<<<<<<< HEAD
			component: _16a5c7d3,
=======
			component: _7e080fb4,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-conversion"
		},
		{
			path: "/profile/components/list",
<<<<<<< HEAD
			component: _6baaaf1b,
=======
			component: _06569888,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-list"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _4fa21910,
=======
			component: _b9c1a962,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-news-list"
		},
		{
			path: "/home/teacher/list",
<<<<<<< HEAD
			component: _83b64c36,
=======
			component: _65d32b46,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-teacher-list"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _94515588,
=======
			component: _350c0d3b,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-components-CardPlayer"
		},
		{
			path: "/profile/components/card",
<<<<<<< HEAD
			component: _1af7f08d,
=======
			component: _a7bc15a4,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-card"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _15a68b89,
=======
			component: _2e6e2270,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-components-List"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _1fec77f2,
=======
			component: _f162805a,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _5b88e868,
=======
			component: _2ba94126,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-activePages-policyProgram"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _4a27ebd8,
=======
			component: _cf7872d2,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "other-pages-search"
		},
		{
			path: "/course/player/player",
<<<<<<< HEAD
			component: _7a28407e,
=======
			component: _0d07f280,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-player-player"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _12d320a3,
=======
			component: _b22c9fbc,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-components-Filter"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _e8f8e8ee,
=======
			component: _74343748,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/courselist",
<<<<<<< HEAD
			component: _fff88f20,
=======
			component: _141a47ef,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-pages-courselist"
		},
		{
			path: "/profile/components/binding",
<<<<<<< HEAD
			component: _39e3a598,
=======
			component: _22945157,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-binding"
		},
		{
			path: "/profile/components/bindid",
<<<<<<< HEAD
			component: _a2b8bb56,
=======
			component: _c541fa94,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-bindid"
		},
		{
			path: "/profile/pages/order",
<<<<<<< HEAD
			component: _68016c67,
			name: "profile-pages-order"
		},
		{
			path: "/project/components/ShortList",
			component: _a9608d06,
			name: "project-components-ShortList"
		},
		{
			path: "/profile/components/personalset",
			component: _9dce4d96,
=======
			component: _453e2cf0,
			name: "profile-pages-order"
		},
		{
			path: "/project/components/shortList",
			component: _0a357cc8,
			name: "project-components-shortList"
		},
		{
			path: "/profile/components/personalset",
			component: _35ff8d74,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "profile-components-personalset"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _0a084520,
=======
			component: _5d85575f,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-news-info"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _ab18fb8e,
=======
			component: _d9b7a410,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-components-ListCard"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _bce543d6,
=======
			component: _df6e8314,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _5bf38a25,
=======
			component: _4aaeea86,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-news-components-Info"
		},
		{
			path: "/home/teacher/components/Card",
<<<<<<< HEAD
			component: _802310dc,
=======
			component: _3f232f91,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/teacher/:Info?",
<<<<<<< HEAD
			component: _65e765f6,
=======
			component: _97f97e96,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-teacher-Info"
		},
		{
			path: "/course/list/:courselist?",
<<<<<<< HEAD
			component: _4c0c96e5,
=======
			component: _4592c8f4,
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
<<<<<<< HEAD
			component: _02d0f4ee,
=======
<<<<<<< HEAD
			component: _135bb60f,
=======
			component: _ab017362,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "home-news-detail"
		},
		{
			path: "/course/:category?",
<<<<<<< HEAD
			component: _41637b62,
=======
<<<<<<< HEAD
			component: _c4734de4,
=======
			component: _47cfc0ce,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "course-category"
		},
		{
			path: "/",
<<<<<<< HEAD
			component: _84114f48,
=======
<<<<<<< HEAD
			component: _76ca02fd,
=======
			component: _06d81986,
>>>>>>> dev
>>>>>>> ec0e9c85bdb77b4072a9a67bc3151d42f375e9a8
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
