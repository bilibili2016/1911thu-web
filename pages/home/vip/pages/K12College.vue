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
        <p class="pCss">1911学堂K12学院是面向广大中学生的共享教育平台。</p>
        <p class="pCss">
          该平台汇聚清华、北大、斯坦福、MIT等世界名校优秀学子，通过他们知识与经验的分享，帮助广大中学生开拓视野，激发自主学习的兴趣，解决成长过程中的烦恼。
        </p>
        <p class="pCss">
          1911学堂K12学院致力于促进基础教育与大学教育的有机衔接，通过互联网的手段打破时空与地域的限制，为广大中学生与世界名校优秀的大学生建立起实时沟通的桥梁，使中学生能够获得高校学子对于学业规划、人生励志、专业选择等方面的直接指导，少走弯路，。
        </p>
        <p class="pCss">
          我们坚信：与优秀的青年在一起，与智者同行，本身就是一种好的教育！
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
          <img v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
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
      ],
      collegeList: [
        "https://static-image.1911edu.com/academy_QH.png",
        "https://static-image.1911edu.com/academy_BD.png",
        "https://static-image.1911edu.com/academy_KY.png",
        "https://static-image.1911edu.com/academy_BSD.png",
        "https://static-image.1911edu.com/college_QHFZ.png"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/k12College";
</style>