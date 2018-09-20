<template>
  <div class="homeUs" v-loading="loading">
    <div class="topImg">
      <div class="top-content">
        <span class="top-con">关于我们</span>
        <span class="top-desc">About Us</span>
      </div>
    </div>
    <div class="content" id="content">
      <el-tabs type="card" tab-position="left" @tab-click="handleClick">

        <el-tab-pane v-for="item in titleListData" :label="item.title" :key="item.id">
          <span slot="label" class="tabList">
            <i class="item-icon arrow-icon"></i>
            {{item.title}}
          </span>
          <el-card class="card-style">
            <div v-for="con in listCon" :key="con.id">
              <div v-if="item.id === con.id">
                <div class="company-info" style="margin-bottom:40px">
                  <h1>{{con.title}}</h1>
                </div>
                <div v-html="con.content"></div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
import { About } from '@/lib/v1_sdk/index'
import { setTitle } from '~/lib/util/helper'

export default {
  data() {
    return {
      titleListData: '',
      listCon: [],
      loading: false
    }
  },
  // computed:
  methods: {
    //左侧菜单栏
    titleList() {
      this.loading = true
      About.titleList().then(res => {
        // this.loading = false
        this.titleListData = res.data
        this.titleListData.map(item => {
          this.getDetail(item.id)
        })
      })
    },
    //菜单对应各详情页
    getDetail(ID) {
      About.aboutDetail({ id: ID }).then(res => {
        this.listCon.push(res.data)
        this.loading = false
      })
    },
    handleClick() {
      setTimeout(() => {
        var testHeight = document.getElementsByClassName('el-tabs__content')[0]
          .offsetHeight
        document.getElementsByClassName('el-tabs__header')[0].style.height =
          testHeight + 'px'
      }, 200)
    }
  },
  mounted() {
    this.titleList()
  },
  updated() {
    setTitle('关于我们-1911学堂')
  }
}
</script>

