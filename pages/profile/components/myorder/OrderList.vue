<template>
  <!-- 我的订单，我的发票列表 -->
  <div>
    <div class="orderList" v-for="(courseList, index ) in data" :key="index">
      <div class="topBar clearfix">
        <span class="fl">订单号：{{courseList.order_sn}}</span>
        <span class="fr">{{exchangeTime(courseList.create_time)}}</span>
      </div>
      <div class="list">
        <div class="content">
          <div class="course">
            <!-- 课程列表 -->
            <div class="courseOne" v-if="courseList.orderCurriculumList.length&& index<3" v-for="(course,index) in courseList.orderCurriculumList" :key="'course'+index">
              <img @click="goCourseInfo(course)" class="fl" :src="course.picture" alt="">
              <div class="fl">
                <h4 @click="goCourseInfo(course)">{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <!-- <p>导师：{{course.teacher_name}}</p> -->
              </div>
            </div>
            <!-- 项目列表 -->
            <div class="courseOne" v-if="computedLength(courseList.orderCurriculumList,courseList.orderProjectList,index)" v-for="(project,index) in courseList.orderProjectList" :key="'project'+index">
              <div class="courseImg">
                <!-- 项目图标 -->
                <img v-if="project.project_type==2" class="project-img" src="https://static-image.1911edu.com/p5.png" alt="">
                <img v-else class="project-img" src="https://static-image.1911edu.com/p4.png" alt="">

                <img @click="goProjrctInfo(project)" class="fl" :src="project.picture" alt="">
              </div>
              <div class="fl">
                <h4 @click="goProjrctInfo(project)">{{project.title}}</h4>
                <h6>{{project.curriculum_time}}学时</h6>
              </div>
            </div>
            <!-- vip列表 -->
            <div class="courseOne" v-if="courseList.orderVipList.length" v-for="(vip,index) in courseList.orderVipList" :key="'vip'+index">
              <img @click="goVipInfo(vip)" class="fl" :src="vip.picture" alt="">
              <div class="fl">
                <h4 @click="goVipInfo(vip)">{{vip.title}}</h4>
              </div>
            </div>
            <!-- 预约教师列表 -->
            <div class="courseOne" v-if="courseList.orderTeacherBespokeList.length" v-for="(teacher,index) in courseList.orderTeacherBespokeList" :key="'teacher'+index">
              <img @click="goTeacherInfo(teacher)" class="fl" :src="teacher.picture" alt="">
              <div class="fl">
                <h4 @click="goTeacherInfo(teacher)">{{teacher.title}}（{{teacher.teacher_name}}）</h4>
              </div>
            </div>
            <div class="more" v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3" @click="selectPayApply(courseList,config.type)">
              查看更多>
            </div>
          </div>
          <div class="price height" :style="{height:computedHeight(courseList.orderCurriculumList.length+courseList.orderProjectList.length+courseList.orderVipList.length+courseList.orderTeacherBespokeList.length)}">
            <p>￥{{courseList.order_amount}}</p>
            <!-- 订单 -->
            <p v-if="config.type=='order'" class="detail" @click="selectPayApply(courseList,config.type)">订单详情</p>
          </div>
          <!-- 订单 -->
          <div v-show="config.type=='order'" class="status height" :style="{height: computedHeight(courseList.orderCurriculumList.length+courseList.orderProjectList.length+courseList.orderVipList.length+courseList.orderTeacherBespokeList.length)}">
            <p class="cancelOrder" v-if="courseList.pay_status == '1'" @click="cancelOrder(courseList.id)">取消订单</p>
            <p class="payReady payed" v-if="courseList.pay_status == '2' || courseList.pay_status == '6'">已支付</p>
            <p class="cancelOrder" v-if="courseList.pay_status == '5'" style="cursor: inherit">审核中</p>
            <!-- <p class="cancelOrder" v-if="courseList.pay_status == '6'" style="cursor: inherit">退款中</p> -->

            <!-- 已完成订单剩余时间 -->
            <p class="payReady" v-if="courseList.pay_status == '6'&&courseList.expire_day>=1">剩余{{courseList.expire_day}}天</p>
            <p class="payReady" v-if="(courseList.pay_status == '2'  || courseList.pay_status == '6')&&courseList.expire_day<1">已过期</p>
            <p class="payClose" v-if="courseList.pay_status == '3'">已关闭</p>
            <p class="payClose" v-if="courseList.pay_status == '4'">已退款</p>
            <p class="payClose" v-if="courseList.pay_status == '7'">退款中</p>
            <p>
              <span class="pay" v-if="courseList.pay_status == '1'" @click="goPay(courseList.id,courseList)">立即支付</span>
              <span class="buy" v-if="courseList.pay_status == '3'" @click="goShopping(courseList)">立即购买</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>

  </div>
</template>

<script>
import { timestampToTime } from "@/lib/util/helper";
import { order } from "~/lib/v1_sdk/index";
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { message, open } from "@/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  props: ["data", "config"],
  components: {
    "v-dialog": Dialog
  },
  data () {
    return {
      showDialog: false,
      dialogInfo: {},
      orderForm: {
        pages: 1,
        limits: 20,
        payStatus: null,
        ids: null
      },
      kidForm: {
        kid: ""
      },
      responseData: { type: true, res: "" },
      courseUrl: {
        base: "/course/coursedetail",
        kid: 0,
        bid: "",
        page: 0
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setGid", "setKid"]),
    detection () {
      this.$emit("detection");
    },
    //根据列表长度计算高度
    computedHeight (len) {
      let height = len > 3 ? 3 * 140 + 60 + "px" : len * 140 + "px";
      return height;
    },
    //计算项目列表显示数量
    computedLength (course, project, index) {
      let projectLength = course.length > 3 ? 0 : 3 - course.length;
      if (index < projectLength) {
        return true;
      } else {
        return false;
      }
    },
    //取消订单
    cancelOrder (id) {
      this.orderForm.ids = id;
      order.cancelOrder(this.orderForm).then(response => {
        if (response.status === 0) {
          this.$emit("handleUpdate", true);
          message(this, "success", "订单已取消！");
        } else if (response.status === 100008) {
          this.responseData.res = response;
          this.$bus.$emit("reLoginAlertPop", this.responseData);
          return false;
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //去支付
    goPay (id, courseList) {
      if (courseList.orderVipList.length > 0) {
        this.$router.push({
          path: "/shop/wepay",
          query: {
            order: id,
            type: 2
          }
        });
        return false;
      } else {
        this.$router.push({
          path: "/shop/wepay",
          query: {
            order: id,
            type: 1
          }
        });
      }
    },
    // 判断购物车数量
    goodsNmber (id) {
      if (persistStore.get("productsNum") < 70) {
        this.addCart(id);
      } else {
        this.showDialog = true;
        this.dialogInfo.info = "您的购物车已满，建议您先去结算或清理";
      }
    },
    closeDialog () {
      this.showDialog = false;
      this.$router.push("/shop/shoppingcart");
    },
    //加入购物车
    addCart (id) {
      this.orderForm.ids = id;
      order.buyAgain(this.orderForm).then(response => {
        if (response.status === 0) {
          this.$router.push("/shop/shoppingCart");
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    //直接购买
    goAffirmorder (item, type) {
      if (type == "vip") {
        this.$router.push({
          path: "/shop/affirmorder",
          query: { id: item.id, type: 2, pn: item.pay_number }
        });
      } else if (type == "self") {
        this.$router.push({
          path: "/shop/affirmorder",
          query: { id: item.id, type: 1 }
        });
      } else if (type == "project") {
        this.$router.push({
          path: "/shop/affirmorder",
          query: { id: item.id, type: 1, pn: item.pay_number }
        });
      }
    },
    //去购物车
    goShopping (courseList) {
      if (courseList.order_type == "1") {
        //课程
        this.goodsNmber(courseList.id);
      } else if (courseList.order_type == "2") {
        //项目
        if (courseList.project_type == "1") {
          //标准项目
          if (courseList.orderProjectList[0].study_type == "1") {
            //线上
            this.goodsNmber(courseList.id);
          } else {
            //混合 互动
            this.goAffirmorder(courseList.orderProjectList[0], "project");
          }
        } else {
          //定制项目
          this.goAffirmorder(courseList.orderProjectList[0], "self");
        }
      } else if (courseList.order_type == "3") {
        console.log(333);
        //学院
        this.goAffirmorder(courseList.orderVipList[0], "vip");
      }
    },
    //课程详情
    goCourseInfo (item, index) {
      this.kidForm.kids = item.id;
      this.courseUrl.kid = item.id;
      open(this.courseUrl);

      // this.$router.push({
      //   path: '/course/coursedetail',
      //   query: {
      //     kid: item.id,
      //     bid: '',
      //     page: 0
      //   }
      // })
    },
    //项目详情
    goProjrctInfo (item) {
      this.$router.push({
        path: "/project/projectdetail",
        query: {
          kid: item.id,
          type: item.project_type
        }
      });
    },
    // Vip详情
    goVipInfo (vip) {
      this.$router.push({
        path: "/home/vip/collegeDetail",
        query: {
          id: vip.id,
          cid: vip.category_id,
          title: vip.en_title
        }
      });
    },
    goTeacherInfo (teacher) {
      console.log(teacher);
    },
    //列表详情
    selectPayApply (item, type) {
      persistStore.set("order", item.id);
      if (type == "order") {
        this.$bus.$emit("goOrderDetail", true);
      } else if (type == "ticket") {
        // this.$bus.$emit('goTicketDetail', false)
        this.$bus.$emit("goOrderDetail", false);
      }
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToTime(time);
    }
  },
  mounted () {
    if (persistStore.get("orderDetail")) {
      this.$bus.$emit("goOrderDetail", true);
      persistStore.set("orderDetail", false);
    }
  }
};
</script>

