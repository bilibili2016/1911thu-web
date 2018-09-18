<template>
  <div>
    <!-- 购物车课程列表 -->
    <div v-if="config.type=='course'" class="tableBody">
      <div v-for="(course,index) in data" :key="index">
        <el-checkbox v-model="course.checkMsg" @change="handleSelectChange(course,index)"></el-checkbox>
        <div class="courseInfo clearfix">
          <img class="fl" :src="course.picture" @click="goDetail(course)">
          <div class="fl">
            <h4 @click="goDetail(course)">{{course.title}}</h4>
            <h6>{{course.study_time}}学时</h6>
            <p>讲师：{{course.teacher_name}}</p>
          </div>
        </div>
        <div class="coursePrice">
          ￥{{course.present_price}}
        </div>
        <div class="courseOperation" @click="handleDeleteCourse(course,index)">
          删除
        </div>
      </div>
    </div>
    <!-- 购物车项目列表 -->
    <div class="tableBody" v-if="config.type=='project'">
      <div v-for="(project,index) in data" :key="index">
        <el-checkbox v-model="project.checkMsg" @change="handleSelectProjectChange(project,index)"></el-checkbox>
        <div class="courseInfo clearfix">
          <div class="project-img">
            <img class="fl" :src="project.picture" @click="goProjectDetail(project,index)">
            <img :src="projectImg" alt="" class="pmsg">
          </div>

          <div class="fl">
            <h4 @click="goProjectDetail(project,index)">{{project.title}}</h4>
            <h6>{{project.study_time}}学时 </h6>
            <!-- <p>讲师：{{project.teacher_name}}</p> -->
          </div>
        </div>
        <div class="coursePrice">
          ￥{{project.present_price}}
        </div>
        <div class="courseOperation" @click="handleDeleteProject(project,index)">
          删除
        </div>
      </div>
    </div>
    <!-- 确认订单，支付中心列表 -->
    <!-- {{data}} -->
    <div v-if="config.type=='wePay' || config.type=='affirmOrder'">
      <!-- {{data}} -->
      <div class="clearfix" :class="{oneGoods:config.type=='affirmOrder',courseOne:config.type=='wePay'}" v-for="(course,index) in data" :key="index">
        <div class="fl">
          <div class="bottomImg">
            <!-- 项目图标 -->
            <img v-if="course.type =='2'" class="project-img" :src="projectImg" alt="">
            <img :src="course.picture" alt="">
          </div>
        </div>
        <div class="fl">
          <h5>{{course.title}}</h5>
          <h6>{{course.study_time == '' ? 0 : course.study_time}}学时</h6>
          <p v-if="course.type =='1'">讲师：{{course.teacher_name}}</p>
        </div>

        <div class="coursePrice">
          ￥{{course.present_price}}
        </div>
        <div v-if="config.type=='wePay'" class="courseNumber">
          <i class="el-icon-close "></i>{{course.pay_number}}
        </div>
      </div>
    </div>
    <!-- {{config.type=='affirmOrder'}} {{config.type}} -->
    <div class="customProject" v-if="config.type=='customOrder'">
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
      <div class="clearfix goodsList">
        <div class="fl">
          <div class="bottomImg">
            <!-- 项目图标 -->
            <img :src="data.picture" alt="">
          </div>
          <h5>{{data.title}}</h5>
          <h6>{{data.study_time}}学时</h6>
        </div>
        <div class="fr">
          <span v-if="data.study_type === '1'">线上</span>
          <span v-if="data.study_type === '2'">混合</span>
          <span v-if="data.study_type === '3'">互动</span>
          <span>{{data.oline_study_time}}学时</span>
          <span>{{data.study_persion_number}}人</span>
          <span>{{(data.offline_study_time)}}学时</span>
          <span>{{data.offline_days}}天</span>
          <span class="coursePrice">￥{{data.present_price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config', 'data'],
  data() {
    return {
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png'
    }
  },
  methods: {
    // 点击选中 取消课程的复选框   ----课程 单选
    handleSelectChange(course, index) {
      this.$bus.$emit('handleSelectChange', { course, index })
    },
    goDetail(course, index) {
      this.$bus.$emit('goDetail', { course, index })
    },
    // 删除课程  ---- 课程
    handleDeleteCourse(course, index) {
      this.$bus.$emit('handleDeleteCourse', { course, index })
    },
    // 点击选中 项目的复选框   ---项目 单选
    handleSelectProjectChange(project, index) {
      this.$bus.$emit('handleSelectProjectChange', { project, index })
    },
    goProjectDetail(project, index) {
      this.$bus.$emit('goProjectDetail', { project, index })
    },
    // 删除 项目 ---- 项目
    handleDeleteProject(project, index) {
      this.$bus.$emit('handleDeleteProject', { project, index })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/style/shop/card.scss';
</style>
