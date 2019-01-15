import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _7d1a2aa0 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _e79e4b0c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _380814a0 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _4c8d9362 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _00250318 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _8a3a125e = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _043a012e = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _17ff52ee = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _734390dc = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _76ee7c90 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _e4b0e2e8 = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _58834be1 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _64ea3eb5 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _9c815e72 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _08c47bd0 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _33e0eb56 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _22ff269a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _11d3c11e = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _e5dcbbf2 = () => import('../pages/home/citySchool/schoolApplication.vue' /* webpackChunkName: "pages/home/citySchool/schoolApplication" */).then(m => m.default || m)
const _66afbef4 = () => import('../pages/home/citySchool/viewSchoolAddress.vue' /* webpackChunkName: "pages/home/citySchool/viewSchoolAddress" */).then(m => m.default || m)
const _1c7d5387 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _e7fb1522 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _d9b7a410 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _8df33654 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _0946fb68 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _b9c1a962 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _27424f3a = () => import('../pages/home/citySchool/schoolIntro.vue' /* webpackChunkName: "pages/home/citySchool/schoolIntro" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _2ba94126 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _04473338 = () => import('../pages/home/certification/viewPage.vue' /* webpackChunkName: "pages/home/certification/viewPage" */).then(m => m.default || m)
const _5d85575f = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _50fc7104 = () => import('../pages/backend/project/projectDetail.vue' /* webpackChunkName: "pages/backend/project/projectDetail" */).then(m => m.default || m)
const _2ede80d4 = () => import('../pages/home/citySchool/submitSuccess.vue' /* webpackChunkName: "pages/home/citySchool/submitSuccess" */).then(m => m.default || m)
const _beca5cde = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _f162805a = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _2a84717c = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _635e25f6 = () => import('../pages/profile/pages/myCollege.vue' /* webpackChunkName: "pages/profile/pages/myCollege" */).then(m => m.default || m)
const _350c0d3b = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _4197ea0d = () => import('../pages/backend/news/newsInfo.vue' /* webpackChunkName: "pages/backend/news/newsInfo" */).then(m => m.default || m)
const _194d54d5 = () => import('../pages/project/components/CustomerPop.vue' /* webpackChunkName: "pages/project/components/CustomerPop" */).then(m => m.default || m)
const _a8614bf0 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _0fa7ff32 = () => import('../pages/home/certification/searchPage.vue' /* webpackChunkName: "pages/home/certification/searchPage" */).then(m => m.default || m)
const _ba78193e = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _3a1e19ba = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _8e5f6a96 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _c0e2a3c6 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _f0b94ee4 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _87a62b28 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _d44b34d8 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _fed277b2 = () => import('../pages/home/teacher/beTeacher.vue' /* webpackChunkName: "pages/home/teacher/beTeacher" */).then(m => m.default || m)
const _15dbb92f = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _4d5733e2 = () => import('../pages/home/vip/vipPage.vue' /* webpackChunkName: "pages/home/vip/vipPage" */).then(m => m.default || m)
const _e12dcf48 = () => import('../pages/home/teacher/orderTeacher.vue' /* webpackChunkName: "pages/home/teacher/orderTeacher" */).then(m => m.default || m)
const _22c27cbc = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _3a4d8454 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _57098d26 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _8f7aa484 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _2e823f54 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _edccf83e = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _e85cb59a = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _cfd39f8c = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _fd4d5490 = () => import('../pages/home/news/payDetail.vue' /* webpackChunkName: "pages/home/news/payDetail" */).then(m => m.default || m)
const _65d32b46 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _1f95ac02 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _4d527e6e = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _82a701b8 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _16af7270 = () => import('../pages/backend/course/courseDetail.vue' /* webpackChunkName: "pages/backend/course/courseDetail" */).then(m => m.default || m)
const _21d54587 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _74343748 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _8f009950 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _6b4c38a0 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _772a8dcf = () => import('../pages/profile/pages/myExamine.vue' /* webpackChunkName: "pages/profile/pages/myExamine" */).then(m => m.default || m)
const _6bf792f4 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _cf7872d2 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _49cf8d4e = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _6d173be7 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _0d5d6d63 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _034cb3a5 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _95a15436 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _df6e8314 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _1b7033c9 = () => import('../pages/backend/course/components/CourseCatalog.vue' /* webpackChunkName: "pages/backend/course/components/CourseCatalog" */).then(m => m.default || m)
const _114e3b1e = () => import('../pages/backend/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/backend/project/components/ProjectCourse" */).then(m => m.default || m)
const _cc1113f4 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _fd1efb52 = () => import('../pages/profile/components/myexamine/submitPapers.vue' /* webpackChunkName: "pages/profile/components/myexamine/submitPapers" */).then(m => m.default || m)
const _b6be38d6 = () => import('../pages/backend/course/components/Card.vue' /* webpackChunkName: "pages/backend/course/components/Card" */).then(m => m.default || m)
const _dfbb9732 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _ecf82f22 = () => import('../pages/backend/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/backend/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _58fd9fa2 = () => import('../pages/home/teacher/components/teacherCategory.vue' /* webpackChunkName: "pages/home/teacher/components/teacherCategory" */).then(m => m.default || m)
const _667b8726 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _6c7b26fc = () => import('../pages/profile/components/myexamine/answerQuestion.vue' /* webpackChunkName: "pages/profile/components/myexamine/answerQuestion" */).then(m => m.default || m)
const _2cbc221e = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _7a38940a = () => import('../pages/profile/components/myexamine/examineRecord.vue' /* webpackChunkName: "pages/profile/components/myexamine/examineRecord" */).then(m => m.default || m)
const _53546631 = () => import('../pages/backend/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/backend/project/components/OfflineDesc" */).then(m => m.default || m)
const _d4baad50 = () => import('../pages/profile/components/mysetting/bindPhone.vue' /* webpackChunkName: "pages/profile/components/mysetting/bindPhone" */).then(m => m.default || m)
const _4aaeea86 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _788b7191 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _cd855f26 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _7681f083 = () => import('../pages/profile/components/mycollege/collegeList.vue' /* webpackChunkName: "pages/profile/components/mycollege/collegeList" */).then(m => m.default || m)
const _12fd9722 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _bcc361b8 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _7d9fe24d = () => import('../pages/profile/components/myexamine/certificateList.vue' /* webpackChunkName: "pages/profile/components/myexamine/certificateList" */).then(m => m.default || m)
const _37358a26 = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _0a841c69 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _280ff30e = () => import('../pages/backend/course/components/Line.vue' /* webpackChunkName: "pages/backend/course/components/Line" */).then(m => m.default || m)
const _c4d64b84 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _6c3a1e1b = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _60786f32 = () => import('../pages/backend/project/components/CommonProblems.vue' /* webpackChunkName: "pages/backend/project/components/CommonProblems" */).then(m => m.default || m)
const _60249a64 = () => import('../pages/profile/components/myexamine/intro.vue' /* webpackChunkName: "pages/profile/components/myexamine/intro" */).then(m => m.default || m)
const _d498fc26 = () => import('../pages/profile/components/myexamine/applicantCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/applicantCertificate" */).then(m => m.default || m)
const _45c60ce6 = () => import('../pages/profile/components/myexamine/info.vue' /* webpackChunkName: "pages/profile/components/myexamine/info" */).then(m => m.default || m)
const _91a37498 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _1119f2fc = () => import('../pages/profile/components/myexamine/reviewing.vue' /* webpackChunkName: "pages/profile/components/myexamine/reviewing" */).then(m => m.default || m)
const _4295eecd = () => import('../pages/home/news/components/newsPay.vue' /* webpackChunkName: "pages/home/news/components/newsPay" */).then(m => m.default || m)
const _3f232f91 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _76191efa = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _a816ea04 = () => import('../pages/profile/components/myexamine/simulationExam.vue' /* webpackChunkName: "pages/profile/components/myexamine/simulationExam" */).then(m => m.default || m)
const _07ff4276 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _78dd71be = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _1a07e4a1 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _70f2f4c4 = () => import('../pages/backend/project/components/Detail.vue' /* webpackChunkName: "pages/backend/project/components/Detail" */).then(m => m.default || m)
const _6cae11ef = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _57b76eaa = () => import('../pages/profile/components/myexamine/viewCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/viewCertificate" */).then(m => m.default || m)
const _6695a796 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _b3963cdc = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _b215021e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _5c1fa2ae = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _936f1f82 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _05bdb272 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _0948df54 = () => import('../pages/backend/course/components/CardPlayer.vue' /* webpackChunkName: "pages/backend/course/components/CardPlayer" */).then(m => m.default || m)
const _ab017362 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4592c8f4 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _97f97e96 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _121a4c47,
			name: "home"
		},
		{
			path: "/profile",
			component: _01587f57,
			name: "profile"
		},
		{
			path: "/project/projectDetail",
			component: _1f087bbf,
			name: "project-projectDetail"
		},
		{
			path: "/course/detail",
			component: _7d1a2aa0,
			name: "course-detail"
		},
		{
			path: "/course/category",
			component: _69347b1d,
			name: "course-category"
		},
		{
			path: "/auth/codeLogin",
			component: _e79e4b0c,
			name: "auth-codeLogin"
		},
		{
			path: "/auth/forgotpassword",
			component: _380814a0,
			name: "auth-forgotpassword"
		},
		{
			path: "/project/projectPlayer",
			component: _4c8d9362,
			name: "project-projectPlayer",
			children: [
				{
					path: "playerTop",
					component: _00250318,
					name: "project-projectPlayer-playerTop"
				},
				{
					path: "player",
					component: _8a3a125e,
					name: "project-projectPlayer-player"
				},
				{
					path: "CourseList",
					component: _043a012e,
					name: "project-projectPlayer-CourseList"
				},
				{
					path: "evaluate",
					component: _17ff52ee,
					name: "project-projectPlayer-evaluate"
				},
				{
					path: "playerBottom",
					component: _734390dc,
					name: "project-projectPlayer-playerBottom"
				}
			]
		},
		{
			path: "/project/customerProject",
			component: _76ee7c90,
			name: "project-customerProject"
		},
		{
			path: "/auth/passwordLogin",
			component: _e4b0e2e8,
			name: "auth-passwordLogin"
		},
		{
			path: "/shop/payResult",
			component: _7751e431,
			name: "shop-payResult"
		},
		{
			path: "/shop/shoppingcart",
			component: _2a7c456c,
			name: "shop-shoppingcart"
		},
		{
			path: "/shop/affirmOrder",
			component: _5f413277,
			name: "shop-affirmOrder"
		},
		{
			path: "/auth/wechatLogin",
			component: _58834be1,
			name: "auth-wechatLogin"
		},
		{
			path: "/shop/wePay",
			component: _025553c6,
			name: "shop-wePay"
		},
		{
			path: "/shop/paypublic",
			component: _d7cc2746,
			name: "shop-paypublic"
		},
		{
			path: "/auth/Register",
			component: _64ea3eb5,
			name: "auth-Register"
		},
		{
			path: "/auth/Login",
			component: _9c815e72,
			name: "auth-Login"
		},
		{
			path: "/course/coursedetail",
			component: _1559d86a,
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
					component: _08c47bd0,
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
					component: _33e0eb56,
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
					component: _22ff269a,
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
					component: _11d3c11e,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/home/citySchool/schoolApplication",
			component: _e5dcbbf2,
			name: "home-citySchool-schoolApplication"
		},
		{
			path: "/home/citySchool/viewSchoolAddress",
			component: _66afbef4,
			name: "home-citySchool-viewSchoolAddress"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _1c7d5387,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/profile/pages/myCode",
			component: _e7fb1522,
			name: "profile-pages-myCode"
		},
		{
			path: "/course/components/ListCard",
			component: _d9b7a410,
			name: "course-components-ListCard"
		},
		{
			path: "/project/components/ProjectCourse",
			component: _8df33654,
			name: "project-components-ProjectCourse"
		},
		{
			path: "/other/pages/homeUs",
			component: _0946fb68,
			name: "other-pages-homeUs"
		},
		{
			path: "/home/news/list",
			component: _b9c1a962,
			name: "home-news-list"
		},
		{
			path: "/home/citySchool/schoolIntro",
			component: _27424f3a,
			name: "home-citySchool-schoolIntro"
		},
		{
			path: "/course/components/List",
			component: _2e6e2270,
			name: "course-components-List"
		},
		{
			path: "/other/activePages/policyProgram",
			component: _2ba94126,
			name: "other-activePages-policyProgram"
		},
		{
			path: "/home/certification/viewPage",
			component: _04473338,
			name: "home-certification-viewPage"
		},
		{
			path: "/home/news/info",
			component: _5d85575f,
			name: "home-news-info"
		},
		{
			path: "/backend/project/projectDetail",
			component: _50fc7104,
			name: "backend-project-projectDetail"
		},
		{
			path: "/home/citySchool/submitSuccess",
			component: _2ede80d4,
			name: "home-citySchool-submitSuccess"
		},
		{
			path: "/shop/components/banner",
			component: _beca5cde,
			name: "shop-components-banner"
		},
		{
			path: "/other/activePages/partypolicy",
			component: _f162805a,
			name: "other-activePages-partypolicy"
		},
		{
			path: "/project/components/ShortList",
			component: _2a84717c,
			name: "project-components-ShortList"
		},
		{
			path: "/profile/pages/myCollege",
			component: _635e25f6,
			name: "profile-pages-myCollege"
		},
		{
			path: "/course/components/CardPlayer",
			component: _350c0d3b,
			name: "course-components-CardPlayer"
		},
		{
			path: "/backend/news/newsInfo",
			component: _4197ea0d,
			name: "backend-news-newsInfo"
		},
		{
			path: "/project/components/CustomerPop",
			component: _194d54d5,
			name: "project-components-CustomerPop"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _a8614bf0,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/home/certification/searchPage",
			component: _0fa7ff32,
			name: "home-certification-searchPage"
		},
		{
			path: "/profile/pages/myHome",
			component: _ba78193e,
			name: "profile-pages-myHome"
		},
		{
			path: "/home/teacher/famous",
			component: _3a1e19ba,
			name: "home-teacher-famous"
		},
		{
			path: "/shop/components/card",
			component: _8e5f6a96,
			name: "shop-components-card"
		},
		{
			path: "/profile/pages/myCourse",
			component: _c0e2a3c6,
			name: "profile-pages-myCourse"
		},
		{
			path: "/profile/pages/myTicket",
			component: _f0b94ee4,
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/shopCart/allCheck",
			component: _87a62b28,
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ProjectEvaluate",
			component: _d44b34d8,
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/home/teacher/beTeacher",
			component: _fed277b2,
			name: "home-teacher-beTeacher"
		},
		{
			path: "/course/components/CardProject",
			component: _15dbb92f,
			name: "course-components-CardProject"
		},
		{
			path: "/home/vip/vipPage",
			component: _4d5733e2,
			name: "home-vip-vipPage"
		},
		{
			path: "/home/teacher/orderTeacher",
			component: _e12dcf48,
			name: "home-teacher-orderTeacher"
		},
		{
			path: "/profile/pages/myOrder",
			component: _22c27cbc,
			name: "profile-pages-myOrder"
		},
		{
			path: "/project/components/OfflineDesc",
			component: _3a4d8454,
			name: "project-components-OfflineDesc"
		},
		{
			path: "/project/components/CommonProblems",
			component: _57098d26,
			name: "project-components-CommonProblems"
		},
		{
			path: "/other/activePages/Institutional",
			component: _8f7aa484,
			name: "other-activePages-Institutional"
		},
		{
			path: "/shop/affirmorder/orderBtn",
			component: _2e823f54,
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/other/activePages/degree",
			component: _edccf83e,
			name: "other-activePages-degree"
		},
		{
			path: "/other/activePages/faceteach",
			component: _e85cb59a,
			name: "other-activePages-faceteach"
		},
		{
			path: "/course/components/Card",
			component: _cfd39f8c,
			name: "course-components-Card"
		},
		{
			path: "/home/news/payDetail",
			component: _fd4d5490,
			name: "home-news-payDetail"
		},
		{
			path: "/home/teacher/list",
			component: _65d32b46,
			name: "home-teacher-list"
		},
		{
			path: "/project/components/Detail",
			component: _1f95ac02,
			name: "project-components-Detail"
		},
		{
			path: "/profile/pages/myCustomerProject",
			component: _4d527e6e,
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/shop/affirmorder/orderInfo",
			component: _82a701b8,
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/backend/course/courseDetail",
			component: _16af7270,
			name: "backend-course-courseDetail"
		},
		{
			path: "/profile/pages/myProject",
			component: _21d54587,
			name: "profile-pages-myProject"
		},
		{
			path: "/course/components/Filter",
			component: _b22c9fbc,
			name: "course-components-Filter"
		},
		{
			path: "/home/components/homecourse",
			component: _74343748,
			name: "home-components-homecourse"
		},
		{
			path: "/other/activePages/userProtocol",
			component: _8f009950,
			name: "other-activePages-userProtocol"
		},
		{
			path: "/profile/pages/myInfo",
			component: _6b4c38a0,
			name: "profile-pages-myInfo"
		},
		{
			path: "/profile/pages/myExamine",
			component: _772a8dcf,
			name: "profile-pages-myExamine"
		},
		{
			path: "/shop/shopCart/tableHeader",
			component: _6bf792f4,
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/other/pages/search",
			component: _cf7872d2,
			name: "other-pages-search"
		},
		{
			path: "/shop/wepay/payType",
			component: _49cf8d4e,
			name: "shop-wepay-payType"
		},
		{
			path: "/other/activePages/enterprisecustom",
			component: _6d173be7,
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/shop/components/List",
			component: _0d5d6d63,
			name: "shop-components-List"
		},
		{
			path: "/profile/pages/mySettings",
			component: _034cb3a5,
			name: "profile-pages-mySettings"
		},
		{
			path: "/shop/affirmorder/backShopCart",
			component: _95a15436,
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/home/news/components/List",
			component: _df6e8314,
			name: "home-news-components-List"
		},
		{
			path: "/backend/course/components/CourseCatalog",
			component: _1b7033c9,
			name: "backend-course-components-CourseCatalog"
		},
		{
			path: "/backend/project/components/ProjectCourse",
			component: _114e3b1e,
			name: "backend-project-components-ProjectCourse"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
			component: _cc1113f4,
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/myexamine/submitPapers",
			component: _fd1efb52,
			name: "profile-components-myexamine-submitPapers"
		},
		{
			path: "/backend/course/components/Card",
			component: _b6be38d6,
			name: "backend-course-components-Card"
		},
		{
			path: "/profile/components/common/Detail",
			component: _dfbb9732,
			name: "profile-components-common-Detail"
		},
		{
			path: "/backend/project/components/ProjectEvaluate",
			component: _ecf82f22,
			name: "backend-project-components-ProjectEvaluate"
		},
		{
			path: "/home/teacher/components/teacherCategory",
			component: _58fd9fa2,
			name: "home-teacher-components-teacherCategory"
		},
		{
			path: "/profile/components/common/Card",
			component: _667b8726,
			name: "profile-components-common-Card"
		},
		{
			path: "/profile/components/myexamine/answerQuestion",
			component: _6c7b26fc,
			name: "profile-components-myexamine-answerQuestion"
		},
		{
			path: "/profile/components/common/search",
			component: _2cbc221e,
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/myexamine/examineRecord",
			component: _7a38940a,
			name: "profile-components-myexamine-examineRecord"
		},
		{
			path: "/backend/project/components/OfflineDesc",
			component: _53546631,
			name: "backend-project-components-OfflineDesc"
		},
		{
			path: "/profile/components/mysetting/bindPhone",
			component: _d4baad50,
			name: "profile-components-mysetting-bindPhone"
		},
		{
			path: "/home/news/components/Info",
			component: _4aaeea86,
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/myorder/OrderList",
			component: _788b7191,
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _cd855f26,
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/mycollege/collegeList",
			component: _7681f083,
			name: "profile-components-mycollege-collegeList"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _12fd9722,
			name: "profile-components-myticket-detailPopup"
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _bcc361b8,
			name: "profile-components-common-CustomerCard"
		},
		{
			path: "/profile/components/myexamine/certificateList",
			component: _7d9fe24d,
			name: "profile-components-myexamine-certificateList"
		},
		{
			path: "/profile/components/mycode/BindIng",
			component: _37358a26,
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _0a841c69,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/backend/course/components/Line",
			component: _280ff30e,
			name: "backend-course-components-Line"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _c4d64b84,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
			component: _6c3a1e1b,
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/backend/project/components/CommonProblems",
			component: _60786f32,
			name: "backend-project-components-CommonProblems"
		},
		{
			path: "/profile/components/myexamine/intro",
			component: _60249a64,
			name: "profile-components-myexamine-intro"
		},
		{
			path: "/profile/components/myexamine/applicantCertificate",
			component: _d498fc26,
			name: "profile-components-myexamine-applicantCertificate"
		},
		{
			path: "/profile/components/myexamine/info",
			component: _45c60ce6,
			name: "profile-components-myexamine-info"
		},
		{
			path: "/profile/components/common/List",
			component: _91a37498,
			name: "profile-components-common-List"
		},
		{
			path: "/profile/components/myexamine/reviewing",
			component: _1119f2fc,
			name: "profile-components-myexamine-reviewing"
		},
		{
			path: "/home/news/components/newsPay",
			component: _4295eecd,
			name: "home-news-components-newsPay"
		},
		{
			path: "/home/teacher/components/Card",
			component: _3f232f91,
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/common/noMsg",
			component: _76191efa,
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/myexamine/simulationExam",
			component: _a816ea04,
			name: "profile-components-myexamine-simulationExam"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _07ff4276,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/profile/components/mycode/invitation",
			component: _78dd71be,
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _1a07e4a1,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/backend/project/components/Detail",
			component: _70f2f4c4,
			name: "backend-project-components-Detail"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
			component: _6cae11ef,
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/myexamine/viewCertificate",
			component: _57b76eaa,
			name: "profile-components-myexamine-viewCertificate"
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _6695a796,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/profile/components/myticket/ticketRules",
			component: _b3963cdc,
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _b215021e,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _5c1fa2ae,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/common/CardTab",
			component: _936f1f82,
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
			component: _05bdb272,
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/backend/course/components/CardPlayer",
			component: _0948df54,
			name: "backend-course-components-CardPlayer"
		},
		{
			path: "/home/news/:detail?",
			component: _ab017362,
			name: "home-news-detail"
		},
		{
			path: "/course/list/:courselist?",
			component: _4592c8f4,
			name: "course-list-courselist"
		},
		{
			path: "/home/teacher/:Info?",
			component: _97f97e96,
			name: "home-teacher-Info"
		},
		{
			path: "/",
			component: _06d81986,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
