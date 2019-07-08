<template>
  <div>
    <!-- 首页课程列表、课程分类列表、项目分类列表 -->
    <div class="homeCard card-category profile">
      <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
        <el-card shadow="never" body-style="padding: 0;" :class="['itemBox',{'learn':config.mask}]">
          <!-- 选课使用的勾选 -->
          <el-checkbox v-model="card.is_checked " @change="selCheckboxChange(card,index) " style="position:absolute;top:10px;right:10px; " v-if="config.types==='buy' "></el-checkbox>
          <!-- 项目封面 蒙层-->
          <!-- <div class="new-style " v-if="config.new==='true' ">
            <img :src="newTag " alt=" ">
          </div> -->
          <!-- <div class="projectImg" v-if="cp==='1'">
            <img src="https://static-image.1911edu.com/p4.png" alt="" class="project-img">
          </div> -->
          <div class="mask-style" @click="handleLinkDetail(card)">
            <img :src="jinImg" alt="" class="jin-style">
          </div>
          <!-- 项目封面 图片 -->
          <div class="bgImgs" @click="handleLinkDetail(card)">
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
                <span class="title" :title="card.title">{{card.title}}</span>
                <!-- 首页二级标题展示 老师+职称 -->
                <span v-if="config.card_type === 'profile'" class="deputyTitle fl">{{card.teacher_name+'&nbsp;&nbsp;'+card.graduate}}</span>
                <span v-else class="deputyTitle fl">{{card.deputy_title}}</span>
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
              <div class="line-center" v-if="card.is_free === '1'&&cp==='1'">
                <p class="price" v-if="card.study_type==='1'">¥{{card.present_price}}/人</p>
                <p class="price" v-else>¥{{card.present_price}}起/班</p>
              </div>
              <div class="line-center" v-if="cp==='0'&&card.is_free === '1'">
                <p class="price">¥{{card.present_price}}</p>
              </div>
              <div class="line-center" v-if="!isIndex&&card.is_free === '2'">
                <p class="freePrise">限免</p>
                <p class="freeTime">剩余{{card.free_end_time}}</p>
              </div>
              <div class="line-center" v-if="isIndex&&card.is_free === '1'">
                <p class="price">¥{{card.present_price}}</p>
              </div>
              <div class="line-center clearfix" v-if="isIndex&&card.is_free === '2'">
                <p class="freePrise">限免</p>
                <p class="freeTime">剩余{{card.free_end_time}}</p>
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
import { mapActions } from "vuex";
import { card } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { matchSplits, open, timestampToTime } from "~/lib/util/helper";

export default {
  props: ["data", "config"],
  data () {
    return {
      rest: "",
      _ordertimer: null,
      cp: "",
      kidForm: {
        kids: ""
      },
      xidForm: {
        xids: ""
      },
      curriculumcartid: {
        numberArr: []
      },
      curriculumcartids: {
        cartid: null,
        type: 1
      },
      cp: "",
      isIndex: true,
      jinImg: "https://static-image.1911edu.com/jin.png",
      newTag: "https://static-image.1911edu.com/new.png",
      numSrc: require("@/assets/images/home_num.png"),
      courseUrl: {
        base: "/curriculum/detail",
        kid: 0,
        tid: 0,
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setProductsNum"]),
    handleLinkDetail (item) {
      // 判断当前页是否是在首页
      if (this.isIndex) {
        this.courseUrl.kid = item.id;
        open(this.courseUrl);
      } else {
        if (window.location.search.indexOf('title') > -1) {
          // 课程-转到课程详情
          this.courseUrl.kid = item.id;
          open(this.courseUrl);
        } else {
          // 分类列表页
          if (this.cp == "0") {
            // 课程-转到课程详情
            this.courseUrl.kid = item.id;
            open(this.courseUrl);
          } else {
            // 项目-项目详情
            this.$router.push({
              path: "/project/projectdetail",
              query: {
                kid: item.id,
                type: item.type
              }
            });
          }
        }
      }
    },
    // 我要选课 -选择课程
    selCheckboxChange (item, index) {
      this.$emit("selCheckboxChange", item); //改变全选按钮保存的数组值
      if (item.is_checked === false) {
        item.is_checked = false;
        this.curriculumcartid.numberArr.push(item.id);
        this.curriculumcartids.cartid = item.id;
        this.delShopCart();
      } else {
        item.is_checked = true;
        this.curriculumcartids.cartid = item.id;
        this.curriculumcartid.numberArr.pop();
        this.goodsNmber();
      }
    },
    // 判断购物车数量
    goodsNmber () {
      if (persistStore.get("productsNum") < 70) {
        this.addShopCart();
      } else {
        this.$alert("您的购物车已满，建议您先去结算或清理", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {
            this.$router.push("/shop/shoppingcart");
          }
        });
      }
    },
    // 添加购物车
    addShopCart () {
      card.addShopCart(this.curriculumcartids).then(response => {
        this.setProductsNum({
          pn: response.data.curriculumNumber
        });
      });
    },
    // 取消勾选
    delShopCart () {
      card.delCourseShopCart(this.curriculumcartids).then(response => {
        this.setProductsNum({
          pn: response.data.curriculumNumber
        });
      });
    }
  },
  mounted () {
    // isIndex判断是否在首页 true在首页
    // cp类型决定当前列表的类型：0-课程；1-项目
    // 先判断是不是在学院详情页 不是的话就是首页或者分类页
    if (window.location.search.indexOf('title') > -1) {
      this.isIndex = false;
    } else {
      if (window.location.search.indexOf('cp') > -1) {
        this.isIndex = false;
        this.cp = matchSplits("cp");
      } else {
        this.isIndex = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/commonCard";
</style>

