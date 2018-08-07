    <!-- 我的课程：学习中，已完成，已过期，我的收藏 -->
<template>
  <div class="card">
    <!-- 学习中，已完成，已过期， -->
    <template v-if="config.card_type==='profile'">
      <div class="card-category profile">
        <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
          <el-card shadow="never" body-style="padding: 0;" class="itemBox learn">
            <div class="new-style" v-if="config.new === 'true'">
              <img :src="newTag" alt="">
            </div>
            <div class="mask-style" @click="selectCid(card,index)">
              <img v-if="!config.mask" :src="jinImg" alt="" class="jin-style">
            </div>
            <div class="bgImgs">
              <img :src="card.picture" alt="">
            </div>
            <div class="tag">
              <span v-if="card.tag.length !== 0" v-for="(tag,index) in card.tag" :key="index">{{tag}}</span>
            </div>
            <div class="common-button btn-bgs ">
              <el-button v-if="card.percent < 1&&!card.overtime" type="primary" plain @click="goToPlay(card)">开始学习</el-button>
              <el-button v-if="card.expire_day < 1&&card.overtime" type="primary" plain @click="goShoppingCart(card)">
                <span>
                  加入购物车
                </span>
              </el-button>
              <el-button v-if="card.percent > 0&&!card.overtime" type="primary" plain @click="goToPlay(card)">
                <span>继续学习</span>
              </el-button>
            </div>
            <el-row @click.native="selectCid(card,index)">
              <!-- 课程标题 -->
              <div class="item">
                <p class="itemBox-name itemBoxTitle">
                  <span>{{card.title}}</span>
                </p>
              </div>
              <!-- 学习进度 -->
              <div class="line-wraps" v-if="config.card==='learning' ">
                <div class="line-centers ">
                  <span class="studyPercent">已学习{{card.percent}}%</span>
                  <span class="studyIsFree" v-if="card.is_free === '1'">剩余{{card.expire_day}}天</span>
                  <el-progress v-if="card.percent>0" :percentage="card.percent "></el-progress>
                </div>
              </div>
              <div v-if="config.card==='already' ">
                <div class="line-centers ">
                  <div class="already">已完成100%</div>
                </div>
              </div>
              <div class="readyImg " v-if="config.card==='already' ">
                <img :src="readyImg " alt=" ">
              </div>
              <!-- 我的课程 已过期的图片 -->
              <div class="readyImg " v-if="config.card==='overtime' ">
                <img :src="overTimeImg" alt=" ">
              </div>
              <!-- 我的课程 已过期的副标题 -->
              <div class="deputyTitleOverTime" v-if="config.card==='overtime' ">{{card.deputy_title}}</div>
            </el-row>
          </el-card>
        </div>
      </div>
    </template>
    <!-- 我的收藏-->
    <template v-if="config.card_type==='shoucang' ">
      <div class="card-category profile ">
        <div v-for="(card,index) in data " :index="index " :key="card.id " class="card-list ">
          <el-card shadow="never " body-style="padding: 0; " class="itemBox collect">
            <div @click="courseInfo(card,index) ">
              <div class="new-style " v-if="config.new==='true' ">
                <img :src="newTag " alt=" ">
              </div>
              <div class="mask-style ">
                <img :src="jinImg " alt=" " class="jin-style ">
              </div>
              <!-- 我的首页的图片背景 -->
              <div class="bgImgs ">
                <img :src="card.picture " alt=" ">
              </div>
              <!-- 我的课程的 我的收藏 -->
              <el-row>
                <div class="item ">
                  <p class="itemBox-name ">
                    <span>{{card.title}}</span>
                  </p>
                  <div class="deputyTitleOverTime">{{card.deputy_title}}</div>
                </div>
                <div class="line-wrap " @click.stop="goTeacherInfo(card.teacher_id) ">
                  <div class="line-center">
                    <img :src="card.head_img " alt=" ">
                    <span>{{card.teacher_name}}</span>
                    <span class="title ">{{card.graduate}}</span>
                  </div>
                </div>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['config', 'data'],
  data() {
    return {
      readyImg: require('@/assets/images/ready.png'),
      overTimeImg: require('@/assets/images/overtime.png'),
      jinImg: require('@/assets/images/jin.png'),
      kidForm: {
        kids: ''
      },
      tidForm: {
        tids: ''
      },
      curriculumcartids: {
        cartid: null,
        type: 1
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setTid']),
    selectCid(item, index) {
      this.kidForm.kids = item.id
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      this.curriculumcartids.cartid = item.id
      this.openDetail()
    },
    courseInfo(item, index) {
      this.kidForm.kids = item.id
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      this.openDetail()
    },
    openDetail() {
      window.open(window.location.origin + '/course/coursedetail')
    },
    goToPlay(item) {
      persistStore.set('curriculumId', item.id)
      persistStore.set('catalogId', item.catalog_id)
      window.open(window.location.origin + '/course/player')
    },
    // 已过期商品直接加入购物车
    goShoppingCart(item) {
      this.kidForm.kids = item.id
      this.setKid(this.kidForm)
      this.addShopCarts()
    },
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1
      this.setTid(this.tidForm)
      window.open(window.location.origin + '/home/components/teacher')
    },
    addShopCarts() {
      this.curriculumcartids.cartid = this.kid
      home.addShopCart(this.curriculumcartids).then(response => {
        this.$router.push('/shop/shoppingcart')
      })
      for (var i = 0; i < this.data.length; i++) {
        if (i === index) {
          this.$set(this.data[i], 'is_checked', true)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
// 我的课程列表
.card-category {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  .card-list {
    border-radius: 16px;
    transition: all 500ms linear;
    margin: 0 30px 50px 0;
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    .itemBox {
      cursor: pointer;
      width: 250px;
      height: 294px;
      display: flex;
      border-radius: 0;
      flex-direction: column;
      align-items: center;
      position: relative;
      border: none;
      border-bottom: 1px solid #eee;
      transition: all 500ms linear;
      img {
        width: 250px;
        height: 160px;
      }
      .new-style {
        img {
          width: 48px !important;
          height: 34px !important; // margin-top: -20px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      }
      .mask-style {
        width: 250px;
        height: 160px;
        background-color: rgba(100, 23, 166, 0.5);
        position: absolute;
        opacity: 0;
        transition: all 300ms;
        .jin-style {
          width: 25px !important;
          height: 14px !important;
          position: absolute;
          top: 73px;
          left: 112.5px;
          z-index: 1000;
          display: none;
          transition: all 300ms;
        }
      }
      .bgImgs {
        width: 250px;
        height: 160px;
        overflow: hidden;
        img {
          width: 250px;
          height: 160px;
          transition: all 500ms;
        }
      }
      .tag {
        position: absolute;
        top: 126px;
        left: 4px;
        span {
          display: inline-block;
          padding: 6px 11px 5px 10px;
          background: rgba(37, 55, 163, 1);
          opacity: 0.6;
          border-radius: 6px;
          color: #fff;
          margin-left: 8px;
          max-width: 92px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .btn-bgs {
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -70px;
        margin-top: -29px;
        color: #732eaf;
      }
      .deputyTitleOverTime {
        width: 220px;
        height: 20px;
        line-height: 20px;
        margin: 8px 0;
        overflow: hidden;
        font-size: 14px;
        color: #93999f;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all 500ms linear;
      }
      .item {
        cursor: pointer;
        .itemBox-name {
          width: 250px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 42, 81, 1);
          overflow: hidden;
          transition: all 500ms linear;
          &.itemBoxTitle {
            .title {
              display: block;
              line-height: 20px;
              height: 38px;
              color: #1c1f21;
              margin-top: 16px;
              padding-right: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
      // 已过期的图片
      .readyImg {
        width: 75px;
        height: 49px;
        position: absolute;
        top: 40%;
        left: 94%;
        margin-left: -70px;
        margin-top: -20px;
        img {
          width: 75px;
          height: 49px;
        }
      }
      .line-wrap {
        width: 100%;
        height: 35px;
        line-height: 30px;
        transition: all 500ms linear;
      }
      .line-wraps {
        height: 50px;
      }
      .line-center {
        overflow: hidden;
        height: 35px;
        span {
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
          padding-top: 1px;
          display: inline-block;
        }
        img {
          width: 22px;
          height: 22px;
          padding: 0px;
          margin: 0 10px 0 0;
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
          border-radius: 50%;
        }
        .title {
          width: 140px;
          height: 31px;
          line-height: 31px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          float: right;
          color: rgba(109, 104, 127, 1);
          vertical-align: middle;
        }
      }
      .line-centers {
        .studyPercent {
          padding-bottom: 10px;
          color: #6417a6;
        }
        .studyIsFree {
          float: right;
          padding-bottom: 10px;
          color: #888;
        }
        p {
          margin-bottom: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1); // line-height:0px;
        }
        div {
          margin-bottom: 26px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1);
        }
        .already {
          transition: all 500ms linear;
        }
      }
      &.learn {
        height: auto;
        .item .itemBox-name {
          margin: 20px 0;
        }
        .line-wraps {
          .line-centers {
            .studyPercent {
              transition: all 500ms linear;
            }
            .studyIsFree {
              margin-right: 18px;
            }
          }
        }
      }
      &.collect {
        height: auto;
        padding-bottom: 15px;
        .item .itemBox-name {
          padding-top: 10px;
        }
        &:hover {
          box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.12);
          transition: all 500ms linear;
          .jin-style {
            display: block;
            transition: all 500ms linear;
          }
          .mask-style {
            opacity: 1;
          }
          .bgImgs img {
            width: 260px;
            height: 165.2px;
          }
          .itemBox-name {
            transition: all 500ms linear;
            padding-left: 15px;
          }
          .itemBox-info {
            transition: all 500ms linear;
            padding: 0px 0px 0px 15px;
          }
          .learn {
            .line-wraps .line-centers {
              .studyPercent {
                padding: 0px 0px 0px 15px;
              }
            }
          }
          .deputyTitleOverTime {
            margin-left: 16px;
          }
          .already {
            margin-left: 16px;
          }
          .line-wrap {
            transition: all 500ms linear;
            padding: 0px 0px 0px 15px;
          }
          .title {
            transition: all 500ms linear;
            color: #8f4acb !important;
          }
        }
      }
    }
  }
  .el-card {
    border-radius: 16px;
    border-bottom: 1px solid #eeeeee;
  }
}
</style>
