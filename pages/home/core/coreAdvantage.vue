<template>
  <div class="coreAdvantage clearfix">
    <div class="top">
      <h1>核心优势</h1>
      <p>内容+认证+服务+技术</p>
    </div>
    <div class="left">
      <el-carousel :interval="4000" indicator-position="outside" @change="setActiveItem" arrow="never">
        <el-carousel-item class="clearfix" v-for="(item,index) in leftCar" :key="index">
          <div class="newsLi">
            <div class="info">
              <h4>{{item.title}}</h4>
              <div class="line"></div>
              <div class="text">
                <p v-for="(text,index) in item.textList" :key="index">{{text}}</p>
              </div>
              <div class="index">0{{index+1}}</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- <v-carousel :config="configLeft" :coreData="leftCar"></v-carousel> -->
    </div>
    <div class="right">
      <!-- <v-carousel :config="configRight" :coreData="rightCar"></v-carousel> -->
      <el-carousel class="coreRight" :autoplay='autoplayFlag' :interval="4000" ref="coreRightCarousel" indicator-position="none" arrow="never">
        <el-carousel-item v-for="(item,index) in rightCar" :key="index">
          <img class="rightImg" :src="item.imgUrl">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/common/Carousel.vue";
export default {
  data() {
    return {
      autoplayFlag: true,
      configLeft: {
        carousel: "coreLeft",
        flag: "left"
      },
      configRight: {
        carousel: "coreRight",
        flag: "right"
      },
      leftCar: [
        {
          title: "名师智库，内容为王",
          textList: [
            "已签约200名，未来1000余名；",
            "四个来源：知名高校教授，500强高管，行业精英，政策智囊；",
            "三条遴选标准：内容权威，通俗易懂，结合实践。"
          ],
          imgUrl: "http://static-image.1911edu.com/home-news1.png"
        },
        {
          title: "权威机构，双证证书",
          textList: [
            "完成学习；参加考试；",
            "考核通过；权威认证；",
            "双证证书；单位认可；",
            "含金量高。"
          ],
          imgUrl: "http://static-image.1911edu.com/home-news2.png"
        },
        {
          title: "教学服务与体验",
          textList: [
            "阶梯式人才成长规划路径；",
            "完善的教学服务系统；",
            "专业的教务团队；",
            "高质量的后勤保障。"
          ],
          imgUrl: "http://static-image.1911edu.com/home-news3.png"
        },
        {
          title: "技术支持",
          textList: [
            "大数据学习需求诊断；",
            "多元智能人才测评体系；",
            "学习管理系统（LMS）；",
            "人工智能考试系统。"
          ],
          imgUrl: "http://static-image.1911edu.com/home-news4.png"
        }
      ],
      rightCar: [
        {
          id: 1,
          imgUrl: "http://static-image.1911edu.com/home-news1.png"
        },
        {
          id: 2,
          imgUrl: "http://static-image.1911edu.com/home-news2.png"
        },
        {
          id: 3,
          imgUrl: "http://static-image.1911edu.com/home-news3.png"
        },
        {
          id: 4,
          imgUrl: "http://static-image.1911edu.com/home-news4.png"
        }
      ]
    };
  },
  components: {
    "v-carousel": Carousel
  },
  methods: {
    setActiveItem(index) {
      this.$refs.coreRightCarousel.setActiveItem(index);
      this.autoplayFlag = false;
    }
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/home/coreAdvantage";
</style>
