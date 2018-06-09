<template>
  <div class="container">

    <div class="main clearfix">
      <div class="main-crumb">
        <div class="fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/course/pages/newlesson' }">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="fr">
          <div class="collect">
            <div class="line-center">
              <span @click="collection" :class=" { bag: this.collectMsg === 1 }" >
                <i class="el-icon-star-on"></i>
                <span :class=" { bag: this.collectMsg === 1 }">收藏 </span>
              </span>
              <span>
                <i class="el-icon-share"></i>
                <span> 分享 </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header">
        <v-card :courseList="courseList" :config="config" :linkdata="linkseven" :privileMsg="privileMsg"></v-card>
      </div>
      <div class="content fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="介绍" name="first">
            <div class="detail" v-html="courseList.content"></div>
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <v-line :catalogs="catalogs" :privileMsg="privileMsg"></v-line>
          </el-tab-pane>
        </el-tabs>
        <!-- 关注我们 -->
        <div class="attention">
          <h4>关注我们</h4>
          <div class="code">
            <img src="@/assets/images/attentionWechat.png" alt="">
            <h5>扫描二维码或关注“1911学堂”微信公众号</h5>
            <p>精彩好课，第一时间了解</p>
          </div>
        </div>
      </div>

      <!-- 讲师介绍 -->
      <div style="width:345px" class="fr">
        <div class="teacher ">
          <h4>讲师介绍</h4>
          <div class="personal">
            <img :src="courseList.head_img" alt="">
            <h5>{{courseList.teacher_name}}</h5>
            <h6>{{courseList.graduate}}</h6>
            <p>{{courseList.teacher_content}}</p>
          </div>
        </div>
        <!-- 评价 -->
        <div class="evaluate-tag ">
          <h4>课程评价</h4>
          <div class="personal">
            <div class="title">请问该课程对您有帮忙吗？快来评个分吧！</div>

              <span class="rate">课程评分:</span>
              <span class ="ratem">
                <el-rate v-model="rateModel"></el-rate>
              </span>
              <div class="bthgrop">
                <el-button plain>内容精彩</el-button>
                <el-button plain>内容生涩</el-button>
                <el-button plain>音质不好</el-button>
                <el-button plain>很有帮助</el-button>
                <el-button plain>点赞老师</el-button>
                <el-button plain>讲解详细</el-button>
              </div>
              <div class="area">
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
              </div>
              <div class="submit">
                <el-button type="primary" @click="dialogVisible = true">提交</el-button>
              </div>
              <!-- 弹窗 -->
              <el-dialog
                title="报告问题"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">

                <div  v-for="(item,index) in commentator" :key="index" class="dialog-line">
                    <div class="commentator clearfix">
                      <img class="fl" :src="item.headImg" alt="">
                      <div class="fl">
                        <p style="margin-top:5px;">{{item.name}}</p>
                        <p>{{item.time}}</p>
                      </div>
                      <div class="rates">
                        <el-rate disabled v-model="item.rate" class="itemBox-rate fl"></el-rate>
                      </div>
                      <h5>{{item.content}}</h5>
                    </div>
                </div>
              </el-dialog>
          </div>
        </div>
        <!-- 用户评论 -->
        <div class="evaluate">
          <h4>用户评价 <span>查看更多></span></h4>
          <div class="score">
            <span class="fl">{{evaluate.score}}</span>
            <el-rate disabled v-model="evaluate.rate" class="itemBox-rate fl"></el-rate>
            <span class="fr">{{evaluate.number}}人评价 好评度{{evaluate.praise}}</span>
          </div>
          <div class="commentator clearfix" v-for="(item,index) in commentator" :key="index">
            <img class="fl" :src="item.head_img" alt="">
            <div class="fl">
              <p style="margin-top:5px;">{{item.nick_name}}</p>
              <p>{{item.create_time}}</p>
            </div>
            <div style="margin-top:10px;">
              <el-rate disabled v-model="item.rate" class="itemBox-rate fr"></el-rate>
            </div>
            <h5>{{item.content}}</h5>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import CustomCard from "@/components/common/Card.vue";
