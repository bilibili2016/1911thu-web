<template>
  <div>
    <v-banner :config="bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-fourth'"></v-banner>
    <div class="center-tab center profile" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="empty">
        <!-- 我的信息 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label" class="tabList">
            <i class="icon-home"></i> 我的首页</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>最近学习</span>
            </div>
            <div class="content">
              <v-card v-if="studyData  && studyData.length>0" :data="studyData" :config="configZero"></v-card>
              <div v-else class="noCourse">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有学习过的课程呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label" class="tabList">
            <i class="icon-course"></i> 我的课程</span>
          <el-card>
            <el-tabs v-model="activeNames">
              <el-tab-pane label="学习中" name="first">
                <v-card v-if="newDataing  && newDataing.length>0" :data="newDataing" :config="configOne"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有学习中的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="second">
                <v-card v-if="newDataReady && newDataReady.length>0" :data="newDataReady" :config="configTwo"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经完成的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="我的收藏" name="third">
                <v-card v-if="collectionData && collectionData.length>0" :data="collectionData" :config="configZero"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经收藏的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-third">
          <span slot="label" class="tabList">
            <i class="icon-message"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info @noMsg="isNoMyMsg"></v-info>
            <div class="content" v-show="noMyMsg">
              <div class="noCourse" v-if="noMyMsg">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有我的消息呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-fourth">
          <span slot="label" class="tabList">
            <i class="icon-set"></i> 个人设置</span>
          <v-person @update="updateUserInfo"></v-person>
        </el-tab-pane>
        <!-- 绑定Id -->
        <el-tab-pane name="tab-fifth">
          <span slot="label" class="tabList">
            <i class="icon-bind"></i> 绑定课程ID</span>
          <v-bind @isShowMsg="isShowMsg"></v-bind>
          <div class="content">
            <div class="noCourse" v-if="isShowNoCourse">
              <img :src="noMsgImg" alt="">
              <h4>抱歉，现在还没有已经绑定的课程呦~</h4>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/common/Card.vue'
import Banner from '@/components/common/Banner.vue'
import PersonalSet from '@/pages/profile/pages/personalSet.vue'
import Binding from '@/pages/profile/pages/bindId'
import Info from '@/pages/profile/pages/info'
import { other, home } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'v-card': CustomCard,
    'v-person': PersonalSet,
    'v-bind': Binding,
    'v-info': Info,
    'v-banner': Banner
  },
  data() {
    return {
      isShowNoCourse: false,
      noMyMsg: false,
      study: false,
      avator: 'http://pam8iyw9q.bkt.clouddn.com/profile_avator01.png',
      noMsgImg: 'http://pam8iyw9q.bkt.clouddn.com/noMsg.png',
      tabPosition: 'left',
      activeTab: 'tab-first',
      activeNames: 'first',
      bconfig: {
        banner_type: 'profile'
      },
      configZero: {
        card_type: 'shoucang',
        card: 'home'
      },
      configOne: {
        card_type: 'profile',
        card: 'learning'
      },
      configTwo: {
        card_type: 'profile',
        card: 'already'
      },
      newData: [],
      styleForm: {
        types: 1,
        pages: 0,
        limits: 12
      },
      studyData: [],
      newDataing: [],
      newDataReady: [],
      collectionForm: {
        pages: 1,
        limits: 12
      },
      collectionData: [],
      isUpdate: false
    }
  },

  watch: {
    activeTab(val) {
      if (val == 'tab-sixth') {
        this.goShop()
      }
    }
  },
  computed: {
    ...mapState('auth', ['token', 'gid'])
  },
  methods: {
    isNoMyMsg(isShow) {
      this.noMyMsg = isShow
    },
    isShowMsg(isShow) {
      this.isShowNoCourse = isShow
    },
    updateUserInfo(flag) {
      this.isUpdate = flag
    },
    goLink(item) {
      this.$router.push(item)
    },
    goShop() {
      this.goLink('/shop/checkedCourse')
    },
    empty() {},

    studyCurriculumList() {
      this.styleForm.types = 1
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          // console.log(response, '这是response')
          this.newDataing = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    studydataList() {
      this.styleForm.types = 3
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          // console.log(response, '这是response')
          this.studyData = response.data.curriculumList
          for (let item of response.data.curriculumList) {
            item.percent = Number(item.percent)
          }
          resolve(true)
        })
      })
    },
    readyStudyCurriculumList() {
      this.styleForm.types = 2
      this.styleForm.pages = 0
      this.styleForm.limits = 12
      return new Promise((resolve, reject) => {
        home.studyCurriculumList(this.styleForm).then(response => {
          this.newDataReady = response.data.curriculumList
          resolve(true)
        })
      })
    },
    collectionList() {
      return new Promise((resolve, reject) => {
        home.collectionList(this.collectionForm).then(response => {
          this.collectionData = response.data.curriculumList

          resolve(true)
        })
      })
      this.goLink('/course/pages/categoryd')
    }
  },
  mounted() {
    if (!this.token) {
      // this.$router.push('/')
      // console.log(this.token, '123')
    }
    this.studydataList()
    this.studyCurriculumList()
    this.readyStudyCurriculumList()
    this.collectionList()
    this.activeTab = this.gid
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    if (this.$route.query.tab) {
      this.activeTab = this.$route.query.tab
    }
  },
  created() {
    this.$bus.$on('selectProfileIndex', data => {
      this.activeTab = data
    })
  }
}
</script>
<style scope lang="scss">
.profile {
  .content .noCourse {
    width: 100%;
    height: 600px;
    background-color: #fff;
    text-align: center;
    img {
      width: 316px;
      height: 274px;
      margin-top: 35px;
    }
    h4 {
      height: 70px;
      line-height: 70px;
      text-align: center;
      color: #999;
      font-size: 20px;
    }
    p {
      width: 140px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      border-radius: 18px;
      background: #6417a6;
      color: #fff;
      transition: all 300ms;
      font-size: 14px;
      &:hover {
        background-color: #8f4acb;
      }
    }
  }
  .tabList {
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-bottom: -4px;
      &.icon-home {
        background: url('~assets/images/icon_home1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-course {
        background: url('~assets/images/icon_course1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-message {
        background: url('~assets/images/icon_message1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-set {
        background: url('~assets/images/icon_set1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-bind {
        background: url('~assets/images/icon_bind1.png') no-repeat center;
        background-size: contain;
      }
      &.icon-choose {
        background: url('~assets/images/icon_choose1.png') no-repeat center;
        background-size: contain;
      }
    }
  }
  .el-tabs__item.is-active i {
    &.icon-home {
      background: url('~assets/images/icon_home2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-course {
      background: url('~assets/images/icon_course2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-message {
      background: url('~assets/images/icon_message2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-set {
      background: url('~assets/images/icon_set2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-bind {
      background: url('~assets/images/icon_bind2.png') no-repeat center;
      background-size: contain;
    }
    &.icon-choose {
      background: url('~assets/images/icon_choose2.png') no-repeat center;
      background-size: contain;
    }
  }
}
</style>
