    <!-- 我的项目：学习中，已完成，已过期，我的收藏 -->
<template>
  <div class="myProject card">
    <!-- 学习中，已完成，已过期， -->
    <template v-if="config.card_type==='profile'">
      <div class="card-category profile">
        <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
          <el-card shadow="never" body-style="padding: 0;" class="itemBox learn">
            <div class="new-style" v-if="config.new === 'true'">
              <img :src="newTag" alt="">
            </div>
            <div class="mask-style" @click="openDetail(card)">
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
            <el-row @click.native="openDetail(card)">
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
            <div @click="openDetail(card) ">
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
      readyImg: 'http://papn9j3ys.bkt.clouddn.com/ready.png',
      overTimeImg: 'http://papn9j3ys.bkt.clouddn.com/overtime.png',
      jinImg: 'http://papn9j3ys.bkt.clouddn.com/jin.png',
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
    ...mapActions('auth', ['setProductsNum', 'setKid']),
    openDetail(item) {
      persistStore.set('projectId', item.id)
      window.open(window.location.origin + '/project/projectDetail')
    },
    goToPlay(item) {
      persistStore.set('projectId', item.id)
      window.open(window.location.origin + '/project/projectPlayer')
    },
    // 已过期商品直接加入购物车
    goShoppingCart(item) {
      this.kidForm.kids = item.id
      // this.setKid(this.kidForm)
      this.addShopCarts()
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
</style>
