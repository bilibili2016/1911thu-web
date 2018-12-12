<template>
  <div class="teacherCategory">
    <!-- <div
      class="classsfiy"
      v-if="sortData.length>1"
    >
      <h4 class="title">类别：</h4>
      <ul class="ulList">
        <li
          v-for="(item,index) in sortData"
          :index="index"
          :key="index"
          :class="{btnBg: kid === item.id ? true : false }"
        >
          <el-button @click="selectKid(item,index)">{{item.category_name}}</el-button>
        </li>
      </ul>
    </div> -->
    <div
      class="college"
      v-if="categoryData.length>1"
    >
      <h4 class="title">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院：</h4>
      <ul class="ulList">
        <li
          v-for="(item,index) in categoryData"
          :index="index"
          :key="index"
          :class="{btnBg: cid == item.id ? true : false }"
        >
          <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
        </li>
      </ul>
    </div>
    <!-- 课程不展示 -->
    <div
      class="classification"
      v-if="categoryData.length>1"
    >
      <div class="inner">
        <h4 class="title">专长领域：</h4>
        <ul class="ulList">
          <li
            v-for="(items,index) in childList"
            :index="index"
            :key="index"
            :class="{btnBg: pid === items.id ? true : false }"
          >
            <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="unit"
      v-if="unitData.length>1"
    >
      <h4 class="title">所在单位：</h4>
      <ul class="ulList">
        <li
          v-for="(item,index) in unitData"
          :index="index"
          :key="index"
          :class="{btnBg: uid === item.id ? true : false }"
        >
          <el-button @click="selectUid(item,index)">{{item.company_name}}</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { list } from "~/lib/v1_sdk/index";
export default {
  props: ["unitData", "categoryData", "childList", "sortData"],
  data() {
    return {
      categoryIndex: 0,
      cid: "0",
      pid: "0",
      uid: 0,
      kid: 0,
      cp: "",
      categoryList: []
    };
  },
  methods: {
    // 大类 单个
    selectCid(item, index) {
      this.cid = item.id;
      this.pid = "0";
      this.$emit("selectCid", item);
      this.$emit("processData");
    },
    // 小类 单个
    selectPid(item, index) {
      this.pid = item.id;
      this.$emit("selectPid", item, index);
    },
    //所在单位
    selectUid(item, index) {
      this.uid = item.id;
      this.$emit("selectUid", item, index);
    }
  },
  mounted() {
    this.$bus.$on("selectChange", data => {
      this.selectCid({ id: data });
    });
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/home/teacherCategory.scss";
</style>
