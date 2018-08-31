<template>
  <div class="header-mask">
    <!-- 面包屑 收藏分享 -->
    <div class="main-crumb clearfix">
      <!-- 面包屑组件 -->
      <div class="fl">
        <v-breadcrumb :config="BreadCrumb" class="BreadCrumb"></v-breadcrumb>
      </div>
      <!-- 收藏分享 -->
      <div class="fr" v-if="projectType.types==='1'">
        <v-collection :collectData="collectMsg"></v-collection>
      </div>
    </div>
    <!-- 项目详情页上部分-项目信息 -->
    <div class="title-item">
      <!-- 定制项目不显示标题和副标题 -->
      <div v-if="projectType.types==='2'">
        <h1>{{projectDetail.title}}</h1>
        <h3>{{projectDetail.deputy_title}}</h3>
      </div>
    </div>
    <div class="detail clearfix">
      <div class="some">
        <div>
          <h5>课时</h5>
          <p>
            <span>{{projectDetail.study_time}}</span> 课时</p>
        </div>
        <div>
          <h6>学习人数</h6>
          <p>
            <span>{{projectDetail.study_number}}</span> 人</p>
        </div>
        <div v-if="projectType.types==='1'">
          <h6>综合评分</h6>
          <p>
            <span>{{projectDetail.score}}</span> 分</p>
        </div>
      </div>
      <div class="fr buy" v-if="projectType.types==='1'">
        <div class="price">
          <i>￥</i>{{projectDetail.present_price}}</div>
        <div class="study" v-if="!projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">立即试看</div>
        <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">开始学习</div>
        <div class="addShoppingCart" @click="addShoppingCart">加入购物车</div>
      </div>
      <div class="fr buy" v-if="projectType.types==='2'">
        <div class="price">
          <i>￥</i>{{projectDetail.present_price}}</div>
        <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">立即观看</div>
        <div class="addShoppingCart" @click="handleBuy(projectDetail.id)">立即购买</div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import Collection from '@/components/common/Collection.vue'
import { projectdetail } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { open, matchSplits } from '@/lib/util/helper'
export default {
  components: {
    'v-breadcrumb': BreadCrumb,
    'v-collection': Collection
  },
  props: ['projectDetail', 'projectType'],
  data() {
    return {
      project: {
        projectId: '1'
      },
      BreadCrumb: {
        type: 'projectDetail',
        project: '分类列表',
        position: false, //是否显示当前位置
        text: '项目详情'
      },
      collectMsg: {
        types: 2,
        isCollect: 0
      },
      shoppingForm: {
        type: 2,
        cartid: ''
      },
      currentType: 1
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['setProductsNum']),
    // 跳转到项目播放页
    goProjectPlayer() {
      if (this.isAuthenticated) {
        let urlLink = {
          base: '/project/projectPlayer',
          id: matchSplits('id'),
          type: matchSplits('type')
        }
        open(urlLink)
      } else {
        this.$bus.$emit('loginShow', true)
      }
    },
    // 项目加入购物车
    addShoppingCart() {
      if (!this.isAuthenticated) {
        this.$bus.$emit('loginShow', true)
        return false
      }
      this.shoppingForm.cartid = this.project.projectId
      projectdetail.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.setProductsNum({
            pn: Number(res.data.curriculumNumber)
          })
        } else {
          this.$message({
            showClose: true,
            type: 'info',
            message: res.msg
          })
        }
        this.$router.push('/shop/shoppingcart')
      })
    },
    // 立即购买
    handleBuy(id) {
      this.$router.push({
        path: '/shop/affirmorder',
        query: { id: id }
      })
    }
  },
  watch: {
    // 检测数据中的收藏 数据过来慢
    projectDetail(val, old) {
      if (val.is_Collection) {
        this.collectMsg.isCollect = 1
      } else {
        this.collectMsg.isCollect = 0
      }
    }
  },
  mounted() {
    this.project.projectId = matchSplits('kid')
    this.currentType = matchSplits('type')
    if (this.currentType === '1') {
      this.BreadCrumb.text = '项目详情'
    } else {
      this.BreadCrumb.text = '定制项目详情'
    }
  }
}
</script>

<style scoped>
</style>