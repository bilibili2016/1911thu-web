<template>
  <div class="news-list teacherList" v-loading="loading">
    <div class="banner-con">
      <v-carousel :config="configCarousel" :teacherBanner="bannerList"></v-carousel>
      <!-- <v-banner :bannerImg="bannerImg" :config="configs"></v-banner> -->
    </div>
    <!-- <div class="teacherLead clearfix">
      <p>为了给党政机关、事业单位及企业组织提供量身定制的个性化及顾问咨询学习模式，1911学堂建立了名师智库为相关单位推荐顾问导师，真正做到学习需求与专家内容的智能匹配。</p>
      <p>1911学堂目前集结了200余位学术造诣深厚、教学经验丰富、具有国际视野的专家学者；未来，将建立由数千名全球知名专家教授组成的高端专家导师库，为学员带来权威、前沿、高端的学习体验。</p>
      <p>贵单位可根据自己的需求从学堂海量的名师智库中筛选导师，把需求提交给学堂，学堂将根据需求进行智能匹配，推荐最合适的专家教授及行业精英到单位真实的场景中授课、咨询。学员可以与学堂导师进行面对面交流、领略大师风采，在自己熟悉的学习环境中更加有效的掌握学习内容，切实提升问题解决能力和实际应用能力，从而提高学习效能，以实现贵单位“请进来、沉下去”的培训效果。</p>
    </div>-->
    <!-- 分类 -->
    <v-category :categoryData="categoryData" :childList="childList" :unitData="unitData" :sortData="sortData" :tagsList="tagsList" @processData="processData" @selectTags="selectTags" @selectCid="selectCid" @selectPid="selectPid" @selectUid="selectUid" @selectKid="selectKid" @selectTips="selectTips" @changeCid="changeCid"></v-category>
    <div class="te-con clearfix" id="container">
      <div class="con">
        <div class="left" id="leftCon">
          <div v-if="famousList.length">
            <div class="teacherList">
              <div @click="getNewInfoList"></div>
              <v-card :famousList="famousList"></v-card>
            </div>
            <div class="pagination" v-if="pagemsg.total>12">
              <el-pagination :id="pagemsg.total" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize" background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="selectPages"></el-pagination>
            </div>
          </div>
          <!-- 无数据 -->
          <v-nodata v-else :pageType="pageType"></v-nodata>
        </div>
        <div class="right" id="rightCon" ref="rightCon">
          <div class="right-con" :class="{rightFixed:isFixed}" v-if="introduce!=''" v-html="introduce"></div>
        </div>
      </div>
    </div>
    <div class="joinTeacher" @click="joinTeacher" v-show="isShowBtn" style="cursor:pointer">
      <img src="https://static-image.1911edu.com/toDoTeacher-gif.gif" alt>
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import CustomCard from "@/pages/home/teacher/components/Card.vue";
import { list, banner } from "~/lib/v1_sdk/index";
import Category from "@/pages/home/teacher/components/teacherCategory";
import NoData from "@/components/common/NoData.vue";
import Carousel from "@/components/common/Carousel.vue";

