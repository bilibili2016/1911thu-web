<template>
  <div>
    <div class="centers">
      <img :src="searchi" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchi: require('@/assets/images/searchi.png')
      }
    },
  }
</script>

<style scoped>
.centers {
  width: 244px;
  height: 200px;
  margin: 133px auto;
}
.centers img{
  width: 244px;
  height: 200px;;
}
</style>
