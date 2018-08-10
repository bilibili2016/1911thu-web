<template>
  <div>
    <h1>{{projectDetail.title}}</h1>
    <h3>{{projectDetail.deputy_title}}</h3>
    <h5>
      <span>{{projectDetail.study_time}} 课时</span>
      <i class="line"></i>
      <span>学习人数 {{projectDetail.study_number}}</span>
      <i class="line"></i>
      <el-rate v-model="projectDetail.score" disabled></el-rate>
    </h5>
    <div class="price clearfix">
      <div class="fl">
        <i>￥</i>{{projectDetail.present_price}}</div>
      <div class="fr" @click="addShoppingCart">
        <i>加入购物车</i>
        <span>
          <img src="http://papn9j3ys.bkt.clouddn.com/pro_cart.png" alt="">
        </span>
      </div>
      <div class="study" v-if="!projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">立即试看</div>
      <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">开始学习</div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['projectDetail'],
  methods: {
    // 跳转到项目播放页
    goProjectPlayer() {
      window.open(window.location.origin + '/project/projectPlayer')
    },
    // 项目加入购物车
    addShoppingCart() {
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
  }
}
</script>

<style scoped>
</style>