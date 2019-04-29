<template>
  <div class="groupLeader">
    <div class="inner">
      <h2 class="title">专家组组长</h2>
      <div class="list">
        <div class="item" v-for="(item,index) in coreItem" :key="index">
          <img src="https://static-image.1911edu.com/cadreCollege_banner.png" alt="">
          <div class="intro">
            <h4>董关鹏<span>在线大健康学院</span></h4>
            <p class="position">中国传媒大学教授、博士生导师中国传媒大学教授、博士生导师</p>
            <p class="info">1911学堂与清华大学经济管理学院共同研发了“1911学堂人才测评体系”，其采用前沿、完善的技术方案，能够帮助党政机关及企事业单位人员定位能力短板、厘清学习需求，从而为其提供个性化教学方案。1911学堂与清华大学经济管理学院共同研发了“1911学堂人才测评体系”，其采用前沿、完善的技术方案，能够帮助党政机关及企事业单位人员定位能力短板、厘清学习需求，从而为其提供个性化教学方案。
              清学习需求，从而为其提供个性化教学方案1911学堂与清华大学经济管理学院共同研发了“1911学堂人才测评体系”，其采用前沿、完善的技术方案，能够帮助党政机关及企事业单位人员定位能力短板、厘清学习需求，从而为其提供个性化教学方案。1911学堂与清华大学经济管理学院共同研发了“1911学堂人才测评体系”，其采用前沿、完善的技术方案，能够帮助党政机关及企事业单位人员定位能力短板、厘清学习需求，从而为其提供个性化教学方案。
              清学习需求，从而为其提供个性化教学方案</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coreItem: [
        {
          img: '',
          title: ''
        },
        {
          img: '',
          title: ''
        },
        {
          img: '',
          title: ''
        },
        {
          img: '',
          title: ''
        },
        {
          img: '',
          title: ''
        },
        {
          img: '',
          title: ''
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/teacher/groupLeader";
</style>