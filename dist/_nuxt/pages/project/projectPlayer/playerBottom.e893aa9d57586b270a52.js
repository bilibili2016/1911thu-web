webpackJsonp([68],{"8//d":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=l("EFRW"),i=l("QtA0"),o=l("XyMi"),a=Object(o.a)(c.a,i.a,i.b,!1,null,null,null);a.options.__file="pages/project/projectPlayer/playerBottom.vue",e.default=a.exports},AHkP:function(t,e,l){(t.exports=l("FZ+f")(!1)).push([t.i,".collect[data-v-64f178b7]{height:80px}.collect .line-center[data-v-64f178b7]{line-height:80px}.collect .line-center .collectSpan[data-v-64f178b7]{font-size:14px;height:60px;vertical-align:middle;line-height:60px;color:#888;display:inline-block;padding-right:38px;cursor:pointer;position:relative;-webkit-transition:all .3s;transition:all .3s}.collect .line-center .collectSpan i[data-v-64f178b7]{font-size:16px;margin-right:5px}.collect .line-center .collectSpan[data-v-64f178b7]:hover{color:#5f068d}.collect .line-center .collectSpan[data-v-64f178b7]:last-child{padding-right:0}.collect .line-center .collectSpan:last-child:hover .shareIcons[data-v-64f178b7]{opacity:1;display:inline-block}.collect .line-center .collectSpan .shareIcons[data-v-64f178b7]{opacity:0;display:none;width:121px;height:56px;background:#fff;border-radius:4px;-webkit-box-shadow:0 0 12px rgba(198,194,210,.28);box-shadow:0 0 12px rgba(198,194,210,.28);position:absolute;-webkit-transition:all .3s;transition:all .3s;top:55px;right:0;z-index:99999}.collect .line-center .collectSpan .shareIcons i[data-v-64f178b7]{display:inline-block;width:55.4px;line-height:36px;text-align:center;color:#222;font-size:12px;margin:0}.collect .line-center .collectSpan .shareIcons i[data-v-64f178b7]:hover{color:#5f068d}.collect .line-center .collectSpan .shareIcons img[data-v-64f178b7]{width:100px;height:100px;margin:15px 0 0 2.7px;display:block;cursor:pointer}",""])},EFRW:function(t,e,l){"use strict";var c=l("f6bP");e.a={props:["iseve","collectMsg","config"],components:{"v-collection":c.a},methods:{showRpt:function(){this.$emit("showRpt")},showElt:function(){this.$emit("showElt")}}}},PBuW:function(t,e,l){var c=l("AHkP");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals),l("rjj0")("5f05bf2c",c,!1,{sourceMap:!1})},QtA0:function(t,e,l){"use strict";l.d(e,"a",function(){return c}),l.d(e,"b",function(){return i});var c=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"playBottom clearfix"},[t._m(0),l("span",{staticClass:"fl problem",on:{click:t.showRpt}},[t._v("报告问题")]),"1"===t.config.type?l("span",{staticClass:"fl elt"},[!1===t.iseve?l("span",{staticClass:"fl",on:{click:t.showElt}},[l("i",{staticClass:"el-icon-edit"}),t._v("项目评价\n    ")]):l("span",{staticClass:"fl",class:{bag:!0===t.iseve}},[l("i",{staticClass:"el-icon-edit"}),t._v("已评价\n    ")])]):t._e(),"1"===t.config.type?l("v-collection",{staticClass:"projectCollect",attrs:{collectData:t.collectMsg}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("span",{staticClass:"fl usePhone"},[t._v("手机观看\n    "),l("div",{staticClass:"ewCode"},[l("img",{attrs:{src:"http://static-image.1911edu.com/attentionWechat2.png",alt:""}}),l("i")])])}];c._withStripped=!0},RSjM:function(t,e,l){"use strict";var c=l("Dd8w"),i=l.n(c),o=l("NYxO"),a=l("lHEt"),n=l("SL1N"),s=l("v/8m");e.a={props:["collectData"],data:function(){return{addCollectionForm:{curriculumId:null,types:""}}},computed:i()({},Object(o.mapGetters)("auth",["isAuthenticated"]),Object(o.mapState)("auth",["kid"])),methods:{collection:function(){a.a.get("token")?1===this.collectData.isCollect?(this.deleteCollection(),this.collectData.isCollect=0):(this.addCollection(),this.collectData.isCollect=1):this.$bus.$emit("loginShow",!0)},addCollection:function(){var t=this;this.addCollectionForm.curriculumId=Object(s.h)("kid"),this.addCollectionForm.types=this.collectData.types,n.l.addCollection(this.addCollectionForm).then(function(e){0===e.status?(Object(s.i)(t,"success","添加收藏成功"),t.collectData.isCollect=1):Object(s.i)(t,"error",e.msg)})},deleteCollection:function(){var t=this;this.addCollectionForm.curriculumId=Object(s.h)("kid"),this.addCollectionForm.types=this.collectData.types,n.l.deleteCollection(this.addCollectionForm).then(function(e){0===e.status?(t.collectData.isCollect=0,Object(s.i)(t,"success","取消收藏成功")):Object(s.i)(t,"error",e.msg)})}}}},f6bP:function(t,e,l){"use strict";var c=l("RSjM"),i=l("y74B"),o=l("XyMi"),a=!1,n=function(t){a||l("PBuW")},s=Object(o.a)(c.a,i.a,i.b,!1,n,"data-v-64f178b7",null);s.options.__file="components/common/Collection.vue",e.a=s.exports},y74B:function(t,e,l){"use strict";l.d(e,"a",function(){return c}),l.d(e,"b",function(){return i});var c=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"collect"},[l("div",{staticClass:"line-center"},[l("span",{staticClass:"collectSpan",class:{bag:1==t.collectData.isCollect},on:{click:t.collection}},[l("i",{staticClass:"el-icon-star-on"}),l("span",[t._v("收藏")])])])])},i=[];c._withStripped=!0}});