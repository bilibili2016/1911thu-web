<template>
  <div class="bg">
    <el-row class="home-evaluate center">
      <v-title :data="titleFour"></v-title>
      <div class="evaluate-carousel">
        <el-carousel height="400px" arrow="never">
          <el-carousel-item v-for="(item,index) in evaluateData" :key="index">
            <div class="evaluate-center">
              <div class="three">
                <img :src="item.head_img" alt="">
              </div>
              <div class="evaluate-box">
                <p class="one">{{item.evaluate_content}}</p>
                <p class="two">-- {{item.nick_name}}（{{item.position}}）</p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
export default {
  props: ['titleFour', 'evaluateData'],
  components: {
    'v-title': CustomTitle
  }
}
</script>
