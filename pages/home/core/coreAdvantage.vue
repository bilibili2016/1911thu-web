<template>
  <div class="coreAdvantage clearfix">
    <div class="left">
      <div class="top coreTop">
        <h1>核心优势</h1>
        <p>名师智库+内容体系及运营模式+人才测评+混合式教学+考试认证</p>
      </div>
      <el-carousel class="coreLeft" :interval="4000" indicator-position="outside" @change="setActiveItem" arrow="never">
        <el-carousel-item class="clearfix" v-for="(item,index) in leftCar" :key="index">
          <div class="leftItems" @click="handleLink(item.detailLink)">
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
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <div class="rightCon">
        <el-carousel class="coreRight " :autoplay='autoplayFlag' :interval="4000" ref="coreRightCarousel" indicator-position="none" arrow="never">
          <el-carousel-item class="" v-for="(item,index) in rightCar" :key="index">
            <img class="rightImg coreCarousel" :src="item.imgUrl" @click="handleLink(item.detailLink)">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowWidth: "",
      autoplayFlag: true,
      leftCar: [
        {
          title: "名师智库",
          textList: [
            "集结200余位学术造诣深厚、教学经验丰富、具有国际视野的专家学者",
            "知名高校教授、500强企业高管、行业精英、政策智囊组成高端导师库"
          ],
          imgUrl: "https://static-image.1911edu.com/home-news1.png",
          // detailLink: "/home/core/pages/teachers",
          detailLink: ""
        },
        {
          title: "内容体系及运营模式",
          textList: [
            "内容权威前沿，授课通俗易懂，理论结合实践",
            "在线学院+单位内训+国际学位",
            "“知识即服务”（KaaS）终身教育运营模式"
          ],
          imgUrl: "https://static-image.1911edu.com/home-news5.png",
          // detailLink: "/home/core/pages/contentSys",
          detailLink: ""
        },
        {
          title: "人才测评",
          textList: [
            "清华大学测评领域专家研发",
            "“互联网+教育”人才测评体系新模式",
            "了解学习需求，定位能力短板，制定个性化解决方案"
          ],
          imgUrl: "https://static-image.1911edu.com/home-news4.png",
          detailLink: "/home/core/pages/personEval"
        },
        {
          title: "混合式教学",
          textList: [
            "在线学院+线下面授",
            "交互式与社群化学习体验",
            "PBL+案例教学法"
          ],
          imgUrl: "https://static-image.1911edu.com/home-news3.png",
          // detailLink: "/home/core/pages/hybridTeach",
          detailLink: ""
        },
        {
          title: "考试认证",
          textList: ["在线人工智能考试系统", "1911学堂结业证书"],
          imgUrl: "https://static-image.1911edu.com/home-news2.png",
          detailLink: "/home/core/pages/examAuth"
        }
      ],
      rightCar: [
        {
          id: 1,
          title: "名师智库",
          // detailLink: "/home/core/pages/teachers",
          detailLink: "",
          imgUrl: "https://static-image.1911edu.com/home-news1.png"
        },
        {
          id: 2,
          title: "内容体系及运营模式",
          // detailLink: "/home/core/pages/contentSys",
          detailLink: "",
          imgUrl: "https://static-image.1911edu.com/home-news5.png"
        },
        {
          id: 3,
          title: "人才测评",
          detailLink: "/home/core/pages/personEval",
          imgUrl: "https://static-image.1911edu.com/home-news4.png"
        },
        {
          id: 4,
          title: "混合式教学",
          // detailLink: "/home/core/pages/hybridTeach",
          detailLink: "",
          imgUrl: "https://static-image.1911edu.com/home-news3.png"
        },
        {
          id: 5,
          title: "考试认证",
          detailLink: "/home/core/pages/examAuth",
          imgUrl: "https://static-image.1911edu.com/home-news2.png"
        }
      ]
    };
  },
  methods: {
    handleLink (link) {
      this.$router.push(link);
    },
    setActiveItem (index) {
      this.$refs.coreRightCarousel.setActiveItem(index);
      this.autoplayFlag = false;
    },
    setCarousel () {
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
    setWidth () {
      this.windowWidth = document.documentElement.clientWidth / 2;
      let rightHeight = this.windowWidth * 0.66;
      let topHeight = this.windowWidth * 0.21;
      let leftHeight = this.windowWidth * 0.45;

      document.getElementsByClassName("coreRight")[0].style.height =
        (rightHeight > 625 ? 625 : rightHeight) + "px";
      document.getElementsByClassName("coreTop")[0].style.height =
        (topHeight > 200 ? 200 : topHeight) + "px";
      document.getElementsByClassName("coreLeft")[0].style.height =
        (leftHeight > 425 ? 425 : leftHeight) + "px";
    }
  },
  mounted () {
    this.windowWidth = document.documentElement.clientWidth / 2;
    // this.setCarousel();
    this.setWidth();
    window.addEventListener("resize", () => {
      this.windowWidth = document.documentElement.clientWidth / 2;
      let rightHeight = this.windowWidth * 0.66;
      let topHeight = this.windowWidth * 0.21;
      let leftHeight = this.windowWidth * 0.45;

      if (document.getElementsByClassName("coreRight").length != 0) {
        document.getElementsByClassName("coreRight")[0].style.height =
          (rightHeight > 625 ? 625 : rightHeight) + "px";
        document.getElementsByClassName("coreTop")[0].style.height =
          (topHeight > 200 ? 200 : topHeight) + "px";
        document.getElementsByClassName("coreLeft")[0].style.height =
          (leftHeight > 425 ? 425 : leftHeight) + "px";
      }
    });
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/core/coreAdvantage";
</style>
