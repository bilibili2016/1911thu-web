<template>
     <div class="bg-none">
       <el-row class="home-evaluate center">
         <v-title :data = "titleFour"></v-title>
           <div class="evaluate-carousel">
             <el-carousel height="400px" arrow="never">
                <el-carousel-item v-for="item in 4" :key="item" >
                  <div class="evaluate-center">
                    <div class="three">
                      <img :src="carouselSrc" alt="">
                    </div>
                    <div class="evaluate-box">
                      <span>
                        <img src="" alt="">
                      </span>
                      <p class="one">互联网是一个快速迭代的行业，技术知识和产品创新瞬息万变，产品经理更要紧跟时代潮流。在开课吧学习后，我拥有了领先多数同龄人的技能，也改变了自己的生活和对待生活的态度。</p>
                      <p class="two">--  王笑笑（北京中航科技有限公司 CEO）</p>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
           </div>

       </el-row>
    </div>
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";
export default {
  props: ["titleFour", "carouselSrc"],
  components: {
    "v-title": CustomTitle
  }
};
</script>

<style scoped lang="scss">
// 用户评价
.home-evaluate {
  height: 740px;
  .evaluate-carousel {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-image: url("~/assets/images/home_bgc01.png");
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-image: url("~/assets/images/home_bgc01.png");
    }
    .evaluate-center {
      width: 750px;
      margin: 0 auto;
      .three {
        display: inline-block;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50px;
          margin-top: 120px;
        }
      }
      .evaluate-box {
        display: inline-block;
        float: right;
        width: 574px;
        margin-top: 100px;
        .one {
          width: 574px;
          height: 77px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
        }
        .two {
          width: 574px;
          height: 21px;
          font-size: 20px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
