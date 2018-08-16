<template>
  <div class="catalog">
    <!-- {{catalogs}} -->
    <!-- 遍历章节 -->
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.title}} </h4>
      <!-- {{privileMsg}} -->
      <!-- {{privileMsg}}  1{{isAuthenticated}} -->
      <!-- 遍历小节 -->
      <div class="bar clearfix" v-for="(bar,index) in catalog.childList" :key="index" @click="handleCatalog(index,catalog)">
        <!-- 小节上 左侧播放图片 项目中的 课程详情不展示-->
        <span class="fl playIcon" v-if="config.card_type!=='project'">
          <i class="el-icon-caret-right"></i>
        </span>

        <p>
          <span class="fl barName">{{bar.video_number}}、{{bar.title}}({{bar.video_time}}分钟)</span>
          <!-- 用户已购买 并且进度大于零 -->
          <span v-if="privileMsg === true">
            <span v-if="bar.percent > 0">
              <!-- 课程目录进度条 -->
              <el-progress :percentage="bar.percent" :show-text="false"></el-progress>
            </span>
          </span>
          <!-- 用户 登录 -->
          <!-- 项目 中课程详情 不显示按钮 config.card_type!=='project'-->
          <span v-if="config.card_type!=='project'" class="fr">
            <span v-if="isAuthenticated" class="fr">
              <span v-if="privileMsg === false">
                <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="goLink('player')">立即试看</span>
                <span class="fr freePlay" v-else @click="goBuy(catalog,index)">购买课程</span>
              </span>
              <span v-if="privileMsg === true">
                <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="goLink('player')">立即观看</span>
                <span class="fr freePlay" v-if="bar.look_at === '1' || catalog.isLogin" @click="goLink('player')">立即观看</span>
              </span>
            </span>
            <span v-else class="fr clearfix">
              <span class="fr freePlay" v-if="bar.look_at === '2' && bar.is_free === '1'" @click="buyMask">立即试看{{bar.is_free}}==={{bar.look_at}}</span>
              <span class="fr freePlay" v-if="bar.is_free === '2'" @click="buyMask">立即观看{{bar.is_free}}==={{bar.look_at}}</span>
              <span class="fr freePlay" v-if="bar.is_free === '1'&&bar.look_at === '1'" @click="goBuy(catalog,index)">购买课程{{bar.is_free}}==={{bar.look_at}}</span>
            </span>
          </span>

        </p>
        <span v-if="privileMsg === true">
          <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#6417A6"></el-progress>
        </span>

      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { auth, line } from '~/lib/v1_sdk/index'
import { splitUrl } from '~/lib/util/helper'
export default {
  props: ['catalogs', 'privileMsg', 'config'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      curriculumcartids: {
        cartid: null
      },
      move: true,
      percents: 50,
      playerForm: {
        curriculumId: '',
        catalogId: '',
        autoplay: true
      }
    }
  },
  methods: {
    goLink(item) {
      // this.$router.push(item)
    },
    goBuy(item, index) {
      if (this.isAuthenticated) {
        this.curriculumcartids.cartid = item.curriculum_id
        this.addShopCart()
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    addShopCart() {
      return new Promise((resolve, reject) => {
        line.addShopCart(this.curriculumcartids).then(response => {
          this.$router.push('/shop/shoppingcart')
        })
      })
    },
    checked(index) {
      $('.catalog .chapter .bar').removeClass('checked')
      $('.catalog .chapter .bar')
        .eq(index)
        .addClass('checked')
    },
    handleCatalog(index, item) {
      //立即观看隐藏课程播放的覆盖层
      // if (document.getElementsByClassName('goodplay')[0]) {
      //   document.getElementsByClassName('goodplay')[0].style.display = 'none'
      // }
      let curriculum_id = item.childList[index].curriculum_id
      let catalog_id = item.childList[index].id
      let video_time = item.childList[index].second
      persistStore.set('video_time', video_time)
      this.$router.push(
        '/course/coursedetail' + '?kid=' + splitUrl(0, 1) + '&bid=' + catalog_id
      )
      this.playerForm.curriculumId = curriculum_id
      this.playerForm.catalogId = catalog_id
      this.$bus.$emit('updateCourse', this.playerForm)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    buyMask() {
      message(this, 'success', '请登录后,进行试看')
      this.$bus.$emit('loginShow', true)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/line';
</style>
