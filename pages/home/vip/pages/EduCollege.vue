<template>
  <!-- 教育学院 -->
  <div class="eduCollege">
    <div class="edu-banner"></div>
    <div class="edu-con">
      <div class="edu-one">
        <p class="pCss">1911学堂教育学院在中国教育发展战略学会等权威机构的指导下，汇集了清华大学、北京大学、北京师范大学、复旦大学、中国传媒大学和哈佛大学、牛津大学、明尼苏达大学、多伦多大学等众多国内外著名高校的资深学者和各行业领军专家，并邀请担任过教育领域重要岗位、参与过国家重大教育决策、长期研究教育领域理论和实践的领导和专家担任顾问。</p>
        <p class="pCss">1911学堂教育学院主要面向全国普通高等学校，为学校管理干部和专业教师提供“线上+线下”的能力素养提升服务和人才赋能解决方案。作为《中国教育现代化2035》的践行者，1911学堂教育学院倡导产教融合、校企合作，致力于服务国家“加快教育现代化”和“建设教育强国”的重大战略部署。</p>
        <div class="object">
            <span class="left">面向人群</span>
            <span class="right">全国普通高等学校的行政管理干部和专业骨干教师</span>
          </div>
      </div>
      <div class="edu-two">
        <div class="two-con">
          <h4 class="edu-title">
            <span>业务产品</span>
          </h4>
          <p class="proText"><em>1</em>为全国普通高等学校的行政干部和专业教师，提供高教和职教两个版块的综合类或专题类线上线下培训</p>
          <p class="proText"><em>2</em>与全国普通高等学校共建培训中心，面向当地教育系统、企事业单位开展线上线下培训</p>
          <p class="proText"><em>3</em>打造三亚国际教育峰会，邀请政府、专家学者和中外教育机构共同研讨高教和职教领域的热点议题</p>
          <!-- <div class="two-items clearfix">
            <div class="item" v-for="(item,index) in objectList" :key="index">
              <div class="people-icon">
                <img :src="item.src" alt=""></div>
              <div class="people-text">{{item.text}}</div>
            </div>

          </div> -->
        </div>
      </div>
      <!-- <div class="product">
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
          1911学堂教育学院的培养目标是培养具有良好职业素养和较高业务能力、适应教育事业发展需求的教育管理人才队伍。通过“线上+线下”混合式学习模式，使中小学骨干教师创新教育教学理念、提升教学能力、丰富教学方法，提升对教育教学活动的规划和实施能力；使校长及行政管理人员提高党建和教育管理水平及教育突发事件舆情应对能力，从而助力教育系统相关从业人员适应环境变化、跟上新时代的发展步伐。
        </div>
      </div> -->

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
              <span class="text">学员参加1911学堂教育学院在线学院或相关项目学习考核通过者将获得1911学堂认证证书。</span>
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
  data () {
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
        // {
        //   src: "https://static-image.1911edu.com/edu-icon1.png",
        //   text: "大中小学生"
        // },
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
        // {
        //   src: "https://static-image.1911edu.com/production-icon3.png",
        //   text: "研学项目"
        // },
        // {
        //   src: "https://static-image.1911edu.com/production-icon4.png",
        //   text: "学分认证项目"
        // }
      ],
      collegeList: [
        "https://static-image.1911edu.com/academy_JYB.png",
        "https://static-image.1911edu.com/academy_JSB.png",
        "https://static-image.1911edu.com/academy_ZGDX.png",
        "https://static-image.1911edu.com/academy_QH.png",
        "https://static-image.1911edu.com/academy_BD.png",
        "https://static-image.1911edu.com/academy_BSD.png",
        "https://static-image.1911edu.com/academy_FD.png",
        "https://static-image.1911edu.com/academy_CM.png",
        "https://static-image.1911edu.com/academy_HF.png",
        "https://static-image.1911edu.com/academy_NJ.png",
        "https://static-image.1911edu.com/academy_MNSD.png",
        "https://static-image.1911edu.com/academy_DLD.png",
        // "https://static-image.1911edu.com/college_HDWYH.png"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/eduCollege";
</style>