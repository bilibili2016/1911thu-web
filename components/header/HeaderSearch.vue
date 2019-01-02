<template>
  <div>
    <div class="search">
      <i
        v-if="!isShowInput"
        class="el-icon-search out-icon"
        @click="showInput"
      ></i>
      <i
        v-else
        class="el-icon-close  out-icon"
        @click="showInput"
      ></i>
      <div
        v-show="isShowInput"
        class="searchInput"
      >
        <input
          type="text"
          placeholder="请输入课程、老师"
          v-model="search"
          @keyup.enter="handleSearch"
        >
        <i
          class="el-icon-search inner-icon"
          @click="handleSearch"
        ></i>
      </div>

    </div>
  </div>
</template>

<script>
import { message } from "@/lib/util/helper";
export default {
  data() {
    return {
      search: null,
      isShowInput: false
    };
  },
  methods: {
    showInput() {
      this.isShowInput = !this.isShowInput;
    },
    handleSearch() {
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
    changePage() {
      this.isShowInput = false;
      this.search = "";
    }
  },
  watch: {
    $route: "changePage"
  }
};
</script>

<style scoped>
</style>
