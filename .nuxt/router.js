import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _49058b20 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _7ef48e75 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _405916cc = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _c95073e2 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _3f6b5e34 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _3c772f11 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _a3bdd0ae = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _61677ec9 = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _0c5c991c = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _4b281c50 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _0fa46fab = () => import('../pages/course/courseDetail.vue' /* webpackChunkName: "pages/course/courseDetail" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _a30c37be = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _991efa8c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _1a6ba732 = () => import('../pages/home/teacher/beTeacher.vue' /* webpackChunkName: "pages/home/teacher/beTeacher" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _3bb9c81c = () => import('../pages/home/teacher/orderTeacher.vue' /* webpackChunkName: "pages/home/teacher/orderTeacher" */).then(m => m.default || m)
const _baeae676 = () => import('../pages/profile/pages/myCollege.vue' /* webpackChunkName: "pages/profile/pages/myCollege" */).then(m => m.default || m)
const _ccf8e154 = () => import('../pages/home/citySchool/submitSuccess.vue' /* webpackChunkName: "pages/home/citySchool/submitSuccess" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _50406616 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _242d1046 = () => import('../pages/home/citySchool/viewSchoolAddress.vue' /* webpackChunkName: "pages/home/citySchool/viewSchoolAddress" */).then(m => m.default || m)
const _f29705d6 = () => import('../pages/project/components/CustomerPop.vue' /* webpackChunkName: "pages/project/components/CustomerPop" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _01ef40c4 = () => import('../pages/backend/project/projectDetail.vue' /* webpackChunkName: "pages/backend/project/projectDetail" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _c886841e = () => import('../pages/backend/public/footer.vue' /* webpackChunkName: "pages/backend/public/footer" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _9371e836 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _4b642d8f = () => import('../pages/profile/pages/myExamine.vue' /* webpackChunkName: "pages/profile/pages/myExamine" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _c466cdc4 = () => import('../pages/home/news/outNewsList.vue' /* webpackChunkName: "pages/home/news/outNewsList" */).then(m => m.default || m)
const _8621bc3a = () => import('../pages/backend/public/header.vue' /* webpackChunkName: "pages/backend/public/header" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _1cd99ba0 = () => import('../pages/backend/course/courseDetail.vue' /* webpackChunkName: "pages/backend/course/courseDetail" */).then(m => m.default || m)
const _6a06b140 = () => import('../pages/home/news/outNews.vue' /* webpackChunkName: "pages/home/news/outNews" */).then(m => m.default || m)
const _24d8d578 = () => import('../pages/home/news/payDetail.vue' /* webpackChunkName: "pages/home/news/payDetail" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _36d2dc72 = () => import('../pages/home/citySchool/schoolApplication.vue' /* webpackChunkName: "pages/home/citySchool/schoolApplication" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _18d4a089 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _4e7fb3b8 = () => import('../pages/home/certification/viewPage.vue' /* webpackChunkName: "pages/home/certification/viewPage" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _717acfba = () => import('../pages/home/citySchool/schoolIntro.vue' /* webpackChunkName: "pages/home/citySchool/schoolIntro" */).then(m => m.default || m)
const _adc25fb2 = () => import('../pages/home/certification/searchPage.vue' /* webpackChunkName: "pages/home/certification/searchPage" */).then(m => m.default || m)
const _2f4afe4f = () => import('../pages/home/vip/vipPage.vue' /* webpackChunkName: "pages/home/vip/vipPage" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _f57e7a16 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _033679cd = () => import('../pages/backend/news/newsInfo.vue' /* webpackChunkName: "pages/backend/news/newsInfo" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _24956df4 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _f759b22c = () => import('../pages/profile/components/myexamine/viewCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/viewCertificate" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _1ee55c4a = () => import('../pages/profile/components/myexamine/examineRecord.vue' /* webpackChunkName: "pages/profile/components/myexamine/examineRecord" */).then(m => m.default || m)
const _3bea2aad = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _6f1036f8 = () => import('../pages/backend/project/components/Detail.vue' /* webpackChunkName: "pages/backend/project/components/Detail" */).then(m => m.default || m)
const _409bf22e = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _5c8a0461 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _051abab1 = () => import('../pages/backend/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/backend/project/components/ProjectCourse" */).then(m => m.default || m)
const _2be9b217 = () => import('../pages/profile/components/myexamine/submitPapers.vue' /* webpackChunkName: "pages/profile/components/myexamine/submitPapers" */).then(m => m.default || m)
const _f7786e7a = () => import('../pages/profile/components/mycollege/collegeList.vue' /* webpackChunkName: "pages/profile/components/mycollege/collegeList" */).then(m => m.default || m)
const _2e91fd5c = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _172741af = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _7a793764 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _4470a5c6 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _7a893f61 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _c56a06b4 = () => import('../pages/profile/components/myexamine/info.vue' /* webpackChunkName: "pages/profile/components/myexamine/info" */).then(m => m.default || m)
const _dbf17b94 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _ab88cae6 = () => import('../pages/profile/components/myexamine/certificateList.vue' /* webpackChunkName: "pages/profile/components/myexamine/certificateList" */).then(m => m.default || m)
const _583aa134 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _16b34ddb = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _5d6766bc = () => import('../pages/profile/components/myexamine/answerQuestion.vue' /* webpackChunkName: "pages/profile/components/myexamine/answerQuestion" */).then(m => m.default || m)
const _548cd27e = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _77abb1e6 = () => import('../pages/home/news/components/newsPay.vue' /* webpackChunkName: "pages/home/news/components/newsPay" */).then(m => m.default || m)
const _595f2eb9 = () => import('../pages/backend/course/components/Line.vue' /* webpackChunkName: "pages/backend/course/components/Line" */).then(m => m.default || m)
const _0af19ef2 = () => import('../pages/backend/project/components/CommonProblems.vue' /* webpackChunkName: "pages/backend/project/components/CommonProblems" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _4d063c29 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _af408b62 = () => import('../pages/backend/course/components/teacherIntro.vue' /* webpackChunkName: "pages/backend/course/components/teacherIntro" */).then(m => m.default || m)
const _2f8369d1 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _5df25389 = () => import('../pages/backend/course/components/CourseCatalog.vue' /* webpackChunkName: "pages/backend/course/components/CourseCatalog" */).then(m => m.default || m)
const _460b8b44 = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _12080bd5 = () => import('../pages/backend/course/components/Card.vue' /* webpackChunkName: "pages/backend/course/components/Card" */).then(m => m.default || m)
const _0219d1aa = () => import('../pages/profile/components/myticket/ticketReception.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketReception" */).then(m => m.default || m)
const _94d2028c = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _16034fef = () => import('../pages/home/teacher/components/teacherCategory.vue' /* webpackChunkName: "pages/home/teacher/components/teacherCategory" */).then(m => m.default || m)
const _557fb6e2 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _9b58eed4 = () => import('../pages/backend/course/components/CardPlayer.vue' /* webpackChunkName: "pages/backend/course/components/CardPlayer" */).then(m => m.default || m)
const _3fa34687 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _2c2f4e71 = () => import('../pages/backend/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/backend/project/components/OfflineDesc" */).then(m => m.default || m)
const _7ae0f1ad = () => import('../pages/profile/components/myexamine/applicantCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/applicantCertificate" */).then(m => m.default || m)
const _3a1c5475 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _030b229e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _0d84bab8 = () => import('../pages/profile/components/myexamine/intro.vue' /* webpackChunkName: "pages/profile/components/myexamine/intro" */).then(m => m.default || m)
const _c63e6a84 = () => import('../pages/profile/components/myexamine/simulationExam.vue' /* webpackChunkName: "pages/profile/components/myexamine/simulationExam" */).then(m => m.default || m)
const _5f64227c = () => import('../pages/profile/components/myexamine/reviewing.vue' /* webpackChunkName: "pages/profile/components/myexamine/reviewing" */).then(m => m.default || m)
const _0dcd5fff = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _40604ca7 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _6e7d9198 = () => import('../pages/profile/components/mysetting/bindPhone.vue' /* webpackChunkName: "pages/profile/components/mysetting/bindPhone" */).then(m => m.default || m)
const _2e30b0af = () => import('../pages/backend/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/backend/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _ebacdfa6 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _581a02a3 = () => import('../pages/profile/components/myticket/ticketInfo.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketInfo" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _3eb1e902,
			name: "project-projectDetail"
		},
		{
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/course/detail",
			component: _49058b20,
			name: "course-detail"
		},
		{
			path: "/auth/Register",
			component: _7ef48e75,
			name: "auth-Register"
		},
		{
			path: "/auth/passwordLogin",
			component: _405916cc,
			name: "auth-passwordLogin"
		},
		{
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
			path: "/project/customerProject",
			component: _4b281c50,
			name: "project-customerProject"
		},
		{
			path: "/course/courseDetail",
			component: _0fa46fab,
			name: "course-courseDetail"
		},
		{
			path: "/shop/payResult",
			component: _c2dce71e,
			name: "shop-payResult"
		},
		{
			path: "/shop/shoppingcart",
			component: _d94e95a8,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmOrder",
			component: _95906a92,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/wechatLogin",
			component: _a30c37be,
			name: "auth-wechatLogin"
		},
		{
			path: "/shop/wePay",
			component: _5a331c06,
			name: "shop-wePay"
		},
		{
			path: "/shop/paypublic",
			component: _894cd6c6,
			name: "shop-paypublic"
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
			path: "/auth/codeLogin",
			component: _991efa8c,
			name: "auth-codeLogin"
		},
		{
			path: "/other/pages/search",
			component: _4af54ed7,
			name: "other-pages-search"
		},
		{
			path: "/profile/pages/myTicket",
			component: _0c527e64,
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _f54c7972,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/teacher/list",
			component: _62a0c9f4,
			name: "home-teacher-list"
		},
		{
			path: "/home/teacher/beTeacher",
			component: _1a6ba732,
			name: "home-teacher-beTeacher"
		},
		{
			path: "/project/components/Detail",
			component: _c6f44c82,
			name: "project-components-Detail"
		},
		{
			path: "/home/teacher/orderTeacher",
			component: _3bb9c81c,
			name: "home-teacher-orderTeacher"
		},
		{
			path: "/profile/pages/myCollege",
			component: _baeae676,
			name: "profile-pages-myCollege"
		},
		{
			path: "/home/citySchool/submitSuccess",
			component: _ccf8e154,
			name: "home-citySchool-submitSuccess"
		},
		{
			path: "/course/coursedetail/teacherIntro",
			component: _7bdc4d44,
			name: "course-coursedetail-teacherIntro"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _50406616,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/course/components/ListCard",
			component: _70e97638,
			name: "course-components-ListCard"
		},
		{
			path: "/home/citySchool/viewSchoolAddress",
			component: _242d1046,
			name: "home-citySchool-viewSchoolAddress"
		},
		{
			path: "/project/components/CustomerPop",
			component: _f29705d6,
			name: "project-components-CustomerPop"
		},
		{
			path: "/other/pages/homeUs",
			component: _a3e3eae8,
			name: "other-pages-homeUs"
		},
		{
			path: "/backend/project/projectDetail",
			component: _01ef40c4,
			name: "backend-project-projectDetail"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _2ef36dd4,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _2e6052ac,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/CommonProblems",
			component: _2c00292d,
			name: "project-components-CommonProblems"
		},
		{
			path: "/backend/public/footer",
			component: _c886841e,
			name: "backend-public-footer"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _69447d16,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/home/components/homecourse",
			component: _51f97f88,
			name: "home-components-homecourse"
		},
		{
			path: "/profile/pages/myHome",
			component: _6f346ba1,
			name: "profile-pages-myHome"
		},
		{
			path: "/course/coursedetail/CourseCatalog",
			component: _7a84165a,
			name: "course-coursedetail-CourseCatalog"
		},
		{
			path: "/profile/pages/mySettings",
			component: _9371e836,
			name: "profile-pages-mySettings"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _c71c7138,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/home/news/list",
			component: _6b4258e2,
			name: "home-news-list"
		},
		{
			path: "/other/activePages/Institutional",
			component: _107ee504,
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/pages/myExamine",
			component: _4b642d8f,
			name: "profile-pages-myExamine"
		},
		{
			path: "/course/coursedetail/UserEvaluate",
			component: _a8484b50,
			name: "course-coursedetail-UserEvaluate"
		},
		{
			path: "/home/news/outNewsList",
			component: _c466cdc4,
			name: "home-news-outNewsList"
		},
		{
			path: "/backend/public/header",
			component: _8621bc3a,
			name: "backend-public-header"
		},
		{
			path: "/profile/pages/myCode",
			component: _5872edaf,
			name: "profile-pages-myCode"
		},
		{
			path: "/backend/course/courseDetail",
			component: _1cd99ba0,
			name: "backend-course-courseDetail"
		},
		{
			path: "/home/news/outNews",
			component: _6a06b140,
			name: "home-news-outNews"
		},
		{
			path: "/home/news/payDetail",
			component: _24d8d578,
			name: "home-news-payDetail"
		},
		{
			path: "/shop/components/List",
			component: _4c6434ba,
			name: "shop-components-List"
		},
		{
			path: "/profile/pages/myCourse",
			component: _11c2165d,
			name: "profile-pages-myCourse"
		},
		{
			path: "/home/citySchool/schoolApplication",
			component: _36d2dc72,
			name: "home-citySchool-schoolApplication"
		},
		{
			path: "/shop/components/banner",
			component: _12ce39d1,
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/degree",
			component: _3c13dc21,
			name: "other-activePages-degree"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _18d4a089,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/course/components/CardProject",
			component: _7262ee22,
			name: "course-components-CardProject"
		},
		{
			path: "/course/components/Filter",
			component: _59e40862,
			name: "course-components-Filter"
		},
		{
			path: "/home/certification/viewPage",
			component: _4e7fb3b8,
			name: "home-certification-viewPage"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _25e6db98,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/profile/pages/myOrder",
			component: _373de708,
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/myInfo",
			component: _d26b4820,
			name: "profile-pages-myInfo"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _d5e0dfd4,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/home/teacher/famous",
			component: _f31f1a3a,
			name: "home-teacher-famous"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _1e02c248,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/citySchool/schoolIntro",
			component: _717acfba,
			name: "home-citySchool-schoolIntro"
		},
		{
			path: "/home/certification/searchPage",
			component: _adc25fb2,
			name: "home-certification-searchPage"
		},
		{
			path: "/home/vip/vipPage",
			component: _2f4afe4f,
			name: "home-vip-vipPage"
		},
		{
			path: "/course/components/Card",
			component: _0a49987a,
			name: "course-components-Card"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _7654e646,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/course/components/CardPlayer",
			component: _92bf750a,
			name: "course-components-CardPlayer"
		},
		{
			path: "/shop/wepay/payType",
			component: _e46c7cce,
			name: "shop-wepay-payType"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _38418f93,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/course/coursedetail/EvaluateDialog",
			component: _7f289295,
			name: "course-coursedetail-EvaluateDialog"
		},
		{
			path: "/profile/pages/myProject",
			component: _13e23572,
			name: "profile-pages-myProject"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _06304427,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/shop/components/card",
			component: _f57e7a16,
			name: "shop-components-card"
		},
		{
			path: "/project/components/ShortList",
			component: _a7ceac88,
			name: "project-components-ShortList"
		},
		{
			path: "/other/activePages/faceteach",
			component: _66b564f3,
			name: "other-activePages-faceteach"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _662225a5,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/backend/news/newsInfo",
			component: _033679cd,
			name: "backend-news-newsInfo"
		},
		{
			path: "/course/components/List",
			component: _5afc5708,
			name: "course-components-List"
		},
		{
			path: "/home/news/info",
			component: _f67600c2,
			name: "home-news-info"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _29a93f2d,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/profile/components/common/List",
			component: _24956df4,
			name: "profile-components-common-List"
		},
		{
			path: "/home/teacher/components/Card",
			component: _7e91305e,
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/myexamine/viewCertificate",
			component: _f759b22c,
			name: "profile-components-myexamine-viewCertificate"
		},
		{
			path: "/home/news/components/Info",
			component: _1200cb74,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/myexamine/examineRecord",
			component: _1ee55c4a,
			name: "profile-components-myexamine-examineRecord"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _3bea2aad,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/backend/project/components/Detail",
			component: _6f1036f8,
			name: "backend-project-components-Detail"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _409bf22e,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _5c8a0461,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/backend/project/components/ProjectCourse",
			component: _051abab1,
			name: "backend-project-components-ProjectCourse"
		},
		{
			path: "/profile/components/myexamine/submitPapers",
			component: _2be9b217,
			name: "profile-components-myexamine-submitPapers"
		},
		{
			path: "/profile/components/mycollege/collegeList",
			component: _f7786e7a,
			name: "profile-components-mycollege-collegeList"
		},
		{
			path: "/profile/components/myticket/ticketRules",
			component: _2e91fd5c,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _172741af,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _7a793764,
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
			component: _4470a5c6,
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _7a893f61,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/myexamine/info",
			component: _c56a06b4,
			name: "profile-components-myexamine-info"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _dbf17b94,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/myexamine/certificateList",
			component: _ab88cae6,
			name: "profile-components-myexamine-certificateList"
		},
		{
			path: "/profile/components/common/Card",
			component: _583aa134,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _16b34ddb,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/myexamine/answerQuestion",
			component: _5d6766bc,
			name: "profile-components-myexamine-answerQuestion"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _548cd27e,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/home/news/components/newsPay",
			component: _77abb1e6,
			name: "home-news-components-newsPay"
		},
		{
			path: "/backend/course/components/Line",
			component: _595f2eb9,
			name: "backend-course-components-Line"
		},
		{
			path: "/backend/project/components/CommonProblems",
			component: _0af19ef2,
			name: "backend-project-components-CommonProblems"
		},
		{
			path: "/home/news/components/List",
			component: _3c996e36,
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _4d063c29,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/backend/course/components/teacherIntro",
			component: _af408b62,
			name: "backend-course-components-teacherIntro"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _2f8369d1,
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/backend/course/components/CourseCatalog",
			component: _5df25389,
			name: "backend-course-components-CourseCatalog"
		},
		{
			path: "/profile/components/common/search",
			component: _460b8b44,
			name: "profile-components-common-search"
		},
		{
			path: "/backend/course/components/Card",
			component: _12080bd5,
			name: "backend-course-components-Card"
		},
		{
			path: "/profile/components/myticket/ticketReception",
			component: _0219d1aa,
			name: "profile-components-myticket-ticketReception"
		},
		{
			path: "/profile/components/common/noMsg",
			component: _94d2028c,
			name: "profile-components-common-noMsg"
		},
		{
			path: "/home/teacher/components/teacherCategory",
			component: _16034fef,
			name: "home-teacher-components-teacherCategory"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _557fb6e2,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/backend/course/components/CardPlayer",
			component: _9b58eed4,
			name: "backend-course-components-CardPlayer"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _3fa34687,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/backend/project/components/OfflineDesc",
			component: _2c2f4e71,
			name: "backend-project-components-OfflineDesc"
		},
		{
			path: "/profile/components/myexamine/applicantCertificate",
			component: _7ae0f1ad,
			name: "profile-components-myexamine-applicantCertificate"
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _3a1c5475,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _030b229e,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/myexamine/intro",
			component: _0d84bab8,
			name: "profile-components-myexamine-intro"
		},
		{
			path: "/profile/components/myexamine/simulationExam",
			component: _c63e6a84,
			name: "profile-components-myexamine-simulationExam"
		},
		{
			path: "/profile/components/myexamine/reviewing",
			component: _5f64227c,
			name: "profile-components-myexamine-reviewing"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _0dcd5fff,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/common/Detail",
			component: _40604ca7,
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/mysetting/bindPhone",
			component: _6e7d9198,
			name: "profile-components-mysetting-bindPhone"
		},
		{
			path: "/backend/project/components/ProjectEvaluate",
			component: _2e30b0af,
			name: "backend-project-components-ProjectEvaluate"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _ebacdfa6,
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/ticketInfo",
			component: _581a02a3,
			name: "profile-components-myticket-ticketInfo"
		},
		{
			path: "/home/news/:detail?",
			component: _135bb60f,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _9d1f8974,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _66b4c8f5,
			name: "home-teacher-Info"
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
