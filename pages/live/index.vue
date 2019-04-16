<template>
  <div class="live">
    <div class="liveCon">
      <div>
        <div class="topBar"></div>
        <img src="http://static-image.1911edu.com/live-bg1.png" alt="">
        <div class="bottomBar">
          <span class="time">直播倒计时：20分15秒</span>
          <span class="btn nearBtn">结束直播</span>
          <span class="btn endBtn">结束直播</span>
        </div>
      </div>
      <!-- 即将结束 -->
      <div class="pop nearEnd">
        <i class="el-icon-close"></i>
        <p>尊敬的学员您好，本次的咨询时间即将结束，请您合理分配时间！</p>
      </div>
      <!-- 已结束 -->
      <div class="pop end">
        <p>本次一对一视频直播咨询服务已结束。</p>
        <span class="btn">返回个人中心</span>
      </div>
    </div>
    <div class="liveDetail">
      <h1>咨询问题大纲</h1>
      <div class="detail-items">
        <p class="item" v-for="(item,index) in question" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      question: [
        "1、远程班学习效果能保证吗？",
        "2、请问学完课程，将会获得什么？",
        "3、请问报名缴费后多久可以上课？",
        "4、报名缴费后可以退款吗？"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/live/index";
</style>
