<template>
     <div class="bg-none">
       <el-row class="home-evaluate center">
         <v-title :data = "titleFour"></v-title>
           <div class="evaluate-carousel">
             <el-carousel height="400px" arrow="never">
                <el-carousel-item v-for="(item,index) in evaluateData" :key="index" >
                  <div class="evaluate-center">
                    <div class="three">
                      <img :src="carouselSrc" alt="">
                    </div>
                    <div class="evaluate-box">
                      <span>
                        <img src="" alt="">
                      </span>
                      <p class="one">{{item.evaluate_content}}</p>
                      <p class="two">--  {{item.nick_name}}（{{item.position}}）</p>
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
  props: ["titleFour", "carouselSrc", "evaluateData"],
  components: {
    "v-title": CustomTitle
  }
};
</script>
