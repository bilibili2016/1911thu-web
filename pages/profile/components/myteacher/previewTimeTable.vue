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
        <table>
          <tr>
            <th>预约日期</th>
            <th>开始时间</th>
            <th>预约咨询时长</th>
            <th>真实姓名</th>
            <th>预约状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in bespokeList" :key="index">
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
      </div>
      <div class="inputConfirm" @click="confirmInput">确定</div>
    </div>
  </div>
</template>
<script>
import { myTeacher } from "~/lib/v1_sdk/index";
import { message, timestampToTime } from "~/lib/util/helper";

export default {
  props:['bespokeList'],
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
    //页面跳转
    handleGoTo(url, item) {
      let obj = { name: url };
      if (url == "updateTime") {
        obj.id = item.id;
      }
      this.$bus.$emit("gotoURL", obj);
    },
    confirmInput(){
      this.$bus.$emit("gotoURL", {name:'timeTable'});
    }
  },
  mounted() {
    clearInterval(this.CDTimer);
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/profile/myTeacher/timeTable";
</style>

