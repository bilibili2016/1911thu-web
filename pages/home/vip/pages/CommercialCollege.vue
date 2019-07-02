<template>
  <!-- 商学院 -->
  <div class="commercialCollege">
    <div class="commer-banner"></div>
    <div class="commer-con">
      <div class="commer-one">
        <div class="commerWidth">
          <div class=" one-top">
            <p class="pCss">
              优秀的企业管理人员对于中国企业发展和经济发展起着至关重要的作用，面对新时代中国经济发展的新形势和新目标，1911学堂商学院以企业战略和人才开发为核心，聘请清华大学、北京大学、国家发改委、国资委等权威机构的专家学者及智囊团队担任学院导师，借助人工智能技术整合教育、科研、产业、资本及合作伙伴等多方优质资源，与经济、金融和企业管理等领域有深厚理论功底的专家教授，以及在各行业领域具有丰富实践经验的业界翘楚等共同研发学院课程。
            </p>
            <p class="pCss">
              1911学堂商学院旨在培养具备国际视野、勇于创新、能够适应客观环境变化的学习型企业经营管理者，使之具备完善的知识结构和岗位胜任能力，具备解决企业实际经营管理问题的能力，能够经得起风浪考验，适应新时代中国特色社会主义市场经济，推进供给侧结构性改革，实现企业的高质量、高效益发展。
            </p>
            <p class="pCss">
              1911学堂商学院通过“人才测评+混合培训+行为跟进+咨询服务+产业投资”完整的链条式解决方案，为全球企业中高层管理者及职场精英提供线上、线下相结合的教育培训与咨询服务，助力企业中高层管理人员实现个性化、阶梯式的成长，并打造“产学研资合” 一体的生态系统，致力于成为能够让企业家获得归属感和认同感的一流商学院。
            </p>
          </div>
          <div class="one-center">
            <span class="left">面向人群</span>
            <span class="right">各级各类企业中高层管理人员</span>
          </div>
          <h4 class="commer-title">
            <span>业务产品</span>
          </h4>
          <div class="one-bottom">
            <div class="list">
              <div v-for="(item,index) in productList" :key="index">
                <img :src="item.src" alt="">
                <p>{{item.text}}</p>
              </div>
            </div>
            <div class="centerBar">
              <p>1911学堂商学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的企业单位内训项目。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="commer-three">
        <h4 class="commer-title">
          <span>培养目标</span>
        </h4>
        <p class="pCss">1911学堂商学院的培养目标是培养具备国际视野、勇于创新、能够适应客观环境变化的学习型企业经营管理者。使之具备完善的知识结构和岗位胜任能力，具备解决企业实际经营管理问题的能力，能够经得起风浪考验，适应新时代中国特色社会主义市场经济，推进供给侧结构性改革，实现企业的高质量、高效益发展。</p>
      </div>
      <div class="commer-two">
        <h5>
          学习收获
        </h5>
        <div class="two-items clearfix">
          <div class="item" v-for="(item,index) in studyList" :key="index">
            <i>{{index+1}}</i>
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <div class="teacher">
        <h4 class="commer-title">
          <span>师资来源</span>
        </h4>
        <p>本学院授课师资来自以下及其他相关单位</p>
        <div class="collegeList">
          <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
        </div>
      </div>

      <div class="commerWidth commer-four">
        <h4 class="commer-title">
          <span>考核认证</span>
        </h4>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员参加1911学堂商学院在线学院或相关项目学习，考核通过者将获得1911学堂认证证书。</span>
          </div>
          <div class="four-right">
            <img src="https://static-image.1911edu.com/college-pic13.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img src="https://static-image.1911edu.com/commer-pic4.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      productList: [
        {
          src: "https://static-image.1911edu.com/production-commer.png",
          text: "在线商学院"
        },
        {
          src: "https://static-image.1911edu.com/production-icon1.png",
          text: "混合式标准项目"
        },
        {
          src: "https://static-image.1911edu.com/production-icon2.png",
          text: "工商管理硕士(MBA)"
        }
      ],
      studyList: [
        "夯实企业管理的专业知识",
        "树立把握全局的战略思维",
        "提高果断科学的决策能力",
        "增加勇于开拓的创新精神",
        "增强统筹协调的组织才能",
        "提升企业领导的人文素养"
      ],
      collegeList: [
        "https://static-image.1911edu.com/academy_QH.png",
        "https://static-image.1911edu.com/academy_BD.png",
        "https://static-image.1911edu.com/academy_ZZF.png",
        "https://static-image.1911edu.com/academy_RSKXY.png",
        "https://static-image.1911edu.com/academy_ZKY.png",
        "https://static-image.1911edu.com/academy_GJFGW.png"
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/college/commercialCollege";
</style>