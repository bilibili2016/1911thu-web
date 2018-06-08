<template>
  <div>
    <div class="banner">
      <div class="center category-style">
        <div class="college">
          <ul>
            <li class="title">
              学院:
            </li>
            <li v-for="(item,index) in data" :index="index" :key="index" :class="{bgs: bgmsg === index ? true : false }">
              <el-button @click="handleItemOne(item,index)">{{item.name}}</el-button>
            </li>
          </ul>
        </div>
        <div class="classification">
          <ul>
            <li class="title">
              分类:
            </li>
            <li v-for="(item,index) in data2" :index="index" :key="index" :class="{bgs: bgmsgs === index ? true : false }">
              <el-button @click="handleItemTwo(item,index)">{{item.name}}</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="center category-style">
      <div class="header">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabStyle">
          <el-tab-pane label="最新" name="first"></el-tab-pane>
          <el-tab-pane label="最热" name="second"></el-tab-pane>
        </el-tabs>
        <div class="pages"><el-pagination layout=" pager, prev, next" :total="1"></el-pagination></div>
        <!-- <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费" class="switch"> -->
        <el-switch v-model="value3" active-text="隐藏已参加课程" class="switch">
        </el-switch>
      </div>
      <div class="carlist">
        <v-card :data="categoryData" :config="configSevent" @selectCid = 'selectCid'></v-card>
      </div>
    </div>
    <!-- <v-filter></v-filter> -->
    <div>
      <v-page :data="pagemsg"></v-page>
    </div>
    <div v-if="isShowTip">
      <v-unlogged v-if="!this.isAuthenticated"></v-unlogged>
    </div>
    <!-- <v-shop></v-shop> -->
  </div>
</template>

<script>
import CustomCard from "@/components/common/Card.vue";
import CustomHot2 from "@/components/common/Hot2.vue";
import CustomPagination from "@/components/common/Pagination.vue";
import CustomUnlogged from "@/pages/course/pages/unlogged.vue";
import CustomShoppingCart from "@/pages/shop/shoppingCart.vue";
import { auth, home } from "~/lib/v1_sdk/index";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    "v-card": CustomCard,
    "v-filter": CustomHot2,
    "v-page": CustomPagination,
    "v-unlogged": CustomUnlogged,
    "v-shop": CustomShoppingCart
  },
  computed: {
    ...mapState("auth", ["pid", "cid","isShowTip"]),
    ...mapGetters("auth", ["isAuthenticated"]),
    isShow(){
      // console.log(this.isShowTip)
      return this.isShowTip && !this.isAuthenticated
    }
  },
  data() {
    return {
      bgmsg: 0,
      bgmsgs: 0,
      activeName: "second",
      value3: true,
      value4: true,
      configSevent: {
        card_type: "profile",
        card: "home",
        types: 'buy'
      },
      pagemsg: {
        page: 1,
        pagesize: 8,
        total: 12
      },
      categoryData:[
      ],
      curriculumListForm: {
        categoryIda: null,
        categoryIdb: null,
        sortBy: 1,
        pages: 1,
        limits: 8
      },
      // categoryData: [
      //   {
      //     bg: require("@/assets/images/home_new01.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 123,
      //     rate: 3,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new02.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 34,
      //     pnum: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 129,
      //     rate: 5,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new03.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 26,
      //     pnum: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 131,
      //     rate: 1,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new04.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 161,
      //     rate: 2,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new01.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 141,
      //     rate: 3,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new02.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 34,
      //     pnum: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 122,
      //     rate: 5,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new03.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 26,
      //     pnum: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 134,
      //     rate: 1,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new04.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 166,
      //     rate: 2,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new01.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 899,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 146,
      //     rate: 3,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new02.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 34,
      //     pnum: 2312,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 622,
      //     rate: 5,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new03.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 26,
      //     pnum: 799,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 174,
      //     rate: 1,
      //     checkmsg: false
      //   },
      //   {
      //     bg: require("@/assets/images/home_new04.png"),
      //     name: "H5和小程序直播开发",
      //     cnum: 12,
      //     pnum: 4399,
      //     avator: require("@/assets/images/home_avator.png"),
      //     id: 186,
      //     rate: 2,
      //     checkmsg: false
      //   }
      // ],
      data: [
        {
          name: "全部",
          id: 1
        },
        {
          name: "干部通用学院",
          id: 2
        },
        {
          name: "党政系统学院",
          id: 3
        },
        {
          name: "在线商学院",
          id: 4
        },
        {
          name: "行业学院",
          id: 5
        },
        {
          name: "职场学院",
          id: 6
        },
        {
          name: "直播学院",
          id: 7
        },
        {
          name: "学位学院",
          id: 8
        }
      ],
      data2: [
        {
          name: "全部",
          id: 1999
        },
        {
          name: "公共管理/履职能力",
          id: 9
        },
        {
          name: "时政解读",
          id: 10
        },
        {
          name: "法律法规",
          id: 11
        },
        {
          name: "政府绩效管理",
          id: 12
        },
        {
          name: "经济治理与城市规划",
          id: 13
        },
        {
          name: "城市管理",
          id: 14
        },
        {
          name: "新闻宣传国际形式及安全治理",
          id: 15
        },
        {
          name: "创新驱动发展",
          id: 16
        },
        {
          name: "一带一路与国际合作",
          id: 17
        },
        {
          name: "乡村振兴",
          id: 18
        },
        {
          name: "人文素养",
          id: 19
        },
        {
          name: "社会治理",
          id: 20
        }
      ]
    };
  },
  methods: {
    handleItemOne(item, index) {
      this.bgmsg = index;
    },
    handleItemTwo(item, index) {
      this.bgmsgs = index;
    },
    handleClick(tab, event) {},
    curriculumList () {
        this.curriculumListForm.categoryIda = this.cid
        this.curriculumListForm.categoryIdb = this.pid
        // this.curriculumListForm.sortBy = 1
        return new Promise((resolve, reject) => {
          home.curriculumList(this.curriculumListForm).then(response => {
            console.log(response, '99999')
            this.categoryData = response.data.curriculumList
            this.pagemsg.total = response.data.pageCount
            for(let item of response.data.curriculumList){
              this.$set(item, 'checkmsg', false)
            }
            resolve(true)
          })
        })
      },
      selectCid (val) {
        console.log(val)
      }
  },
  mounted() {
    document.getElementsByClassName("headerBox")[0].style.display = "inline";
    document.getElementsByClassName("footerBox")[0].style.display = "inline";
    this.bgmsg = Number(this.cid) + Number(1);
    this.bgmsgs = Number(this.pid) + Number(1);
    this.curriculumList()
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/course/category";
</style>
