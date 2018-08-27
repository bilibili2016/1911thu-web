<template>
    <!-- 开票历史发票状态弹窗 -->
    <div class="statusPopup">
        <div class="content">
            <div class="title clearfix">
                <span class="fl">发票详情</span>
                <span class="fr" @click="closeStatusPopup">
                    <i class="el-icon-close"></i>
                </span>
            </div>
            <div class="bottomCon">
                <div class="item-one">
                    <div class="top">接收信息</div>
                    <div class="bottom">
                        <span>收件人：{{data.consignee}}</span>
                        <span>电话：{{data.phone}}</span>
                        <span>地址：{{data.address}}</span>
                    </div>
                </div>
                <div class="item-two">
                    <div class="top">发票信息</div>
                    <div class="bottom">
                        <div v-if="data.type=='1' || data.type=='2'">发票类型：普通发票</div>
                        <div v-else>发票类型：增值税专用发票</div>
                        <div v-if="data.type=='2' || data.type=='3'">发票抬头：{{data.company_name}}</div>
                        <div v-else>发票抬头：个人</div>
                        <div>发票内容：{{data.content}}</div>
                        <div v-if="data.type=='2' || data.type=='3'">纳税人识别号：{{data.invoice_number}}</div>
                        <div v-if="data.type=='3'">注册地址：{{data.company_address}}</div>
                        <div v-if="data.type=='3'">联系电话：{{data.company_phone}}</div>
                        <div v-if="data.type=='3'">开户银行：{{data.bank_name}}</div>
                        <div v-if="data.type=='3'">银行账号：{{data.bank_card}}</div>
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
    closeStatusPopup() {
      this.$emit('closeStatusPopup')
    }
  }
}
</script>

<style scoped>
</style>