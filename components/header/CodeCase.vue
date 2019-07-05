<template>
  <!-- 兑换码弹框 -->
  <div class="exchange">
    <div class="innerWord">
      <i class="el-icon-close closeEcg" @click="closeEcg"></i>
      <div class="changeContent">
        <div class="changeInput">
          <div class="code-icon"> <img src="https://static-image.1911edu.com/code-icon.png" alt=""></div>
          <p class="code-text">绑定兑换码</p>
          <div class="code-input">
            <input v-model="bindForm.courseId" autofocus="true" placeholder="请输入您的兑换码，注意区分大小写">
            <span class="bindCode input" v-if="isBind" @click="detection">绑定</span>
            <span class="bindCode" v-else>立即绑定</span>
          </div>
          <p class="code-desc">兑换码是用户为多人办理学籍或购买多门课程生成的6位代码。</p>
          <!-- 错误提醒：绑定码已过期失效 -->
          <!-- <p>
            <span>{{bindForm.error}}</span>
          </p>-->
        </div>
        <div class="changeTips">
          <p>兑换码使用规则：</p>
          <p>1.本兑换码仅用于兑换1911学堂的在线学院学籍或在线课程；</p>
          <p>2.本兑换码一经兑换即刻生效，无法更改；</p>
          <p>3.每枚兑换码每个学员仅兑换一次，不可重复兑换；</p>
          <p>4.您可在【个人中心】-【兑换码管理】页面中查看您的兑换码使用情况。</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bindForm"],
  data () {
    return {
      isBind: false
    }
  },
  watch: {
    // 绑定兑换码
    "bindForm.courseId" (val, oldval) {
      if (val == "") {
        this.isBind = false;
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.isBind = true;
        }
      }
    }
  },
  methods: {
    closeEcg () {
      this.$emit("closeEcg");
    },
    detection () {
      this.$emit("detection");
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/codeCase";
</style>
