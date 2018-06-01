<template>
<div class="catalog">
   <div class="chapter" v-for="(catalog,index) in catalogs" :key="index">
      <h4>{{catalog.chapterName}}</h4>
      <div class="bar clearfix" v-for="(bar,index) in catalog.barList" :key="index" @click="checked(index)">
        <span class="fl playIcon"><i class="el-icon-caret-right"></i></span>
        <span class="fl barName">{{bar.number}} {{bar.barName}} （{{bar.duration}}）</span>
        <span class="fl free" v-if="bar.isFree">免费</span>
        <span class="fr freePlay" v-if="bar.isFree || catalog.isLogin">立即观看</span>
        <span class="fr freePlay" v-else>购买课程</span>
        <el-progress v-if="catalog.isLogin == true && bar.isFree == false && bar.percentage>0" class="fr" :text-inside="true" :stroke-width="8" :percentage="bar.percentage" :show-text="false" color="#6417A6"></el-progress>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    props: ['catalogs']
  }
</script>

<style scoped lang="scss">
  // @import "~assets/style/playDetail";
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
        // margin-left: 40px;
        // .c {
        //   display: inline-block;
        //   padding-left: 10px;
        // }
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
