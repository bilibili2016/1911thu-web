<template>
  <div>
    <div class="newOrFreeCourseList center goodlesson">
      <div class="course clearfix bottom " v-for="(course,index) in courseList " :key="index " @click="courseInfo(course) ">
        <el-card class="fl " :body-style="{ padding: '0px' } ">

          <!-- 老师封面 -->
          <img v-if="teacherImg" :src="course.teacher_picture " class="image " alt=" ">
          <!-- 课程封面 -->
          <img :src="course.picture" class="image " alt=" " v-else>
        </el-card>

        <div class="particulars fr ">
          <!-- 课程标题副标题 课程介绍 -->
          <div class="currentclum ">
            <h4 @click="courseInfo(course)">{{course.title}}</h4>
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
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['courseList'],
  computed: {
    ...mapState('auth', ['token', 'productsNum', 'kid'])
  },
  data() {
    return {
      peopleImg: require('@/assets/images/ren.png'),
      teacherImg: true,
      kidForm: {
        kids: null
      },
      two_is_cart: 0,
      curriculumcartids: {
        cartid: null,
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setProductsNum']),
    // 点击跳转课程详情页
    handleLinkCourseDetail(item) {
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      window.open(window.location.origin + '/course/coursedetail')
    },
    // 添加购物车
    handleAddShopCart(item) {
      console.log(item, '这是item')
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
      home.addShopCart(this.curriculumcartids).then(response => {
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
      if (window.location.pathname.split('/')[2] === '2') {
        this.teacherImg = false
      } else {
        this.teacherImg = true
      }
    }
  },
  mounted() {
    this.isTeacherPage()
  }
}
</script>

<style scoped lang="scss">
.newOrFreeCourseList {
  width: 1100px;
  margin: 0 auto;
  .boxshadow-none {
    position: relative;
  }
  .el-card {
    width: 360px;
    height: 230px;
    border-radius: 0;
    .el-card__body {
      img {
        width: 360px;
        height: 230px;
      }
    }
  }
  .course {
    width: 100%;
    padding: 32px 0;
    border-bottom: 1px solid #eee;
    transition: all 0.5s;
    // border-radius: 6px;
    // background-color: #fff;
    // box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    .el-card.is-always-shadow {
      box-shadow: none;
    }
    .el-card {
      // width: 400px;
      // height: 392px;
      font-size: 0;
      position: relative;
      .img-wrap {
        width: 400px;
        height: 260px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      & > img {
        width: 400px;
        height: 260px;
      }
      .personInfo {
        width: 100%;
        height: 132px;
        background-color: #6417a6;
        cursor: pointer;
        img {
          float: left;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 31px 26px;
        }
        h5,
        p {
          float: left;
          width: 274px;
          color: #fff;
        }
        h5 {
          margin-top: 41px;
          font-size: 18px;
        }
        p {
          font-weight: 400;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
        }
      }
      .play-btn {
        width: 76px;
        height: 76px;
        border-radius: 38px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -43px;
        margin-top: -89px;
        cursor: pointer;
      }
    }
    .goodplay {
      position: relative;
      .image {
        width: 480px;
        height: 312px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 480px;
        height: 312px;
        background: rgba(100, 23, 166, 1);
        opacity: 0.5;
      }
      .playBtn-detail {
        width: 76px;
        height: 76px;
        margin-left: 30px;
        margin-top: -10px;
        img {
          cursor: pointer;
        }
      }
    }
    .particulars {
      width: 720px;
      // transition: all 0.5s;
      .no-comment {
        height: 120px;
        background-color: rgba(250, 250, 250, 1);
        overflow: hidden;
        .comment-img {
          width: 48px;
          height: 44px;
          margin: 22px auto 13px;
        }
        .comment-text {
          font-size: 14px;
          color: rgba(136, 136, 136, 1);
          width: 159px;
          margin: 0 auto;
        }
      }
      .currentclum {
        padding-left: 20px;
        margin-right: 22px;
        // margin-bottom: 40px;
        h4 {
          font-size: 18px;
          color: #222;
          margin: 10px 0 18px 0;
          cursor: pointer;
          line-height: 26px;
        }
        h4:hover {
          color: #8f4acb;
        }
        .small-title {
          font-size: 14px;
          color: #93999f;
          margin-bottom: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .title-desc {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        p {
          font-size: 14px;
          line-height: 28px;
          color: #222;
          cursor: pointer;
        }
      }
      .comment {
        height: 134px;
        margin-top: 5px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .bordernone {
        border: none;
        padding-top: 0px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 30px;
        padding: 0px 40px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      .study {
        padding: 30px 22px 0 20px;
        // height: 50px;
        // line-height: 42px;
        .coin {
          color: #ff4400;
          font-size: 18px;
          margin-bottom: 10px;
          // padding-left: 20px;
        }
        .mfree {
          color: #222;
        }
        .common-button {
          p.goStudy {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border-radius: 18px;
            border: 1px solid #6417a6;
            overflow: hidden;
            font-size: 0;
            span {
              margin: 0;
              height: 34px;
              text-align: center;
              font-size: 14px;
              color: #6417a6;
              cursor: pointer;
              &.fl {
                width: 88px;
              }
              &.fr {
                width: 50px;
                background-color: #6417a6;
              }
            }
          }
        }
        span {
          font-size: 14px;
          color: #888888;
          // margin-top: 21px;
          display: inline-block;
          &:nth-child(3) {
            width: 140px;
            height: 36px;
            line-height: 36px;
            border: 1px solid #6417a6;
            color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
        }
        .common-button-half {
          width: 56px;
          height: 40px;
          line-height: 40px;
          background: #6417a6;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          transition: all 300ms;
          span {
            width: 20px;
            height: 20px;
            margin: 10px 0 10px 15px;
            background: url('~assets/images/shopcard.png') no-repeat;
            background-size: contain;
          }
          &:hover {
            background: #8f4acb;
          }
        }
        .common-button-half-right {
          margin-top: -26px;
          transition: all 0.5s;
          .el-button {
            width: 144px;
            border-radius: 21px;
            line-height: 1.2;
            background-color: rgba(255, 255, 255, 0);
          }
          .el-button--primary {
            color: #6417a6;
            &.is-plain {
              border-color: #6417a6;
            }
            &:hover {
              color: #fff;
              background-color: #8f4acb;
              &.is-plain {
                border-color: #8f4acb;
              }
            }
          }
        }
      }
      .common-button-half {
        img {
          width: 20px !important;
          height: 20px !important;
        }
        .el-button {
          padding: 9px 16px;
          border: 1px #6417a6 solid;
          border-left: none;
        }
      }
      .date {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
      }
      .time {
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
        margin: 10px 40px;
      }
      .more {
        color: #6417a6;
        font-size: 14px;
        margin: 10px 40px;
        cursor: pointer;
      }
    }
    .particularss {
      width: 510px;
      margin-right: 30px;
      .currentclum {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 34, 34, 1);
        line-height: 0px;
        cursor: pointer;
        .tg {
          color: #ff5f5f;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 95, 95, 1);
          padding-bottom: 20px;
          padding-top: 10px;
        }
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h4:hover {
          color: #8f4acb;
          cursor: pointer;
        }
        .clum {
          height: 25px;
          .coursenum {
            padding: 0;
          }
        }
        .coursenum {
          width: auto;
          line-height: 25px;
          padding-top: 12px;
          cursor: pointer;
          span {
            display: inline-block;
            margin-right: 15px;
          }
        }
        .coins {
          float: right;
          color: #ff5f5f;
          padding-top: 17px;
          font-size: 16px;
          padding-right: 20px;
        }
        .rate {
          padding-top: 14px;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #222;
        }
        span {
          font-size: 14px;
          color: #888888;
          &:nth-child(2) {
            width: 140px;
            height: 36px;
            line-height: 36px; // border: 1px solid #6417a6;
            // color: #6417a6;
            text-align: center;
            border-radius: 18px;
            cursor: pointer;
          }
          img {
            width: 14px;
            height: 14px;
            // vertical-align: middle;
          }
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          margin: 0px 0px 0px 15px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
        }
      }
      .comment {
        height: 134px;
        margin-top: 40px;
        padding: 0 40px 10px;
        background-color: #fafafa;
        color: #888;
        h5 {
          line-height: 40px;
          .itemBox-rate {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-left: 20px;
            vertical-align: middle;
          }
        }
        p {
          font-size: 14px;
          color: #888888;
          line-height: 30px;
        }
      }
      .study {
        // height: 50px;
        // padding: 30px 40px 0;
        padding: 20px 0 0 0;
        border-top: 1px rgba(232, 214, 247, 1) solid; // margin-top: 65px;
        p {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 30px;
          margin-bottom: 20px;
          height: 94px;
          // border: 1px red solid;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          &.soldOut {
            text-decoration: underline;
          }
        }
        h4 {
          float: left;
          color: #222;
          p {
            margin: 0;
            &:first-child {
              font-size: 20px;
            }
            &:last-child {
              font-size: 14px;
            }
          }
        }

        .common-button .is-plain {
          border-radius: 20px;
          border-color: #6417a6;
          color: #6417a6;
          font-weight: 400;
          transition: all 300ms;
          &:hover {
            color: #fff;
            border-color: #8f4acb;
          }
        }
        &.bought {
          .common-button .is-plain {
            margin-top: 30px;
          }
          .lineProgress {
            clear: both;
            width: 100%;
            padding-top: 45px;
            h5 {
              width: 100%;
              line-height: 30px;
              text-align: right;
              font-size: 14px;
              color: #666;
            }
            .el-progress-bar {
              .el-progress-bar__outer {
                height: 14px;
                background-color: #ffdb5f;
              }
              .el-progress-bar__inner {
                background-color: #6417a6;
              }
            }
          }
        }
      }
    }
    &:hover {
      background-color: #fff;
      box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
      padding-left: 20px;

      .particulars {
        .currentclum {
          h4 {
            color: #8f4acb;
          }
        }
      }
    }
    .Newtime {
      width: 131px;
      float: right;
      font-size: 22px;
      margin-top: 19px;
      color: #888888;
      .timeDetail {
        margin-bottom: 92px;
      }
      .timeLink {
        cursor: pointer;
      }
      .line {
        width: 1px;
        height: 22px;
        background: rgba(229, 229, 229, 1);
      }
      img {
        display: inline-block;
        width: 25px;
        height: 14px;
        margin-left: 15px;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
