<template>
  <div>
    <div class="card-category profile">
      <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
        <el-card shadow="never" body-style="padding: 0;" :class="['itemBox',{'learn':config.mask}]" @click.native="handleSelectProject(card,index)">
          <!-- 项目封面 蒙层-->
          <div class="mask-style" @click="handleLinkDetail()">
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
            <div class="item">
              <p :class="['itemBox-name','itemBoxTitle',{'itemBoxTitle':config.card === 'home'?true:false}]" @click="openDetail()">
                <span :class="{'title':config.card === 'home'?true:false}">{{card.title}}</span>
                <span v-if="config.card === 'home'" class="deputyTitle fl">{{card.deputy_title}}</span>
                <!-- 和副标题在一行的金额 -->
              </p>
              <p class="itemBox-info">
                <span v-if="config.card === 'home'">
                  {{card.study_time}}学时
                </span>
                <span class="itemBox-num" v-if="config.card === 'home'">
                  <img :src="numSrc" alt="">
                  <span>{{card.study_number}}</span>
                </span>
                <span class="" style="display:inline-block;float:right;padding-right:15px;">
                  <el-rate disabled v-model="card.score" class="itemBox-rate fr" v-if="config.card === 'home'"></el-rate>
                </span>
              </p>
            </div>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['data', 'config'],
  data() {
    return {
      jinImg: require('@/assets/images/jin.png'),
      numSrc: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    handleLinkDetail() {
      window.open(window.location.origin + '/project/ProjectDetail')
    },
    // 获取project 的id
    handleSelectProject(item, index) {
      persistStore.set('projectId', item.id)
    }
  }
}
</script>

