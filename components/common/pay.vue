<template>
  <div>
    <div class="pay" v-show="showPay">
      <div class="note">
        <i @click="close" class="el-icon-close fr"></i>
        <h4>尊敬的用户，该课程需
          <span>付费</span>观看
        </h4>
        <div class="code">
          <div class="codeL">
            <p>微信</p>
            <p class="img"></p>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <p class="img"></p>
          </div>
        </div>
        <div class="bottomWord">
          <h5>扫一扫，轻松购课！</h5>
          <h6>支付后刷新页面观看</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['config'],
  data() {
    return {
      showPay: false
    }
  },
  methods: {
    close() {
      this.showPay = false
    }
  },
  mounted() {
    this.$bus.$on('openReport', data => {
      this.showReportBug = true
    })
  }
}
</script>
<style scoped lang="scss">
.pay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 99999;
  .note {
    position: absolute;
    top: 15%;
    left: 16%;
    // margin-top: -185px;
    // margin-left: -290px;
    width: 580px;
    height: 370px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    i.el-icon-close {
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 20px;
      color: #6417a6;
    }
    h4 {
      font-size: 16px;
      color: #222;
      padding: 50px 0 20px;
      text-align: center;
      span {
        color: #ff2424;
        margin: 0 5px;
      }
    }
    .code {
      padding: 0 90px;
      display: flex;
      justify-content: space-around;
      div.codeC {
        height: 120px;
        width: 2px;
        margin: 50px 90px 0;
        background-color: #ebebec;
      }
      p {
        line-height: 56px;
        height: 56px;
        text-align: center;
        font-size: 16px;
        color: #222;
      }
      .img {
        width: 110px;
        height: 110px;
        background-color: #cccccc;
      }
    }

    .bottomWord {
      width: 100%;
      height: 80px;
      background-color: #e7d9f3;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      h5 {
        color: #6417a6;
        font-size: 16px;
        margin-top: 10px;
        line-height: 30px;
      }
      h6 {
        color: #101010;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
}
</style>