<template>
  <!-- 兑换码弹框 -->
  <div class="exchange">
    <div class="innerWord">
      <i class="el-icon-close closeEcg" @click="closeEcg"></i>
      <div class="changeContent">
        <div class="changeInput">
          <span>兑换码:</span>
          <input v-model="bindForm.courseId" placeholder="请输入您的兑换码，区分大小写。">
          <!-- 错误提醒：绑定码已过期失效 -->
          <!-- <p>
            <span>{{bindForm.error}}</span>
          </p> -->
        </div>
        <div class="changeTips">
          <p>兑换码说明：</p>
          <p>1.兑换码是用户在购买多份课程/项目或者复购后生成的6位代码；</p>
          <p>2.输入兑换码，绑定后课程被激活，请在个人中心“我的课程”或“我的项目”中查看</p>
          <p>3.绑定成功后，不可更改。</p>
        </div>
        <div v-if="bindForm.isInput" class="bind input" @click="detection">绑定</div>
        <div v-else class="bind">绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bindForm'],
  methods: {
    closeEcg() {
      this.$emit('closeEcg')
    },
    detection() {
      this.$emit('detection')
    }
  }
}
</script>

<style scoped>
</style>
