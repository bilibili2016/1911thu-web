<template>
  <!-- 按订单开发票 -->
  <div class="ticketOrder">
    <div>
      <div v-if="ticketOrderData.length>0">
        <!-- 发票订单列表 -->
        <div class="orderList" v-for="(courseList, index ) in ticketOrderData" :key="index">
          <div class="topBar clearfix">
            <span class="fl">订单号：{{courseList.order_sn}}</span>
            <span class="fr">{{exchangeTime(courseList.create_time)}}</span>
          </div>
          <div class="list">
            <div class="content">
              <!-- 发票 -->
              <div class="orderChecked">
                <input type="checkbox" class="checkbox singleCheckbox" ref="checkbox" :id="courseList.id" @change="handleSelectSingle(courseList)">
                <label :for="courseList.id" class="checkbox-label"></label>
              </div>
              <div class="course">
                <!-- 课程列表 -->
                <div class="courseOne" v-if="courseList.orderCurriculumList.length && index<3" v-for="(course,index) in courseList.orderCurriculumList" :key="course.id">
                  <img @click="goCourseInfo(course)" class="fl" :src="course.picture" alt="">
                  <div class="fl">
                    <h4 @click="goCourseInfo(course)">{{course.title}}</h4>
                    <h6>{{course.curriculum_time}}学时</h6>
                  </div>
                </div>
                <!-- 项目列表 -->
                <div class="courseOne" v-if="computedLength(courseList.orderCurriculumList,courseList.orderProjectList,index)" v-for="(project,index) in courseList.orderProjectList" :key="index">
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
                <div class="courseOne" v-if="courseList.orderVipList.length && index<3" v-for="(vip,index) in courseList.orderVipList" :key="vip.id">
                  <img @click="goVipInfo(vip)" class="fl" :src="vip.picture" alt="">
                  <div class="fl">
                    <h4 @click="goVipInfo(vip)">{{vip.title}}</h4>
                  </div>
                </div>
                <!-- 预约教师列表 -->
                <div class="courseOne" v-if="courseList.orderTeacherBespokeList.length && index<3" v-for="(teacher,index) in courseList.orderTeacherBespokeList" :key="teacher.id">
                  <img @click="goTeacherInfo(teacher)" class="fl" :src="teacher.picture" alt="">
                  <div class="fl">
                    <h4 @click="goTeacherInfo(teacher)">{{teacher.title}}（{{teacher.teacher_name}}）</h4>
                  </div>
                </div>
                <div class="more" v-if="(courseList.orderCurriculumList.length+courseList.orderProjectList.length)>3" @click="selectPayApply(courseList)">
                  查看更多>
                </div>
              </div>
              <div class="price height" :style="{height:computedHeight(courseList.orderCurriculumList.length+courseList.orderProjectList.length+courseList.orderVipList.length)}">
                <p>￥{{courseList.order_amount}}</p>
              </div>

            </div>
          </div>
        </div>
        <!-- 定位用 -->
        <div class="bottomPosition" if="bottomPosition"></div>
        <div class="bottomBar" id="bottomBar" ref="bottomBar">
          <span class="fl">
            <el-checkbox v-model="checkMsg " @change="handleSelectAll"></el-checkbox>
            全选
          </span>
          <span class="money ">
            <i>{{orderNum}}</i> 个订单，
            <strong>共：
              <i>￥{{orderPrice}}</i>
            </strong>
          </span>
          <span class="next " @click="showIoc">下一步</span>
        </div>
      </div>
      <v-nomsg class="noOrder " v-else :config="noMsgTwl"></v-nomsg>
      <!-- 发票弹框 第一步：填写发票信息-->
      <v-ticketinfo v-if="showInvoice" @handleClose="close" @closeForm="closeFirst"></v-ticketinfo>
      <!-- 发票弹框 第二步：确认发票信息并提交-->
      <v-ticket v-if="showTicket" @handleClose="close" @handBack="handBack" @closeForm="closeSecond"></v-ticket>
      <!-- 发票弹框 第三步：确认发票信息并提交-->
      <v-comfirm :price="orderPrice" :checkedArr="checkedArr" @getUnTicketData="getUnTicketData" @chengeItem="chengeItem" @goBack="showSecond" @backFirst="handBack"></v-comfirm>
    </div>
  </div>
</template>

