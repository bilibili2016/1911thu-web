webpackJsonp([101],{IWzF:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.load,expression:"load"}]},[t._l(t.infoList,function(e,n){return a("div",{key:e.id,staticClass:"content clearfix",attrs:{index:n}},[a("div",{staticClass:"text fl fc16-222 flh-30"},[t._v(t._s(e.message))]),a("div",{staticClass:"time fr f14-888 flh-30"},[t._v(t._s(e.send_time))])])}),t.pagemsg.total>10?a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pagemsg.pagesize,"pager-count":5,"page-count":t.pagemsg.pagesize,"current-page":t.pagemsg.page,total:t.pagemsg.total},on:{"current-change":t.historyOrderDataChange}})],1):t._e()],2)},i=[];n._withStripped=!0},WJIV:function(t,e,a){var n=a("nlaj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),a("rjj0")("d64229a6",n,!1,{sourceMap:!1})},bBlj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("re4S"),i=a("IWzF"),s=a("XyMi"),o=!1,r=function(t){o||a("WJIV")},u=Object(s.a)(n.a,i.a,i.b,!1,r,"data-v-161765c9",null);u.options.__file="pages/profile/components/myinfo/Info.vue",e.default=u.exports},nlaj:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".content[data-v-161765c9]{min-height:100px;height:auto}.content .text[data-v-161765c9]{margin:20px 0}",""])},re4S:function(t,e,a){"use strict";var n=a("Dd8w"),i=a.n(n),s=a("SL1N"),o=a("NYxO");a("lHEt"),e.a={data:function(){return{infoList:[],curruntForm:{pages:1,limits:10},pagemsg:{page:1,pagesize:10,total:10},load:!0}},computed:i()({},Object(o.mapGetters)("auth",["isAuthenticated"])),methods:{getInfo:function(){var t=this;s.q.userMessage(this.curruntForm).then(function(e){if(0===e.status){t.infoList=e.data.userMessage,t.pagemsg.total=e.data.pageCount;var a=!(t.infoList&&t.infoList.length>0);t.$emit("noMsg",a),t.load=!1}})},historyOrderDataChange:function(t){this.pagemsg.page=t,this.curruntForm.pages=t,this.getInfo()}},mounted:function(){var t=this;this.$bus.$on("getInfo",function(e){t.getInfo()})}}}});