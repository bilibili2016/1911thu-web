<template>
  <div class="search">
    <!-- <i v-if="!isShowInput" class="el-icon-search out-icon" @click="showInput"></i> -->
    <!-- <i v-else class="el-icon-close out-icon" @click="showInput"></i> -->
    <div ref="searchInput" class="searchInput">
      <input type="text" placeholder="请输入课程、导师" v-model="search" @keyup.enter="handleSearch">
      <span v-if="loadSearch" class="innerIcon"><i class="el-icon-loading"></i></span>
      <span v-else class="innerIcon" @click="handleSearch"> 搜索</span>
    </div>
  </div>
</template>

<script>
import { message } from "@/lib/util/helper";
export default {
  props: ['loadSearch'],
  data () {
    return {
      search: "",
      isShowInput: false
    };
  },
  methods: {
    showInput () {
      let divHeight = this.$refs.searchInput.style.height;
      if (divHeight == "40px") {
        this.$refs.searchInput.style.height = 0 + "px";
      } else {
        this.$refs.searchInput.style.height = 40 + "px";
      }
      this.isShowInput = !this.isShowInput;
    },
    handleSearch () {
      this.search = this.search.replace(/[ ]/g, "");
      if (
        !/[@#\$%\^&\*]+/g.test(this.search) &&
        this.search !== "" &&
        this.search.length < 30
      ) {
        this.$emit("handleSearch", this.search);
      } else {
        message(this, "error", "请输入不包含特殊字符且小于30个字符的关键词！");
      }
    },
    changePage () {
      this.isShowInput = false;
      this.search = "";
      // this.$refs.searchInput.style.height = 0 + "px";
    }
  },
  watch: {
    $route: "changePage"
  }
};
</script>
