<template>
  <!-- 教师入口 -->
  <el-card class="changeNav teacherList">
    <el-tabs v-model="activeName" @tab-click="handleActive">
      <!-- 学习中 -->
      <el-tab-pane label="未开始" name="first" value="1">
        <v-part :teacherData="data" :teacherPagemsg="teacherPagemsg" :config="config"></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
      <!-- 已完成 -->
      <el-tab-pane label="已完成" name="second" value="2">
        <v-part :teacherData="data" :teacherPagemsg="teacherPagemsg" :config="config"></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
      <!-- 已失效 -->
      <el-tab-pane label="已失效" name="fourth" value="3">
        <v-part :teacherData="data" :teacherPagemsg="teacherPagemsg" :config="config"></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="btns-con">
      <div class="btns-Time" @click="handleGoTo('inputTime')"> <img :src="rightIcon" alt=""> <span class="right">录入可预约时间</span></div>
      <div class="viewTimeTable" @click="handleGoTo('timeTable')">查看预约时间表 > </div>
    </div>
  </el-card>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import Part from "@/pages/profile/components/common/Part.vue";
import UpdateTime from "@/pages/profile/components/myteacher/updateTime.vue";

export default {
  props: ["data", "teacherPagemsg"],
  components: {
    "v-nomsg": NoMsg,
    "v-part": Part,
    "v-updateTime": UpdateTime
  },
  data() {
    return {
      rightIcon: "https://static-image.1911edu.com/myTeacher-icon1.png",
      activeName: "first",
      showUpdateTime: false,
      config: {
        isTeacher: true
      },
      getData: {
        statusType: 1,
        type: 2
      }
    };
  },
  methods: {
    teacherListChange(val) {
      this.$bus.$emit("changeAppointLIst", val);
    },
    handleActive(item) {
      this.getData.statusType = item.$attrs.value;
      this.getTeacherData(this.getData);
    },
    getTeacherData(data) {
      this.$emit("getTeacherData", data);
    },
    handleGoTo(url) {
      let obj = { name: url };
      this.$bus.$emit("gotoURL", obj);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
