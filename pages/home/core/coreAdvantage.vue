<template>
  <div class="coreAdvantage clearfix">

    <div class="left">
      <div class="top coreTop">
        <h1>核心优势</h1>
        <p>内容+认证+服务+技术</p>
      </div>
      <el-carousel class="coreLeft" :interval="4000" indicator-position="outside" @change="setActiveItem" arrow="never">
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
    </div>
    <div class="right">
      <div class="rightCon">
        <el-carousel class="coreRight " :autoplay='autoplayFlag' :interval="4000" ref="coreRightCarousel" indicator-position="none" arrow="never">
          <el-carousel-item class="" v-for="(item,index) in rightCar" :key="index">
            <img class="rightImg coreCarousel" :src="item.imgUrl">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: "",
      autoplayFlag: true,
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
            "1.完成学习； 2.参加考试；",
            "3.考核通过； 4.权威认证；",
            "5.双证证书； 6.单位认可；",
            "7.含金量高。"
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
  methods: {
    setActiveItem(index) {
      this.$refs.coreRightCarousel.setActiveItem(index);
      this.autoplayFlag = false;
    },
    setCarousel() {
      if (document.getElementsByClassName("coreCarousel")) {
        let carouselImg = document.getElementsByClassName("coreCarousel");
        if (this.windowWidth <= 950) {
          let marginLeft = (950 - this.windowWidth) / 2;
          for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].style.marginLeft = -marginLeft + "px";
          }
        }
      }
    },
    setWidth() {
      this.windowWidth = document.documentElement.clientWidth / 2;
      let rightHeight = this.windowWidth * 0.66;
      let topHeight = this.windowWidth * 0.21;
      let leftHeight = this.windowWidth * 0.45;
      document.getElementsByClassName("coreRight")[0].style.height =
        rightHeight > 625 ? 625 : rightHeight + "px";
      document.getElementsByClassName("coreTop")[0].style.height =
        topHeight > 200 ? 200 : topHeight + "px";
      document.getElementsByClassName("coreLeft")[0].style.height =
        leftHeight > 425 ? 425 : leftHeight + "px";
    }
  },
  mounted() {
    this.windowWidth = document.documentElement.clientWidth / 2;
    // this.setCarousel();
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/home/coreAdvantage";
</style>
