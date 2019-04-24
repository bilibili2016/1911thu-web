<template>
  <!-- 教师入口 -->
  <el-card class="changeNav">
    <!-- 列表 -->
    <v-list v-if="isShowList" :data="data"></v-list>
    <!-- 预约时间表 -->
    <v-table v-if="isShowTimeTable"></v-table>
  </el-card>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import List from "@/pages/profile/components/myteacher/list.vue";
import timeTable from "@/pages/profile/components/myteacher/timeTable.vue";

export default {
  props: ["data"],
  components: {
    "v-list": List,
    "v-table": timeTable
  },
  data() {
    return {
      isShowList: true,
      isShowTimeTable: false
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("gotoURL", data => {
      this.isShowList = false;
      this.isShowTimeTable = false;
      switch (data.name) {
        case "list":
          this.isShowList = true;
          break;
        case "timeTable":
          this.isShowTimeTable = true;
          break;
        default:
          break;
      }
    });
  }
};
</script>