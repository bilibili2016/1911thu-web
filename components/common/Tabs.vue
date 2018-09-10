<template>
  <div class="fl dropdown  333 clearfix">
    <div class="dropItem headerClass">
      <span class="el-dropdown-link">
        全部课程
        <i class="el-icon-arrow-down el-icon--right"></i>
        <span class="downLine"></span>
      </span>
      <div class="drops">
        <ul>
          <li v-for="(item,index) in categoryArr" :key="index" @click="handleClick(item)">{{item.category_name}}</li>
        </ul>
      </div>
    </div>
    <div class="dropItem headerClass">
      <span class="el-dropdown-link">
        培训项目
        <i class="el-icon-arrow-down el-icon--right"></i>
        <span class="downLine"></span>
      </span>
      <div class="drops">
        <ul>
          <li v-for="(item,index) in projectArr" :key="index" @click="handleClick(item)">{{item.category_name}}</li>
        </ul>
      </div>

    </div>

  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { home } from '~/lib/v1_sdk/index'
import { open } from '@/lib/util/helper'
export default {
  data() {
    return {
      categoryArr: [],
      projectArr: [],
      curruntForm: {
        pages: 1,
        limits: '',
        evaluateLimit: null,
        isevaluate: 1
      },
      cidform: {
        cids: '',
        indexs: '',
        pids: ''
      },
      cgForm: {
        cgs: null
      },
      urlLink: {
        base: '/course/category',
        cid: '',
        cp: '',
        xid: '',
        pids: ''
      }
    }
  },
  methods: {
    // 获取项目以及学院列表
    getClassifyList() {
      home.getClassifyList(this.curruntForm).then(response => {
        for (let item of response.data.categoryList) {
          if (item.is_picture_show === '0') {
            this.categoryArr.push(item)
          } else {
            this.projectArr.push(item)
          }
        }
        this.classify = response.data.categoryList
      })
    },
    handleClick(item, index) {
      this.$bus.$emit('collegeId', item.id)
      this.urlLink.cid = item.id
      this.urlLink.cp = item.is_picture_show
      this.urlLink.xid = 0
      this.urlLink.pid = 0
      open(this.urlLink)
    }
  },
  mounted() {
    this.getClassifyList()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/tabs';
</style>
