<template>
  <div class="playerBox clearfix" ref="playerBox">
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <div class="playTop">
        <i class="el-icon-arrow-left" @click="goLink()"></i>{{player.title}}
      </div>
      <div class="playInner" ref="playInner" id="playInner">
        <video id="movd" ref="movd" preload="auto" playsinline webkit-playinline x5-playinline></video>
      </div>
      <div class="playBottom clearfix">
        <span class="fl usePhone">手机观看
          <div class="ewCode">
            <img src="~/assets/images/attentionWechat2.png" alt="">
            <i></i>
          </div>
        </span>
        <span class="fl problem" @click="showRpt">报告问题</span>
        <span class="fr share">
          <i class="el-icon-share"></i>分享
        </span>
        <span class="fr collection" @click="collection" :class=" { bag: this.collectMsg === 1 }" >
          <i class="el-icon-star-on"></i>
          <span>收藏</span>

        </span>
        <span class="fr elt" @click="showElt" v-if="this.iseve === 0">
          <i class="el-icon-edit"></i>课程评价
        </span>
         <span class="fr elt" v-else :class=" { bag: this.iseve === 1 }">
          <i class="el-icon-edit"></i>已评价
        </span>
      </div>
    </div>
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner">
        <h5 class="title">{{player.title}}</h5>
        <div class="teacher clearfix">
        <img class="fl" :src="player.head_img" alt="">
          <p class="fl">{{player.teacher_name}}</p>
          <p class="fl">{{player.graduate}}</p>
        </div>
        <div class="courseList" v-for="(section,index) in courseList" :key="index">
          <h4>{{section.title}}</h4>
          <div class="knobble clearfix" v-for="(bar,index) in section.childList" :key="index">
            <span class="fl playIcon">
              <i class="el-icon-caret-right"></i>
            </span>
            <span class="fl barName">{{bar.video_number}} {{bar.title}}（{{bar.video_time}}分钟)</span>
          </div>
        </div>
      </div>
      <div class="fold" @click="fold">
        <i :class="mediaRIcon"></i>
      </div>
    </div>

    <div class="reportBug" v-show="showReportBug">
      <div class="note">
        <h4>报告问题
          <i @click="closeReport" class="el-icon-close fr"></i>
        </h4>
        <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题" v-model="problem.content">
        </el-input>
        <div class="commitBug">
          <el-button @click="reportProblem">提交</el-button>
        </div>
      </div>
    </div>
    <div class="evaluate" v-show="showEvaluate">
      <div class="note">
        <h4>课程评价
          <i class="el-icon-close fr" @click="closeEvaluate"></i>
        </h4>
        <h5>请问该课程对您有帮忙吗？快来评个分吧！</h5>
        <h6>课程评分：
          <el-rate v-model="evaluate.eltnum"></el-rate>
        </h6>
        <div class="btnList">
          <el-radio v-for="(btn,index) in evaluate.btnList" :key="index" v-model="radioBtn" :label="index" border @change="selTypeChange(index)">{{btn}}</el-radio>
        </div>
        <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题" v-model="word">
        </el-input>
        <div class="commitBug">
          <el-button round @click.native="collection">提交</el-button>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { other, auth, home } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
