<template>
  <div>
    <div class="profile-banner">
      <div class="center-box">
        <div class="avator">
           <img :src="avator" alt="" class="img">
        </div>
        <div class="name" >
           <p>扶摇1006</p>
           <p>北京某某某科技有限公司</p>
        </div>
        <div class="time">
           <p class="fr">18小时32分钟</p>
           <p class="fr">总学习时长</p>
        </div>
      </div>

    </div>
     <div class="center-tab">
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane class="my-home">
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            <el-card class="card-style">
                <div slot="header" class="clearfix">
                <span>最近学习</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">查看全部</el-button> -->
              </div>
              <div class="content">
                <v-card :data ="newData" :config="config"></v-card>
              </div>
            </el-card>

          </el-tab-pane>
          <el-tab-pane class="my-course">
            <span slot="label"><i class="el-icon-date"></i> 我的课程</span>
            <el-card>
              <el-tabs v-model="activeName">
                <el-tab-pane label="学习中" name="first">
                  <v-card :data ="newData" :config="configOne"></v-card>
                </el-tab-pane>
                <el-tab-pane label="已完成" name="second">
                  <v-card :data ="newData" :config="configTwo"></v-card>
                </el-tab-pane>
                <el-tab-pane label="我的收藏" name="third">
                  <v-card :data ="newData" :config="config"></v-card>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-tab-pane>
          <el-tab-pane class="my-info">
            <span slot="label"><i class="el-icon-date"></i> 我的消息</span>
            <el-card class="card-style">
                <div slot="header" class="clearfix">
                <span>我的消息</span>
              </div>
              <div class="content" v-for="(card,index) in infoList" :index="index" :key="card.id">
                <div class="text fl">
                    {{card.title}}
                </div>
                <div class="time fr">
                  2018-05-20 11：04
                </div>
              </div>
            </el-card>
            </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 个人设置</span>
            <v-info></v-info>
            </el-tab-pane>
          <el-tab-pane>
             <span slot="label"><i class="el-icon-date"></i> 绑定课程ID</span>
             <v-bind></v-bind>
            </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
  import CustomCard from "@/components/common/Card.vue";
   import PersonalSet from "@/pages/personal/personalSet.vue";
    import Binding from "@/pages/personal/binding.vue";
  export default {
    components: {
      'v-card': CustomCard,
      'v-info': PersonalSet,
      'v-bind': Binding
    },
    data() {
      return {
        avator: require('~/assets/images/profile_avator01.png'),
        tabPosition: 'left',
        activeName: 'first',
        config: {
           card_type: "profile"
        },
        configOne: {
           card_type: "profilelearn"
        },
        configTwo: {
           card_type: "profileready"
        },
        newData: [
          {
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
        infoList: [{
          title: '恭喜成为1911学堂会员】 恭喜，你已成功加入1911学院会员的队伍，这里有一份1911学 堂会员学习指导手册，请查收【立即查看】'
        },{
          title: '【新上好课】一大批新上好课上架，欢迎查看'
        },{
            title: '恭喜成为1911学堂会员】 恭喜，你已成功加入1911学院会员的队伍，这里有一份1911学 堂会员学习指导手册，请查收【立即查看】'
        }]
      }
    },
  }
</script>

<style scoped lang="scss">
.profile-banner {
  width: 100%;
  height: 148px;
  background: rgba(100,23,166,1);
  background-image: url('~/assets/images/profile_banner01.png');
  background-size: 100% 100%;
  .avator {
    line-height: 148px;
    // display: inline;
    float: left;
    .img{
      width: 136px;
      height: 136px;
      // vertical-align: middle;
      border-radius: 68px;
      // border: 1px red solid;
      margin-top: 30px;
    }
  }

}
 .center-tab {
    height: 1326px;
    width: 1100px;
    margin: 0 auto;
    margin-top: 64px;
    .my-home{
    }
  }
.center-box{
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  height: 148px;
  .name{
    float: left;
    // margin-top: 64px;
    margin: 64px 0px 0px 33px;
    color: rgba(255,255,255,1);
    :nth-child(1){
      font-size: 24px;
    }
    :nth-child(2){
      font-size: 16px;
      margin-top: 20px;
    }
  }
  .time{
    width: 204px;
    float: right;
    border-left: 1px rgba(232,214,247,1) solid;
    height: 60px;
    margin: 68px 0px 0px 0px;
    color: #fff;
    overflow: hidden;
    :nth-child(1){
      font-size: 23px;
      margin:0px 0px 15px 0px;
    }
    :nth-child(2){
      font-size: 17px;
      margin-right: 55px;
    }
  }
}
.my-info{
  .content{
    width: 806px;
    height: 106px;
    border-bottom: 1px solid rgba(232,214,247,1);
    position: relative;
    margin: 0 auto;
    .text{
      width: 630px;
      font-size:16px;
      font-family:MicrosoftYaHei;
      color:rgba(34,34,34,1);
      line-height:30px;
      position:absolute;
      bottom: 10px;
    }
    .time{
      // width: 128px;
      font-size:14px;
      font-family:MicrosoftYaHei;
      color:rgba(136,136,136,1);
      line-height:30px;
      position:absolute;
      bottom: 10px;
      right: 30px;
    }
  }
}
</style>
