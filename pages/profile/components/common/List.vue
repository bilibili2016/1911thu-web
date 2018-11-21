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
            <div class="mask-style">
              <img v-if="!config.mask" :src="jinImg" alt="" class="jin-style">
            </div>
            <div class="bgImgs" @click="selectCid(card,config.project,card.type)">
              <img v-if="config.project&&card.type==='1'" src="http://static-image.1911edu.com/p4.png" class="project-img">
              <img v-if="config.project&&card.type==='2'" src="http://static-image.1911edu.com/p5.png" class="project-img">
              <img class="coverImg" :src="card.picture" alt="">
            </div>
            <div class="tag">
              <span v-if="card.tag.length !== 0" v-for="(tag,index) in card.tag" :key="index">{{tag}}</span>
            </div>
            <div class="common-button btn-bgs ">
              <!-- 学习中 -->
              <el-button v-if="card.percent < 1&&!card.overtime" type="primary" plain @click="study(card,config.project,card.type)">开始学习</el-button>

              <!-- 已过期 -->
              <!-- 定制项目 非创建者不能购买 -->
              <div v-if="card.type==='2' && !card.is_creator"></div>

              <div v-else>
                <el-button v-if="card.expire_day < 1&&card.overtime" type="primary" plain @click="addShopCarts(card,index)">
                  <span v-if="(card.type==1&&card.study_type==1)||!config.project">
                    加入购物车
                  </span>
                  <span v-else>立即购买</span>
                </el-button>
              </div>

              <!-- 学习中 -->
              <el-button v-if="card.percent > 0&&!card.overtime&&config.card==='learning'" type="primary" plain @click="study(card,config.project,card.type)">
                <span>继续学习</span>
              </el-button>
              <!-- 已完成 -->
              <el-button v-if="card.percent===100&&config.card==='already'" type="primary" plain @click="study(card,config.project,card.type)">
                <span>再次学习</span>
              </el-button>
            </div>
            <el-row>
              <!-- 课程标题 -->
              <div class="item">
                <p class="itemBox-name itemBoxTitle" @click="selectCid(card,config.project,card.type)">
                  <span :title="card.title">{{card.title}}</span>
                </p>
              </div>
              <!-- 学习进度 -->
              <!-- 课程的学习进度 -->
              <div class="line-wraps" v-if="config.card==='learning'&&config.project">
                <div class="line-centers ">
                  <!-- <span class="studyPercent">已学习{{card.percent}}%</span> -->
                  <span class="studyIsFree">剩余{{card.expire_day}}天</span>
                  <el-progress v-if="card.percent>0" :percentage="card.percent" :show-text="false"></el-progress>
                </div>
              </div>
              <!-- 项目的学习进度 -->
              <div class="line-wraps" v-if="config.card==='learning'&&!config.project">
                <div class="line-centers ">
                  <!-- <span class="studyPercent">已学习{{card.percent}}%</span> -->
                  <span class="studyIsFree" v-if="card.is_free === '1'">剩余{{card.expire_day}}天</span>
                  <span class="studyIsFree" v-else>免费</span>
                  <el-progress v-if="card.percent>0" :percentage="card.percent" :show-text="false"></el-progress>
                </div>
              </div>
              <div v-if="config.card==='already' ">
                <div class="line-centers ">
                  <!-- <span class="already">已完成100%</span> -->
                  <span class="studyIsFree" v-if="card.is_free === '1'">剩余{{card.expire_day}}天</span>
                </div>
              </div>
              <div class="readyImg " v-if="config.card==='already' ">
                <img :src="readyImg " alt=" ">
              </div>
              <!-- 我的课程 已过期的图片 -->
              <div class="overtime " v-if="config.card==='overtime' ">
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
            <div>
              <div class="new-style " v-if="config.new==='true' ">
                <img :src="newTag " alt=" ">
              </div>
              <div class="mask-style " @click="selectCid(card,config.project,card.type) ">
                <img :src="jinImg " alt=" " class="jin-style ">
              </div>
              <!-- 我的首页的图片背景 -->
              <div class="bgImgs " @click="selectCid(card,config.project,card.type) ">
                <img :src="card.picture " alt=" ">
              </div>
              <!-- 我的课程的 我的收藏 -->
              <el-row>
                <div class="item ">
                  <p class="itemBox-name" @click="selectCid(card,config.project,card.type) ">
                    <span :title="card.title">{{card.title}}</span>
                  </p>
                  <div class="deputyTitleOverTime">{{card.deputy_title}}</div>
                </div>
                <div v-if="!config.project" class="line-wrap " @click.stop="goTeacherInfo(card.teacher_id) ">
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
import { profileHome } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { open, matchSplits } from '@/lib/util/helper'

