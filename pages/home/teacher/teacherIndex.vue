// 师资首页
<template>
  <div class="famousIndex" v-loading="loading">
    <div class="banner">
      <div class="con">
        <div class="title">导师指路 少走弯路</div>
        <div class="text">
          <p>企业可发布需求，聘请资深导师为企业提供专业服务</p>
          <p>也可按次付费向900+的导师约谈咨询，获取专业意见</p>
        </div>
        <div class="btn" @click="beTeacher">成为导师</div>
        <div class="search clearfix">
          <div class="inputDiv"> <input type="text" v-model="searchWord" placeholder="请输入导师名、话题" @keyup.enter="search"></div>
          <div class="fontIcon" @click="search">搜索</div>
        </div>
      </div>
    </div>
    <div class="famous-con">
      <div class="title">百名导师等你来约</div>
      <v-tcard :data="teacherData"></v-tcard>
      <div class="more" @click="checkMore">查看更多</div>
    </div>
    <div class="bottom-con">
      <div class="title">1911学堂在线导师咨询的3大优势</div>
      <div class="advan">
        <div class="ad-item">
          <img src="https://static-image.1911edu.com/famous-icon1.png" alt="">
          <p class="adTitle">海量导师</p>
          <p class="adText">严选超过2千位行家达人专属服务</p>
        </div>

        <div class="ad-item">
          <img src="https://static-image.1911edu.com/famous-icon2.png" alt="">
          <p class="adTitle">万能顾问</p>
          <p class="adText">求救导师解惑与达人切磋</p>
        </div>
        <div class="ad-item">
          <img src="https://static-image.1911edu.com/famous-icon3.png" alt="">
          <p class="adTitle">按需服务</p>
          <p class="adText">根据个人所需线上线下灵活沟通</p>
        </div>
      </div>
      <div class="title">预约流程</div>
      <div class="process">
        <div class="pro-item">
          <p class="num">01</p>
          <p class="desc">登录并发布问题</p>
          <p class="text">用户登录，并搜索想要咨询的问题或导师</p>
        </div>
        <div class="pro-item">
          <p class="num">02</p>
          <p class="desc">甄选导师进行咨询</p>
          <p class="text">根据搜索条件甄选导师进行咨询</p>
        </div>
        <div class="pro-item">
          <p class="num">03</p>
          <p class="desc">付款享受服务</p>
          <p class="text">付款后享受专家咨询服务</p>
        </div>
      </div>
    </div>
    <div class="last">
      <div class="title">为什么要成为1911学堂认证导师</div>
      <div class="last-desc">
        <p>
          可以获取更多客户咨询需求
        </p>
        <p>可以最大化自己的<span class="color">专业经验价值</span></p>
        <p>
          可以通过为客户提供咨询服务持续
          <span class="color">获取报酬</span>
        </p>
      </div>
      <div class="last-btn" @click="beTeacher">成为导师</div>
    </div>
  </div>
</template>

<script>
import { list, banner } from "~/lib/v1_sdk/index";
import TCard from "@/components/card/teacherCard.vue";

import { setTitle, matchSplits, Trim, open } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  components: {
    "v-tcard": TCard
  },
  data () {
    return {
      loading: false,
      teacherData: [],
      searchWord: '',
      courseUrl: {
        base: "/curriculum/detail",
        kid: 0,
        tid: 0,
      },
      teacherForm: {
        pages: 1,
        limits: 12,
        is_recommend: 1, //1 推荐 2:不推荐
        search_word: ''
      },
    };
  },
  methods: {
    search () {
      this.searchWord = Trim(this.searchWord)
      if (this.searchWord == '') {
        return false
      }
      this.$router.push('/home/teacher/list?word=' + encodeURI(this.searchWord))
    },
    beTeacher () {
      this.$router.push('beTeacher')
    },
    checkMore () {
      this.$router.push('/home/teacher/list')
    },
    //获取导师数据
    getNewInfoList () {
      this.loading = true;
      list.getTeacherList(this.teacherForm).then(res => {
        this.loading = false;
        if (res.status == 0) {
          this.teacherData = res.data.teacherList;
        } else if (res.status == 100008) {
          let data = { type: true, res: res };
          this.$bus.$emit("reLoginAlertPop", data);
        }
        // this.$nextTick(() => {
        //   if (document.getElementById("leftCon")) {
        //     document.getElementById("leftCon").style.minHeight =
        //       document.getElementById("rightCon").clientHeight + "px";
        //   }
        // });
        // window.addEventListener("scroll", this.addClass);
      });
    },
  },
  head () {
    return {
      title: "清北名校专家_海内外名校教授_师资中心-1911学堂",
      meta: [
        { hid: 'keywords', name: 'keywords', content: '人工智能，商学院，干部培训，k12，大健康，新闻传播，体育培训，终身教育培训' }
      ]
    }
  },
  mounted () {
    this.getNewInfoList()
  }
};
</script>

