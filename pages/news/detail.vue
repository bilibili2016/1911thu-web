<template>
  <div class="newsDetail">
    <v-banner :bannerImg="bannerImg" :config="configs"></v-banner>
    <!-- 面包屑 -->
    <el-breadcrumb class="news" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item class="home" @click="getMore('/')">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="current">新闻资讯</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 新闻内容 -->
    <div class="detail">
      <div class="topbar">
        <span>分享：</span>
        <img :src = "sharewx" alt="">
        <img :src = "sharewb" alt="">
        <img :src = "sharekj" alt="">
      </div>
      <div class="newsContent">
        <h3>{{newsDetail.title}}</h3>
        <p class="time">{{newsDetail.time}}</p>
        <div class="newsInner">
          <p>胡钰代表清华大学新闻学院介绍了与南加大进行跨院系、跨领域国际化培养的思路以及合作推进的情况。他说，这是面向学校建设世界一流大学目标，顺应数据时代要求的培养方式创新，未来将有利于清华新闻学院进一步保持其在新闻教育国际化发展中的领先优势，更好地培养融合媒体时代的跨界复合型人才。</p>
          <p>在随后召开的“传媒创新创业教育与实践论坛”中，新闻学院副院长杭敏介绍了两校三院国际双学位合作的具体方案。文化创意发展研究院副院长张铮介绍了推进文化创意产业创新发展方面的理念与实践。新闻学院副教授曾繁旭分享了他在管理传媒创业硕士项目和讲授创业课程中的经验。</p>
          <p>获得2017年“福布斯30岁以下杰出创业者”、2009级新闻学院本科毕业生蔡珩是清华与南加大的校友，他从个人成长方面介绍了从学校到创业的经历与感悟。原美国新闻俱乐部主任、新闻学院全球财经新闻项目主任里克·邓纳姆（Rick Dunham）则介绍了他长期在清华从事国际化教学的经验。</p>
          <p>在讨论环节，清华新闻学院助理教授吴璟薇等交流了自己在国际教育中的心得与体会。</p>
          <p>在随后召开的“传媒创新创业教育与实践论坛”中，新闻学院副院长杭敏介绍了两校三院国际双学位合作的具体方案。文化创意发展研究院副院长张铮介绍了推进文化创意产业创新发展方面的理念与实践。新闻学院副教授曾繁旭分享了他在管理传媒创业硕士项目和讲授创业课程中的经验。</p>
          <p>获得2017年“福布斯30岁以下杰出创业者”、2009级新闻学院本科毕业生蔡珩是清华与南加大的校友，他从个人成长方面介绍了从学校到创业的经历与感悟。原美国新闻俱乐部主任、新闻学院全球财经新闻项目主任里克·邓纳姆（Rick Dunham）则介绍了他长期在清华从事国际化教学的经验。</p>
          <p>在讨论环节，清华新闻学院助理教授吴璟薇等交流了自己在国际教育中的心得与体会。</p>
        </div>
       <div class="next clearfix">
          <span class="fl" v-if="newsDetail.prePiece" @click ="getMore('detailone')">上一篇 <i>{{newsDetail.prePiece}}</i></span>
          <span class="fr" v-if="newsDetail.nextPiece" @click ="getMore('detailtwo')">下一篇 <i>{{newsDetail.nextPiece}}</i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import { mapState, mapActions, mapGetters } from "vuex";
 import {
    other,
    home
  } from "~/lib/v1_sdk/index";
  export default {
    computed: {
      ...mapState('auth', [
        'nid'
      ])
    },
     components: {
      'v-banner': CustomBanner
    },
    data(){
      return{
        bannerImg: require('~/assets/images/profile_banner03.png'),
        sharewx: require('~/assets/images/share-wx.png'),
        sharewb: require('~/assets/images/share-wb.png'),
        sharekj: require('~/assets/images/share-kj.png'),
        configs: {
          banner_type: "news"
        },
        newsDetail:{
          title:"1911广场旗下1911咖啡获香港文利国际餐饮300万天使轮投资",
          time:"2018-05-20",
          detail:"",
          prePiece:"清华大学成立 “青年教师骨干领航工作站”",
          nextPiece:"清华大学成立 “青年教师骨干领航工作站”",
        },

        nidForm: {
          ids: null
        }

      }
    },
    methods :{
      getMore(item) {
        this.$router.push(item);
      },
      getNewInfoDetail () {
        return new Promise((resolve, reject) => {
          home.getNewInfoDetail(this.nidForm).then(response => {
            console.log(response, '这是返回的')
            // this.newsDetail = response.data.newDetail
          })
        })
      }
    },
    mounted () {
      console.log(this.nid, '这是nid')
      this.nidForm.ids = this.nid
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
      this.getNewInfoDetail()
    }
  }
</script>
