<template>
  <!--项目详情——评论 -->
  <div class="projectevaluate">
    <div class="evlHead clearfix">
      <div class="fl">
        <span>{{evaluateInfo.totalScore}}</span>
        <el-rate disabled v-model="evaluateInfo.totalScore"></el-rate>
      </div>
      <div class="fr">
        {{evaluateInfo.totalEvaluate}}人评价 好评度{{evaluateInfo.degree}}%
      </div>
    </div>
    <div class="evaluateList">{{evaluateData}}
      <div class="evl" v-for="(evl,index) in evaluateData" :key="index">
        <div class="evlperson clearfix">
          <img class="fl" :src="evl.head_img" alt="">
          <div class="fl">
            <p>{{evl.nick_name}}</p>
            <p>{{evl.create_time}}</p>
          </div>
          <el-rate disabled class="rate fr" v-model="evl.rate"></el-rate>
        </div>
        <p class="evlContent">{{evl.evaluate_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['evaluateData', 'evaluateInfo']
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectEvaluate';
</style>