<template>
  <div class="collegeIndex">
    <div class="vipBanner"></div>
    <div class="con">
      <div class="" ref="collegeList">
        <div :class="{fixed:isFixed,collegeList:true}">
          <ul>
            <li :class="{checked:liChecked == item.en_title}" v-for="(item,index) in collegeData" :key="index" @click="handleLiClick(item)">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <div class="item" v-for="(item,index) in collegeData" :key="'item'+index" :id="item.en_title" @click="linkTo(item)">
        <div class="left">
          <div class="title">{{item.title}}</div>
        </div>
        <div class="right">
          <div class="rightInner" v-if="item.en_title=='cadreCollege'">
            <div class="cadreItem">
              <ul>
                <li style="cursor:pointer" @click.stop="handleLink('/home/core/pages/personEval',true)"><span class="itemLeft">学习与职业测评</span><span class="itemRight">进入测评> </span></li>
                <li style="cursor:default" @click.stop="handleLink('',false)"> <span class="itemLeft">线上精品大师课</span><span class="itemRight">查看全部> </span></li>
                <li style="cursor:pointer" @click.stop="handleLink('/other/activePages/Institutional',true)"><span class="itemLeft">单位定制内训项目</span><span class="itemRight">查看详情> </span></li>
                <li style="cursor:default" @click.stop="handleLink('',false)"><span class="itemLeft">国际认证系列项目</span><span class="itemRight">查看详情> </span></li>
              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='commercialCollege'">
            <div class="cadreItem">
              <ul>
                <li style="cursor:pointer" @click.stop="handleLink('/home/core/pages/personEval',true)"><span class="itemLeft">学习与职业测评</span><span class="itemRight">进入测评> </span></li>
                <li style="cursor:default" @click.stop="handleLink('',false)"><span class="itemLeft">线上精品大师课</span><span class="itemRight">查看全部> </span></li>
                <li style="cursor:default" @click.stop="handleLink('',false)"><span class="itemLeft">国际认证系列项目</span><span class="itemRight">查看详情> </span></li>
                <li style="cursor:pointer" @click.stop="handleLink('/other/activePages/Institutional',true)"><span class="itemLeft">单位定制内训项目</span><span class="itemRight">查看详情> </span></li>
              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='sportsCollege'">
            <div class="cadreItem">
              <ul>
                <li>
                  <p class="text">大师讲堂与专家智库</p>
                  <p class="desc">整合清华大学、北京大学、北京体育大学、首都体育学院、北京师范大学等高校、体育协会、体育产业专家导师互动交流</p>
                </li>
                <li>
                  <p class="text">问题导向与内容服务</p>
                  <p class="desc">为体育系统领导干部、体育产业从业者、运动员、教练员、体育教师等群体对接专家资源、教学资源和实践机会。</p>
                </li>
                <li>
                  <p class="text">重点推荐与热点前瞻</p>
                  <p class="desc">整合清华大学、北京大学、北京体育大学、首都体育学院、北京师范大学等高校、体育协会、体育产业专家导师互动交流。</p>
                </li>

              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='eduCollege'">
            <div class="cadreItem">
              <ul>
                <li>中国教育发展战略学会教育大数据专业委员会等权威机构指导</li>
                <li>为全国普通高等学校，提供高教和职教两个版块的行政干部和专业教师的综合类或专题类线上线下培训</li>
                <li>与全国普通高等学校共建培训中心，面向当地教育系统、企事业单位开展线上线下培训</li>
                <li>打造三亚教育国际峰会，邀请政府、专家学者和中外教育机构共同研讨高教和职教领域的热点议题</li>
              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='smartCollege'">
            <div class="cadreItem">
              <div class="top">AI培训解决方案 | 助力领跑智能时代</div>
              <ul>
                <li>
                  <p class="text">
                    名师 清华大学孙富春教授领衔 点拨您的AI难题
                  </p>
                  <p class="desc">
                    为大中型企业制订个性化课程内容，提供全程导师服务，打造系统性的教育培训方案。
                  </p>
                </li>
                <li>
                  <p class="text">
                    讲堂 业界大咖带您纵览热点 智动全球
                  </p>
                  <p class="desc">
                    “人工智能讲堂”、“IEEE fellow讲堂”、“名师高端对话访谈”传递热点和前沿AI知识。
                  </p>
                </li>

              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='healthCollege'">
            <div class="cadreItem">
              <div class="top">专注健康人才教育与培养</div>
              <ul>
                <li>系统化/定制化培训</li>
                <li>企业咨询</li>
                <li>前沿技术转化</li>
                <li>大众科普</li>
              </ul>
            </div>
          </div>
          <div class="rightInner" v-if="item.en_title=='chineseCollege'">
            <p class="top">清华学子一对一 · 知识与经验分享 · 学业咨询 · 生涯规划</p>

          </div>
          <div class="rightInner" v-if="item.en_title=='newsCollege'">
            <div class="top">名师荟萃 百家齐鸣</div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { home } from "~/lib/v1_sdk/index";
