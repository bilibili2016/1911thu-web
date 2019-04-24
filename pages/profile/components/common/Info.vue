<template>
  <!-- 咨询详情 -->
  <div class="advisoryDetails">
    <div class="content">
      <h4>
        咨询详情
        <i class="el-icon-close" @click="close"></i>
      </h4>
      <div class="inner">
        <div class="item">
          <div class="left">学生姓名：</div>
          <div class="right">张三</div>
        </div>
        <div class="item">
          <div class="left">咨询开始时间：</div>
          <div class="right">2019-04-24 11:30</div>
        </div>
        <div class="item">
          <div class="left">咨询时长：</div>
          <div class="right">30min</div>
        </div>
        <div class="item">
          <div class="left">咨询费：</div>
          <div class="right">￥200.00</div>
        </div>
        <div class="item">
          <div class="left">咨询的问题：</div>
          <div class="right last">
            <p>1、课程总费用是多少？课程总费用是多少？课程总费用是多少？</p>
            <p>2、课程总费用是多少？课程总费用是多少？课程总费用是多少？ 课程总费用是多少？</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    close () {

    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/style/profile/common/info";
</style>