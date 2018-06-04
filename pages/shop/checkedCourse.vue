<template>
  <div class="checkedCourse">
    <div class="main">
      <div class="company">
        <div class="title clearfix">
          <span class="fl">北京分分形状科技有限公司</span>
          <span class="fr">2018-06-05 09：30：05</span>
        </div>
        <div class="content">
          <div class="course">
            <div class="courseOne" v-for="(course,index) in courseList" v-if="index < 3" :key="index">
              <img class="fl" :src="course.src" alt="">
              <div class="fl">
                <h4>{{course.title}}</h4>
                <h6>{{course.period}}学时</h6>
                <p>讲师：{{course.teacher}}</p>
              </div>
            </div>
            <div class="more" v-show="courseList.length>3">
              查看更多课程>
            </div>
          </div>
          <div class="price height" :style="{height:courseList.length>3? 3*140+60+'px' :courseList.length*140+'px'}">¥{{allPrice}}</div>
          <div class="telephone height" :style="{height: courseList.length>3? 3*140+60+'px' :courseList.length*140 + 'px' }">
            <p>客服电话</p>
            <p>010-6270 1911</p>
          </div>
          <div class="status height" :style="{height: courseList.length>3? 3*140+60+'px' :courseList.length*140 + 'px' }">{{status}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        company: "北京分分形状科技有限公司",
        time: "2018-06-05 09：30：05",
        courseList: [{
            src: require("~/assets/images/ke-3.png"),
            title: "H5和小程序直播开发",
            period: "52",
            teacher: "王建中",
          },
          {
            src: require("~/assets/images/ke-3.png"),
            title: "H5和小程序直播开发",
            period: "23",
            teacher: "王建中",
          }
        ],
        allPrice: "69.00",
        status: "等待审核",
      }
    }
  }
</script>

<style scoped>

</style>
