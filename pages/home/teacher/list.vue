<template>
  <div
    class="news-list teacherList"
    v-loading="loading"
  >
    <div class="banner-con">
      <v-banner
        :bannerImg="bannerImg"
        :config="configs"
      ></v-banner>
    </div>
    <div class="teacherLead clearfix">
      <p>为了给党政机关、事业单位及企业组织提供量身定制的个性化及顾问式学习模式，1911学堂建立了名师智库为相关单位推荐顾问导师，真正做到学习需求与专家内容的智能匹配。</p>
      <p>1911学堂目前集结了200余位学术造诣深厚、教学经验丰富、具有国际视野的专家学者；未来，将建立由数千名全球知名专家教授组成的高端专家导师库，为学员带来权威、前沿、高端的学习体验。</p>
      <p>贵单位可根据自己的需求从学堂海量的名师智库中筛选导师，把需求提交给学堂，学堂将根据需求进行智能匹配，推荐最合适的专家教授及行业精英到单位真实的场景中授课、咨询。学员可以与学堂导师进行面对面交流、领略大师风采，在自己熟悉的学习环境中更加有效的掌握学习内容，切实提升问题解决能力和实际应用能力，从而提高学习效能，以实现贵单位“请进来、沉下去”的培训效果。</p>
    </div>
    <!-- 分类 -->
    <v-category
      :categoryData="categoryData"
      :childList="childList"
      :unitData="unitData"
      @processData="processData"
      @selectCid="selectCid"
      @selectPid="selectPid"
      @selectUid="selectUid"
      @changeCid="changeCid"
    ></v-category>
    <div
      class="te-con"
      v-if="famousList.length"
    >
      <div class="center teacherList">
        <div @click="getNewInfoList"></div>
        <v-card
          :famousList="famousList"
          :config="config"
        ></v-card>
      </div>
      <div
        class="pagination"
        v-if="pagemsg.total>9"
      >
        <el-pagination
          :id="pagemsg.total"
          v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize"
          background
          layout="prev, pager, next"
          :page-size="pagemsg.pagesize"
          :pager-count="5"
          :page-count="pagemsg.pagesize"
          :current-page="pagemsg.page"
          :total="pagemsg.total"
          @current-change="selectPages"
        ></el-pagination>
      </div>
    </div>
    <!-- 无数据 -->
    <v-nodata
      v-if="famousList.length==0"
      :pageType="pageType"
    ></v-nodata>

    <div
      class="joinTeacher"
      @click="joinTeacher"
      v-show="isShowBtn"
      style="cursor:pointer"
    >
      <img
        src="http://static-image.1911edu.com/toDoTeacher-gif.gif"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import CustomBanner from "@/components/common/Banner.vue";
import CustomCard from "@/pages/home/teacher/components/Card.vue";
import { list } from "~/lib/v1_sdk/index";
import Category from "@/pages/home/teacher/components/teacherCategory";
import NoData from "@/components/common/NoData.vue";

import { setTitle } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";

export default {
  components: {
    "v-card": CustomCard,
    "v-banner": CustomBanner,
    "v-category": Category,
    "v-nodata": NoData
  },
  data() {
    return {
      unitData: [],
      categoryData: [],
      childList: [],
      pageType: {
        page: "teacherList",
        text: "暂无数据",
        imgUrl: "http://static-image.1911edu.com/noMsg.png"
      },
      bannerImg: "http://static-image.1911edu.com/famousTeacher.png",
      load: true,
      configs: {
        banner_type: "famousList"
      },
      config: {
        card_type: "famousList"
      },
      famousList: [],
      teacherForm: {
        pages: 1,
        limits: 9,
        cid: 0,
        pid: 0,
        uid: 0
      },
      pagemsg: {
        page: 1,
        pagesize: 9,
        total: null
      },
      categoryId: 0,
      loading: false,
      isShowBtn: false,
      showRecruitTeacher: true,
      categoryIndex: 0,
      allData: {
        category_name: "全部",
        childList: [],
        id: "0",
        parent_id: "0",
        picture: "http://p8p47jzeo.bkt.clouddn.com/1531894819",
        short_name: "全部"
      }
    };
  },
  methods: {
    // 加入1911教师
    joinTeacher() {
      this.$router.push("/home/teacher/beTeacher");
    },
    initTeacherList() {
      this.teacherForm.pages = 1;
      this.teacherForm.limits = 9;
      this.getNewInfoList();
    },
    //导师列表翻页
    selectPages(val) {
      this.teacherForm.pages = val;
      this.pagemsg.page = val;
      this.teacherForm.limits = this.pagemsg.pagesize;
      this.getNewInfoList();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    //获取导师数据
    getNewInfoList() {
      this.loading = true;
      list.getTeacherList(this.teacherForm).then(response => {
        if (response.status === 100008) {
          let data = { type: true, res: response };
          this.$bus.$emit("reLoginAlertPop", data);
        } else if (response.status === 0) {
          this.pagemsg.total = Number(response.data.pageCount);
          this.famousList = response.data.teacherList;
          this.loading = false;
          this.isShowBtn = true;
        }
      });
    },
    //导师招募
    beTeacher() {
      this.$router.push("/home/teacher/beTeacher");
    },
    //选择一级分类
    selectCid(data, index) {
      this.categoryId = data.id;
      this.teacherForm.cid = data.id;
      this.teacherForm.pid = 0;
      this.getNewInfoList();
    },
    //选择二级分类
    selectPid(data, index) {
      this.teacherForm.pid = data.id;
      this.getNewInfoList();
    },
    //所在单位
    selectUid(data, index) {
      this.teacherForm.uid = data.id;
      this.getNewInfoList();
    },
    //一级分类下没有二级分类进行初始化
    changeCid(data) {
      this.teacherForm.pid = data;
    },
    //教师单位列表
    teacherCompanyList() {
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
    // 公共 获取list 方法
    getHeaderList() {
      this.loadList = true;
      list.teacherCategoryList().then(res => {
        if (res.status === 0) {
          this.handleData(this.allData, res);
          this.loadList = false;
        }
      });
    },
    // 处理全部的分类
    makeData(arr, data) {
      data.forEach((v, i) => {
        v.childList.forEach((v, i) => {
          if (i > 0) {
            arr.push(v);
          }
        });
      });
    },
    // 处理数据 拼接全部数据
    handleData(data, res) {
      this.categoryData = res.data.categoryList;
      this.categoryData.unshift(data);
      if (this.categoryData.length > 1) {
        for (let item of this.categoryData) {
          item.childList.unshift(this.allData);
        }
        this.loadList = false;
        this.makeData(this.categoryData[0].childList, res.data.categoryList);
        this.processData();
      }
    },
    // 根据一级分类处理分类二级分类
    processData() {
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
    }
  },
  mounted() {
    setTitle("名师智库-1911学堂");
    this.getHeaderList();
    this.initTeacherList();
    this.teacherCompanyList();
    // console.log(persistStore.get("cid"), "llldd");
    // if (persistStore.get("cid") != 0) {
    //   this.selectCid({ id: persistStore.get("cid") });
    // } else {
    //   this.initTeacherList();
    // }
  }
};
</script>

