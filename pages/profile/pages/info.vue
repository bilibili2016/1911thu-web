<template>
  <div>
    <div class="content" v-for="(card,index) in infoList" :index="index" :key="card.id">
      <div class="text fl fc16-222 flh-30">
        {{card.title}}
      </div>
      <div class="time fr f14-888 flh-30">
        2018-05-20 11：04
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        infoList: [{
            title: "恭喜成为1911学堂会员】 恭喜，你已成功加入1911学院会员的队伍，这里有一份1911学 堂会员学习指导手册，请查收【立即查看】"
          },
          {
            title: "【新上好课】一大批新上好课上架，欢迎查看"
          },
          {
            title: "恭喜成为1911学堂会员】 恭喜，你已成功加入1911学院会员的队伍，这里有一份1911学 堂会员学习指导手册，请查收【立即查看】"
          }
        ]
      };
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
