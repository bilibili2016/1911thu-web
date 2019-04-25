<template>
  <div class="faceteach">
    <div class="banner">
      <div class="banner-img">

        <div class="text">
          <p class="text-desc1">面授及线下活动</p>
          <p class="text-line"></p>
          <p class="text-desc2">1911学堂采用混合式教学模式</p>
          <p class="text-desc3">为学习者提供线上+线下的教育培训资源</p>
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
          <p class="fz-two hw-five">考察海外知名单位、单位、团体、站在国际化、全球化的视频思考问题。</p>
        </div>
        <div class="six">
          <p class="fz-one">户外拓展</p>
          <p class="fz-two hw-six">学堂设置有徒步穿越沙漠、戈壁挑战赛等户外拓展项目，真正在实践中领略真知。</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      faceImg: 'https://static-image.1911edu.com/faceteach-bg.png',
      cenImg: 'https://static-image.1911edu.com/ccenter.png'
    }
  },
  mounted () { }
}
</script>

