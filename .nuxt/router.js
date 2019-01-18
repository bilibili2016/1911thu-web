import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const _121a4c47 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _01587f57 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _1f087bbf = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _1559d86a = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _08c47bd0 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _33e0eb56 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _22ff269a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _11d3c11e = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
const _7d1a2aa0 = () => import('../pages/course/detail.vue' /* webpackChunkName: "pages/course/detail" */).then(m => m.default || m)
const _64ea3eb5 = () => import('../pages/auth/Register.vue' /* webpackChunkName: "pages/auth/Register" */).then(m => m.default || m)
const _e4b0e2e8 = () => import('../pages/auth/passwordLogin.vue' /* webpackChunkName: "pages/auth/passwordLogin" */).then(m => m.default || m)
const _4c8d9362 = () => import('../pages/project/projectPlayer.vue' /* webpackChunkName: "pages/project/projectPlayer" */).then(m => m.default || m)
const _00250318 = () => import('../pages/project/projectPlayer/playerTop.vue' /* webpackChunkName: "pages/project/projectPlayer/playerTop" */).then(m => m.default || m)
const _8a3a125e = () => import('../pages/project/projectPlayer/player.vue' /* webpackChunkName: "pages/project/projectPlayer/player" */).then(m => m.default || m)
const _043a012e = () => import('../pages/project/projectPlayer/CourseList.vue' /* webpackChunkName: "pages/project/projectPlayer/CourseList" */).then(m => m.default || m)
const _17ff52ee = () => import('../pages/project/projectPlayer/evaluate.vue' /* webpackChunkName: "pages/project/projectPlayer/evaluate" */).then(m => m.default || m)
const _734390dc = () => import('../pages/project/projectPlayer/playerBottom.vue' /* webpackChunkName: "pages/project/projectPlayer/playerBottom" */).then(m => m.default || m)
const _76ee7c90 = () => import('../pages/project/customerProject.vue' /* webpackChunkName: "pages/project/customerProject" */).then(m => m.default || m)
const _9c815e72 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _7751e431 = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _2a7c456c = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _5f413277 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _58834be1 = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _025553c6 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _d7cc2746 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _380814a0 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _69347b1d = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _e79e4b0c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _6b4c38a0 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _2ede80d4 = () => import('../pages/home/citySchool/submitSuccess.vue' /* webpackChunkName: "pages/home/citySchool/submitSuccess" */).then(m => m.default || m)
const _1c7d5387 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _4d5733e2 = () => import('../pages/home/vip/vipPage.vue' /* webpackChunkName: "pages/home/vip/vipPage" */).then(m => m.default || m)
const _95a15436 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _350c0d3b = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _d9b7a410 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _2e6e2270 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _6bf792f4 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _8f009950 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _8f7aa484 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _e7fb1522 = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _2e823f54 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _3a1e19ba = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _034cb3a5 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _04473338 = () => import('../pages/home/certification/viewPage.vue' /* webpackChunkName: "pages/home/certification/viewPage" */).then(m => m.default || m)
const _ba78193e = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _8e5f6a96 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _c0e2a3c6 = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _2a84717c = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _3a4d8454 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _095edbba = () => import('../pages/backend/public/header.vue' /* webpackChunkName: "pages/backend/public/header" */).then(m => m.default || m)
const _e85cb59a = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _2ba94126 = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _e5dcbbf2 = () => import('../pages/home/citySchool/schoolApplication.vue' /* webpackChunkName: "pages/home/citySchool/schoolApplication" */).then(m => m.default || m)
const _635e25f6 = () => import('../pages/profile/pages/myCollege.vue' /* webpackChunkName: "pages/profile/pages/myCollege" */).then(m => m.default || m)
const _beca5cde = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _0fa7ff32 = () => import('../pages/home/certification/searchPage.vue' /* webpackChunkName: "pages/home/certification/searchPage" */).then(m => m.default || m)
const _e12dcf48 = () => import('../pages/home/teacher/orderTeacher.vue' /* webpackChunkName: "pages/home/teacher/orderTeacher" */).then(m => m.default || m)
const _5d85575f = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _1f95ac02 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _87a62b28 = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _d44b34d8 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _21d54587 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _fd4d5490 = () => import('../pages/home/news/payDetail.vue' /* webpackChunkName: "pages/home/news/payDetail" */).then(m => m.default || m)
const _b9c1a962 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _cf7872d2 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _8df33654 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _194d54d5 = () => import('../pages/project/components/CustomerPop.vue' /* webpackChunkName: "pages/project/components/CustomerPop" */).then(m => m.default || m)
const _66afbef4 = () => import('../pages/home/citySchool/viewSchoolAddress.vue' /* webpackChunkName: "pages/home/citySchool/viewSchoolAddress" */).then(m => m.default || m)
const _a8614bf0 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _22c27cbc = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _f162805a = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _edccf83e = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _27424f3a = () => import('../pages/home/citySchool/schoolIntro.vue' /* webpackChunkName: "pages/home/citySchool/schoolIntro" */).then(m => m.default || m)
const _15dbb92f = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _4197ea0d = () => import('../pages/backend/news/newsInfo.vue' /* webpackChunkName: "pages/backend/news/newsInfo" */).then(m => m.default || m)
const _0946fb68 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _4d527e6e = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _b22c9fbc = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _6d173be7 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _82a701b8 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _50fc7104 = () => import('../pages/backend/project/projectDetail.vue' /* webpackChunkName: "pages/backend/project/projectDetail" */).then(m => m.default || m)
const _4bc3a39e = () => import('../pages/backend/public/footer.vue' /* webpackChunkName: "pages/backend/public/footer" */).then(m => m.default || m)
const _74343748 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _cfd39f8c = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _772a8dcf = () => import('../pages/profile/pages/myExamine.vue' /* webpackChunkName: "pages/profile/pages/myExamine" */).then(m => m.default || m)
const _fed277b2 = () => import('../pages/home/teacher/beTeacher.vue' /* webpackChunkName: "pages/home/teacher/beTeacher" */).then(m => m.default || m)
const _57098d26 = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _49cf8d4e = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _f0b94ee4 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _0d5d6d63 = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _65d32b46 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _16af7270 = () => import('../pages/backend/course/courseDetail.vue' /* webpackChunkName: "pages/backend/course/courseDetail" */).then(m => m.default || m)
const _c4d64b84 = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _fd1efb52 = () => import('../pages/profile/components/myexamine/submitPapers.vue' /* webpackChunkName: "pages/profile/components/myexamine/submitPapers" */).then(m => m.default || m)
const _60249a64 = () => import('../pages/profile/components/myexamine/intro.vue' /* webpackChunkName: "pages/profile/components/myexamine/intro" */).then(m => m.default || m)
const _bcc361b8 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _91a37498 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _4295eecd = () => import('../pages/home/news/components/newsPay.vue' /* webpackChunkName: "pages/home/news/components/newsPay" */).then(m => m.default || m)
const _0a841c69 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _b6be38d6 = () => import('../pages/backend/course/components/Card.vue' /* webpackChunkName: "pages/backend/course/components/Card" */).then(m => m.default || m)
const _b215021e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _cd855f26 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _12fd9722 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _60f65be2 = () => import('../pages/backend/course/components/teacherIntro.vue' /* webpackChunkName: "pages/backend/course/components/teacherIntro" */).then(m => m.default || m)
const _280ff30e = () => import('../pages/backend/course/components/Line.vue' /* webpackChunkName: "pages/backend/course/components/Line" */).then(m => m.default || m)
const _2cbc221e = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _6c3a1e1b = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _5c1fa2ae = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _b3963cdc = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _70f2f4c4 = () => import('../pages/backend/project/components/Detail.vue' /* webpackChunkName: "pages/backend/project/components/Detail" */).then(m => m.default || m)
const _936f1f82 = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _78dd71be = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _ecf82f22 = () => import('../pages/backend/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/backend/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _1b7033c9 = () => import('../pages/backend/course/components/CourseCatalog.vue' /* webpackChunkName: "pages/backend/course/components/CourseCatalog" */).then(m => m.default || m)
const _6cae11ef = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _d498fc26 = () => import('../pages/profile/components/myexamine/applicantCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/applicantCertificate" */).then(m => m.default || m)
const _05bdb272 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _58fd9fa2 = () => import('../pages/home/teacher/components/teacherCategory.vue' /* webpackChunkName: "pages/home/teacher/components/teacherCategory" */).then(m => m.default || m)
const _0948df54 = () => import('../pages/backend/course/components/CardPlayer.vue' /* webpackChunkName: "pages/backend/course/components/CardPlayer" */).then(m => m.default || m)
const _7a38940a = () => import('../pages/profile/components/myexamine/examineRecord.vue' /* webpackChunkName: "pages/profile/components/myexamine/examineRecord" */).then(m => m.default || m)
const _788b7191 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _37358a26 = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _6c7b26fc = () => import('../pages/profile/components/myexamine/answerQuestion.vue' /* webpackChunkName: "pages/profile/components/myexamine/answerQuestion" */).then(m => m.default || m)
const _45c60ce6 = () => import('../pages/profile/components/myexamine/info.vue' /* webpackChunkName: "pages/profile/components/myexamine/info" */).then(m => m.default || m)
const _57b76eaa = () => import('../pages/profile/components/myexamine/viewCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/viewCertificate" */).then(m => m.default || m)
const _df6e8314 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _a816ea04 = () => import('../pages/profile/components/myexamine/simulationExam.vue' /* webpackChunkName: "pages/profile/components/myexamine/simulationExam" */).then(m => m.default || m)
const _7681f083 = () => import('../pages/profile/components/mycollege/collegeList.vue' /* webpackChunkName: "pages/profile/components/mycollege/collegeList" */).then(m => m.default || m)
const _cc1113f4 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _dfbb9732 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _7d9fe24d = () => import('../pages/profile/components/myexamine/certificateList.vue' /* webpackChunkName: "pages/profile/components/myexamine/certificateList" */).then(m => m.default || m)
const _1a07e4a1 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _60786f32 = () => import('../pages/backend/project/components/CommonProblems.vue' /* webpackChunkName: "pages/backend/project/components/CommonProblems" */).then(m => m.default || m)
const _07ff4276 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _3f232f91 = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _76191efa = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _667b8726 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _53546631 = () => import('../pages/backend/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/backend/project/components/OfflineDesc" */).then(m => m.default || m)
const _1119f2fc = () => import('../pages/profile/components/myexamine/reviewing.vue' /* webpackChunkName: "pages/profile/components/myexamine/reviewing" */).then(m => m.default || m)
const _4aaeea86 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _6695a796 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _114e3b1e = () => import('../pages/backend/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/backend/project/components/ProjectCourse" */).then(m => m.default || m)
const _d4baad50 = () => import('../pages/profile/components/mysetting/bindPhone.vue' /* webpackChunkName: "pages/profile/components/mysetting/bindPhone" */).then(m => m.default || m)
const _ab017362 = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _4592c8f4 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _97f97e96 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _06d81986 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
=======
const _69f81487 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _1b62cf17 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _3eb1e902 = () => import('../pages/project/projectDetail.vue' /* webpackChunkName: "pages/project/projectDetail" */).then(m => m.default || m)
const _ce5ad8ea = () => import('../pages/course/coursedetail.vue' /* webpackChunkName: "pages/course/coursedetail" */).then(m => m.default || m)
const _a8484b50 = () => import('../pages/course/coursedetail/UserEvaluate.vue' /* webpackChunkName: "pages/course/coursedetail/UserEvaluate" */).then(m => m.default || m)
const _7f289295 = () => import('../pages/course/coursedetail/EvaluateDialog.vue' /* webpackChunkName: "pages/course/coursedetail/EvaluateDialog" */).then(m => m.default || m)
const _7a84165a = () => import('../pages/course/coursedetail/CourseCatalog.vue' /* webpackChunkName: "pages/course/coursedetail/CourseCatalog" */).then(m => m.default || m)
const _7bdc4d44 = () => import('../pages/course/coursedetail/teacherIntro.vue' /* webpackChunkName: "pages/course/coursedetail/teacherIntro" */).then(m => m.default || m)
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
const _099d1907 = () => import('../pages/auth/Login.vue' /* webpackChunkName: "pages/auth/Login" */).then(m => m.default || m)
const _c2dce71e = () => import('../pages/shop/payResult.vue' /* webpackChunkName: "pages/shop/payResult" */).then(m => m.default || m)
const _d94e95a8 = () => import('../pages/shop/shoppingcart.vue' /* webpackChunkName: "pages/shop/shoppingcart" */).then(m => m.default || m)
const _95906a92 = () => import('../pages/shop/affirmOrder.vue' /* webpackChunkName: "pages/shop/affirmOrder" */).then(m => m.default || m)
const _a30c37be = () => import('../pages/auth/wechatLogin.vue' /* webpackChunkName: "pages/auth/wechatLogin" */).then(m => m.default || m)
const _5a331c06 = () => import('../pages/shop/wePay.vue' /* webpackChunkName: "pages/shop/wePay" */).then(m => m.default || m)
const _894cd6c6 = () => import('../pages/shop/paypublic.vue' /* webpackChunkName: "pages/shop/paypublic" */).then(m => m.default || m)
const _f1091520 = () => import('../pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */).then(m => m.default || m)
const _29e9dadd = () => import('../pages/course/category.vue' /* webpackChunkName: "pages/course/category" */).then(m => m.default || m)
const _991efa8c = () => import('../pages/auth/codeLogin.vue' /* webpackChunkName: "pages/auth/codeLogin" */).then(m => m.default || m)
const _d26b4820 = () => import('../pages/profile/pages/myInfo.vue' /* webpackChunkName: "pages/profile/pages/myInfo" */).then(m => m.default || m)
const _ccf8e154 = () => import('../pages/home/citySchool/submitSuccess.vue' /* webpackChunkName: "pages/home/citySchool/submitSuccess" */).then(m => m.default || m)
const _f54c7972 = () => import('../pages/shop/wepay/qrcode.vue' /* webpackChunkName: "pages/shop/wepay/qrcode" */).then(m => m.default || m)
const _2f4afe4f = () => import('../pages/home/vip/vipPage.vue' /* webpackChunkName: "pages/home/vip/vipPage" */).then(m => m.default || m)
const _662225a5 = () => import('../pages/shop/affirmorder/backShopCart.vue' /* webpackChunkName: "pages/shop/affirmorder/backShopCart" */).then(m => m.default || m)
const _92bf750a = () => import('../pages/course/components/CardPlayer.vue' /* webpackChunkName: "pages/course/components/CardPlayer" */).then(m => m.default || m)
const _70e97638 = () => import('../pages/course/components/ListCard.vue' /* webpackChunkName: "pages/course/components/ListCard" */).then(m => m.default || m)
const _5afc5708 = () => import('../pages/course/components/List.vue' /* webpackChunkName: "pages/course/components/List" */).then(m => m.default || m)
const _7654e646 = () => import('../pages/shop/shopCart/tableHeader.vue' /* webpackChunkName: "pages/shop/shopCart/tableHeader" */).then(m => m.default || m)
const _25e6db98 = () => import('../pages/other/activePages/userProtocol.vue' /* webpackChunkName: "pages/other/activePages/userProtocol" */).then(m => m.default || m)
const _107ee504 = () => import('../pages/other/activePages/Institutional.vue' /* webpackChunkName: "pages/other/activePages/Institutional" */).then(m => m.default || m)
const _5872edaf = () => import('../pages/profile/pages/myCode.vue' /* webpackChunkName: "pages/profile/pages/myCode" */).then(m => m.default || m)
const _d5e0dfd4 = () => import('../pages/shop/affirmorder/orderBtn.vue' /* webpackChunkName: "pages/shop/affirmorder/orderBtn" */).then(m => m.default || m)
const _f31f1a3a = () => import('../pages/home/teacher/famous.vue' /* webpackChunkName: "pages/home/teacher/famous" */).then(m => m.default || m)
const _9371e836 = () => import('../pages/profile/pages/mySettings.vue' /* webpackChunkName: "pages/profile/pages/mySettings" */).then(m => m.default || m)
const _4e7fb3b8 = () => import('../pages/home/certification/viewPage.vue' /* webpackChunkName: "pages/home/certification/viewPage" */).then(m => m.default || m)
const _6f346ba1 = () => import('../pages/profile/pages/myHome.vue' /* webpackChunkName: "pages/profile/pages/myHome" */).then(m => m.default || m)
const _f57e7a16 = () => import('../pages/shop/components/card.vue' /* webpackChunkName: "pages/shop/components/card" */).then(m => m.default || m)
const _11c2165d = () => import('../pages/profile/pages/myCourse.vue' /* webpackChunkName: "pages/profile/pages/myCourse" */).then(m => m.default || m)
const _a7ceac88 = () => import('../pages/project/components/ShortList.vue' /* webpackChunkName: "pages/project/components/ShortList" */).then(m => m.default || m)
const _50406616 = () => import('../pages/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/project/components/OfflineDesc" */).then(m => m.default || m)
const _8621bc3a = () => import('../pages/backend/public/header.vue' /* webpackChunkName: "pages/backend/public/header" */).then(m => m.default || m)
const _66b564f3 = () => import('../pages/other/activePages/faceteach.vue' /* webpackChunkName: "pages/other/activePages/faceteach" */).then(m => m.default || m)
const _29a93f2d = () => import('../pages/other/activePages/policyProgram.vue' /* webpackChunkName: "pages/other/activePages/policyProgram" */).then(m => m.default || m)
const _36d2dc72 = () => import('../pages/home/citySchool/schoolApplication.vue' /* webpackChunkName: "pages/home/citySchool/schoolApplication" */).then(m => m.default || m)
const _baeae676 = () => import('../pages/profile/pages/myCollege.vue' /* webpackChunkName: "pages/profile/pages/myCollege" */).then(m => m.default || m)
const _12ce39d1 = () => import('../pages/shop/components/banner.vue' /* webpackChunkName: "pages/shop/components/banner" */).then(m => m.default || m)
const _adc25fb2 = () => import('../pages/home/certification/searchPage.vue' /* webpackChunkName: "pages/home/certification/searchPage" */).then(m => m.default || m)
const _3bb9c81c = () => import('../pages/home/teacher/orderTeacher.vue' /* webpackChunkName: "pages/home/teacher/orderTeacher" */).then(m => m.default || m)
const _f67600c2 = () => import('../pages/home/news/info.vue' /* webpackChunkName: "pages/home/news/info" */).then(m => m.default || m)
const _c6f44c82 = () => import('../pages/project/components/Detail.vue' /* webpackChunkName: "pages/project/components/Detail" */).then(m => m.default || m)
const _2e6052ac = () => import('../pages/shop/shopCart/allCheck.vue' /* webpackChunkName: "pages/shop/shopCart/allCheck" */).then(m => m.default || m)
const _2ef36dd4 = () => import('../pages/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _13e23572 = () => import('../pages/profile/pages/myProject.vue' /* webpackChunkName: "pages/profile/pages/myProject" */).then(m => m.default || m)
const _24d8d578 = () => import('../pages/home/news/payDetail.vue' /* webpackChunkName: "pages/home/news/payDetail" */).then(m => m.default || m)
const _6b4258e2 = () => import('../pages/home/news/list.vue' /* webpackChunkName: "pages/home/news/list" */).then(m => m.default || m)
const _4af54ed7 = () => import('../pages/other/pages/search.vue' /* webpackChunkName: "pages/other/pages/search" */).then(m => m.default || m)
const _69447d16 = () => import('../pages/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/project/components/ProjectCourse" */).then(m => m.default || m)
const _f29705d6 = () => import('../pages/project/components/CustomerPop.vue' /* webpackChunkName: "pages/project/components/CustomerPop" */).then(m => m.default || m)
const _242d1046 = () => import('../pages/home/citySchool/viewSchoolAddress.vue' /* webpackChunkName: "pages/home/citySchool/viewSchoolAddress" */).then(m => m.default || m)
const _1e02c248 = () => import('../pages/shop/affirmorder/noMsg.vue' /* webpackChunkName: "pages/shop/affirmorder/noMsg" */).then(m => m.default || m)
const _373de708 = () => import('../pages/profile/pages/myOrder.vue' /* webpackChunkName: "pages/profile/pages/myOrder" */).then(m => m.default || m)
const _38418f93 = () => import('../pages/other/activePages/partypolicy.vue' /* webpackChunkName: "pages/other/activePages/partypolicy" */).then(m => m.default || m)
const _3c13dc21 = () => import('../pages/other/activePages/degree.vue' /* webpackChunkName: "pages/other/activePages/degree" */).then(m => m.default || m)
const _717acfba = () => import('../pages/home/citySchool/schoolIntro.vue' /* webpackChunkName: "pages/home/citySchool/schoolIntro" */).then(m => m.default || m)
const _7262ee22 = () => import('../pages/course/components/CardProject.vue' /* webpackChunkName: "pages/course/components/CardProject" */).then(m => m.default || m)
const _033679cd = () => import('../pages/backend/news/newsInfo.vue' /* webpackChunkName: "pages/backend/news/newsInfo" */).then(m => m.default || m)
const _a3e3eae8 = () => import('../pages/other/pages/homeUs.vue' /* webpackChunkName: "pages/other/pages/homeUs" */).then(m => m.default || m)
const _18d4a089 = () => import('../pages/profile/pages/myCustomerProject.vue' /* webpackChunkName: "pages/profile/pages/myCustomerProject" */).then(m => m.default || m)
const _59e40862 = () => import('../pages/course/components/Filter.vue' /* webpackChunkName: "pages/course/components/Filter" */).then(m => m.default || m)
const _06304427 = () => import('../pages/other/activePages/enterprisecustom.vue' /* webpackChunkName: "pages/other/activePages/enterprisecustom" */).then(m => m.default || m)
const _c71c7138 = () => import('../pages/shop/affirmorder/orderInfo.vue' /* webpackChunkName: "pages/shop/affirmorder/orderInfo" */).then(m => m.default || m)
const _01ef40c4 = () => import('../pages/backend/project/projectDetail.vue' /* webpackChunkName: "pages/backend/project/projectDetail" */).then(m => m.default || m)
const _c886841e = () => import('../pages/backend/public/footer.vue' /* webpackChunkName: "pages/backend/public/footer" */).then(m => m.default || m)
const _51f97f88 = () => import('../pages/home/components/homecourse.vue' /* webpackChunkName: "pages/home/components/homecourse" */).then(m => m.default || m)
const _0a49987a = () => import('../pages/course/components/Card.vue' /* webpackChunkName: "pages/course/components/Card" */).then(m => m.default || m)
const _4b642d8f = () => import('../pages/profile/pages/myExamine.vue' /* webpackChunkName: "pages/profile/pages/myExamine" */).then(m => m.default || m)
const _1a6ba732 = () => import('../pages/home/teacher/beTeacher.vue' /* webpackChunkName: "pages/home/teacher/beTeacher" */).then(m => m.default || m)
const _2c00292d = () => import('../pages/project/components/CommonProblems.vue' /* webpackChunkName: "pages/project/components/CommonProblems" */).then(m => m.default || m)
const _e46c7cce = () => import('../pages/shop/wepay/payType.vue' /* webpackChunkName: "pages/shop/wepay/payType" */).then(m => m.default || m)
const _0c527e64 = () => import('../pages/profile/pages/myTicket.vue' /* webpackChunkName: "pages/profile/pages/myTicket" */).then(m => m.default || m)
const _4c6434ba = () => import('../pages/shop/components/List.vue' /* webpackChunkName: "pages/shop/components/List" */).then(m => m.default || m)
const _62a0c9f4 = () => import('../pages/home/teacher/list.vue' /* webpackChunkName: "pages/home/teacher/list" */).then(m => m.default || m)
const _1cd99ba0 = () => import('../pages/backend/course/courseDetail.vue' /* webpackChunkName: "pages/backend/course/courseDetail" */).then(m => m.default || m)
const _548cd27e = () => import('../pages/profile/components/mycode/Conversion.vue' /* webpackChunkName: "pages/profile/components/mycode/Conversion" */).then(m => m.default || m)
const _2be9b217 = () => import('../pages/profile/components/myexamine/submitPapers.vue' /* webpackChunkName: "pages/profile/components/myexamine/submitPapers" */).then(m => m.default || m)
const _0d84bab8 = () => import('../pages/profile/components/myexamine/intro.vue' /* webpackChunkName: "pages/profile/components/myexamine/intro" */).then(m => m.default || m)
const _7a793764 = () => import('../pages/profile/components/common/CustomerCard.vue' /* webpackChunkName: "pages/profile/components/common/CustomerCard" */).then(m => m.default || m)
const _24956df4 = () => import('../pages/profile/components/common/List.vue' /* webpackChunkName: "pages/profile/components/common/List" */).then(m => m.default || m)
const _77abb1e6 = () => import('../pages/home/news/components/newsPay.vue' /* webpackChunkName: "pages/home/news/components/newsPay" */).then(m => m.default || m)
const _4d063c29 = () => import('../pages/profile/components/myticket/ticketOrder.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketOrder" */).then(m => m.default || m)
const _12080bd5 = () => import('../pages/backend/course/components/Card.vue' /* webpackChunkName: "pages/backend/course/components/Card" */).then(m => m.default || m)
const _030b229e = () => import('../pages/profile/components/common/ListTab.vue' /* webpackChunkName: "pages/profile/components/common/ListTab" */).then(m => m.default || m)
const _ebacdfa6 = () => import('../pages/profile/components/mysetting/updatePassword.vue' /* webpackChunkName: "pages/profile/components/mysetting/updatePassword" */).then(m => m.default || m)
const _557fb6e2 = () => import('../pages/profile/components/myticket/detailPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/detailPopup" */).then(m => m.default || m)
const _af408b62 = () => import('../pages/backend/course/components/teacherIntro.vue' /* webpackChunkName: "pages/backend/course/components/teacherIntro" */).then(m => m.default || m)
const _595f2eb9 = () => import('../pages/backend/course/components/Line.vue' /* webpackChunkName: "pages/backend/course/components/Line" */).then(m => m.default || m)
const _460b8b44 = () => import('../pages/profile/components/common/search.vue' /* webpackChunkName: "pages/profile/components/common/search" */).then(m => m.default || m)
const _16b34ddb = () => import('../pages/profile/components/myticket/ticketConfirm.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketConfirm" */).then(m => m.default || m)
const _409bf22e = () => import('../pages/profile/components/mysetting/setPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/setPersonal" */).then(m => m.default || m)
const _2e91fd5c = () => import('../pages/profile/components/myticket/ticketRules.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketRules" */).then(m => m.default || m)
const _6f1036f8 = () => import('../pages/backend/project/components/Detail.vue' /* webpackChunkName: "pages/backend/project/components/Detail" */).then(m => m.default || m)
const _0dcd5fff = () => import('../pages/profile/components/common/CardTab.vue' /* webpackChunkName: "pages/profile/components/common/CardTab" */).then(m => m.default || m)
const _7a893f61 = () => import('../pages/profile/components/mycode/invitation.vue' /* webpackChunkName: "pages/profile/components/mycode/invitation" */).then(m => m.default || m)
const _2e30b0af = () => import('../pages/backend/project/components/ProjectEvaluate.vue' /* webpackChunkName: "pages/backend/project/components/ProjectEvaluate" */).then(m => m.default || m)
const _5df25389 = () => import('../pages/backend/course/components/CourseCatalog.vue' /* webpackChunkName: "pages/backend/course/components/CourseCatalog" */).then(m => m.default || m)
const _172741af = () => import('../pages/profile/components/myticket/ticketHistory.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketHistory" */).then(m => m.default || m)
const _7ae0f1ad = () => import('../pages/profile/components/myexamine/applicantCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/applicantCertificate" */).then(m => m.default || m)
const _3fa34687 = () => import('../pages/profile/components/myticket/ticketPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/ticketPopup" */).then(m => m.default || m)
const _16034fef = () => import('../pages/home/teacher/components/teacherCategory.vue' /* webpackChunkName: "pages/home/teacher/components/teacherCategory" */).then(m => m.default || m)
const _9b58eed4 = () => import('../pages/backend/course/components/CardPlayer.vue' /* webpackChunkName: "pages/backend/course/components/CardPlayer" */).then(m => m.default || m)
const _1ee55c4a = () => import('../pages/profile/components/myexamine/examineRecord.vue' /* webpackChunkName: "pages/profile/components/myexamine/examineRecord" */).then(m => m.default || m)
const _2f8369d1 = () => import('../pages/profile/components/myorder/OrderList.vue' /* webpackChunkName: "pages/profile/components/myorder/OrderList" */).then(m => m.default || m)
const _3bea2aad = () => import('../pages/profile/components/mycode/BindIng.vue' /* webpackChunkName: "pages/profile/components/mycode/BindIng" */).then(m => m.default || m)
const _5d6766bc = () => import('../pages/profile/components/myexamine/answerQuestion.vue' /* webpackChunkName: "pages/profile/components/myexamine/answerQuestion" */).then(m => m.default || m)
const _c56a06b4 = () => import('../pages/profile/components/myexamine/info.vue' /* webpackChunkName: "pages/profile/components/myexamine/info" */).then(m => m.default || m)
const _f759b22c = () => import('../pages/profile/components/myexamine/viewCertificate.vue' /* webpackChunkName: "pages/profile/components/myexamine/viewCertificate" */).then(m => m.default || m)
const _3c996e36 = () => import('../pages/home/news/components/List.vue' /* webpackChunkName: "pages/home/news/components/List" */).then(m => m.default || m)
const _c63e6a84 = () => import('../pages/profile/components/myexamine/simulationExam.vue' /* webpackChunkName: "pages/profile/components/myexamine/simulationExam" */).then(m => m.default || m)
const _f7786e7a = () => import('../pages/profile/components/mycollege/collegeList.vue' /* webpackChunkName: "pages/profile/components/mycollege/collegeList" */).then(m => m.default || m)
const _4470a5c6 = () => import('../pages/profile/components/mysetting/showPersonal.vue' /* webpackChunkName: "pages/profile/components/mysetting/showPersonal" */).then(m => m.default || m)
const _40604ca7 = () => import('../pages/profile/components/common/Detail.vue' /* webpackChunkName: "pages/profile/components/common/Detail" */).then(m => m.default || m)
const _ab88cae6 = () => import('../pages/profile/components/myexamine/certificateList.vue' /* webpackChunkName: "pages/profile/components/myexamine/certificateList" */).then(m => m.default || m)
const _5c8a0461 = () => import('../pages/profile/components/myticket/statusPopup.vue' /* webpackChunkName: "pages/profile/components/myticket/statusPopup" */).then(m => m.default || m)
const _0af19ef2 = () => import('../pages/backend/project/components/CommonProblems.vue' /* webpackChunkName: "pages/backend/project/components/CommonProblems" */).then(m => m.default || m)
const _dbf17b94 = () => import('../pages/profile/components/myorder/DataPick.vue' /* webpackChunkName: "pages/profile/components/myorder/DataPick" */).then(m => m.default || m)
const _7e91305e = () => import('../pages/home/teacher/components/Card.vue' /* webpackChunkName: "pages/home/teacher/components/Card" */).then(m => m.default || m)
const _94d2028c = () => import('../pages/profile/components/common/noMsg.vue' /* webpackChunkName: "pages/profile/components/common/noMsg" */).then(m => m.default || m)
const _583aa134 = () => import('../pages/profile/components/common/Card.vue' /* webpackChunkName: "pages/profile/components/common/Card" */).then(m => m.default || m)
const _2c2f4e71 = () => import('../pages/backend/project/components/OfflineDesc.vue' /* webpackChunkName: "pages/backend/project/components/OfflineDesc" */).then(m => m.default || m)
const _5f64227c = () => import('../pages/profile/components/myexamine/reviewing.vue' /* webpackChunkName: "pages/profile/components/myexamine/reviewing" */).then(m => m.default || m)
const _1200cb74 = () => import('../pages/home/news/components/Info.vue' /* webpackChunkName: "pages/home/news/components/Info" */).then(m => m.default || m)
const _3a1c5475 = () => import('../pages/profile/components/myinfo/Info.vue' /* webpackChunkName: "pages/profile/components/myinfo/Info" */).then(m => m.default || m)
const _051abab1 = () => import('../pages/backend/project/components/ProjectCourse.vue' /* webpackChunkName: "pages/backend/project/components/ProjectCourse" */).then(m => m.default || m)
const _6e7d9198 = () => import('../pages/profile/components/mysetting/bindPhone.vue' /* webpackChunkName: "pages/profile/components/mysetting/bindPhone" */).then(m => m.default || m)
const _135bb60f = () => import('../pages/home/news/_detail.vue' /* webpackChunkName: "pages/home/news/_detail" */).then(m => m.default || m)
const _9d1f8974 = () => import('../pages/course/list/_courselist.vue' /* webpackChunkName: "pages/course/list/_courselist" */).then(m => m.default || m)
const _66b4c8f5 = () => import('../pages/home/teacher/_Info.vue' /* webpackChunkName: "pages/home/teacher/_Info" */).then(m => m.default || m)
const _76ca02fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db



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
			path: "/course/coursedetail",
<<<<<<< HEAD
			component: _1559d86a,
=======
			component: _ce5ad8ea,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-coursedetail",
			children: [
				{
					path: "UserEvaluate",
<<<<<<< HEAD
					component: _08c47bd0,
=======
					component: _a8484b50,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
					name: "course-coursedetail-UserEvaluate"
				},
				{
					path: "EvaluateDialog",
<<<<<<< HEAD
					component: _33e0eb56,
=======
					component: _7f289295,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
					name: "course-coursedetail-EvaluateDialog"
				},
				{
					path: "CourseCatalog",
<<<<<<< HEAD
					component: _22ff269a,
=======
					component: _7a84165a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
					name: "course-coursedetail-CourseCatalog"
				},
				{
					path: "teacherIntro",
<<<<<<< HEAD
					component: _11d3c11e,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/course/detail",
			component: _7d1a2aa0,
			name: "course-detail"
		},
		{
			path: "/auth/Register",
			component: _64ea3eb5,
=======
					component: _7bdc4d44,
					name: "course-coursedetail-teacherIntro"
				}
			]
		},
		{
			path: "/course/detail",
			component: _49058b20,
			name: "course-detail"
		},
		{
			path: "/auth/Register",
			component: _7ef48e75,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "auth-Register"
		},
		{
			path: "/auth/passwordLogin",
<<<<<<< HEAD
			component: _e4b0e2e8,
=======
			component: _405916cc,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
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
			path: "/auth/Login",
<<<<<<< HEAD
			component: _9c815e72,
=======
			component: _099d1907,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "auth-Login"
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
<<<<<<< HEAD
			component: _58834be1,
=======
			component: _a30c37be,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
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
			path: "/auth/forgotpassword",
			component: _f1091520,
			name: "auth-forgotpassword"
		},
		{
			path: "/course/category",
<<<<<<< HEAD
			component: _69347b1d,
=======
			component: _29e9dadd,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-category"
		},
		{
			path: "/auth/codeLogin",
<<<<<<< HEAD
			component: _e79e4b0c,
=======
			component: _991efa8c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "auth-codeLogin"
		},
		{
			path: "/profile/pages/myInfo",
<<<<<<< HEAD
			component: _6b4c38a0,
=======
			component: _d26b4820,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myInfo"
		},
		{
			path: "/home/citySchool/submitSuccess",
<<<<<<< HEAD
			component: _2ede80d4,
=======
			component: _ccf8e154,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-citySchool-submitSuccess"
		},
		{
			path: "/shop/wepay/qrcode",
			component: _f54c7972,
			name: "shop-wepay-qrcode"
		},
		{
			path: "/home/vip/vipPage",
<<<<<<< HEAD
			component: _4d5733e2,
=======
			component: _2f4afe4f,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-vip-vipPage"
		},
		{
			path: "/shop/affirmorder/backShopCart",
<<<<<<< HEAD
			component: _95a15436,
=======
			component: _662225a5,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-affirmorder-backShopCart"
		},
		{
			path: "/course/components/CardPlayer",
<<<<<<< HEAD
			component: _350c0d3b,
=======
			component: _92bf750a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-CardPlayer"
		},
		{
			path: "/course/components/ListCard",
<<<<<<< HEAD
			component: _d9b7a410,
=======
			component: _70e97638,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-ListCard"
		},
		{
			path: "/course/components/List",
<<<<<<< HEAD
			component: _2e6e2270,
=======
			component: _5afc5708,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-List"
		},
		{
			path: "/shop/shopCart/tableHeader",
<<<<<<< HEAD
			component: _6bf792f4,
=======
			component: _7654e646,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-shopCart-tableHeader"
		},
		{
			path: "/other/activePages/userProtocol",
<<<<<<< HEAD
			component: _8f009950,
=======
			component: _25e6db98,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-userProtocol"
		},
		{
			path: "/other/activePages/Institutional",
<<<<<<< HEAD
			component: _8f7aa484,
=======
			component: _107ee504,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-Institutional"
		},
		{
			path: "/profile/pages/myCode",
<<<<<<< HEAD
			component: _e7fb1522,
=======
			component: _5872edaf,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myCode"
		},
		{
			path: "/shop/affirmorder/orderBtn",
<<<<<<< HEAD
			component: _2e823f54,
=======
			component: _d5e0dfd4,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-affirmorder-orderBtn"
		},
		{
			path: "/home/teacher/famous",
<<<<<<< HEAD
			component: _3a1e19ba,
=======
			component: _f31f1a3a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-teacher-famous"
		},
		{
			path: "/profile/pages/mySettings",
<<<<<<< HEAD
			component: _034cb3a5,
=======
			component: _9371e836,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-mySettings"
		},
		{
			path: "/home/certification/viewPage",
<<<<<<< HEAD
			component: _04473338,
=======
			component: _4e7fb3b8,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-certification-viewPage"
		},
		{
			path: "/profile/pages/myHome",
<<<<<<< HEAD
			component: _ba78193e,
=======
			component: _6f346ba1,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myHome"
		},
		{
			path: "/shop/components/card",
<<<<<<< HEAD
			component: _8e5f6a96,
=======
			component: _f57e7a16,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-components-card"
		},
		{
			path: "/profile/pages/myCourse",
<<<<<<< HEAD
			component: _c0e2a3c6,
=======
			component: _11c2165d,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myCourse"
		},
		{
			path: "/project/components/ShortList",
			component: _a7ceac88,
			name: "project-components-ShortList"
		},
		{
			path: "/project/components/OfflineDesc",
<<<<<<< HEAD
			component: _3a4d8454,
=======
			component: _50406616,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-OfflineDesc"
		},
		{
			path: "/backend/public/header",
<<<<<<< HEAD
			component: _095edbba,
=======
			component: _8621bc3a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-public-header"
		},
		{
			path: "/other/activePages/faceteach",
<<<<<<< HEAD
			component: _e85cb59a,
=======
			component: _66b564f3,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-faceteach"
		},
		{
			path: "/other/activePages/policyProgram",
<<<<<<< HEAD
			component: _2ba94126,
=======
			component: _29a93f2d,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-policyProgram"
		},
		{
			path: "/home/citySchool/schoolApplication",
<<<<<<< HEAD
			component: _e5dcbbf2,
=======
			component: _36d2dc72,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-citySchool-schoolApplication"
		},
		{
			path: "/profile/pages/myCollege",
<<<<<<< HEAD
			component: _635e25f6,
=======
			component: _baeae676,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myCollege"
		},
		{
			path: "/shop/components/banner",
<<<<<<< HEAD
			component: _beca5cde,
=======
			component: _12ce39d1,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-components-banner"
		},
		{
			path: "/home/certification/searchPage",
<<<<<<< HEAD
			component: _0fa7ff32,
=======
			component: _adc25fb2,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-certification-searchPage"
		},
		{
			path: "/home/teacher/orderTeacher",
<<<<<<< HEAD
			component: _e12dcf48,
=======
			component: _3bb9c81c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-teacher-orderTeacher"
		},
		{
			path: "/home/news/info",
<<<<<<< HEAD
			component: _5d85575f,
=======
			component: _f67600c2,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-news-info"
		},
		{
			path: "/project/components/Detail",
<<<<<<< HEAD
			component: _1f95ac02,
=======
			component: _c6f44c82,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-Detail"
		},
		{
			path: "/shop/shopCart/allCheck",
<<<<<<< HEAD
			component: _87a62b28,
=======
			component: _2e6052ac,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-shopCart-allCheck"
		},
		{
			path: "/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _d44b34d8,
=======
			component: _2ef36dd4,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-ProjectEvaluate"
		},
		{
			path: "/profile/pages/myProject",
<<<<<<< HEAD
			component: _21d54587,
=======
			component: _13e23572,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myProject"
		},
		{
			path: "/home/news/payDetail",
<<<<<<< HEAD
			component: _fd4d5490,
=======
			component: _24d8d578,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-news-payDetail"
		},
		{
			path: "/home/news/list",
<<<<<<< HEAD
			component: _b9c1a962,
=======
			component: _6b4258e2,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-news-list"
		},
		{
			path: "/other/pages/search",
<<<<<<< HEAD
			component: _cf7872d2,
=======
			component: _4af54ed7,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-pages-search"
		},
		{
			path: "/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _8df33654,
=======
			component: _69447d16,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-ProjectCourse"
		},
		{
			path: "/project/components/CustomerPop",
<<<<<<< HEAD
			component: _194d54d5,
=======
			component: _f29705d6,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-CustomerPop"
		},
		{
			path: "/home/citySchool/viewSchoolAddress",
<<<<<<< HEAD
			component: _66afbef4,
=======
			component: _242d1046,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-citySchool-viewSchoolAddress"
		},
		{
			path: "/shop/affirmorder/noMsg",
			component: _1e02c248,
			name: "shop-affirmorder-noMsg"
		},
		{
			path: "/profile/pages/myOrder",
<<<<<<< HEAD
			component: _22c27cbc,
=======
			component: _373de708,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myOrder"
		},
		{
			path: "/other/activePages/partypolicy",
<<<<<<< HEAD
			component: _f162805a,
=======
			component: _38418f93,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-partypolicy"
		},
		{
			path: "/other/activePages/degree",
<<<<<<< HEAD
			component: _edccf83e,
=======
			component: _3c13dc21,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-degree"
		},
		{
			path: "/home/citySchool/schoolIntro",
<<<<<<< HEAD
			component: _27424f3a,
=======
			component: _717acfba,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-citySchool-schoolIntro"
		},
		{
			path: "/course/components/CardProject",
<<<<<<< HEAD
			component: _15dbb92f,
=======
			component: _7262ee22,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-CardProject"
		},
		{
			path: "/backend/news/newsInfo",
<<<<<<< HEAD
			component: _4197ea0d,
=======
			component: _033679cd,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-news-newsInfo"
		},
		{
			path: "/other/pages/homeUs",
			component: _a3e3eae8,
			name: "other-pages-homeUs"
		},
		{
			path: "/profile/pages/myCustomerProject",
<<<<<<< HEAD
			component: _4d527e6e,
=======
			component: _18d4a089,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myCustomerProject"
		},
		{
			path: "/course/components/Filter",
<<<<<<< HEAD
			component: _b22c9fbc,
=======
			component: _59e40862,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-Filter"
		},
		{
			path: "/other/activePages/enterprisecustom",
<<<<<<< HEAD
			component: _6d173be7,
=======
			component: _06304427,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "other-activePages-enterprisecustom"
		},
		{
			path: "/shop/affirmorder/orderInfo",
<<<<<<< HEAD
			component: _82a701b8,
=======
			component: _c71c7138,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-affirmorder-orderInfo"
		},
		{
			path: "/backend/project/projectDetail",
<<<<<<< HEAD
			component: _50fc7104,
=======
			component: _01ef40c4,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-project-projectDetail"
		},
		{
			path: "/backend/public/footer",
<<<<<<< HEAD
			component: _4bc3a39e,
=======
			component: _c886841e,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-public-footer"
		},
		{
			path: "/home/components/homecourse",
<<<<<<< HEAD
			component: _74343748,
=======
			component: _51f97f88,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-components-homecourse"
		},
		{
			path: "/course/components/Card",
<<<<<<< HEAD
			component: _cfd39f8c,
=======
			component: _0a49987a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "course-components-Card"
		},
		{
			path: "/profile/pages/myExamine",
<<<<<<< HEAD
			component: _772a8dcf,
=======
			component: _4b642d8f,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myExamine"
		},
		{
			path: "/home/teacher/beTeacher",
<<<<<<< HEAD
			component: _fed277b2,
=======
			component: _1a6ba732,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-teacher-beTeacher"
		},
		{
			path: "/project/components/CommonProblems",
<<<<<<< HEAD
			component: _57098d26,
=======
			component: _2c00292d,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "project-components-CommonProblems"
		},
		{
			path: "/shop/wepay/payType",
<<<<<<< HEAD
			component: _49cf8d4e,
=======
			component: _e46c7cce,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "shop-wepay-payType"
		},
		{
			path: "/profile/pages/myTicket",
<<<<<<< HEAD
			component: _f0b94ee4,
=======
			component: _0c527e64,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-pages-myTicket"
		},
		{
			path: "/shop/components/List",
<<<<<<< HEAD
			component: _0d5d6d63,
			name: "shop-components-List"
		},
		{
			path: "/home/teacher/list",
			component: _65d32b46,
			name: "home-teacher-list"
		},
		{
			path: "/backend/course/courseDetail",
			component: _16af7270,
			name: "backend-course-courseDetail"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _c4d64b84,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/myexamine/submitPapers",
			component: _fd1efb52,
			name: "profile-components-myexamine-submitPapers"
		},
		{
			path: "/profile/components/myexamine/intro",
			component: _60249a64,
			name: "profile-components-myexamine-intro"
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _bcc361b8,
			name: "profile-components-common-CustomerCard"
=======
			component: _4c6434ba,
			name: "shop-components-List"
		},
		{
			path: "/home/teacher/list",
			component: _62a0c9f4,
			name: "home-teacher-list"
		},
		{
			path: "/backend/course/courseDetail",
			component: _1cd99ba0,
			name: "backend-course-courseDetail"
		},
		{
			path: "/profile/components/mycode/Conversion",
			component: _548cd27e,
			name: "profile-components-mycode-Conversion"
		},
		{
			path: "/profile/components/myexamine/submitPapers",
			component: _2be9b217,
			name: "profile-components-myexamine-submitPapers"
		},
		{
			path: "/profile/components/myexamine/intro",
			component: _0d84bab8,
			name: "profile-components-myexamine-intro"
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
		},
		{
			path: "/profile/components/common/CustomerCard",
			component: _7a793764,
			name: "profile-components-common-CustomerCard"
		},
		{
<<<<<<< HEAD
			path: "/home/news/components/newsPay",
			component: _4295eecd,
			name: "home-news-components-newsPay"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _0a841c69,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/backend/course/components/Card",
			component: _b6be38d6,
			name: "backend-course-components-Card"
		},
		{
			path: "/profile/components/common/ListTab",
			component: _b215021e,
			name: "profile-components-common-ListTab"
		},
		{
			path: "/profile/components/mysetting/updatePassword",
			component: _cd855f26,
			name: "profile-components-mysetting-updatePassword"
=======
			path: "/profile/components/common/List",
			component: _24956df4,
			name: "profile-components-common-List"
		},
		{
			path: "/home/news/components/newsPay",
			component: _77abb1e6,
			name: "home-news-components-newsPay"
		},
		{
			path: "/profile/components/myticket/ticketOrder",
			component: _4d063c29,
			name: "profile-components-myticket-ticketOrder"
		},
		{
			path: "/backend/course/components/Card",
			component: _12080bd5,
			name: "backend-course-components-Card"
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
		},
		{
			path: "/profile/components/common/ListTab",
			component: _030b229e,
			name: "profile-components-common-ListTab"
		},
		{
<<<<<<< HEAD
=======
			path: "/profile/components/mysetting/updatePassword",
			component: _ebacdfa6,
			name: "profile-components-mysetting-updatePassword"
		},
		{
			path: "/profile/components/myticket/detailPopup",
			component: _557fb6e2,
			name: "profile-components-myticket-detailPopup"
		},
		{
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			path: "/backend/course/components/teacherIntro",
			component: _af408b62,
			name: "backend-course-components-teacherIntro"
		},
		{
			path: "/backend/course/components/Line",
<<<<<<< HEAD
			component: _280ff30e,
=======
			component: _595f2eb9,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-course-components-Line"
		},
		{
			path: "/profile/components/common/search",
			component: _460b8b44,
			name: "profile-components-common-search"
		},
		{
			path: "/profile/components/myticket/ticketConfirm",
<<<<<<< HEAD
			component: _6c3a1e1b,
=======
			component: _16b34ddb,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myticket-ticketConfirm"
		},
		{
			path: "/profile/components/mysetting/setPersonal",
			component: _409bf22e,
			name: "profile-components-mysetting-setPersonal"
		},
		{
			path: "/profile/components/myticket/ticketRules",
<<<<<<< HEAD
			component: _b3963cdc,
=======
			component: _2e91fd5c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myticket-ticketRules"
		},
		{
			path: "/backend/project/components/Detail",
<<<<<<< HEAD
			component: _70f2f4c4,
=======
			component: _6f1036f8,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-project-components-Detail"
		},
		{
			path: "/profile/components/common/CardTab",
<<<<<<< HEAD
			component: _936f1f82,
=======
			component: _0dcd5fff,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-common-CardTab"
		},
		{
			path: "/profile/components/mycode/invitation",
<<<<<<< HEAD
			component: _78dd71be,
=======
			component: _7a893f61,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-mycode-invitation"
		},
		{
			path: "/backend/project/components/ProjectEvaluate",
<<<<<<< HEAD
			component: _ecf82f22,
=======
			component: _2e30b0af,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-project-components-ProjectEvaluate"
		},
		{
			path: "/backend/course/components/CourseCatalog",
<<<<<<< HEAD
			component: _1b7033c9,
=======
			component: _5df25389,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-course-components-CourseCatalog"
		},
		{
			path: "/profile/components/myticket/ticketHistory",
<<<<<<< HEAD
			component: _6cae11ef,
=======
			component: _172741af,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myticket-ticketHistory"
		},
		{
			path: "/profile/components/myexamine/applicantCertificate",
<<<<<<< HEAD
			component: _d498fc26,
=======
			component: _7ae0f1ad,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-applicantCertificate"
		},
		{
			path: "/profile/components/myticket/ticketPopup",
<<<<<<< HEAD
			component: _05bdb272,
=======
			component: _3fa34687,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myticket-ticketPopup"
		},
		{
			path: "/home/teacher/components/teacherCategory",
<<<<<<< HEAD
			component: _58fd9fa2,
=======
			component: _16034fef,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-teacher-components-teacherCategory"
		},
		{
			path: "/backend/course/components/CardPlayer",
<<<<<<< HEAD
			component: _0948df54,
=======
			component: _9b58eed4,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-course-components-CardPlayer"
		},
		{
			path: "/profile/components/myexamine/examineRecord",
			component: _1ee55c4a,
			name: "profile-components-myexamine-examineRecord"
		},
		{
			path: "/profile/components/myorder/OrderList",
<<<<<<< HEAD
			component: _788b7191,
=======
			component: _2f8369d1,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myorder-OrderList"
		},
		{
			path: "/profile/components/mycode/BindIng",
<<<<<<< HEAD
			component: _37358a26,
=======
			component: _3bea2aad,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-mycode-BindIng"
		},
		{
			path: "/profile/components/myexamine/answerQuestion",
<<<<<<< HEAD
			component: _6c7b26fc,
=======
			component: _5d6766bc,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-answerQuestion"
		},
		{
			path: "/profile/components/myexamine/info",
<<<<<<< HEAD
			component: _45c60ce6,
=======
			component: _c56a06b4,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-info"
		},
		{
			path: "/profile/components/myexamine/viewCertificate",
<<<<<<< HEAD
			component: _57b76eaa,
=======
			component: _f759b22c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-viewCertificate"
		},
		{
			path: "/home/news/components/List",
<<<<<<< HEAD
			component: _df6e8314,
=======
			component: _3c996e36,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-news-components-List"
		},
		{
			path: "/profile/components/myexamine/simulationExam",
<<<<<<< HEAD
			component: _a816ea04,
=======
			component: _c63e6a84,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-simulationExam"
		},
		{
			path: "/profile/components/mycollege/collegeList",
<<<<<<< HEAD
			component: _7681f083,
=======
			component: _f7786e7a,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-mycollege-collegeList"
		},
		{
			path: "/profile/components/mysetting/showPersonal",
<<<<<<< HEAD
			component: _cc1113f4,
=======
			component: _4470a5c6,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-mysetting-showPersonal"
		},
		{
			path: "/profile/components/common/Detail",
<<<<<<< HEAD
			component: _dfbb9732,
=======
			component: _40604ca7,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-common-Detail"
		},
		{
			path: "/profile/components/myexamine/certificateList",
			component: _ab88cae6,
			name: "profile-components-myexamine-certificateList"
		},
		{
			path: "/profile/components/myticket/statusPopup",
			component: _5c8a0461,
			name: "profile-components-myticket-statusPopup"
		},
		{
			path: "/backend/project/components/CommonProblems",
<<<<<<< HEAD
			component: _60786f32,
=======
			component: _0af19ef2,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-project-components-CommonProblems"
		},
		{
			path: "/profile/components/myorder/DataPick",
			component: _dbf17b94,
			name: "profile-components-myorder-DataPick"
		},
		{
			path: "/home/teacher/components/Card",
			component: _7e91305e,
			name: "home-teacher-components-Card"
		},
		{
			path: "/profile/components/common/noMsg",
<<<<<<< HEAD
			component: _76191efa,
=======
			component: _94d2028c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-common-noMsg"
		},
		{
			path: "/profile/components/common/Card",
<<<<<<< HEAD
			component: _667b8726,
=======
			component: _583aa134,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-common-Card"
		},
		{
			path: "/backend/project/components/OfflineDesc",
			component: _2c2f4e71,
			name: "backend-project-components-OfflineDesc"
		},
		{
			path: "/profile/components/myexamine/reviewing",
<<<<<<< HEAD
			component: _1119f2fc,
=======
			component: _5f64227c,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-myexamine-reviewing"
		},
		{
			path: "/home/news/components/Info",
<<<<<<< HEAD
			component: _4aaeea86,
=======
			component: _1200cb74,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "home-news-components-Info"
		},
		{
			path: "/profile/components/myinfo/Info",
			component: _3a1c5475,
			name: "profile-components-myinfo-Info"
		},
		{
			path: "/backend/project/components/ProjectCourse",
<<<<<<< HEAD
			component: _114e3b1e,
=======
			component: _051abab1,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "backend-project-components-ProjectCourse"
		},
		{
			path: "/profile/components/mysetting/bindPhone",
<<<<<<< HEAD
			component: _d4baad50,
=======
			component: _6e7d9198,
>>>>>>> 6ad16cc33a8cbfd518d34768e48f89033151d2db
			name: "profile-components-mysetting-bindPhone"
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
