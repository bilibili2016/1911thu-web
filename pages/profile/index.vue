<template>
  <div>
    <v-banner :config = "bconfig" :isUpdate="isUpdate" :isShowUpAvtor="activeTab=='tab-fourth'"></v-banner>
    <div class="center-tab center profile" style="min-height:800px;">
      <el-tabs :tab-position="tabPosition" v-model="activeTab">
        <!-- 我的信息 -->
        <el-tab-pane class="my-home" name="tab-first">
          <span slot="label"><i class="el-icon-date"></i> 我的首页</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>最近学习</span>
            </div>
            <div class="content">
              <v-card v-if="study" :data="newDataing" :config="configZero"></v-card>
              <div v-else class="noCourse">
                <img :src="noMsgImg" alt="">
                <h4>抱歉，现在还没有学习过的课程呦~</h4>
                <!-- <p>去学习</p> -->
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="tab-second">
          <span slot="label"><i class="el-icon-date"></i> 我的课程</span>
          <el-card>
            <el-tabs v-model="activeNames">
              <el-tab-pane label="学习中" name="first">
                <v-card v-if="newDataing" :data="newDataing" :config="configOne"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有学习中的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="second">
                <v-card v-if="newDataReady" :data="newDataReady" :config="configTwo"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经完成的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="我的收藏" name="third">
                <v-card v-if="collectionData" :data="collectionData" :config="configZero"></v-card>
                <div class="content" v-else>
                  <div class="noCourse">
                    <img :src="noMsgImg" alt="">
                    <h4>抱歉，现在还没有已经收藏的课程呦~</h4>
                    <!-- <p>去学习</p> -->
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="tab-third">
          <span slot="label"><i class="el-icon-date"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info></v-info>
          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="tab-fourth">
          <span slot="label"><i class="el-icon-date"></i> 个人设置</span>
          <v-person @update="updateUserInfo"></v-person>
        </el-tab-pane>
        <!-- 绑定Id -->
        <el-tab-pane name="tab-fifth">
          <span slot="label"><i class="el-icon-date"></i> 绑定课程ID</span>
          <v-bind></v-bind>
          <div class="content">
            <div class="noCourse">
              <img :src="noMsgImg" alt="">
              <h4>抱歉，现在还没有已经绑定的课程呦~</h4>
              <!-- <p>去学习</p> -->
            </div>
          </div>
        </el-tab-pane>
        <!-- 我的选课 -->
        <el-tab-pane name="tab-sixth" @tab-click="goShop">
        <!-- <el-tab-pane name="tab-sixth" class="wertttttttttttt" @click="goLink('/shop/checkedCourse')"> -->
          <span slot="label"><i class="el-icon-date"></i> 我的选课</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import CustomCard from "@/components/common/Card.vue";
  import Banner from "@/components/common/Banner.vue";
  import PersonalSet from "@/pages/profile/pages/personalSet.vue";
  import Binding from "@/pages/profile/pages/bindId";
  import Info from "@/pages/profile/pages/info";
  import { other, home } from '~/lib/v1_sdk/index'
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      "v-card": CustomCard,
      "v-person": PersonalSet,
      "v-bind": Binding,
      "v-info": Info,
      'v-banner': Banner
    },
    data() {
      return {
        study:false,
        avator: require("~/assets/images/profile_avator01.png"),
        noMsgImg:require("~/assets/images/noMsg.png"),
        tabPosition: "left",
        activeTab: "tab-first",
        activeNames: "first",
        bconfig: {
          banner_type: "profile"
        },
        configZero: {
          card_type: "profile",
          card: 'home',

        },
        configOne: {
          card_type: "profile",
          card: 'learning'
        },
        configTwo: {
          card_type: "profile",
          card: 'already'
        },
        newData: [{
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 14,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 12,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 13,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 16,
            rate: 2
          },
          {
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 154,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 152,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 153,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 156,
            rate: 2
          },
          {
            bg: require("@/assets/images/home_new01.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 899,
            avator: require("@/assets/images/home_avator.png"),
            id: 1514,
            rate: 3
          },
          {
            bg: require("@/assets/images/home_new02.png"),
            name: "H5和小程序直播开发",
            cnum: 34,
            pnum: 2312,
            avator: require("@/assets/images/home_avator.png"),
            id: 1512,
            rate: 5
          },
          {
            bg: require("@/assets/images/home_new03.png"),
            name: "H5和小程序直播开发",
            cnum: 26,
            pnum: 799,
            avator: require("@/assets/images/home_avator.png"),
            id: 1513,
            rate: 1
          },
          {
            bg: require("@/assets/images/home_new04.png"),
            name: "H5和小程序直播开发",
            cnum: 12,
            pnum: 4399,
            avator: require("@/assets/images/home_avator.png"),
            id: 1516,
            rate: 2
          }
        ],
        styleForm: {
          types: 1,
          pages: 0,
          limits: 12
        },
        newDataing: [],
        newDataReady: [],
        collectionForm: {
          pages: 1,
          limits: 12
        },
        collectionData: [],
        isUpdate:false
      };
    },
    computed: {
      ...mapState('auth', [
        'gid'
      ])
    },
    methods:{
      updateUserInfo(flag){
        this.isUpdate = flag
      },
      goLink(item) {
        this.$router.push(item);
      },
      goShop(tab){
        // console.log(tab);
        this.goLink('/shop/checkedCourse');
      },
      studyCurriculumList () {
        this.styleForm.types =  1
        this.styleForm.pages = 0
        this.styleForm.limits = 12
        return new Promise((resolve, reject) => {
          home.studyCurriculumList(this.styleForm).then(response => {
            // console.log(response, '学习中返回')
            this.newDataing = response.data.curriculumList
            resolve(true)
          })
        })
      },
      readyStudyCurriculumList () {
         this.styleForm.types =  2
        this.styleForm.pages = 0
        this.styleForm.limits = 12
        return new Promise((resolve, reject) => {
          home.studyCurriculumList(this.styleForm).then(response => {
            // console.log(response, '学习中返回')
            this.newDataReady = response.data.curriculumList
            resolve(true)
          })
        })
      },
      collectionList () {
        return new Promise((resolve, reject) => {
          home.collectionList(this.collectionForm).then(response => {
            // console.log(response, '收藏返回')
            this.collectionData = response.data.curriculumList
            resolve(true)
          })
        })
        console.log('tab-------------------', tab);
        this.goLink('/course/pages/categoryd');
      }
    },
    mounted () {
      this.studyCurriculumList()
      this.readyStudyCurriculumList()
      this.collectionList()
      this.activeName = this.gid
      // console.log(this.gid)
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
<style scope lang="scss">
  .profile{
    width: 1120px;
    /* 我的首页 没有课程 */
    .content .noCourse{
      width: 100%;
      height: 600px;
      background-color: #fff;
      text-align: center;
      img{
        width: 316px;
        height: 274px;
        margin-top: 35px;
      }
      h4{
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #999;
        font-size: 20px;
      }
      p{
        width: 140px;
        height: 36px;
        line-height: 36px;
        margin: 0 auto;
        border-radius: 18px;
        background: #6417a6;
        color: #fff;
        transition: all 300ms;
        font-size: 14px;
        &:hover{
          background-color: #8f4acb;
        }
      }
    }
  }

</style>
