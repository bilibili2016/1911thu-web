<template>
  <div class="headerBox">
    <div class="recommend" v-if="bannerMsg">
      <div>
        <img src="@/assets/images/hr_discounts1.png" alt="">
        <span>优惠专题入口</span>
        <img src="@/assets/images/hr_discounts2.png" alt="">
        <i class="el-icon-close" @click="closeBanner"></i>
      </div>
    </div>

    <!-- <el-select v-model="value" @change="changeNav">
      <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select> -->
    <div class="main">
      <div class="headerLogo fl" @click="goSearchd('/')">
        <img src="http://papn9j3ys.bkt.clouddn.com/logo.png" alt="">
        <!-- <img src="@/assets/images/logo.png" alt=""> -->
      </div>
      <v-tabs></v-tabs>
      <div class="search">
        <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="goSearch">
        <i class="el-icon-search" @click="goSearch"></i>
      </div>
      <div :class="['HREntry' ,{islogined : isAuthenticated }]">

        <span class="hrin center" @click="goSearchd('/other/institutional')">单位入口
          <i></i>
        </span>

        <span class="center" @click="addEcg" style="width:90px;">课程兑换码
          <i></i>
        </span>
        <!-- <span class="center" v-show="isAuthenticated" @click="goMycourse('tab-second')">我的课程</span> -->
        <div class="downLoad">
          <i class="phone"></i>
          <div class="downApp clearfix">
            <i :class={iphone:!iphones} class="downIcon fl"></i>
            <div class="changeType fr">
              <span>下载1911学堂APP</span>
              <span @mouseenter="changeImg('iphone')">
                <i></i>AppStore下载</span>
              <span @mouseenter="changeImg('android')">
                <i></i>Android下载</span>
            </div>
          </div>
        </div>
        <div class="shoppingCart" v-show="isAuthenticated" @click="goSearchd('/shop/shoppingcart')">
          <span class="cartIcon"></span>
          <i v-if="productsNum>0">{{productsNum}}</i>
        </div>
      </div>
      <div class="lrBtn" v-if="!isAuthenticated">
        <!-- @click="login" -->
        <span class="login" @click="login">登录</span>
        <!-- @click="register" -->
        <span class="register" @click="register">注册</span>
      </div>
      <div class="headImg" v-else>
        <span>
          <img :src="user.userImg" alt="" @click="goLink('tab-first')">
        </span>
        <ul class="subPages">
          <li @click="goLink('tab-first')">我的首页</li>
          <li @click="goLink('tab-second')">我的课程</li>
          <li @click="goLink('tab-third')">我的项目</li>
          <li @click="goLink('tab-fourth')">我的订单</li>
          <li @click="goLink('tab-fifth')">我的消息</li>
          <li @click="goLink('tab-sixth')">个人设置</li>
          <li @click="goLink('tab-seventh')">兑换码管理</li>
          <li @click="goLink('tab-eighth')">发票管理</li>
          <!-- <li v-if="this.codeData.length !== 0" @click="goLink('tab-sixth')">课程码管理</li> -->
          <li @click="signOuts">退出</li>
        </ul>
      </div>
    </div>
    <!-- 兑换码弹框 -->
    <div class="exchange" v-show="bindForm.isBind">
      <div class="innerWord">
        <i class="el-icon-close closeEcg" @click="closeEcg"></i>
        <div class="changeContent">
          <div class="changeInput">
            <span>课程兑换码:</span>
            <input v-model="bindForm.courseId" placeholder="请输入您的课程兑换码，区分大小写。">
            <p>
              <span>{{bindForm.error}}</span>
            </p>
          </div>
          <div class="changeTips">
            <p>课程兑换码说明：</p>
            <p>1.输入课程兑换码，绑定兑换购买的课程</p>
            <p>2.绑定成功后，不可更改。</p>
          </div>
          <div :class="['bind',{input:bindForm.isInput}]" @click="detection">绑定</div>
        </div>
      </div>
    </div>
    <!-- 登录注册 -->
    <v-login></v-login>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { getQueryString } from '@/lib/util/helper'
