<template>
  <div class="con-detail">
    <div class="con-five">
      <h4 class="college-title">
        <span v-if=" vipInfo.en_title!='chineseCollege'">学院学费</span>
        <span v-else></span>
      </h4>
      <p class=" text">学员优惠 惊喜不断</p>
      <p class="desc">
        学员只需
        <span class="p-one">{{parseFloat(vipInfo.present_price)}}元</span>
        即可加入1911学堂{{vipInfo.category_name}}，学习价值{{vipInfo.original_price}}元的学院全部课程，
        <span class="p-one">学籍有效期{{vipInfo.valid_days==365?'一年':vipInfo.valid_days+'天'}}。</span>
      </p>
      <p class="price">
        <span>
          <i class="p-two">{{vipInfo.total_curriculum_num}}</i>门课程
        </span>
        <span>
          共计
          <i class="p-two">{{vipInfo.total_study_time}}</i>学时
        </span>
        <span>
          学费为
          <i class="p-two">{{parseFloat(vipInfo.present_price)}}</i>元/年
        </span>
      </p>
    </div>
    <div class="btns clearfix" ref="btns" :class="{fixedBottom:!bottom,bottomHeight:bottom}">
      <div class="btn-con">
        <span class="text">学费{{parseFloat(vipInfo.present_price)}}元/年</span>
        <div class="btn-item">
          <span class="button joinStudy" @click="buyVip">申请入学</span>
          <span class="button" @click="identificate">申请证书</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { matchSplits } from "@/lib/util/helper";

export default {
  props: ["vipInfo"],
  data() {
    return {
      vid: "",
      cid: "",
      windowHeight: "",
      paperHeight: "",
      scrollTop: "",
      bottom: true
    };
  },
  methods: {
    buyVip() {
      this.$emit("buyVip");
    },
    identificate() {
      this.$emit("identificate");
    },
    // 底部操作栏动态
    addClass() {
      this.windowHeight = document.body.scrollHeight;
      this.paperHeight = document.documentElement.clientHeight;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (this.windowHeight - this.scrollTop - this.paperHeight <= 103) {
        this.bottom = true;
      } else {
        this.bottom = false;
      }
    }
  },
  mounted() {
    this.vid = matchSplits("id");
    this.cid = matchSplits("cid");

    // 寛高设置
    window.addEventListener("scroll", this.addClass);
  }
};
</script>

<style lang="scss">
@import "~assets/style/college/info";
</style>