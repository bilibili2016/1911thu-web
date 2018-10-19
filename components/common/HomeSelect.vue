<template>
  <div>
    <div class="backHome headerClass">
      <span @click="handleLink('/')">首页</span>
    </div>
    <div class="fl dropdown clearfix">

      <div class="dropItem headerClass">
        <span class="el-dropdown-link" @click="handleSelectItem({id:0,is_picture_show:0})">
          全部学院
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span class="downLine"></span>
        </span>
        <div class="drops">
          <ul>
            <li v-for="(item,index) in categoryArr" :key="index" @click="handleSelectItem(item)">{{item.category_name}}</li>
          </ul>
        </div>
      </div>
      <div class="dropItem headerClass">
        <span class="el-dropdown-link" @click="handleSelectItem({id:0,is_picture_show:1})">
          培训项目
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span class="downLine"></span>
        </span>
        <div class="drops">
          <ul>
            <li v-for="(item,index) in projectArr" :key="index" @click="handleSelectItem(item)">{{item.category_name}}</li>
          </ul>
        </div>

      </div>

    </div>
    <div class="teach headerClass" @click="handleLink('/home/teacher/list')">
      <span>名师智库</span>
    </div>
    <!-- <div class="VIP headerClass">
      <span>VIP会员</span>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['categoryArr', 'projectArr'],
  data() {
    return {}
  },
  methods: {
    // 公共路由方法
    handleLink(data) {
      this.$emit('handleLink', data)
    },
    handleSelectItem(item) {
      this.$emit('handleSelectItem', item)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/tabs';
</style>