import { auth, header } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { MessageBox } from 'element-ui'
import { encryption } from '~/lib/util/helper'
import Tabs from '@/components/common/Tabs.vue'
import Login from '@/components/common/Login.vue'
export default {
  components: {
    'v-tabs': Tabs,
    'v-login': Login
  },
  data() {
    return {
      isHasClass: true,
      //codeData: [], //专属邀请码根据接口长度判断是否显示
      codeListForm: {
        pages: 1,
        limits: null
      },
      isloading: false, //注册按钮点击之后loading（体验）
      codeInterval: null, //注册获取验证码定时循环
      codeClick: false, //判断是否点击过 获取验证码（防重）
      judegExplorer: false, //判断当前浏览器，如果是IE页面顶部提示
      isClick: true, //判断是否点击过注册按钮（防重）
      isloginClick: false,
      searchImg: require('@/assets/images/search.png'),
      bannerMsg: false,
      downApp: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',
      iphones: false,
      bindForm: {
        courseId: '',
        isBind: false,
        isInput: false,
        showErr: false,
        error: ''
      },
      loadLogin: false,
      search: '',
      shoppingCartNum: 1,
      tokenForm: {
        tokens: '123'
      },
      bgMsg: false,
      user: {
        userImg: ''
      },
      QRcode: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',
      wechatLogin: false,
      bindTelShow: false,
      scanCodeShow: false,
      bindSuccessShow: false,
      bindTelData: {
        phones: '',
        codes: '',
        getCode: '获取验证码',
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: '',
        captchaDisable: false,
        exist: false,
        checked: false
      },
      getwxtime: null,
      gidForm: {
        gids: null
      },
      tokenForm: {
        tokens: ''
      },
      pwdForm: {
        pwds: null
      },
      currentURL: null,
      errorTel: {
        tel: null,
        msg: null
      },
      authPath: [
        '/shop/affirmorder',
        '/shop/shoppingcart',
        '/profile',
        '/shop/wepay'
      ],
      didForm: {
        dids: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated'])
  },

  methods: {
    ...mapActions('auth', [
      'signIn',
      'signInmobile',
      'setGid',
      'setProductsNum',
      'signOut',
      'setToken',
      'setPwd',
      'setDid'
    ]),
    closeEcg() {
      this.bindForm.courseId = ''
      this.bindForm.isBind = false
    },
    addEcg() {
      if (this.token) {
        this.bindForm.isBind = true
      } else {
        this.$alert('抱歉，您还未登录，请先登录吧！', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'cancel') {
            } else {
              this.signOuts()
              this.$bus.$emit('loginShow', true)
            }
          }
        })
      }
    },
    // 检测邀请码内是否包含已绑定的课程
    detection() {
      header.detectionCode(this.bindForm).then(res => {
        // 判断邀请码内是否包含已绑定的课程
        if (res.data.is_exist === 1) {
          this.$confirm(
            '该邀请码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。',
            {
              confirmButtonText: '坚持绑定',
              cancelButtonText: '取消',
              closeOnHashChange: false,
              // type: 'warning',
              center: true
            }
          )
            .then(() => {
              // 添加绑定课程
              this.goBind()
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消绑定'
              })
            })
        } else {
          this.goBind()
        }
      })
    },
    // 头部绑定课程
    goBind() {
      header.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: res.msg
          })
          this.bindForm.courseId = ''
          this.bindForm.isBind = false
          if (window.location.pathname === '/profile') {
            this.$bus.$emit('studyCourse')
          }
          this.goLink('tab-second')
        } else if (res.status === '100100') {
          this.bindForm.showErr = true
          this.$message({
            showClose: true,
            type: 'error',
            message: res.msg
          })
          this.bindForm.error = res.msg
        }
      })
    },
    explorer() {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        this.judegExplorer = true
      } else {
        this.judegExplorer = false
      }
    },
    closeBanner() {
      this.bannerMsg = false
    },
    getCount() {
      if (this.isAuthenticated) {
        header.shopCartList().then(response => {
          let body =
            Number(response.data.curriculumCartList.length) +
            Number(response.data.projectCartList.length)
          let len = {
            pn: body
          }
          this.setProductsNum(len)
        })
      }
    },
    changeImg(what) {
      what == 'android' ? (this.iphones = false) : (this.iphones = true)
    },
    goMycourse(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
      this.$router.push({
        path: '/profile',
        query: {
          tab: item
        }
      })
    },
    goLinks() {
      this.$router.push('/shop/shoppingcart')
    },
    goLink(item) {
      this.$bus.$emit('selectProfileIndex', '123')
      // persistStore.set('selectTab', item)
    },
    login() {
      this.$bus.$emit('loginShow')
    },
    signOuts() {
      this.signOut()
      persistStore.clearAll()
      this.$router.push('/')
    },
    register() {
      this.$bus.$emit('registerShow')
    },
    goSearch(item) {
      this.search = this.search.replace(/[ ]/g, '')
      if (
        !/[@#\$%\^&\*]+/g.test(this.search) &&
        this.search !== '' &&
        this.search.length < 30
      ) {
        persistStore.set('key', this.search)
        switch (window.location.pathname) {
          case '/course/search':
            this.$router.go()
            break
          default:
            this.$router.push('/course/search')
            // window.open(window.location.origin + '/course/search')
            break
        }
      } else {
        this.$message({
          type: 'error',
          message: '请输入不包含特殊字符且小于30个字符的关键词！'
        })
      }
    },
    goSearchd(item) {
      this.$router.push(item)
    },
    backHome() {
      this.$router.push('/')
    },
    goLink(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    },
    // 获取用户头像
    getUserInfo() {
      // if (this.isAuthenticated) {
      // this.$bus.$emit('reLogin', false)
      // this.$bus.$emit('loginShow', false)
      header.getUserInfo().then(res => {
        if (res.status === '100008') {
          // 设置单点登录
          this.didForm.dids = '1'
          this.setDid(this.didForm)
          this.$alert(res.msg + ',' + '请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.signOuts()
              //初始化首页数据
              this.$bus.$emit('reLogin', true)
              this.$bus.$emit('loginShow', true)
            }
          })
        } else if (res.status === '100100') {
          // 设置单点登录
          // this.didForm.dids = '1'
          // this.setDid(this.didForm)
          if (this.authPath.indexOf(window.location.pathname) > 0) {
            this.$alert(res.msg + ',' + '请重新登录', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.signOuts()
                this.$bus.$emit('loginShow', true)
              }
            })
          }
        } else {
          // 设置单点登录
          this.didForm.dids = '0'
          this.setDid(this.didForm)
          this.userInfo = res.data.userInfo
          persistStore.set('nickName', this.userInfo.nick_name)
          persistStore.set('phone', this.userInfo.user_name)
          if (this.userInfo.head_img && this.userInfo.head_img != '') {
            this.user.userImg = this.userInfo.head_img
          } else {
            this.user.userImg =
              'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
          }
          if (/^\//.test(this.userInfo.head_img)) {
            this.user.userImg =
              'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
          }
        }
      })
      // }
    },
    userProtocol() {
      window.open(window.location.origin + '/other/userProtocol')
    }
    // 获取专属邀请码列表
    // getCodeList() {
    //   home.getCodeList(this.codeListForm).then(response => {
    //     if (response.status !== '100100') {
    //       this.codeData = response.data.orderInvitationCodeList
    //     }
    //   })
    // }
    // 判断浏览器的ie型
  },
  mounted() {
    let me = this
    this.getCount()
    this.$bus.$on('updateCount', () => {
      me.getCount()
    })
    this.$bus.$emit('bannerShow', false)
    this.didForm.dids = '0'
    this.setDid(this.didForm)
    this.$bus.$on('bannerShow', data => {
      if (data === true) {
        this.bannerMsg = true
      } else {
        this.bannerMsg = false
      }
    })
    this.getUserInfo()
    this.$bus.$on('changeimg', data => {
      this.user.userImg = data
    })
    this.$bus.$on('getUserInfo', data => {
      this.getUserInfo()
    })
    if (!this.token) {
      this.signOut()
    }
    this.explorer()
  },
  watch: {
    'bindForm.courseId'(val, oldval) {
      if (val == '') {
        this.bindForm.showErr = true
        this.bindForm.isInput = false
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.bindForm.showErr = false
          this.bindForm.isInput = true
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请您输入正确的课程兑换码！'
          })
        }
      }
    }
  }
}
</script>
