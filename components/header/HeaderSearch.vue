<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="请输入课程、老师"
        v-model="search"
        @keyup.enter="handleSearch"
      >
      <i
        class="el-icon-search"
        @click="handleSearch"
      ></i>
    </div>
  </div>
</template>

<script>
import { message } from "@/lib/util/helper";
export default {
  data() {
    return {
      search: null
    };
  },
  methods: {
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
    }
  }
};
</script>

<style scoped>
</style>
