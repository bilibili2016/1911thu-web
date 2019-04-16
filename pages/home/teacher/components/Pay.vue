<template>
  <div>
    <div class="pay">
      <div class="note" id="note" v-if="pay">
        <i @click="close" class="el-icon-close fr"></i>
        <h4>—— 尊敬的学员，请缴纳咨询费用 ——</h4>
        <div class="goodsInfo">
          <div class="userImg">
            <img :src="userInfo.head_img" alt>
            <span>{{userInfo.nick_name}}</span>
          </div>
          <div>
            <p>咨询的导师：{{teacherInfo.teacher_name}}</p>
            <p>咨询费用：0.01元</p>
          </div>
        </div>
        <div class="code">
          <div class="codeL">
            <p>微信</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="wechat" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
          <div class="codeC"></div>
          <div class="codeR">
            <p>支付宝</p>
            <div v-loading="loading" class="codeBox">
              <qrcode v-show="!loading" :value="alipay" :options="{ size: 120 }" class="qrcode"></qrcode>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
      <!-- 支付成功 -->
      <div class="paySuccess" v-show="paySuccess">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="http://static-image.1911edu.com/success.png" alt>
        <h5>支付成功</h5>
        <div class="goodsTime">
          <p>尊敬的学员，您预约的许成钢老师咨询服务将于</p>
          <p>2019年3月29日10:00-10:30开始进行,</p>
          <p>请准时进入直播间。</p>
        </div>
        <div class="goodsBtn">
          <span @click="close">返回名师智库</span>
        </div>
      </div>
      <!-- 支付失败 -->
      <div class="payError" v-show="payError">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="http://static-image.1911edu.com/error.png" alt>
        <h5>支付失败</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'
import VueQrcode from '@xkeshi/vue-qrcode'
import { store as persistStore } from '~/lib/core/store'
import { home, pay, wepay } from '~/lib/v1_sdk/index'
import { matchSplits, getNet } from '@/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  props: ['config', 'userInfo', 'teacherInfo', 'orderId'],
  data () {
    return {
      pay: false,
      paySuccess: false,
      payError: true,
      codeForm: {
        type: '4',
        ids: '',
        attachs: 2
      },
      loading: true,
      wechat: '',
      alipay: '',
      flag: true,
      user: {},
      gidForm: {
        gids: ''
      },
      socket: '',
    }
  },
  computed: {
    ...mapState('auth', ['closePay'])
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    ...mapMutations('auth', ['setClosePay']),
    close () {
      this.pay = false;
      this.paySuccess = false;
      this.payError = false;
      this.$emit('closePayed')
    },
    // 获取去二维码的方法
    getCode () {
      pay.getCode(this.codeForm).then(response => {
        this.produceOrderInfo = response.data.produceOrderInfo
        this.wechat = response.data.code_url
        this.alipay = response.data.qr_code
        this.loading = false
        this.flag = true
      })
    },
    getStatus () {
      let that = this
      this.socket = new io(getNet())
      // 连接socket
      this.socket.on('connect', function () {
        that.socket.emit('login', persistStore.get('token'))
      })
      // 支付推送来消息时
      this.socket.on('new_msg', function (msg) {
        //支付成功
        if (msg.pay_status == 0) {
          this.pay = false;
          this.paySuccess = true;
          this.payError = false;
          return false
        }
        //支付失败
        if (msg.pay_status == 100100) {
          this.pay = false;
          this.paySuccess = false;
          this.payError = true;
          return false
        }
      })
      // 断线重连
      this.socket.on('reconnect', function (msg) { })
    },
  },
  mounted () {
    this.codeForm.ids = this.orderId
    this.getCode()
    this.getStatus()
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/components/pay.scss";
</style>
