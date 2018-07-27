<template>

  <div class="banner">
    <img :src="faceImg" alt="" class="banner-img">
    <div class="center">
      <div class="text">
        <p>面授及线下活动</p>
        <p>1911学堂采用混合式教学模式</p>
        <p>为学习者提供线上+线下的教育培训资源</p>
      </div>
    </div>
    <div class="centerImg">
      <img :src="cenImg" alt="" class="img">
      <div class="one">
        <p class="fz-one right-one">面授教学</p>
        <p class="fz-two">线下课堂实体面授教学，感受大学校园文化氛围。</p>
      </div>
      <div class="two">
        <p class="fz-one right-two">标杆学习</p>
        <p class="fz-two hw">向本行业、本系统内优秀的标杆单位学习。</p>
      </div>
      <div class="three">
        <p class="fz-one right-three">国内游学</p>
        <p class="fz-two hw-two">结合所学课程主题内容，到适当的教学点、考察点参观考察。</p>
      </div>
      <div class="four">
        <p class="fz-one">现场教学</p>
        <p class="fz-two hw-three">现场教学则是通过现象考察验证所学理论与客观规律，现场教学与课堂专题模块教学的有机结合，发挥不同教学方式的优势，从而达到学以致用的效果。</p>
      </div>
      <div class="five">
        <p class="fz-one">海外游学</p>
        <p class="fz-two hw-five">考察海外知名企业、单位、团体、站在国际化、全球化的视频思考问题。</p>
      </div>
      <div class="six">
        <p class="fz-one">户外拓展</p>
        <p class="fz-two hw-six">学堂设置有徒步穿越沙漠、戈壁挑战赛等户外拓展项目，真正在实践中领略真知。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faceImg: 'http://papn9j3ys.bkt.clouddn.com/fact_teach.png',
      cenImg: 'http://papn9j3ys.bkt.clouddn.com/ccenter.png'
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

<style scoped lang="scss">
.banner {
  overflow: hidden;
  height: 1063px;
  .banner-img {
    width: 100%;
    height: 360px;
  }
  .img {
    width: 721px;
    height: 528px;
  }
  .center {
    position: relative;
    .text {
      p:nth-child(1) {
        font-size: 46px;
        color: rgba(255, 255, 255, 1);
        line-height: 39px;
        position: absolute;
        top: -250px;
        right: 150px;
      }
      p:nth-child(2) {
        font-size: 22px;
        color: rgba(255, 255, 255, 1);
        line-height: 54px;
        position: absolute;
        top: -140px;
        right: 190px;
      }
      p:nth-child(3) {
        font-size: 22px;
        color: rgba(255, 255, 255, 1);
        line-height: 54px;
        position: absolute;
        top: -90px;
        right: 85px;
      }
    }
  }
  .centerImg {
    width: 754px;
    height: 700px;
    margin: 0 auto;
    padding: 70px 0px 0;
    position: relative;
    .fz-one {
      font-size: 24px;
      font-family: MicrosoftYaHei;
      color: rgba(34, 34, 34, 1);
      line-height: 39px;
    }
    .fz-two {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: rgba(34, 34, 34, 1);
      line-height: 30px;
    }
    .one {
      position: absolute;
      top: 190px;
      left: -152px;
    }
    .right-one {
      text-indent: 199px;
    }
    .two {
      position: absolute;
      top: 304px;
      left: -162px;
    }
    .hw {
      width: 178px;
    }
    .right-two {
      text-indent: 75px;
    }
    .three {
      position: absolute;
      top: 492px;
      left: -136px;
    }
    .hw-two {
      width: 264px;
    }
    .right-three {
      text-indent: 140px;
    }
    .four {
      position: absolute;
      top: 163px;
      left: 598px;
    }
    .hw-three {
      width: 329px;
    }
    .five {
      position: absolute;
      top: 345px;
      left: 677px;
    }
    .hw-five {
      width: 240px;
    }
    .six {
      position: absolute;
      top: 515px;
      left: 716px;
    }
    .hw-six {
      width: 203px;
    }
  }
}
</style>
