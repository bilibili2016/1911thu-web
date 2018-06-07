<template>
  <div class="catalog">
    <div class="chapter" v-for="(catalog,index) in catalogs" :key="index" @click="handleCatalog(index,catalog)">
      <h4>{{catalog.title}}</h4>
      <div class="bar clearfix" v-for="(bar,index) in catalog.childList" :key="index" @click="checked(index)">
        <span class="fl playIcon"><i class="el-icon-caret-right"></i></span>
        <span class="fl barName">{{bar.video_number}} {{bar.title}} （{{bar.video_time}}）</span>
        <span class="fl free" v-if="bar.look_at === '2'">免费</span>
        <span class="fr freePlay" v-if="bar.look_at === '2' || catalog.isLogin" @click="goLink('player')">立即观看</span>
        <span class="fr freePlay" v-else @click="goBuy">购买课程</span>
        <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#6417A6"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ["catalogs", 'privileMsg'],
  methods: {
    goLink(item) {
      this.$router.push(item);
    },
    goBuy () {
      this.$router.push('/shop/shoppingCart');
    },
    checked(index) {
      $(".catalog .chapter .bar").removeClass("checked");
      $(".catalog .chapter .bar").eq(index).addClass("checked");
    },
    handleCatalog(index, item) {
      let curriculum_id = item.childList[index].curriculum_id
      let catalog_id = item.childList[index].id
      persistStore.set('curriculumId', curriculum_id)
      persistStore.set('catalogId', catalog_id)
    }
  }
};
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
