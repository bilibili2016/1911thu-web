<template>
  <div class="collegeLists">
    <div class="item clearfix" v-for="(item,index) in collegeListData" :key="index">
      <div class="item_left" @click="goVipDetail(item)">
        <img :src="item.picture" alt="">
        <div class="collegeInfo">
          <p class="title">{{item.title}}</p>
          <p>
            <span class="college-study"><i class="el-icon-circle-check"></i> 已完成学时:{{item.totalStudyTime}}</span>
            <span>剩余{{item.expire_day}}天</span>
          </p>
        </div>
      </div>
      <div class="item_right">
        <div>
          <span class="btn" @click="goCourseList(item)">去学习</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { examine } from '~/lib/v1_sdk/index'
import { message } from '~/lib/util/helper'

export default {
  props: ['collegeListData'],
  data() {
    return {
      pageData: {
        id: '',
        name: ''
      },
      percentage: 20
    }
  },
  methods: {
    goVipDetail(item) {
      this.$router.push(
        '/home/vip/vipPage?id=' + item.id + '&cid=' + item.category_id
      )
    },
    goCourseList(item) {
      this.$router.push(
        '/course/category?cid=' + item.category_id + '&cp=0&pids=0&xid=0'
      )
    }
  },
  mounted() {}
}
</script>