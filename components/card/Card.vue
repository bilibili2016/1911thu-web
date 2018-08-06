<template>
  <div>
    <div class="card-category profile">
      <div v-for="(card,index) in data" :index="index" :key="card.id" class="card-list">
        <el-card shadow="never" body-style="padding: 0;" :class="['itemBox',{'learn':config.mask}]" @click.native="handleLinkDetail(card,index)">
          <!-- 项目封面 蒙层-->
          <div class="new-style " v-if="config.new==='true' ">
            <img :src="newTag " alt=" ">
          </div>
          <div class="mask-style" @click="goDetail(card)">
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
            <div class="item" @click="goDetail(card)">
              <p class="itemBox-name itemBoxTitle">
                <span class="title">{{card.title}}</span>
                <span class="deputyTitle fl">{{card.deputy_title}}</span>
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
            <div class="line-wrap" v-if="config.new||config.free">
              <div class="line-center">
                <p class="price freePrise" v-if="card.is_free == '1'">￥{{card.present_price}}</p>
                <p class="freePrise" v-if="card.is_free === '2'">免费</p>
              </div>
            </div>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['data', 'config'],
  data() {
    return {
      type: '',
      kidForm: {
        kids: ''
      },
      xidForm: {
        xids: ''
      },
      isIndex: true,
      newTag: require('@/assets/images/new.png'),
      jinImg: require('@/assets/images/jin.png'),
      numSrc: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid', 'setXid']),
    handleLinkDetail(item) {
      if (!this.isIndex) {
        if (this.type === '0') {
          this.kidForm.kids = item.id
          persistStore.set('curriculumId', item.id)
          this.setKid(this.kidForm)
          this.openDetail('/course/coursedetail')
        } else {
          persistStore.set('projectId', item.id)
          this.openDetail('/project/ProjectDetail')
        }
      }
    },
    openDetail(link) {
      window.open(window.location.origin + link)
    },
    goDetail(item) {
      if (this.isIndex) {
        this.kidForm.kids = item.id
        persistStore.set('curriculumId', item.id)
        this.setKid(this.kidForm)
        this.openDetail('/course/coursedetail')
      }
    }
  },
  mounted() {
    // type类型决定当前列表的类型：0-课程；1-项目
    if (window.location.search.split('=')[1]) {
      this.isIndex = false
      this.type = window.location.search.split('=')[1].substr(0, 1)
    } else {
      this.isIndex = true
    }
    console.log(this.isIndex, 'this.isIndex')
  }
}
</script>

<style scoped lang="scss">
// 新上好课
.card-category {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  .card-list {
    margin: 0 32px 50px 0;
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
      }
      .itemBox-name {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .itemBox-info {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .line-wrap {
        transition: all 500ms linear;
        padding: 0px 0px 0px 15px;
      }
      .title {
        transition: all 500ms linear;
        color: #8f4acb !important;
      }
    }
    .new-style img {
      width: 48px !important;
      height: 34px !important;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
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
    }
    .itemBox {
      cursor: pointer;
      width: 250px;
      height: 294px;
      display: flex;
      border-radius: 0;
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
        cursor: pointer;
        .itemBox-name {
          width: 250px;
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
          transition: all 500ms linear;
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
      .line-wrap {
        width: 100%;
        height: 35px;
        line-height: 30px;
        transition: all 500ms linear;
      }
      .line-wraps {
        height: 50px;
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
      }
    }
  }
  .el-card {
    // box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    border-radius: 16px;
    border-bottom: 1px solid #eeeeee;
  }
}
</style>

