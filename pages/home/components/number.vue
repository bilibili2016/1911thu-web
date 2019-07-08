<template>
  <div class="number">
    <div class="title">1911学堂，让努力奋进的人享受到全球最优质的教育！</div>
    <div class="con">
      <div class="item">
        <div class="num">{{teacherNum}}+</div>
        <div class="text">国内知名专家</div>
      </div>
      <div class="item">
        <div class="num">{{registerNum}}+</div>
        <div class="text">注册用户</div>
      </div>
      <div class="item">
        <div class="num">{{courseNum}}+</div>
        <div class="text">在线课程</div>
      </div>
      <div class="item">
        <div class="num">{{serviceNum}}+</div>
        <div class="text">咨询服务</div>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from "~/lib/v1_sdk/index";
import { formatNum } from "~/lib/util/helper";
export default {
  data () {
    return {
      teacherNum: 0,
      registerNum: 0,
      courseNum: 0,
      serviceNum: 0,
      timer1: '',
      timer2: '',
      timer3: '',
      timer4: '',
      statistics: {}
    }
  },
  methods: {
    computedNum () {
      this.timer1 = setInterval(() => {
        this.teacherNum += 4
        if (this.teacherNum >= 900) {
          this.teacherNum = 900
          clearInterval(this.timer1)
        }
      }, 1);
      this.timer2 = setInterval(() => {
        this.registerNum += 300
        if (this.registerNum >= Number(this.statistics.userTotal)) {
          this.registerNum = formatNum(this.statistics.userTotal)
          clearInterval(this.timer2)
        }
      }, 1);
      this.timer3 = setInterval(() => {
        this.courseNum += 20
        if (this.courseNum >= 350) {
          this.courseNum = 350
          clearInterval(this.timer3)
        }
      }, 1);
      this.timer4 = setInterval(() => {
        this.serviceNum += 25
        if (this.serviceNum >= Number(this.statistics.consultationTotal)) {
          this.serviceNum = formatNum(this.statistics.consultationTotal)
          clearInterval(this.timer4)
        }
      }, 1);

    },
    indexCensus () {
      home.indexCensus().then(res => {
        if (res.status === 0) {
          this.statistics = res.data
          this.computedNum()
        }
      });
    }
  },
  mounted () {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
    clearInterval(this.timer3)
    clearInterval(this.timer4)
    this.indexCensus()
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/style/home/num";
</style>