webpackJsonp([133],{CM4W:function(t,s,a){"use strict";var e=a("SL1N"),i=a("v/8m");s.a={props:["vipID"],data:function(){return{alertText:"",showBtn:!0,showSimulationExam:!1,pageData:{id:"",name:""},vipForm:{vipId:"",type:1},examRuleLoading:!0,examRuleInfo:"",showExamRules:!1,responseData:{type:!0,res:""}}},methods:{handleBack:function(){this.pageData.name="list",this.$bus.$emit("whichShow",this.pageData)},examRules:function(t){var s=this;Object(i.a)("pane-tab-tenth","-ms-page",0),this.vipForm.vipId=this.vipID,this.vipForm.type=t,this.examRuleLoading=!0,e.n.examRuleInfo(this.vipForm).then(function(t){0==t.status?(s.examRuleLoading=!1,s.examRuleInfo=t.data.examRuleInfo,s.showExamRules=!0):s.$message({showClose:!0,message:t.msg,type:"error",duration:6e3})})},closeRules:function(){Object(i.a)("pane-tab-tenth","relative",1),this.showExamRules=!1},handleExamine:function(){var t=this;this.pageData.id=this.vipID,e.n.createExamRecordQuestion(this.vipForm).then(function(s){100201==s.status?(t.pageData.name="info",t.$bus.$emit("whichShow",t.pageData)):0==s.status?"1"==t.vipForm.type?t.$router.push("/profile/components/myexamine/answerQuestion?id="+s.data.exam_record_id):t.$router.push("/profile/components/myexamine/simulationExam?id="+s.data.exam_record_id):t.$message({showClose:!0,message:s.msg,type:"error",duration:6e3})})},validateExamPrivilege:function(){var t=this;this.vipForm.vipId=this.vipID,this.vipForm.type="1",e.n.validateExamPrivilege(this.vipForm).then(function(s){if(0==s.status)t.showBtn=!1;else{if(100008==s.status)return t.responseData.res=s,t.$router.push("/"),!1;100201==s.status?t.showBtn=!1:(t.showBtn=!0,t.alertText=s.msg)}})},validateSimulationExam:function(){var t=this;this.vipForm.vipId=this.vipID,this.vipForm.type="2",e.n.validateExamPrivilege(this.vipForm).then(function(s){0==s.status?t.showSimulationExam=!0:t.showSimulationExam=!1})}},mounted:function(){this.validateExamPrivilege(),this.validateSimulationExam()}}},DECz:function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"examine-intro"},[a("div",{staticClass:"examine-top"},[a("span",{staticClass:"goBack",on:{click:t.handleBack}},[a("i",{staticClass:"el-icon-arrow-left icon"}),t._v("认证资格介绍\n    ")])]),a("div",{staticClass:"examine-bottom"},[a("div",{staticClass:"one"},[t._v("1911学堂学员在学院完成学习后，即可参加在线认证考试，考试通过者将获得清华大学相关部门或国内外其他知名院校颁发的认证证书及1911学堂结业证书，证书均配有可在官方网站进行查询的唯一认证编码。")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("div",{staticClass:"examButton"},[t.showBtn?a("div",{staticClass:"examineBtn notExamine"},[a("span",[t._v("参加考试")]),a("span",{staticClass:"alertText"},[t._v(t._s(t.alertText))])]):a("div",{staticClass:"examineBtn",on:{click:function(s){t.examRules("1")}}},[t._v("参加考试")]),t.showSimulationExam?a("div",{staticClass:"examineBtn",on:{click:function(s){t.examRules("2")}}},[t._v("模拟考试")]):a("div",{staticClass:"examineBtn notExamine"},[t._v("模拟考试\n        "),a("span",{staticClass:"alertText"},[t._v("您已用尽2次模拟考试机会，不能再参加模拟考试。")])])])]),t.showExamRules?a("div",{staticClass:"examRules"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.examRuleLoading,expression:"examRuleLoading"}],staticClass:"rulesInfo"},[a("i",{staticClass:"el-icon-close",on:{click:t.closeRules}}),a("h4",[t._v("温馨提示")]),a("p",[a("span",{staticClass:"left"},[t._v("您参加考试的学院：")]),a("span",{staticClass:"right"},[t._v(t._s(t.examRuleInfo.title))])]),a("p",[a("span",{staticClass:"left"},[t._v("考试次数：")]),a("span",{staticClass:"right"},[t._v("第"+t._s(t.examRuleInfo.record_number)+"次")])]),a("p",[a("span",{staticClass:"left"},[t._v("考试题数：")]),a("span",{staticClass:"right"},[t._v(t._s(t.examRuleInfo.question_number)+"道")])]),a("p",[a("span",{staticClass:"left"},[t._v("合格标准：")]),a("span",{staticClass:"right"},[t._v(t._s(t.examRuleInfo.score)+"分")])]),a("p",[a("span",{staticClass:"left"},[t._v("考试时间：")]),a("span",{staticClass:"right"},[t._v(t._s(t.examRuleInfo.exam_time/60)+"分钟")])]),a("p",{staticClass:"tip"},[t._v("点击确定开始考试，并开始倒计时！")]),a("div",{staticClass:"btmBtn"},[a("span",{on:{click:t.closeRules}},[t._v("取消")]),a("span",{on:{click:t.handleExamine}},[t._v("确定")])])])]):t._e()])},i=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"examineImg"},[s("img",{attrs:{src:"http://static-image.1911edu.com/certification.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("1. 学时要求")]),a("p",[t._v("参与【认证考试】前，学员在对应学院的在线学习时间需累计满100学时。其中，只有学员在观看完所选课程的全部视频后，学时才会累加。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("2. 认证考试")]),a("p",[t._v("学员需在2小时内作答100道题，所有试题均为客观题（即单选题、多选题）。题目将从学员已完成课程的题库中随机抽取。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("3. 考试规则")]),a("p",[t._v("入学后学员有三次考试机会，系统将取其最好成绩作为最终成绩，并发放相应证书。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("4. 模拟考试")]),a("p",[t._v("学员在正式考试前，可享有2次模拟考试机会，了解试题形式及内容重点。模拟考试试题由学院题库中随机抽取的100道题组成，两次模拟考试试题不一样。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("5. 颁发证书")]),a("p",[t._v("学院将根据学员考试成绩颁发相应证书，分数大于60分，即可获得清华大学相关部门或国内外其他知名院校颁发的认证证书及1911学堂结业证书。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ask"},[a("p",{staticClass:"tit"},[t._v("6. 有效期限")]),a("p",[t._v("学员须在入学后的12个月之内完成考试并申领证书，逾期将被视为自愿放弃考试和申请证书资格。")])])}];e._withStripped=!0},F3Vc:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("CM4W"),i=a("DECz"),n=a("XyMi"),l=Object(n.a)(e.a,i.a,i.b,!1,null,null,null);l.options.__file="pages/profile/components/myexamine/intro.vue",s.default=l.exports}});