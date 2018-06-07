<template>
  <div>
    <div class="centers">
      <!-- <video id="movd" width="414" height="270" preload="auto" playsinline webkit-playinline x5-playinline ref="mov">
      </video> -->
      <div id="movd" style="width:100%;height:auto;"></div>
    </div>
  </div>
</template>

<script>
// import tcPlayer from 'tcplayer'

  export default {
    data() {
      return {
      }
    },
    methods: {
    },
    mounted () {
      // console.log(this.$refs.mov.id, '这是this')

    }
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
