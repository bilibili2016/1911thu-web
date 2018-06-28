<template>
  <div class="payPublic">
    <div class="contain">
      <h3 class="clearfix">订单提交成功，请尽快付款！订单号：{{orderDetail.order_sn}}
        <span class="fr">应付金额
          <i>{{orderDetail.order_amount}}</i>元</span>
      </h3>
      <div class="container">
        <h4>线下汇款（到账周期为3个工作日)</h4>
        <div class="pay" v-show="!showPay">
          <h5>尊敬的客户你好，如需企业线下汇款，请点击“确认并获取汇款识别码”。</h5>
          <p>确认后，请在7天内付清款项，超过10天未对账系统自动会取消订单。到账周期为3个工作日。</p>
          <p class="showPay" @click="showPayPublic">确认并获取汇款识别码</p>
          <p class="tips">
            <i class="el-icon-warning"></i>汇款时将识别码填写至汇款单"用途"栏，超出1个工作日未对账，请提供订单号及汇款底单邮件至XXXXXX@1911thu.com</p>
        </div>
        <div class="pay" v-show="showPay">
          <h5>尊敬的客户你好，如需企业线下汇款，请点击“确认并获取汇款识别码”。</h5>
          <div class="changeTel clearfix">
            <p class="fl">您的汇款验证码 {{code}} 已发送手机{{payForm.phones}}
              <span @click="changeTel">发送至其它手机</span>
            </p>
            <p class="fl showTel" v-show="showTel">
              <input type="text" v-model="changeForm.tel" placeholder="请输入手机号码">
              <span @click="againGet">获取汇款识别码</span>
            </p>
          </div>
          <h6>
            <i class="el-icon-warning"></i>注意事项：汇款时需要注意以下信息，请牢记！</h6>
          <div class="warn">
            <p>1. 您的汇款识别码为:{{code}}，线下公司转账需将此汇款识别码填写至电汇凭证的【汇款用途】、【附言】、【摘要】栏内，汇款识别码组成：（XT+订单号）。 （提醒：因不同银行备注字段不同，最好是将所有的可填写备注的地方都填写上汇款识别码）。 </p>
            <p>2. 线下公司转账订单，一个识别码对应一个订单和相应的金额，请勿多转账或者少转账。</p>
            <p>3. 请在7天内付清款项，超过10天未对账系统自动会取消订单。到账周期为3个工作日。</p>
          </div>
          <h6>
            <i class="el-icon-warning"></i>注意事项：汇款时需要注意以下信息，请牢记！</h6>
          <div class="account">
            <p>户名：XXXXXX</p>
            <p>账户：XXXXXXXX</p>
            <p>开户行：XXXXXXXXX</p>
            <p>联行号：XXXXXXX（ 非必填项）</p>
            <p>汇付识别码：{{code}}</p>
            <p>订单号：{{orderDetail.order_sn}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { home, auth } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      showPay: false,
      showTel: false,
      code: '',
      changeForm: {
        tel: null
      },
      payForm: {
        phones: null,
        orderId: null
      },
      payListForm: {
        orderId: null
      },
      orderDetail: {}
    }
  },
  methods: {
    changeTel() {
      this.showTel = true
    },
    againGet() {
      if (
        this.changeForm.tel === '' ||
        !/^[1][3,5,6,7,8][0-9]{9}$/.test(this.changeForm.tel)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '手机号格式错误！'
        })
      } else {
        this.payForm.phones = this.changeForm.tel
        this.showPayPublic()
      }
    },
    showPayPublic() {
      this.showPay = false
      return new Promise((resolve, reject) => {
        home.getPayPublicCode(this.payForm).then(res => {
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
      })
    },
    // 获取订单id列表
    getPayList() {
      this.payListForm.orderId = persistStore.get('cpyid')
      return new Promise((resolve, reject) => {
        home.webPay(this.payListForm).then(response => {
          this.orderDetail = response.data.data.orderDetail
          this.payForm.orderId = response.data.data.orderDetail.id
          this.payForm.phones = persistStore.get('phone')
          resolve(true)
        })
      })
    }
  },
  mounted() {
    this.getPayList()
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/shop/payPublic';
</style>