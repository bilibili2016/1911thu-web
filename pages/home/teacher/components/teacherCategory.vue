<template>
  <div class="teacherContent">
    <div class="teacherCategory">

      <div class="college" v-if="tagsList.length>0">
        <h4 class="title">请先选择您的身份：</h4>
        <ul class="ulList identity">
          <li v-for="(item,index) in tagsList" :index="index" :key="index" :class="{btnBg: identity == item.id ? true : false }">
            <el-button @click="selectTags(item)">{{item.tag_name}}</el-button>
          </li>
        </ul>
      </div>
      <div class="college" v-if="categoryData.length>0">
        <h4 class="title">通过学院找导师：</h4>
        <ul class="ulList">
          <li v-for="(item,index) in categoryData" :index="index" :key="index" :class="{btnBg: cid == item.id ? true : false }">
            <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
          </li>
        </ul>
      </div>
      <!-- <div class="classsfiy" v-if="sortData.length>0 && isTeacher">
        <h4 class="title">通过专家领域找导师：</h4>
        <ul class="ulList">
          <li v-for="(item,index) in sortData" :index="index" :key="index" :class="{btnBg: kid === item.id ? true : false }">
            <el-button @click="selectKid(item,index)">{{item.category_name}}</el-button>
          </li>
        </ul>
      </div> -->

      <!-- 课程不展示 -->
      <div class="classification" :class="{isFirst:isFirst}" v-if="categoryData.length>0">
        <div class="inner">
          <h4 class="title">通过专家领域找导师：</h4>
          <ul class="ulList">
            <li v-for="(items,index) in childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
              <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
            </li>
          </ul>
        </div>
      </div>
      <div class="unit" v-if="unitData.length>0">
        <h4 class="title">通过单位找导师：</h4>
        <ul class="ulList">
          <li v-for="(item,index) in unitData" :index="index" :key="index" :class="{btnBg: uid === item.id ? true : false }">
            <el-button @click="selectUid(item,index)">{{item.company_name}}</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { list } from "~/lib/v1_sdk/index";
export default {
  props: ["unitData", "categoryData", "childList", "sortData", "tagsList"],
  data () {
    return {
      isTeacher: false,
      isFirst: true,
      categoryIndex: 0,
      cid: "0",
      pid: "0",
      uid: 0,
      kid: 0,
      cp: "",
      categoryList: [],
      identity: ""
    };
  },
  methods: {
    selectTags (item) {
      this.identity = item.id
      this.$emit("selectTags", item.id);
    },
    // 大类 单个
    selectCid (item, index) {
      if (item.id == 0) {
        this.isTeacher = false;
        this.isFirst = true;
      } else {
        this.isTeacher = true;
        this.isFirst = false;
      }
      this.cid = item.id;
      this.pid = "0";
      this.kid = 0;
      this.$emit("selectCid", item);
      this.$emit("processData");
    },
    // 小类 单个
    selectPid (item, index) {
      if (this.cid == 0) {
        //一级分类全部--专长领域下拉点击效果
        this.cid = item.parent_id;
        this.pid = item.id;
        this.$emit("selectTips", item, index);
        this.$emit("processData");
      } else {
        this.pid = item.id;
        this.$emit("selectPid", item, index);
      }

      if (item.parent_id == 0) {
        this.isFirst = true;
        this.isTeacher = false;
      } else {
        this.isFirst = false;
        this.isTeacher = true;
      }
    },
    //所在单位
    selectUid (item, index) {
      this.uid = item.id;
      this.$emit("selectUid", item, index);
    },
    selectKid (item, index) {
      this.kid = item.id;
      this.$emit("selectKid", item, index);
    }
  },
  mounted () {
    this.$bus.$on("selectChange", data => {
      this.selectCid(data);
    });
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/teacher/teacherCategory.scss";
</style>
