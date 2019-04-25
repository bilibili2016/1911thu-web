<template>
  <div class="vipBuy">
    <div class="mask" v-show="vipPopShow">
      <div class="vipPop" v-show="!isShowAlert">
        <div class="pop-title">入学通知书</div>
        <i class="el-icon-close" @click="handlePopClick"></i>
        <div class="con">
          <p>亲爱的学员：您好！</p>
          <p class="tab">欢迎您加入1911学堂{{vipInfo.category_name}}！</p>
          <p class="tab">本学院学籍有效期为12个月，并将在申请成功后即刻生效。在学籍有效期内，您可自由学习本学院中所有在线课程。学完100学时课程后，可申请参加考试，通过后可获得认证证书。</p>
          <p class="tab">在学习期间，您可通过再次申请入学的方式延长学籍。在您申请成功后，系统会自动为您发放学籍兑换码。您可在个人中心兑换码管理页面中绑定兑换码以延长学籍。</p>
          <p class="tab">当您选择的入学人数大于1人时，系统也将为您生成兑换码，您或其他学员均可通过绑定兑换码加入学院参加学习。</p>
          <p class="tab">祝您学有所获！</p>
          <p class="last">1911学堂</p>
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
        <img src="https://static-image.1911edu.com/alert.png" alt="">
        <p>{{alertText}}</p>
        <el-button @click="closeAlertPop">知道了</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { matchSplits, setTitle, message } from "@/lib/util/helper";

export default {
  props: ["vipPopShow", "vipInfo"],
  data () {
    return {
      alertShow: false,
      isShowAlert: false,
      alertText: "商品数量不能大于999",
      lastNum: "",
      vipData: {
        vipId: "",
        number: 1
      }
    };
  },
  methods: {
    //关闭购买弹窗
    handlePopClick () {
      this.$emit("changeVipShow", false);
    },
    //关闭超限弹窗
    closeAlertPop () {
      this.isShowAlert = false;
    },
    //减
    delNumber () {
      if (this.vipData.number <= 1) {
        this.vipData.number = 1;
      } else {
        this.vipData.number--;
      }
    },
    //加
    addNumber () {
      this.vipData.number++;
      if (this.vipData.number >= 999) {
        this.isShowAlert = true;
        this.alertText = "商品数量不能大于999";
        this.vipData.number = 999;
      }
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus () {
      this.lastNum = this.vipData.number;
    },
    // 购买人数输入框失去焦点
    changeNumber () {
      let reg = /^[0-9]*$/;
      if (!reg.test(this.vipData.number)) {
        this.isShowAlert = true;
        this.alertText = "商品数量超限";
        this.vipData.number = this.lastNum;
        return false;
      }
      if (this.vipData.number <= 0) {
        this.isShowAlert = true;
        this.alertText = "商品数量必须大于0";
        this.vipData.number = this.lastNum;
        return false;
      }
      if (this.vipData.number > 999) {
        this.isShowAlert = true;
        this.alertText = "商品数量不能大于999";
        this.vipData.number = this.lastNum;
        return false;
      }
    },
    //下一步
    handleConfirm () {
      this.$router.push(
        "/shop/affirmorder?id=" +
        this.vipInfo.id +
        "&type=2&pn=" +
        this.vipData.number
      );
    },
    init () {
      this.vipData.id = matchSplits("id");
    }
  },
  mounted () {
    this.init();
  },
  watch: {
    $route (v, oldv) {
      this.init();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/components/vipBuy";
</style>