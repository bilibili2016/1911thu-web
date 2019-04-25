<template>
  <div class="degree" ref="degree">
    <div class="degree-wrapper">
      <div class="degree-con clearfix">
        <div class="left">
          <h1>学位项目</h1>
          <div class="line"></div>
          <div class="left-desc">
            <p>美国有不少高校提供在线学位项目，如凤凰城大学可提供在线40多个在线硕士学位项目及20多个在线博士学位项目，其中工商管理硕士MBA项目，又分为MBA（财务方向)、MBA（金融方向）、MBA（医疗卫生管理方向）、MBA（人力资源管理方向）、MBA（市场营销方向）、MBA（项目管理方向）。</p>
            <p>1911学堂计划遴选国外数所知名高校的优质项目开展合作，为国内学习者国外优质的学位教育资源。</p>
          </div>
        </div>
        <div class="right clearfix">
          <div class="box box-one">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic1.png" alt="">
              <p>MBA</p>
              <p>（医疗卫生管理方向）</p>
            </div>
          </div>
          <div class="box box-two">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic2.png" alt="">
              <p>MBA</p>
              <p>（市场营销方向）</p>
            </div>
          </div>
          <div class="box box-three">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic3.png" alt="">
              <p>MBA</p>
              <p>（人力资源管理方向）</p>
            </div>

          </div>
          <div class="box box-four">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic4.png" alt="">
              <p>MBA</p>
              <p>（项目管理方向）</p>
            </div>
          </div>
          <div class="box box-five">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic5.png" alt="">
              <p>MBA（金融方向）</p>
            </div>

          </div>
          <div class="box box-six">
            <div class="box-con">
              <img src="https://static-image.1911edu.com/degree-pic6.png" alt="">
              <p>MBA（财务方向）</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {

    let headerHeight = document.getElementsByClassName('headerBox')[0]
      .offsetHeight
    let footerHeight = document.getElementsByClassName('footerBox')[0]
      .offsetHeight
    let windowHeight = document.documentElement.clientHeight

    this.$refs.degree.style.height =
      windowHeight - headerHeight - footerHeight + 'px'
    // this.$refs.degree.style.minHeight =
    //   windowHeight - headerHeight - footerHeight + 'px'
  }
}
</script>

