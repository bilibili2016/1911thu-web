<template>
  <div class="projectPlayer clearfix" ref="playerBox">
    <!-- 左侧播放器 -->
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <v-playertop :data="projectDetail.title"></v-playertop>
      <v-player ref="video" :playerForm="playerForm" :isloaded="isloaded" :playerInner="innerHeight" :bought="bought" :isLookAt="lookAt" :isFreeCourse="isFreeCourse" @changePlayImg="changeImg" @falseLoaded="falseLoaded"></v-player>
      <v-playerbottom :collectMsg="collectMsg" :iseve="iseve" @showRpt="showRpt" @showElt="showElt" :config="config"></v-playerbottom>
    </div>
    <!-- 右侧课程小结列表 -->
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner" ref="inner">
        <v-list :courseList="courseList" :playing="playing" :ischeck="ischeck"></v-list>
      </div>
      <div class="fold" @click="fold">
        <i :class="mediaRIcon"></i>
      </div>
    </div>
    <!-- 报告问题 -->
    <v-report :config="configReport"></v-report>
    <!-- 写评价 -->
    <v-evaluate @closeEvaluate="closeEvaluate" :showEvaluate="showEvaluate" :playerForm="playerForm"></v-evaluate>
    <!-- 扫码支付 -->
    <v-pay></v-pay>
  </div>
</template>

<script>
import { auth, projectplayer } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import Playertop from '@/pages/project/projectPlayer/playerTop.vue'
import Player from '@/pages/project/projectPlayer/player.vue'
import PlayerBottom from '@/pages/project/projectPlayer/playerBottom.vue'
import Repore from '@/components/common/Report.vue'
import Pay from '@/components/common/Pay.vue'
import List from '@/pages/project/projectPlayer/CourseList.vue'
import Evaluate from '@/pages/project/projectPlayer/evaluate.vue'
import { message, matchSplits } from '@/lib/util/helper'
export default {
  components: {
    'v-playertop': Playertop,
    'v-player': Player,
    'v-playerbottom': PlayerBottom,
    'v-report': Repore,
    'v-pay': Pay,
    'v-list': List,
    'v-evaluate': Evaluate
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      isClose: true,
      isFreeCourse: '',
      videoState: false,
      showReportBug: false,
      title: '1',
      showEvaluate: false,
      innerHeight: 100,
      curriculumcartids: {
        cartid: null
      },
      isloaded: false,
      ischeck: '',
      mediaRW: 22,
      mediaLW: 78,
      lookAt: '',
      mediaRInner: true,
      mediaRIcon: 'el-icon-arrow-right',
      radioBtn: '',
      playing: '',
      courseList: [],
      projectDetail: {},
      hsgForm: {
        hsgs: true
      },
      config: {
        type: '1'
      },
      configReport: {
        type: 2,
        curriculumId: '',
        catalogId: ''
      },
      playerForm: {
        curriculumId: '',
        catalogId: '',
        curriculumType: 2,
        projectId: '',
        seek: 0
      },
      projectForm: {
        ids: ''
      },
      collectMsg: {
        types: 2,
        isCollect: 0
      },
      iseve: false,
      bought: false,
      seconds: 500000,
      time: '',
      nextCatalogId: '', //默认播放下一小节id
      interval: '',
      index: 0
    }
  },
  methods: {
    falseLoaded() {
      this.isloaded = false
    },
    // 获取视频播放参数
    getCurriculumPlayInfo() {
      projectplayer.getPlayerList(this.projectForm).then(response => {
        this.projectDetail = response.data.curriculumProjectDetail
        this.courseList = response.data.curriculumProjectDetail.curriculumList
        this.playerForm.curriculumId =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.curriculum_id
        this.playerForm.catalogId =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.curriculumCatalog_id
        this.playerForm.seek = Number(
          response.data.curriculumProjectDetail.defaultCurriculumCatalog
            .see_spot
        )
        this.bought =
          response.data.curriculumProjectDetail.curriculumProjectPrivilege
        this.isFreeCourse = response.data.curriculumProjectDetail.is_free
        this.iseve =
          response.data.curriculumProjectDetail.is_evaluateCurriculumProject
        if (response.data.curriculumProjectDetail.is_Collection) {
          this.collectMsg.isCollect = 1
        } else {
          this.collectMsg.isCollect = 0
        }
        this.playerForm.projectId = this.projectForm.ids
        // 获取到默认播放小节里的是否试看
        this.lookAt =
          response.data.curriculumProjectDetail.defaultCurriculumCatalog.look_at
        // 播放所需数据加载完成后加载播放器数据
        this.isloaded = true
      })
    },
    // 改变播放小图片
    changeImg(data, id) {
      this.playing = data
      this.ischeck = id
    },
    // 打开报告问题
    showRpt() {
      this.configReport.curriculumId = this.playerForm.curriculumId
      this.configReport.catalogId = this.playerForm.catalogId
      this.$bus.$emit('openReport')
    },
    // 展示评论
    showElt() {
      this.showEvaluate = true
      // 展示评论-暂停播放器
      this.$refs.video.isPause()
    },
    // 关闭评论
    closeEvaluate() {
      this.showEvaluate = false
      // 关闭评论-播放器继续播放
      this.$refs.video.isPlay()
    },
    // 改变屏幕宽度重置播放器大小
    resize() {
      if (this.$refs.playerBox) {
        const h = this.$refs.playerBox.offsetHeight
        this.$refs.mediaL.style.height = h + 'px'
        this.$refs.mediaR.style.height = h + 'px'
        this.innerHeight = h - 100
        this.$refs.inner.style.height = h - 100 + 'px'
      }
    },
    // 隐藏右侧课程列表
    fold() {
      if (this.$refs.mediaR.offsetWidth != 0) {
        this.mediaRW = 0
        this.mediaRInner = false
        this.mediaRIcon = 'el-icon-arrow-left'
        this.mediaLW = 100
      } else {
        this.mediaRW = 22
        this.mediaRInner = true
        this.mediaRIcon = 'el-icon-arrow-right'
        this.mediaLW = 78
      }
    }
  },
  mounted() {
    this.config.type = matchSplits('type')
    this.resize()
    window.addEventListener('resize', this.resize)
    if (this.isAuthenticated) {
      this.projectForm.ids = matchSplits('kid')
      this.getCurriculumPlayInfo()
    } else {
      this.$router.push(
        '/project/projectdetail?kid=' +
          matchSplits('kid') +
          '&type=' +
          matchSplits('type')
      )
      this.$bus.$emit('loginShow', true)
    }
    this.$bus.$emit('hideHeader', true)
    this.seconds = 10000000
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('headerFooterHide')
    })
  },
  beforeRouteLeave(to, from, next) {
    this.$bus.$emit('headerFooterShow')
    next(vm => {})
  }
}
</script>

