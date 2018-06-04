<template>
  <div class="card">
    <!-- banner定制 -->
    <template v-if="config.card_type === 'ding'">
      <div class="customization">
        <div class="pro clearfix" v-for="(pro,index) in dingData" :key="index" @click="getMore(pro.link)">
          <img :src="pro.src" alt="" class="fl">
          <div class="fr con">
            <h5>{{pro.title}}</h5>
            <p>{{pro.content}}</p>
          </div>
        </div>
      </div>
    </template>
     <!-- profile个人信息模板 新上好课模板-->
    <template v-if="config.card_type === 'profile'">
      <div class="card-category profile">

        <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list" @click="goLink('course/pages/coursedetail')">

          <el-card shadow="never" body-style="padding: 0;" class="itemBox" >
            <div  class="new-style" v-if="config.new === 'true'">
              <img :src="newTag" alt="">
            </div>
            <div class="mask-style">
              <img :src="jinImg" alt="" class="jin-style">

            </div>
            <div  class="bgImgs">
              <img :src="card.bg" alt=""
             >
            </div>

            <div class="tag">
              <span>新闻宣传</span>
              <span>时政</span>
            </div>
            <div v-if="config.card === 'home'"></div>
            <div class="common-button btn-bgs " v-else>
              <el-button type="primary" plain @click="goLink(linkdata)">继续学习</el-button>
            </div>
            <el-row>
              <!-- 名字 -->
              <div class="item">
                <p class="itemBox-name">
                  <span>{{card.name}}</span>
                </p>
                <p class="itemBox-info">
                  <span>
                    {{card.cnum}}课时
                  </span>
                  <span class="itemBox-num">
                    <img :src="numSrc" alt="">
                    <span>{{card.pnum}}</span>
                    <el-rate v-model="card.rate" class="itemBox-rate"></el-rate>
                  </span>
                </p>
              </div>
              <!-- 作者和头衔 -->
              <div class="line-wrap" v-if="config.card === 'home'">
                <div class="line-center">
                  <img :src="card.avator" alt="">
                  <span>王建中</span>
                  <span class="title">华中科技大学博士</span>
                </div>
              </div>
              <!-- 学习进度 -->
              <div class="line-wraps" v-if="config.card === 'learning'">
                <div class="line-centers">
                  <p>已学习100%</p>
                  <el-progress :percentage="50"></el-progress>
                </div>
              </div>
              <div v-if="config.card === 'already'">
                <div class="line-centers">
                  <div>已学习100%</div>
                </div>
              </div>
              <div class="readyImg" v-if="config.card === 'already'">
                <img :src="readyImg" alt="">
              </div>
            </el-row>
          </el-card>
        </div>
      </div>
    </template>


    <!-- 新上好课详情 -->
<template v-if="config.card_type === 'goodlesson'">
  <div class="courseList center goodLesson">
    <div class="course clearfix bottom" v-for="(course,index) in courseList" :key="index">
      <el-card class="fl" :body-style="{ padding: '0px' }">
        <img :src="course.bgImg" class="image" >
        <div class="personInfo clearfix ">
          <img :src="course.headImg" alt="" >
          <h5 class="fr">{{course.grade}}：{{course.teacher}}</h5>
          <p class="fr">{{course.school}}</p>
        </div>
        <div class="play-btn">
          <img :src="playbtn" alt="" @click="goLink('coursedetail')">
        </div>
      </el-card>
      <div class="particulars fr">
        <div class="currentclum">
          <h4>{{course.title}}</h4>
          <p>{{course.synopsis}}</p>
        </div>

        <el-carousel trigger="click" height="120px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="comment">
              <h5>
                <span>{{course.observer}}的评论</span>
                <el-rate disabled v-model="course.rate" class="itemBox-rate"></el-rate>
              </h5>
              <p>{{course.comment}}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="study clearfix">
          <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.styduNumber}}人加入学习</span>
          <span class="coin">￥ 300.00</span>
          <div class="fr common-button">
            <el-button type="primary" plain @click="goLink(linkdata)">立即学习</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <!-- 新上好课详情 页面 -->
