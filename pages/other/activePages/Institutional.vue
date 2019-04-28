<template>
  <div class="allInfo">
    <div :class="{ topImg: true, topFixed:istopFixed, topRelative:istopRelative}" ref="topImg">
      <img src="https://static-image.1911edu.com/hrentry-pic5.png" alt>
      <div class="top-text">
        <h1 class="top-h1">1911学堂</h1>
        <p class="top-desc">1911学堂根据各政府机关和企业事业单位的需求，量身定制系统、权威、实用的教育培训整体解决方案。在满足学员学习需求的同时，更能助力各单位实现组织的发展战略及目标。</p>

        <!-- <div class="top-button" @click="handleScroll">
          填写联系方式，免费申请课程体验。
          <span class="right" ref="rgihtGo">GO</span>
        </div>-->
      </div>
    </div>
    <div :class="{topBottom:istopBottom}" ref="topBottom">
      <div class="why">
        <h3>1911学堂的特色及优势</h3>
        <div class="why-con clearfix">
          <div class="img">
            <img src="https://static-image.1911edu.com/institutional-icon.png" alt>
          </div>
          <div class="con-text">
            <div class="first text clearfix">
              <div class="left">我们的理念</div>
              <div class="right">博学笃行、人文日新。</div>
              <div class="con-shadow"></div>
            </div>
            <div class="second text clearfix">
              <div class="left">混合式学习模式</div>
              <div class="right">1911学堂以提升学习效能为目标导向，结合线上学习人机交互的技术优势以及线下学习人文互动的情感优势，基于学员的学习场景，研发了“线上+线下”混合式学习模式。
                <div class="con-shadow"></div>
              </div>
            </div>
            <div class="third text clearfix">
              <div class="left">“知识即服务”运营模式</div>
              <div class="right">1911学堂，是一个以“知识即服务”（KaaS）为运营模式的互联网终身教育平台，作为知识加工者和传播者，以知识为链条连接知识生产者和知识应用者，为学习者提供全链条服务。
                <div class="con-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course  clearfix">
        <div class="serviceDetails">
          <h3>1911学堂混合式项目</h3>
          <div class="clearfix">
            <div class="course-left courseCon clearfix">
              <div class="img">
                <img src="https://static-image.1911edu.com/institutional-icon3.png" alt>
                <div>标准内训项目</div>
              </div>
              <div class="con">
                <div class="text">1911学堂“线上+线下”混合式学习模式，充分发挥线上线下两种优势，线上学习可以让学员在移动端及PC端随时随地便捷学习；线下学习更加注重人文互动即师生互动、生生互动。</div>
              </div>
              <div class="button" @click="handleLink('/course/category?cid=0&cp=1&xid=0&pids=0&vid=-1')">点击查看</div>
            </div>
            <div class="course-right courseCon clearfix">
              <div class="img">
                <img src="https://static-image.1911edu.com/institutional-icon2.png" alt>
                <div>自定制项目</div>
              </div>
              <div class="con">
                <div class="text">贵单位可在1911学堂自行选择在线学院，并提出线下学习具体的内容需求，形成定制式、个性化、针对性的人才培养规划及培训项目设置方案。</div>
              </div>
              <div class="button" @click="goCustomerProject">开始自定制</div>
            </div>
          </div>
          <div class="word">
            <p class="word-desc1">期待为您创造更好的教育体验！</p>
            <p class="word-desc2">
              <i class="el-icon-phone-outline"></i>
              您也可以拨打咨询电话：010-62701911</p>
            <p class="word-desc3">如果您希望对1911学堂课程及培训项目了解更多，请填写以下信息，我们会在90分钟内与您联系，</p>
            <div>
              <el-form :model="company" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label prop="companyname">
                  <el-autocomplete class="inline-input" placeholder="请输入您的单位名称" v-model="company.companyname" :fetch-suggestions="querySearchAsync" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
                </el-form-item>
                <el-form-item label prop="person">
                  <el-input v-model="company.person" placeholder="请输入联系人姓名"></el-input>
                </el-form-item>
                <el-form-item label prop="date">
                  <el-date-picker v-model="company.date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="请选择回访日期"></el-date-picker>
                </el-form-item>
                <el-form-item label prop="time" class="timeLabel clearfix">
                  <el-radio v-model="company.time" label="上午（09:00-11:30）">上午（09:00-11:30）</el-radio>
                  <el-radio v-model="company.time" label="下午（13:00-17:30）">下午（13:00-17:30）</el-radio>
                </el-form-item>
                <el-form-item label prop="phones">
                  <el-input v-model="company.phones" placeholder="请输入联系人手机号"></el-input>
                </el-form-item>
                <el-form-item label prop="codes">
                  <el-input v-model="company.codes" placeholder="请输入验证码"></el-input>
                  <!-- <span class="code" @click="handleGetCode">{{company.getCode}}</span> -->
                  <el-button :disabled="codeClick" class="code" @click="handleGetCode" style="border:none;line-height:0">{{company.getCode}}</el-button>
                </el-form-item>
                <el-button type="primary" @click="companyPost('ruleForm')">提交</el-button>

              </el-form>
            </div>
          </div>
        </div>

      </div>

      <div class="bottomForm" id="buttom" ref="buttonForm">

      </div>
    </div>

    <v-backtotop :data="showCheckedCourse"></v-backtotop>
  </div>