export default {
  props: ['config', 'data'],
  data() {
    return {
      readyImg: 'http://static-image.1911edu.com/ready.png',
      overTimeImg: 'http://static-image.1911edu.com/overtime.png',
      jinImg: 'http://static-image.1911edu.com/jin.png',
      kidForm: {
        kids: ''
      },
      tidForm: {
        tids: ''
      },
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      cidNumber: '',
      courseUrl: {
        base: '/course/coursedetail',
        kid: 0,
        bid: '',
        page: 0
      }
    }
  },
  methods: {
    // flag为true进入项目详情，false进入课程详情
    study(item, flag, type) {
      if (flag) {
        // this.openProjectPlayer(item.id, type)
        this.openDetail(item)
      } else {
        this.openDetail(item)
      }
    },
    selectCid(item, flag, type) {
      if (flag) {
        this.openProjectDetail(item.id, type)
      } else {
        this.openDetail(item)
      }
    },
    openProjectPlayer(id, type) {
      let urlLink = {
        base: '/project/projectplayer',
        kid: id,
        type: type
      }
      open(urlLink)
    },
    openProjectDetail(id, type) {
      this.$router.push({
        path: '/project/projectdetail',
        query: {
          kid: id,
          type: type
        }
      })
    },
    openDetail(item) {
      this.kidForm.kids = item.id

      this.courseUrl.kid = item.id
      open(this.courseUrl)

      // this.$router.push({
      //   path: '/course/coursedetail',
      //   query: {
      //     kid: item.id,
      //     bid: '',
      //     page: 0
      //   }
      // })
    },
    goTeacherInfo(id) {
      this.tidForm.tids = id * 1
      this.$router.push('/home/teacher/' + this.tidForm.tids)
    },
    // 判断购物车数量
    goodsNmber() {
      if (persistStore.get('productsNum') < 70) {
        profileHome.addShopCart(this.curriculumcartids).then(response => {
          this.$router.push('/shop/shoppingcart')
        })
      } else {
        this.$alert('您的购物车已满，建议您先去结算或清理', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push('/shop/shoppingcart')
          }
        })
      }
    },
    // 已过期商品直接加入购物车
    addShopCarts(item, index) {
      if (!this.config.project) {
        this.curriculumcartids.cartid = item.id
        this.curriculumcartids.type = 1
        this.goodsNmber()
      } else {
        if (item.type == '2') {
          //定制项目
          this.$router.push({
            path: '/shop/affirmorder',
            query: { id: item.id, type: 1 }
          })
        } else {
          //普通项目
          if (item.study_type == '1') {
            //1.线上
            this.curriculumcartids.cartid = item.id
            this.curriculumcartids.type = 2
            this.goodsNmber()
          } else {
            //2.混合 3.互动
            this.$router.push({
              path: '/shop/affirmorder',
              query: { id: item.id, type: 1 }
            })
          }
        }
      }

      for (var i = 0; i < this.data.length; i++) {
        if (i === index) {
          this.$set(this.data[i], 'is_checked', true)
        }
      }
    }
  }
}
</script>

