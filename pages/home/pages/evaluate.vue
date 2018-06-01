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
