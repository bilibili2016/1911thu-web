<template>
  <div class="thinkTank">
    <v-nav></v-nav>
    <div class="banner">
      <img src="https://static-image.1911edu.com/thinkTank-banner.png" alt="">
      <div class="bannerCon">
        <h3>Welcome to 1911 Academy</h3>
        <h6>1911 Academy is a lifelong education platform jointly initiated by senior professors and alumni from Tsinghua University,</h6>
        <h6>Peking University and other famous universities in China.</h6>
      </div>
    </div>
    <div class="content">
      <img class="ftImg" src="https://static-image.1911edu.com/thinkTank-icon4.png" alt="">
      <div class="word">
        1911 Academy's think tank has assembled hundreds of experts and scholars with profound academic knowledge, rich teaching experience and international vision, as well as college students with excellent academic performance and comprehensive development, which could provide lifelong education and consulting services for primary.
      </div>
      <div class="title">
        <div>1911 Academy's</div>
        <div>think tank</div>
        <p></p>
      </div>
      <div class="bottom">
        <div class="fr">
          <div>
            <img src="https://static-image.1911edu.com/thinkTank-icon1.png" alt="">
            <p>secondary school</p>
            <p>students</p>
          </div>
          <div>
            <img src="https://static-image.1911edu.com/thinkTank-icon2.png" alt="">
            <p>college students</p>
          </div>
          <div>
            <img src="https://static-image.1911edu.com/thinkTank-icon3.png" alt="">
            <p>professionals from</p>
            <p>different industries</p>
          </div>
        </div>
      </div>
    </div>
    <div class="plan">
      In the future, 1911 Academy will collaborate with thousands of world-renowned experts, senior executives from world top 500 companies, industry leaders, elites,
      government think tanks and outstanding university students to build a pool of high-level think tank which will bring an authoritative, cutting-edge and high-level learning
      experience to all organizations and students.
    </div>
    <div class="bottomCon">
      <img src="https://static-image.1911edu.com/thinkTank-icon5.png">
      <p>All organizations and trainees can select instructors from vast number of think
        tanks in 1911 academy according to their actual needs, invite instructors to teach in real places or reserve instructors for one on one consultation on academic confusion or career development issues.</p>
    </div>

  </div>
</template>
<script>
import Nav from "@/pages/english/components/Nav.vue";
export default {
  components: {
    "v-nav": Nav,
  },
}
</script>
<style scoped lang="scss">
@import "~assets/style/english/thinkTank";
</style>