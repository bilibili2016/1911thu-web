<template>
  <!-- 我的订单，我的发票列表 -->
  <div class="delete">
    <div class="topBar">
      <span @click="goBack">我的订单 > </span>
      <span>订单回收站</span>
    </div>
    <div class="listBox" v-if="allOrderData.length">
      <div class="bottomBar" id="bottomBar" ref="bottomBar">
        <span class="fl">
          <el-checkbox v-model="checkMsg" @change="handleSelectAll">全选</el-checkbox>
          <!-- <input type="checkbox" class="el-checkbox" ref="checkbox" id="allChecked" @change="handleSelectAll">
          <label for="allChecked" class="el-checkbox-label">全选</label> -->
        </span>
        <span class="next " @click="deleteOrderAlter(0)">批量永久删除</span>
      </div>
      <div class="orderList" v-for="(courseList, index ) in allOrderData" :key="index">
        <div class="topBar clearfix">
          <div class="orderChecked fl">
            <input type="checkbox" class="checkbox singleCheckbox" ref="checkbox" :id="courseList.id" @change="handleSelectSingle(courseList)">
            <label :for="courseList.id" class="checkbox-label"></label>
          </div>
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
            <!-- 订单金额 详情 -->
            <div class="price height" :style="{height:computedHeight(courseList.orderCurriculumList.length+courseList.orderProjectList.length+courseList.orderVipList.length+courseList.orderTeacherBespokeList.length)}">
              <p>￥{{courseList.order_amount}}</p>
              <p v-if="config.type=='delete'" class="detail" @click="selectPayApply(courseList,config.type)">订单详情</p>
            </div>
            <!-- 操作按钮 状态 -->
            <div v-show="config.type=='delete'" class="status height" :style="{height: computedHeight(courseList.orderCurriculumList.length+courseList.orderProjectList.length+courseList.orderVipList.length+courseList.orderTeacherBespokeList.length)}">
              <p class="payDelete" @click="deleteOrderAlter(1,courseList.id)">删除</p>
              <p class="payClose">已关闭</p>
              <p>
                <span class="buy" @click="goShopping(courseList)">立即购买</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="empty" v-else>
      <img src="https://static-image.1911edu.com/deleteEmpty.png" alt="">
    </div> -->
    <v-nomsg class="noOrder" v-else :config="noMsg"></v-nomsg>
    <v-dialog v-if="showDialog" :dialog="dialogInfo" @closeDialog="closeDialog"></v-dialog>
  </div>
</template>

<script>
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import { timestampToTime } from "@/lib/util/helper";
import { order } from "~/lib/v1_sdk/index";
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { message, open } from "@/lib/util/helper";
import Dialog from "@/components/common/Dialog.vue";

export default {
  props: ["config", "noMsg"],
  components: {
    'v-nomsg': NoMsg,
    "v-dialog": Dialog
  },
  data () {
    return {
      checkMsg: false,
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
      },
      detailconfig: {
        type: true,
        id: 2 //判断是回收站进入的详情
      },
      checkedArr: [],
      allOrderData: '',
      deleteList: {
        id: []
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setGid", "setKid"]),
    goBack () {
      this.$emit('goBack', 1)
    },
    // 批量永久删除
    deleteMulti (type, id) {
      this.deleteList.id = [];
      if (type == 1) {
        this.deleteList.id.push(id)
      } else {
        this.deleteList.id = this.checkedArr
      }
      this.doDeleteOrder()
    },
    deleteOrderAlter (type, id) {
      this.$confirm('永久删除后，您将无法再查看该订单，请谨慎操作！', '您确定要永久删除该订单吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteMulti(type, id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 获取回收站订单列表
    getOrderTrashList () {
      order.getOrderTrashList(this.orderForm).then(response => {
        if (response.status === 0) {
          this.allOrderData = response.data.orderList
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    // 多选框选择所有
    handleSelectAll (val) {
      var checkboxList = document.getElementsByClassName("singleCheckbox");
      if (val) {
        this.checkedArr = [];
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = true;
          this.checkedArr.push(checkboxList[i].id);
        }
      } else {
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = false;
          this.checkedArr.push(checkboxList[i].id);
        }
        this.checkedArr = [];
        this.checkMsg = false;
      }
    },
    // 多选框选择单个
    handleSelectSingle (item) {
      let itemIndex = this.checkedArr.indexOf(item.id)
      if (itemIndex >= 0) {
        //已选中变成-未选中
        this.checkedArr.splice(itemIndex, 1);
      } else {
        //未选中变成-选中
        this.checkedArr.push(item.id);
      }
      if (this.checkedArr.length == this.allOrderData.length) {
        this.checkMsg = true;
      } else {
        this.checkMsg = false;
      }
    },
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
    //删除订单接口
    doDeleteOrder () {
      order.doDeleteOrder(this.deleteList).then(response => {
        if (response.status === 0) {
          this.handleSelectAll(false)
          this.getOrderTrashList()
        } else if (response.status === 100008) {
          this.responseData.res = response;
          this.$bus.$emit("reLoginAlertPop", this.responseData);
          return false;
        } else {
          message(this, "error", response.msg);
        }
      });
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
        //学院
        this.goAffirmorder(courseList.orderVipList[0], "vip");
      }
    },
    //课程详情
    goCourseInfo (item, index) {
      this.kidForm.kids = item.id;
      this.courseUrl.kid = item.id;
      open(this.courseUrl);
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
      // console.log(teacher);
    },
    //列表详情
    selectPayApply (item, type) {
      persistStore.set("order", item.id);
      type == "order" ? this.detailconfig.type = true : this.detailconfig.type = false
      this.$bus.$emit("goOrderDetail", this.detailconfig);
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToTime(time);
    }
  },
  mounted () {
    // if (persistStore.get("orderDetail")) {
    //   this.$bus.$emit("goOrderDetail", true);
    //   persistStore.set("orderDetail", false);
    // }
    this.getOrderTrashList()
  }
};
</script>

