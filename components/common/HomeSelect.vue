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
      <div class="dropItem  headerClass vipItem">
        <span class="el-dropdown-link" @click="handleVipItem(1,true)">
          VIP会员
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span class="downLine"></span>
        </span>
        <div class="drops">
          <ul>
            <li v-for="(item,index) in vipArr" :key="index" @click="handleVipItem(item)">{{item.name}}</li>
          </ul>
        </div>

      </div>

    </div>
    <div class="teach headerClass" @click="handleLink('/home/teacher/list')">
      <span>名师智库</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['categoryArr', 'projectArr', 'vipArr'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.vipArr)
  },
  methods: {
    // 公共路由方法
    handleLink(data) {
      this.$emit('handleLink', data)
    },
    handleSelectItem(item) {
      this.$emit('handleSelectItem', item)
    },
    handleVipItem(item, flag) {
      if (flag) {
        this.$router.push({
          path: '/home/vip/vipPage',
          query: {
            id: 1,
            relativeID: 0
          }
        })
        return
      }
      this.$router.push({
        path: '/home/vip/vipPage',
        query: {
          id: item.id,
          relativeID: item.relativeID
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/tabs';
</style>
