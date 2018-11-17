<template>
  <div class="headerPage clearfix">
    <div class="backHome headerClass">
      <span @click="handleLink('/')">首页</span>
    </div>
    <div class="fl dropdown clearfix">
      <!-- <div class="dropItem headerClass">
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
      </div> -->
      <!-- <div class="dropItem headerClass">
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

      </div> -->
      <!-- <div class="dropItem  headerClass vipItem"> -->
      <!-- <div class="dropItem  headerClass ">
        <span class="el-dropdown-link">
          VIP会员
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span class="downLine"></span>
        </span>
        <div class="drops">
          <ul>
            <li v-for="(item,index) in vipArr" :key="index" @click="handleVipItem(item)">{{item.title}}</li>
          </ul>
        </div>
      </div> -->
      <div class="dropItem headerClass " v-for="(item,index) in vipArr" :key="index" @click="handleVipItem(item,index)" v-if="index<2">
        <span class="el-dropdown-link">
          {{item.title}}
          <span class="downLine"></span>
        </span>
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
  // props: ['categoryArr', 'projectArr', 'vipArr'], vipArr不动态获取了
  props: ['categoryArr', 'projectArr'],
  data() {
    return {
      vipArr: [
        {
          id: '2',
          category_id: '1',
          title: '在线干部学院'
        },
        {
          id: '3',
          category_id: '17',
          title: '在线商学院'
        }
      ]
    }
  },
  methods: {
    // 公共路由方法
    handleLink(data) {
      this.$emit('handleLink', data)
    },
    handleSelectItem(item) {
      this.$emit('handleSelectItem', item)
    },
    handleVipItem(item, index) {
      persistStore.set('selectItem', index)
      this.$router.push({
        path: '/home/vip/vipPage',
        query: {
          id: item.id,
          cid: item.category_id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
// @import '~assets/style/components/tabs';
</style>
