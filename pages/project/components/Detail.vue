<template>
  <div class="header-mask">
    <!-- 面包屑 收藏分享 -->
    <div class="main-crumb clearfix">
      <!-- 面包屑 -->
      <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
          <el-breadcrumb-item :to="{ path: '/course/category?cid=0&cp=1&xid=0&pids=0&vid=-1' }">项目列表</el-breadcrumb-item>
          <el-breadcrumb-item v-if='currentType==1'>项目详情</el-breadcrumb-item>
          <el-breadcrumb-item v-else>定制项目详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 收藏分享 -->
      <!-- <div class="fr" v-if="projectType.types==1">
        <v-collection :collectData="collectMsg"></v-collection>
      </div>-->
    </div>
    <!-- 项目详情页上部分-项目信息 -->
    <div class="title-item">
      <!-- 项目不显示标题和副标题 -->
      <div v-if="projectType.types==='2'">
        <h1>{{projectDetail.title}}</h1>
        <h3>{{projectDetail.deputy_title}}</h3>
      </div>
    </div>
    <div class="detail clearfix">
      <div class="some fl">
        <div>
          <h5>学时</h5>
          <p>
            <span>{{projectDetail.study_time}}</span> 学时
          </p>
        </div>
        <div>
          <h6>已学习人数</h6>
          <p>
            <span>{{projectDetail.study_number}}</span> 人
          </p>
        </div>
        <div v-if="projectType.types==='1'">
          <h6>综合评分</h6>
          <p>
            <span>{{projectDetail.score}}</span> 分
          </p>
        </div>
      </div>
      <!-- <div class="changeType fr" v-if="projectType.types==='1'">
        选择模式:
        线上模式不显示
        <el-button v-for="(course,index) in projectDetail.relationProjectData" v-if="course.study_type!='1'" :key="index" :class="{'checked':course.select_status}" :disabled="course.id===''" @click="handleLine(course.id)">{{patternArr[index]}}</el-button>
      </div>-->
      <!--  :class="{buyTop:projectType.types==='2'}" -->
      <div class="fr buy clearfix">
        <div class="price" v-if="projectDetail.study_type=='1'">
          <i>¥</i>
          {{projectDetail.present_price}}/人
        </div>
        <div class="price" v-else>
          <i>¥</i>
          {{projectDetail.present_price}}起/班
        </div>
        <!-- <div class="study" v-if="!projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">立即试看</div> -->
        <!-- <div class="study" v-if="projectDetail.curriculumProjectPrivilege" @click="goProjectPlayer">开始学习</div> -->
        <div v-if="projectType.types==2">
          <div v-if="projectDetail.is_creator" class="addShoppingCart" @click="handleBuy(projectDetail.id)">立即支付</div>
        </div>
        <div v-else>
          <div v-if="projectDetail.study_type === '1'" class="addShoppingCart" @click="goodsNmber">加入购物车</div>
          <div v-else class="addShoppingCart" @click="handleBuy(projectDetail.id)">立即支付</div>
        </div>
      </div>
    </div>
    <!-- <div class="rightBar"> -->
    <div :class="['rightBar',{'hasWidth':showRightBar}]">
      <span>{{projectDetail.present_price}}起/班</span>
      <div class="fr" @click="handleBuy(projectDetail.id)">立即支付</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Collection from "@/components/common/Collection.vue";
import { projectdetail } from "@/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import { open, matchSplits } from "@/lib/util/helper";
export default {
  components: {
    "v-collection": Collection
  },
  props: ["projectDetail", "projectType"],
  data () {
    return {
      project: {
        projectId: "1"
      },
      patternArr: ["线上", "混合", "互动"],
      collectMsg: {
        types: 2,
        isCollect: 0
      },
      shoppingForm: {
        type: 2,
        cartid: ""
      },
      currentType: 1,
      showRightBar: false
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["setProductsNum"]),
    // 跳转到项目播放页
    goProjectPlayer () {
      if (persistStore.get("token")) {
        let urlLink = {
          base: "/project/projectPlayer",
          kid: matchSplits("kid"),
          type: matchSplits("type")
        };
        open(urlLink);
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    // 判断购物车数量
    goodsNmber () {
      if (!persistStore.get("token")) {
        this.$bus.$emit("loginShow", true);
        return false;
      }
      if (persistStore.get("productsNum") < 70) {
        this.addShoppingCart();
      } else {
        this.$alert("您的购物车已满，建议您先去结算或清理", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {
            this.$router.push("/shop/shoppingcart");
          }
        });
      }
    },
    // 项目加入购物车
    addShoppingCart () {
      if (!persistStore.get("token")) {
        this.$bus.$emit("loginShow", true);
        return false;
      }
      this.shoppingForm.cartid = this.project.projectId;
      projectdetail.addShopCart(this.shoppingForm).then(res => {
        if (res.status === 0) {
          // 添加购物车成功
          this.setProductsNum({
            pn: Number(res.data.curriculumNumber)
          });
        } else {
          this.$message({
            showClose: true,
            type: "info",
            message: res.msg
          });
        }
        this.$router.push("/shop/shoppingcart");
      });
    },
    // handleLine (id) {
    //   this.$router.push({
    //     path: "/project/projectdetail",
    //     query: {
    //       kid: id,
    //       type: 1
    //     }
    //   });
    // },
    // 立即购买
    handleBuy (id) {
      if (!persistStore.get("token")) {
        this.$bus.$emit("loginShow", true);
        return false;
      }
      if (this.currentType == 1) {
        this.$emit("payment");
      } else {
        this.$router.push({
          path: "/shop/affirmorder",
          // type区分订单
          query: { id: this.project.projectId, type: 1 }
        });
      }
    }
  },
  watch: {
    // 检测数据中的收藏 数据过来慢
    projectDetail (val, old) {
      if (val.is_Collection) {
        this.collectMsg.isCollect = 1;
      } else {
        this.collectMsg.isCollect = 0;
      }
    }
  },
  mounted () {
    this.project.projectId = matchSplits("kid");
    this.currentType = matchSplits("type");
    window.onscroll = () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 570) {
        this.showRightBar = true
      } else if (scrollTop < 480) {
        this.showRightBar = false
      }
      console.log(scrollTop, this.showRightBar);
    }
  }
};
</script>
<style lang="scss">
@import "~assets/style/project/detail.scss";
</style>