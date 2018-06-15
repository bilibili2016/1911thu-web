<template>
  <div class="catalog">
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.title}}</h4>
      <!-- {{privileMsg}}  1{{isAuthenticated}} -->
      <div class="bar clearfix" v-for="(bar,index) in catalog.childList" :key="index">
        <span class="fl playIcon">
          <i class="el-icon-caret-right"></i>
        </span>
        <p @click="handleCatalog(index,catalog)">
          <span class="fl barName">{{bar.video_number}} {{bar.title}} （{{bar.video_time}}分钟）</span>
          <!-- <span class="fl free" v-if="bar.look_at === '2'">免费</span> -->
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
            <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="buyMask">立即试看</span>
            <span class="fr freePlay" v-else @click="goBuy(catalog,index)">购买课程</span>
          </span>
        </p>
        <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#6417A6"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { other, auth, home } from '~/lib/v1_sdk/index'
export default {
  props: ['catalogs', 'privileMsg'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      curriculumcartids: {
        cartid: null
      }
    }
  },
  methods: {
    goLink(item) {
      this.$router.push(item)
    },
    goBuy(item, index) {
      this.curriculumcartids.cartid = item.curriculum_id
      this.addShopCart()
    },
    addShopCart() {
      return new Promise((resolve, reject) => {
        home.addShopCart(this.curriculumcartids).then(response => {
          // this.$router.push('/shop/shoppingCart')
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
      // console.log(index, 'index')
      // console.log(item, 'item')
      let curriculum_id = item.childList[index].curriculum_id
      let catalog_id = item.childList[index].id
      // console.log(curriculum_id, '这是curriculum_id')
      // console.log(catalog_id, '这是catalog_id')
      let video_time = item.childList[index].second
      // console.log(video_time, '这是video_time')
      persistStore.set('video_time', video_time)
      persistStore.set('curriculumId', curriculum_id)
      persistStore.set('catalogId', catalog_id)
    },
    buyMask() {
      this.$message({
        message: '请登录后,进行试看',
        type: 'success'
      })
      this.$bus.$emit('loginShow', true)
    }
  }
}
</script>

<style scoped lang="scss">
.main-crumb {
  height: 85px;
  .main-crumbs {
    display: inline-block;
    line-height: 85px;
    height: 85px;
  }
  .fr {
    .collect {
      height: 85px;
      .line-center {
        line-height: 85px;
        img {
          width: 18px;
          height: 18px;
          display: inline-block;
          padding: 0px;
          margin: 0px;
          margin-right: 4px;
          vertical-align: middle;
        }
        span {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1);
          line-height: 0px;
          display: inline;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
