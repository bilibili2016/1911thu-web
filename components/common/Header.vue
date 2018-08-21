<template>
  <div class="headerBox">
    <!-- 优惠主题入口 -->
    <v-discount v-if="bannerMsg" @closeBanner="!bannerMsg"></v-discount>
    <div class="main">
      <div class="header-fl clearfix">
        <v-logo @handleLink="handleLink"></v-logo>
        <v-homeselect @handleLink="handleLink" @handleSelectItem="handleSelectItem" :projectArr="projectArr" :categoryArr="categoryArr"></v-homeselect>
      </div>
      <div class="header-fr clearfix">
        <v-lrbtn v-if="!isAuthenticated" @login="login" @register="register"></v-lrbtn>
        <v-headerimg v-else :data="user" @handleLinkProfile="handleLinkProfile" @handleSignOut="handleSignOut"></v-headerimg>
        <v-enter :class="['HREntry' ,{islogined : isAuthenticated }]" @handleLink="handleLink" @addEcg="handleAddEcg"></v-enter>
        <v-search @handleSearch="handleSearch"></v-search>
      </div>
      <v-code v-show="bindForm.isBind" :bindForm="bindForm" @detection="handleDetection" @closeEcg="handleCloseEcg"></v-code>
      <v-login></v-login>
    </div>

  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { getQueryString, open } from '@/lib/util/helper'
