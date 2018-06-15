<template>
  <div class="search">
    <div class="main">
      <div class="searchWord">
        <el-input v-model="searchMsg" placeholder="请输入内容" class="inline-input" @keyup.enter.native="search"></el-input>
        <img :src="searchImg" alt="" @click="search">
      </div>
      <div class="hotWord">
        <span>热搜关键词：</span>
        <span v-for="item in searchMsgs" @click="selectItem(item)" :key="item">{{item}}</span>
        <!-- <span>学术管理</span>
        <span>学位</span>
        <span>HR</span>
        <span>历史</span>
        <span>人事管理</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    handleSelect(item) {},
    search() {
      persistStore.set('key', this.searchMsg)
      this.$emit('Search', this.searchMsg)
    },
    selectItem(val) {
      this.searchMsg = val
      persistStore.set('key', this.searchMsg)
      this.$emit('Search', this.searchMsg)
    }
  },
  data() {
    return {
      searchMsg: '',
      searchImg: require('~/assets/images/search.png'),
      searchMsgs: ['电子政务', '学术管理', '学位', 'HR', '历史', '日本']
    }
  },
  mounted() {
    this.searchMsg = persistStore.get('key')
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/search';
</style>
