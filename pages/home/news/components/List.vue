<template>
  <!-- 新闻列表页  newLists-->
  <div class="newsList">
    <div class="course clearfix bottom " v-for="(news,index) in newsList " :key="index " @click="newsDetail(news)">
      <el-card class="fl " :body-style="{ padding: '0px' } ">
        <!-- 课程封面 -->
        <img :src="news.picture" class="image " alt=" ">
      </el-card>
      <div class="particulars fl " style="width:560px;">
        <div class="currentclum ">
          <h4>{{news.title}}</h4>
          <p class="small-title">{{news.introduce}}</p>
          <p>{{news.introduction}}</p>
        </div>
      </div>
      <div class="Newtime">
        <p class="timeDetail"> {{changeTime(news.create_time)}}</p>
        <p class="timeLink" @click="newsDetail(news)">
          <span class="line"></span>
          <img src="https://static-image.1911edu.com/newList-icon.png" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime, checkURL } from '~/lib/util/helper'
export default {
  props: ['newsList'],
  methods: {
    //新闻详情页
    newsDetail (news) {
      news.type == '3' ? window.open(checkURL(news.media_link)) : this.$router.push("/home/news/" + news.id)
    },
    //转换时间格式(格式二)
    changeTime (time) {
      return formatTime(time)
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/news/list";
</style>