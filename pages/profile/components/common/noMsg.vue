<template>
  <!-- 无数据 -->
  <div class="content">
    <div class="noCourse">
      <img v-if="config.type=='myCollege'" src="https://static-image.1911edu.com/VIP_null.png" alt="">
      <img v-else :src="noMsgImg" alt="">
      <h4>{{config.text}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["config"],
  data () {
    return {
      noMsgImg: "https://static-image.1911edu.com/noMsg.png"
    };
  }
};
</script>