import CustomLine from "@/components/common/Line.vue";
import { other, home } from "~/lib/v1_sdk/index";
import { mapState, mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
export default {
  computed: {
    ...mapState("auth", ["kid"])
  },
  components: {
    "v-card": CustomCard,
    "v-line": CustomLine
  },
  data() {
    return {
      activeName: "second",
      dialogVisible: false,
      textarea: null,
      rateModel: 5,
      shareImg: require("~/assets/images/f.png"),
      shareImgc: require("~/assets/images/c.png"),
      value1: 5,
      linkseven: "player",
      catalogs: [],
      teacher: {
        headImg: require("../../../assets/images/headImg.png"),
        teacherName: "莎良朋",
        degree: "华中科技大学博士",
        abstract:
          "目前着手于研究人工智能，精通Python编程和机器学习算法，主导过kaiterra全球天气污染智能预测系统的开发与部署，目前在做智能推荐系统的开发应用并且为相关公司提供解决方案。系统的开发应用。"
      },
      evaluate: {
        score: "9.8",
        rate: 5,
        number: "24",
        praise: "99%"
      },
      commentator: [
        {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: 2,
          content:
            "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        },
        {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: 4,
          content:
            "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        },
        {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: 3,
          content:
            "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        },
        {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: 5,
          content:
            "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        }
      ],
      config: {
        card_type: "goodplay"
      },
      courseList: {},
      kidForm: {
        ids: null
      },
      evaluateListForm: {
        pages: 1,
        limits: 4,
        ids: "",
        types: 1,
        isRecommend: 2
      },
      privileMsg: true,
      collectMsg: 1,
      addCollectionForm: {
        curriculumId: null
      }
    };
  },
  methods: {
    handleClick() {},
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getCourseDetail() {
      return new Promise((resolve, reject) => {
        home.getCourseDetail(this.kidForm).then(response => {
          // console.log(response, "这是课程详情");
          this.courseList = response.data.curriculumDetail;
          this.privileMsg = response.data.curriculumPrivilege;
          this.content = response.data.curriculumPrivilege;
        });
      });
    },
    getEvaluateList() {
      return new Promise((resolve, reject) => {
        home.getEvaluateLists(this.evaluateListForm).then(response => {
          this.commentator = response.data.evaluateList;
        });
      });
    },
    getCourseList() {
      return new Promise((resolve, reject) => {
        home.getCourseList(this.kidForm).then(response => {
          // console.log(response, "这是课程列表");
          // this.courseList = response.data.curriculumDetail
          this.catalogs = response.data.curriculumCatalogList;
        });
      });
    },
    // 判断是收藏还是为收藏
    collection() {
      // console.log(this.collectMsg, "1234");
      if (this.collectMsg === 1) {
        this.deleteCollection();
      } else {
        this.addCollection();
      }
    },
    // 添加收藏
    addCollection() {
      console.log("增加收藏");
      this.addCollectionForm.curriculumId = persistStore.get("curriculumId");
      return new Promise((resolve, reject) => {
        home.addCollection(this.addCollectionForm).then(response => {
          console.log(response, "增加收藏");
          // this.collectMsg = response.data.curriculumDetail.is_collection
          this.$message({
            type: "success",
            message: "添加收藏成功"
          });
          this.collectMsg = 1;
        });
      });
    },
    // 删除收藏
    deleteCollection() {
      this.addCollectionForm.curriculumId = persistStore.get("curriculumId");
      return new Promise((resolve, reject) => {
        home.deleteCollection(this.addCollectionForm).then(response => {
          // this.collectMsg = response.data.curriculumDetail.is_collection
          this.$message({
            type: "success",
            message: "取消收藏成功"
          });
          this.collectMsg = 0;
        });
      });
    }
  },
  mounted() {
    document.getElementsByClassName("headerBox")[0].style.display = "inline";
    document.getElementsByClassName("footerBox")[0].style.display = "inline";
    this.kidForm.ids = this.kid;
    this.evaluateListForm.ids = this.kid;
    this.getCourseDetail();
    this.getEvaluateList();
    this.getCourseList();
  }
};
</script>

<style scoped>
.bag {
  color: #732eaf !important;
}
</style>