export default {
  computed: {
    ...mapState("auth", ["kid"])
  },
  data() {
    return {
      showReportBug: false,
      showEvaluate: false,
      mediaRW: 28,
      mediaLW: 72,
      mediaRInner: true,
      fileID: "",
      appID: "",
      mediaRIcon: "el-icon-arrow-right",
      radioBtn: "",
      player: {
        // courseName: "新的中央经济工作会议精神解读2018年经济工作思路年",
        // video: "",
        // ewCode: require("@/assets/images/attentionWechat2.png"),
        // teacher: {
        //   name: "莎良朋",
        //   school: "华中科技大学博士"
        // },
      },
      courseList: [
        {
          section: "第一章 图的基本概念",
          knobbles: [
            {
              number: "1-1",
              barName: "课程概述",
              duration: "32分钟",
              percentage: 30,
              isFree: true
            },
            {
              number: "1-1",
              barName: "课程概述",
              duration: "32分钟",
              percentage: 30,
              isFree: true
            }
          ]
        }
      ],
      problem: {
        curriculumId: null,
        content: ""
      },
      word: "",
      evaluate: {
        eltnum: 5,
        btnList: [
          "内容精彩",
          "内容生涩",
          "音质不好",
          "讲解详细",
          "很有帮助",
          "点赞老师"
        ]
      },
      hsgForm: {
        hsgs: true
      },
      playerForm: {
        curriculumId: '',
        catalogId: ''
      },
      fileID: null,
      appID: null,
      tcplayer: {
        fileID: "",
        appID: "",
        autoplay: true, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        plugins: {
          ContinuePlay: {
            // 开启续播功能
            auto: false, //[可选] 是否在视频播放后自动续播
            text: "上次播放至 ", //[可选] 提示文案
            btnText: "恢复播放" //[可选] 按钮文案
          }
        }
      },
      playerDetailForm: {
        curriculumId: ''
      },
      addEvaluateForm: {
        ids: null,
        evaluatecontent: null,
        scores: null,
        types: 1
      },
      addCollectionForm: {
        curriculumId: null
      },
      collectMsg: 1,
      iseve: 1
    };
  },

  methods: {
    ...mapActions("auth", ["setHsg"]),
    selTypeChange(index) {
      this.radioBtn = index;
    },
    showRpt() {
      this.showReportBug = true;
    },
    showElt() {
      this.showEvaluate = true;
    },
    closeReport() {
      this.showReportBug = false;
    },
    closeEvaluate() {
      this.showEvaluate = false;
      this.radioBtn = "";
      this.word = "";
    },
    resize() {
      const h = this.$refs.playerBox.offsetHeight;
      this.$refs.mediaL.style.height = h + "px";
      this.$refs.mediaR.style.height = h + "px";
      this.$refs.playInner.style.height = h - 100 + "px";
    },
    fold() {
      if (this.$refs.mediaR.offsetWidth != 0) {
        this.mediaRW = 0;
        this.mediaRInner = false;
        this.mediaRIcon = "el-icon-arrow-left";
        this.mediaLW = 100;
        this.$refs.movd.children[0].style.width = this.mediaLW + "%";
      } else {
        this.mediaRW = 28;
        this.mediaRInner = true;
        this.mediaRIcon = "el-icon-arrow-right";
        this.mediaLW = 72;
      }
      // this.resize();
    },
    goLink() {
      this.$router.back(-1);
    },
    getPlayerInfo() {
      var player = TCPlayer("movd", this.tcplayer);
      if(this.$refs.playInner.children[0]){
        player.dispose();
        $("#playInner").html("");
        $("#playInner").html('<video id="movd" ref="movd" preload="auto" playsinline webkit-playinline x5-playinline></video>');
      }
      console.log(this.kid)
      let kid = this.kid
      //  persistStore.set("curriculumId", item.id)
      this.playerForm.curriculumId = persistStore.get('curriculumId');

      // this.playerForm.catalogId = persistStore.get("catalogId");
      player = TCPlayer("movd", this.tcplayer);
      return new Promise((resolve, reject) => {
        home.getPlayerInfos(this.playerForm).then(response => {
          console.log(this.playerForm, '12345678')
          if (response.data.playAuthInfo.videoViewType == false) {
            player.loadVideoByID({
              fileID : response.data.playAuthInfo.fileID,
              appID : response.data.playAuthInfo.appID,
              sign : response.data.playAuthInfo.sign,
              t : response.data.playAuthInfo.t,
              exper : response.data.playAuthInfo.exper
            })
          } else {
            player.loadVideoByID({
              fileID : response.data.playAuthInfo.fileID,
              appID : response.data.playAuthInfo.appID,
              t : response.data.playAuthInfo.t,
              sign : response.data.playAuthInfo.sign
            })
          }
        });
      });
    },
    getCurriculumPlayInfo() {
      this.playerDetailForm.curriculumId = persistStore.get("curriculumId");
      return new Promise((resolve, reject) => {
        home.getCurriculumPlayInfo(this.playerDetailForm).then(response => {
          // console.log(response, '345678')
          this.player = response.data.curriculumDetail;
          this.courseList = response.data.curriculumCatalogList;
          this.collectMsg = response.data.curriculumDetail.is_collection;
        });
      });
    },
    // 反馈问题
    reportProblem() {
      this.problem.curriculumId = persistStore.get("curriculumId");
      return new Promise((resolve, reject) => {
        home.reportProblem(this.problem).then(response => {
          this.$message({
            type: "success",
            message: response.msg
          });
          this.closeReport();
        });
      });
    },
    // 增加评论
    addEvaluate() {
      this.addEvaluateForm.ids = persistStore.get("curriculumId");
      this.addEvaluateForm.evaluatecontent = this.word;
      this.addEvaluateForm.scores = this.evaluate.eltnum;
      return new Promise((resolve, reject) => {
        home.addEvaluate(this.addEvaluateForm).then(response => {
          // console.log(response, '345678')
          this.$message({
            type: "success",
            message: response.msg
          });
        });
      });
    },
    // 判断是收藏还是为收藏
    collection() {
      // console.log(this.collectMsg, '1234')
      if (this.collectMsg === 1) {
        this.deleteCollection();
      } else {
        this.addCollection();
      }
    },
    // 添加收藏
    addCollection() {
      // console.log('增加收藏')
      this.addCollectionForm.curriculumId = persistStore.get("curriculumId");
      return new Promise((resolve, reject) => {
        home.addCollection(this.addCollectionForm).then(response => {
          //console.log(response, '增加收藏')
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
    this.resize();
    window.addEventListener("resize", this.resize);
    // this.setHsg(this.hsgForm)
    document.getElementsByClassName("headerBox")[0].style.display = "none";
    document.getElementsByClassName("footerBox")[0].style.display = "none";
    this.getPlayerInfo();
    this.getCurriculumPlayInfo();
    this.$bus.$emit("hideHeader", true);
  }
};
</script>
<style scoped>
.bag {
  color: #732eaf;
}
video::-internal-media-controls-download-button {
  display: none;
}
video::-webkit-media-controls-enclosure {
  overflow: hidden;
}
video::-webkit-media-controls-panel {
  width: calc(100% + 30px);
}
</style>

