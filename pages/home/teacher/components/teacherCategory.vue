<template>
  <div class="teacherCategory">
    <div class="college">
      <h4 class="title">学院：</h4>
      <ul>
        <li v-for="(item,index) in categoryData" :index="index" :key="index" :class="{btnBg: cid == item.id ? true : false }">
          <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
        </li>
      </ul>
    </div>
    <!-- 课程不展示 -->
    <div class="classification">
      <!-- v-if="!loadList" -->
      <h4 class="title">专长领域：</h4>
      <ul>
        <li v-for="(items,index) in childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
          <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { list, category } from '~/lib/v1_sdk/index'
export default {
  data() {
    return {
      categoryData: [],
      childList: [],
      categoryIndex: 0,
      cid: 0,
      pid: '0',
      cp: '',
      allData: {
        category_name: '全部',
        childList: [],
        id: '0',
        parent_id: '0',
        picture: 'http://p8p47jzeo.bkt.clouddn.com/1531894819',
        short_name: '全部'
      },
      categoryList: []
    }
  },
  methods: {
    // 大类 单个
    selectCid(item, index) {
      this.cid = item.id
      this.categoryIndex = index
      this.processData()
      this.$emit('selectCid', item, index)
    },
    // 小类 单个
    selectPid(items, index) {
      this.$emit('selectPid', items, index)
    },
    // 公共 获取list 方法
    getHeaderList() {
      this.loadList = true
      category.childCategoryList().then(res => {
        if (res.status === 0) {
          this.handleData(this.allData, res)
          this.loadList = false
        }
      })
    },
    // 处理全部的分类
    makeData(arr, data) {
      data.forEach((v, i) => {
        v.childList.forEach((v, i) => {
          if (i > 0) {
            arr.push(v)
          }
        })
      })
    },
    // 处理数据 拼接全部数据
    handleData(data, res) {
      this.categoryData = res.data.categoryList
      this.categoryData.unshift(data)
      for (let item of this.categoryData) {
        item.childList.unshift(this.allData)
      }
      this.loadList = false
      this.makeData(this.categoryData[0].childList, res.data.categoryList)
      this.processData()
    },
    // 根据一级分类处理分类二级分类
    processData() {
      for (let item of this.categoryData) {
        if (item.id == this.categoryId) {
          this.categoryIndex = this.categoryData.indexOf(item)
        }
      }
      this.childList = this.categoryData[this.categoryIndex].childList
    }
  },
  mounted() {
    this.getHeaderList()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/home/teacherCategory.scss';
</style>
