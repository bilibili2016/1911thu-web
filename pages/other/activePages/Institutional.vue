<template>
  <div class="allInfo">
    <div :class="{ topImg: true, topFixed:istopFixed, topRelative:istopRelative}" ref="topImg">
      <img src="http://papn9j3ys.bkt.clouddn.com/hrentry-pic5.png" alt="">
      <div class="top-text">
        <h1 class="top-h1">1911学堂</h1>
        <p class="top-desc"> 1911学堂可根据政府机关、企事业单位需求，<br>提供系统、权威、实用的培训解决方案，<br>帮助学员提升专业知识和思维能力，助力政府机关、企事业单位高效运转。</p>

        <div class="top-button" @click="handleScroll">
          填写联系方式，免费申请课程体验。
          <span class="right" ref="rgihtGo">GO</span>
        </div>
      </div>
    </div>
    <div :class="{topBottom:istopBottom}" ref="topBottom">
      <div class="why">
        <h3>1911学堂的特色及优势</h3>
        <div class="why-con clearfix">
          <div class="img">
            <img src="http://papn9j3ys.bkt.clouddn.com/institutional-icon.png" alt="">
          </div>
          <div class="con-text">
            <div class="first text clearfix">
              <div class="left">我们的理念</div>
              <div class="right">源自清华、面向世界，博学笃行、人文日新。</div>
              <div class="con-shadow"></div>
            </div>
            <div class="second text clearfix">
              <div class="left">多元化培训模式</div>
              <div class="right">结合线上人机交互优势和线下人文互动优势，研发了纯线上、混合式、互动式三种培训模式供您选择。
                <div class="con-shadow"></div>
              </div>
            </div>
            <div class="third text clearfix">
              <div class="left">知识即服务</div>
              <div class="right">1911学堂是一个以“知识即服务”（KaaS）为运营模式的继续教育平台，为学习者提供全链条服务。
                <div class="con-shadow"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="why-con clearfix">
          <div class="why-item" v-for="(item,index) in imgList" :key="index">
            <div class="item-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <p class="item-desc1">{{item.title}}</p>
            <span class="item-line"></span>
            <p class="item-desc2">{{item.text}}</p>
          </div>
        </div>
        <h3>1911学堂培训项目</h3>
        <div class="projects">
          <span v-for="(item,index) in projectArr" :key="index" @click="goCourseList(item)">{{item.category_name}}</span>
          <span @click="goCustomerProject">自定制项目</span>
        </div> -->
      </div>
      <div class="course serviceDetails clearfix">
        <h3>1911学堂定制项目</h3>
        <div class="course-left courseCon clearfix">
          <div class="img">
            <img src="http://papn9j3ys.bkt.clouddn.com/institutional-icon1.png" alt="">
            <div>委托定制</div>
          </div>
          <div class="con">
            <div class="text">
              学堂根据贵单位的特定需求，为您量身定制、研发设计针对性、个性化的学习方案及培训项目安排。
            </div>
            <div class="button" @click="handleScroll">
              立即咨询
            </div>
          </div>
        </div>
        <div class="course-right courseCon clearfix">
          <div class="img">
            <img src="http://papn9j3ys.bkt.clouddn.com/institutional-icon2.png" alt="">
            <div>自定制</div>
          </div>
          <div class="con">
            <div class="text">
              贵单位可在学堂平台自行选择师资及课程，或提出具体的学习需求，形成独有的人才培养规划及培训班设置方案。
            </div>
            <div class="button" @click="goCustomerProject">
              开始自定制
            </div>
          </div>
        </div>

      </div>
      <div class="course serviceDetails clearfix">
        <h3 style="padding-top:0px;">1911学堂增值服务</h3>
        <div class="course-left courseCon clearfix">
          <div class="img">
            <img src="http://papn9j3ys.bkt.clouddn.com/institutional-icon3.png" alt="">
            <div>互动式</div>
          </div>
          <div class="con">
            <div class="text">
              1911学堂首创“线下+线上”互动式培训模式，结合线上学习人机交互的技术优势以及线下学习人文互动的情感优势，更能助力学习者实现个性化、阶梯式的成长路径。
            </div>
            <div class="button" @click="handleLink('/course/category?cid=0&cp=1&xid=0&pids=0')">
              点击查看
            </div>
          </div>
        </div>
        <div class="course-right courseCon clearfix">
          <div class="img">
            <img src="http://papn9j3ys.bkt.clouddn.com/institutional-icon4.png" alt="">
            <div>顾问式</div>
          </div>
          <div class="con">
            <div class="text">
              1911学堂可从数千名师资库中遴选最合适的专家教授，为贵单位提供顾问式、咨询式的智力服务，真正做到学习需求与专家内容的智能匹配，实现“请进来、沉下去”的培训效果。
            </div>
            <div class="button" @click="handleLink('/home/teacher/list')">
              点击查看
            </div>
          </div>
        </div>
        <!-- <h3>1911学堂专属定制项目</h3>
        <p class="course-small-title">如果您有更多、更独特的培训需求，请联系我们，1911学堂将根据单位需求， 为您量身定制高品质培训项目。</p>
        <div class="service-list clearfix">
          <div class="service-line"></div>
          <div class="service-item" v-for="(item,index) in serviceList" :key="index">

            <div class="item-title">
              <span class="item-index">{{item.num}}.</span>
              <span>{{item.title}}</span>
            </div>
            <div class="item-desc">
              {{item.content}}
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div class="course">
        <h3>1911学堂课程体系</h3>
        <p class="course-small-title">包含560余门课程</p>
        <ul class="list clearfix">
          <li v-for="li in projectArr" :key="li.id" class="list-item" @click="goCourseList(li)">
            <p class="item-desc1">{{li.title}}</p>
          </li>
          <li class="list-item" @click="goCustomerProject">
            <p class="item-desc1 customer-project">自定制项目 >></p>
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
      </div> -->
      <!-- <div class="together">
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
      </div> -->
      <!-- <div class="psrocess">
        <div class="route">
          <h3>购买与学习流程</h3>
          <div class="process-list clearfix">
            <div class="fl">
              <p><img src="http://papn9j3ys.bkt.clouddn.com/cartIcon.png" alt=""> 购买流程</p>
            </div>
            <div class="fr">
              <div class="process-info">
                <h5>
                  <span v-for="(one,index) in buyListOne" :key="index">
                    <i class="icon before el-icon-caret-right"></i>
                    <i class="word">{{one}}</i>
                    <i class="icon after el-icon-caret-right"></i>
                  </span>
                </h5>
              </div>
              <div class="process-info">
                <h5>
                  <span v-for="(one,index) in buyListTwo" :key="index">
                    <i class="icon before el-icon-caret-right"></i>
                    <i class="word">{{one}}</i>
                    <i class="icon after el-icon-caret-right"></i>
                  </span>
                </h5>
              </div>
            </div>

          </div>
          <div class="process-list clearfix">
            <div class="fl">
              <p>
                <img src="http://papn9j3ys.bkt.clouddn.com/studyIcon.png" alt=""> 学习流程
              </p>
            </div>
            <div class="fr">
              <div class="process-info">
                <h5>
                  <span v-for="(one,index) in buyListThree" :key="index">
                    <i class="icon before el-icon-caret-right"></i>
                    <i class="word">{{one}}</i>
                    <i class="icon after el-icon-caret-right"></i>
                  </span>
                </h5>
              </div>
              <div class="process-info">
                <h5>
                  <span v-for="(one,index) in buyListFour" :key="index">
                    <i class="icon before el-icon-caret-right"></i>
                    <i class="word">{{one}}</i>
                    <i class="icon after el-icon-caret-right"></i>
                  </span>
                </h5>
              </div>
            </div>

          </div>

        </div>
      </div> -->
      <div class="bottomForm" id="buttom" ref="buttonForm">
        <img class="buttom-bg" src="http://papn9j3ys.bkt.clouddn.com/hrentry-bg.png" alt="">
        <div class="word">
          <p class="word-desc1">如果您希望对1911学堂课程及培训项目了解更多，请填写以下信息，我们会在90分钟内与您联系，期待为您创造更好的教育体验。</p>
          <p class="word-desc2">
            <i class="word-desc-bg"></i>您也可以拨打咨询电话：18516821911</p>
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
import { store as persistStore } from '~/lib/core/store'
import { auth, institutional } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import BackToTop from '@/components/common/BackToTop.vue'
import { open, setTitle } from '@/lib/util/helper'
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
      imgList: [
        {
          imgUrl: 'http://papn9j3ys.bkt.clouddn.com/hrentry-pic25.png',
          title: '强大的师资力量',
          text:
            '1911学堂已签约超过500名优秀导师，均为清华大学等一流高校教授、院士及500强企业高管，师资力量雄厚。'
        },
        {
          imgUrl: 'http://papn9j3ys.bkt.clouddn.com/hrentry-pic26.png',
          title: '与时俱进的系统化课程体系',
          text:
            '1911学堂拥有强大的课程研发能力，根据时代热点与客户需求，不断推出系统、权威、创新、实用的课程体系。'
        },
        {
          imgUrl: 'http://papn9j3ys.bkt.clouddn.com/hrentry-pic27.png',
          title: '先进的培训模式',
          text:
            '1911学堂拥有纯线上培训及线上线下混合式培训等多种模式，可根据客户需求，灵活采用不同的培训模式。'
        },
        {
          imgUrl: 'http://papn9j3ys.bkt.clouddn.com/hrentry-pic28.png',
          title: '清华大学认证证书',
          text:
            '在1911学堂完成课程学习并通过相应考核后，学员可获得清华大学及相关单位联合颁发的认证证书。'
        }
      ],
      projectArr: [],
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
      buyListOne: [
        '直接购买项目',
        '单位入口',
        '进入项目分类',
        '选择项目',
        '加入购物车/立即购买',
        '支付',
        '学员观看'
      ],
      buyListTwo: [
        '自定制项目',
        '单位入口',
        '进入自定制项目',
        '新建项目',
        '自由搭配课程',
        '立即购买',
        '支付',
        '学员观看'
      ],
      buyListThree: [
        '直接学习',
        '进入网站或APP',
        '我的课程/我的项目',
        '点击封面',
        '进入视频学习'
      ],
      buyListFour: [
        '绑定兑换码后学习',
        '首页',
        '兑换码',
        '绑定获得的兑换码',
        '我的课程/我的项目',
        '点击封面',
        '进入视频学习'
      ],
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
      serviceList: [
        {
          title: '了解需求',
          content:
            '根据政府单位、企事业单位及团体的培训需求，以问题解决为导向，进行需求调研分析。',
          num: '01'
        },
        {
          title: '提交方案',
          content:
            '根据培训需求分析的结果提交初步的培训解决方案，由委托单位培训负责人提出修改意见。',
          num: '02'
        },
        {
          title: '沟通细节',
          content:
            '对学员的职业、岗位、年龄、学历、认知、态度等细节信息进行沟通分析，了解委托单位的现状及发展战略愿景目标。',
          num: '03'
        },
        {
          title: '完善方案',
          content:
            '根据分析调整修改完善课程内容及授课方式，根据培训需求选择最佳课程及师资人选，并与委托单位达成共识，提交正式的培训方案。',
          num: '04'
        },
        {
          title: '签订合同',
          content:
            '根据双方确认的培训方案，确定培训费用、时间，明确实施计划和双方的责任义务，签订培训合同。',
          num: '05'
        },
        {
          title: '课前准备',
          content:
            '准备上课所需资料、设备、环境布置，与师资沟通协调并调整细节，提前一天布置现场，确保培训质量。',
          num: '06'
        },
        {
          title: '培训实施',
          content:
            '按照培训方案和教学计划组织教师上课，开展课前介绍、课中沟通调整、课后总结点评，根据学员需求反馈调整相关安排。',
          num: '07'
        },
        {
          title: '评估反馈',
          content:
            '培训结束后开展评估工作，了解学员对课程内容、教师及培训整体效果的意见，并提交培训总结报告。',
          num: '08'
        },
        {
          title: '备案存档',
          content: '将委托单位的培训资料档案存档,已备后续服务及跟踪调查使用.',
          num: '09'
        },
        {
          title: '跟进回访',
          content:
            '培训结束一段时间后开展后续跟进回访,并提出针对性的建议,形成长期持续的合作,详情可联系我们.',
          num: '10'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token'])
  },
  methods: {
    fetchDate() {},
    goCourseList(item) {
      this.$router.push({
        path: '/course/category',
        query: {
          cid: item.id,
          cp: item.is_picture_show,
          xid: 0,
          pids: 0
        }
      })
    },
    handleScroll() {
      window.scrollTo(0, this.buttonFormTop)
      // if (this.move) {

      //   this.interval = setInterval(() => {
      //     this.backPosition += 50
      //     if (this.backPosition > this.buttonFormTop) {
      //       this.move = true
      //       this.backPosition = 0
      //       clearInterval(this.interval)
      //     } else {
      //       this.move = false
      //       window.scrollTo(0, this.backPosition)
      //     }
      //   }, 0.01)
      // }
    },
    companyPost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
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

              // 初始化验证码倒计时
              this.company.getCode = '获取验证码'
              this.company.seconds = 30
              this.company.captchaDisable = false
              this.codeClick = false
              clearInterval(this.interval)
            } else {
              this.$message({
                showClose: true,
                type: 'error',
                message: response.msg
              })
            }
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
        !/^[1][2,3,5,6,7,8,9][0-9]{9}$/.test(this.company.phones)
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
        auth.smsCodes(this.company).then(response => {
          this.$message({
            showClose: true,
            type: response.status === 0 ? 'success' : 'error',
            message: response.msg
          })
          this.company.captchaDisable = true
          this.company.getCode = this.company.seconds + '秒后重新发送'
          this.interval = setInterval(() => {
            if (this.company.seconds <= 0) {
              this.company.getCode = '获取验证码'
              this.company.seconds = 30
              this.company.captchaDisable = false
              this.codeClick = false
              clearInterval(this.interval)
            } else {
              this.company.getCode = --this.company.seconds + '秒后重新发送'
            }
          }, 1000)
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
        institutional.searchCompanyList(this.company).then(res => {
          for (var i = 0; i < res.data.companyList.length; i++) {
            this.$set(
              res.data.companyList[i],
              'value',
              res.data.companyList[i].company_name
            )
          }
          this.restaurants = res.data.companyList
        })
      }
    },
    knowDetail() {
      this.$router.push('/other/activePages/enterprisecustom')
    },
    handleLink(url) {
      this.$router.push(url)
    },
    //跳转到自定制项目
    goCustomerProject() {
      if (persistStore.get('token')) {
        this.$router.push({
          path: '/project/customerProject',
          query: {
            sid: '',
            edit: 1
          }
        })
      } else {
        this.$bus.$emit('loginShow')
      }
    },
    getClassifyList() {
      institutional.getClassifyList().then(response => {
        if (response.status === 0) {
          for (let item of response.data.categoryList) {
            if (item.is_picture_show === '1') {
              this.projectArr.push(item)
            }
          }
        }
      })
    }
  },
  mounted() {
    setTitle('单位入口-1911学堂')
    // this.getClassifyList()
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