<script>
import { ticketorder } from "~/lib/v1_sdk/index";
import { timestampToTime, open, IEPopup } from "@/lib/util/helper";
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import TicketInfo from "@/pages/profile/components/myticket/ticketInfo";
import TicketReception from "@/pages/profile/components/myticket/ticketReception";
import TicketConfirm from "@/pages/profile/components/myticket/ticketConfirm";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
export default {
  props: ["orderData"],
  watch: {
    orderData () {
      this.ticketOrderData = this.orderData;
    }
  },
  components: {
    "v-ticketinfo": TicketInfo,
    "v-ticket": TicketReception,
    "v-comfirm": TicketConfirm,
    "v-nomsg": NoMsg
  },
  data () {
    return {
      noMsgTwl: {
        type: "myTicket",
        text: "抱歉，您还没有订单需要开票~"
      },
      ticketType: {
        type: "ticket"
      },
      noMsgImg: "https://static-image.1911edu.com/noMsg.png",
      orderPrice: 0,
      orderNum: 0,
      ticketOrderData: [],
      checkedArr: [],
      checkMsg: false,
      showInvoice: false,
      showTicket: false,
      kidForm: {
        kids: ""
      },
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
    // 选择要开发票的订单
    handleSelectSingle (item) {
      let itemIndex = this.checkedArr.indexOf(item.id);
      if (itemIndex >= 0) {
        //未选中
        this.checkedArr.splice(itemIndex, 1);
        this.orderPrice = (
          (Number(this.orderPrice) * 10 - Number(item.order_amount) * 10) /
          10
        ).toFixed(2);
      } else {
        //选中
        this.checkedArr.push(item.id);

        this.orderPrice = (
          (Number(this.orderPrice) * 10 + Number(item.order_amount) * 10) /
          10
        ).toFixed(2);
      }
      this.orderNum = this.checkedArr.length;
      if (this.checkedArr.length == this.ticketOrderData.length) {
        this.checkMsg = true;
      } else {
        this.checkMsg = false;
      }
    },
    // 全选
    handleSelectAll (val) {
      var checkboxList = document.getElementsByClassName("singleCheckbox");

      if (val) {
        this.checkedArr = [];
        this.orderPrice = 0;
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = true;
          this.checkedArr.push(checkboxList[i].id);
        }

        this.ticketOrderData.forEach(item => {
          this.orderPrice = (
            (Number(this.orderPrice) * 10 + Number(item.order_amount) * 10) /
            10
          ).toFixed(2);
        });
      } else {
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = false;
          this.checkedArr.push(checkboxList[i].id);
        }

        this.checkedArr = [];
        this.orderPrice = 0;
        this.checkMsg = false;
      }

      this.orderNum = this.checkedArr.length;
    },
    // 展示修改发票信息弹框
    showIoc () {
      if (this.checkedArr.length > 0) {
        IEPopup("pane-tab-eighth", "-ms-page", 0);
        this.getLastTicket();
      } else {
        this.$message({
          showClose: true,
          type: "info",
          message: "请先选择要开具发票的订单！"
        });
      }
    },
    // 获取上一次开发票的记录
    getLastTicket () {
      ticketorder.getLastTicket().then(res => {
        if (res.status == 0) {
          this.$bus.$emit("showConfirm", res.data, true);
        } else {
          this.showInvoice = true;
        }
      });
    },

    //未开发票列表
    getUnTicketData () {
      ticketorder.orderNotInvoice().then(response => {
        this.ticketOrderData = response.data.orderList;
        var checkboxList = document.getElementsByClassName("singleCheckbox");
        for (var i = 0; i < checkboxList.length; i++) {
          checkboxList[i].checked = false;
        }
      });
    },
    // 切换到开票历史
    chengeItem () {
      this.$emit("chengeItem");
    },
    // 开纸质发票 提交发票的时候 返回 展示开发票第二步
    showSecond () {
      IEPopup("pane-tab-eighth", "-ms-page", 0);
      this.showTicket = true;
    },
    // 关闭表单 清数据
    close () {
      IEPopup("pane-tab-eighth", "relative", 1);
      this.showInvoice = false;
      this.showTicket = false;
      persistStore.set("invoiceData", "");
    },
    // 关闭第一步 展示第二步 不清除缓存
    closeFirst () {
      this.showInvoice = false;
      this.showTicket = true;
    },
    // 关闭第二步 返回第一步
    handBack () {
      IEPopup("pane-tab-eighth", "-ms-page", 0);
      this.showInvoice = true;
      this.showTicket = false;
    },
    // 关闭第二步 展示第三部 不清除缓存（内部判断）
    closeSecond () {
      IEPopup("pane-tab-eighth", "relative", 1);
      this.showTicket = false;
    },
    //课程详情
    goCourseInfo (item, index) {
      this.kidForm.kids = item.id;

      this.courseUrl.kid = item.id;
      open(this.courseUrl);
      // this.$router.push(`/course/coursedetail?kid=${item.id}&bid=&page=0`)
    },
    //项目详情
    goProjrctInfo (item) {
      this.$router.push(
        `/project/projectdetail?kid=${item.id}&type=${item.project_type}`
      );
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

    },
    //列表详情
    selectPayApply (item, type) {
      persistStore.set("order", item.id);
      this.$emit("goTicketDetail", false);
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToTime(time);
    },
    //根据列表长度计算高度
    computedHeight (len) {
      let height = len > 3 ? 3 * 140 + 60 : len * 140;
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
    }
  },
  mounted () {
    this.ticketOrderData = this.orderData;
    this.$bus.$on("CloseAllChecked", data => {
      this.handleSelectAll(false);
    });
  }
};
</script>

