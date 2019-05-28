<template>
  <div class="customer-mask">
    <div class="customer-pop">
      <div class="pop-title">温馨提示</div>
      <div class="con">
        <p>1、点击确定后，系统会为您生成订单，提交订单后，您所定制项目的相关信息不可再修改。</p>
        <p>2、如需修改，请点击取消，在定制项目页面修改内容，或保存后在个人中心的“自定制项目”模块查看并修改。</p>
        <p>3、如有问题可联系1911学堂教务：18612451911，或扫描下方二维码添加学堂教务微信。</p>
        <img src="https://static-image.1911edu.com/educationalAdministration.jpg">
      </div>
      <div class="btn">
        <span class="cancel" @click="handleCancle">取消</span>
        <span class="confirm" @click="handleConfirm">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
import { message } from '@/lib/util/helper'

export default {
  methods: {
    handleCancle () {
      //   message(this, 'info', '已取消')
      this.$emit('handleCancle')
    },
    handleConfirm () {
      this.$emit('handleConfirm')
    }
  }
}
</script>


