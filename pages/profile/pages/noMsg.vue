<template>
    <div class="content">
        <div class="noCourse">
            <img :src="noMsgImg" alt="">
            <h4>{{config.text}}</h4>
            <!-- <p>去学习</p> -->
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

<style scoped>
</style>