<template>
  <!-- 精品好课 -->
  <div class="bg">
    <el-row class="center">
      <h1 class="clearfix">
        <span class="title">{{titleThree}}</span>
        <span class="fr moredata" @click="getMore(linktwo)">查看更多</span>
      </h1>
      <div class="goodCourse" :data="classicData">
        <div class="courseLi clearfix" v-for="(course,index) in classicData" :key="index" @click="courseInfo(course)">
          <div class="fl">
            <img :src="course.teacher_picture" alt="">
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
  props: ['classicData', 'titleThree', 'linktwo'],
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
    },
    getMore(item) {
      // window.open(window.location.origin + item)
      window.open(window.location.origin + '/course/components/' + '2')
    }
  }
}
</script>

