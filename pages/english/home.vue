<template>
  <div class="home">
    <v-nav></v-nav>
    <div class="banner">
      <img src="https://static-image.1911edu.com/english-home-banner.png" alt="">
      <div class="bannerCon">
        <h3>Welcome to 1911 Academy</h3>
        <h6>1911 Academy is a lifelong education platform jointly initiated by senior professors and alumni from Tsinghua University,</h6>
        <h6>Peking University and other famous universities in China.</h6>
      </div>
    </div>
    <div class="slogan">
      <div class="marks">
        <img class="marksLfet" src="https://static-image.1911edu.com/english-home-left.png">
        <img class="marksRight" src="https://static-image.1911edu.com/english-home-right.png">
        <div class="word">
          <h4>Our Goal</h4>
          <p>As a practitioner of China Education Modernization 2035,</p>
          <p>we are aiming to build a lifelong education system.</p>
        </div>
      </div>
      <div class="bottom clearfix">
        <img class="fl" src="https://static-image.1911edu.com/english-home-icon1.png" alt="">
        <div class="word fr">
          <h4>Our Aim</h4>
          <p>With the mission of developing a learning society, we are committed to building a global education community that provides an "online and offline" blended-educational services for people of different stages, so that they can enjoy the best education in the world.</p>
        </div>
      </div>
    </div>
    <div class="icons">
      <h4>1911 Academy's three product forms</h4>
      <div class="list">
        <div>
          <img src="https://static-image.1911edu.com/english-home-icon2.png" alt="">
          <p>Online schools</p>
        </div>
        <div>
          <img src="https://static-image.1911edu.com/english-home-icon3.png" alt="">
          <p>Blended customized programs</p>
        </div>
        <div>
          <img src="https://static-image.1911edu.com/english-home-icon4.png" alt="">
          <p>Degree programs</p>
        </div>
      </div>
    </div>
    <div class="tips">
      <p>We have established 8 schools such as Business School, Cadre School and so on. We have also established academic committee in each school. We invited about 200 professors form Tsinghua University, School of Economics and Management, Peking University and Schwartzman College. Tsinghua University is our Business School's academic committee. We provide high-quality, diverse educational programs for enterprise executives, managers, government cadres, and school students.</p>
    </div>

  </div>
</template>

<script>
import Nav from "@/pages/english/components/Nav.vue";
export default {
  components: {
    "v-nav": Nav,
  },
  data () {
    return {

    }
  },

}
</script>
<style scoped lang="scss">
@import "~assets/style/english/home";
</style>