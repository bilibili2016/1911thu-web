<template>
  <div class="headerPage clearfix">
    <div class="item" :class="{active:changeActive==item.id}" v-for="(item,index) in pages" :key="index" @click="handleClick(item,index)">{{item.title}}</div>
  </div>
</template>

<script>
import { matchSplits, setTitle, message } from "@/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { home } from "~/lib/v1_sdk/index";
export default {
  props: ["categoryArr", "projectArr"],
<<<<<<< HEAD
  data() {
=======
  data () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
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
<<<<<<< HEAD
        }
        // {
        //   title: "证书查询",
        //   id: "searchCer"
        // }
=======
        },
        {
          title: "证书查询",
          id: "searchCer"
        }
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      ]
    };
  },
  methods: {
<<<<<<< HEAD
    handleClick(item, index) {
=======
    handleClick (item, index) {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      let path = "";
      switch (item.id) {
        case "index":
          this.$router.push("/");
          break;
        case "teacher":
          this.$router.push("/home/teacher/list");
          break;
        case "school":
          this.$router.push("/home/citySchool/schoolIntro");
          break;
        case "searchCer":
          this.$router.push("/home/certification/searchPage");
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
<<<<<<< HEAD
    changeHeaderActive() {
      let pathName = window.location.pathname;

      //初始化名师智库默认选中学院分类
      if (pathName != "/home/teacher/list") {
=======
    changeHeaderActive () {
      let pathName = window.location.pathname;

      //初始化名师智库默认选中学院分类
      if (
        pathName != "/home/teacher/list" ||
        pathName != "/home/teacher/list/"
      ) {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
        persistStore.set("cid", -1);
      }

      switch (pathName) {
        //首页
        case "/":
          this.changeActive = "index";
          break;
        //名师智库
        case "/home/teacher/list":
        case "/home/teacher/orderTeacher":
        case "/home/teacher/beTeacher":
<<<<<<< HEAD
=======
        case "/home/teacher/list/":
        case "/home/teacher/orderTeacher/":
        case "/home/teacher/beTeacher/":
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          this.changeActive = "teacher";
          break;
        //城市分校
        case "/home/citySchool/schoolIntro":
        case "/home/citySchool/submitSuccess":
<<<<<<< HEAD
=======
        case "/home/citySchool/schoolIntro/":
        case "/home/citySchool/submitSuccess/":
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          this.changeActive = "school";
          break;
        //课程分类
        case "/course/category":
<<<<<<< HEAD
=======
        case "/course/category/":
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          this.changeActive = matchSplits("vid");
          break;
        //学院
        case "/home/vip/vipPage":
<<<<<<< HEAD
=======
        case "/home/vip/vipPage/":
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          this.changeActive = matchSplits("id");
          break;
        //证书查询
        case "/home/certification/searchPage":
        case "/home/certification/viewPage":
<<<<<<< HEAD
=======
        case "/home/certification/searchPage/":
        case "/home/certification/viewPage/":
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
          this.changeActive = "searchCer";
          break;
        default:
          this.changeActive = -1;
          break;
      }
    },
    // 学院列表
<<<<<<< HEAD
    vipGoodsList() {
=======
    vipGoodsList () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
      home.vipGoodsList().then(response => {
        if (response.status === 0) {
          this.item2 = response.data.vipGoodsList;
          this.pages = [...this.item1, ...this.item2, ...this.item3];
        }
      });
    }
  },
<<<<<<< HEAD
  mounted() {
=======
  mounted () {
>>>>>>> 13be612483a95378d68e5c85629442e070cbfd72
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
