<template>
  <div>
    <div class="newOrFreeCourseList center goodlesson">
      <div class="course clearfix bottom " v-for="(course,index) in courseList " :key="index " @click="courseInfo(course) ">
        <el-card class="fl " :body-style="{ padding: '0px' } ">
          <div class="courseImg">
            <!-- 项目图标 -->
            <img v-if="cidNumber==='0'" class="project-img" src="http://papn9j3ys.bkt.clouddn.com/p4.png" alt="">
            <!-- 老师封面 -->
            <img v-if="!teacherImg" :src="course.teacher_picture " class="image" alt=" ">
            <!-- 课程封面 -->
            <img :src="course.picture" class="image" alt=" " v-else>
          </div>
        </el-card>

        <div class="particulars fr ">
          <!-- 课程标题副标题 课程介绍 -->
          <div class="currentclum ">
            <h4>{{course.title}}</h4>
            <p class="small-title">{{course.deputy_title}}</p>
            <p class="title-desc">{{course.introduction}}</p>
          </div>

          <div class="study clearfix">
            <!-- 免费课程 展示 -->
            <div v-if="course.is_free =='2'">
              <p class="coin">免费</p>
              <span class="fl"><img :src="peopleImg" alt=""> {{course.study_number}}人加入学习</span>
              <div class="fr common-button-half-right">
                <el-button type="primary" plain @click.stop="handleLinkCourseDetail(course)"> 立即学习</el-button>
              </div>
            </div>
            <!-- 收费课程展示 -->
            <div v-else>
              <p class="coin">￥ {{course.present_price}}</p>
              <span class="fl"><img :src="peopleImg" alt=""> {{course.study_number}}人加入学习</span>
              <div class="fr common-button-half-right">
                <el-button type="primary" plain @click.stop="handleAddShopCart(course)"> 加入购物车 </el-button>
              </div>
            </div>
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
import { open } from '@/lib/util/helper'
export default {
  props: ['courseList'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token', 'productsNum', 'kid'])
  },
  data() {
    return {
      cidNumber: '',
      peopleImg: require('@/assets/images/ren.png'),
      teacherImg: true,
      kidForm: {
        kids: null
      },
      two_is_cart: 0,
      cart: 0,
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      courseDetail: {
        base: '/course/coursedetail',
        kid: null,
        bid: '',
        page: 0
      },
      projectDetail: {
        base: '/project/projectdetail',
        kid: null,
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setProductsNum']),
    // 点击跳转课程详情页
    handleLinkCourseDetail(item) {
      this.courseDetail.kid = item.id
      if (this.cidNumber === '2') {
        this.courseDetail.page = 1
      } else {
        this.courseDetail.page = 0
      }
      open(this.courseDetail)
    },
    // 设置购物车中 is_cart 改变
    handleChangeIsCart(item) {
      for (let i of this.courseList) {
        if (i === item) {
          i.is_cart = 1
        }
      }
    },
    // 添加购物车
    handleAddShopCart(item, cart) {
      if (this.cidNumber === '0') {
        //项目
        this.curriculumcartids.type = 2
      } else {
        //课程
        this.curriculumcartids.type = 1
      }
      // 判断是否登录
      if (persistStore.get('token')) {
        // 第一次点击 没有 在购物车
        if (item.is_cart === 0) {
          this.addCourseShopCart(item)
          this.handleChangeIsCart(item)
        } else {
          // 第一次点击 在购物车
          this.$message({
            type: 'success',
            message: '您的商品已经在购物车里面'
          })
        }
      } else {
        // 当用户未登录
        this.$bus.$emit('loginShow', true)
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
    },
    // 判断是否为老师页面
    isTeacherPage() {
      if (window.location.pathname.split('/')[3] === '2') {
        this.teacherImg = false
      } else {
        this.teacherImg = true
      }
    },
    //课程详情
    courseInfo(item, index) {
      if (this.cidNumber === '0') {
        // 项目-项目详情
        this.projectDetail.kid = item.id
        open(this.projectDetail)
      } else {
        this.kidForm.kids = item.id
        this.courseDetail.kid = item.id
        if (this.cidNumber === '2') {
          this.courseDetail.page = 1
        } else {
          this.courseDetail.page = 0
        }
        open(this.courseDetail)
      }
    }
  },
  mounted() {
    this.isTeacherPage()
    this.cidNumber = window.location.pathname.split('/')[3]
  }
}
</script>

<style scoped lang="scss">
// 组件兼容
@import '~assets/style/course/listCard';
</style>
