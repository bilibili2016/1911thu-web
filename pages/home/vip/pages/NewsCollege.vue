<template>
  <!-- 新闻学院 -->
  <div class="newsCollege">
    <div class="news-banner"></div>
    <div class="news-con">
      <div class="newsWidth news-one">
        <p class="pCss">1911学堂与中国传媒大学媒介与公共事务研究院成立科研课题，并聘请中国传媒大学媒介与公共事务研究院学术委员会主任董关鹏教授担任专家组组长，专家组组长邀请30名左右新闻传播领域专家组成1911学堂新闻传播学院专家组，共同研发新闻传播学院课程体系。</p>
        <p class="pCss">媒介生态和传播技术的持续发展，带来了新闻传播行业的快速变革。近年来，“全媒”、“融媒”已经向“智媒”、“浸媒”升级迭代，智能化大潮正以迅猛之势影响着新闻传播行业的方方面面，传媒人需要不断领悟、适应、创造新的行业文化与发展模式。</p>
        <p class="pCss">为助力新闻传播领域从业人员探索、顺应智媒时代变局， 1911学堂新闻传播学院秉承“素质为本、实践为用”的教学理念，有针对性的研发系统化的课程体系，提供多层次、高质量的数字化课程资源，培养兼备理论素养与实践经验的复合型人才。</p>
      </div>
      <div class="news-two">
        <h4 class="news-title">专家组组长</h4>
        <div class="two-text">
          <div class="newsWidth two-inner clearfix">
            <div class="img two-left"><img src="https://static-image.1911edu.com/newsCo-icon2.png" alt=""></div>
            <div class="two-right">
              <div class="professor">董关鹏 教授</div>
              <div class="intro">资深公共关系学者。先后毕业于北京大学、剑桥大学和杜伦大学，在清华大学、哈佛大学执教和从事研究十余年。现任中国公共关系协会副会长、常务理事，中国传媒大学教授、博士生导师、媒介与公共事务研究院院长、培训学院院长。兼任国务院新闻办公室新闻发布评估专家小组成员、国务院食品安全委员会专家委员会委员、国家核应急专家委员会委员、国家行政学院兼职教授、中央社会主义学院客座教授、最高人民法院司法传播特聘专家、最高人民检察院中国检察官学院兼职教授等。</div>
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
          <div class="centerBar">
            <p>1911学堂新闻传播学院依据各单位提出的具体学习需求，形成定制式、个性化、针对性的新闻系统单位内训项目。</p>
          </div>
        </div>
      </div>
      <div class="news-four">
        <h4 class="news-title">培养目标</h4>
        <div class="four-middle">
          1911学堂新闻传播学院旨在全面助力新闻传播领域相关的党政机关与企事业单位人员完善知识结构、提升认知水平、适应环境变化、跟上新时代的发展步伐，培养兼备理论素养与实践经验的复合型人才。
        </div>
      </div>
      <div class="college">
        <h4 class="news-title">师资来源</h4>
        <p>本学院授课师资来自以下及其他相关单位</p>
        <div class="collegeList">
          <img class="oneImg" v-for="(li,index) in collegeList" :key="index" :src="li" alt="">
        </div>
      </div>
      <div class="news-five">
        <h4 class="news-title">考核认证</h4>
        <div class="four-text clearfix">
          <div class="four-left">
            <span class="circle"></span>
            <span class="text">学员参加1911学堂新闻传播学院在线学院或相关项目学习，考核通过者将获得1911学堂结业证书。</span>
          </div>
          <div class="four-right">
            <img src="https://static-image.1911edu.com/college-pic13.png" alt>
          </div>
        </div>
        <div class="four-certification">
          <img src="https://static-image.1911edu.com/newsCo-icon8.png" alt>
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
          src: 'https://static-image.1911edu.com/production-news.png',
          text: '线新闻传播学院'
        },
        {
          src: 'https://static-image.1911edu.com/production-icon1.png',
          text: '混合式标准项目'
        },
        {
          src: 'https://static-image.1911edu.com/production-icon2.png',
          text: '新闻与传播硕士（MJC）国际学位项目'
        },
      ],
      objectList: [
        {
          src: 'https://static-image.1911edu.com/newsCo-icon3.png',
          text: '国家党政机关领导干部'
        },
        {
          src: 'https://static-image.1911edu.com/newsCo-icon4.png',
          text: '企事业单位中高层管理者与基层骨干'
        },
        {
          src: 'https://static-image.1911edu.com/newsCo-icon5.png',
          text: '各类传媒组织与社会机构'
        },
      ],
      collegeList: [
        'https://static-image.1911edu.com/college_QH.png',
        'https://static-image.1911edu.com/college_CD.png',
        'https://static-image.1911edu.com/college_RD.png',
        'https://static-image.1911edu.com/college_ZZF.png',
        'https://static-image.1911edu.com/college_RSYJY.png',
        'https://static-image.1911edu.com/college_ZGDX.png',
        'https://static-image.1911edu.com/college_ZSCQ.png',
        'https://static-image.1911edu.com/college_GJBQ.png',
      ]
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/newsCollege";
</style>