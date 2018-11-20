<template>
  <div>
    <div class="searchOrderList clearfix">
      <el-input class="fl" v-model="searchForm.searchWord" placeholder="请输入订单号、商品名称"></el-input>
      <span class="goSearch fr" @click="detection">
        <i class="el-icon-search"></i>
      </span>
      <div class="hoverMore" @click="handleShow">
        <span class="more" :class="{active:active}">更多筛选条件 <i class="el-icon-arrow-down"></i></span>
        <!-- <ul class="moreList">
          <li @click="handleShow" v-for="(item,index) in moreList" :key="index">{{item.name}}</li>
        </ul> -->
      </div>
    </div>
    <div class="block" v-show="isShowTime">
      <div class="demonstration fl" style="margin:12px 2px 0px 0px;">根据下单日期搜索: </div>
      <div class="fl">
        <el-date-picker v-model="searchForm.startDay" type="date" value-format="timestamp" placeholder="选择开始日期">
        </el-date-picker>
        <span class="dataPickSpan">至</span>
        <el-date-picker v-model="searchForm.endDay" type="date" value-format="timestamp" placeholder="选择结束日期">
        </el-date-picker>
      </div>
      <div class="search">
        <el-button round @click="detection" style="margin-left:10px;">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from '@/lib/util/helper'
import { timestampToYMD } from '@/lib/util/helper'

export default {
  props: ['orderNum'],
  data() {
    return {
      active: false,
      isShowTime: false,
      searchDatas: [],
      moreList: [{ name: '跟据下单日期搜索' }],
      searchType: 1,
      searchForm: {
        startDay: '',
        endDay: '',
        searchWord: ''
      }
    }
  },
  methods: {
    detection() {
      this.searchDatas = []
      if (this.searchForm.endDay < this.searchForm.startDay) {
        message(this, 'error', '结束日期不能小于开始日期!')
        return false
      }
      this.searchDatas.push(timestampToYMD(this.searchForm.startDay))
      this.searchDatas.push(timestampToYMD(this.searchForm.endDay))
      this.searchDatas.push(this.searchForm.searchWord)

      this.$bus.$emit(
        'searchDatas',
        this.searchDatas,
        this.searchType,
        this.orderNum
      )
    },
    goSearch() {},
    handleShow() {
      this.active = !this.active
      this.isShowTime = !this.isShowTime
    }
  },
  mounted() {
    this.$bus.$on('clearSearch', () => {
      this.searchForm.startDay = ''
      this.searchForm.endDay = ''
      this.searchForm.searchWord = ''
    })
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/dataPick.scss';
</style>
