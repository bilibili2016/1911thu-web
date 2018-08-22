<template>
  <div>
    <el-tabs v-model="courseCodeNames" @tab-click="handleCourseCode">
      <!-- 课程码管理 课程码列表 -->
      <el-tab-pane label="兑换码列表" name="first">
        <v-invitation :codeData="codeData" @searchOrder="searchOrder"></v-invitation>
      </el-tab-pane>
      <!-- 课程码管理 兑换详情 -->
      <el-tab-pane label="兑换详情" name="second">
        <v-conversion :recordData="recordData" @goSearch="goSearch"></v-conversion>
      </el-tab-pane>
      <!-- 课程码管理 我的兑换 -->
      <el-tab-pane label="我的兑换" name="fourth">
        <v-binding :invitationCodeList='invitationCodeList'></v-binding>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Invitation from '@/pages/profile/pages/invitation'
import Conversion from '@/pages/profile/components/Conversion'
import Bind from '@/pages/profile/components/BindIng'
export default {
  props: ['codeData', 'recordData', 'invitationCodeList'],
  components: {
    'v-invitation': Invitation,
    'v-conversion': Conversion,
    'v-binding': Bind
  },
  methods: {
    handleCourseCode() {
      this.$emit('handleCourseCode')
    },
    searchOrder(data) {
      this.$emit('searchCodeList', data)
    },
    goSearch(data) {
      this.$emit('recordList', data)
    }
  },
  data() {
    return {
      courseCodeNames: 'first'
    }
  }
}
</script>

<style scoped>
</style>
