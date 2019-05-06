<template>
  <!-- 教师入口 -->
  <el-card class="333">
    <!-- 列表 -->
    <v-list v-if="isShowList" :data="data" :teacherPagemsg="teacherPagemsg" @getTeacherData="getTeacherData"></v-list>
    <!-- 预约时间表 -->
    <v-tabletime v-if="isShowTimeTable"></v-tabletime>
    <!-- 录入可预约的时间 -->
    <v-inputtime v-if="isShowInputTime"></v-inputtime>
    <!-- 修改时间 -->
    <v-updatetime v-if="isShowUpdateTime" :timeID="timeID"></v-updatetime>
  </el-card>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import List from "@/pages/profile/components/myteacher/list.vue";
import timeTable from "@/pages/profile/components/myteacher/timeTable.vue";
import inputTime from "@/pages/profile/components/myteacher/inputTime.vue";
import updateTime from "@/pages/profile/components/myteacher/updateTime.vue";

export default {
  props: ["data", "teacherPagemsg"],
  components: {
    "v-list": List,
    "v-tabletime": timeTable,
    "v-inputtime": inputTime,
    "v-updatetime": updateTime
  },
  data() {
    return {
      isShowList: true,
      isShowTimeTable: false,
      isShowInputTime: false,
      isShowUpdateTime: false,
      timeID: ""
    };
  },
  methods: {
    getTeacherData(data) {
      this.$emit("getTeacherData", data);
    }
  },
  mounted() {
    this.$bus.$on("gotoURL", data => {
      this.isShowList = false;
      this.isShowTimeTable = false;
      this.isShowInputTime = false;
      this.isShowUpdateTime = false;
      switch (data.name) {
        case "list":
          this.isShowList = true;
          this.$bus.$emit('getTeacherData')
          break;
        case "timeTable":
          this.isShowTimeTable = true;
          break;
        case "inputTime":
          this.isShowInputTime = true;
          break;
        case "updateTime":
          this.isShowUpdateTime = true;
          this.timeID = data.id;
          break;
        default:
          break;
      }
    });
  }
};
</script>