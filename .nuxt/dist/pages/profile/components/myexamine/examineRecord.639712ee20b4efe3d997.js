webpackJsonp([135],{"6Ahj":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("ee0x"),s=a("NpZT"),o=a("XyMi"),r=Object(o.a)(i.a,s.a,s.b,!1,null,null,null);r.options.__file="pages/profile/components/myexamine/examineRecord.vue",t.default=r.exports},NpZT:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"examineRecord"},[a("div",{staticClass:"examine-top clearfix"},[a("span",{staticClass:"goBack",on:{click:e.handleBack}},[a("i",{staticClass:" el-icon-arrow-left icon"}),e._v("考试记录\n    ")]),0!=e.restExamineTime&&0==e.isApplyExam&&e.examPrivilege?a("span",{staticClass:"goExamine",on:{click:e.gotoExamine}},[e._v("去考试（剩余"+e._s(e.restExamineTime)+"次）>")]):e._e()]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"tables"},[a("table",{staticClass:"recordTable"},[e._m(0),e._l(e.recordData,function(t,i){return a("tr",{key:i,staticClass:"tr_body"},["1"==t.type?a("td",[e._v("正式")]):a("td",[e._v("模拟")]),a("td",[e._v(e._s(t.exam_name))]),a("td",[e._v(e._s(e.exchangeTime(t.create_time)))]),a("td",[e._v(e._s(t.total_score))]),t.total_score>=85?a("td",[e._v("优秀")]):e._e(),t.total_score<85&&t.total_score>=75?a("td",[e._v("良好")]):e._e(),t.total_score<75&&t.total_score>=60?a("td",[e._v("及格")]):e._e(),t.total_score<60?a("td",[e._v("不及格")]):e._e()])})],2)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{staticClass:"tr_header"},[a("th",[e._v("考试类型")]),a("th",[e._v("考试科目")]),a("th",[e._v("时间")]),a("th",[e._v("成绩")]),a("th",[e._v("等级")])])}];i._withStripped=!0},ee0x:function(e,t,a){"use strict";var i=a("SL1N"),s=a("v/8m");t.a={props:["vipID"],data:function(){return{recordData:[],restExamineTime:"",isApplyExam:"",examPrivilege:"",logForm:{vipID:"",page:1,limit:5},pageData:{id:"",name:""},responseData:{type:!0,res:""}}},methods:{handleBack:function(){this.pageData.name="list",this.$bus.$emit("whichShow",this.pageData)},examRecordLog:function(){var e=this;this.logForm.vipID=this.vipID,i.n.examRecordLog(this.logForm).then(function(t){if(0==t.status)e.recordData=t.data.examRecordLogList,e.restExamineTime=t.data.surplusFrequency,e.isApplyExam=t.data.isApplyExam,e.examPrivilege=t.data.examPrivilege;else if(100008===t.status)return e.responseData.res=t,e.$router.push("/"),!1})},gotoExamine:function(){this.pageData.id=this.vipID,this.pageData.name="intro",this.$bus.$emit("whichShow",this.pageData)},exchangeTime:function(e){return Object(s.o)(e)}},mounted:function(){var e=this;this.examRecordLog(),this.$bus.$on("examineRecord",function(){e.examRecordLog()})}}}});