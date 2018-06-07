<template>
  <div class="playerBox clearfix">
    <div class="mediaL fl" ref="mediaL" :style="{ width: mediaLW+'%' }">
      <div class="playTop">
        <i class="el-icon-arrow-left" @click="goLink()"></i>新的中央经济工作会议精神解读
      </div>
      <div class="playInner" ref="playInner">
        <!-- 播放器 -->
        <video id="player-container-id" preload="auto" playsinline webkit-playinline x5-playinline></video>
        <video src="@/assets/images/piano.mp4" preload="auto" controls="controls"></video>
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
        <span class="fr collection">
          <i class="el-icon-star-on"></i>收藏
        </span>
        <span class="fr elt" @click="showElt">
          <i class="el-icon-edit"></i>课程评价
        </span>
      </div>
    </div>
    <div class="mediaR fl" ref="mediaR" :style="{ width: mediaRW+'%' }">
      <div v-show="mediaRInner" class="inner">
        <h5 class="title">{{player.courseName}}</h5>
        <div class="teacher clearfix">
        <img class="fl" src="~/assets/images/headImg.png" alt="">
          <p class="fl">{{player.teacher.name}}</p>
          <p class="fl">{{player.teacher.school}}</p>
        </div>
        <div class="courseList" v-for="(section,index) in player.courseList" :key="index">
          <h4>{{section.section}}</h4>
          <div class="knobble clearfix" v-for="(bar,index) in section.knobbles" :key="index">
            <span class="fl playIcon">
              <i class="el-icon-caret-right"></i>
            </span>
            <span class="fl barName">{{bar.number}} {{bar.barName}}（{{bar.duration}})</span>
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
        <el-input type="textarea" :rows="4" placeholder="请详细描述您遇到的问题" v-model="problem">
        </el-input>
        <div class="commitBug">
          <el-button round>提交</el-button>
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
          <el-button round>提交</el-button>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { other, auth } from '~/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        showReportBug: false,
        showEvaluate: false,
        mediaRW: 28,
        mediaLW: 72,
        mediaRInner: true,
        fileID:"",
        appID:"",
        mediaRIcon: "el-icon-arrow-right",
        radioBtn:"",
        player: {
          courseName: "新的中央经济工作会议精神解读2018年经济工作思路年",
          video: "",
          ewCode: require("@/assets/images/attentionWechat2.png"),
          teacher: {
            name: "莎良朋",
            school: "华中科技大学博士"
          },
          courseList: [{
            section: "第一章 图的基本概念",
            knobbles: [{
                number: "1-1",
                barName: "课程概述",
                duration: "32分钟",
                percentage: 30,
                isFree: true,
              },
              {
                number: "1-1",
                barName: "课程概述",
                duration: "32分钟",
                percentage: 30,
                isFree: true,
              },

            ]
          }]

        },
        problem: "",
        word:"",
        evaluate: {
          eltnum: 5,
          btnList: ["内容精彩", "内容生涩", "音质不好", "讲解详细", "很有帮助", "点赞老师"]
        },
        hsgForm: {
          hsgs: true
        }
      }
    },
    mounted () {
      this.resize();
      // window.addEventListener("onload",this.resize);
      window.addEventListener("resize", this.resize);
      // this.setHsg(this.hsgForm)
      document.getElementsByClassName("headerBox")[0].style.display="none";
      document.getElementsByClassName("footerBox")[0].style.display="none";
      // 初始化播放器
      // var player = TCPlayer('player-container-id', {
      //   fileID: this.fileID, 
      //   appID: this.appID // 
      // });
    },
    methods: {
      ...mapActions('auth', [
        'setHsg',
      ]),
      selTypeChange (index){
        this.radioBtn = index
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
        this.radioBtn="";
        this.word="";
      },
      resize() {
        const h = window.screen.availHeight;
        console.log(h);
        this.$refs.mediaL.style.height= h+"px";
        this.$refs.mediaR.style.height= h+"px";
        this.$refs.playInner.style.height=h-100+"px";
      },
      fold() {
        if (this.$refs.mediaR.offsetWidth != 0) {
          this.mediaRW = 0;
          this.mediaRInner = false;
          this.mediaRIcon = "el-icon-arrow-left";
          this.mediaLW = 100;
        } else {
          this.mediaRW = 28;
          this.mediaRInner = true;
          this.mediaRIcon = "el-icon-arrow-right";
          this.mediaLW = 72;
        }
        // this.resize();
      },
      goLink () {
        this.$router.back(-1)
      }
    }
  }
</script>
<style scoped>
video::-internal-media-controls-download-button {
    display:none;
}
video::-webkit-media-controls-enclosure {
    overflow:hidden;
}
video::-webkit-media-controls-panel {
    width: calc(100% + 30px);
}
</style>

