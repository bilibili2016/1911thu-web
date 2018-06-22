<template>
  <div class="allInfo">
    <div class="topImg">
      <img src="http://pam8iyw9q.bkt.clouddn.com/hrEntry.png" alt="">
    </div>
    <div class="why">
      <h3>为什么选择我们</h3>
      <p>深度体验顶级商学院文化</p>
      <p>清华经管学院是率先获得AACSB和EQUIS两大全球管理教育顶级认证的中国内地商学院</p>
      <p>高管教育中心(EXED)与MBA、EMBA、本硕博并列为学院教学部门，经过十多年的沉淀，成就一套规范、完善、实效的企业高管培训课程体系</p>
      <p>国内课程均在清华经管学院授课</p>
      <p>领略大师风采，启迪心智</p>
      <p>160多位清华大学经济管理学院全职教授及著名经济学家、知名学者精心设计并亲自授课</p>
      <p>打造最有价值的清华校友人脉</p>
      <p>6万多各行业精英校友资源，形式多样的校友活动为学员之间搭起交流合作平台</p>
    </div>
    <div class="course">
      <h3>1911学堂课程体系</h3>
      <p>学堂课程体系包括：通识性课程体系（干部通用学院）、系统专题性课程（党政系统学院）、在线商学院、行业学院、职场学院、直播/热点课程（热点课程）、企业课程定制、学位项目及面授及线下活动等9大业务板块，包含560余门课程。</p>
      <ul class="list">
        <li v-for="li in courseList" :key="li.id">
          <img :src="li.src" alt="">
          <h5>{{li.title}}</h5>
          <h6>{{li.number}}</h6>
        </li>
        <li v-for="(item,index) in project" :key="index">
          <img :src="item.src" alt="">
          <h4>{{item.title}}
            <span class="fr">了解更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </h4>
        </li>

      </ul>
    </div>
    <div class="psrocess">
      <h3>购买、学习流程</h3>
      <div class="route">
        <p><img src="http://pam8iyw9q.bkt.clouddn.com/cartIcon.png" alt=""> 购买流程</p>
        <h5>
          <span v-for="(one,index) in buyList" :key="index">
            <i class="icon before el-icon-caret-right"></i>
            <i class="word">{{one}}</i>
            <i class="icon after el-icon-caret-right"></i>
          </span>
        </h5>
        <p><img src="http://pam8iyw9q.bkt.clouddn.com/studyIcon.png" alt="">学习流程</p>
        <h5>
          <span v-for="(one,index) in studyList" :key="index">
            <i class="icon before el-icon-caret-right"></i>
            <i class="word">{{one}}</i>
            <i class="icon after el-icon-caret-right"></i>
          </span>
        </h5>
      </div>
    </div>
    <div class="bottomForm">
      <img src="http://pam8iyw9q.bkt.clouddn.com/hrEntrybottom.png" alt="">
      <div class="word">
        <p>如果您对1911学堂的课程感兴趣，您可以留下您的企业名称和联系方式，60分钟内专业的商务团队会跟您联系。</p>
        <el-form :model="company" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="企业名称：" prop="name">
            <el-autocomplete class="inline-input" v-model="company.name" :fetch-suggestions="querySearch" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
          </el-form-item>
          <el-form-item label="联系人：" prop="person">
            <el-input v-model="company.person"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" prop="phones">
            <el-input v-model="company.phones"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="code">
            <el-input v-model="company.codes"></el-input>
            <span class="code" @click="handleGetCode">{{company.getCode}}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="companyPost('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
export default {
  data() {
    var validatePhone = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('密码只能输入数字、字母'))
      }
      return callback()
    }
    return {
      courseList: [
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_1.png',
          title: '通识性课程体系（干部通用学院）',
          number: '（10余门课程）'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_2.png',
          title: '系统专题性课程（党政系统学院）',
          number: '（14个专题，110余门课程）'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_3.png',
          title: '在线商学院',
          number: '（12个模块，160余门课程）'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_4.png',
          title: '行业学院',
          number: '（14个模块，150余门课程）'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_5.png',
          title: '职场学院',
          number: '（6个模块，初期20余门课程）'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_6.png',
          title: '直播/热点课程（热点课程）',
          number: '（11个行业，110余门课程）'
        }
      ],
      project: [
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_7.png',
          title: '企业课程定制'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_8.png',
          title: '学位项目'
        },
        {
          src: 'http://pam8iyw9q.bkt.clouddn.com/hrEntry_9.png',
          title: '面授及线下活动'
        }
      ],
      buyList: [
        '浏览课程',
        '我要选课',
        '登录',
        '选择课程',
        '提交课程',
        '填写资料',
        'BD细节沟通',
        '线下付款',
        '提供学员手机号',
        '学员登录观看'
      ],
      studyList: [
        '进入网站',
        '使用生成账号登录',
        '我的课程',
        '点击课程封面',
        '进入视频学习'
      ],
      company: {
        name: '',
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
        name: [{ required: true, message: '请输入企业名', trigger: 'blur' }],
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
    companyPost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!this.company.userID) {
            this.$message({
              showClose: true,
              type: 'error',
              message: '您还没有登录，请先登录后再提交吧！'
            })
            return false
          }
          return new Promise((resolve, reject) => {
            home.addCompany(this.company).then(response => {
              if (response.status === 0) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '企业信息提交成功'
                })
                this.$router.push('/')
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
    querySearch(queryString, cb) {},
    // 获取验证码 this.registerData
    async handleGetCode(data) {
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
      } else {
        this.company.captchaDisable = false
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
                clearInterval(interval)
              } else {
                this.company.getCode = --this.company.seconds + '秒后重新发送'
              }
            }, 1000)
          })
        })
      }
    }
  },
  mounted() {
    this.company.userID = this.token
  }
}
</script>
