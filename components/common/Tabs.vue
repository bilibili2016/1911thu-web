<template>
  <div class="fl dropdown">

    <el-dropdown>
      <span class="el-dropdown-link">
        学院
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in categoryArr" :key="index" @click.native="handleClick(item)">{{item.category_name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown>
      <span class="el-dropdown-link">
        项目
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in projectArr" :key="index" @click.native="handleClick(item)">{{item.category_name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { home, newlesson } from '~/lib/v1_sdk/index'
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setCid', 'setPid', 'setKid', 'setCg', 'setPid']),
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
      console.log(item, '这是是item')
      this.cidform.cids = item.id
      this.cidform.indexs = index
      this.cidform.pids = '0'
      this.$bus.$emit('collegeId', item.id)
      // window.open(window.location.origin + '/course/category')
      this.setCid(this.cidform)
      // 设置cg 2代表顶部列表
      this.cgForm.cgs = '1'
      this.setCg(this.cgForm)
      window.open(
        window.location.origin +
          '/course/' +
          item.id +
          '?type=' +
          item.is_picture_show
      )
    }
  },
  mounted() {
    this.getClassifyList()
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  width: 200px;
  margin-left: 50px;
  .item {
    display: inline-block;
  }
  .el-dropdown {
    margin-left: 38px;
  }
}
.dropdown {
  .el-dropdown-menu {
    padding: 0px;
  }
  .el-dropdown-menu__item {
    list-style: none;
    line-height: 100px;
    padding: 5px 30px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: none;
  }
}
</style>
