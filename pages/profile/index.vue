<template>
  <div>
    <v-banner :config = "bconfig"></v-banner>
    <div class="center-tab center">
      <el-tabs :tab-position="tabPosition" v-model="activeName">
        <!-- 我的信息 -->
        <el-tab-pane class="my-home" name="first">
          <span slot="label"><i class="el-icon-date"></i> 我的首页</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>最近学习</span>
            </div>
            <div class="content">
              <v-card :data="newData" :config="configZero"></v-card>
            </div>
          </el-card>
        </el-tab-pane>
        <!-- 我的课程 -->
        <el-tab-pane class="my-course" name="second">
          <span slot="label"><i class="el-icon-date"></i> 我的课程</span>
          <el-card>
            <el-tabs v-model="activeNames">
              <el-tab-pane label="学习中" name="first">
                <v-card :data="newData" :config="configOne"></v-card>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="second">
                <v-card :data="newData" :config="configTwo"></v-card>
              </el-tab-pane>
              <el-tab-pane label="我的收藏" name="third">
                <v-card :data="newData" :config="configZero"></v-card>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-tab-pane>
        <!-- 我的消息 -->
        <el-tab-pane class="my-info" name="third">
          <span slot="label"><i class="el-icon-date"></i> 我的消息</span>
          <el-card class="card-style">
            <div slot="header" class="clearfix">
              <span>我的消息</span>
            </div>
            <v-info></v-info>
          </el-card>
        </el-tab-pane>
        <!-- 个人设置 -->
        <el-tab-pane name="fourth">
          <span slot="label"><i class="el-icon-date"></i> 个人设置</span>
          <v-person></v-person>
        </el-tab-pane>
        <!-- 绑定Id -->
        <el-tab-pane name="fifth">
          <span slot="label"><i class="el-icon-date"></i> 绑定课程ID</span>
          <v-bind></v-bind>
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
import { other, auth } from '~/lib/v1_sdk/index'
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
        avator: require("~/assets/images/profile_avator01.png"),
        tabPosition: "left",
        activeName: "first",
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
        ]
      };
    },
    computed: {
      ...mapState('auth', [
        'gid'
      ])
    },
    mounted () {
      this.activeName = this.gid
      console.log(this.gid)
       document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
