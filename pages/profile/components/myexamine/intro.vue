<template>
    <!-- 认证资格介绍 -->
    <div class="examine-intro">
        <div class="examine-top">
            <span class="goBack" @click="handleBack">
                <i class=" el-icon-arrow-left icon"></i>认证资格介绍
            </span>
        </div>
        <div class="bottom">
            <div class="examine-btn " @click="handleExamine">开始考试</div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['vipID'],
  data() {
    return {
      pageData: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    handleBack() {
      this.pageData.name = 'info'
      this.$bus.$emit('whichShow', this.pageData)
    },
    handleExamine() {
      this.$router.push(
        '/profile/components/myexamine/answerQuestion?id=' + this.vipID
      )
    }
  }
}
</script>