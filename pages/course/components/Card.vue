<template>
  <div>
    <div class="curriculumList center">
      <!-- v-for="(course,index) in courseList -->
      <div class="course clearfix  ">
        <el-card class="fl" :body-style="{ padding: '0px' }">
          <div class="goodplay" v-if="isShowCover">
            <img :src="courseList.picture" class="image">
            <div class="mask">1</div>
            <div class="common-button btn-bg">
              <!-- 登录 不登录 播放按钮 -->
              <div class="playBtn-detail">
                <img :src="playImg" alt="" @click="handleImgPlay(courseList)">
              </div>
            </div>
          </div>
          <v-player></v-player>
        </el-card>
        <div class="particularss fr">
          <div class="currentclum">

            <!-- ==(免费2)={{courseList.is_free}} 是否购买{{privileMsg}} 是否学习（1已学习）{{courseList.is_study }} -->
            <!-- 团购价更优，团购电话：010-62701911 -->
            <!-- <div class="tg">团购价更优，团购电话：010-62701911</div> -->
            <!-- 判断是否免费 is_free(2是免费)-->

            <!-- 公共项目标题 -->
            <h4>{{courseList.title}} </h4>
            <!-- 免费课程 未学习 start-->
            <div v-if=" courseList.is_free === '2' && courseList.is_study === 0 ">
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div>
                <span class="fl coursenum">
                  <span>{{courseList.study_time}}学时</span><img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}</span>
                <span class="rate">
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
              <!-- 课程介绍 登录 未登录 学习按钮 -->
              <div class="study clearfix">
                <!-- 课程介绍 -->
                <p>{{courseList.introduction}}</p>
                <div class="common-button">
                  <el-button type="primary" plain @click="handleFreeNoneStudy(courseList)">{{ isAuthenticated === false ? '立即学习': '开始学习'}}</el-button>
                </div>
              </div>

            </div>
            <!-- 免费课程 未学习 end-->
            <!-- 免费课程 已学习 start-->
            <div v-if=" courseList.is_free === '2' && courseList.is_study === 1 ">
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="clum">
                <span class="fl coursenum">
                  <img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}人正在学习
                </span>
              </div>
              <!-- 时间 学习按钮  进度条-->
              <div class="study clearfix bought">
                <h4 class="clearfix">
                  <p>{{parseInt(courseList.study_curriculum_time / 60)}}分钟{{parseInt(courseList.study_curriculum_time % 60)}}秒</p>
                  <p>已学时长</p>
                </h4>
                <div class="common-button">
                  <!-- 免费课程学习到100后显示再次学习 -->
                  <el-button v-if="Number(courseList.percent)>0&&Number(courseList.percent)<100" type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
                  <el-button v-if="Number(courseList.percent)===100" type="primary" plain @click="handleFreeNoneStudy(courseList)">再次学习</el-button>
                  <div class="lineProgress">
                    <h5>已完成{{courseList.percent}}%</h5>
                    <el-progress :stroke-width="14" color="#6417a6" :show-text="false" :percentage="courseList.percent"></el-progress>
                  </div>
                </div>
              </div>
            </div>
            <!-- 免费课程 已学习 end-->
            <!-- 收费课程 未学习 购买以及未购买判断在内部判断  start-->
            <div v-if=" courseList.is_free === '1' && courseList.is_study === 0 ">
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div>
                <span class="fl coursenum">
                  <span>{{courseList.study_time}}学时</span><img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}</span>
                <span class="rate">
                  <el-rate disabled v-model="courseList.score"></el-rate>
                </span>
              </div>
              <!-- 课程介绍 未购买 学习按钮-->
              <div class="study clearfix">
                <p>{{courseList.introduction}}</p>
                <div class=" common-button ">
                  <!-- 未购买 购买判断  未购买-->
                  <div v-if="privileMsg===false ">
                    <el-button type="primary " plain @click="handleFreeNoneStudy(courseList) ">加入购物车</el-button>
                    <el-button type="primary " plain @click="freeStudy(courseList) ">免费试看</el-button>
                  </div>
                  <!-- 未购买 购买判断  已购买-->
                  <div v-if="privileMsg===true ">
                    <el-button type="primary " plain @click="handleAddShopCart(courseList) ">加入购物车</el-button>
                    <el-button type="primary " plain @click="handleFreeNoneStudy(courseList)">开始学习</el-button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 收费课程  未购买 未学习 end -->
            <!-- 收费课程 已学习 说明已经购买  start-->
            <div v-if=" courseList.is_free === '1' && courseList.is_study === 1 ">
              <!-- 学时 以及 学习人数 星级 价钱-->
              <div class="clum">
                <span class="fl coursenum">
                  <img src="@/assets/images/home_num.png" alt=""> {{courseList.study_number}}人正在学习</span>
              </div>
              <!-- 课程介绍 未购买 学习按钮-->
              <div class="study clearfix bought">
                <h4 class="clearfix">
                  <p>{{parseInt(courseList.study_curriculum_time / 60)}}分钟{{parseInt(courseList.study_curriculum_time % 60)}}秒</p>
                  <p>已学时长</p>
                  <!-- <p class="soldOut" v-if="courseList.status =='2'">此课程已下架</p> -->
                </h4>
                <div class="common-button">
                  <!-- 学习到100后显示再次学习，否则显示继续学习 -->
                  <div v-if="Number(courseList.percent)>0&&Number(courseList.percent)<100">
                    <el-button type="primary" plain @click="handleAddShopCart(courseList)">加入购物车</el-button>
                    <el-button type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
                  </div>
                  <div v-if="Number(courseList.percent)===100">
                    <el-button type="primary" plain @click="handleAddShopCart(courseList)">加入购物车</el-button>
                    <el-button type="primary" plain @click="handleFreeNoneStudy(courseList)">再次学习</el-button>
                  </div>
                  <div class="lineProgress">
                    <h5>已完成{{courseList.percent}}%</h5>
                    <el-progress :stroke-width="14" color="#6417a6" :show-text="false" :percentage="courseList.percent"></el-progress>
                  </div>
                </div>
              </div>

            </div>
            <!-- 收费课程 已学习 说明已经购买  end-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { category } from '~/lib/v1_sdk/index'
