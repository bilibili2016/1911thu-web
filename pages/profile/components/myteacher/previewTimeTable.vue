<template>
<!-- 录入预约时间-预览时间表 -->
  <div class="timeTable">
    <h4>
      <span @click="handleGoTo('list')">教师入口 ></span>
      <span @click="handleGoTo('timeTable')"> 预约时间表 ></span>
      <span class="active"> 预览录入时间</span>
    </h4>
    <div class="table">
      <div class="con">
        <table v-loading="isLoading">
          <tr>
            <th>预约日期</th>
            <th>开始时间</th>
            <th>预约咨询时长</th>
            <th>真实姓名</th>
            <th>预约状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in timeData" :key="index">
            <td>{{item.bespoke_date}}</td>
            <td>{{item.bespoke_start_time}}</td>
            <td>{{item.use_time}}min</td>
            <td>{{item.real_name}}</td>
            <td>
              <span v-if="item.result_status==1">未预约</span>
            </td>
            <td></td>
          </tr>
        </table>
        <div class="pagination" v-if="pagemsg.total>9">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="timeListChange"></el-pagination>
        </div>
      </div>
      <div class="inputConfirm" @click="confirmInput">确定</div>
    </div>
  </div>
</template>
<script>
import { myTeacher } from "~/lib/v1_sdk/index";
import { message, timestampToTime } from "~/lib/util/helper";

export default {
  data() {
    return {
      serviceTime: "",
      isLoading: true,
      rightIcon: "https://static-image.1911edu.com/myTeacher-icon1.png",
      timeData: "",
      pagemsg: {
        page: 1,
        pagesize: 9,
        total: 0
      },
      timeListForm: {
        page: 1,
        limit: 9
      },
      statusText: "",
      countDownSecond: "",
      CDTimer: null
    };
  },
  methods: {
    timeout(item) {
      let timeDiff = item.start_time - this.serviceTime;
      let minuteDiff = timeDiff / 60;
      // console.log(minuteDiff, "minuteDiff");
      this.countDownSecond = timeDiff;
      this.statusText = "即将开始";
      // clearInterval(this.CDTimer);
      this.CDTimer = setInterval(() => {
        if (this.countDownSecond <= 0) {
          //倒计时结束
          clearInterval(this.CDTimer);
          this.statusText = "进入直播";
        } else {
          this.countDownSecond = this.countDownSecond - 1;
        }
        // console.log(this.countDownSecond);
      }, 1000);
      return this.statusText;
    },
    //页面跳转
    handleGoTo(url, item) {
      let obj = { name: url };
      if (url == "updateTime") {
        obj.id = item.id;
      }
      this.$bus.$emit("gotoURL", obj);
    },
    //进入直播
    handleEnterLive(item) {
      this.$router.push(`/live?id=${item.id}&type=2`);
    },
    //翻页
    timeListChange(val) {
      this.timeListForm.page = val;
      this.timeListForm.limit = 9;
      this.bespokeTimeList();
    },
    //预约时间列表
    bespokeTimeList() {
      myTeacher.bespokeTimeList(this.timeListForm).then(res => {
        if (res.status == 0) {
          clearInterval(this.CDTimer);
          this.timeData = res.data.bespokeTimeList;
          this.pagemsg.total = res.data.total;
          this.serviceTime = res.data.serviceTime;
          this.isLoading = false;
        }
      });
    },
    //接受邀请
    acceptInvite(item) {
      myTeacher.acceptInvitation({ id: item.id }).then(res => {
        if (res.status == 0) {
          message(this, "success", res.msg);
          this.bespokeTimeList();
        } else {
          message(this, "error", res.msg);
        }
      });
    },
    confirmInput(){
      this.$bus.$emit('confirmInput')
    }
  },
  mounted() {
    clearInterval(this.CDTimer);
    this.bespokeTimeList();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/timeTable";
</style>

