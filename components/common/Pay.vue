<template>
  <div>
    <div class="pay" v-show="payShadow">
      <div class="note" v-show="showPay" id="note">
        <i @click="close" class="el-icon-close fr"></i>
        <h4>—— 尊敬的学员，您的试看已结束，支付后可继续学习 ——</h4>
        <div class="goodsInfo" v-show="!loading">
          <div class="userImg">
            <img :src="produceOrderInfo.head_img" alt>
            <span>{{produceOrderInfo.nick_name}}</span>
          </div>
          <div v-if="codeForm.type==1">
            <p>课程名称：{{produceOrderInfo.title}}</p>
            <p>
              <span>
                课程价格：
                <strong>{{produceOrderInfo.present_price}}</strong>元
              </span>
              <span>课程有效期：365天</span>
            </p>
          </div>
          <div v-if="codeForm.type==2">
            <p>项目名称：{{produceOrderInfo.title}}</p>
            <p>
              <span>
                项目价格：
                <strong>{{produceOrderInfo.present_price}}</strong>元
              </span>
              <span>项目有效期：365天</span>
            </p>
            <!-- produceOrderInfo.study_type 判断 普通项目类型： 线上 混合 互动-->
            <p>
              <span v-if="produceOrderInfo.study_type==='1'">培训方式：线上</span>
              <span v-else-if="produceOrderInfo.study_type==='2'">培训方式：混合</span>
              <span v-else-if="produceOrderInfo.study_type==='3'">培训方式：互动</span>
              <span v-if="produceOrderInfo.study_type==='2'||produceOrderInfo.study_type==='3'">培训人数：{{produceOrderInfo.study_persion_number}}人</span>
            </p>
            <!-- 混合项目和互动项目显示线下培训天数 -->
            <p v-if="produceOrderInfo.study_type==='2'||produceOrderInfo.study_type==='3'">
              <span>线下培训天数：{{produceOrderInfo.offline_days}}天</span>
            </p>
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
        <div class="bottomWord">
          <h5>扫一扫，轻松购课!</h5>
          <h6>支付后刷新页面观看</h6>
        </div>
      </div>
      <!-- 支付成功 -->
      <div class="paySuccess" v-show="paySuccess">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="https://static-image.1911edu.com/success.png" alt>
        <h5>支付成功</h5>
        <div class="goodsTime">
          <p>您已购买《{{produceOrderInfo.title}}》</p>
          <p v-if="produceOrderInfo.study_type==='2'||produceOrderInfo.study_type==='3'">
            <span>有效期365天</span> ，请绑定兑换码后继续观看
          </p>
          <p v-else>
            <span>有效期365天</span> ，请刷新页面继续观看
          </p>
        </div>
        <div class="goodsBtn">
          <span @click="paySuccessful()">确定</span>
        </div>
      </div>
      <!-- 支付失败 -->
      <div class="payError" v-show="payError">
        <i @click="close" class="el-icon-close fr"></i>
        <img src="https://static-image.1911edu.com/error.png" alt>
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
import { matchSplits } from '@/lib/util/helper'
Vue.component(VueQrcode.name, VueQrcode)
export default {
  props: ['config'],
  data () {
    return {
      payShadow: false,
      showPay: false,
      paySuccess: false,
      payError: false,
      codeForm: {
        type: '2',
        ids: '',
        attachs: 2
      },
      loading: true,
      wechat: '',
      alipay: '',
      flag: true,
      produceOrderInfo: {},
      gidForm: {
        gids: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['closePay'])
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    ...mapMutations('auth', ['setClosePay']),
    close () {
      this.payShadow = false
      this.showPay = false
      this.paySuccess = false
      this.payError = false
      this.setClosePay({ closePay: true })
    },
    // 获取去二维码的方法
    getCode () {
      this.codeForm.ids = matchSplits('kid')
      pay.getCode(this.codeForm).then(response => {
        this.produceOrderInfo = response.data.produceOrderInfo
        this.wechat = response.data.code_url
        this.alipay = response.data.qr_code
        this.loading = false
        this.flag = true
      })
    },
    paySuccessful () {
      if (this.codeForm.type === 1) {
        this.close()
        this.$emit('refreshData')
      } else {
        if (this.produceOrderInfo.study_type == '1') {
          location.reload()
        } else {
          this.gidForm.gids = 'tab-seventh'
          this.setGid(this.gidForm)
          this.$router.push('/profile')
          this.$bus.$emit('selectProfileIndex', 'tab-seventh')
        }
      }
    }
  },
  mounted () {
    this.$bus.$on('openPay', data => {
      if (data.type === 2) {
        this.codeForm.type = 2
      } else {
        this.codeForm.type = 1
      }
      if (this.flag) {
        this.getCode()
        this.flag = false
      }
      this.payShadow = true
      this.showPay = true
    })
    // 支付结果
    this.$bus.$on('payResult', data => {
      if (data) {
        this.showPay = false
        this.paySuccess = true
        this.payError = false
      } else {
        this.showPay = false
        this.paySuccess = false
        this.payError = true
      }
    })
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/components/pay.scss";
</style>
