webpackJsonp([132],{I7qH:function(t,e,i){"use strict";var s=i("Dd8w"),r=i.n(s),o=i("v/8m"),a=i("SL1N"),c=i("NYxO"),n=i("lHEt");e.a={props:["data","config"],data:function(){return{orderForm:{pages:1,limits:20,payStatus:null,ids:null},kidForm:{kid:""},responseData:{type:!0,res:""},courseUrl:{base:"/course/coursedetail",kid:0,bid:"",page:0}}},methods:r()({},Object(c.mapActions)("auth",["setGid","setKid"]),{detection:function(){this.$emit("detection")},computedHeight:function(t){return t>3?"480px":140*t+"px"},computedLength:function(t,e,i){return i<(t.length>3?0:3-t.length)},cancelOrder:function(t){var e=this;this.orderForm.ids=t,a.v.cancelOrder(this.orderForm).then(function(t){if(0===t.status)e.$emit("handleUpdate",!0),Object(o.i)(e,"success","订单已取消！");else{if(100008===t.status)return e.responseData.res=t,e.$bus.$emit("reLoginAlertPop",e.responseData),!1;Object(o.i)(e,"error",t.msg)}})},goPay:function(t,e){if(e.orderVipList.length>0)return this.$router.push({path:"/shop/wepay",query:{order:t,type:2}}),!1;this.$router.push({path:"/shop/wepay",query:{order:t,type:1}})},goodsNmber:function(t){var e=this;n.a.get("productsNum")<70?this.addCart(t):this.$alert("您的购物车已满，建议您先去结算或清理","温馨提示",{confirmButtonText:"确定",callback:function(t){e.$router.push("/shop/shoppingcart")}})},addCart:function(t){var e=this;this.orderForm.ids=t,a.v.buyAgain(this.orderForm).then(function(t){0===t.status?e.$router.push("/shop/shoppingCart"):Object(o.i)(e,"error",t.msg)})},goAffirmorder:function(t,e){e?this.$router.push({path:"/shop/affirmorder",query:{id:t,type:2,num:e}}):this.$router.push({path:"/shop/affirmorder",query:{id:t,type:1}})},goShopping:function(t){"1"==t.order_type?this.goodsNmber(t.id):"2"==t.order_type?"1"==t.project_type&&"1"==t.orderProjectList[0].study_type?this.goodsNmber(t.id):this.goAffirmorder(t.orderProjectList[0].id):"3"==t.order_type&&this.goAffirmorder(t.orderVipList[0].id,t.orderVipList[0].pay_number)},goCourseInfo:function(t,e){this.kidForm.kids=t.id,this.courseUrl.kid=t.id,Object(o.j)(this.courseUrl)},goProjrctInfo:function(t){this.$router.push({path:"/project/projectdetail",query:{kid:t.id,type:t.project_type}})},goVipInfo:function(t){this.$router.push({path:"/home/vip/vipPage",query:{id:t.id,cid:t.category_id}})},selectPayApply:function(t,e){n.a.set("order",t.id),"order"==e?this.$bus.$emit("goOrderDetail",!0):"ticket"==e&&this.$bus.$emit("goOrderDetail",!1)},exchangeTime:function(t){return Object(o.n)(t)}}),mounted:function(){n.a.get("orderDetail")&&(this.$bus.$emit("goOrderDetail",!0),n.a.set("orderDetail",!1))}}},nG26:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("I7qH"),r=i("uc/7"),o=i("XyMi"),a=Object(o.a)(s.a,r.a,r.b,!1,null,null,null);a.options.__file="pages/profile/components/myorder/OrderList.vue",e.default=a.exports},"uc/7":function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.data,function(e,s){return i("div",{key:s,staticClass:"orderList"},[i("div",{staticClass:"topBar clearfix"},[i("span",{staticClass:"fl"},[t._v("订单号："+t._s(e.order_sn))]),i("span",{staticClass:"fr"},[t._v(t._s(t.exchangeTime(e.create_time)))])]),i("div",{staticClass:"list"},[i("div",{staticClass:"content"},[i("div",{staticClass:"course"},[t._l(e.orderCurriculumList,function(s,r){return e.orderCurriculumList.length&&r<3?i("div",{key:"course"+r,staticClass:"courseOne"},[i("img",{staticClass:"fl",attrs:{src:s.picture,alt:""},on:{click:function(e){t.goCourseInfo(s)}}}),i("div",{staticClass:"fl"},[i("h4",{attrs:{title:s.title},on:{click:function(e){t.goCourseInfo(s)}}},[t._v(t._s(s.title))]),i("h6",[t._v(t._s(s.curriculum_time)+"学时")])])]):t._e()}),t._l(e.orderProjectList,function(s,r){return t.computedLength(e.orderCurriculumList,e.orderProjectList,r)?i("div",{key:"project"+r,staticClass:"courseOne"},[i("div",{staticClass:"courseImg"},[2==s.project_type?i("img",{staticClass:"project-img",attrs:{src:"http://static-image.1911edu.com/p5.png",alt:""}}):i("img",{staticClass:"project-img",attrs:{src:"http://static-image.1911edu.com/p4.png",alt:""}}),i("img",{staticClass:"fl",attrs:{src:s.picture,alt:""},on:{click:function(e){t.goProjrctInfo(s)}}})]),i("div",{staticClass:"fl"},[i("h4",{attrs:{title:s.title},on:{click:function(e){t.goProjrctInfo(s)}}},[t._v(t._s(s.title))]),i("h6",[t._v(t._s(s.curriculum_time)+"学时")])])]):t._e()}),t._l(e.orderVipList,function(s,r){return e.orderVipList.length?i("div",{key:"vip"+r,staticClass:"courseOne"},[i("img",{staticClass:"fl",attrs:{src:s.picture,alt:""},on:{click:function(e){t.goVipInfo(s)}}}),i("div",{staticClass:"fl"},[i("h4",{attrs:{title:s.title},on:{click:function(e){t.goVipInfo(s)}}},[t._v(t._s(s.title))])])]):t._e()}),e.orderCurriculumList.length+e.orderProjectList.length>3?i("div",{staticClass:"more",on:{click:function(i){t.selectPayApply(e,t.config.type)}}},[t._v("\n            查看更多>\n          ")]):t._e()],2),i("div",{staticClass:"price height",style:{height:t.computedHeight(e.orderCurriculumList.length+e.orderProjectList.length+e.orderVipList.length)}},[i("p",[t._v("￥"+t._s(e.order_amount))]),"order"==t.config.type?i("p",{staticClass:"detail",on:{click:function(i){t.selectPayApply(e,t.config.type)}}},[t._v("订单详情")]):t._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:"order"==t.config.type,expression:"config.type=='order'"}],staticClass:"status height",style:{height:t.computedHeight(e.orderCurriculumList.length+e.orderProjectList.length+e.orderVipList.length)}},["1"==e.pay_status?i("p",{staticClass:"cancelOrder",on:{click:function(i){t.cancelOrder(e.id)}}},[t._v("取消订单")]):t._e(),"2"==e.pay_status||"6"==e.pay_status?i("p",{staticClass:"payReady payed"},[t._v("已支付")]):t._e(),"5"==e.pay_status?i("p",{staticClass:"cancelOrder",staticStyle:{cursor:"inherit"}},[t._v("审核中")]):t._e(),"6"==e.pay_status&&e.expire_day>=1?i("p",{staticClass:"payReady"},[t._v("剩余"+t._s(e.expire_day)+"天")]):t._e(),("2"==e.pay_status||"6"==e.pay_status)&&e.expire_day<1?i("p",{staticClass:"payReady"},[t._v("已过期")]):t._e(),"3"==e.pay_status||"4"==e.pay_status?i("p",{staticClass:"payClose"},[t._v("已关闭")]):t._e(),i("p",["1"==e.pay_status?i("span",{staticClass:"pay",on:{click:function(i){t.goPay(e.id,e)}}},[t._v("立即支付")]):t._e(),"3"==e.pay_status||"4"==e.pay_status?i("span",{staticClass:"buy",on:{click:function(i){t.goShopping(e)}}},[t._v("立即购买")]):t._e()])])])])])}))},r=[];s._withStripped=!0}});