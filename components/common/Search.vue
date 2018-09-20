<template>
  <div class="search">
    <div class="main">
      <div class="searchWord">
        <el-input v-model="searchMsg" placeholder="请输入课程、老师" class="inline-input" @keyup.enter.native="search"></el-input>
        <i @click="search" class="el-icon-search"></i>
      </div>
      <div class="hotWord">
        <span>热搜关键词：</span>
        <span v-for="(item,index) in hotSearchRecord" @click="selectItem(item.search_word)" :key="index">{{item.search_word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { conSearch } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { message } from '@/lib/util/helper'
export default {
  props: ['word'],
  data() {
    return {
      searchMsg: '',
      hotSearchRecord: [],
      searchForm: {
        limits: 5,
        pages: 0
      }
    }
  },
  watch: {
    word(val, old) {
      this.searchMsg = val
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    searchHotWord() {
      conSearch.searchHotWord(this.searchForm).then(response => {
        if (response.status === 0) {
          this.hotSearchRecord = response.data.hotSearchRecord
        } else {
          message(this, 'error', response.msg)
        }
      })
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
      this.searchMsg = this.searchMsg.replace(/[ ]/g, '')
      if (
        !/[@#\$%\^&\*]+/g.test(this.searchMsg) &&
        this.searchMsg !== '' &&
        this.searchMsg.length < 30
      ) {
        persistStore.set('key', this.searchMsg)
        this.$emit('Search', this.searchMsg)
      } else {
        message(this, 'error', '请输入不包含特殊字符且小于30个字符的关键词！')
      }
    },
    selectItem(val, index) {
      this.searchMsg = val
      persistStore.set('key', this.searchMsg)
      this.$emit('Search', this.searchMsg)
    }
  },
  mounted() {
    this.searchMsg = persistStore.get('key')
    this.searchHotWord()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/search';
</style>