import { auth, header, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import { validateSearch } from '~/lib/util/validate'
import HomeSelect from '@/components/common/HomeSelect.vue'
import Login from '@/pages/auth/Login.vue'
import Discount from '@/components/header/Discount.vue'
import CodeCase from '@/components/header/CodeCase.vue'

import HomeLogo from '@/components/header/HomeLogo.vue'
import { message } from '@/lib/util/helper'
import LRBtn from '@/components/header/LRBtn.vue'
import HeaderImg from '@/components/header/HeaderImg.vue'
import HREntry from '@/components/header/HREntry.vue'
import HeaderSearch from '@/components/header/HeaderSearch.vue'
export default {
  components: {
    'v-homeselect': HomeSelect,
    'v-login': Login,
    'v-discount': Discount,
    'v-code': CodeCase,
    'v-lrbtn': LRBtn,
    'v-headerimg': HeaderImg,
    'v-enter': HREntry,
    'v-logo': HomeLogo,
    'v-search': HeaderSearch
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
          message(this, 'error', '请您输入正确的兑换码！')
        }
      }
    }
  },
  data() {
    return {
      // 顶部列表
      curruntForm: {
        pages: 1,
        limits: '',
        evaluateLimit: null,
        isevaluate: 1
      },
      categoryArr: [],
      projectArr: [],
      categoryLink: {
        base: '/course/category',
        cid: '',
        cp: '',
        xid: '0',
        pid: '0'
      },
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
    ...mapActions('auth', ['setGid', 'setProductsNum', 'signOut']),
    // 跳转 公共路由方法
    handleLink(data) {
      this.$router.push(data)
    },
    // 下拉列表
    getClassifyList() {
      home.getClassifyList(this.curruntForm).then(response => {
        for (let item of response.data.categoryList) {
          if (item.is_picture_show === '0') {
            this.categoryArr.push(item)
          } else {
            this.projectArr.push(item)
          }
        }
        // this.classify = response.data.categoryList
      })
    },
    // 下拉列表 跳转
    handleSelectItem(item) {
      this.categoryLink.cid = item.id
      this.categoryLink.cp = item.is_picture_show
      open(this.categoryLink)
    },
    // 搜索
    handleSearch(item) {
      this.search = item.replace(/[ ]/g, '')
      if (validateSearch(this.search)) {
        persistStore.set('key', this.search)
        this.handleLink('/other/pages/search')
      } else {
        message(this, 'error', '请输入不包含特殊字符且小于30个字符的关键词！')
      }
    },
    // 兑换码 --- 关闭头部绑定课程
    handleCloseEcg() {
      this.bindForm.courseId = ''
      this.bindForm.isBind = false
    },
    // 兑换码 --- 打开头部绑定课程
    handleAddEcg() {
      if (this.token) {
        this.bindForm.isBind = true
      } else {
        this.$alert(
          '您暂未登录，无法绑定兑换码，请先完成用户登录！',
          '温馨提示',
          {
            confirmButtonText: '确定',
            center: true,
            callback: action => {
              if (action === 'cancel') {
              } else {
                this.handleSignOut()
                this.$bus.$emit('loginShow', true)
              }
            }
          }
        )
      }
    },
    // 兑换码 --检测兑换码内是否包含已绑定的课程
    handleDetection() {
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
              message(this, 'info', '已取消绑定')
            })
            .catch(() => {
              // 添加绑定课程
              this.handleBind()
            })
        } else {
          this.handleBind()
        }
      })
    },
    invitationCodeType(item) {
      switch (item) {
        case '1':
          //兑换码内只有课程
          this.skip = 'tab-second'
          break
        case '2':
          //兑换码内只有项目
          this.skip = 'tab-third'
          break
        case '3':
          //兑换码内只有项目 +课程
          this.skip = 'tab-first'
          break
      }
    },
    // 兑换码 -- 头部绑定课程
    handleBind() {
      header.bindingCurriculumPrivate(this.bindForm).then(res => {
        if (res.status === 0) {
          message(this, 'success', res.msg)
          this.invitationCodeType(res.data.invitation_code_type)
          this.bindForm.courseId = ''
          this.bindForm.isBind = false
          this.handleLinkProfile(this.skip)
          if (window.location.pathname === '/profile') {
            this.$bus.$emit('studyCourse')
            this.$bus.$emit('studyProject')
          }
        } else if (res.status === '100100') {
          this.bindForm.showErr = true
          message(this, 'error', res.msg)
          this.bindForm.error = res.msg
        }
      })
    },
    // 个人中心 跳转
    handleLinkProfile(item) {
      this.gidForm.gids = item
      this.setGid(this.gidForm)
      this.getUserInfo()
      this.$router.push('/profile')
      this.$bus.$emit('selectProfileIndex', item)
    },
    // 个人中心 退出
    handleSignOut() {
      this.signOut()
      this.$router.push('/')
      persistStore.clearAll()
    },
    // 个人中心 登录
    login() {
      this.$bus.$emit('loginShow')
    },

    // 个人中心 注册
    register() {
      this.$bus.$emit('registerShow')
    },
    // 个人中心 购物车数量
    getShopCartNum() {
      if (this.isAuthenticated) {
        header.shopCartList().then(res => {
          if (res.status === '100008') {
            this.getHttp = false
          } else {
            if (res.data) {
              this.setProductsNum({
                pn:
                  Number(res.data.curriculumCartList.length) +
                  Number(res.data.projectCartList.length)
              })
            }
          }
        })
      }
    },
    // 个人中心 重新登录 弹框
    reLoginAlert(type, res) {
      this.getHttp = false
      persistStore.set('isSingleLogin', false)
      this.$alert(res.msg + ',' + '请重新登录', '温馨提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.handleSignOut()
          //初始化首页数据
          this.$bus.$emit('loginShow', true)
          if (type) {
            this.$bus.$emit('reLogin', true)
          }
        }
      })
    },
    // 个人中心 单点登录 逻辑 判断
    isSingleLogin(res) {
      if (res.status === '100008') {
        // 设置单点登录
        this.reLoginAlert(true, res)
      } else if (res.status === '100100') {
        // 设置单点登录
        if (this.authPath.indexOf(window.location.pathname) > 0) {
          this.reLoginAlert(true, res)
        }
      } else {
        if (persistStore.get('isSingleLogin') === false) {
          this.$bus.$emit('isSingleLogin', false)
        }
        this.getAll()
        persistStore.set('isSingleLogin', true)
        // 设置用户信息
        this.setUserInfo(res)
      }
    },
    // 个人中心 个人信息设置
    setUserInfo(res) {
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
    },
    // 个人中心 用户头像
    getUserInfo() {
      header.getUserInfo().then(res => {
        // console.log(res, 'replaceState')
        this.isSingleLogin(res)
      })
    },
    getAll() {
      this.getShopCartNum()
      if (!this.token) {
        this.signOut()
      }
    },
    onBusEvent() {
      // 监听 优惠专题入口的banner 隐藏
      this.$bus.$on('bannerImg', data => {
        this.bannerMsg = data
      })
      // 更换头像
      this.$bus.$on('changeimg', data => {
        this.user.userImg = data
      })
      // 重新拉取用户信息
      this.$bus.$on('getUserInfo', data => {
        this.getUserInfo()
      })
      // 获取购物车数量
      this.$bus.$on('updateCount', () => {
        this.getShopCartNum()
      })
    },
    // 兼容IE
    explorer() {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        this.judegExplorer = true
      } else {
        this.judegExplorer = false
      }
    }
  },
  mounted() {
    // 获取顶部课程列表
    this.getClassifyList()
    this.getUserInfo()
    // 非单点登录 getHttp为true
    this.onBusEvent()
  }
}
</script>
