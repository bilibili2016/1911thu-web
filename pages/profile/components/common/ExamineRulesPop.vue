<template>
  <div class="examRules" v-loading="examRuleLoading">
    <div class="rulesInfo">
      <i class="el-icon-close" @click="closeRules"></i>
      <h4>温馨提示</h4>
      <p>
        <span class="left">您参加考试的学院：</span>
        <span class="right">{{examRuleInfo.title}}</span>
      </p>
      <p>
        <span class="left">考试次数：</span>
        <span class="right">第{{examRuleInfo.record_number}}次</span>
      </p>
      <p>
        <span class="left">考试题数：</span>
        <span class="right">{{examRuleInfo.question_number}}道</span>
      </p>
      <p>
        <span class="left">合格标准：</span>
        <span class="right">{{examRuleInfo.score}}分</span>
      </p>
      <p>
        <span class="left">考试时间：</span>
        <span class="right">{{examRuleInfo.exam_time/60}}分钟</span>
      </p>
      <p class="tip">点击确定开始考试，并开始倒计时！</p>
      <div class="btmBtn">
        <span @click="closeRules">取消</span>
        <span @click="handleExamine">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["examRuleInfo", "examRuleLoading"],
  methods: {
    // 关闭规则弹框
    closeRules() {
      this.$emit("closeRulesPop");
    },
    handleExamine() {
      this.$emit("examQuestion");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/profile/examineInfoPop";
</style>