<template v-if="config.card_type === 'goodplay'">
  <div class="courseList center">
    <div class="course clearfix " v-for="(course,index) in courseList" :key="index">
      <el-card class="fl" :body-style="{ padding: '0px' }">
        <div class="goodplay">
          <img :src="course.bgImg" class="image">
          <div class="mask"></div>
          <div class="common-button btn-bg">
            <el-button type="primary" plain @click="goLink(linkdata)">立即学习</el-button>
          </div>
        </div>
      </el-card>
      <div class="particularss fr">
        <div class="currentclum">
          <h4>{{course.title}}</h4>
          <div>
            <span class="fl coursenum"><span>52课时</span><img src="../../assets/images/ren.png" alt=""> 1021</span>
            <span class="rate"><el-rate v-model="one"></el-rate></span>
          </div>
        </div>
        <div class="study clearfix">
          <p>日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。</p>
          <div class="common-button">
            <el-button type="primary" plain @click="goLink(linkdata)">立即学习</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      <!-- 新上好课详情 页面  资讯详情页面-->
<template v-if="config.card_type === 'goodplayTwo'">
  <div class="courseList center">

    <div class="course clearfix boxshadow-none" v-for="(course,index) in newsList" :key="index" style="box-shadow:none;">
      <el-card class="fl" :body-style="{ padding: '0px' }">
        <div style="position:relative;" class="img-wrap">
          <img :src="course.bgImg" class="image">
        </div>
      </el-card>
      <div class="particulars fr" style="width:640px;">
        <div class="currentclum">
          <h4>{{course.title}}</h4>
        </div>
        <div class="bordernone">
          <p>日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。以自己的亲身经历帮助学员做好在日本旅游的一切准备。尽量避免专业的语法知识介绍，帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。日本外籍教师全中文讲解，以最标准的东京音带领大家领略日语的魅力之所在。帮助学员轻松掌握旅游途中所需要使用的语言。设置各种旅游途中可能遇到的场景，帮助学员一一解决问题。。</p>
        </div>
        <div>
          <p class="fl time">2018-05-20</p>
          <p class="fr more" @click="getMore(linksix)">阅读全文 >></p>
        </div>
      </div>
      <div class="lines" v-if="index !== 0">
      </div>
    </div>
  </div>
</template>
    <!-- 学堂资讯 -->
<template v-if="config.card_type === 'infoOne'">
  <div class="info-list">
    <div v-for="(card,index) in infoArticle" :index="index" :key="card.id" class="info">
      <el-card shadow="never" body-style="padding: 0;">
        <div class="info-box" @click="getMore('news/detail')">
          <div class="info-wrap">
            <img :src="card.avatar" alt="">
            <span>从区块链到生命，许知远和王小川在1911主题餐厅聊了什么？</span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="more" @click="getMore(linkdata)">查看更多>></div>
  </div>
</template>

<template v-if="config.card_type === 'infoTwo'">
  <div class="card-categorys">
    <div v-for="(card,index) in infoDesc" :index="index" :key="card.id" class="card-list">
      <el-card shadow="never" body-style="padding: 0;" class="itemBox">
        <div class="img-box">
          <img :src="card.avatar" alt="">
          <div>
            <span>学校党委理论学习中心组召开会议</span>
          </div>
        </div>
        <div class="item">
          5月22日上午，中国人民大学召开党委理论学习中心组（扩大）会议，学习《中央巡视工作规划（2018-2022年）》（以下简称《规划》）精神。中央巡视工作领导小组办公室副主任夏立忠应邀作《深入贯彻党的十九大精神巩固深化发展新时代巡视工作》专题报告5月22日上午，中国人民大学召开党委理论学习中心组（扩大）会议.....
        </div>
      </el-card>
    </div>
  </div>
