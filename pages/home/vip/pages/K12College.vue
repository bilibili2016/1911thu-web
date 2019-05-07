<template>
  <!-- 国学院 -->
  <div class="k12College">
    <div class="k12-banner"></div>
    <div class="k12-con">
      <div class="k12Width k12-one">
        <div class="k12-title">
          <div class="text">学院简介</div>
          <div class="decorate"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
        </div>
        <p class="pCss">
          习近平总书记明确指出，教育决定着人类的今天，也决定着人类的未来。基础教育在国民教育体系中处于基础性、先导性地位，必须把握好定位，全面贯彻落实党的教育方针，从多方面采取措施，努力把我国基础教育越办越好。
        </p>
        <p class="pCss">
          K12，即kindergarten through twelfth grade的简写，是国际上对国家基础教育的统称。“十八大”以来，我国陆续在K12教育领域进行了核心素养评价改革、新高考改革、中小学生减负行动等一系列改革举措，旨在突破教育改革“深水区”，推进教育内涵式发展，真正实现素质教育，以人为本、因材施教，促进学生的全面发展。
        </p>
        <p class="pCss">
          1911学堂K12学院，紧跟国家K12教育领域的改革方向，积极响应国家素质教育发展要求，融汇K12教育的国际经验，有针对性的研发具有一系列特色项目，旨在通过“线上+线下”混合式教学模式、提供多样化的课程体系，使K12学生感受高尚文化氛围，全面增强实践素养，提升适应社会能力，形成正确的世界观、人生观和价值观，实现学生全面提升综合素质与能力。
        </p>

      </div>
      <div class="k12-two">
        <div class=" two-con">
          <div class="k12-title">
            <div class="text">业务产品</div>
            <div class="decorate"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
            <p>1911学堂K12学院的业务产品初期主要为研学类项目：</p>
          </div>
          <div class="two-items k12Width">
            <div class="item" v-for="(item,index) in proList" :key="index">
              <span>{{item}}</span><em class="index">{{index+1}}</em>
            </div>
          </div>
        </div>
      </div>
      <div class="k12-three">
        <!-- 师资来源 -->
        <div class="k12-title">
          <div class="text">师资来源</div>
          <div class="decorate"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
        </div>
        <!-- <p class="teacherText">本学院授课师资来自以下及其他相关单位</p> -->
        <div class="school">
          <img src="https://static-image.1911edu.com/college_QH.png" alt="">
          <img src="https://static-image.1911edu.com/college_BD.png" alt="">
          <img src="https://static-image.1911edu.com/college_JYKY.png" alt="">
          <img src="https://static-image.1911edu.com/college_BSD.png" alt="">
          <img src="https://static-image.1911edu.com/college_QHFZ.png" alt="">
        </div>
        <div class="target k12Width">
          <div class="k12-title">
            <div class="text">培养目标</div>
            <div class="decorate"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
          </div>
          <p class="pCss">1911学堂K12学院的培养目标是培养努力践行社会主义核心价值观，视野开阔、素养全面，具备较强实践能力和适应能力的中小学生。</p>
        </div>
        <div class="bar">
          <span class="left">面向人群</span>
          <span class="right">全国各地各类中学、小学及国际学校的在校学生</span>
        </div>

      </div>
      <div class="k12-four">
        <div class="k12-title">
          <div class="text">课程体系</div>
          <div class="decorate"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
        </div>
        <div class="four-item clearfix">
          <div class="left">
            <div class="item" v-for="(item,index) in leftList" :key="'left'+index">
              <span class="icon"><span class="inner">{{index+1}}</span></span>
              <span>{{item}}</span>
            </div>
          </div>
          <div class="right">
            <div class="item " v-for="(item,index) in rightList" :key="'right'+index">
              <span class="icon"><span class="inner">{{index+5}}</span></span>
              <span>{{item}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="certificate">
        <img src="https://static-image.1911edu.com/k12-certificate.png" alt="" srcset="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      proList: [
        '清华北大文化浸润小学生研学项目',
        '清华北大文化浸润中学生研学项目',
        '中小学生科学艺术素养提升研学项目',
        '中小学生人文素养提升研学项目',
        '中小学生综合素养提升研学项目'
      ],
      leftList: [
        "大学精神与文化",
        "科学素养与学术旨趣",
        "艺术素养与全面发展",
        "高效学习与科学应试",

      ],
      rightList: [
        "心理健康与沟通技巧",
        "中国传统文化素养",
        "法律素养与社会常识",
        "大语文与核心素养"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/k12College";
</style>