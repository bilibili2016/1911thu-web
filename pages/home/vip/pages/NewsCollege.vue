<template>
  <!-- 新闻学院 -->
  <div class="newsCollege">
    <div class="news-banner"></div>
    <div class="news-con">
      <div class="newsWidth news-one">
        <p class="pCss">媒介生态和传播技术的持续发展，带来了新闻传播行业的快速变革。近年来，“全媒”、“融媒”已经向“智媒”、“浸媒”升级迭代，智能化大潮正以迅猛之势影响着新闻传播行业的方方面面，传媒人需要不断领悟、适应、创造新的行业文化与发展模式。</p>
        <p class="pCss">为助力新闻传播领域从业人员探索、顺应智媒时代变局，1911学堂新闻传播学院携手政府新闻工作主管领导、知名高校教授以及业界资深专家，打造了强大的师资阵容，秉承“素质为本、实践为用”的教学理念，致力于培养理论素养与实践经验兼备的复合型人才。</p>
        <p class="pCss">为了更好地探索互联网背景下新闻传播人才培养的新模式，1911学堂新闻传播学院成立了新闻实务、政府传播及企业传播三大专家组，由新闻传播领域知名专家董关鹏教授担任总组长，为学员研发系统化的教学体系与高质量的在线课程。</p>
        <p class="pCss">1911学堂新闻传播学院课程主要面向政府机关及企事业单位领导干部、新闻传播领域一线从业者、高校师生等人群，内容涵盖媒介素养、媒体沟通、战略传播、舆论引导能力、媒体融合发展与转型升级、 品牌建设与推广、公共关系、危机处置等多个方面。</p>
      </div>
      <div class="news-two">
        <h4 class="news-title">专家组组长</h4>
        <div class="two-text">
          <div class="newsWidth two-inner clearfix">
            <div class="img two-left"><img src="https://static-image.1911edu.com/newsCo-icon2.png" alt=""></div>
            <div class="two-right">
              <div class="professor">董关鹏教授、博士</div>
              <div class="intro">
                <p>政治传播学者、企业传播顾问和“临床型”公共关系专家。先后获得北京大学国际政治系外交学与外事管理专业法学学士、谢菲尔德大学新闻学系政治传播专业文科硕士、剑桥大学国土经济学系发展经济学专业哲学硕士和杜伦大学东亚研究系国际关系专业哲学博士。此后在媒体一线和政府工作，并在清华大学、哈佛大学执教和从事研究十余年。</p>
                <p>现任中国传媒大学教授、博士生导师，继续教育学部学部长、培训学院院长、全国领导干部媒介素养培训基地主任和媒介与公共事务研究院学术委员会主任等。</p>
                <p>研究专长为：公共关系与战略传播实务、媒介与公共事务、企业传播、危机传播和领导者公信力综合研究等。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-three">
        <h4 class="news-title">面向人群</h4>
        <div class="three-items clearfix">
          <div class="item" v-for="(item,index) in objectList" :key="index">
            <div class="people-icon"><img :src="item.src" alt=""></div>
            <div class="people-text">{{item.text}}</div>
          </div>
        </div>
      </div>
      <div class="product">
        <h4 class="news-title">业务产品</h4>
        <div class="one-bottom">
          <div class="list">
            <div v-for="(item,index) in productList" :key="index">
              <img :src="item.src" alt="">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- <div class="centerBar">
            <p>1911学堂新闻传播学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的新闻系统单位内训项目。</p>
          </div> -->
        </div>
      </div>
      <!-- <div class="news-four">
        <h4 class="news-title">培养目标</h4>
        <div class="four-middle">
          1911学堂新闻传播学院旨在全面助力新闻传播领域相关的党政机关与企事业单位人员完善知识结构、提升认知水平、适应环境变化、跟上新时代的发展步伐，培养兼备理论素养与实践经验的复合型人才。
        </div>
      </div> -->
      <div class="college">
        <h4 class="news-title">师资来源</h4>
        <p>本学院授课师资来自以下及其他相关单位</p>
        <div class="collegeList">
          <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
        </div>
      </div>
      <!-- <div class="news-five">
        <h4 class="news-title">考核认证</h4>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员参加1911学堂新闻传播学院在线学院或相关项目学习，考核通过者将获得1911学堂认证证书。</span>
          </div>
          <div class="four-right">
            <img src="https://static-image.1911edu.com/college-pic13.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img src="https://static-image.1911edu.com/newsCo-icon8.png" alt>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [
        {
          src: 'https://static-image.1911edu.com/healthCollege-proIcon1.png',
          text: '新闻传播大师课'
        },
        {
          src: 'https://static-image.1911edu.com/healthCollege-proIcon2.png',
          text: '新闻传播微课堂'
        }
      ],
      objectList: [
        {
          src: 'https://static-image.1911edu.com/newsCo-icon3.png',
          text: '政府机关及企事业单位领导干部'
        },
        {
          src: 'https://static-image.1911edu.com/newsCo-icon4.png',
          text: '新闻传播领域一线从业者'
        },
        {
          src: 'https://static-image.1911edu.com/newsCo-icon5.png',
          text: '高校新闻传播相关专业师生'
        },
      ],
      collegeList: [
        "https://static-image.1911edu.com/academy_CM.png",
        "https://static-image.1911edu.com/academy_QH.png",
        "https://static-image.1911edu.com/academy_BD.png",
        "https://static-image.1911edu.com/academy_RD.png",
        "https://static-image.1911edu.com/academy_XWB.png",
        "https://static-image.1911edu.com/academy_GFB.png",
        "https://static-image.1911edu.com/academy_GAB.png",
        "https://static-image.1911edu.com/academy_TDB.png",
        "https://static-image.1911edu.com/academy_CJW.png",
        "https://static-image.1911edu.com/academy_YJJ.png",
        "https://static-image.1911edu.com/academy_RMZF.png",
        "https://static-image.1911edu.com/academy_HBJ.png",
        "https://static-image.1911edu.com/academy_XXH.png",
        "https://static-image.1911edu.com/academy_XHS.png",
        "https://static-image.1911edu.com/academy_XWS.png",
        "https://static-image.1911edu.com/academy_ZGSH.png"

      ]
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/newsCollege";
</style>