import { setTitle, matchSplits } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  components: {
    "v-card": CustomCard,
    "v-banner": CustomBanner,
    "v-category": Category,
    "v-nodata": NoData,
    "v-carousel": Carousel
  },
  data () {
    return {
      windowWidth: "",
      bannerList: [],
      configCarousel: {
        carousel: "teacher"
      },
      introduce: "",
      initIntro:
        '<p class="indent" style="text-indent:2em">1911学堂名师智库目前集结了数百位学术造诣深厚、教学经验丰富、具有国际视野的专家学者，以及学习成绩优异、各方面全面发展的高校学生，为中小学生、大学生及各界职场人士提供终身教育及导师咨询服务。</p>' +
        '<p class="indent" style="text-indent:2em">1911学堂未来将建立由数千名全球知名专家教授、世界500强企业高管、业界翘楚行业精英、政策智囊以及优秀高校学子共同组成的高端专家导师库，为各单位组织及学员带来权威、前沿、高端的学习体验和咨询服务。</p>' +
        '<p class="indent" style="text-indent:2em">各单位组织及学员可以可根据自己的实际需求，从1911学堂海量的名师智库中筛选并预约相应的导师，邀请导师到真实的场景中授课，或者预约导师一对一咨询学业困惑或职业发展问题。</p>',
      fixedTop: 0,
      isFixed: false,
      sortData: [],
      unitData: [],
      categoryData: [],
      childList: [],
      categoryListData: [],
      pageType: {
        page: "teacherList",
        text: "暂无数据",
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      bannerImg: "https://static-image.1911edu.com/famousTeacher.png",
      load: true,
      configs: {
        banner_type: "famousList"
      },
      famousList: [],
      teacherForm: {
        pages: 1,
        limits: 12,
        cid: 0,
        pid: 0,
        uid: 0,
        kid: "",
        identity: 0
      },
      pagemsg: {
        page: 1,
        pagesize: 12,
        total: null
      },
      categoryId: 0,
      loading: false,
      isShowBtn: false,
      showRecruitTeacher: true,
      categoryIndex: 0,
      allData: {
        category_name: "全部",
        introduce: "",
        childList: [],
        id: "0",
        parent_id: "0",
        picture: "",
        short_name: "全部",
        teacherKindList: []
      },
      tagsList: []
    };
  },
  methods: {
    // 加入1911教师
    joinTeacher () {
      this.$router.push("/home/teacher/beTeacher");
    },
    initTeacherList () {
      this.teacherForm.pages = 1;
      this.teacherForm.limits = 12;
      this.pagemsg.page = 1;
      this.getNewInfoList();
    },
    //导师列表翻页
    selectPages (val) {
      this.teacherForm.pages = val;
      this.teacherForm.limits = this.pagemsg.pagesize;
      this.pagemsg.page = val;
      this.getNewInfoList();
      // let height = document.getElementById("famousTeacher").offsetHeight;
      document.body.scrollTop = document.documentElement.scrollTop = 420;
    },
    //获取导师数据
    getNewInfoList () {
      this.loading = true;
      list.getTeacherList(this.teacherForm).then(response => {
        this.loading = false;
        if (response.status === 100008) {
          let data = { type: true, res: response };
          this.$bus.$emit("reLoginAlertPop", data);
        } else if (response.status === 0) {
          this.pagemsg.total = Number(response.data.pageCount);
          this.famousList = response.data.teacherList;
          this.isShowBtn = true;
        }
        this.$nextTick(() => {
          if (document.getElementById("leftCon")) {
            document.getElementById("leftCon").style.minHeight =
              document.getElementById("rightCon").clientHeight + "px";
          }
        });
        window.addEventListener("scroll", this.addClass);
      });
    },
    //导师招募
    beTeacher () {
      this.$router.push("/home/teacher/beTeacher");
    },
    // 选择身份  tag
    selectTags (arr) {
      this.teacherForm.identity = arr;
      this.initTeacherList();
    },
    //选择一级分类
    selectCid (data, index) {
      if (data.id != 0) {
        this.introduce = data.introduce;
      } else {
        this.introduce = this.initIntro;
      }
      persistStore.set("cid", data.id);
      this.categoryId = data.id;
      this.teacherForm.cid = data.id;
      this.teacherForm.pid = 0;
      this.teacherForm.kid = 0;
      this.initTeacherList();
    },
    //选择二级分类
    selectPid (data, index) {
      this.teacherForm.pid = data.id;
      this.initTeacherList();
    },
    //专长领域下拉点击效果
    selectTips (item) {
      for (var i = 0; i < this.categoryListData.length; i++) {
        if (this.categoryListData[i].id == item.parent_id) {
          this.introduce = this.categoryListData[i].introduce;
        }
      }
      persistStore.set("cid", item.parent_id);
      this.categoryId = item.parent_id;
      this.teacherForm.cid = item.parent_id;
      this.teacherForm.pid = item.id;
      this.initTeacherList();
    },
    //所在单位
    selectUid (data, index) {
      this.teacherForm.uid = data.id;
      this.initTeacherList();
    },
    selectKid (item) {
      this.teacherForm.kid = item.id;
      this.introduce = item.introduce;
      this.initTeacherList();
    },
    //一级分类下没有二级分类进行初始化
    changeCid (data) {
      this.teacherForm.pid = data;
    },
    //教师单位列表
    teacherCompanyList () {
      list.teacherCompanyList().then(res => {
        if (res.status === 0) {
          this.unitData = res.data.teacherCompanyList;
          this.unitData.unshift({
            company_name: "全部",
            id: 0
          });
        }
      });
    },
    // 教师标签列表(名称智库筛选)
    getTeacherTagsList () {
      list.teacherTagsList().then(res => {
        if (res.status == 0) {
          this.tagsList = res.data.teacherTagsList;
          this.tagsList.unshift({id:0,tag_name:'全部'})
          this.bannerList = res.data.teacherBannerList;
          //设置banner溢出居中显示
          this.$nextTick(() => {
            if (document.getElementsByClassName("teacherElCarouselItem")) {
              let imgArr = document.getElementsByClassName(
                "teacherElCarouselItem"
              );
              if (this.windowWidth <= 1920) {
                let marginLeft = (1920 - this.windowWidth) / 2;
                for (var i = 0; i < imgArr.length; i++) {
                  imgArr[i].style.marginLeft = -marginLeft + "px";
                }
              }
            }
          });
        }
      });
    },
    // 公共 获取list 方法
    getHeaderList () {
      this.loadList = true;
      list.teacherCategoryList().then(res => {
        if (res.status === 0) {
          this.categoryListData = res.data.categoryList;
          for (let item of res.data.categoryList) {
            item.category_name = item.category_name.replace("在线", "");
          }
          this.handleData(this.allData, res);
          this.loadList = false;
          if (persistStore.get("cid") >= 0) {
            console.log(this.categoryListData);
            let CID = persistStore.get("cid");
            for (var i = 0; i < this.categoryListData.length; i++) {
              if (this.categoryListData[i].id == CID) {
                //从课程分类页跳转过来的 cid
                this.$bus.$emit("selectChange", this.categoryListData[i]);
              }
            }
          } else {
            //其他页面跳转过来的 cid=-1
            this.initTeacherList();
          }
        }
      });
    },
    // 处理数据 拼接全部数据
    handleData (data, res) {
      this.categoryData = res.data.categoryList;
      this.categoryData.unshift(data);
      if (this.categoryData.length > 1) {
        for (let i = 0; i < this.categoryData.length; i++) {
          this.categoryData[i].childList.unshift({
            category_name: "全部",
            childList: [],
            id: "0",
            parent_id: this.categoryData[i].id,
            picture: "",
            short_name: "全部",
            teacherKindList: []
          });
        }
        this.loadList = false;
        this.makeData(this.categoryData[0].childList, res.data.categoryList);
        this.processData();
      }
    },
    // 处理全部的分类
    makeData (arr, data) {
      data.forEach((v, i) => {
        v.childList.forEach((v, i) => {
          if (i > 0) {
            arr.push(v);
          }
        });
      });
    },
    // 根据一级分类处理分类二级分类
    processData () {
      for (let item of this.categoryData) {
        if (item.id == this.categoryId) {
          this.categoryIndex = this.categoryData.indexOf(item);
        }
      }
      if (this.categoryData[this.categoryIndex].childList.length == 1) {
        this.pid = "0";
        this.$emit("changeCid", this.pid);
      }
      this.childList = this.categoryData[this.categoryIndex].childList;
      this.sortData = this.categoryData[this.categoryIndex].teacherKindList;
    },
    addClass () {
      if (
        document.getElementById("rightCon") &&
        document.getElementById("rightCon").getBoundingClientRect().top - 80 <=
        0
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  mounted () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTitle("名师智库-1911学堂");
    this.getHeaderList();
    // this.initTeacherList();
    this.teacherCompanyList();
    this.getTeacherTagsList();
    this.introduce = this.initIntro;

    this.fixedTop = this.$refs["rightCon"].getBoundingClientRect().top;
    this.windowWidth = document.documentElement.clientWidth;
  }
};
</script>

