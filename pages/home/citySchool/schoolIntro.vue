<template>
  <div class="schoolIntro">
    <div class="schoolBanner">
      <h4>1911学堂城市分校校长招募计划</h4>
      <p>城市分校校长招募计划是1911学堂推动全球布局、实现多方共赢的重大战略举措，旨在打造精英团队、加大办学力度，惠及全世界所有致力于更好职业发展的职场人士。</p>
      <p>通过在各地1911学堂的学习，学员们能够夯实专业基础、提高决策能力、增强组织才能、打造战略思维、树立创新精神、提升人文素养、开拓人脉资源，并获得清华大学在线学习认证证书或1911学堂结业证书。</p>
      <p>与此同时，在1911学堂总部的支持下，各城市分校也将在办学中获得成长与收益。</p>
    </div>
    <div class="schoolInfo">
      <img class="schoolImg topImg" src="http://static-image.1911edu.com/schoolIntro2.png" alt="">
      <div class="color">
        <div class="img"></div>
        <!-- <img class="schoolImg" src="http://static-image.1911edu.com/schoolIntro3.png" alt=""> -->
      </div>
      <img class="schoolImg" src="http://static-image.1911edu.com/schoolIntro4.png" alt="">
      <p><span @click="handleLink('/home/citySchool/viewSchoolAddress')">查看分校校址</span></p>
      <img class="schoolImg" src="http://static-image.1911edu.com/schoolIntro5.png" alt="">
      <p class="bottom"><span @click="handleLink('/home/citySchool/schoolApplication')">立即申请</span></p>
    </div>
  </div>
</template>
<script>
import { matchSplits, setTitle, message } from '@/lib/util/helper'

export default {
  data() {
    return {}
  },
  methods: {
    handleLink(link) {
      this.$router.push(link)
    }
  },
  mounted() {
    setTitle('城市分校-1911学堂')
  }
}
</script>
<style scoped lang="scss">
@import '~assets/style/citySchool/schoolIntro.scss';
</style>