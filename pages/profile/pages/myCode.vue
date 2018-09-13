<template>
  <div>
    <el-tabs v-model="courseCodeNames" @tab-click="handleCourseCode">
      <!-- 课程码管理 课程码列表 -->
      <el-tab-pane label="兑换码列表" name="first">
        <v-invitation :codeData="codeData" :allCode="allCode" @searchOrder="searchOrder"></v-invitation>
      </el-tab-pane>
      <!-- 课程码管理 兑换详情 -->
      <el-tab-pane label="兑换详情" name="second">
        <v-conversion :recordData="recordData" @goSearch="goSearch"></v-conversion>
      </el-tab-pane>
      <!-- 课程码管理 我的兑换 -->
      <el-tab-pane label="我的兑换" name="fourth">
        <v-binding :invitationCodeList='invitationCodeList' @reGetCode="reGetCode" @studyCourse="studyCourse" @studyProject="studyProject"></v-binding>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import Invitation from '@/pages/profile/components/mycode/invitation'
import Conversion from '@/pages/profile/components/mycode/Conversion'
import Bind from '@/pages/profile/components/mycode/BindIng'
export default {
  props: ['codeData', 'recordData', 'invitationCodeList', 'allCode'],
  components: {
    'v-invitation': Invitation,
    'v-conversion': Conversion,
    'v-binding': Bind
  },
  data() {
    return {
      courseCodeNames: 'first'
    }
  },
  mounted() {
    this.$bus.$on('activeCode', data => {
      this.courseCodeNames = 'first'
    })
  },
  methods: {
    handleCourseCode(item) {
      if (persistStore.get('token')) {
        this.$emit('handleCourseCode', item)
      } else {
        this.$router.push('/')
        this.$bus.$emit('loginShow', true)
      }
    },
    searchOrder(data) {
      this.$emit('searchCodeList', data)
    },
    goSearch(data) {
      this.$emit('recordList', data)
    },
    reGetCode() {
      this.$emit('reGetCode')
    },
    studyCourse() {
      this.$emit('studyCourse', 1, 1)
    },
    studyProject() {
      this.$emit('studyProject', 1, 1)
    }
  }
}
</script>


