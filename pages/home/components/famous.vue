<template>
  <div class="teachers">
    <!-- <v-title :data="titleFore"></v-title> -->
    <h1 class="clearfix">{{titleFore}}
      <span class="fr" @click="getMore(linkSeven)">查看更多</span>
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
<style lang="scss" scoped>
.teachers {
  h1 {
    width: 1100px;
    margin: 0 auto;
    color: #fff;
    padding: 70px 0px 60px;
    span {
      width: 128px;
      height: 40px;
      line-height: 38px;
      text-align: center;
      border: 1px solid #888;
      border-radius: 20px;
      font-size: 16px;
      color: #fff;
      transition: all 300ms;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #8f4acb;
        border-color: #8f4acb;
      }
    }
  }
}
</style>
