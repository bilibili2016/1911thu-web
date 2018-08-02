<template>
  <div class="bg">
    <el-row class="center coursenew">
      <h1 class="clearfix">
        <span class="title">{{titleTwo}}</span>
        <span class="fr moredata" @click="getMore(linkone)">查看更多</span>
      </h1>
      <div class="goodCourse" :data="newData">
        <div class="courseLi clearfix" v-for="(course,index) in newProject" :key="index" @click="courseInfo(course)">
          <div class="fl">
            <img :src="projectImg" alt="" class="project-img">
            <img :src="course.teacher_picture" alt="" class="teacher-picture">
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
      <!-- <v-more :linkdata="linktwo"></v-more> -->
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import CustomTitle from '@/components/common/Title.vue'
import CustomCard from '@/components/common/Card.vue'
import CustomMore from '@/components/common/More.vue'
export default {
  props: ['newData', 'titleTwo', 'linkone'],
  components: {
    'v-title': CustomTitle,
    'v-card': CustomCard,
    'v-more': CustomMore
  },
  data() {
    return {
      kidForm: {
        kids: null
      },
      stydyNum: require('@/assets/images/home_num.png'),
      projectImg: require('@/assets/images/p4.png'),
      newProject: [
        {
          teacher_picture: 'http://papneyee7.bkt.clouddn.com/1532946351',
          title: '党政干部综合能力提升',
          deputy_title: '线上模式',
          is_free: '1',
          present_price: '3280',
          study_time: '20',
          study_number: '22',
          score: 5,
          link: '/other/policyProgram'
        },
        {
          teacher_picture: 'http://papneyee7.bkt.clouddn.com/1532946351',
          t: '',
          title: '党政干部综合能力提升',
          deputy_title: '混合式教学模式',
          is_free: '1',
          present_price: '4280',
          study_time: '18',
          study_number: '20',
          score: 5,
          link: '/project/partypolicy'
        }
      ],
      cgForm: {
        cgs: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setKid', 'setCg']),
    courseInfo(item, index) {
      // this.kidForm.kids = item.id
      // persistStore.set('curriculumId', item.id)
      // this.setKid(this.kidForm)
      // this.$router.push('/course/coursedetail')
      this.openDetail(item.link)
    },
    openDetail(link) {
      // 最新项目点击

      window.open(window.location.origin + link)
    },
    getMore(item) {
      // this.cgForm.cgs = '2'
      // this.setCg(this.cgForm)

      // window.open(window.location.origin + item)
      window.open(window.location.origin + '/course/' + '0' + '?type=' + '1')
    }
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
.coursenew {
  padding-bottom: 50px;
}
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
    &:hover {
      box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
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
      .courseInfo {
        // padding: 10px;
        // padding: 0 30px 0 20px;
      }
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
h1 {
  color: #222;
  margin: 70px 0px 50px;
  .title {
    padding-top: 10px;
  }
  .moredata {
    width: 128px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #888;
    border-radius: 20px;
    font-size: 16px;
    color: #666;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    cursor: pointer;
  }
  .moredata:hover {
    color: #fff;
    background-color: #8f4acb;
    border-color: #8f4acb;
  }
}
</style>
