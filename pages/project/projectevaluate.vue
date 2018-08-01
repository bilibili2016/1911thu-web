<template>
  <div class="projectevaluate">
    <div class="evlHead clearfix">
      <div class="fl">
        <span>{{evaluateData.grade}}</span>
        <el-rate disabled v-model="evaluateData.rate"></el-rate>
      </div>
      <div class="fr">
        {{evaluateData.number}}人评价 好评度{{evaluateData.degree}}%
      </div>
    </div>
    <div class="evaluateList">
      <div class="evl" v-for="(evl,index) in evaluateData.evlList" :key="index">
        <div class="evlperson clearfix">
          <img class="fl" :src="evl.headImg" alt="">
          <div class="fl">
            <p>{{evl.evlUser}}</p>
            <p>{{evl.time}}</p>
          </div>
          <el-rate disabled class="rate fr" v-model="evl.rate"></el-rate>
        </div>
        <p class="evlContent">{{evl.evlWord}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['evaluateData']
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectEvaluate';
</style>