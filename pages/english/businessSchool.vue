<template>
  <!-- 商学院 -->
  <div class="businessSchool">
    <div class="commer-banner">
      <v-nav></v-nav>
      <img src="https://static-image.1911edu.com/business-banner.png" alt="">
      <div class="bannerCon">
        <h3>Welcome to</h3>
        <h3>1911 Academy</h3>
        <p class="topP">As a practitioner of China Education Modernization 2035,</p>
        <p>we are aiming to build a lifelong education system.</p>
      </div>
    </div>
    <div class="commer-con">
      <div class="commer-one">
        <div class="commerWidth">
          <div class=" one-top">
            <p class="pCss">Corporate management plays a vital role in the development of Chinese enterprises and the development of China's economy. For the middle and senior managers of enterprises, the importance of having the advanced professional business education is undoubted, because in today's era a qualified manager needs to understand not only business function, but also management techniques.</p>
            <p class="pCss next">1911 Academy has teamed up with dozens of experts, scholars and think tanks from Tsinghua
              University, Peking University, the National Development and Reform Commission, the State-owned Assets Supervision and Administration Commission, and other experts and professors with deep
              theoretical foundations in economics, finance, corporate management, as well as other various industry sectors. The industry leaders with rich practical experience have jointly developed a targeted and
              practical curriculum system for the 1911 Academy, School of Business, which helps the middle and senior managers of the company to achieve personalized and step-by-step growth, to cultivate an
              international vision, to be good at innovation, and to be able to become a learning enterprise
              manager who could adapt to changes in the environment.</p>
          </div>
          <div class="one-center">
            <span class="left">Target Audience</span>
            <span class="right">For middle and senior-level managers from all levels and all kinds of enterprises</span>
          </div>
          <h4 class="commer-title">
            <span>Business products</span>
          </h4>
          <div class="one-bottom">
            <div class="list">
              <div v-for="(item,index) in productList" :key="index">
                <img :src="item.src" alt="">
                <p>{{item.text}}</p>
              </div>
            </div>
            <div class="centerBar">
              <p>The business school of 1911 Academy could customize the personalized, targeted enterprise training program according to companies' specific demand.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="commer-three">
        <h4 class="commer-title">
          <span>Training Objectives</span>
        </h4>
        <p class="pCss">The training objective of the Business School 1911 Academy is to cultivate learning-oriented business managers with an international vision, innovative spirit, and the ability to adapt to changes in today’s business environment. The qualified manager should have a sound knowledge structure and the ability to solve the actual managerial problems, which can withstand the wind and waves in today’s competition, promote the supply-side structural reform, and realize the high speed development of the enterprises.</p>
      </div>
      <div class="commer-two">
        <h5>
          Learning achievements
        </h5>
        <div class="two-items clearfix">
          <div class="item" v-for="(item,index) in studyList" :key="index">
            <i>0{{index+1}}</i>
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <div class="teacher">
        <h4 class="commer-title">
          <span>Professor Pool</span>
        </h4>
        <p>The professors of the 1911 Academy come from, but not limited to the following universities:</p>
        <div class="collegeList">
          <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/pages/english/components/Nav";

export default {
  components: {
    "v-nav": Nav,
  },
  data () {
    return {
      productList: [
        {
          src: "https://static-image.1911edu.com/production-commer.png",
          text: "Online business school"
        },
        {
          src: "https://static-image.1911edu.com/production-icon1.png",
          text: "Blended projects"
        },
        {
          src: "https://static-image.1911edu.com/production-icon2.png",
          text: "MBA"
        }
      ],
      studyList: [
        "Strengthen the professional knowledge of enterprise management",
        "Establish a strategic thinking to control the overall situation",
        "Improve the decision-making ability",
        "Increase the innovative spirit for exploration",
        "Enhance the organizing and coordinating ability",
        "Improve the humanism accomplishment of corporate leaders"
      ],
      collegeList: [
        "https://static-image.1911edu.com/college_QH.png",
        "https://static-image.1911edu.com/college_BD.png",
        "https://static-image.1911edu.com/college_GYZC.png",
        "https://static-image.1911edu.com/college_RSYJY.png",
        "https://static-image.1911edu.com/college_ZKY.png",
        "https://static-image.1911edu.com/college_GJFGW.png"
      ]
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/style/english/businessSchool";
</style>