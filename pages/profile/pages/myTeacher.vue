<template>
  <!-- 教师入口 -->
  <el-card class="changeNav">
    <el-tabs v-model="activeName" @tab-click="handleActive">
      <!-- 学习中 -->
      <el-tab-pane label="未开始" name="first" value="1">
        <v-part :teacherData="data" :config="config"></v-part>
      </el-tab-pane>
      <!-- 已完成 -->
      <el-tab-pane label="已完成" name="second" value="2">
        <v-part :teacherData="data" :config="config"></v-part>
      </el-tab-pane>
      <!-- 已失效 -->
      <el-tab-pane label="已失效" name="fourth" value="3">
        <v-part :teacherData="data" :config="config"></v-part>
        <!-- <v-updateTime></v-updateTime> -->
        <!-- <v-info></v-info> -->
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import NoMsg from '@/pages/profile/components/common/noMsg.vue'
import Part from '@/pages/profile/components/common/Part.vue'
import UpdateTime from '@/pages/profile/components/myteacher/inputTime.vue'
import Info from '@/pages/profile/components/common/Info.vue'


export default {
  props: ["data"],
  components: {
    'v-nomsg': NoMsg,
    'v-part': Part,
    'v-info': Info,
  },
  data () {
    return {
      activeName: 'first',
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
    handleActive (item) {
      this.getData.statusType = item.$attrs.value;
      this.getTeacherData(this.getData);
    },
    getTeacherData (data) {
      this.$emit("getTeacherData", data);
    }
  }
};
</script>