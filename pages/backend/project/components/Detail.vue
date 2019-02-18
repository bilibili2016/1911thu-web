<template>
  <div class="header-mask">
    <!-- 面包屑 收藏分享 -->
    <div class="main-crumb clearfix">
      <!-- 面包屑组件 -->
      <div class="fl">
        <div class="breadCrumb">
          <span v-show="BreadCrumb.position">当前位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{BreadCrumb.text}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <!-- 项目详情页上部分-项目信息 -->
    <div class="title-item">
      <!-- 项目不显示标题和副标题 -->
      <div v-if="projectType.types==='2'">
        <h1>{{projectDetail.title}}</h1>
        <h3>{{projectDetail.deputy_title}}</h3>
      </div>
    </div>
    <div class="detail clearfix">
      <div class="some fl">
        <div>
          <h5>学时</h5>
          <p>
            <span>{{projectDetail.study_time}}</span> 学时
          </p>
        </div>
        <div>
          <h6>已学习人数</h6>
          <p>
            <span>{{projectDetail.study_number}}</span> 人
          </p>
        </div>
        <div v-if="projectType.types==='1'">
          <h6>综合评分</h6>
          <p>
            <span>{{projectDetail.score}}</span> 分
          </p>
        </div>
      </div>
      <div class="fr buy clearfix">
        <div class="price" v-if="projectDetail.study_type=='1'">
          <i>¥</i>
          {{projectDetail.present_price}}/人
        </div>
        <div class="price" v-else>
          <i>¥</i>
          {{projectDetail.present_price}}/班
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Collection from '@/components/common/Collection.vue'
import { projectdetail } from '@/lib/v1_sdk/index'
export default {
  components: {
    'v-collection': Collection
  },
  props: ['projectDetail', 'projectType'],
  data () {
    return {
      patternArr: ['线上', '混合', '互动'],
      BreadCrumb: {
        type: 'projectDetail',
        home: true,
        // project: '分类列表',
        position: false, //是否显示当前位置
        text: '项目详情'
      },
      shoppingForm: {
        type: 2,
        cartid: ''
      },
      currentType: 1
    }
  },
}
</script>
<style lang="scss">
@import "~assets/style/project/detail.scss";
@import "~assets/style/components/breadCrumb.scss";
</style>