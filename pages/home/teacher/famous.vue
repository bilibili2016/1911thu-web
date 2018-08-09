<template>
  <!-- 名师智库 -->
  <div class="teachers">
    <v-title :title="title" :link="link"></v-title>
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
export default {
  props: ['teachers', 'title', 'link'],
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
    goLink(item) {
      this.$router.push(item)
    },
    goTeacherInfo(item, index) {
      window.open(window.location.origin + '/home/teacher/' + this.tidForm.tids)
    },
    getMore(item) {
      window.open(window.location.origin + item)
    }
  }
}
</script>

