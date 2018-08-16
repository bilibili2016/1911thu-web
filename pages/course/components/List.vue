<template>
  <div>
    <div class="banner">
      <div class="center category-style">
        <div class="college">
          <li class="title" v-if="!loadList">学院：</li>
          <ul>
            <li :class="{btnBg: this.cid === '0' ? true : false }" v-if="!loadList">
              <el-button @click="selectAllCid">全部</el-button>
            </li>
            <li v-for="(item,index) in cidData" :index="index" :key="index" :class="{btnBg: cid === item.id ? true : false }">
              <el-button @click="selectCid(item,index)">{{item.category_name}}</el-button>
            </li>
          </ul>
        </div>
        <div class="classification">
          <li class="title" v-if="!loadList">分类：</li>
          <ul>
            <li :class="{btnBg: this.pid === '0' ? true : false }" v-if="!loadList">
              <el-button @click="selectAllPid">全部</el-button>
            </li>
            <li v-for="(items,index) in pidData.childList" :index="index" :key="index" :class="{btnBg: pid === items.id ? true : false }">
              <el-button @click="selectPid(items,index)">{{items.category_name}}</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['cidData', 'pidData', 'cidBg', 'pidBg', 'loadList'],

  computed: {
    // ...mapState('auth', ['pid', 'cid', 'cindex', 'cg'])
  },
  data() {
    return {
      cid: '0',
      pid: '0',
      cindex: null,
      cg: null
    }
  },
  methods: {
    // 大类 全部
    selectAllCid() {
      this.$emit('selectAllCid')
    },
    // 大类 单个
    selectCid(item, index) {
      this.$emit('selectCid', item, index)
    },
    // 小类 全部
    selectAllPid() {
      this.$emit('selectAllPid')
    },
    // 小类 单个
    selectPid(items, index) {
      this.$emit('selectPid', items, index)
    }
  },
  mounted() {
    this.cid = window.location.search.split('&')[0].split('=')[1]
    this.pid = window.location.search.split('&')[3].split('=')[1]
    this.$bus.$on('pid', data => {
      this.pid = data
    })
    this.$bus.$on('cid', data => {
      this.cid = data
    })
  }
}
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import '~assets/style/course/category';
</style>
