<template>
  <div class="card">
    <!-- 定制 -->
    <template v-if="config.card_type === 'ding'">
          <div class="customization">
            <div class="pro clearfix" v-for="(pro,index) in dingData" :key="index">
              <img :src="pro.src" alt="" class="fl">
              <div class="fr con">
                <h5>{{pro.title}}</h5>
                <p>{{pro.content}}</p>
              </div>
            </div>
          </div>
</template>
    <!-- 新上好课 -->
<template v-if="config.card_type === 'home'">
  <div class="card-category">
    <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
      <el-card shadow="never" body-style="padding: 0;" class="itemBox">
        <img :src="card.bg" alt="">
        <el-row>
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
          <div class="line-wrap">
            <div class="line-center">
              <img :src="card.avator" alt="">
              <span>王建中</span>
              <span class="title">华中科技大学博士</span>
            </div>
          </div>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
    <!-- 新上好课详情 -->
<template v-if="config.card_type === 'goodlesson'">
  <div class="courseList">
    <div class="course clearfix" v-for="(course,index) in courseList" :key="index">
      <el-card class="fl" :body-style="{ padding: '0px' }">
        <img :src="course.bgImg" class="image">
        <div class="personInfo clearfix">
          <img :src="course.headImg" alt="">
          <h5>{{course.grade}}：{{course.teacher}}</h5>
          <p>{{course.school}}</p>
        </div>
      </el-card>
      <div class="particulars fr">
        <div class="currentclum">
          <h4>{{course.title}}</h4>
          <p>{{course.synopsis}}</p>
        </div>
        <div class="comment">
          <h5>
            <span>{{course.observer}}的评论</span>
            <el-rate disabled v-model="course.rate" class="itemBox-rate"></el-rate>
          </h5>
          <p>{{course.comment}}</p>
        </div>
        <div class="study clearfix">
          <span class="fl"><img src="../../assets/images/ren.png" alt=""> {{course.styduNumber}}人加入学习</span>
          <span class="fr">立即学习</span>
        </div>
      </div>
    </div>
  </div>
</template>
    <!-- 学堂资讯 -->
<template v-if="config.card_type === 'infoOne'">
  <div class="info-list">
    <div v-for="(card,index) in infoArticle" :index="index" :key="card.id" class="info">
      <el-card shadow="never" body-style="padding: 0;">
        <div class="info-box">
          <div class="info-wrap">
            <img :src="card.avatar" alt="">
            <span>从区块链到生命，许知远和王小川在1911主题餐厅聊了什么？</span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="more">查看更多>></div>
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
    "courseList"
  ],
  data() {
    return {
      numSrc: require("@/assets/images/home_num.png"),
      avator: require("@/assets/images/home_avator.png")
    };
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
// 新上好课
.card-category {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card-list {
    margin-bottom: 50px;
    .itemBox {
      cursor: pointer;
      width: 260px;
      height: 300px;
      border-radius: 16px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 260px;
        height: 160px;
      }
      .item {
        border-bottom: 1px rgba(228, 228, 244, 1) solid;
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
      .line-wrap {
        height: 50px;
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

// 新上好课详情
.courseList {
  width: 1100px;
  margin: 0 auto;
  .course {
    width: 100%;
    padding: 40px 0 40px 40px;
    margin-bottom: 40px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 0px 14px rgba(198, 194, 210, 0.36);
    .el-card {
      width: 400px;
      height: 392px;
      font-size: 0;
      & > img {
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
          width: 278px;
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
    }
    .particulars {
      width: 660px;
      .currentclum {
        padding-left: 40px;
        margin-right: 40px;
        h4 {
          font-size: 18px;
          color: #222;
          height: 54px;
          line-height: 54px;
          margin-bottom: 8px;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #222;
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
        padding: 30px 40px 0;
        span {
          font-size: 14px;
          color: #888888;
          &:nth-child(2) {
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
      }
    }
  }
}
</style>
