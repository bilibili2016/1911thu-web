<template>
  <div class="teachers">
    <v-title :data="titleThree"></v-title>
    <div class="blueBar"></div>
    <div class="cardList">
      <div class="card" v-for="(teacher,index) in teachers" :key="index">
        <img :src="teacher.picture" class="image">
        <div class="diaphaneity">
          <div class="octImg"></div>
          <div class="abstract">
            <h4 @click="goTeacherInfo(teacher,index)">{{teacher.teacher_name}}</h4>
            <p>{{teacher.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from '@/components/common/Title.vue'
import { mapActions } from 'vuex'
export default {
  props: ['teachers', 'titleThree'],
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
      this.goLink('/home/pages/teacher')
    }
  }
}
</script>
