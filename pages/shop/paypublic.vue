<template>
  <div class="payPublic">
    <div class="contain">
      <h3 class="clearfix orderInfo">订单提交成功，请尽快付款！</h3>
      <div class="container">
        <!-- <h4>线下汇款（到账周期为3个工作日)</h4> -->
        <!-- <h4>1911学堂收款信息</h4> -->
        <h4 class="clearfix orderId">
          <span class="left">订单号：
            <span class="num">{{orderDetail.order_sn}}</span>
          </span>
          <span class="right">应付金额：¥{{orderDetail.order_amount}}</span>
        </h4>
        <!-- <div class="pay" v-show="!showPay">
          <h5>尊敬的客户你好，如需企业线下汇款，请点击“确认并获取汇款识别码”。</h5>
          <p>确认后，请在7天内付清款项，超过10天未对账系统自动会取消订单。到账周期为3个工作日。</p>
          <p class="showPay" @click="showPayPublic">确认并获取汇款识别码</p>
          <p class="tips">
            <i class="el-icon-warning"></i>汇款时将识别码填写至汇款单"用途"栏，超出1个工作日未对账，请提供订单号及汇款底单邮件至hkd@1911thu.com</p>
        </div> -->
        <div class="pay" v-show="showPay">
          <!-- <div v-show="false">
            <h5>尊敬的客户你好，如需企业线下汇款，请点击“确认并获取汇款识别码”。</h5>
            <div class="changeTel clearfix">
              <p class="fl">您的汇款验证码 {{code}} 已发送手机{{payForm.phones}}
                <span @click="changeTel">发送至其它手机</span>
              </p>
              <p class="fl showTel" v-show="showTel">
                <input type="text" v-model="changeForm.tel" placeholder="请输入手机号码">
                <i v-show="isAlertMsg">{{alertMsg}}</i>
                <span @click="againGet">获取汇款识别码</span>
              </p>
            </div>
            <h6>
              <i class="el-icon-warning"></i>&nbsp;&nbsp;注意事项：汇款时需要注意以下信息，请牢记！</h6>
            <div class="warn">
              <p>1. 您的汇款识别码为:{{code}}，线下公司转账需将此汇款识别码填写至电汇凭证的【汇款用途】、【附言】、【摘要】栏内，汇款识别码组成：（XT+订单号）。 （提醒：因不同银行备注字段不同，最好是将所有的可填写备注的地方都填写上汇款识别码）。 </p>
              <p>2. 线下公司转账订单，一个识别码对应一个订单和相应的金额，请勿多转账或者少转账。</p>
              <p>3. 请在7天内付清款项，超过10天未对账系统自动会取消订单。到账周期为3个工作日。</p>
            </div>
          </div> -->
          <div v-show="true">
            <p class="con-title">1911学堂收款信息</p>
            <div class="account">
              <p>户&nbsp;&nbsp;&nbsp;名：一九一一未来教育科技（北京）有限公司</p>
              <p>开户行：中信银行北京海淀支行</p>
              <p>账&nbsp;&nbsp;&nbsp;号：8110701013101386732</p>
              <p>联行号：302100011155（非必填项）</p>
              <!-- <p>汇付识别码：{{code}}</p> -->
              <!-- <p>订单号：{{orderDetail.order_sn}}</p> -->
            </div>
            <h6 style="margin-top:0">
              <i class="el-icon-warning"></i>&nbsp;&nbsp;注意事项：请在汇款用途、附言或摘要栏内填上对应的订单号。</h6>
            <div style="margin-top:10px">收到汇款后我们将与您取得联系，详细沟通项目方案、确定具体安排，并为您开具发票!</div>
          </div>
          <!-- <div class="confirmBtn" @click="handleConfirm">确定</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { paypublic, wepay } from '@/lib/v1_sdk/index'
import { matchSplits, message } from '@/lib/util/helper'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      showPay: true,
      showTel: false,
      code: '',
      isAlertMsg: false,
      alertMsg: '请输入手机号',
      changeForm: {
        tel: null
      },
      payForm: {
        phones: null,
        orderId: null
        // attachs: null
      },
      payListForm: {
        orderId: null
        // attachs: null
      },
      orderDetail: {}
    }
  },
  methods: {
    changeTel() {
      this.showTel = true
      this.changeForm.tel = ''
    },
    againGet() {
      if (this.changeForm.tel == '') {
        this.isAlertMsg = true
        this.alertMsg = '请输入手机号'
        return false
      }
      if (
        this.changeForm.tel === '' ||
        !/^[1][3,5,6,7,8][0-9]{9}$/.test(this.changeForm.tel)
      ) {
        this.isAlertMsg = true
        this.alertMsg = '手机号格式错误！'
      } else {
        this.isAlertMsg = false
        this.payForm.phones = this.changeForm.tel
        this.showPayPublic()
      }
    },
    showPayPublic() {
      this.showPay = false
      // this.payForm.attachs = matchSplits('attach')
      paypublic.getPayPublicCode(this.payForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.code = res.data.code
          this.showPay = true
          if (this.showTel) {
            this.showTel = false
          }
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 获取订单id列表
    getPayList() {
      this.payListForm.orderId = matchSplits('orderID')
      // this.payListForm.attachs = matchSplits('attach')
      wepay.webPay(this.payListForm).then(response => {
        if (response.status === 0) {
          this.orderDetail = response.data.data.orderDetail
          this.payForm.orderId = response.data.data.orderDetail.id
          this.payForm.phones = persistStore.get('phone')
          this.handleConfirm()
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    handleConfirm() {
      paypublic.getPayPublicCode(this.payForm).then(res => {
        if (res.status === 0) {
          this.code = res.data.code
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  },
  mounted() {
    if (persistStore.get('token')) {
      this.getPayList()
    } else {
      message(this, 'error', '您未登录,请先登录!')
      this.$router.push('/')
      this.$bus.$emit('loginShow', true)
    }
  }
}
</script>
