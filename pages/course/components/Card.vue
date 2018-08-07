<template>
  <div>
    <div class="courseList center">
      <!-- v-for="(course,index) in courseList -->
      <div class="course clearfix  ">
        <el-card class="fl" :body-style="{ padding: '0px' }">
          <div class="goodplay">
            <img :src="courseList.picture" class="image">
            <div class="mask">1</div>
            <div class="common-button btn-bg">
              <!-- 登录 不登录 播放按钮 -->
              <div class="playBtn-detail">
                <img :src="playImg" alt="" @click="handleImgPlay(courseList)">
              </div>
            </div>
          </div>
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
                  <el-button type="primary" :disabled="isClick" plain @click="handleFreeNoneStudy(courseList)">{{ isAuthenticated === false ? '立即学习': '开始学习'}}</el-button>
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
                  <el-button type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
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
                    <el-button type="primary " :disabled="isClick" plain @click="handleFreeNoneStudy(courseList) ">加入购物车</el-button>
                  </div>
                  <!-- 未购买 购买判断  已购买-->
                  <div v-if="privileMsg===true ">
                    <el-button type="primary " :disabled="isClick " plain @click="handleFreeNoneStudy(courseList)">立即学习</el-button>
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

                  <div>
                    <el-button type="primary" plain @click="handleFreeNoneStudy(courseList)">继续学习</el-button>
                  </div>
                  <div>
                    <el-button type="primary" plain @click="handleAddShopCart(courseList)" style="margin-right:30px;">加入购物车</el-button>
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
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['courseList', 'privileMsg'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['token', 'productsNum', 'kid'])
  },
  data() {
    return {
      playImg: 'http://papn9j3ys.bkt.clouddn.com/play.png',
      two_is_cart: 0,
      curriculumcartids: {
        cartid: null,
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setNid', 'setTid']),
    // 获取默认小节 跳转 章节id和小节id
    getDefaultCurriculumCatalogId(item) {
      persistStore.set(
        'curriculumId',
        item.defaultCurriculumCatalog.curriculum_id
      )
      persistStore.set('catalogId', item.defaultCurriculumCatalog.id)

      window.open(window.location.origin + '/course/player')
    },
    // 左侧播放按钮事件
    handleImgPlay(item) {
      // 用户已登录
      if (this.isAuthenticated) {
        // 用户已购买
        if (this.privileMsg === true) {
          window.open(window.location.origin + '/course/player')
        } else {
          // 用户未购买
          // console.log(item, '这是item')
          this.getDefaultCurriculumCatalogId(item)
        }
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
      console.log(item, '这是item')
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
    }
  }
}
</script>

<style scoped lang="scss">
.courseList {
  width: 1100px;
  margin: 0 auto;
  .bottom {
    margin-bottom: 40px;
  }
  .boxshadow-none {
    position: relative;
  }
  .course {
    width: 100%;
    padding: 40px 0 40px 40px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
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
      width: 660px;
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
        padding-left: 40px;
        margin-right: 40px;
        margin-bottom: 40px;
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 8px;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h4:hover {
          color: #8f4acb;
        }
        p {
          font-size: 14px;
          line-height: 30px;
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
        padding: 15px 40px 0;
        .coin {
          color: red;
          font-size: 17px;
          padding-left: 20px;
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
          margin-top: 21px;
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
        div {
          margin-top: 10px;
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
          .el-button--primary {
            color: #6417a6;
            &.is-plain {
              border-color: #6417a6;
            }
            &:hover {
              color: #8f4acb;
              background-color: #fff;
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
        // padding: 30px 40px 0;
        padding: 15px 0 0 0;
        border-top: 1px rgba(232, 214, 247, 1) solid; // margin-top: 65px;
        p {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #222222;
          line-height: 25px;
          margin-bottom: 25px;
          height: 123px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
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
  }
}
.btn-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -70px;
  margin-top: -20px;
  .el-button {
    width: 174px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    color: #6417a6;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
