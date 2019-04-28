<template>
  <!-- 国学院 -->
  <div class="chineseCollege">
    <div class="chinese-banner"></div>
    <div class="chinese-con">
      <div class="chinese-one">
        <p class="pCss">
          上到“两办国学传承18条”的颁布，下到具有中国特色、中国风格、中国气派的文化产业兴盛流行，国学作为中华文化的核心，是中华文明传承数千年的密码。
        </p>
        <p class="pCss">
          1911学堂携手国学领域专家共同成立了1911学堂国学院，以中国传统文化为宏观框架和基本依托，传授中国古代文学的基础知识、专业理论和研究方法，并向各类机构提供系统性的教育培训解决方案，以提升学员的人文素养和洞察力，锻造思维与悟性，助其胜任文化、宣传、新闻、出版、管理等相关工作，推动党政、企业及教育等相关人员修齐治平、尊时守位、知常达变、开物成务，推动中华文化的伟大复兴和中国传统思想文化的现实落地。
        </p>
      </div>
      <div class="chinese-two">
        <div class="chineseWidth two-con">
          <!-- 面向人群 -->
          <div class="chinese-title people"></div>
          <div class="two-items clearfix">
            <div class="item one">
              <div class="people-icon"><img src="https://static-image.1911edu.com/chinese-icon2.png" alt=""></div>
              <div class="people-text">全国各级各类党政机关与事业单位干部</div>
            </div>
            <div class="item two">
              <div class="people-icon"><img src="https://static-image.1911edu.com/chinese-icon3.png" alt=""></div>
              <div class="people-text">各级各类企业中高层管理人员</div>
            </div>
            <div class="item three">
              <div class="people-icon"><img src="https://static-image.1911edu.com/chinese-icon4.png" alt=""></div>
              <div class="people-text">各级各类学校校长、骨干教师</div>
            </div>
            <div class="item four">
              <div class="people-icon"><img src="https://static-image.1911edu.com/chinese-icon5.png" alt=""></div>
              <div class="people-text">对中国传统文化感兴趣的社会各界人士</div>
            </div>
          </div>
          <!-- 学习内容 -->
          <!-- <div class="chinese-title content"></div>
          <div class="second-items clearfix">
            <div class="item" v-for="(item,index) in contentList" :key="index">
              <i class="icon">{{1+index}}</i>
              <span>{{item}}</span>
            </div>
          </div>
          <div class="bottom">
            <p class="pCss">1911学堂在线国学院的课程内容注重理论联系实际，教学过程中有丰富的教学设计及交互活动，能够充分满足学员的学习需求，从而有效提高学员发现问题、分析问题和解决问题的能力，有利于实现个人与社会的双重目标。</p>
          </div> -->
          <!-- 业务产品  -->
          <div class="chinese-title proTitle"></div>
          <div class="production">
            <div class="item">
              <img src="https://static-image.1911edu.com/chinese-pro1.png" alt="">
              <p>在线国学院</p>
            </div>
            <div class="item">
              <img src="https://static-image.1911edu.com/chinese-pro2.png" alt="">
              <p>混合式标准项目</p>
            </div>
            <div class="centerBg-text">
              <p>1911学堂国学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的国学类内训项目。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chinese-three">
        <!-- 学习收获 -->
        <!-- <div class="chinese-title harvest"></div>
        <p class="pCss">通过1911学堂在线国学院，可以学习到正确的修身做人之道、为人处事之道、知人用人之道、为官为政之道及治国理政之道和哲学之道，帮助自己树立起牢固正确的世界观、人生观、价值观，从而运用到执政从商之中，巩固领导事业的健康发展。</p> -->

        <!-- 培养目标 -->
        <div class="chinese-title target"></div>
        <p class="pCss">1911学堂国学院以中国传统文化为宏观框架和基本依托，传授中国古代文学的基础知识、专业理论和研究方法，从而提升学员的人文素养和洞察力，锻炼思维，锻造悟性，以胜任文化、宣传、新闻、出版、管理等相关工作。</p>
      </div>
      <div class="chinese-four">
        <!-- 师资来源 -->
        <div class="chinese-title teacher"></div>
        <p class="teacherText">本学院授课师资来自以下及其他相关单位</p>
        <div class="school">
          <img src="https://static-image.1911edu.com/college_BD.png" alt="">
          <img src="https://static-image.1911edu.com/college_BSD.png" alt="">
          <img src="https://static-image.1911edu.com/college_RD.png" alt="">
          <img src="https://static-image.1911edu.com/college_ZGDX.png" alt="">
          <img src="https://static-image.1911edu.com/college_ZGYYXY.png" alt="">

        </div>
        <!-- 考核认证 -->
        <div class="chinese-title test"></div>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员参加1911学堂国学院在线学院或相关项目学习，考核通过者将获得1911学堂结业证书。</span>
          </div>
          <div class="four-right">
            <img src="https://static-image.1911edu.com/chinese-pic5.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img src="https://static-image.1911edu.com/chinese-pic6.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentList: [
        "国学概论",
        "史学通论",
        "儒学文化",
        "道家智慧",
        "孙子兵法",
        "法家思想",
        "佛学精要",
        "易学概论",
        "中医养生",
        "民俗文化与民间信仰",
        "传统文化艺术鉴赏"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/chineseCollege";
</style>