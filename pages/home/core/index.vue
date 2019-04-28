<template>
  <div class="coreIndex clearfix">
    <h2 class="core-title">核心优势</h2>
    <!-- <p class="desc">内容+认证+服务+技术</p>  -->
    <div class="items">
      <div class="father" v-for="(item,index) in coreItem" :key="index">
        <div class="item">
          <img :src="item.img" alt="" :class="'itemImg'+index">
          <p class="text">{{item.text}}</p>
          <p class="intro">{{item.intro}}</p>
        </div>
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
      coreItem: [
        {
          id: 1,
          img: "https://static-image.1911edu.com/core-icon1.png",
          text: "混合式教学",
          intro:
            "1911学堂以提升学习效能为导向，结合线上学习人机交互的技术优势以及线下学习人文互动的情感优势，研发了“线上+线下”混合式教学模式，既能满足碎片化时间便捷学习的需求，又能提供交互式与社群化的学习体验。"
        },
        {
          id: 2,
          img: "https://static-image.1911edu.com/core-icon2.png",
          text: "名师智库",
          intro:
            "1911学堂名师智库目前已集结200余位学术造诣深厚、教学经验丰富、具有国际视野的专家学者，未来将建立由数千名全球知名专家教授、世界500强企业高管、业界翘楚、行业精英以及政策智囊共同组成的高端专家导师库。"
        },
        {
          id: 3,
          img: "https://static-image.1911edu.com/core-icon3.png",
          text: "人才测评",
          intro:
            "1911学堂与清华大学经济管理学院共同研发了“1911学堂人才测评体系”，其采用前沿、完善的技术方案，能够帮助党政机关及企事业单位人员定位能力短板、厘清学习需求，从而为其提供个性化教学方案。"
        },
        {
          id: 4,
          img: "https://static-image.1911edu.com/core-icon4.png",
          text: "技术实力",
          intro:
            "1911学堂拥有强大的技术与产品团队，凭借持续的研发投入，立足新时代科技前沿，以信息化为基础，以大数据为核心，以精准服务为追求，打造“互联网+人工智能+教育”的智慧教学模式，积极推动终身教育业态创新。"
        },
        {
          id: 5,
          img: "https://static-image.1911edu.com/core-icon5.png",
          text: "城市分校",
          intro:
            "城市分校计划是1911学堂推动全球布局、实现多方共赢的重大战略举措。到2021年底，1911学堂将在全国建成近1400所分校，在“一带一路”沿线及其他国家建立数百个线下实体教学基地，在为各地引入优质教育资源的同时，形成跨地域、跨行业的庞大合作网络体系，共同创造未来发展的新机遇。"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/core/coreAdvantage";
</style>
