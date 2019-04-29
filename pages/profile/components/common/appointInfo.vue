<template>
  <!-- 咨询详情 -->
  <div class="advisoryDetails">
    <div class="content">
      <h4>
        咨询详情
        <i class="el-icon-close" @click="close"></i>
      </h4>
      <div class="inner">
        <div class="item" v-if="!config.isTeacher">
          <div class="left">导师姓名：</div>
          <div class="right">{{detail.teacher_user_name}}</div>
        </div>
        <div class="item" v-else>
          <div class="left">学生姓名：</div>
          <div class="right">{{detail.real_name}}</div>
        </div>
        <div class="item">
          <div class="left">咨询开始时间：</div>
          <div class="right">{{detail.start_time}}</div>
        </div>
        <div class="item">
          <div class="left">咨询时长：</div>
          <div class="right">{{detail.use_time}}min</div>
        </div>
        <div class="item">
          <div class="left">咨询费：</div>
          <div class="right">￥{{detail.price}}</div>
        </div>
        <div class="item">
          <div class="left">咨询的问题：</div>
          <div class="right last askQuestion">
            <p v-for="(item,index) in detail.ask_question" :key="index">{{(index+1)+'、'+item}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["detail", "config"],
  methods: {
    close () {
      this.$emit("closeDetailPop");
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/style/profile/common/info";
</style>