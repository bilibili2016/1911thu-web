<template>
    <div class="noMsg-con">
      <div class="noMsg-img">
        <img :src="noMsg" alt="">
        <p>暂时没有消息</p>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      noMsg: require('~/assets/images/noMsg.png')
    };
  }
};
</script>
