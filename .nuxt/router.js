import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3b98b638 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _a179f874 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _c8d2382a = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _be71aa42 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _49848a90 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _01cd1106 = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _12d4c324 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _268cbd12 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _468f9fcc = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _9bc36e0c = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _0cd21d89 = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _369b7146 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _195eb04f = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _0328b149 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _6f5d6f1f = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _78a4fb82 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _5449bda4 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _dee84884 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _056dee9a = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _0b2f5dfa = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _405f2682 = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _78611066 = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _62c135ba = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _2d4aa3a8 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _b9001464 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _f29024bc = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _1da0fa5b = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _2bd3bdb7 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _3c06089f = () => import('../pages/backend/course/courseDetail.vue' /* webpackChunkName: "pages/backend/course/courseDetail" */).then(m => m.default || m)
const _0f2ae108 = () => import('../pages/backend/news/newsInfo.vue' /* webpackChunkName: "pages/backend/news/newsInfo" */).then(m => m.default || m)
const _7b063773 = () => import('../pages/backend/project/projectDetail.vue' /* webpackChunkName: "pages/backend/project/projectDetail" */).then(m => m.default || m)
const _de1e58c0 = () => import('../pages/backend/public/footer.vue' /* webpackChunkName: "pages/backend/public/footer" */).then(m => m.default || m)
const _9bb990dc = () => import('../pages/backend/public/header.vue' /* webpackChunkName: "pages/backend/public/header" */).then(m => m.default || m)
const _88cf8eaa = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _8aef8628 = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _3fe57f9e = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _1be93f5a = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _0c4af739 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _c6cad42e = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _2235c6d6 = () => import('../pages/home/certification/searchPage.vue' /* webpackChunkName: "pages/home/certification/searchPage" */).then(m => m.default || m)
const _2332fc93 = () => import('../pages/home/certification/viewPage.vue' /* webpackChunkName: "pages/home/certification/viewPage" */).then(m => m.default || m)
const _76e498f6 = () => import('../pages/home/citySchool/schoolApplication.vue' /* webpackChunkName: "pages/home/citySchool/schoolApplication" */).then(m => m.default || m)
const _11b56e92 = () => import('../pages/home/citySchool/schoolIntro.vue' /* webpackChunkName: "pages/home/citySchool/schoolIntro" */).then(m => m.default || m)
const _129a8605 = () => import('../pages/home/citySchool/submitSuccess.vue' /* webpackChunkName: "pages/home/citySchool/submitSuccess" */).then(m => m.default || m)
const _9309d116 = () => import('../pages/home/citySchool/viewSchoolAddress.vue' /* webpackChunkName: "pages/home/citySchool/viewSchoolAddress" */).then(m => m.default || m)
const _7daa9f39 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _6ceb60d0 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _9af59680 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _5544ec8f = () => import('../pages/home/news/outNews.vue' /* webpackChunkName: "pages/home/news/outNews" */).then(m => m.default || m)
const _d9fea266 = () => import('../pages/home/news/outNewsList.vue' /* webpackChunkName: "pages/home/news/outNewsList" */).then(m => m.default || m)
const _3e248ae7 = () => import('../pages/home/news/payDetail.vue' /* webpackChunkName: "pages/home/news/payDetail" */).then(m => m.default || m)
const _b7ce66d0 = () => import('../pages/home/teacher/beTeacher.vue' /* webpackChunkName: "pages/home/teacher/beTeacher" */).then(m => m.default || m)
const _c087af5c = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _58f7e035 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _af05236a = () => import('../pages/home/teacher/orderTeacher.vue' /* webpackChunkName: "pages/home/teacher/orderTeacher" */).then(m => m.default || m)
const _b1445180 = () => import('../pages/home/vip/vipPage.vue' /* webpackChunkName: "pages/home/vip/vipPage" */).then(m => m.default || m)
const _578997dc = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _84b9ba50 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _9daf893c = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _f216d726 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _9d4ef37c = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _8e4573c8 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _60a28a6e = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _6cce6b3d = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _09b5af88 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _689de620 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _1b0ff2b4 = () => import('../pages/profile/pages/myCollege.vue' /* webpackChunkName: "pages/profile/pages/myCollege" */).then(m => m.default || m)
const _79de92e4 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _afeeb110 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _782cd904 = () => import('../pages/profile/pages/myExamine.vue' /* webpackChunkName: "pages/profile/pages/myExamine" */).then(m => m.default || m)
const _7f5f6412 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _b215573e = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _4cd5bbaa = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _6e944b36 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _4e6e63d6 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _a9b53e02 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _83639f48 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _307c5c46 = () => import('../pages/project/components/CustomerPop.vue' /* webpackChunkName: "pages/project/components/CustomerPop" */).then(m => m.default || m)
const _09497fee = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _0bef7572 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _7edd57f2 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _333366f6 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _9ffebda6 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _418dc758 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _615d3b0e = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _01d33645 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _6fba31d6 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _77c64bfc = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _d5288934 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _2c0e43d8 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _40a21a46 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _39cee716 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _4c8a224a = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _0fa20876 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _886029f4 = () => import('../pages/backend/course/components/Card.vue' /* webpackChunkName: "pages/backend/course/components/Card" */).then(m => m.default || m)
const _58897f07 = () => import('../pages/backend/course/components/CardPlayer.vue' /* webpackChunkName: "pages/backend/course/components/CardPlayer" */).then(m => m.default || m)
const _7fa3fb78 = () => import('../pages/backend/course/components/CourseCatalog.vue' /* webpackChunkName: "pages/backend/course/components/CourseCatalog" */).then(m => m.default || m)
const _03270dea = () => import('../pages/backend/course/components/Line.vue' /* webpackChunkName: "pages/backend/course/components/Line" */).then(m => m.default || m)
const _ce1c4f00 = () => import('../pages/backend/course/components/teacherIntro.vue' /* webpackChunkName: "pages/backend/course/components/teacherIntro" */).then(m => m.default || m)
const _f24df1be = () => import('../pages/backend/project/components/CommonProblems.vue' /* webpackChunkName: "pages/backend/project/components/CommonProblems" */).then(m => m.default || m)
const _5ac5ebb3 = () => import('../pages/backend/project/components/Detail.vue' /* webpackChunkName: "pages/backend/project/components/Detail" */).then(m => m.default || m)
const _1cc16ca2 = () => import('../pages/backend/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/backend/project/components/OfflineDesc" */).then(m => m.default || m)
const _199e10a2 = () => import('../pages/backend/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/backend/project/components/ProjectCourse" */).then(m => m.default || m)
const _2f364e60 = () => import('../pages/backend/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/backend/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _63c34075 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _ad45d736 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _6fdbc304 = () => import('../pages/home/news/components/newsPay.vue' /* webpackChunkName: "pages/home/news/components/newsPay" */).then(m => m.default || m)
const _76c1417c = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _37b4f7de = () => import('../pages/home/teacher/components/teacherCategory.vue' /* webpackChunkName: "pages/home/teacher/components/teacherCategory" */).then(m => m.default || m)
const _7daa8e97 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _bfc931a4 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _6b0b5595 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _d0a5b8d0 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _634565b6 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _de6f1440 = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _44cb05a9 = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _3447114f = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _638f9c48 = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _0a7a6e22 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _20bf35d2 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _ce71c298 = () => import('../pages/profile/components/mycollege/collegeList.vue' /* webpackChunkName: "pages/profile/components/mycollege/collegeList" */).then(m => m.default || m)
const _7d157f2b = () => import('../pages/profile/components/myexamine/answerQuestion.vue' /* webpackChunkName: "pages/profile/components/myexamine/answerQuestion" */).then(m => m.default || m)
const _2570badc = () => import('../pages/profile/components/myexamine/applicantCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/applicantCertificate" */).then(m => m.default || m)
const _ff5ee004 = () => import('../pages/profile/components/myexamine/certificateList.vue' /* webpackChunkName: "pages/profile/components/myexamine/certificateList" */).then(m => m.default || m)
const _1feaf9fb = () => import('../pages/profile/components/myexamine/examineRecord.vue' /* webpackChunkName: "pages/profile/components/myexamine/examineRecord" */).then(m => m.default || m)
const _2f9903d5 = () => import('../pages/profile/components/myexamine/info.vue' /* webpackChunkName: "pages/profile/components/myexamine/info" */).then(m => m.default || m)
const _9e9efd56 = () => import('../pages/profile/components/myexamine/intro.vue' /* webpackChunkName: "pages/profile/components/myexamine/intro" */).then(m => m.default || m)
const _7e3fe61a = () => import('../pages/profile/components/myexamine/reviewing.vue' /* webpackChunkName: "pages/profile/components/myexamine/reviewing" */).then(m => m.default || m)
const _86e239a6 = () => import('../pages/profile/components/myexamine/simulationExam.vue' /* webpackChunkName: "pages/profile/components/myexamine/simulationExam" */).then(m => m.default || m)
const _b05dcb74 = () => import('../pages/profile/components/myexamine/submitPapers.vue' /* webpackChunkName: "pages/profile/components/myexamine/submitPapers" */).then(m => m.default || m)
const _5a681c5b = () => import('../pages/profile/components/myexamine/viewCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/viewCertificate" */).then(m => m.default || m)
const _383798b4 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _6e1f8cb6 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _548d3f7c = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _5f0fafc9 = () => import('../pages/profile/components/mysetting/bindPhone.vue' /* webpackChunkName: "pages/profile/components/mysetting/bindPhone" */).then(m => m.default || m)
const _1795464c = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _7f4fe416 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _ac50aec8 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _77315ed1 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _7e3bac50 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _daca93ec = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _d9e2ac44 = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _6eb7e418 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _6154ee76 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _0a68a941 = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _29f5a135 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _c4b80984 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _257529a6 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _6a3552a8 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _3b98b638,
			name: "home"
		},
		{
			path: "/profile",
			component: _a179f874,
			name: "profile"
		},
		{
			path: "/auth/codeLogin",
			component: _c8d2382a,
			name: "auth-codeLogin"
		},
		{
			path: "/auth/forgotpassword",
			component: _be71aa42,
			name: "auth-forgotpassword"
		},
		{
			path: "/auth/Login",
			component: _49848a90,
			name: "auth-Login"
		},
		{
			path: "/auth/passwordLogin",
			component: _01cd1106,
			name: "auth-passwordLogin"
		},
		{
			path: "/auth/Register",
			component: _12d4c324,
			name: "auth-Register"
		},
		{
			path: "/auth/wechatLogin",
			component: _268cbd12,
			name: "auth-wechatLogin"
		},
		{
			path: "/course/category",
			component: _468f9fcc,
			name: "course-category"
		},
		{
			path: "/course/coursedetail",
			component: _9bc36e0c,
			name: "course-coursedetail",
			children: [
				{
					path: "CourseCatalog",
					component: _0cd21d89,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "EvaluateDialog",
					component: _369b7146,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "teacherIntro",
					component: _195eb04f,
					name: "course-coursedetail-teacherIntro"
				},
				{
					path: "UserEvaluate",
					component: _0328b149,
					name: "course-coursedetail-UserEvaluate"
				}
			]
		},
		{
			path: "/course/detail",
			component: _6f5d6f1f,
			name: "course-detail"
		},
		{
			path: "/project/customerProject",
			component: _78a4fb82,
			name: "project-customerProject"
		},
		{
			path: "/project/projectDetail",
			component: _5449bda4,
			name: "project-projectDetail"
		},
		{
			path: "/project/projectPlayer",
			component: _dee84884,
			name: "project-projectPlayer",
			children: [
				{
					path: "CourseList",
					component: _056dee9a,
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
					component: _0b2f5dfa,
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "player",
					component: _405f2682,
					name: "project-projectPlayer-player"
				},
				{
					path: "playerBottom",
					component: _78611066,
					name: "project-projectPlayer-playerBottom"
				},
				{
					path: "playerTop",
					component: _62c135ba,
					name: "project-projectPlayer-playerTop"
				}
			]
		},
		{
			path: "/shop/affirmOrder",
			component: _2d4aa3a8,
			name: "shop-affirmOrder"
		},
		{
			path: "/shop/paypublic",
			component: _b9001464,
			name: "shop-paypublic"
		},
		{
			path: "/shop/payResult",
			component: _f29024bc,
			name: "shop-payResult"
		},
		{
			path: "/shop/shoppingcart",
			component: _1da0fa5b,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/wePay",
			component: _2bd3bdb7,
			name: "shop-wePay"
		},
		{
			path: "/backend/course/courseDetail",
			component: _3c06089f,
			name: "backend-course-courseDetail"
		},
		{
			path: "/backend/news/newsInfo",
			component: _0f2ae108,
			name: "backend-news-newsInfo"
		},
		{
			path: "/backend/project/projectDetail",
			component: _7b063773,
			name: "backend-project-projectDetail"
		},
		{
			path: "/backend/public/footer",
			component: _de1e58c0,
			name: "backend-public-footer"
		},
		{
			path: "/backend/public/header",
			component: _9bb990dc,
			name: "backend-public-header"
		},
		{
			path: "/course/components/Card",
			component: _88cf8eaa,
			name: "course-components-Card"
		},
		{
			path: "/course/components/CardPlayer",
			component: _8aef8628,
			name: "course-components-CardPlayer"
		},
		{
			path: "/course/components/CardProject",
			component: _3fe57f9e,
			name: "course-components-CardProject"
		},
		{
			path: "/course/components/Filter",
			component: _1be93f5a,
			name: "course-components-Filter"
		},
		{
			path: "/course/components/List",
			component: _0c4af739,
			name: "course-components-List"
		},
		{
			path: "/course/components/ListCard",
			component: _c6cad42e,
			name: "course-components-ListCard"
		},
		{
			path: "/home/certification/searchPage",
			component: _2235c6d6,
			name: "home-certification-searchPage"
		},
		{
			path: "/home/certification/viewPage",
			component: _2332fc93,
			name: "home-certification-viewPage"
		},
		{
			path: "/home/citySchool/schoolApplication",
			component: _76e498f6,
			name: "home-citySchool-schoolApplication"
		},
		{
			path: "/home/citySchool/schoolIntro",
			component: _11b56e92,
			name: "home-citySchool-schoolIntro"
		},
		{
			path: "/home/citySchool/submitSuccess",
			component: _129a8605,
			name: "home-citySchool-submitSuccess"
		},
		{
			path: "/home/citySchool/viewSchoolAddress",
			component: _9309d116,
			name: "home-citySchool-viewSchoolAddress"
		},
		{
			path: "/home/components/homecourse",
			component: _7daa9f39,
			name: "home-components-homecourse"
		},
		{
			path: "/home/news/info",
			component: _6ceb60d0,
			name: "home-news-info"
		},
		{
			path: "/home/news/list",
			component: _9af59680,
			name: "home-news-list"
		},
		{
			path: "/home/news/outNews",
			component: _5544ec8f,
			name: "home-news-outNews"
		},
		{
			path: "/home/news/outNewsList",
			component: _d9fea266,
			name: "home-news-outNewsList"
		},
		{
			path: "/home/news/payDetail",
			component: _3e248ae7,
			name: "home-news-payDetail"
		},
		{
			path: "/home/teacher/beTeacher",
			component: _b7ce66d0,
			name: "home-teacher-beTeacher"
		},
		{
			path: "/home/teacher/famous",
			component: _c087af5c,
			name: "home-teacher-famous"
		},
		{
			path: "/home/teacher/list",
			component: _58f7e035,
			name: "home-teacher-list"
		},
		{
			path: "/home/teacher/orderTeacher",
			component: _af05236a,
			name: "home-teacher-orderTeacher"
		},
		{
			path: "/home/vip/vipPage",
			component: _b1445180,
			name: "home-vip-vipPage"
		},
		{
			path: "/other/activePages/degree",
			component: _578997dc,
			name: "other-activePages-degree"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _84b9ba50,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/other/activePages/faceteach",
			component: _9daf893c,
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/Institutional",
			component: _f216d726,
			name: "other-activePages-Institutional"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _9d4ef37c,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _8e4573c8,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _60a28a6e,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/other/pages/homeUs",
			component: _6cce6b3d,
			name: "other-pages-homeUs"
		},
		{
			path: "/other/pages/search",
			component: _09b5af88,
			name: "other-pages-search"
		},
		{
			path: "/profile/pages/myCode",
			component: _689de620,
			name: "profile-pages-myCode"
		},
		{
			path: "/profile/pages/myCollege",
			component: _1b0ff2b4,
			name: "profile-pages-myCollege"
		},
		{
			path: "/profile/pages/myCourse",
			component: _79de92e4,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _afeeb110,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/profile/pages/myExamine",
			component: _782cd904,
			name: "profile-pages-myExamine"
		},
		{
			path: "/profile/pages/myHome",
			component: _7f5f6412,
			name: "profile-pages-myHome"
		},
		{
			path: "/profile/pages/myInfo",
			component: _b215573e,
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/pages/myOrder",
			component: _4cd5bbaa,
			name: "profile-pages-myOrder"
		},
		{
			path: "/profile/pages/myProject",
			component: _6e944b36,
			name: "profile-pages-myProject"
		},
		{
			path: "/profile/pages/mySettings",
			component: _4e6e63d6,
			name: "profile-pages-mySettings"
		},
		{
			path: "/profile/pages/myTicket",
			component: _a9b53e02,
			name: "profile-pages-myTicket"
		},
		{
			path: "/project/components/CommonProblems",
			component: _83639f48,
			name: "project-components-CommonProblems"
		},
		{
			path: "/project/components/CustomerPop",
			component: _307c5c46,
			name: "project-components-CustomerPop"
		},
		{
			path: "/project/components/Detail",
			component: _09497fee,
			name: "project-components-Detail"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _0bef7572,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _7edd57f2,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _333366f6,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/project/components/ShortList",
			component: _9ffebda6,
			name: "project-components-ShortList"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _418dc758,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _615d3b0e,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _01d33645,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _6fba31d6,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/shop/components/banner",
			component: _77c64bfc,
			name: "shop-components-banner"
		},
		{
			path: "/shop/components/card",
			component: _d5288934,
			name: "shop-components-card"
		},
		{
			path: "/shop/components/List",
			component: _2c0e43d8,
			name: "shop-components-List"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _40a21a46,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _39cee716,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/shop/wepay/payType",
			component: _4c8a224a,
			name: "shop-wepay-payType"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _0fa20876,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/backend/course/components/Card",
			component: _886029f4,
			name: "backend-course-components-Card"
		},
		{
			path: "/backend/course/components/CardPlayer",
			component: _58897f07,
			name: "backend-course-components-CardPlayer"
		},
		{
			path: "/backend/course/components/CourseCatalog",
			component: _7fa3fb78,
			name: "backend-course-components-CourseCatalog"
		},
		{
			path: "/backend/course/components/Line",
			component: _03270dea,
			name: "backend-course-components-Line"
		},
		{
			path: "/backend/course/components/teacherIntro",
			component: _ce1c4f00,
			name: "backend-course-components-teacherIntro"
		},
		{
			path: "/backend/project/components/CommonProblems",
			component: _f24df1be,
			name: "backend-project-components-CommonProblems"
		},
		{
			path: "/backend/project/components/Detail",
			component: _5ac5ebb3,
			name: "backend-project-components-Detail"
		},
		{
			path: "/backend/project/components/OfflineDesc",
			component: _1cc16ca2,
			name: "backend-project-components-OfflineDesc"
		},
		{
			path: "/backend/project/components/ProjectCourse",
			component: _199e10a2,
			name: "backend-project-components-ProjectCourse"
		},
		{
			path: "/backend/project/components/ProjectEvaluate",
			component: _2f364e60,
			name: "backend-project-components-ProjectEvaluate"
		},
		{
			path: "/home/news/components/Info",
			component: _63c34075,
			name: "home-news-components-Info"
		},
		{
			path: "/home/news/components/List",
			component: _ad45d736,
			name: "home-news-components-List"
		},
		{
			path: "/home/news/components/newsPay",
			component: _6fdbc304,
			name: "home-news-components-newsPay"
		},
		{
			path: "/home/teacher/components/Card",
			component: _76c1417c,
			name: "home-teacher-components-Card"
		},
		{
			path: "/home/teacher/components/teacherCategory",
			component: _37b4f7de,
			name: "home-teacher-components-teacherCategory"
		},
		{
			path: "/profile/components/common/Card",
			component: _7daa8e97,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _bfc931a4,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _6b0b5595,
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/common/Detail",
			component: _d0a5b8d0,
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/common/List",
			component: _634565b6,
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _de6f1440,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/common/noMsg",
			component: _44cb05a9,
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/common/search",
			component: _3447114f,
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _638f9c48,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _0a7a6e22,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _20bf35d2,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/mycollege/collegeList",
			component: _ce71c298,
			name: "profile-components-mycollege-collegeList"
		},
		{
			path: "/profile/components/myexamine/answerQuestion",
			component: _7d157f2b,
			name: "profile-components-myexamine-answerQuestion"
		},
		{
			path: "/profile/components/myexamine/applicantCertificate",
			component: _2570badc,
			name: "profile-components-myexamine-applicantCertificate"
		},
		{
			path: "/profile/components/myexamine/certificateList",
			component: _ff5ee004,
			name: "profile-components-myexamine-certificateList"
		},
		{
			path: "/profile/components/myexamine/examineRecord",
			component: _1feaf9fb,
			name: "profile-components-myexamine-examineRecord"
		},
		{
			path: "/profile/components/myexamine/info",
			component: _2f9903d5,
			name: "profile-components-myexamine-info"
		},
		{
			path: "/profile/components/myexamine/intro",
			component: _9e9efd56,
			name: "profile-components-myexamine-intro"
		},
		{
			path: "/profile/components/myexamine/reviewing",
			component: _7e3fe61a,
			name: "profile-components-myexamine-reviewing"
		},
		{
			path: "/profile/components/myexamine/simulationExam",
			component: _86e239a6,
			name: "profile-components-myexamine-simulationExam"
		},
		{
			path: "/profile/components/myexamine/submitPapers",
			component: _b05dcb74,
			name: "profile-components-myexamine-submitPapers"
		},
		{
			path: "/profile/components/myexamine/viewCertificate",
			component: _5a681c5b,
			name: "profile-components-myexamine-viewCertificate"
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _383798b4,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _6e1f8cb6,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _548d3f7c,
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/mysetting/bindPhone",
			component: _5f0fafc9,
			name: "profile-components-mysetting-bindPhone"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _1795464c,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
			component: _7f4fe416,
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _ac50aec8,
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _77315ed1,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _7e3bac50,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _daca93ec,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _d9e2ac44,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _6eb7e418,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _6154ee76,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/profile/components/myticket/ticketRules",
			component: _0a68a941,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/course/list/:courselist?",
			component: _29f5a135,
			name: "course-list-courselist"
		},
		{
			path: "/home/news/:detail?",
			component: _c4b80984,
			name: "home-news-detail"
		},
		{
			path: "/home/teacher/:Info?",
			component: _257529a6,
			name: "home-teacher-Info"
		},
		{
			path: "/",
			component: _6a3552a8,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
