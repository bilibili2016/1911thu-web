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
              <img :src="shareImgc" alt="">
              <span> 收藏 </span>
              <img :src="shareImg" alt="">
              <span> 分享 </span>
            </div>

          </div>
        </div>
      </div>
      <div class="main-header">
        <v-card :courseList="courseList" :config="config" :linkdata="linkseven"></v-card>
      </div>
      <div class="content fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="介绍" name="first">
          </el-tab-pane>
          <el-tab-pane label="目录" name="second">
            <v-line :catalogs="catalogs"></v-line>
          </el-tab-pane>
        </el-tabs>
        <div class="attention">
          <h4>关注我们</h4>
          <div class="code">
            <img src="../../../assets/images/attentionWechat.png" alt="">
            <h5>扫描二维码或关注“1911学堂”微信公众号</h5>
            <p>精彩好课，第一时间了解</p>
          </div>
        </div>
      </div>
      <!-- 讲师介绍 -->
      <div class="teacher">
        <h4>讲师介绍</h4>
        <div class="personal">
          <img :src="teacher.headImg" alt="">
          <h5>{{teacher.teacherName}}</h5>
          <h6>{{teacher.degree}}</h6>
          <p>{{teacher.abstract}}</p>
        </div>
      </div>
      <div class="evaluate-tag">
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
          <img class="fl" :src="item.headImg" alt="">
          <div class="fl">
            <p style="margin-top:5px;">{{item.name}}</p>
            <p>{{item.time}}</p>
          </div>
          <div style="margin-top:10px;">
            <el-rate disabled v-model="item.rate" class="itemBox-rate fr"></el-rate>
          </div>
          <h5>{{item.content}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomCard from "@/components/common/Card.vue";
  import CustomLine from "@/components/common/Line.vue";
  export default {
    components: {
      'v-card': CustomCard,
      'v-line': CustomLine
    },
    data() {
      return {
        activeName: 'second',
        dialogVisible: false,
        textarea: null,
        rateModel: 5,
        shareImg: require('~/assets/images/f.png'),
        shareImgc: require('~/assets/images/c.png'),
        value1: 1,
        linkseven: 'player',
        catalogs: [{
          isLogin: false,
          chapterName: "第一章 图的基本概念",
          barList: [{
              number: "1-1",
              barName: "课程概述",
              duration: "32分钟",
              percentage: 30,
              isFree: true,
            },
            {
              number: "1-2",
              barName: "图怎么画",
              duration: "35分钟",
              percentage: 10,
              isFree: false,
            }
          ]
        }],
        teacher: {
          headImg: require("../../../assets/images/headImg.png"),
          teacherName: "莎良朋",
          degree: "华中科技大学博士",
          abstract: "目前着手于研究人工智能，精通Python编程和机器学习算法，主导过kaiterra全球天气污染智能预测系统的开发与部署，目前在做智能推荐系统的开发应用并且为相关公司提供解决方案。系统的开发应用。"
        },
        evaluate: {
          score: "9.8",
          rate: "5",
          number: "24",
          praise: "99%",

        },
        commentator: [{
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: "3",
          content: "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        }, {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: "3",
          content: "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        }, {
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: "3",
          content: "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        },{
          headImg: require("../../../assets/images/headImg.png"),
          name: "小萝卜头",
          time: "2018-05-30",
          rate: "3",
          content: "你的工作较认真负责，能协助老师做好工作，能尊敬老师,希望你能团结更多的同学。保持良好的学习心态，激发学习热情，是当务之急。愿你永远孜孜以求，铸造一个强者的形象。记住，有些事情不是单凭兴趣就可以的，彩虹是经历风雨后才能得见的美景。"
        }],
        config: {
          card_type: "goodplay"
        },
        courseList: [{
          bgImg: require("@/assets/images/ke-1.png"),
          headImg: require("@/assets/images/headImg.png"),
          grade: "特约讲师", //级别：特约讲师，金牌讲师
          teacher: "莎良朋",
          school: "华中科技大学博士",
          title: "新的中央经济工作会议精神解读——2018年经济工作思路和重点",
          synopsis: "日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。",
          observer: "李大民",
          rate: "5",
          comment: "啦十分考究的，拉萨孔家店官，方的感觉冰冷。的大山里的风景大师，浪费空间萨芬啊收到。了罚款决定，书范德萨了科技大，厦飞拉萨的空间菲，拉斯发撒法丽达，刷卡积分阿斯蒂芬。",
          styduNumber: "234"
        }]
      }
    },
    methods: {
      handleClick() {

      },
      checked(index) {
        $(".catalog .chapter .bar").removeClass("checked");
        $(".catalog .chapter .bar").eq(index).addClass("checked");
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },

  }
</script>


