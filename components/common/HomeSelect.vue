<template>
  <div class="headerPage clearfix">
    <div
      class="item"
      :class="{active:changeActive==item.id}"
      v-for="(item,index) in pages"
      :key="index"
      @click="handleClick(item,index)"
    >{{item.title}}</div>
  </div>
</template>

<script>
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { home } from "~/lib/v1_sdk/index";
export default {
  props: ["categoryArr", "projectArr"],
  data() {
    return {
      changeActive: "",
      pages: [],
      item1: [
        {
          title: "首页",
          id: "index"
        }
      ],
      item2: [],
      item3: [
        {
          title: "名师智库",
          id: "teacher"
        },
        {
          title: "城市分校",
          id: "school"
        }
      ]
    };
  },
  methods: {
    handleClick(item, index) {
      let path = "";
      switch (item.id) {
        case "index":
          this.$router.push("/");
          break;
        case "teacher":
          this.$router.push("/home/teacher/list?cid=-1");
          break;
        case "school":
          this.$router.push("/home/citySchool/schoolIntro");
          break;
        default:
          this.$router.push({
            path: "/home/vip/vipPage",
            query: {
              id: item.id,
              cid: item.category_id
            }
          });
          break;
      }
    },
    changeHeaderActive() {
      let pathName = window.location.pathname;
      switch (pathName) {
        //首页
        case "/":
          this.changeActive = "index";
          break;
        //名师智库
        case "/home/teacher/list":
        case "/home/teacher/orderTeacher":
        case "/home/teacher/beTeacher":
          this.changeActive = "teacher";
          break;
        //城市分校
        case "/home/citySchool/schoolIntro":
        case "/home/citySchool/submitSuccess":
          this.changeActive = "school";
          break;
        //课程分类
        case "/course/category":
          this.changeActive = matchSplits("vid");
          break;
        //学院
        case "/home/vip/vipPage":
          this.changeActive = matchSplits("id");
          break;
        default:
          this.changeActive = -1;
          break;
      }
    },
    // 学院列表
    vipGoodsList() {
      home.vipGoodsList().then(response => {
        if (response.status === 0) {
          this.item2 = response.data.vipGoodsList;
          this.pages = [...this.item1, ...this.item2, ...this.item3];
        }
      });
    }
  },
  mounted() {
    this.vipGoodsList();
    this.changeHeaderActive();
  },
  watch: {
    $route: "changeHeaderActive"
  }
};
</script>

<style scoped lang="scss">
// @import '~assets/style/components/tabs';
</style>
