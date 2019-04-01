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
        <div class="text">
          <p>标准项目支持30-50人学习</p>
          <p>如果贵单位学习人数不在此区间内，请前往<i>自定制项目</i></p>
        </div>
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
  data() {
    return {
      alertShow: false,
      sub: true,
      add: false,
      lastNum: "",
      projectData: {
        kid: "",
        number: 30
      }
    };
  },
  methods: {
    //关闭购买弹窗
    handlePopClick() {
      this.$emit("closePay");
    },
    //减
    delNumber() {
      if (this.projectData.number <= 31) {
        this.projectData.number = 30;
        this.sub = true;
      } else {
        this.add = false;
        this.projectData.number--;
      }
    },
    //加
    addNumber() {
      if (this.projectData.number >= 49) {
        this.add = true;
        this.projectData.number = 50;
      } else {
        this.projectData.number++;
        this.sub = false;
      }
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus() {
      this.lastNum = this.projectData.number;
    },
    // 购买人数输入框失去焦点
    changeNumber() {
      let reg = /^[0-9]*$/;
      if (!reg.test(this.projectData.number)) {
        this.projectData.number = this.lastNum;
        return false;
      }
      if (this.projectData.number <= 30) {
        this.projectData.number = 30;
        this.sub = true;
        this.add = false;
      } else if (this.projectData.number >= 50) {
        this.projectData.number = 50;
        this.sub = false;
        this.add = true;
      } else {
        this.sub = false;
        this.add = false;
      }
    },
    //下一步
    handleConfirm() {
      this.$router.push({
        path: "/shop/affirmorder",
        query: {
          id: this.projectData.kid,
          type: 1,
          pn: this.projectData.number
        }
      });
    },
    init() {
      this.projectData.kid = matchSplits("kid");
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/style/project/pay";
</style>