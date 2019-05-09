<template>
  <!-- 干部学院 -->
  <div class="cadreCollege">
    <div class="vipBanner"></div>
    <div class="container">
      <div class="intro">
        <p>1911学堂与清华大学社会科学学院成立科研课题，并聘请清华大学社会科学学院院长、心理学系系主任彭凯平教授担任专家组组长，并邀请30多位社会科学及公共管理领域的专家教授组成1911学堂干部学院专家组，共同研发干部学院课程体系。</p>
        <p>干部教育培训是干部队伍建设的先导性、基础性、战略性工程，在推进伟大事业、实现伟大梦想中具有不可替代的重要地位和作用。1911学堂干部学院，结合国家公共管理领域的发展方向，有针对性的研发系统化的课程体系，为各级党政机关与事业单位干部提供优质的课程资源，旨在培养新时代忠诚担当、底蕴深厚的高素质复合型干部人才，使之知识储备又博又专，既能科学决策又能统筹协调，既能把握大局又能勇于开拓。</p>
      </div>

      <div class="studyInfo">
        <h2 class="first">专家组组长</h2>
        <div class="group">
          <img src="https://static-image.1911edu.com/cadreCollege_teacher.png" alt="">
          <h4>彭凯平 教授</h4>
          <p>现任清华大学社会科学学院院长、心理学系系主任。毕业于北京大学心理学系后留校任教。获美国密歇根大学心理学博士学位，美国加州大学伯克利分校心理学及东亚研究终身教职，曾任加州大学社会及人格心理学专业主任和美国心理学会科学领导委员会成员等国际职务。至今已发表300多篇学术期刊论文，出版中英文著作8部，多次获得重要学术奖项。</p>
        </div>
        <div class="main">
          <div class="object">
            <span class="left">面向人群</span>
            <span class="right">各级各类党政机关与事业单位干部</span>
          </div>
          <div class="product">
            <h2>业务产品</h2>
            <div class="one-bottom">
              <div class="list">
                <div v-for="(item,index) in productList" :key="index">
                  <img :src="item.src" alt="">
                  <p>{{item.text}}</p>
                </div>
              </div>
              <div class="centerBar">
                <p>1911学堂干部学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的党政系统单位内训项目。</p>
              </div>
            </div>
          </div>
          <h2>培养目标</h2>
          <div class="columns">
            1911学堂干部学院的培养目标是培养新时代忠诚担当、底蕴深厚的高素质复合型干部。使之知识储备又博又专，做到既懂专业又懂管理，既能科学决策又能统筹协调，既能把握大局又能勇于开拓。
          </div>
        </div>
        <div class="study">
          <h2 class="studyH2">学习收获</h2>
          <ul>
            <li v-for="(item,index) in studyList" :key="index">
              <span>{{1+index}}</span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="main">
          <div class="college">
            <h2>师资来源</h2>
            <p>本学院授课师资来自以下及其他相关单位</p>
            <div class="collegeList">
              <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
            </div>
          </div>
          <h2>考核认证</h2>
          <div class="attestation clearfix">
            <div class="left">
              <span class="circle"></span>
              <span class="text">学员参加1911学堂干部学院在线学院或相关项目学习，考核通过者将获得1911学堂结业证书。</span>
            </div>
            <div class="right">
              <img src="https://static-image.1911edu.com/cadreCollege_icon2.png" alt>
            </div>
          </div>
          <div class="certification">
            <img src="https://static-image.1911edu.com/cadreCollege_certificate.png" alt>
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
      productList: [
        {
          src: "https://static-image.1911edu.com/production-cadre.png",
          text: "在线干部学院"
        },
        {
          src: "https://static-image.1911edu.com/production-icon1.png",
          text: "混合式标准项目"
        },
        {
          src: "https://static-image.1911edu.com/production-icon2.png",
          text: "公共管理硕士(MPA)"
        }
      ],
      studyList: [
        "夯实党政管理的专业知识",
        "树立把握全局的战略思维",
        "提高果断科学的决策能力",
        "增加勇于开拓的创新精神",
        "增强统筹协调的组织才能",
        "提升党政管理的人文素养"
      ],
      collegeList: [
        "https://static-image.1911edu.com/college_QH.png",
        "https://static-image.1911edu.com/college_BD.png",
        "https://static-image.1911edu.com/college_RD.png",
        "https://static-image.1911edu.com/college_SKY.png",
        "https://static-image.1911edu.com/college_ZKY.png",
        "https://static-image.1911edu.com/college_ZGDX.png"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "assets/style/college/cadreCollege";
</style>