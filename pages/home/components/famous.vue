<template>
  <!-- 名师智库 -->
  <div class="teachers">
    <!-- <v-title :data="titleFore"></v-title> -->
    <h1 class="clearfix">
      <span class="title">{{titleFore}}</span>
      <span class="fr moredata" @click="getMore(linkSeven)">查看更多</span>
    </h1>
    <div class="cardList ">
      <div class="item" v-for="(teacher,index) in teachers" :key="index" @click="goTeacherInfo(teacher,index)">
        <div class="item-img">
          <img :src="teacher.head_img" alt="">
        </div>
        <div class="item-desc">
          <p class="name">{{teacher.teacher_name}}</p>
          <p class="graudate">{{teacher.graduate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import { mapActions } from 'vuex'
export default {
  props: ['teachers', 'titleFore', 'linkSeven'],
  data() {
    return {
      tidForm: {
        tids: null
      }
    }
  },
  components: {
    'v-title': CustomTitle
  },
  methods: {
    ...mapActions('auth', ['setTid']),
    goLink(item) {
      this.$router.push(item)
    },
    goTeacherInfo(item, index) {
      this.tidForm.tids = item.id
      this.setTid(this.tidForm)
      window.open(window.location.origin + '/home/components/teacher')
      // this.goLink('/home/components/teacher')
    },
    getMore(item) {
      window.open(window.location.origin + item)
    }
  },
  mounted() {}
}
</script>

