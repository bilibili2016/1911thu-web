<template>
  <!-- 无数据 -->
  <div class="content">
    <div class="noCourse">
      <img :src="noMsgImg" alt="">
      <h4>{{config.text}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config'],
  data() {
    return {
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png'
    }
  }
}
</script>
