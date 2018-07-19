<template>
  <div class="bg">
    <el-row class="center">
      <v-title :data="titleThree"></v-title>
      <!-- <v-card ref="card" :data="classicData" :config="config"></v-card> -->
      <div class="goodCourse" :data="classicData">
        <div class="courseLi clearfix" v-for="(course,index) in classicData" :key="index">
          <div class="fl">
            <img :src="course.teacher_picture" alt="" @click="courseInfo(course)">
          </div>
          <div class="fr courseInfo">
            <h4 @click="courseInfo(course)">{{course.title}}</h4>
            <h5>{{course.deputy_title}}</h5>
            <h6 class="clearfix">
              <p class="fl">{{course.study_time}}学时 <img :src="stydyNum" alt=""> {{course.study_number}}</p>
              <p class="fr">
                <el-rate disabled v-model="course.score" class="itemBox-rate"></el-rate>
              </p>
            </h6>
            <p v-if="course.is_free === '1'">￥{{course.present_price}}</p>
            <p v-else>免费</p>
          </div>
        </div>
      </div>
      <v-more :linkdata="linktwo"></v-more>
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
  props: ['config', 'classicData', 'titleThree', 'linktwo'],
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
      stydyNum: require('@/assets/images/home_num.png')
    }
  },
  methods: {
    ...mapActions('auth', ['setKid']),
    courseInfo(item, index) {
      this.kidForm.kids = item.id
      persistStore.set('curriculumId', item.id)
      this.setKid(this.kidForm)
      // this.$router.push('/course/coursedetail')
      this.openDetail()
    },
    openDetail() {
      window.open(window.location.origin + '/course/coursedetail')
    }
  }
}
</script>
<style scoped lang="scss">
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
    box-shadow: 0px 0px 12px rgba(198, 194, 210, 0.28);
    transition: all 400ms;
    &:hover {
      box-shadow: 0 6px 18px 0 rgba(73, 28, 156, 0.36);
      padding: 10px;
      .courseInfo h4 {
        color: #8f4acb;
      }
      div.fl img {
        width: 230px;
        height: 140px;
      }
      .courseInfo {
        padding: 0 30px 0 20px;
      }
    }
    div.fl img {
      width: 250px;
      height: 160px;
      // border-radius: 16px;
      overflow: hidden;
      transition: all 400ms;
      cursor: pointer;
    }
    .courseInfo {
      width: 284px;
      padding: 10px 30px 10px 20px;
      transition: all 400ms;
      h4 {
        width: 235px;
        height: 47px;
        margin-top: 5px;
        color: #1c1f21;
        font-size: 16px;
        line-height: 22px;
        transition: all 400ms;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        cursor: pointer;

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
      & > p {
        margin-top: 8px;
        color: #1c1f21;
        font-size: 14px;
      }
    }
  }
}
</style>
