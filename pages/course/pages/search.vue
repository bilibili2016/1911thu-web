<template>
  <div>
    <v-search></v-search>
    <div class="center">
      <div class="cnums">
        共找到30门“冲突管理”相关课程
      </div>
      <v-card :data="searchData" :config="config"></v-card>
      <v-page :data="pagemsg"></v-page>
      <v-backtotop></v-backtotop>
    </div>

  </div>
</template>

<script>
  import Search from "@/components/common/Search.vue";
  import CustomCard from "@/components/common/Card.vue";
  import CustomPagination from "@/components/common/Pagination.vue";
  import BackToTop from "@/components/common/BackToTop.vue";
  export default {
    components: {
      "v-search": Search,
      "v-card": CustomCard,
      "v-page": CustomPagination,
      "v-backtotop": BackToTop
    },
    data() {
      return {
        searchData: [{
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 123,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 129,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 131,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 161,
            rate: 2
          },
          {
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 141,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 122,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 134,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 166,
            rate: 2
          },
          {
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 146,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 622,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 174,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 186,
            rate: 2
          }
        ],
        config: {
          card_type: "profile",
          card: 'home'
        },
        pagemsg: {
          page: 1,
          pagesize: 8,
          total: 12
        }
      };
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>

