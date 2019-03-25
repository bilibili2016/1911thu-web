<template>
  <div class="eduCollege">
    <div class="edu-banner"></div>
    <div class="edu-con">
      <div class="edu-one">
        <p class="pCss">
          随着《中国教育现代化2035》规划的出台，以及 “互联网+教育” 所带来影响的进一步深化，教育教学系统的结构和形态正在发生着变革与转型，这对互联网背景下的教育者能力和素质提出了越来越高的要求。
        </p>
        <p class="pCss">
          为助力教育系统相关从业人员加快知识更新、转变思维方式、提高决策能力、改善管理模式，为我国教育事业培养更多高素质的人才， 1911学堂联合教育领域权威专家共同研发了在线教育学院。
        </p>
        <p class="pCss">
          在线教育学院通过 “线上+线下” 的混合式教学服务，能够使中小学骨干教师创新教育理念，丰富教学方法，提升对教育教学活动的规划和实施能力；使校长及行政管理人员提高党建和教育管理水平，提升教育突发事件处置及应对能力。
        </p>
      </div>
      <div class="edu-two">
        <div class="two-con">
          <h4 class="edu-title">
            <span>面向人群</span>
          </h4>
          <div class="two-items clearfix">
            <div class="item">
              <div class="people-icon"><img src="http://static-image.1911edu.com/edu-icon6.png" alt=""></div>
              <div class="people-text">教育系统内的中小学校长</div>
            </div>
            <div class="item">
              <div class="people-icon"><img src="http://static-image.1911edu.com/edu-icon7.png" alt=""></div>
              <div class="people-text">骨干教师</div>
            </div>
            <div class="item">
              <div class="people-icon"><img src="http://static-image.1911edu.com/edu-icon8.png" alt=""></div>
              <div class="people-text">行政机构管理人员</div>
            </div>
          </div>
        </div>
      </div>

      <div class="eduWidth edu-three">
        <div class=" three-top">
          <h4 class="edu-title"><span>学习内容</span></h4>
          <div class=" three-items clearfix">
            <div class="item" v-for="(item,index) in contentList" :key="index">
              <i class="icon">{{1+index}}</i>
              <span>{{item}}</span>
            </div>
          </div>
          <div class="top-desc">
            <p class="pCss">1911学堂在线教育学院的课程内容注重理论联系实际，教学过程中有丰富的教学设计及交互活动，能够充分满足学员的学习需求，从而有效提高学员发现问题、分析问题和解决问题的能力，有利于实现个人与社会的双重目标。</p>
          </div>
        </div>
        <div class="three-middle">
          <h4 class="edu-title"><span>学习收获</span></h4>
          <div class="clearfix">
            <div class="middle-left"><img src="http://static-image.1911edu.com/edu-icon5.png" alt=""></div>
            <div class="middle-right">
              <p class="pCss">通过1911学堂在线教育学堂可以了解到互联网+时代下的课程体系、授课师资、培养目标、技术平台、学习模式、测评体系、考试系统、教学设施等发生的变化，以及互联网背景下基于社会需求的教育人才培养模式和管理方式等知识技能。</p>
            </div>
          </div>
        </div>
        <div class="three-bottom">
          <h4 class="edu-title"><span>考核认证</span></h4>
          <div class="three-text clearfix">
            <div class="three-left">
              <span class="circle"></span>
              <span class="text">学员参加1911学堂在线教育学院学习，学习结束后可申请参加相关考试，考核通过者将获得1911学堂结业证书。</span>
            </div>
            <div class="three-right">
              <img src="http://static-image.1911edu.com/college-pic13.png" alt>
            </div>
          </div>
          <div class="three-certification">
            <img src="http://static-image.1911edu.com/edu-icon4.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [
        "教育政策与宏观分析",
        "教学管理理论与实践",
        "领导艺术与个人素养",
        "校长素养提升专题",
        "中小学校园安全事故与预防",
        "前沿教育理念分享",
        "教学方法与策略",
        "教育管理的互联网思维",
        "科技创新与教育融合发展"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/eduCollege";
</style>