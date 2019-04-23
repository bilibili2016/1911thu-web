<template>
  <!-- 教育学院 -->
  <div class="eduCollege">
    <div class="edu-banner"></div>
    <div class="edu-con">
      <div class="edu-one">
        <p class="pCss">随着《中国教育现代化2035》规划的出台，教育教学系统的结构和形态正在发生着变革与转型，这对当今时代教育者的能力和素质提出了越来越高的要求。</p>
        <p class="pCss">为助力教育系统相关从业人员加快知识更新、转变思维方式、提高决策能力、改善管理模式，为我国教育事业培养更多高素质的人才，1911学堂联合教育领域权威专家共同研发了1911学堂教育学院，使中小学骨干教师创新教育理念，丰富教学方法，提升对教育教学活动的规划和实施能力；使校长及行政管理人员提高党建和教育管理水平，提升教育突发事件处置及应对能力。</p>
        <p class="pCss">同时，为了助力大中小学生全面成长，教育学院还研发了面向中小学生的研学项目以及大学生学分认证项目。</p>
      </div>
      <div class="edu-two">
        <div class="two-con">
          <h4 class="edu-title">
            <span>面向人群</span>
          </h4>
          <div class="two-items clearfix">
            <div class="item" v-for="(item,index) in objectList" :key="index">
              <div class="people-icon">
                <img :src="item.src" alt=""></div>
              <div class="people-text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <h4 class="edu-title">
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
            <p>1911学堂教育学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的教育系统单位内训项目。</p>
          </div>
        </div>
      </div>
      <div class="target">
        <h4 class="edu-title">
          <span>培养目标</span>
        </h4>
        <div class="centerBar">
          1911学堂教育学院的培养目标是培养具备开阔视野、良好素养且努力践行社会主义核心价值观的学生和教育从业者。使中小学生感受高尚精神文化，增强综合素养，实现更好的全面成长；使大学生丰富学识、提升知识的应用和创新能力，提升社会适应能力，具备未来胜任力；使中小学骨干教师更新教育理念、提升教学能力、丰富教学方法，提升对教育教学活动的规划和实施能力；使校长及行政管理人员提高党建和教育管理水平，提高教育综合治理能力，适应环境变化、跟上新时代的发展步伐。
        </div>
      </div>

      <div class="eduWidth edu-three">
        <div class="college">
          <h4 class="edu-title"><span>师资来源</span></h4>
          <p>本学院授课师资来自以下及其他相关单位</p>
          <div class="collegeList">
            <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
          </div>
        </div>
        <div class="three-bottom">
          <h4 class="edu-title"><span>考核认证</span></h4>
          <div class="three-text clearfix">
            <div class="three-left">
              <span class="circle"></span>
              <span class="text">学员参加1911学堂教育学院在线学院或相关项目学习考核通过者将获得1911学堂结业证书。</span>
            </div>
            <div class="three-right">
              <img src="https://static-image.1911edu.com/college-pic13.png" alt>
            </div>
          </div>
          <div class="three-certification">
            <img src="https://static-image.1911edu.com/edu-icon4.png" alt>
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
      ],
      objectList: [
        {
          src: "https://static-image.1911edu.com/edu-icon1.png",
          text: "大中小学生"
        },
        {
          src: "https://static-image.1911edu.com/edu-icon6.png",
          text: "教育系统内的中小学校长"
        },
        {
          src: "https://static-image.1911edu.com/edu-icon7.png",
          text: "骨干教师"
        },
        {
          src: "https://static-image.1911edu.com/edu-icon8.png",
          text: "行政机构管理人员"
        }
      ],
      productList: [
        {
          src: "https://static-image.1911edu.com/production-edu.png",
          text: "在线教育学院"
        },
        {
          src: "https://static-image.1911edu.com/production-icon1.png",
          text: "混合式标准项目"
        },
        {
          src: "https://static-image.1911edu.com/production-icon2.png",
          text: "教育硕士（MEd）国际学位项目"
        },
        {
          src: "https://static-image.1911edu.com/production-icon3.png",
          text: "研学项目"
        },
        {
          src: "https://static-image.1911edu.com/production-icon4.png",
          text: "学分认证项目"
        }
      ],
      collegeList: [
        "https://static-image.1911edu.com/college_QH.png",
        "https://static-image.1911edu.com/college_BSD.png",
        "https://static-image.1911edu.com/college_JYKY.png",
        "https://static-image.1911edu.com/college_JYXH.png",
        "https://static-image.1911edu.com/college_HDWYH.png"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/eduCollege";
</style>