import { setTitle } from "@/lib/util/helper";

export default {
  data () {
    return {
      scrollTop: '',
      isFixed: false,
      collegeData: [],
      liChecked: 'cadreCollege',
      obj: {}
    }
  },
  methods: {
    handleLink (url, flag) {
      if (!flag) {
        return false
      }
      this.$router.push(url)
    },
    linkTo (item) {
      this.$router.push({
        path: "/home/vip/collegeInfo",
        query: {
          id: item.id,
          cid: item.category_id,
          title: item.en_title
        }
      });
    },
    handleLiClick (item) {
      this.liChecked = item.en_title
      let top = 420 + document.getElementById('' + item.en_title).offsetTop
      window.scrollTo({
        top: top,
        behavior: "smooth"
      })
    },
    // 学院列表
    vipGoodsList () {
      home.vipGoodsList().then(response => {
        if (response.status === 0) {
          this.collegeData = response.data.vipGoodsList;
        }
      });
    },
    addClass () {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (this.scrollTop > 420) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
      let that = this
      for (var i = 0; i < this.collegeData.length; i++) {
        (function (i) {
          let offsetTop = document.querySelector('#' + that.collegeData[i].en_title).offsetTop
          let nextTop
          if (i == 0) {
            if (that.scrollTop < document.querySelector('#' + that.collegeData[i + 1].en_title).offsetTop) {
              that.liChecked = that.collegeData[i].en_title
            }
          } else if (i == that.collegeData.length - 1) {
            nextTop = document.body.clientHeight
            if (that.scrollTop >= offsetTop) {
              that.liChecked = that.collegeData[i].en_title
            }
          } else {
            nextTop = document.querySelector('#' + that.collegeData[i + 1].en_title).offsetTop
            if (that.scrollTop >= offsetTop && that.scrollTop < nextTop) {
              that.liChecked = that.collegeData[i].en_title
            }
          }

        })(i);
      }
      // if (this.scrollTop < this.obj.commercialCollegeTop) {
      //     this.liChecked = 'cadreCollege'
      // }
      // if (this.scrollTop >= this.obj.commercialCollegeTop && this.scrollTop < this.obj.sportsCollegeTop) {
      //     this.liChecked = 'commercialCollege'
      // }
      // if (this.scrollTop > this.obj.sportsCollegeTop && this.scrollTop <= this.obj.eduCollegeTop) {
      //     this.liChecked = 'sportsCollege'
      // }
      // if (this.scrollTop > this.obj.eduCollegeTop && this.scrollTop <= this.obj.smartCollegeTop) {
      //     this.liChecked = 'eduCollege'
      // }
      // if (this.scrollTop > this.obj.smartCollegeTop && this.scrollTop <= this.obj.healthCollegeTop) {
      //     this.liChecked = 'smartCollege'
      // }
      // if (this.scrollTop > this.obj.healthCollegeTop && this.scrollTop <= this.obj.chineseCollegeTop) {
      //     this.liChecked = 'healthCollege'
      // }
      // if (this.scrollTop > this.obj.chineseCollegeTop && this.scrollTop <= this.obj.newsCollegeTop) {
      //     this.liChecked = 'chineseCollege'
      // }
      // if (this.scrollTop >= this.obj.newsCollegeTop) {
      //     this.liChecked = 'newsCollege'
      // }

    }
  },
  head () {
    return {
      title: "八大学院_名校教授培训_学院入口-1911学堂",
      meta: [
        { hid: 'keywords', name: 'keywords', content: '人工智能，商学院，干部培训，k12，大健康，新闻传播，体育培训，终身教育培训' }
      ]
    }
  },
  mounted () {
    window.addEventListener("scroll", this.addClass);
    this.vipGoodsList()
  }
}
</script>


<style scoped lang="scss">
@import "~assets/style/college/collegeIndex.scss";
</style>