<template>

    <div class="banner">
      <img :src="faceImg" alt="">
      <div class="center">
        <div class="text">
          <p >面授及线下活动</p>
          <p>1911学堂采用混合式教学模式</p>
          <p>为学习者提供线上+线下的教育培训资源</p>
        </div>
      </div>
      <img :src="cenImg" alt="">
    </div>
</template>

<script>

  export default {
    data() {
      return {
        faceImg: require('@/assets/images/fact_teach.png'),
        cenImg: require('@/assets/images/ccenter.png')
      }
    },
  }
</script>

<style scoped lang="scss">
  .banner{
    img:nth-child(1){
      width:100%;
      height: 360px;
    }
    img:nth-child(3){
      width:614px;
      height: 464px;

    }
    .center{
      position: relative;
      .text{
        p:nth-child(1){
          font-size:46px;
          color:rgba(255,255,255,1);
          line-height:39px;
          position: absolute;
          top:-250px;
          right: 150px;
        }
        p:nth-child(2){
          font-size:22px;
          color:rgba(255,255,255,1);
          line-height:54px;
          position: absolute;
          top:-140px;
          right: 190px;
        }
        p:nth-child(3){
          font-size:22px;
          color:rgba(255,255,255,1);
          line-height:54px;
          position: absolute;
          top:-90px;
          right: 85px;
        }
      }
    }

  }

</style>
