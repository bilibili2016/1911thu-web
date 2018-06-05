<template>
  <div class="news-list">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <div class="center shadow">
      <v-card :newsList="newsList" :config="config" :linksix='linksix'></v-card>
    </div>
    <v-page :data="pagemsg"></v-page>
  </div>
</template>

<script>
  import CustomBanner from "@/components/common/Banner.vue";
  import CustomCard from "@/components/common/Card.vue";
  import CustomPagination from "@/components/common/Pagination.vue";
  export default {
    components: {
      'v-card': CustomCard,
      "v-page": CustomPagination,
      'v-banner': CustomBanner
    },
    data() {
      return {
        bannerImg: require('~/assets/images/profile_banner03.png'),
        linksix: '/news/detail',
        configs: {
          banner_type: "news"
        },
        config: {
          card_type: "goodplayTwo"
        },
        pagemsg: {
          page: 1,
          pagesize: 8,
          total: 12
        },
        newsList: [{
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }, {
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }, {
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }, {
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }, {
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }, {
          bgImg: require("@/assets/images/ke-1.png"),
          time: '2018-05-20',
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
        }]

      }
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  }
</script>
