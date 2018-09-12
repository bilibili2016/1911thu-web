<template>
  <div class="searchList clearfix">
    <el-input class="fl" v-model="search.searchWord" :placeholder="placeHolder"></el-input>
    <span class="goSearch fr" @click="goSearch">
      <i class="el-icon-search"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['placeHolder'],
  data() {
    return {
      search: {
        searchWord: ''
      }
    }
  },
  methods: {
    goSearch() {
      this.$emit('search', this.search.searchWord)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/search.scss';
</style>
