<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="handleSearch">
      <i class="el-icon-search" @click="handleSearch"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null
    }
  },
  methods: {
    handleSearch() {
      this.$emit('handleSearch', this.search)
    }
  }
}
</script>

<style scoped>
</style>