<style scoped lang="scss">
.mask-style {
  width: 250px;
  height: 160px;
  background-color: rgba(100, 23, 166, 0.5);
  position: absolute;
  opacity: 0;
  transition: all 300ms;
}
.bgImgs {
  width: 250px;
  height: 160px;
  overflow: hidden;
  img {
    width: 250px;
    height: 160px;
    transition: all 500ms;
  }
}
.mask {
  display: none;
  transition: all 3000ms;
}
.jin-style {
  width: 25px !important;
  height: 14px !important;
  position: absolute;
  top: 73px;
  left: 112.5px;
  z-index: 1000;
  display: none;
  transition: all 300ms;
} // banner定制
.showMsg {
  display: none;
} // 新上好课
.card-category {
  display: flex; // justify-content: space-between;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  .card-list {
    margin: 0 32px 50px 0; // margin-bottom: 50px;
    border-radius: 16px;
    transition: all 500ms linear;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.12);
      transition: all 500ms linear;
      .jin-style {
        display: block;
        transition: all 500ms linear;
      }
      .mask-style {
        opacity: 1;
      }
      .bgImgs img {
        width: 260px;
        height: 165.2px;
        // width: 270px;
        // height: 170px;
        // margin-left: -3px;
        // margin-top: -2px;
        // &.hover {
        //   width: 270px;
        //   height: 170px;
        // }
      }
      .itemBox-name {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .itemBox-info {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .learn {
        .line-wraps .line-centers {
          .studyPercent {
            padding: 0px 0px 0px 15px;
          }
        }
      }

      .deputyTitleOverTime {
        margin-left: 16px;
      }
      .already {
        margin-left: 16px;
      }
      .line-wrap {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .title {
        transition: all 500ms linear;
        color: #8f4acb !important;
      }
      // .line-wrap {
      //   transition: all 500ms linear;
      //   padding: 0px 0px 0px 15px;
      // }
    }
    .itemBox {
      cursor: pointer;
      width: 250px;
      height: 294px;
      display: flex;
      border-radius: 0;
      // background: #fff;
      flex-direction: column;
      align-items: center;
      position: relative;
      border: none;
      border-bottom: 1px solid #eee;
      transition: all 500ms linear;
      img {
        width: 250px;
        height: 160px;
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
          max-width: 92px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .item {
        // border-bottom: 1px rgba(228, 228, 244, 1) solid;
        // card1 的主标题和副标题

        cursor: pointer;
        .itemBox-name {
          width: 250px;
          // height: 45px;
          // line-height: 45px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 42, 81, 1);
          overflow: hidden;
          transition: all 500ms linear;
          &.itemBoxTitle {
            .title {
              display: block;
              line-height: 20px;
              height: 38px;
              color: #1c1f21;
              margin-top: 16px;
              padding-right: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .deputyTitle {
              // width: 220px;
              height: 20px;
              line-height: 20px;
              margin: 8px 0px;
              overflow: hidden;
              font-size: 14px;
              color: #93999f;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          // padding-bottom: 25px;
          // margin: 0px 0px 0px 15px;
          // padding-left: 10px;
          transition: all 500ms linear;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            // width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
            }
          }
          &:hover {
            padding: 0px 0px 0px 15px;
            transition: all 500ms linear;
          }
        }
      }
      .items {
        // border-bottom: 1px rgba(228, 228, 244, 1) solid;
        .itemBox-name {
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 42, 81, 1);
          overflow: hidden;
        }
        .itemBox-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(176, 174, 184, 1);
          line-height: 0px;
          .itemBox-num {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(176, 174, 184, 1);
            line-height: 0px;
            padding-left: 8px;
            width: 160px;
            img {
              width: 12px;
              height: 12px;
              margin: 0px 5px;
            }
            .itemBox-rate {
              // display: inline;
              font-size: 12px;
              line-height: 13px;
              float: right;
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
        width: 100%;
        height: 35px;
        line-height: 30px;
        // padding-left: 10px;
        transition: all 500ms linear;
      }
      .line-wraps {
        height: 50px; // border-top: 1px #e4e4f4 solid;
      }
      .line-center {
        overflow: hidden;
        height: 35px;
        // padding: 0 15px;
        p.price {
          color: #ff5f5f;
          font-size: 14px;
          padding: 0 0px;
        }
        p.freePrise {
          color: #1c1f21;
          font-size: 14px;
        }
        span {
          vertical-align: middle;
          font-family: MicrosoftYaHei;
          color: rgba(109, 104, 127, 1);
          padding-top: 1px;
          display: inline-block;
        }
        .title {
          width: 140px;
          height: 31px;
          line-height: 31px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          float: right;
          color: rgba(109, 104, 127, 1);
          vertical-align: middle;
        }
      }
      .line-centers {
        // padding: 0px 14px 0px 13px;
        .studyPercent {
          padding-bottom: 10px;
          color: #6417a6;
        }
        .studyIsFree {
          float: right;
          padding-bottom: 10px;
          color: #888;
        }
        p {
          margin-bottom: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1); // line-height:0px;
        }
        div {
          margin-bottom: 26px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(136, 136, 136, 1);
        }
        .already {
          transition: all 500ms linear;
        }
      }
      .line-center img {
        width: 22px;
        height: 22px;
        padding: 0px;
        margin: 0 10px 0 0;
        vertical-align: middle;
        font-family: MicrosoftYaHei;
        color: rgba(109, 104, 127, 1);
        border-radius: 50%;
      }
      &.learn {
        height: auto;
        .item .itemBox-name {
          margin: 20px 0;
        }
        .line-wraps {
          .line-centers {
            .studyPercent {
              transition: all 500ms linear;
            }
            .studyIsFree {
              margin-right: 18px;
            }
          }
        }
      }
      &.collect {
        height: auto;
        padding-bottom: 15px;
        .item .itemBox-name {
          padding-top: 10px;
        }
      }
    }
  }
  .el-card {
    // box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    border-radius: 16px;
    border-bottom: 1px solid #eeeeee;
  }
}
#pane-tab-first .card-category .card-list,
#pane-first .card-category .card-list,
#pane-second .card-category .card-list,
#pane-third .card-category .card-list,
#pane-fourth .card-category .card-list {
  margin: 0 30px 50px 0;
  &:nth-child(3n + 3) {
    margin-right: 0;
  }
}
</style>

