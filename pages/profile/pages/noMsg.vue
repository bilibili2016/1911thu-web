<template>
    <div class="noMsg-con">
      <div class="noMsg-img">
        <img :src="noMsg"/>
        <p>暂时没有消息</p>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      noMsg: require('~/assets/images/nomsg.png')
    };
  }
};
</script>
