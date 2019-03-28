<template>
  <div>
    <div class="banner">
      <div class="center category-style">
        <div class="college">
          <!-- v-if="!loadList" -->
          <!-- <li class="title" v-if="cp == 0">学院：</li> -->
          <li class="title" v-if="cp == 1">学院分类：</li>
          <ul v-if="cp == 0">
            <li v-if="cid == item.id" v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid === item.id ? true : false }">
              <!-- <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button> -->
              <img :src="item.picture" alt="">
              <!-- <img src="http://static-image.1911edu.com/smart-icon.png" alt=""> -->
              <span class="name">{{item.category_name}}</span>
            </li>
          </ul>
          <ul v-if="cp == 1">
            <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid === item.id ? true : false }">
              <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
            </li>
          </ul>
        </div>
        <!-- 课程不展示 -->
        <div class="classification">
          <!-- v-if="!loadList" -->
          <li class="title" v-if="cp == 0">分类：</li>
          <li class="title" v-if="cp == 1">项目分类：</li>
          <ul>
            <li v-for="(items,index) in pidData.childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
              <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
            </li>
          </ul>
          <div v-if="cp == 1" class="projectRight" @click="handleProjectRight">前往自定制项目</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["cidData", "pidData", "cidBg", "pidBg", "loadList"],
  data() {
    return {
      cid: null,
      pid: "0",
      cp: "",
      cindex: null,
      cg: null
    };
  },
  methods: {
    // 大类 单个
    selectCid(item, index) {
      this.$emit("selectCid", item, index);
    },
    // 小类 单个
    selectPid(items, index) {
      this.$emit("selectPid", items, index);
    },
    handleProjectRight() {
      this.$router.push("/project/customerProject?sid=&edit=1");
    }
  },
  mounted() {
    this.cid = window.location.search.split("&")[0].split("=")[1];

    this.pid = window.location.search.split("&")[3].split("=")[1];
    this.cp = window.location.search.split("&")[1].split("=")[1];

    this.$bus.$on("pid", data => {
      this.pid = data;
    });
    this.$bus.$on("cid", data => {
      this.cid = data;
    });
  }
};
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import "~assets/style/course/category";
</style>
