<template>
  <!-- 我的咨询 -->
  <el-card class="changeNav">
    <el-tabs v-model="activeName" @tab-click="handleActive">
      <!-- 未开始 -->
      <el-tab-pane label="未开始" name="first" value="1">
        <v-part :teacherData="data" :config="config" @changeAppointLIst="changeAppointLIst" :isOver='false'></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
      <!-- 已完成 -->
      <el-tab-pane label="已完成" name="second" value="2">
        <v-part :teacherData="data" :config="config" :teacherPagemsg="teacherPagemsg" @changeAppointLIst="changeAppointLIst" :isOver='false'></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
      <!-- 已失效 -->
      <el-tab-pane label="已失效" name="fourth" value="3">
        <v-part :teacherData="data" :config="config" :teacherPagemsg="teacherPagemsg" @changeAppointLIst="changeAppointLIst" :isOver='true'></v-part>
        <div class="pagination" v-if="teacherPagemsg && teacherPagemsg.total>12">
          <el-pagination background layout="prev, pager, next" :page-size="teacherPagemsg.pagesize" :pager-count="5" :page-count="teacherPagemsg.pagesize" :current-page="teacherPagemsg.page" :total="teacherPagemsg.total" @current-change="teacherListChange"></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>

  </el-card>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import NoMsg from "@/pages/profile/components/common/noMsg.vue";
import Part from "@/pages/profile/components/common/Part.vue";

export default {
  props: ["data", "teacherPagemsg"],
  components: {
    "v-nomsg": NoMsg,
    "v-part": Part
  },
  data() {
    return {
      activeName: "first",
      config: {
        isTeacher: false
      },
      getData: {
        statusType: 1,
        type: 1
      }
    };
  },
  methods: {
    teacherListChange(val) {
      this.$bus.$emit("changeAppointLIst", val);
    },
    changeAppointLIst() {
      this.$emit("changeAppointLIst");
    },
    handleActive(item) {
      this.getData.statusType = item.$attrs.value;
      this.getTeacherData(this.getData);
    },
    getTeacherData(data) {
      this.$emit("getTeacherData", data);
    },

  },
  mounted(){
     this.$bus.$on('activeStudent', data => {
      this.activeName = 'first'
    })
  }
};
</script>
