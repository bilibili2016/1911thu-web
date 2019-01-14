<template>
  <div class="catalog">
    <!-- 遍历章节 -->
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.title}}</h4>
      <!-- 遍历小节 -->
      <div
        class="bar clearfix"
        v-for="(bar,index) in catalog.childList"
        :key="index"
        @click="handleCatalog(index,catalog)"
      >
        <span class="fl playIcon" v-show="changeImg.id == bar.id?false:true">
          <i class="el-icon-caret-right"></i>
        </span>
        <span class="fl playImg" v-show="changeImg.id == bar.id?true:false">
          <img :src="changeImg.img" alt>
        </span>
        <p>
          <span class="fl barName">{{bar.video_number}}.{{bar.title}}({{bar.video_time}}分钟)</span>
          <!-- 用户已购买 并且进度大于零 -->
          <span v-if="privileMsg === true">
            <span v-if="bar.percent > 0">
              <!-- 课程目录进度条 -->
              <el-progress :percentage="bar.percent" :show-text="false"></el-progress>
            </span>
          </span>
          <!-- 用户 登录 -->
          <span v-if="isAuthenticated" class="fr">
            <span v-if="privileMsg === true">
              <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin">立即观看</span>
            </span>
          </span>
        </p>
        <span v-if="privileMsg === true">
          <el-progress
            v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0"
            class="fr"
            :text-inside="true"
            :stroke-width="8"
            :percentage="bar.percentage"
            :show-text="false"
            color="#773084"
          ></el-progress>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { auth, line } from '~/lib/v1_sdk/index'
import { message, matchSplits, open } from '~/lib/util/helper'
export default {
  props: ['catalogs', 'privileMsg', 'config', 'changeImg'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data () {
    return {
      curriculumcartids: {
        cartid: null
      },
      move: true,
      percents: 50,
      playerForm: {
        curriculumId: '',
        catalogId: '',
        curriculumType: 1,
        autoplay: true
      },
      courseUrl: {
        base: '/course/coursedetail',
        kid: 0,
        bid: '',
        page: 0
      }
    }
  },
  methods: {
    goBuy (item, index) {
      if (persistStore.get('token')) {
        this.curriculumcartids.cartid = item.curriculum_id
        this.goodsNmber()
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 判断购物车数量
    goodsNmber () {
      if (persistStore.get('productsNum') < 70) {
        this.addShopCart()
      } else {
        this.$alert('您的购物车已满，建议您先去结算或清理', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push('/shop/shoppingcart')
          }
        })
      }
    },
    addShopCart () {
      line.addShopCart(this.curriculumcartids).then(response => {
        this.$router.push('/shop/shoppingcart')
      })
    },
    handleCatalog (index, item) {
      // 是否登录
      if (!persistStore.get('token')) {
        this.$bus.$emit('loginShow', true)
        return false
      }
      // 该课程是否为未购买 且不可试看
      if (
        this.privileMsg === false &&
        item.childList[index].look_at === '1'
      ) {
        this.curriculumcartids.cartid = item.childList[index].curriculum_id
        this.addShopCart()
        return false
      }
      let curriculum_id = item.childList[index].curriculum_id
      let catalog_id = item.childList[index].id
      this.playerForm.curriculumId = curriculum_id
      this.playerForm.catalogId = catalog_id
      this.$bus.$emit('updateCourse', this.playerForm)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    buyMask () {
      this.$bus.$emit('loginShow', true)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/style/components/line";
</style>
