<template>
  <div class="news-list">
    <div class="news-banner">
      <img :src="newsImg" alt="">
    </div>
    <div class="content">
      <v-card :newsList="newsList" :config="config"></v-card>
    </div>
    <div>
      <v-page :data="pagemsg"></v-page>
    </div>
  </div>
</template>

<script>
import CustomCard from "@/components/common/Card.vue";
import CustomPagination from "@/components/common/Pagination.vue";
  export default {
    components: {
      'v-card' :CustomCard,
      "v-page": CustomPagination
    },
    data() {
      return {
        newsImg: require('~/assets/images/profile_banner03.png'),
        pagemsg: {
          page: 1,
          pagesize: 8,
          total: 12
        },
        newsList: [{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        },{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        },{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        },{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        },{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        },{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        }],
        config: {
          card_type: "goodplayTwo"
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .news-list{
    .news-banner{
      height: 320px;
    }
    .content {
      width: 1100px;
      margin: 0 auto 50px;
      box-shadow: 0px 0px 14px rgba(198, 194, 210, .36)
    }
  }
</style>
