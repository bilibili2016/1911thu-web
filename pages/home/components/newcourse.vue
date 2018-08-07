<template>
  <!-- 最新项目 -->
  <div class="bg newProject">
    <el-row class="center coursenew">
      <h1 class="clearfix">
        <span class="title">{{titleTwo}}</span>
        <span class="fr moredata" @click="getMore(linkone)">查看更多</span>
      </h1>
      <div class="goodCourse project" :data="newData">
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
          link: '/other/partypolicy'
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
      window.open(
        window.location.origin + '/course/' + '0' + '?type=' + '1' + '&xid=0'
      )
    }
  }
}
</script>
