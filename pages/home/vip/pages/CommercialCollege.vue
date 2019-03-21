<template>
  <div class="commercialCollege">
    <div class="commer-banner"></div>
    <div class="commer-con">
      <div class="commer-one">
        <div class="commerWidth">
          <div class=" one-top">
            <p class="pCss">
              如果认真观察，便会发现谷歌公司首席执行官 Sundar Pichai、微软公司首席执行官 Satya Nadella、百事公司首席执行官 Indra Nooyi 等知名公司的CEO大都毕业于 “商学院”。对身在职场的中高层管理者来说，接受商学院进阶教育的重要性不言而喻，因为如今的时代，需要既懂业务、又懂管理的复合型人才。
            </p>
            <p class="pCss">
              1911学堂在线商学院携手近百位来自清华大学、北京大学、国家发改委、国资委等权威机构的专家学者及智囊团队，整合经济、金融和企业管理等领域深厚的理论功底以及各行业领域丰富的实践经验，有针对性的研发具有实用性的课程体系，助力企业中高层管理人员实现个性化、阶梯式的成长，培养具备国际视野、擅于创新、能够适应客观环境变化的学习型企业经营管理者。
            </p>
          </div>
          <div class="one-center">
            <span class="left">面向人群</span>
            <span class="right">各级各类企业中高层管理人员</span>
          </div>
          <div class="one-bottom">
            <h4 class="college-title">
              <span>学习内容</span>
            </h4>
            <p class="pCss">1911学堂在线商学院的课程内容注重理论联系实际，教学过程中有丰富的教学设计及交互活动，能够充分满足学员的学习需求，从而有效提高学员发现问题、分析问题和解决问题的能力，有利于实现个人与社会的双重目标。</p>
          </div>
        </div>
      </div>
      <div class="commer-two">
        <div class="two-items clearfix">
          <div class="item" v-for="(item,index) in studyList" :key="index">
            <i>{{index+1}}</i>
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <div class="commer-three">
        <h4 class="college-title">
          <span>学习收获</span>
        </h4>
        <p class="pCss">通过1911学堂在线商学院课程的学习，学员们可以了解到金融，领导力与组织行为学，技术与运营管理，财务报告与控制，市场营销，创业型管理者，策略，商务、政府与全球化经济，领导力与企业责任等方面的知识和思维，逐渐进取成为优秀的管理者。</p>
      </div>
      <div class="commerWidth commer-four">
        <h4 class="college-title">
          <span>考核认证</span>
        </h4>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员参加1911学堂在线商学院学习，学习结束后可申请参加相关考试，考核通过者将获得清华大学相关部门颁发的认证证书及1911学堂结业证书。</span>
          </div>
          <div class="four-right">
            <img src="http://static-image.1911edu.com/college-pic13.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img src="http://static-image.1911edu.com/commer-pic4.png" alt>
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
        "宏观经济",
        "战略管理",
        "创新与转型",
        "财务管理",
        "人力资源管理",
        "市场营销",
        "资本运作",
        "国企改革",
        "创新创业"
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/college/commercialCollege";
</style>