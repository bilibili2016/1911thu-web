<template>
  <div>
    <!-- 项目详情页上部分-项目信息 -->
    <h1>{{projectDetail.title}}</h1>
    <h3>{{projectDetail.deputy_title}}</h3>
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
        <div>
          <h6>综合评分</h6>
          <p>
            <span></span>{{projectDetail.score}} 分</p>
        </div>
      </div>
      <div class="fr buy">
        <div class="price">
          <i>￥</i>{{projectDetail.present_price}}</div>
        <div class="study" v-if="!projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">立即试看</div>
        <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">开始学习</div>
        <div class="addShoppingCart" @click="addShoppingCart">
          <i>加入购物车</i>
          <span>
            <img src="http://papn9j3ys.bkt.clouddn.com/pro_cart.png" alt="">
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { projectdetail } from '@/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['projectDetail'],
  data() {
    return {
      project: {
        projectId: '1'
      },
      shoppingForm: {
        type: 2,
        cartid: ''
      }
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
        window.open(
          window.location.origin +
            '/project/projectPlayer?id=' +
            window.location.search.split('=')[1]
        )
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
    }
  },
  mounted() {
    this.project.projectId = window.location.search.split('=')[1]
  }
}
</script>

<style scoped>
</style>