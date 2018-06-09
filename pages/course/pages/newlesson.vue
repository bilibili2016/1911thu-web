<template>
  <div class="goodLesson">
    <div class="topImg">
      <img :src="atopImg" alt="">
    </div>
    <v-card :courseList="courseList" :config="config" :linkdata="linkdata"></v-card>
    <div class="card-button">
      <el-button type="primary" @click='getMoreData()'>查看更多</el-button>
    </div>
    <!-- <v-more @getMoreData ="getMoreData"></v-more> -->
  </div>
</template>

<script>
  import CustomCard from "@/components/common/Card.vue";
  import CustomMore from "@/components/common/More.vue";
  import { home } from '~/lib/v1_sdk/index'
  export default {
    components: {
      "v-card": CustomCard,
      "v-more": CustomMore,
    },
    data() {
      return {
        atopImg: require("@/assets/images/banner2.png"),
        linkdata: 'coursedetail',
        config: {
          card_type: "goodlesson"
        },
        courseList: [
        ],
        newsCurriculumForm: {
          pages: 0,
          limits: 1,
          evaluateLimit: null
        }
      };
    },
    methods: {
      getNewCourseList (){
        return new Promise((resolve, reject) => {
          home.getNewCourseList(this.newsCurriculumForm).then(response => {
            // console.log(response, '新上好课列表')
            this.courseList = response.data.curriculumList
            resolve(true)
          })
        })
      },
      getMoreData () {
        this.newsCurriculumForm.limits = this.newsCurriculumForm.limits + 1
        this.getNewCourseList()
      }
    },
    mounted () {
      this.getNewCourseList()
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
<style lang="scss" scoped>
.card-button{
  text-align: center;
  margin: 70px 0 100px;
  .el-button{
    width: 174px;
    height: 56px;
    line-height: 56px;
    border-radius: 28px;
    background-color: #6417a6;
    text-align: center;
    margin: 0;
    padding: 0;
    border: none;
    transition: all 300ms;

    &:hover{
      background-color: #8e4fc8;
    }
  }
}
</style>

