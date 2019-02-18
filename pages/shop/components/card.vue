<template>
  <div class="customProject">
    <!-- 自定义项目课程列表 -->
    <div class="listBar">
      <div class="fl">
        项目名称
      </div>
      <div class="fr">
        <span>培训方式</span>
        <span>线上课程</span>
        <span>学习人数</span>
        <span>线下课程</span>
        <span>学习天数</span>
        <span>总价</span>
      </div>
    </div>
    <div class="clearfix goodsList" v-for="(course,index) in data" :key="index">
      <div class="fl">
        <div class="bottomImg">
          <!-- 项目图标 -->
          <img :src="course.picture" alt="">
        </div>
        <h5>{{course.title}}</h5>
        <h6>{{course.study_time}}学时</h6>
      </div>
      <div class="fr">
        <span>线上+线下</span>
        <span>30学时</span>
        <span>20人</span>
        <span>22学时</span>
        <span>5天</span>
        <span class="coursePrice">￥5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config', 'data']
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/card.scss';
</style>