</template>

<script>
import { store as persistStore } from "~/lib/core/store";
import { auth, institutional } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { checkRegisterPhone, checkCode } from "~/lib/util/validatefn";
import BackToTop from "@/components/common/BackToTop.vue";
import { open, setTitle } from "@/lib/util/helper";
import $ from "jquery";
export default {
  components: {
    "v-backtotop": BackToTop
  },
  watch: {
    $route: "fetchDate"
  },
  data () {
    var validatePhone = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error("密码只能输入数字、字母"));
      }
      return callback();
    };
    return {
      codeClick: false,
      restaurants: [],
      timeout: null,
      backPosition: 0,
      move: true,
      interval: null,
      headerHeight: "",
      scroll: "",
      istopFixed: false,
      istopRelative: true,
      istopBottom: false,
      topImgStyle: {
        position: "fixed",
        top: 0,
        left: 0
      },
      showCheckedCourse: false,
      recommend: true,
      project: [
        {
          src: "https://static-image.1911edu.com/hrEntry_7.png",
          title: "单位课程定制",
          link: "/other/activePages/enterprisecustom"
        },
        {
          src: "https://static-image.1911edu.com/hrEntry_8.png",
          title: "学位项目",
          link: "/other/activePages/degree"
        },
        {
          src: "https://static-image.1911edu.com/hrEntry_9.png",
          title: "面授及线下活动",
          link: "/other/activePages/faceteach"
        }
      ],
      company: {
        companyname: "",
        person: "",
        phones: "",
        userID: null,
        codes: "",
        getCode: "获取验证码",
        seconds: 30,
        types: 6,
        companyCodes: "",
        captchaDisable: false,
        date: "",
        time: ""
      },
      rules: {
        companyname: [
          { required: true, message: "请输入您的单位名称", trigger: "blur" }
        ],
        person: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" }
        ],
        phones: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            validator: checkRegisterPhone,
            trigger: "blur"
          }
        ],
        codes: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { validator: checkCode, trigger: "blur" }
        ],
        date: [{ required: true, message: "请选择回访日期", trigger: "blur" }],
        time: [{ required: true, message: "请选择回访时间段", trigger: "blur" }]
      },
      serviceList: [
        {
          title: "了解需求",
          content:
            "根据政府单位、企事业单位及团体的培训需求，以问题解决为导向，进行需求调研分析。",
          num: "01"
        },
        {
          title: "提交方案",
          content:
            "根据培训需求分析的结果提交初步的培训解决方案，由委托单位培训负责人提出修改意见。",
          num: "02"
        },
        {
          title: "沟通细节",
          content:
            "对学员的职业、岗位、年龄、学历、认知、态度等细节信息进行沟通分析，了解委托单位的现状及发展战略愿景目标。",
          num: "03"
        },
        {
          title: "完善方案",
          content:
            "根据分析调整修改完善课程内容及授课方式，根据培训需求选择最佳课程及师资人选，并与委托单位达成共识，提交正式的培训方案。",
          num: "04"
        },
        {
          title: "签订合同",
          content:
            "根据双方确认的培训方案，确定培训费用、时间，明确实施计划和双方的责任义务，签订培训合同。",
          num: "05"
        },
        {
          title: "课前准备",
          content:
            "准备上课所需资料、设备、环境布置，与师资沟通协调并调整细节，提前一天布置现场，确保培训质量。",
          num: "06"
        },
        {
          title: "培训实施",
          content:
            "按照培训方案和教学计划组织教师上课，开展课前介绍、课中沟通调整、课后总结点评，根据学员需求反馈调整相关安排。",
          num: "07"
        },
        {
          title: "评估反馈",
          content:
            "培训结束后开展评估工作，了解学员对课程内容、教师及培训整体效果的意见，并提交培训总结报告。",
          num: "08"
        },
        {
          title: "备案存档",
          content: "将委托单位的培训资料档案存档,已备后续服务及跟踪调查使用.",
          num: "09"
        },
        {
          title: "跟进回访",
          content:
            "培训结束一段时间后开展后续跟进回访,并提出针对性的建议,形成长期持续的合作,详情可联系我们.",
          num: "10"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState("auth", ["token"])
  },
  methods: {
    fetchDate () { },
    companyPost (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // if (this.company.date == '' || this.company.time == '') {
          //   this.$message({
          //     showClose: true,
          //     type: 'error',
          //     message: '请选择回访日期'
          //   })
          //   return false
          // }
          institutional.addCompany(this.company).then(response => {
            if (response.status === 0) {
              this.$message({
                showClose: true,
                type: "success",
                message: "单位信息提交成功"
              });
              this.company.companyname = "";
              this.company.person = "";
              this.company.codes = "";
              this.company.phones = "";
              this.company.date = "";
              this.company.time = "";

              // 初始化验证码倒计时
              this.company.getCode = "获取验证码";
              this.company.seconds = 30;
              this.company.captchaDisable = false;
              this.codeClick = false;
              clearInterval(this.interval);
            } else {
              this.$message({
                showClose: true,
                type: "error",
                message: response.msg
              });
            }
          });
        }
      });
    },
    handleSelect (item) { },
    closeRecommend () {
      this.recommend = false;
      document.getElementsByTagName("body")[0].style.padding = "0";
    },
    querySearch (queryString, cb) { },
    // 获取验证码 this.registerData
    async handleGetCode (data) {
      this.codeClick = true;
      if (
        this.company.phones === "" ||
        !/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.company.phones)
      ) {
        this.$message({
          showClose: true,
          type: "error",
          message: "请填写正确的手机号"
        });
        this.company.captchaDisable = true;
        this.codeClick = false;
      } else {
        this.company.captchaDisable = false;
        this.codeClick = true;
      }
      if (!this.company.captchaDisable && this.company.seconds == 30) {
        auth.smsCodes(this.company).then(response => {
          this.$message({
            showClose: true,
            type: response.status === 0 ? "success" : "error",
            message: response.msg
          });
          this.company.captchaDisable = true;
          this.company.getCode = this.company.seconds + "秒后重新发送";
          this.interval = setInterval(() => {
            if (this.company.seconds <= 0) {
              this.company.getCode = "获取验证码";
              this.company.seconds = 30;
              this.company.captchaDisable = false;
              this.codeClick = false;
              clearInterval(this.interval);
            } else {
              this.company.getCode = --this.company.seconds + "秒后重新发送";
            }
          }, 1000);
        });
      }
    },
    pageScroll () {
      let totalHeight;
      let topImgHeight;
      if (this.$refs.topImg) {
        topImgHeight = this.$refs.topImg.offsetHeight || this.$refs.topImg;
        totalHeight = this.headerHeight + topImgHeight + this.recommendHeight;
      }

      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll >= this.headerHeight && this.scroll < totalHeight) {
        this.istopFixed = true;
        this.istopRelative = false;
        this.istopBottom = true;
      } else {
        this.istopFixed = false;
        this.istopRelative = true;
        this.istopBottom = false;
      }
    },
    handleSelect (item) {
      this.company.companyname = item.company_name;
    },
    querySearchAsync (queryString, cb) {
      //搜索单位
      queryString = queryString.replace(/^\s+|\s+$/g, "");
      if (queryString === "") {
        return false;
      }
      this.searchCompanyList();
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      cb(results);
    },
    createStateFilter (queryString) {
      return state => {
        return (
          state.company_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    //搜索单位 接口
    searchCompanyList () {
      if (this.company.companyname === "") {
        return false;
      } else {
        institutional.searchCompanyList(this.company).then(res => {
          for (var i = 0; i < res.data.companyList.length; i++) {
            this.$set(
              res.data.companyList[i],
              "value",
              res.data.companyList[i].company_name
            );
          }
          this.restaurants = res.data.companyList;
        });
      }
    },
    handleLink (url) {
      persistStore.set("cid", 0);
      this.$router.push(url);
    },
    //跳转到自定制项目
    goCustomerProject () {
      if (persistStore.get("token")) {
        this.$router.push({
          path: "/project/customerProject",
          query: {
            sid: "",
            edit: 1
          }
        });
      } else {
        this.$bus.$emit("loginShow");
      }
    }
  },
  mounted () {
    setTitle("单位内训-1911学堂");
    this.company.userID = this.token;
    // this.$bus.$emit('bannerShow', true)
    window.addEventListener("scroll", this.pageScroll);
    this.headerHeight = document.getElementsByClassName(
      "headerBox"
    )[0].offsetHeight;

    if (document.getElementsByClassName("recommend")[0]) {
      this.recommendHeight = document.getElementsByClassName(
        "recommend"
      )[0].offsetHeight;
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bus.$emit("bannerImg", false);
    });
  },
  beforeRouteLeave (to, from, next) {
    this.$bus.$emit("bannerImg", false);
    next(vm => { });
  },
  deactivated () {
    window.removeEventListener("scroll", this.pageScroll);
  }
};
</script>
