<template>
  <div class="ticketConfirm" v-show="confirmInvoice">
    <div class="ticketPop">
      <h3 class="clearfix">开具纸质发票
        <i class="el-icon-close fr" @click="close"></i>
      </h3>
      <div class="ticketBox" v-if="ticketForm.types ===1||ticketForm.types ===2">
        <p>发票类型：普通发票</p>
        <p v-if="ticketForm.types ===1">发票抬头：个人</p>
        <p v-else>发票抬头：{{ticketForm.companyname}}</p>

        <p v-if="ticketForm.types ===2">纳税人识别号：{{ticketForm.number}}</p>
        <p>发票内容：{{ticketForm.others}}</p>
        <p>收件人：{{ticketForm.name}}</p>
        <p>联系电话：{{ticketForm.tel}}</p>
        <p>所在地区：{{ticketForm.province_name}}{{ticketForm.city_name}}{{ticketForm.area_name}}</p>
        <p>详细地址：{{ticketForm.address}}</p>
        <p>发票金额：{{price}}元</p>
      </div>
      <div class="ticketBox" v-else>
        <p>发票类型：增值税专用发票</p>
        <p>发票抬头：{{ticketForm.companyname}}</p>
        <p>税号：{{ticketForm.number}}</p>
        <p>注册地址：{{ticketForm.zcadd}}</p>
        <p>联系电话：{{ticketForm.phones}}</p>
        <p>开户银行：{{ticketForm.bank}}</p>
        <p>银行账号：{{ticketForm.account}}</p>
        <p>发票内容：{{ticketForm.others}}</p>
        <p>收件人：{{ticketForm.name}}</p>
        <p>联系电话：{{ticketForm.tel}}</p>
        <p>所在地区：{{ticketForm.province_name}}{{ticketForm.city_name}}{{ticketForm.area_name}}</p>
        <p>详细地址：{{ticketForm.address}}</p>
        <p>发票金额：{{price}}元</p>
      </div>
      <p class="tips" v-if="money">{{tip}}</p>
      <p class="tips" v-else>{{tips}}</p>
      <div class="confirm">
        <span @click="back" class="back">返回</span>
        <span @click="confirm" class="confirm">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ticketorder } from '~/lib/v1_sdk/index'
export default {
  props: ['price'],
  data() {
    return {
      tip: '开票金额不足200元，需额外支付邮费，目前只支持货到付款',
      tips: '开票金额满200包邮',
      confirmInvoice: false,
      ticketForm: {},
      money: false
    }
  },
  methods: {
    confirm() {
      ticketorder.addInvoiceInfo(this.ticketForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.$emit('chengeItem')
          this.$emit('getUnTicketData')
          this.confirmInvoice = false 
          document.getElementsByClassName('el-tabs__content')[7].style.position = 'relative'
          this.$bus.$emit('historyOrderDataChange', 1)
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 关闭当前的提交框 打开信息输入框
    back() {
      this.close()
      this.$emit('goBack')
    },
    // 关闭当前提交框
    close() {
      this.confirmInvoice = false
      document.getElementsByClassName('el-tabs__content')[7].style.position = 'relative'
    }
  },
  mounted() {
    this.$bus.$on('showConfirm', data => {
      this.ticketForm = data
      this.confirmInvoice = true
      document.getElementsByClassName('el-tabs__content')[7].style.position = '-ms-page'
    })
    this.price = Number(this.price)
    if (this.price < 200) {
      this.money = true
    } else {
      this.money = false
    }
  }
}
</script>

<style scoped>
</style>
