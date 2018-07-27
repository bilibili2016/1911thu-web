<template>
  <div class="allInfo">
    <div :class="{ topImg: true, topFixed:istopFixed, topRelative:istopRelative}" ref="topImg">
      <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic5.png" alt="">
      <div class="top-text">
        <h1 class="top-h1">你好，培训方案规划者</h1>
        <p class="top-desc">如果您正在为帮助领导选课烦恼、或者正在为企业培训 、提醒进行规划， EXED为您精心准备了定制课程方案和高端课程。
        </p>
        <div class="top-button" @click="handleScroll">
          请填写联系方式
        </div>
      </div>
    </div>
    <div :class="{topBottom:istopBottom}" ref="topBottom">
      <div class="why">
        <h3>为什么选择我们</h3>
        <div class="why-con clearfix">
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic1.png" alt="">
            </div>
            <p class="item-desc1">深度体验顶级商学院文化</p>
            <span class="item-line"></span>
            <p class="item-desc2">清华经管学院是率先获得AACSB和EQUIS两大 全球管理教育顶级认证的中国内地商学院。</p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic2.png" alt="">
            </div>
            <p class="item-desc1">国内课程均在清华经管学院授课</p>
            <span class="item-line"></span>
            <p class="item-desc2">高管教育中心(EXED)与MBA、EMBA、本硕博并列为学院教学部门，经过十多年的沉淀，成就一套规范、完善、实效的企业高管培训课程体系。
            </p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic3.png" alt="">
            </div>
            <p class="item-desc1">领略大师风采，启迪心智</p>
            <span class="item-line"></span>
            <p class="item-desc2">160多位清华大学经济管理学院全职教授及著名 经济学家、知名学者精心设计并亲自授课。
            </p>
          </div>
          <div class="why-item">
            <div class="item-img">
              <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic4.png" alt="">
            </div>
            <p class="item-desc1">打造最有价值的清华校友人脉</p>
            <span class="item-line"></span>
            <p class="item-desc2">6万多各行业精英校友资源，形式多样的校友活 动为学员之间搭起交流合作平台。
            </p>
          </div>
        </div>
      </div>
      <div class="course">
        <h3>1911学堂课程体系</h3>
        <p class="course-small-title">包含560余门课程</p>
        <ul class="list clearfix">
          <li v-for="li in courseList" :key="li.id" class="list-item">
            <p class="item-desc1">{{li.title}}</p>
            <!-- <p class=item-desc2>{{li.number}}</p> -->
          </li>
          <li v-for="(item,index) in project" :key="index" @click="handleLink(item)" class="list-item list-icon clearfix">
            <div class="item-img">
              <img :src="item.src" alt="">
            </div>
            <div class="item-desc">
              <p class="item-desc-text">{{item.title}}</p>
              <p class=item-desc-more>了解更多></p>
            </div>
          </li>

        </ul>
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
import { auth, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import BackToTop from '@/components/common/BackToTop.vue'
import $ from 'jquery'
export default {
  components: {
    'v-backtotop': BackToTop
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
          number: '（10余门课程）'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_2.png',
          title: '在线商学院',
          number: '（14个专题，110余门课程）',
          link: '/other/enterprisecustom'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_3.png',
          title: '职场学院',
          number: '（12个模块，160余门课程）'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_4.png',
          title: '党政委托项目',
          number: '（14个模块，150余门课程）'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_5.png',
          title: '企业内训项目',
          number: '（6个模块，初期20余门课程）'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_6.png',
          title: '管理公开项目',
          number: '（11个行业，110余门课程）'
        }
      ],
      project: [
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_7.png',
          title: '单位课程定制',
          link: '/other/enterprisecustom'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_8.png',
          title: '学位项目',
          link: '/other/degree'
        },
        {
          src: 'http://papn9j3ys.bkt.clouddn.com/hrEntry_9.png',
          title: '面授及线下活动',
          link: '/other/faceteach'
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
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token'])
  },
  methods: {
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
            home.addCompany(this.company).then(response => {
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
        totalHeight = this.headerHeight + topImgHeight
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
          home.searchCompanyList(this.company).then(res => {
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
    }
  },
  mounted() {
    this.company.userID = this.token
    this.$bus.$emit('bannerShow', true)
    window.addEventListener('scroll', this.pageScroll)
    this.headerHeight = document.getElementsByClassName(
      'headerBox'
    )[0].offsetHeight
    this.buttonFormTop = this.$refs.buttonForm.offsetTop
  },
  deactivated() {
    window.removeEventListener('scroll', this.pageScroll)
  }
}
</script>
