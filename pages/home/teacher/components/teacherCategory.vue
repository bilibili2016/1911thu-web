<template>
  <div class="teacherCategory">
    <div class="college" v-if="categoryData.length>1">
      <h4 class="title">学院：</h4>
      <ul>
        <li v-for="(item,index) in categoryData" :index="index" :key="index" :class="{btnBg: cid == item.id ? true : false }">
          <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
        </li>
      </ul>
    </div>
    <!-- 课程不展示 -->
    <div class="classification" v-if="categoryData.length>1">
      <h4 class="title">专长领域：</h4>
      <ul>
        <li v-for="(items,index) in childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
          <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
        </li>
      </ul>
    </div>
    <div class="unit" v-if="unitData.length>1">
      <h4 class="title">所在单位：</h4>
      <ul>
        <li v-for="(item,index) in unitData" :index="index" :key="index" :class="{btnBg: uid === item.id ? true : false }">
          <el-button @click="selectUid(item,index)">{{item.company_name}}</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { list } from '~/lib/v1_sdk/index'
export default {
  props: ['unitData', 'categoryData', 'childList'],
  data() {
    return {
      categoryIndex: 0,
      cid: '0',
      pid: '0',
      uid: 0,
      cp: '',
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
    processData() {
      this.$emit('processData')
    },
    // 小类 单个
    selectPid(item, index) {
      this.pid = item.id
      this.$emit('selectPid', item, index)
    },
    selectUid(item, index) {
      this.uid = item.id
      this.$emit('selectUid', item, index)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/home/teacherCategory.scss';
</style>
