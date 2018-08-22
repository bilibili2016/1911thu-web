<template>
  <div class="allInfo">
    <div :class="{ topImg: true, topFixed:istopFixed, topRelative:istopRelative}" ref="topImg">
      <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic5.png" alt="">
      <div class="top-text">
        <h1 class="top-h1">1911学堂</h1>
        <p class="top-desc">源自清华、面向世界，集聚清华大学、北京大学等国内外知名高校师资， 为党政干部与企事业单位高管提供与时俱进的终身教育解决方案。
        </p>
        <div class="top-button" @click="handleScroll">
          填写联系方式，免费申请课程体验。
          <span class="right" ref="rgihtGo">GO</span>
        </div>
      </div>
    </div>
    <div :class="{topBottom:istopBottom}" ref="topBottom">
      <div class="why">
        <h3>为什么选择1911学堂</h3>
        <div class="why-con clearfix">
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic25.png" alt="">
            </div>
            <p class="item-desc1">雄厚的师资力量</p>
            <span class="item-line"></span>
            <p class="item-desc2">集聚清华大学等国内外知名大学学者教授、各领域精英联合授课。</p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic26.png" alt="">
            </div>
            <p class="item-desc1">与时俱进的系统化创新课程体系</p>
            <span class="item-line"></span>
            <p class="item-desc2">理论学习与经典实践案例相结合，权威、实战、实用，以解决问题为导向。
            </p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic27.png" alt="">
            </div>
            <p class="item-desc1">线上+线下自由组合的学习模式</p>
            <span class="item-line"></span>
            <p class="item-desc2">基于大数据分析的个性化学习，线上、线下多种 学习模式可供选择，安排灵活。
            </p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic28.png" alt="">
            </div>
            <p class="item-desc1">清华认证证书</p>
            <span class="item-line"></span>
            <p class="item-desc2">完成课程学习并通过相应考核后，可获得清华大 学及相关合作单位认证证书。
            </p>
          </div>
        </div>
      </div>
      <div class="course">
        <h3>1911学堂课程体系</h3>
        <p class="course-small-title">包含560余门课程</p>
        <ul class="list clearfix">
          <li v-for="li in courseList" :key="li.id" class="list-item" @click="goCourseList(li)">
            <p class="item-desc1">{{li.title}}</p>
          </li>
          <li class="list-item" @click="goCustomerProject">
            <p class="item-desc1 customerProject">自定制项目 >></p>
          </li>

        </ul>
        <div class="course-bottom">
          <div class="left">
            <div class="con">
              <p class="title">课程定制服务</p>
              <p class="text">如果您有更多、更独特、更专业的课程需求，请联系我们， 1911学堂将根据需求，为您量身定制高品质的培训课程。
              </p>
              <div class="btn" @click="knowDetail">了解详情</div>
            </div>
          </div>
          <div class="right">
            <img src="http://papn9j3ys.bkt.clouddn.com/insitituationCourse-bg.png" alt="">
          </div>
        </div>
      </div>
      <div class="together">
        <h4>与1911学堂一起</h4>
        <div class="list">
          <div>
            <img src="http://papn9j3ys.bkt.clouddn.com/together_1.png" alt="">
            <p>加快知识更新</p>
          </div>
          <div>
            <img src="http://papn9j3ys.bkt.clouddn.com/together_2.png" alt="">
            <p>转变思维方式</p>
          </div>
          <div>
            <img src="http://papn9j3ys.bkt.clouddn.com/together_3.png" alt="">
            <p>提高学习能力</p>
          </div>
          <div>
            <img src="http://papn9j3ys.bkt.clouddn.com/together_4.png" alt="">
            <p>改善行为模式</p>
          </div>
        </div>
      </div>
      <div class="psrocess">
        <div class="route">
          <h3>购买、学习流程</h3>
          <div class="process-list clearfix">
            <p><img src="http://papn9j3ys.bkt.clouddn.com/cartIcon.png" alt=""> 购买流程</p>
            <h5>
              <span v-for="(one,index) in buyList" :key="index">
                <i class="icon before el-icon-caret-right"></i>
                <i class="word">{{one}}</i>
                <i class="icon after el-icon-caret-right"></i>
              </span>
            </h5>
          </div>
          <div class="process-list clearfix">
            <p>
              <img src="http://papn9j3ys.bkt.clouddn.com/studyIcon.png" alt=""> 学习流程
            </p>
            <h5>
              <span v-for="(one,index) in studyList" :key="index">
                <i class="icon before el-icon-caret-right"></i>
                <i class="word">{{one}}</i>
                <i class="icon after el-icon-caret-right"></i>
              </span>
            </h5>
          </div>

        </div>
      </div>
      <div class="bottomForm" id="buttom" ref="buttonForm">
        <img class="buttom-bg" src="http://papn9j3ys.bkt.clouddn.com/hrentry-bg.png" alt="">
        <div class="word">
          <p class="word-desc1">如果您对1911学堂的课程感兴趣，您可以留下您的企业名称和联系方式，60分钟内专业的商务团队会跟您联系。</p>
          <p class="word-desc2">
            <i class="word-desc-bg"></i>您也可以拨打咨询电话：010-62701911</p>
          <div class="formDIv">
            <el-form :model="company" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="" prop="companyname">
                <el-autocomplete class="inline-input" placeholder="您的单位名称" v-model="company.companyname" :fetch-suggestions="querySearchAsync" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
              </el-form-item>
              <el-form-item label="" prop="person">
                <el-input v-model="company.person" placeholder="请输入联系人"></el-input>
              </el-form-item>
              <el-form-item label="" prop="phones">
                <el-input v-model="company.phones" placeholder="请输入联系方式"></el-input>
              </el-form-item>
              <el-form-item label="" prop="code">
                <el-input v-model="company.codes" placeholder="请输入验证码"></el-input>
                <!-- <span class="code" @click="handleGetCode">{{company.getCode}}</span> -->
                <el-button :disabled="codeClick" class="code" @click="handleGetCode" style="border:none;line-height:0">{{company.getCode}}</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="companyPost('ruleForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <v-backtotop :data="showCheckedCourse"></v-backtotop>
  </div>
