<template>
  <div>
    <div class="banner">
      <div class="center category-style">
        <!-- 课程分类 -->
        <div class="courseCategory" v-if="cp == 0">
          <div class="firstLevel">
            <div v-if="vid!=-1 && vid!=''">
              <ul class="courseCollege">
                <li v-if="cid == item.id" v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid === item.id ? true : false }">
                  <span class="name" @click="handleCollegeLink(item)">{{item.category_name}}</span> > <span class="nameRight">课程列表</span>
                </li>
              </ul>
            </div>
            <div v-else>
              <li class="title firstTitle">学院分类：</li>
              <ul class="courseCollege courseLists">
                <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid == item.id ? true : false }">
                  <el-button @click="selectCid(item,index)">{{changeName(item.category_name)}}</el-button>
                </li>
              </ul>
            </div>
          </div>
          <div class="secondLevel courseArea">
          <!-- <div class="secondLevel"> -->
            <div class="inner">
              <li class="title">课程领域：</li>
              <ul>
                <li v-for="(items,index) in pidData.childList" :index="index" :key="index" :class="{btnBg: pid == items.id ? true : false }">
                  <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 项目分类 -->
        <div class="projectCategory" v-if="cp == 1">
          <div class="firstLevel">
            <li class="title">学院分类：</li>
            <ul class="projrctCollege">
              <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid == item.id ? true : false }">
                <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
              </li>
            </ul>
          </div>
          <div class="secondLevel">
            <li class="title">项目分类：</li>
            <ul>
              <li v-for="(items,index) in projectCategory" :index="index" :key="index" :class="{btnBg: pid == items.id ? true : false }">
                <el-button @click="selectPid(items,index)">{{items.title}}</el-button>
              </li>
            </ul>
            <div class="projectRight" @click="handleProjectRight">前往自定制项目</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { matchSplits } from "@/lib/util/helper";

export default {
  props: ["cidData", "pidData", "cidBg", "pidBg", "loadList"],
  data() {
    return {
      cid: null,
      pid: "0",
      cp: "",
      vid: "",
      cindex: null,
      cg: null,
      projectCategory: [
        {
          id: 0,
          title: "全部"
        },
        {
          id: 1,
          title: "标准项目"
        },
        {
          id: 3,
          title: "已定制项目"
        }
      ]
    };
  },
  methods: {
    changeName(name) {
      return name.replace("在线", "");
    },
    handleCollegeLink(item) {
      this.$router.push({
        path: "/home/vip/collegeDetail",
        query: {
          id: this.vid,
          cid: item.id,
          title: ""
        }
      });

      // this.$router.push(
      //   `/home/vip/collegeInfo?id=${this.vid}&cid=${item.id}&title=`
      // );
    },
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
    this.cid = matchSplits("cid");
    this.pid = matchSplits("pids");
    this.cp = matchSplits("cp");
    this.vid = matchSplits("vid");
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