import CardPlayer from '@/pages/course/components/CardPlayer'
export default {
  components: {
    'v-player': CardPlayer
  },
  props: ['courseList', 'privileMsg'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token', 'productsNum', 'kid'])
  },
  data() {
    return {
      isShowCover: true,
      playImg: 'http://papn9j3ys.bkt.clouddn.com/play.png',
      two_is_cart: 0,
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      playerForm: {
        curriculumId: '',
        catalogId: '',
        autoplay: true
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid']),
    // 免费试看
    freeStudy(item) {
      if (this.isAuthenticated) {
        this.getDefaultCurriculumCatalogId(item)
      } else {
        // 当用户未登录
        this.$bus.$emit('loginShow', true)
      }
    },
    // 获取默认小节 跳转 章节id和小节id
    getDefaultCurriculumCatalogId(item) {
      this.isShowCover = false
      persistStore.set(
        'curriculumId',
        item.defaultCurriculumCatalog.curriculum_id
      )
      persistStore.set('catalogId', item.defaultCurriculumCatalog.id)

      // window.open(window.location.origin + '/course/player')
      this.playerForm.curriculumId = item.defaultCurriculumCatalog.curriculum_id
      this.playerForm.catalogId = item.defaultCurriculumCatalog.id
      this.$bus.$emit('updateCourse', this.playerForm)
    },
    // 左侧播放按钮事件
    handleImgPlay(item) {
      // 用户已登录
      if (this.isAuthenticated) {
        this.getDefaultCurriculumCatalogId(item)
      } else {
        // 未登录直接弹出登录
        this.$bus.$emit('loginShow', true)
      }
    },
    // 点击立即学习按钮
    handleFreeNoneStudy(item) {
      // 当用户登录
      if (this.isAuthenticated) {
        // // 用户已经购买 以及 课程为免费 获取默认播放id
        if (this.privileMsg === true) {
          this.getDefaultCurriculumCatalogId(item)
        } else {
          // 用户未购买 点击 加入购物车按钮
          this.handleAddShopCart(item)
        }
      } else {
        // 当用户未登录
        this.$bus.$emit('loginShow', true)
      }
    },
    // 用户 未购买的逻辑 点击加入购物车逻辑
    handleAddShopCart(item) {
      // 第一次点击 没有 在购物车
      if (item.is_cart === 0) {
        if (this.two_is_cart === 0) {
          this.addCourseShopCart(item)
        } else {
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }
      } else {
        // 第一次点击 在购物车
        this.$message({
          type: 'success',
          message: '您的商品已经在购物车里面'
        })
      }
    },
    // 添加购物车函数
    addCourseShopCart(item) {
      this.curriculumcartids.cartid = item.id
      category.addShopCart(this.curriculumcartids).then(response => {
        let len = Number(this.productsNum) + 1
        this.setProductsNum({
          pn: len
        })
        this.two_is_cart = 1
        this.$message({
          type: 'success',
          message: '加入购物车成功'
        })
      })
    }
  }
}
</script>

