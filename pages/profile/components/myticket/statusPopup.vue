<template>
  <!-- 开票历史发票状态弹窗 -->
  <div class="statusPopup">
    <div class="content">
      <div class="title clearfix">
        <span class="fl">{{data.send_type==1?'电子':'纸质'}}发票</span>
        <span class="fr" @click="closeStatusPopup">
          <i class="el-icon-close"></i>
        </span>
      </div>
      <div class="bottomCon">
        <div class="item-one">
          <div class="top">接收信息</div>
          <div class="bottom" v-if="data.send_type==1">
            <span>电话：{{data.phone}}</span>
            <p>邮箱：{{data.email}}</p>
          </div>
          <div class="bottom" v-else>
            <span>收件人：{{data.consignee}}</span>
            <span>电话：{{data.phone}}</span>
            <p>地址：{{data.province_name+data.city_name+data.area_name+data.address}}</p>
          </div>
        </div>
        <div class="item-two">
          <div class="top">发票信息</div>
          <div class="bottom">
            <div>发票类型：{{data.type==1?'普通':'增值税专用'}}发票</div>
            <div v-if="data.type==1">发票抬头：{{data.invoice_name}}</div>
            <div>发票内容：{{data.content}}</div>
            <div v-if="data.invoice_type==1">纳税人识别号：{{data.invoice_number}}</div>
            <div v-if="data.type==2">单位名称：{{data.company_name}}</div>
            <div v-if="data.type==2">注册地址：{{data.company_address}}</div>
            <div v-if="data.type==2">联系电话：{{data.company_phone}}</div>
            <div v-if="data.type==2">开户银行：{{data.bank_name}}</div>
            <div v-if="data.type==2">银行账号：{{data.bank_card}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    closeStatusPopup () {
      this.$emit("closeStatusPopup");
    }
  }
};
</script>

<style scoped>
</style>