</template>
  </div>
</template>

<script>
  export default {
    props: [
      "data",
      "config",
      "infoArticle",
      "infoDesc",
      "dingData",
      "searchData",
      "courseList",
      "linkdata",
      'newsList',
      'linkfour',
      'linksix'
    ],
    data() {
      return {
        numSrc: require("@/assets/images/home_num.png"),
        avator: require("@/assets/images/home_avator.png"),
        one: 1,
        readyImg: require("@/assets/images/ready.png"),
        playbtn: require('@/assets/images/play.png'),
        newTag: require('@/assets/images/new.png'),
        jinImg: require('@/assets/images/jin.png'),
        isShow: false
      };
    },
    methods: {
      goLink(item) {
         switch (window.location.pathname) {
          case '/course/pages/category':
           this.$router.push('coursedetail');
            break
          case '/':
           this.$router.push(item);
            break
          case '/course/pages/coursedetail':
            this.$router.push('player');
            break
          case '/course/pages/classify':
            this.$router.push('coursedetail');
            break
          case '/course/pages/search':
            this.$router.push('coursedetail');
            break
          case '/course/pages/newlesson':
            this.$router.push('coursedetail');
            break
          default:
            break
        }
      },
      getMore(item) {
        this.$router.push(item);
      },
      toggleShow: function() {
      this.isShow = !this.isShow
    }
    },
    mounted() {}
  };
</script>

