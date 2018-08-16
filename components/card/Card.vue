<template>
  <div>
    <!-- 首页课程列表、课程分类列表、项目分类列表 -->
    <div class="homeCard card-category profile">
      <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
        <el-card shadow="never" body-style="padding: 0;" :class="['itemBox',{'learn':config.mask}]">
          <!-- 选课使用的勾选 -->
          <el-checkbox v-model="card.is_checked " @change="selCheckboxChange(card,index) " style="position:absolute;top:10px;right:10px; " v-if="config.types==='buy' "></el-checkbox>
          <!-- 项目封面 蒙层-->
          <div class="new-style " v-if="config.new==='true' ">
            <img :src="newTag " alt=" ">
          </div>
          <div class="projectImg" v-if="cp==='1'">
            <img src="http://papn9j3ys.bkt.clouddn.com/p4.png" alt="" class="project-img">
          </div>
          <div class="mask-style" @click="handleLinkDetail(card)">
            <img :src="jinImg" alt="" class="jin-style">
          </div>
          <!-- 项目封面 图片 -->
          <div class="bgImgs">
            <img :src="card.picture" alt="">
          </div>
          <!-- 项目标签 -->
          <div class="tag">
            <span v-if="card.tag.length !== 0" v-for="(tag,index) in card.tag" :key="index">{{tag}}</span>
          </div>
          <el-row>
            <!-- 名字 -->
            <div class="item" @click="handleLinkDetail(card)">
              <p class="itemBox-name itemBoxTitle">
                <span class="title">{{card.title}}</span>
                <span class="deputyTitle fl">{{card.deputy_title}}</span>
              </p>
              <p class="itemBox-info">
                <span>
                  {{card.study_time}}学时
                </span>
                <span class="itemBox-num">
                  <img :src="numSrc" alt="">
                  <span>{{card.study_number}}</span>
                </span>
                <span class="" style="display:inline-block;float:right;padding-right:15px;">
                  <el-rate disabled v-model="card.score" class="itemBox-rate fr"></el-rate>
                </span>
              </p>
            </div>
            <!-- <div class="line-wrap" v-if="config.new||config.free"> -->
            <div class="line-wrap">
              <div class="line-center">
                <p class="price freePrise" v-if="card.is_free == '1'">￥{{card.present_price}}</p>
                <p class="freePrise" v-if="card.is_free === '2'">免费</p>
              </div>
            </div>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// 默认配置选项
// newimg       最新课程 左上角 new 图片
// chooseCourse 选课 右上角 checkbox
// maskRight    图片上方 蒙层 以及右箭头
// studybutton  我的课程 学习中等 图片上方 继续学习 开始学习按钮
// optiontitle  副标题
// timenumrate  学时 人数 星级
// freeprice   免费
import { mapActions } from 'vuex'
import { card } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { splitUrl, open } from '~/lib/util/helper'
export default {
  props: ['data', 'config'],
  data() {
    return {
      cp: '',
      kidForm: {
        kids: ''
      },
      xidForm: {
        xids: ''
      },
      curriculumcartid: {
        numberArr: []
      },
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      cp: '',
      isIndex: true,
      jinImg: 'http://papn9j3ys.bkt.clouddn.com/jin.png',
      newTag: 'http://papn9j3ys.bkt.clouddn.com/new.png',

      numSrc: require('@/assets/images/home_num.png'),
      coursedetail: {
        base: '/course/coursedetail',
        kid: null
      },
      projectdetail: {
        base: '/project/projectdetail',
        kid: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum']),
    openDetail(link) {
      window.open(window.location.origin + link)
    },
    handleLinkDetail(item) {
      // 判断当前页是否是在首页
      if (this.isIndex) {
        this.coursedetail.kid = item.id
        open(this.coursedetail)

        // window.open(
        //   window.location.origin + '/course/coursedetail?kid=' + item.id
        // )
      } else {
        // 分类列表页
        if (this.cp === '0') {
          // 课程-转到课程详情
          // window.open(
          //   window.location.origin + '/course/coursedetail?kid=' + item.id
          // )
          this.coursedetail.kid = item.id
          open(this.coursedetail)
        } else {
          // 项目-项目详情
          this.projectdetail.kid = item.id
          open(this.projectdetail)
          // this.openDetail('/project/projectdetail?id=' + item.id)
        }
      }
    },
    // 我要选课 -选择课程
    selCheckboxChange(item, index) {
      this.$emit('selCheckboxChange', item) //改变全选按钮保存的数组值
      if (item.is_checked === false) {
        item.is_checked = false
        this.curriculumcartid.numberArr.push(item.id)
        this.curriculumcartids.cartid = item.id
        this.delShopCart()
      } else {
        item.is_checked = true
        this.curriculumcartids.cartid = item.id
        this.curriculumcartid.numberArr.pop()
        this.addShopCart()
      }
    },
    // 添加购物车
    addShopCart() {
      card.addShopCart(this.curriculumcartids).then(response => {
        this.setProductsNum({
          pn: response.data.curriculumNumber
        })
      })
    },
    // 取消勾选
    delShopCart() {
      return new Promise((resolve, reject) => {
        card.delCourseShopCart(this.curriculumcartids).then(response => {
          this.setProductsNum({
            pn: response.data.curriculumNumber
          })
        })
      })
    }
  },
  mounted() {
    // isIndex判断是否在首页 true在首页
    // cp类型决定当前列表的类型：0-课程；1-项目
    if (window.location.search.split('=')[2]) {
      this.isIndex = false
      this.cp = splitUrl(1, 1)
      console.log(this.cp, '这是cp')
    } else {
      this.isIndex = true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/commonCard';
</style>

