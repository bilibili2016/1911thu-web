<template>
  <!-- 干部学院 -->
  <div class="cadreCollege">
    <div class="vipBanner"></div>
    <div class="container">
      <div class="intro">
        <p>干部教育培训是传播党的理论和路线方针政策的重要载体，“互联网+干部教育培训” 作为传统课堂教育的延伸，也是现代新技术、新理念结合形成的新模式。通过数字化、网络化全方位整合各单位资源，可以为学员提供丰富优质的课程资源，促进干部教育教学内容改革与创新。</p>
        <p>结合国家公共管理领域的发展方向，1911学堂携手清华大学、中央党校（国家行政学院）等多所全球知名院校的顶级专家和资深教授，以及政策制定和政策研究智囊专家，成立了在线干部学院，有针对性的研发系统化的课程体系，为各级党政机关与事业单位干部提供全球最优质的数字化课程资源，旨在培养新时代忠诚担当、底蕴深厚的高素质复合型干部人才，使之知识储备又博又专，既能科学决策又能统筹协调，既能把握大局又能勇于开拓。</p>
      </div>
      <div class="studyInfo">
        <div class="main">
          <div class="object">
            <span class="left">面向人群</span>
            <span class="right">各级各类党政机关与事业单位干部</span>
          </div>
          <h2>学习内容</h2>
          <ul class="study">
            <li v-for="(item,index) in studyList" :key="index">
              <span>{{1+index}}</span>
              <span>{{item}}</span>
            </li>

          </ul>
          <div class="columns">
            1911学堂在线干部学院的课程内容注重理论联系实际，教学过程中有丰富的教学设计及交互活动，能够充分满足学员的学习需求，从而有效提高学员发现问题、分析问题和解决问题的能力，有利于实现个人与社会的双重目标。
          </div>
          <h2>学习收获</h2>
          <p class="harvest">通过参加1911学堂在线干部学院课程，学习者可以夯实党政管理的专业知识；提高果断科学的决策能力；增强统筹协调的组织才能，树立把握全局的战略思维，增加勇于开拓的创新精神，提升党政管理的人文素养。</p>
          <h2>考核认证</h2>
          <div class="attestation clearfix">
            <div class="left">
              <span class="circle"></span>
              <span class="text">学员学习结束后可申请参加相关考试，考试通过者可获得1911学堂结业证书。</span>
            </div>
            <div class="right">
              <img src="http://static-image.1911edu.com/cadreCollege_icon2.png" alt>
            </div>
          </div>
          <div class="certification">
            <img src="http://static-image.1911edu.com/cadreCollege_certificate.png" alt>
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
      studyList: [
        "履职能力课程",
        "领导艺术",
        "宏观政策解读",
        "社会治理与法治法规",
        "区域发展",
        "应急管理",
        "一带一路与国际形势",
        "农业发展与乡村振兴",
        "军民融合",
        "文化与养生",
        "绿色经济",
        "新兴技术"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "assets/style/college/cadreCollege";
</style>