<template>
  <div :class="['collegeDetail',vipInfo.en_title]">
    <div class="project" v-if="recommendProjectData.length">
      <div class="title">推荐项目</div>
      <div class="projectItem clearfix">
        <div class="item" v-for="(item,index) in recommendProjectData" :key="'reco'+index">
          <div class="img">
            <img :src="item.picture" alt="">
          </div>
          <p class="pTitle"><img src="https://static-image.1911edu.com/project-icon.png" alt="" class="tag">{{item.title}}</p>
          <p class="desc">{{item.deputy_title}}</p>
        </div>
      </div>
      <!-- <v-nodata v-else :pageType="pageType"></v-nodata> -->
    </div>
    <div class="courseList">
      <div class="title" v-if="vipInfo.en_title!='chineseCollege'">{{vipInfo.category_name}}</div>
      <div class="title" v-else></div>
      <v-card :data="categoryData" :config="config" v-loading="loadCourseAll"></v-card>
      <div class="more" @click="lookCourse">查看更多</div>
    </div>
    <v-info v-if="flag" :vipInfo="vipInfo" @buyVip="buyVip" @identificate="identificate"></v-info>
    <v-vipbuy v-if="vipPopShow" :vipPopShow="vipPopShow" :vipInfo="vipInfo" @changeVipShow="changeVipShow"></v-vipbuy>
  </div>
</template>

<script>
import CustomCard from "@/components/card/Card.vue";
import Info from "@/pages/home/vip/components/Info";
import VipBuy from "@/components/common/VipBuy.vue";
import { matchSplits, setTitle } from "@/lib/util/helper";
import { mapActions, mapState, mapMutations } from "vuex";
import { vip, category } from "~/lib/v1_sdk/index";
import { store as persistStore } from "~/lib/core/store";
import NoData from "@/components/common/NoData.vue";

export default {
  components: {
    "v-card": CustomCard,
    "v-info": Info,
    "v-vipbuy": VipBuy,
    "v-nodata": NoData

  },
  data () {
    return {
      pageType: {
        page: "teacherList",
        text: "暂无数据",
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      vipPopShow: false,
      flag: true,
      categoryData: [],
      recommendProjectData: [],
      vipInfo: "",
      loadCourse: true,
      loadCourseAll: true,
      categoryForm: {
        cids: null,
        pids: 0,
        sortBy: 0,
        pages: 1,
        limits: 8,
        type: null
      },
      config: {
        card_type: "category",
        card: "home",
        new: "false",
        free: "true"
      },
      vipDetailData: {
        id: ""
      },
      gidForm: {
        gids: ""
      },
      recommendForm: {
        limits: 50,
        pages: 1,
        is_recommend: 1,
        cids: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    lookCourse () {
      this.$router.push({
        path: "/course/category",
        query: {
          cid: this.categoryForm.cids,
          cp: 0,
          pids: 0,
          xid: 0,
          vid: matchSplits("id")
        }
      });
    },
    //申请认证
    identificate () {
      if (persistStore.get("token")) {
        this.gidForm.gids = "tab-tenth";
        this.setGid(this.gidForm);
        this.$router.push("/profile");
        persistStore.set("whichIntro", matchSplits("id"));
      } else {
        this.$bus.$emit("loginShow", true);
      }
    },
    //关闭购买弹窗
    changeVipShow (val) {
      this.vipPopShow = false;
    },
    //立即购买
    buyVip () {
      if (persistStore.get("token")) {
        this.vipPopShow = true;
      } else {
        this.$bus.$emit("loginShow");
      }
    },
    // 课程 card 列表
    getCourseCardList (itemCid, itemPid) {
      this.loadCourseAll = true;
      category.curriculumListNew(this.categoryForm).then(res => {
        if (res.status == 0) {
          this.categoryData = res.data.curriculumList;
          this.$nextTick(() => {
            this.scrollBottom();
          });
        }
        this.loadCourseAll = false;
      });
    },
    scrollBottom () {
      if (persistStore.get("scroll")) {
        var ele = document.getElementById("footer");
        document.body.scrollTop = document.documentElement.scrollTop =
          ele.offsetTop;
        persistStore.set("scroll", false);
      }
    },
    //会员详情
    vipDetail () {
      vip.vipGoodsDetail(this.vipDetailData).then(res => {
        if (res.status == 0) {
          this.vipInfo = res.data.vipGoodsDetail;
          if (res.data.vipGoodsDetail.is_pay == 1) {
            this.flag = true;
          } else {
            this.flag = false;
          }
          setTitle(this.vipInfo.category_name + "-1911学堂");
        } else {
          message(this, "error", res.msg);
          this.noCollege = false;
          this.$router.push("/");
        }
      });
    },
    // 课程 card 列表
    recommendProjectList (itemCid, itemPid) {
      this.recommendForm.cids = this.categoryForm.cids
      category.curriculumProjectList(this.recommendForm).then(res => {
        if (res.status == 0) {
          this.recommendProjectData = res.data.curriculumProjectList;

        }
      });
    }
  },
  mounted () {
    this.categoryForm.cids = matchSplits("cid");
    this.vipDetailData.id = matchSplits("id");
    this.getCourseCardList();
    this.vipDetail();
    this.recommendProjectList()
    // this.scrollBottom();
    // this.$bus.$on("scrollBottom");
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/college/collegeDetail";
</style>