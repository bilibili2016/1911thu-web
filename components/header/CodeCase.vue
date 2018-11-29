<template>
  <!-- 兑换码弹框 -->
  <div class="exchange">
    <div class="innerWord">
      <i
        class="el-icon-close closeEcg"
        @click="closeEcg"
      ></i>
      <div class="changeContent">
        <div class="changeInput">
          <span>兑换码:</span>
          <input
            v-model="bindForm.courseId"
            placeholder="请输入您的兑换码，注意区分大小写"
          >
          <!-- 错误提醒：绑定码已过期失效 -->
          <!-- <p>
            <span>{{bindForm.error}}</span>
          </p> -->
        </div>
        <div class="changeTips">
          <p>兑换码说明：</p>
          <p>1.本兑换码仅用于兑换1911学堂的在线学院学籍或在线课程；</p>
          <p>2.兑换码是由6位大小写英文字母及数字组成；</p>
          <p>3.本兑换码一经兑换即刻生效，无法更改；</p>
          <p>4.每枚兑换码每个学员仅兑换一次，不可重复兑换；</p>
          <p>5.您可在【个人中心】-【兑换码管理】页面中查看您的兑换码使用情况。</p>
        </div>
        <div
          v-if="bindForm.isInput"
          class="bind input"
          @click="detection"
        >绑定</div>
        <div
          v-else
          class="bind"
        >立即绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bindForm"],
  methods: {
    closeEcg() {
      this.$emit("closeEcg");
    },
    detection() {
      this.$emit("detection");
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/codeCase";
</style>