<style scoped lang="scss">
.new-style{
  img{
    width: 48px!important;
    height: 28px!important;
    // margin-top: -20px;
    position: absolute;
    top: -13px;
    left: -10px;
    z-index: 1000;
  }
}
.mask-style{
  width: 260px;
  height: 160px;
  background-color: #6417A6;
  opacity: 0.5;
  position: absolute;
  border-top-left-radius:16px;
  border-top-right-radius:16px;
  display: none;
   transition: all 300ms;
}
.mask{
  display: none;
  transition: all 3000ms;
}
.jin-style{
  width: 38px!important;
  height: 38px!important;
  position: absolute;
  top: 60px;
  left: 110px;
  z-index: 1000;
  display: none;
   transition: all 300ms;

}
  // banner定制
  .customization {
    width: 1100px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -550px;
    display: flex;
    z-index: 3;
    align-items: center;
    justify-content: space-between;
    div.pro {
      width: 350px;
      height: 112px;
      border-radius: 5px;
      background-color: #efefef;
      cursor: pointer;
      &:hover {
        background-color: #f1e9f8;
      }
      .con {
        margin-right: 20px;
      }
      img {
        width: 50px;
        height: 50px;
        margin: 31px 16px;
      }
      div {
        width: 235px;
        h5 {
          color: #222;
          // line-height: 40px;
          margin: 19px 0px 12px 0px;
          &:hover {
            color: #8f4acb;
          }
        }
        p {
          color: #666;
          font-size: 12px;
          line-height: 25px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .showMsg {
    display: none;
  }

  // 新上好课
  .card-category {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    .card-list {
      margin-bottom: 50px;
      border-radius: 16px;
      &:hover {
        box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
        transition: all 300ms;
        .jin-style{
    display: block;
     transition: all 300ms;
  }
  .mask-style {
    display: block;
     transition: all 300ms;
  }
      }

      .itemBox {
        cursor: pointer;
        width: 260px;
        display: flex;
        border-radius: 16px;
        background: #fff;
        flex-direction: column;
        align-items: center;
        position: relative;
        border: none;
        img {
          width: 260px;
          height: 160px;
          // border-radius: 16px;
          border-top-left-radius:16px;
           border-top-right-radius:16px;
          // position: relative;
        }
        .tag {
          position: absolute;
          top: 126px;
          left: 4px;
          span {
            display: inline-block;
            padding: 6px 11px 5px 10px;
            background: rgba(37, 55, 163, 1);
            opacity: 0.6;
            border-radius: 6px;
            color: #fff;
            margin-left: 8px;
          }
        }
        .item {
          // border-bottom: 1px rgba(228, 228, 244, 1) solid;
          .itemBox-name {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 42, 81, 1);
            line-height: 0px;
            padding: 26px 15px;
          }
          .itemBox-info {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            margin: 0px 0px 13px 15px;
            .itemBox-num {
              font-size: 12px;
              font-family: MicrosoftYaHei;
              color: rgba(176, 174, 184, 1);
              line-height: 0px;
              padding-left: 8px;
              img {
                width: 12px;
                height: 12px;
                margin: 0px 5px;
              }
              .itemBox-rate {
                display: inline;
                font-size: 12px;
                line-height: 13px;
                margin-left: 57px;
              }
            }
          }
        }
        .items {
          // border-bottom: 1px rgba(228, 228, 244, 1) solid;
          .itemBox-name {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 42, 81, 1);
            line-height: 0px;
            padding: 26px 15px;
          }
          .itemBox-info {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            margin: 0px 0px 13px 15px;
            .itemBox-num {
              font-size: 12px;
              font-family: MicrosoftYaHei;
              color: rgba(176, 174, 184, 1);
              line-height: 0px;
              padding-left: 8px;
              img {
                width: 12px;
                height: 12px;
                margin: 0px 5px;
              }
              .itemBox-rate {
                display: inline;
                font-size: 12px;
                line-height: 13px;
                margin-left: 57px;
              }
            }
          }
        }
        .readyImg {
          width: 75px;
          height: 49px;
          position: absolute;
          top: 40%;
          left: 94%;
          margin-left: -70px;
          margin-top: -20px;
          img {
            width: 75px;
            height: 49px;
          }
        }
        .line-wrap {
          height: 50px;
          border-top: 1px #e4e4f4 solid;
        }
        .line-wraps {
          height: 50px;
          // border-top: 1px #e4e4f4 solid;
        }
        .line-center {
          line-height: 50px;
          span {
            vertical-align: middle;
            font-family: MicrosoftYaHei;
            color: rgba(109, 104, 127, 1);
            padding-top: 1px;
            display: inline-block;
          }
          .title {
            display: inline-block;
            margin-left: 46px;
            color: rgba(109, 104, 127, 1);
          }
        }
        .line-centers {
          padding: 0px 14px 0px 13px;
          p {
            margin-bottom: 10px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(136, 136, 136, 1);
            // line-height:0px;
          }
          div {
            margin-bottom: 26px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(136, 136, 136, 1);
          }
        }
        .line-center img {
          width: 22px;
          height: 22px;
          padding: 0px;
          margin: 0px 10px 0px 14px;
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
        }
      }
    }
    .el-card {
      box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
      border-radius: 16px;
    }
  }

  // 学堂资讯
  .info-list {
    float: right;
    .info {
      width: 603px;
      height: 126px;
      background: rgba(255, 255, 255, 1);
      border-radius: 6px;
      box-shadow: 4px 0px 18px rgba(73, 28, 156, 0.36);
      margin-bottom: 30px;
      cursor: pointer;
       &:hover {
        box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
        transition: all 300ms;
       }
      .info-box {
        height: 126px;
        .info-wrap {
          height: 126px;
          overflow: hidden;
          img {
            width: 180px;
            height: 126px;
            padding: 0px;
            margin: 0px;
            vertical-align: middle;
            overflow: hidden;
            margin-top: -40px;
          }
          span {
            display: inline-block;
            width: 396px;
            font-size: 18px;
            font-family: MicrosoftYaHei;
            color: rgba(34, 34, 34, 1);
            line-height: 35px;
            margin-top: 28px;
            margin-left: 15px;
          }
          span:hover {
            color: #8f4acb;
          }
        }
      }
    }
    .more {
      float: right;
      height: 20px;
      cursor: pointer;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: rgba(100, 23, 166, 1);
      line-height: 40px;
    }
  }

  // left
  .card-categorys {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    float: left;
    .card-list {
       &:hover {
        box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
        transition: all 300ms;
        }
      .itemBox {
        cursor: pointer;
        width: 472px;
        height: 492px;
        border-radius: 16px;
        background: #fff; // margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center; // border:1px #999 solid;
        border-radius: 6px;
        box-shadow: 4px 0px 18px rgba(73, 28, 156, 0.36);
        .img-box {
          width: 472px;
          height: 279px;
          position: relative;
          img {
            width: 472px;
            height: 279px;
          }
          div {
            width: 472px;
            height: 64px;
            background: rgba(100, 23, 166, 1);
            opacity: 0.8;
            position: absolute;
            bottom: 0px;
            left: 0px;
            display: inline-block;
            span {
              // width: 308px;
              // height: 20px;
              font-size: 20px;
              line-height: 64px !important;
              font-family: MicrosoftYaHei;
              color: rgba(255, 255, 255, 1);
              line-height: 0px;
              display: inline-block;
              text-indent: 20px;
              // margin: 23px 153px 21px 29px;
              // height: 20px;
            }
          }
        }
        .item {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 30px;
          padding: 30px 23px 40px 26px;
          text-indent: 30px;
        }
        .line-wrap {
          height: 40px;
          // width: 300px;
          // border: 1px red solid;
        }
        .line-center {
          line-height: 40px;
          span {
            vertical-align: middle;
            font-family: MicrosoftYaHei;
            color: rgba(109, 104, 127, 1);
            padding-top: 1px;
            display: inline-block;
          }
        }
        .line-center img {
          width: 22px;
          height: 22px;
          padding: 0px;
          margin: 0px 10px 0px 14px;
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
        }
      }
    }
    .el-card {
      box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
      border-radius: 16px;
    }
  }

  // 新上好课详情
  .courseList {
    width: 1100px;
    margin: 0 auto;
    .bottom {
      margin-bottom: 40px;
    }
    .boxshadow-none {
      position: relative;
    }
    .course {
      width: 100%;
      padding: 40px 0 40px 40px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
      .el-card {
        // width: 400px;
        // height: 392px;
        font-size: 0;
        position: relative;
        &>img {
          width: 400px;
          height: 260px;

        }
        .personInfo {
          width: 100%;
          height: 132px;
          background-color: #6417a6;
          img {
            float: left;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 31px 26px;
          }
          h5,
          p {
            float: left;
            width: 274px;
            color: #fff;
          }
          h5 {
            margin-top: 41px;
            font-size: 18px;
          }
          p {
            font-weight: 400;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
          }
        }
        .play-btn{
            width: 76px;
            height: 76px;
            border-radius: 38px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -43px;
            margin-top: -89px;
            cursor:pointer;
        }
      }
      .goodplay {
        position: relative;
        .image {
          width: 480px;
          height: 312px;

        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 480px;
          height: 312px;
          background: rgba(100, 23, 166, 1);
          opacity: 0.5
        }
      }
      .particulars {
        width: 660px;
        .currentclum {
          padding-left: 40px;
          margin-right: 40px;
          margin-bottom: 40px;
          h4 {
            font-size: 18px;
            color: #222;
            height: 54px;
            line-height: 54px;
            margin-bottom: 8px;
            cursor: pointer;
          }
          h4:hover {
            color: #8f4acb
          }
          p {
            font-size: 14px;
            line-height: 30px;
            color: #222;
            cursor: pointer;
          }
        }
        .comment {
          height: 134px;
          margin-top: 5px;
          padding: 0 40px 10px;
          background-color: #fafafa;
          color: #888;
          h5 {
            line-height: 40px;
            .itemBox-rate {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              margin-left: 20px;
              vertical-align: middle;
            }
          }
          p {
            font-size: 14px;
            color: #888888;
            line-height: 30px;
          }
        }
        .bordernone {
          border: none;
          padding-top: 0px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 30px;
          padding: 0px 40px;
        }
        .study {
          padding: 15px 40px 0;
          .coin{
            color:red;
            font-size: 17px;
            padding-left: 20px;
          }
          span {
            font-size: 14px;
            color: #888888;
            margin-top: 21px;
            display: inline-block;
            &:nth-child(3) {
              width: 140px;
              height: 36px;
              line-height: 36px;
              border: 1px solid #6417a6;
              color: #6417a6;
              text-align: center;
              border-radius: 18px;
              cursor: pointer;
            }
            img {
              width: 14px;
              height: 14px;
              vertical-align: middle;
            }
          }
          div {
            margin-top: 10px;
          }
        }
        .date {
          color: rgba(136, 136, 136, 1);
          font-size: 14px;
        }
        .time {
          color: rgba(136, 136, 136, 1);
          font-size: 14px;
          margin: 10px 40px;
        }
        .more {
          color: #6417A6;
          font-size: 14px;
          margin: 10px 40px;
        }
      }
      .particularss {
        width: 510px;
        margin-right: 30px;
        .currentclum {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(34, 34, 34, 1);
          line-height: 0px;
          h4 {
            font-size: 16px;
            color: #222;
            height: 54px;
            line-height: 54px;
            margin-bottom: 30px;
          }
          .coursenum {
            width: auto;
            padding-top: 12px;
            span {
              display: inline-block;
              margin-right: 15px;
            }
          }
          .rate {
            padding-top: 10px;
          }
          p {
            font-size: 14px;
            line-height: 30px;
            color: #222;
          }
          span {
            font-size: 14px;
            color: #888888;
            &:nth-child(2) {
              width: 140px;
              height: 36px;
              line-height: 36px;
              // border: 1px solid #6417a6;
              // color: #6417a6;
              text-align: center;
              border-radius: 18px;
              cursor: pointer;
            }
            img {
              width: 14px;
              height: 14px;
              vertical-align: middle;
            }
          }
          .itemBox-info {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            margin: 0px 0px 13px 15px;
            .itemBox-num {
              font-size: 12px;
              font-family: MicrosoftYaHei;
              color: rgba(176, 174, 184, 1);
              line-height: 0px;
              padding-left: 8px;
              img {
                width: 12px;
                height: 12px;
                margin: 0px 5px;
              }
              .itemBox-rate {
                display: inline;
                font-size: 12px;
                line-height: 13px;
                margin-left: 57px;
              }
            }
          }
        }
        .comment {
          height: 134px;
          margin-top: 40px;
          padding: 0 40px 10px;
          background-color: #fafafa;
          color: #888;
          h5 {
            line-height: 40px;
            .itemBox-rate {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              margin-left: 20px;
              vertical-align: middle;
            }
          }
          p {
            font-size: 14px;
            color: #888888;
            line-height: 30px;
          }
        }
        .study {
          // padding: 30px 40px 0;
          padding: 20px 38px 0px 0px;
          border-top: 1px rgba(232, 214, 247, 1) solid;
          // margin-top: 65px;
          p {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(34, 34, 34, 1);
            line-height: 30px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  .btn {
    width: 140px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #6417a6;
    color: #6417a6;
    text-align: center;
    border-radius: 18px;
    cursor: pointer;
  }

  .btn:hover {
    color: #fff;
    background-color: #6417a6;
  }

  .btn-class {
    width: 140px;
    border-radius: 20px;
  }

  .btn-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -70px;
    margin-top: -20px;
  }

  .btn-bgs {
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -70px;
    margin-top: -20px;
    color: #732EAF;
  }

  .boxshadow-none {
    box-shadow: none;
  }

  .lines {
    width: 1000px;
    height: 1px;
    background-color: #E8D6F7;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    z-index: 100;
    left: 45px;
  }
</style>
