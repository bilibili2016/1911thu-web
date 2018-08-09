<template>
  <!-- 项目列表card组件[首页]-->
  <div class="shortlist">
    <div class="goodCourse project">
      <div class="courseLi clearfix" v-for="(course,index) in cardData" :key="index" @click="courseInfo(course)">
        <div class="fl">
          <img :src="projectImg" alt="" class="project-img">
          <img :src="course.picture" alt="" class="teacher-picture">
        </div>
        <div class="fr courseInfo">
          <h4>{{course.title}}</h4>
          <h5>{{course.deputy_title}}</h5>
          <p v-if="course.is_free === '1'" class="money">￥{{course.present_price}}</p>
          <p v-else class="money">免费</p>
          <h6 class="clearfix">
            <p class="fl">{{course.study_time}}学时 <img :src="stydyNum" alt=""> {{course.study_number}}</p>
            <p class="fr">
              <el-rate disabled v-model="course.score" class="itemBox-rate"></el-rate>
            </p>
          </h6>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['cardData'],
  data() {
    return {
      projectImg: require('@/assets/images/p4.png'),
      stydyNum: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    //项目详情
    courseInfo(item, index) {
      persistStore.set('projectId', item.id)
      this.openDetail('/project/ProjectDetail')
    },
    openDetail(link) {
      window.open(window.location.origin + link)
    }
  }
}
</script>

<style scoped lang="scss">
.shortlist {
  .goodCourse {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .courseLi {
      width: 534px;
      height: 160px;
      margin-bottom: 50px;
      background-color: #fff;
      // border-radius: 16px;
      box-shadow: 0px 0px 12px rgba(3, 2, 9, 0.28);
      transition: all 400ms;
      position: relative;
      cursor: pointer;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:hover {
        box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
        padding: 0;
        .courseInfo {
          padding: 10px 20px 10px 30px;
        }

        // padding: 10px;
        .courseInfo {
          h4 {
            color: #8f4acb;
          }
        }

        // div.fl img {
        //   width: 230px;
        //   height: 140px;
        // }
        // .courseInfo {
        // padding: 10px;
        // padding: 0 30px 0 20px;
        // }
      }

      div.fl .teacher-picture {
        width: 250px;
        height: 160px;
        overflow: hidden;
        transition: all 400ms;
      }
      div.fl .project-img {
        width: 70px;
        height: 30px;
        overflow: hidden;
        transition: all 400ms;
        position: absolute;
        top: 5px;
        left: -4px;
      }
      .courseInfo {
        width: 283px;
        padding: 10px 30px 10px 20px;
        transition: all 400ms;
        h4 {
          width: 235px;
          margin-top: 5px;
          color: #1c1f21;
          font-size: 16px;
          line-height: 22px;
          transition: all 400ms;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        h5 {
          height: 23px;
          line-height: 23px;
          margin: 5px 0;
          color: #93999f;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        h6 {
          color: #93999f;
          font-size: 14px;
          p img {
            width: 12px;
            height: 12px;
            margin-left: 17px;
          }
        }
        .money {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(28, 31, 33, 1);
          padding: 10px 0px 17px 0px;
        }
        & > p {
          margin-top: 8px;
          color: #1c1f21;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