</template>

<script>
import { auth, institutional } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import BackToTop from '@/components/common/BackToTop.vue'
import { open } from '@/lib/util/helper'
import $ from 'jquery'
export default {
  components: {
    'v-backtotop': BackToTop
  },

  watch: {
    $route: 'fetchDate'
  },
  data() {
    var validatePhone = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('密码只能输入数字、字母'))
      }
      return callback()
    }
    return {
      codeClick: false,
      restaurants: [],
      timeout: null,
      backPosition: 0,
      move: true,
      interval: null,
      buttonFormTop: '',
      headerHeight: '',
      scroll: '',
      istopFixed: false,
      istopRelative: true,
      istopBottom: false,
      topImgStyle: {
        position: 'fixed',
        top: 0,
        left: 0
      },
      showCheckedCourse: true,
      recommend: true,
      courseList: [
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_1.png',
          title: '干部网络学院',
          number: '（10余门课程）',
          cidform: {
            cids: '1',
            indexs: '',
            pids: '0'
          },
          is_picture_show: '0'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_2.png',
          title: '在线商学院',
          number: '（14个专题，110余门课程）',
          link: '/other/enterprisecustom',
          cidform: {
            cids: '17',
            indexs: '1',
            pids: '0'
          },
          is_picture_show: '0'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_3.png',
          title: '职场学院',
          number: '（12个模块，160余门课程）',
          cidform: {
            cids: '19',
            indexs: '2',
            pids: '0'
          },
          is_picture_show: '0'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_4.png',
          title: '党政委托项目',
          number: '（14个模块，150余门课程）',
          cidform: {
            cids: '16',
            indexs: '3',
            pids: '0'
          },
          is_picture_show: '1'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_5.png',
          title: '企业内训项目',
          number: '（6个模块，初期20余门课程）',
          cidform: {
            cids: '18',
            indexs: '4',
            pids: '0'
          },
          is_picture_show: '1'
        }
      ],
      project: [
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_7.png',
          title: '单位课程定制',
          link: '/other/activePages/enterprisecustom'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_8.png',
          title: '学位项目',
          link: '/other/activePages/degree'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_9.png',
          title: '面授及线下活动',
          link: '/other/activePages/faceteach'
        }
      ],
      buyList: [
        '单位入口',
        '我要选课',
        '选择课程',
        '购物车结算',
        '填写资料，提交订单',
        '支付',
        '学员登录观看'
      ],
      studyList: ['进入网站或APP', '我的课程', '点击课程封面', '进入视频学习'],
      company: {
        companyname: '',
        person: '',
        phones: '',
        userID: null,
        codes: '',
        getCode: '获取验证码',
        seconds: 30,
        types: 6,
        companyCodes: '',
        captchaDisable: false
      },
      rules: {
        companyname: [
          { required: true, message: '请输入单位名', trigger: 'blur' }
        ],
        person: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' }
        ],
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        codes: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { validator: checkCode, trigger: 'blur' }
        ]
      },
      customerProject: {
        base: '/project/customerProject'
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token'])
  },
  methods: {
    fetchDate() {},
    goCourseList(item) {
      window.open(
        window.location.origin +
          '/course/category' +
          '?cid=' +
          item.cidform.cids +
          '&cp=' +
          item.is_picture_show +
          '&xid=0' +
          '&pid=' +
          '0'
      )
    },
    handleScroll() {
      if (this.move) {
        this.interval = setInterval(() => {
          this.backPosition += 50
          if (this.backPosition > this.buttonFormTop) {
            this.move = true
            this.backPosition = 0
            clearInterval(this.interval)
          } else {
            this.move = false
            window.scrollTo(0, this.backPosition)
          }
        }, 16.7)
      }
    },
    handleLink(item) {
      window.open(window.location.origin + item.link)
    },
    goLink(item) {
      window.open(window.location.origin + item)
    },
    companyPost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // if (!this.company.userID) {
          //   this.$message({
          //     showClose: true,
          //     type: 'error',
          //     message: '您还没有登录，请先登录后再提交吧！'
          //   })
          //   return false
          // }
          return new Promise((resolve, reject) => {
            institutional.addCompany(this.company).then(response => {
              if (response.status === 0) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '单位信息提交成功'
                })
                this.company.companyname = ''
                this.company.person = ''
                this.company.codes = ''
                this.company.phones = ''
                // this.$router.push('/')
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: response.msg
                })
              }
            })
          })
        }
      })
    },
    handleSelect(item) {},
    closeRecommend() {
      this.recommend = false
      document.getElementsByTagName('body')[0].style.padding = '0'
    },
    querySearch(queryString, cb) {},
    // 获取验证码 this.registerData
    async handleGetCode(data) {
      this.codeClick = true
      if (
        this.company.phones === '' ||
        !/^[1][3,5,6,7,8][0-9]{9}$/.test(this.company.phones)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请填写正确的手机号'
        })
        this.company.captchaDisable = true
        this.codeClick = false
      } else {
        this.company.captchaDisable = false
        this.codeClick = true
      }
      if (!this.company.captchaDisable && this.company.seconds == 30) {
        return new Promise((resolve, reject) => {
          auth.smsCodes(this.company).then(response => {
            this.$message({
              showClose: true,
              type: response.status === 0 ? 'success' : 'error',
              message: response.msg
            })
            this.company.captchaDisable = true
            this.company.getCode = this.company.seconds + '秒后重新发送'
            let interval = setInterval(() => {
              if (this.company.seconds <= 0) {
                this.company.getCode = '获取验证码'
                this.company.seconds = 30
                this.company.captchaDisable = false
                this.codeClick = false
                clearInterval(interval)
              } else {
                this.company.getCode = --this.company.seconds + '秒后重新发送'
              }
            }, 1000)
          })
        })
      }
    },
    pageScroll() {
      let totalHeight
      let topImgHeight
      if (this.$refs.topImg) {
        topImgHeight = this.$refs.topImg.offsetHeight || this.$refs.topImg
        totalHeight = this.headerHeight + topImgHeight + this.recommendHeight
      }

      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (this.scroll >= this.headerHeight && this.scroll < totalHeight) {
        this.istopFixed = true
        this.istopRelative = false
        this.istopBottom = true
      } else {
        this.istopFixed = false
        this.istopRelative = true
        this.istopBottom = false
      }
    },
    handleSelect(item) {
      this.company.companyname = item.company_name
    },
    querySearchAsync(queryString, cb) {
      //搜索单位
      queryString = queryString.replace(/^\s+|\s+$/g, '')
      if (queryString === '') {
        return false
      }
      this.searchCompanyList()
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants
      clearTimeout(this.timeout)
      cb(results)
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.company_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    //搜索单位 接口
    searchCompanyList() {
      if (this.company.companyname === '') {
        return false
      } else {
        return new Promise((resolve, reject) => {
          institutional.searchCompanyList(this.company).then(res => {
            for (var i = 0; i < res.data.companyList.length; i++) {
              this.$set(
                res.data.companyList[i],
                'value',
                res.data.companyList[i].company_name
              )
            }
            this.restaurants = res.data.companyList
            resolve(true)
          })
        })
      }
    },
    knowDetail() {
      this.$router.push('/other/activePages/enterprisecustom')
    },
    //跳转到自定制项目
    goCustomerProject() {
      open(this.customerProject)
    }
  },
  mounted() {
    this.company.userID = this.token
    // this.$bus.$emit('bannerShow', true)
    window.addEventListener('scroll', this.pageScroll)
    this.headerHeight = document.getElementsByClassName(
      'headerBox'
    )[0].offsetHeight

    if (document.getElementsByClassName('recommend')[0]) {
      this.recommendHeight = document.getElementsByClassName(
        'recommend'
      )[0].offsetHeight
    }

    this.buttonFormTop = this.$refs.buttonForm.offsetTop
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('bannerImg', true)
    })
  },
  beforeRouteLeave(to, from, next) {
    this.$bus.$emit('bannerImg', false)
    next(vm => {})
  },
  deactivated() {
    window.removeEventListener('scroll', this.pageScroll)
  }
}
</script>
