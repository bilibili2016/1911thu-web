<template>
  <div class="headerBox">
    <!-- 优惠主题入口 -->
    <v-discount v-if="bannerMsg" @closeBanner="closeBanner"></v-discount>
    <div class="main">
      <div class="header-fl clearfix">
        <div class="headerLogo fl" @click="goLinkersHome('/')">
          <img src="http://papn9j3ys.bkt.clouddn.com/logo.png" alt="">
        </div>
        <div class="backHome">
          <span @click="goLinkersHome('/')">首页</span>
        </div>
        <!-- 课程，项目 -->
        <v-tabs></v-tabs>
        <div class="teach" @click="goLinker('/home/teacher/list')">
          <span>名师智库</span>
        </div>
      </div>
      <div class="header-fr clearfix">
        <!-- 登录注册按钮 -->
        <v-lrbtn v-if="!isAuthenticated"></v-lrbtn>
        <!-- 个人中心（头像） -->
        <v-headerimg v-else :data="user"></v-headerimg>
        <!-- 单位入口，兑换码，下载，购物车 -->
        <v-hrin :class="['HREntry' ,{islogined : isAuthenticated }]"></v-hrin>
        <div class="search">
          <input type="text" placeholder="请输入课程、老师" v-model="search" @keyup.enter="goSearch">
          <i class="el-icon-search" @click="goSearch"></i>
        </div>

      </div>
      <!-- 兑换码弹框 -->
      <v-code v-show="bindForm.isBind" :bindForm="bindForm"></v-code>
      <!-- 登录注册 -->
      <v-login></v-login>
    </div>

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
import Login from '@/pages/auth/Login.vue'
import Discount from '@/components/header/Discount.vue'
import CodeCase from '@/components/header/CodeCase.vue'
import LRBtn from '@/components/header/LRBtn.vue'
import HeaderImg from '@/components/header/HeaderImg.vue'
import HREntry from '@/components/header/HREntry.vue'
import { message } from '@/lib/util/helper'
export default {
  components: {
    'v-tabs': Tabs,
    'v-login': Login,
    'v-discount': Discount,
    'v-code': CodeCase,
    'v-lrbtn': LRBtn,
    'v-headerimg': HeaderImg,
    'v-hrin': HREntry
  },
  data() {
    return {
      isHasClass: true,
      judegExplorer: false, //判断当前浏览器，如果是IE页面顶部提示
      bannerMsg: false,
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

      bgMsg: false,
      user: {
        userImg: ''
      },
      QRcode: 'http://papn9j3ys.bkt.clouddn.com/wechatLogin.png',

      gidForm: {
        gids: null
      },
      authPath: [
        '/shop/affirmorder',
        '/shop/shoppingcart',
        '/profile',
        '/shop/wepay'
      ],
      getHttp: false,
      skip: '' //兑换码类型
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
      'setPwd'
    ]),
    // 关闭头部绑定课程
    closeEcg() {
      this.bindForm.courseId = ''
      this.bindForm.isBind = false
    },
    // 打开头部绑定课程
    addEcg() {
      if (this.token) {
        this.bindForm.isBind = true
      } else {
        this.$alert(
          '您暂未登陆，无法绑定兑换码，请先完成用户登录！',
          '温馨提示',
          {
            confirmButtonText: '确定',
            center: true,
            callback: action => {
              if (action === 'cancel') {
              } else {
                this.signOuts()
                this.$bus.$emit('loginShow', true)
              }
            }
          }
        )
      }
    },
    // 检测兑换码内是否包含已绑定的课程
    detection() {
      header.detectionCode(this.bindForm).then(res => {
        // 判断兑换码内是否包含已绑定的课程
        if (res.data.is_exist === 1) {
          this.$confirm(
            '该兑换码所包含商品与已购商品重复，如继续绑定，重复商品将进行有效时间累加。',
            {
              confirmButtonText: '取消',
              cancelButtonText: '坚持绑定',
              closeOnHashChange: false,
              // type: 'warning',
              center: true
            }
          )
            .then(() => {
              // this.$message({
              //   type: 'info',
              //   message: '已取消绑定'
              // })
              message(this, 'info', '已取消绑定')
            })
            .catch(() => {
              // 添加绑定课程
              this.goBind()
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
          // this.$message({
          //   showClose: true,
          //   type: 'success',
          //   message: res.msg
          // })
          message(this, 'success', res.msg)
          if (res.data.invitation_code_type == '1') {
            //兑换码内只有课程
            this.skip = 'tab-second'
          }
          if (res.data.invitation_code_type == '2') {
            //兑换码内只有项目
            this.skip = 'tab-third'
          }
          if (res.data.invitation_code_type == '3') {
            //兑换码项目+课程
            this.skip = 'tab-first'
          }
          this.bindForm.courseId = ''
          this.bindForm.isBind = false
          if (window.location.pathname === '/profile') {
            this.$bus.$emit('studyCourse')
            this.$bus.$emit('studyProject')
          }
          this.goLink(this.skip)
        } else if (res.status === '100100') {
          this.bindForm.showErr = true
          // this.$message({
          //   showClose: true,
          //   type: 'error',
          //   message: res.msg
          // })
          message(this, 'error', res.msg)
          this.bindForm.error = res.msg
        }
      })
    },
    // 兼容IE
    explorer() {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        this.judegExplorer = true
      } else {
        this.judegExplorer = false
      }
    },
    // 关闭头部广告栏
    closeBanner() {
      this.bannerMsg = false
    },
    // 获取购物车数量
    getCount() {
      if (this.isAuthenticated) {
        header.shopCartList().then(response => {
          if (response.status === '100008') {
            this.getHttp = false
          } else {
            if (response.data) {
              let body =
                Number(response.data.curriculumCartList.length) +
                Number(response.data.projectCartList.length)
              let len = {
                pn: body
              }
              this.setProductsNum(len)
            }
          }
        })
      }
    },
    // 改变鼠标悬浮时的DownApp二维码
    changeImg(what) {
      what == 'android' ? (this.iphones = false) : (this.iphones = true)
    },
    // 跳转-我的课程
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
    // 去购物车
    goLinks() {
      this.$router.push('/shop/shoppingcart')
    },
    // 登录
    login() {
      this.$bus.$emit('loginShow')
    },
    // 登出
    signOuts() {
      this.signOut()
      persistStore.clearAll()
      this.$router.push('/')
    },
    // 注册
    register() {
      this.$bus.$emit('registerShow')
    },
    // 搜索
    goSearch(item) {
      this.search = this.search.replace(/[ ]/g, '')
      if (
        !/[@#\$%\^&\*]+/g.test(this.search) &&
        this.search !== '' &&
        this.search.length < 30
      ) {
        persistStore.set('key', this.search)
        switch (window.location.pathname) {
          case '/other/pages/search':
            this.$router.go()
            break
          default:
            this.$router.push('/other/pages/search')
            // window.open(window.location.origin + '/other/pages/search')
            break
        }
      } else {
        // this.$message({
        //   type: 'error',
        //   message: '请输入不包含特殊字符且小于30个字符的关键词！'
        // })
        message(this, 'error', '请输入不包含特殊字符且小于30个字符的关键词！')
      }
    },
    // 跳转到指定页
    goLinker(item) {
      this.$router.push(item)
    },
    // (window.location.origin)
    goLinkers(item) {
      this.$router.replace('/')
    },
    goLinkersHome(item) {
      this.$router.push('/')
      this.$bus.$emit('getUserInfo')
    },
    goLink(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    },
    // 获取用户头像
    getUserInfo() {
      header.getUserInfo().then(res => {
        // console.log(res, '这是res')
        if (res.status === '100008') {
          this.getHttp = false
          persistStore.set('isSingleLogin', false)
          // 设置单点登录
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
          this.getHttp = false
          persistStore.set('isSingleLogin', false)
          // 设置单点登录
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
          if (persistStore.get('isSingleLogin') === false) {
            this.$bus.$emit('isSingleLogin', false)
          }
          this.getAll()
          persistStore.set('isSingleLogin', true)
          // 设置单点登录
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
    // 用户协议
    userProtocol() {
      window.open(window.location.origin + '/other/activePages/userProtocol')
    },
    // 获取专属兑换码列表
    // getCodeList() {
    //   home.getCodeList(this.codeListForm).then(response => {
    //     if (response.status !== '100100') {
    //       this.codeData = response.data.orderInvitationCodeList
    //     }
    //   })
    // }
    // 判断浏览器的ie型
    getAll() {
      this.getCount()

      if (!this.token) {
        this.signOut()
      }
      this.explorer()
    }
  },
  mounted() {
    // message('success', '测试数据')

    let me = this

    this.getUserInfo()
    // 非单点登录 getHttp为true
    this.$bus.$on('updateCount', () => {
      me.getCount()
    })
    // this.$bus.$emit('bannerShow', false)
    // this.$bus.$on('bannerShow', data => {
    //   if (data === true) {
    //     this.bannerMsg = true
    //   } else {
    //     this.bannerMsg = false
    //   }
    // })
    // 监听 优惠专题入口的banner 显示
    this.$bus.$on('bannerImgShow', () => {
      this.bannerMsg = true
    })
    // 监听 优惠专题入口的banner 隐藏
    this.$bus.$on('bannerImgHide', () => {
      this.bannerMsg = false
    })
    this.$bus.$on('changeimg', data => {
      this.user.userImg = data
    })
    this.$bus.$on('getUserInfo', data => {
      this.getUserInfo()
    })

    this.$bus.$on('closeEcg', data => {
      this.closeEcg()
    })
    this.$bus.$on('detection', data => {
      this.detection()
    })
    this.$bus.$on('login', data => {
      this.login()
      this.getUserInfo()
    })
    this.$bus.$on('register', data => {
      this.register()
    })
    this.$bus.$on('goLink', data => {
      this.goLink(data)
    })
    this.$bus.$on('signOuts', data => {
      this.signOuts()
    })
    this.$bus.$on('addEcg', data => {
      this.addEcg()
    })
  },
  watch: {
    // 绑定兑换码
    'bindForm.courseId'(val, oldval) {
      if (val == '') {
        this.bindForm.showErr = true
        this.bindForm.isInput = false
      } else {
        if (/^[A-Za-z0-9]+$/.test(val)) {
          this.bindForm.showErr = false
          this.bindForm.isInput = true
        } else {
          // this.$message({
          //   showClose: true,
          //   type: 'error',
          //   message: '请您输入正确的兑换码！'
          // })
          message(this, 'error', '请您输入正确的兑换码！')
        }
      }
    }
  }
}
</script>
