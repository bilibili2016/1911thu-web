<template>
  <div class="nothing">
    <!-- <img src="http://papn9j3ys.bkt.clouddn.com/searchNothing.png" alt=""> -->
    <img src="http://papn9j3ys.bkt.clouddn.com/noMsg.png" alt="">
    <p>未找到相关内容</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: true
    }
  }
}
</script>
<style scope lang="scss">
.nothing {
  width: 100%;
  padding: 80px 0;
  img {
    width: 244px;
    height: 202px;
    display: block;
    margin: 0 auto;
  }
  p {
    color: #999;
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
  }
}
</style>




