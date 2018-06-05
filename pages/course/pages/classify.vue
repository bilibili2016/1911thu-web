<template>
  <div>
    <div class="classification">
      <v-hots></v-hots>
      <div class="classList">
        <ul>
          <li v-for="(item,index) in classList" :key="index" @click="bind(index)">{{item}}</li>
        </ul>
      </div>
      <div class="center">
        <v-card :data="categoryData" :config="config" :linkdata="cardlink"></v-card>
      </div>
    </div>
    <div>
      <v-page :data="pagemsg"></v-page>
    </div>
  </div>
</template>

<script>
  import CustomCard from "@/components/common/Card.vue";
  import CustomHots from "@/components/common/Hot.vue";
  import CustomPagination from "@/components/common/Pagination.vue";
  export default {
    components: {
      "v-hots": CustomHots,
      "v-card": CustomCard,
      "v-page": CustomPagination
    },
    methods: {
      bind(index) {
        $(".classList ul li").removeClass("checked");
        $(".classList ul li")
          .eq(index)
          .addClass("checked");
      }
    },
    data() {
      return {
        checked: true,
        onOff: true,
        cardlink: 'coursedetail',
        classList: [
          "干部通用",
          "党政系统",
          "商学院",
          "行业学院",
          "职场学院",
          "热点学院"
        ],
        categoryData: [{
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


