<template>
  <div class="projectPay">
    <div class="mask">
      <div class="vipPop">
        <div class="pop-title">请选择参加项目的人数</div>
        <i class="el-icon-close" @click="handlePopClick"></i>
        <div class="num clearfix">
          <div class="numText">人数：</div>
          <div class="numOpr">
            <span :class="['numBtn',{'sub':sub}]" @click="delNumber" onselectstart="return false;">-</span>
            <span class="inputText">
              <input type="text" v-model="projectData.number" @focus="handleFocus" @blur="changeNumber">
            </span>
            <span :class="['numBtn',{'add':add}]" @click="addNumber" onselectstart="return false;">+</span>
          </div>
        </div>
        <div class="text" v-if="this.projectDetail.is_max_number == '1'">
          <p>标准项目支持30-{{this.projectDetail.max_number}}人学习，每增加一人，需额外支付
            <span v-if="type==1">{{parseFloat(projectDetail.online_price)}}</span>
            <span v-else-if="type==2">{{parseFloat(projectDetail.underline_price)}}</span>
            <span v-else-if="type==3">{{parseFloat(projectDetail.online_price)+parseFloat(projectDetail.underline_price)}}</span>
            元</p>
          <p>如果贵单位学习人数不在此区间内，请前往<i @click="goCustom">自定制项目</i></p>
        </div>
        <div class="text" v-else>
          <p>标准项目学习人数30人起，每增加一人，需额外支付
            <span v-if="type==1">{{parseFloat(projectDetail.online_price)}}</span>
            <span v-else-if="type==2">{{parseFloat(projectDetail.underline_price)}}</span>
            <span v-else-if="type==3">{{parseFloat(projectDetail.online_price)+parseFloat(projectDetail.underline_price)}}</span>
            元</p>
        </div>
        <p>总价：{{totalPrice}}元</p>
        <div class="btn">
          <!-- <span class="cancel" @click="handlePopClick">取消</span> -->
          <span class="confirm" @click="handleConfirm">下一步</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { matchSplits, setTitle, message } from "@/lib/util/helper";
export default {
  props: ["projectDetail"],
  data () {
    return {
      alertShow: false,
      sub: true,
      add: false,
      lastNum: "",
      projectData: {
        kid: "",
        number: 30
      },
      type: ""
    };
  },
  computed: {
    totalPrice () {
      let basePrice = parseFloat(this.projectDetail.present_price); //项目价钱
      this.type = this.projectDetail.price_method; //项目类型
      let num = this.projectData.number; //购买人数
      let onlinePrice = parseFloat(this.projectDetail.online_price); //学院价钱
      let underlinePrice = parseFloat(this.projectDetail.underline_price); //线下价钱
      let total; //总价钱

      if (this.type == 1) {
        //只增加线上学院钱数
        total = basePrice + (num - 30) * onlinePrice;
      } else if (this.type == 2) {
        //只增加线下钱数
        total = basePrice + (num - 30) * underlinePrice;
      } else if (this.type == 3) {
        //同时增加线上+线下
        total = basePrice + (num - 30) * (underlinePrice + onlinePrice);
      }
      return total;
    }
  },
  methods: {
    goCustom () {
      this.$router.push({
        path: "/project/customerProject",
        query: {
          sid: "",
          edit: "1"
        }
      });
    },
    //关闭购买弹窗
    handlePopClick () {
      this.$emit("closePay");
    },
    //减
    delNumber () {
      if (this.projectData.number <= 31) {
        this.projectData.number = 30;
        this.sub = true;
      } else {
        this.add = false;
        this.projectData.number--;
      }
    },
    //加
    addNumber () {
      // 限制最高人数50改为999
      if (this.projectDetail.is_max_number == '1') {
        this.maxNumber(this.projectDetail.max_number)
      } else {
        this.maxNumber(999)
      }
      //   最高人数不做限制
      //   this.projectData.number++;
    },
    maxNumber (number) {
      if (this.projectData.number >= number - 1) {
        this.add = true;
        this.projectData.number = number;
      } else {
        this.projectData.number++;
        this.sub = false;
      }
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus () {
      this.lastNum = this.projectData.number;
    },
    // 购买人数输入框失去焦点
    changeNumber () {
      let reg = /^[0-9]*$/;
      if (!reg.test(this.projectData.number)) {
        this.projectData.number = this.lastNum;
        return false;
      }
      if (this.projectDetail.is_max_number == '1') {
        this.inputNumber(30, this.projectDetail.max_number)
      } else {
        this.inputNumber(30, 999)
      }
    },
    inputNumber (min, max) {
      if (this.projectData.number <= min) {
        this.projectData.number = min;
        this.sub = true;
        this.add = false;
      } else if (this.projectData.number >= max) {
        this.projectData.number = max;
        this.sub = false;
        this.add = true;
      } else {
        this.sub = false;
        this.add = false;
      }
    },
    //下一步
    handleConfirm () {
      this.$router.push({
        path: "/shop/affirmorder",
        query: {
          id: this.projectData.kid,
          type: 1,
          pn: this.projectData.number
        }
      });
    },
    init () {
      this.projectData.kid = matchSplits("kid");
    }
  },
  mounted () {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/project/pay";
</style>