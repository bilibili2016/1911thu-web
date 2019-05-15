<template>
  <div class="timeTable">
    <div class="top clearfix">
      <div class="left"><span @click="handleGoTo('list')">教师入口 > </span> <span> 预约时间表</span></div>
      <div class="right" @click="handleGoTo('inputTime')"> <img :src="rightIcon" alt=""> <span class="right">录入可预约时间</span></div>
    </div>

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
              <span v-if="item.result_status==2" class="unconfirmed">待确认</span>
              <span v-if="item.result_status==3" class="confirmed">已确认</span>
              <span v-if="item.result_status==4">调整失败</span>
              <span v-if="item.result_status==5">已改签</span>
              <span v-if="item.result_status==6">已调整待确认</span>
            </td>
            <td>
              <span :data='serviceTime-item.create_time' v-if="(serviceTime>item.create_time)&&(serviceTime-item.create_time<1800)" class="delete" @click="deleteTime(item)">删除</span>
              <div v-if="item.result_status==2">
                <span class="operate accept" @click="acceptInvite(item)">接受时间</span>
                <span class="operate update" @click="handleGoTo('updateTime',item)">申请修改时间</span>
              </div>
              <div v-if="item.result_status==3">
                <div v-if="item.start_time >=serviceTime">
                  <span class="operate readyStart" v-if="(parseInt(item.start_time) - serviceTime)/60<=30">{{timeout(item,index)}}</span>
                  <span v-else></span>
                </div>
                <div v-else>
                  <span class="operate over" v-if="serviceTime > item.end_time">已结束</span>
                  <span v-else class="operate enterLive" @click="handleEnterLive(item)">进入直播</span>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <div class="pagination" v-if="pagemsg.total>9">
          <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="timeListChange"></el-pagination>
        </div>
      </div>
    </div>
    <el-dialog
    title="提示"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <span>确定删除此条内容吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelDelete">取 消</el-button>
      <el-button type="primary" @click="confirmDelete">确 定</el-button>
    </span>
  </el-dialog>

  </div>
</template>
<script>
import { myTeacher } from "~/lib/v1_sdk/index";
import { message, timestampToTime,IEPopup } from "~/lib/util/helper";

export default {
  data() {
    return {
      deleteID:'',
      centerDialogVisible:false,
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
    cancelDelete(){
       this.centerDialogVisible=false
    },
    confirmDelete(){
      myTeacher.deleteBespokeTime({id:this.deleteID}).then(res => {
        if (res.status == 0) {
          IEPopup("pane-tab-thirteenth", "relative", 1);
          this.centerDialogVisible=false
          this.bespokeTimeList()
        }
      });
    },
    //删除时间表
    deleteTime(item){
        IEPopup("pane-tab-thirteenth", "-ms-page", 0);
        this.centerDialogVisible=true
        this.deleteID = item.id
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

