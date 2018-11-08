<template>
  <div class="vipBuy">
    <div class="mask" v-show="vipPopShow">
      <div class="vipPop" v-show="!isShowAlert">
        <div class="pop-title">温馨提示</div>
        <i class="el-icon-close" @click="handlePopClick"></i>
        <div class="con">
          <p>1、所有注册用户可申请入学，申请成功后即刻生效，有效期12个月；</p>
          <p>2、在学期间，学员可再次申请入学，申请成功后将生成兑换码，该兑换码可通过绑定使用；</p>
          <p>3、当选择多人入学时，将生成兑换码，本人和他人均可凭兑换码入学院学习。</p>
        </div>
        <div class="num clearfix">
          <div class="numText">请选择入学人数</div>
          <div class="numOpr">
            <span class="numBtn sub " @click="delNumber">-</span>
            <span class="inputText"><input type="text" v-model="vipData.number" @focus="handleFocus" @blur="changeNumber"></span>
            <span class="numBtn add" @click="addNumber">+</span>
          </div>

        </div>
        <!-- <div class="studyFee">学费：入学学费{{vipInfo.present_price}}元/人</div> -->
        <div class="btn">
          <span class="cancel" @click="handlePopClick">取消</span>
          <span class="confirm" @click="handleConfirm">下一步</span>
        </div>
      </div>

      <div class="alertPop" v-show="isShowAlert">
        <i class="el-icon-close" @click="closeAlertPop"></i>
        <img src="http://papn9j3ys.bkt.clouddn.com/alert.png" alt="">
        <p>{{alertText}}</p>
        <el-button @click="closeAlertPop">知道了</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['vipId', 'vipPopShow'],
  data() {
    return {
      alertShow: false,
      isShowAlert: false,
      alertText: '商品数量不能大于9999',
      lastNum: '',
      vipData: {
        vipId: '',
        number: 1
      }
    }
  },
  methods: {
    //关闭购买弹窗
    handlePopClick() {
      this.$emit('changeVipShow', false)
    },
    //关闭超限弹窗
    closeAlertPop() {
      this.isShowAlert = false
    },
    //减
    delNumber() {
      if (this.vipData.number <= 1) {
        this.vipData.number = 1
      } else {
        this.vipData.number--
      }
    },
    //加
    addNumber() {
      this.vipData.number++
      if (this.vipData.number >= 9999) {
        this.isShowAlert = true
        this.alertText = '商品数量不能大于9999'
        this.vipData.number = 9999
      }
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus() {
      this.lastNum = this.vipData.number
    },
    // 购买人数输入框失去焦点
    changeNumber() {
      let reg = /^[0-9]*$/
      if (!reg.test(this.vipData.number)) {
        this.isShowAlert = true
        this.alertText = '商品数量超限'
        this.vipData.number = this.lastNum
        return false
      }
      if (this.vipData.number <= 0) {
        this.isShowAlert = true
        this.alertText = '商品数量必须大于0'
        this.vipData.number = this.lastNum
        return false
      }
      if (this.vipData.number > 9999) {
        this.isShowAlert = true
        this.alertText = '商品数量不能大于9999'
        this.vipData.number = this.lastNum
        return false
      }
    },
    //下一步
    handleConfirm() {
      this.$router.push(
        '/shop/affirmorder?id=' +
          this.vipId +
          '&type=2&num=' +
          this.vipData.number
      )
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/components/vipBuy';
</style>