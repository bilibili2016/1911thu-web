<template>
  <div>
    <!-- 顶部list -->
    <div>
      <!-- :loadList="loadList" -->
      <v-list :cidData="cidData" :pidData="pidData" :cidBg="cidBg" :pidBg="pidBg" @selectCid="selectCid" @selectPid="selectPid"></v-list>
    </div>
    <div class="center category-style">
      <!-- 选择全部 最新和最热 -->
      <v-filter @selectActiveTab="selectActiveTab"></v-filter>
      <!-- 非选课的下面 课程列表 -->
      <div v-if="xid === '0'">
        <div class="carlist" v-loading="loadCourseAll" :class="{ minheights : loadCourseAll}">
          <v-card :data="categoryData" :config="categoryCard" v-if="categoryData.length&&xid === '0'"></v-card>
        </div>
        <v-nodata class="noMsg" v-if="categoryData.length == 0 &&!loadCourseAll" :pageType="pageType"></v-nodata>
      </div>

      <div v-if="xid === '1'">
        <!-- {{categoryDataChoose}} -->
        <!-- 选课的课程列表 <v-card :data="categoryData" :config="configSevent"></v-card>-->
        <div class="carlist" v-loading="loadCourse" ref="content" :class="{ minheights : loadCourse}">
          <v-card :data="categoryDataChoose" v-if="categoryDataChoose.length&& xid === '1'" :config="configSevent" @selCheckboxChange="selCheckboxChange"></v-card>
        </div>
        <!-- 无课程时候显示 -->
        <v-nodata v-loading="loadCourse" class="noMsg" v-if="categoryDataChoose.length<=0 && !loadCourse" :pageType="pageType"></v-nodata>

        <div v-show="categoryDataChoose.length !=0&&xid === '1'" class="allChecked" @click="allChecked">全选</div>
      </div>
    </div>
    <div class="pagination" v-show="pagemsg.total!='0' && pagemsg.total>pagemsg.pagesize">
      <el-pagination background layout="prev, pager, next" :page-size="pagemsg.pagesize" :pager-count="5" :page-count="pagemsg.pagesize" :current-page="pagemsg.page" :total="pagemsg.total" @current-change="handlePageChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import CustomCard from "@/components/card/Card.vue";
import NoData from "@/components/common/NoData.vue";

import { home, players, category } from "~/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { openUrl, matchSplits, setTitle } from "~/lib/util/helper";
import List from "@/pages/course/components/List";
import Filter from "@/pages/course/components/Filter";

export default {
  components: {
    "v-card": CustomCard,
    "v-list": List,
    "v-filter": Filter,
    "v-nodata": NoData
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  data () {
    return {
      pageType: {
        page: "category",
        text: "未找到相关内容",
        imgUrl: "https://static-image.1911edu.com/noMsg.png"
      },
      cidData: [],
      pidData: [],
      loadBanner: true,
      loadCourse: false,
      loadCourseAll: false,
      classList: [],
      cidBg: 0,
      pidBg: 0,
      activeTab: "",
      loadStart: true,
      categoryData: [],
      categoryDataChoose: [],
      categoryCard: {
        card_type: "category",
        card: "home",
        new: "false",
        free: "true"
      },
      configSevent: {
        card_type: "shoucang",
        card: "home",
        types: "buy",
        new: "false",
        free: "true",
        title: ""
      },
      pagemsg: {
        page: 1,
        pagesize: 12,
        total: 5
      },
      categoryForm: {
        cids: null,
        pids: null,
        sortBy: 0,
        pages: 1,
        limits: 12,
        type: null
      },
      type: "",
      categoryIndex: "",
      loadList: false,
      xid: "0",
      // 我要选课
      curriculumListForm: {
        categoryIda: null,
        categoryIdb: null,
        sortBy: 0,
        pages: 1,
        limits: 8
      },
      allCheckedId: [],
      idsForm: {
        cartid: [],
        type: 1
      },
      changeData: [],
      cp: "",
      categoryId: "",
      pidNumber: "",
      allData: {
        category_name: "全部",
        id: "0",
        parent_id: "1",
        picture: "",
        short_name: ""
      },
      allCourseData: {
        category_name: "全部",
        childList: [],
        id: "0",
        parent_id: "0",
        picture: "",
        short_name: "全部"
      },
      allProjectData: {
        category_name: "全部",
        childList: [],
        id: "0",
        parent_id: "0",
        picture: "",
        short_name: "全部"
      },
      selectCidItem: "",
      selectPidItem: "",
      selectUrl: {
        base: "/course/category",
        cid: "",
        cp: "",
        xid: "",
        pids: "",
        vid: ""
      },
      ListData: [],
      pids: 0,
      isUrl: true,
      vid: ""
    };
  },
  watch: {
    isUpdate (val) {
      if (val) {
        this.getUserInfo();
      }
    }
  },
  methods: {
    ...mapActions("auth", ["setProductsNum"]),
    // 公共 获取list 方法
    getHeaderList (type) {
      if (type === "course") {
        this.loadList = true;
        category.childCategoryList().then(res => {
          if (res.status === 0) {
            this.handleData(this.allCourseData, res);
            this.loadList = false;
          }
        });
      } else {
        this.loadList = true;
        category.getNewProject().then(res => {
          if (res.status === 0) {
            for (let item of res.data.categoryList) {
              item.category_name = item.category_name.replace("在线", "");
            }
            this.handleData(this.allProjectData, res);
            this.loadList = false;
          }
        });
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
    // 处理数据 拼接全部数据
    handleData (data, res) {
      this.cidData = res.data.categoryList;
      this.cidData.unshift(data);
      for (let item of this.cidData) {
        if (item.childList) {
          item.childList.unshift(this.allData);
        }
      }
      this.loadList = false;
      for (let item of this.cidData) {
        if (item.id === this.categoryId) {
          this.categoryIndex = this.cidData.indexOf(item);
        }
      }
      this.makeData(this.cidData[0].childList, res.data.categoryList);
      this.pidData = this.cidData[this.categoryIndex];
    },
    handelOpenUrl () {
      this.selectUrl.cid = this.selectCidItem;
      this.selectUrl.pids = this.selectPidItem;
      this.selectUrl.cp = this.cp;
      this.selectUrl.xid = this.xid;
      this.selectUrl.vid = this.vid;

      openUrl(this.selectUrl, this);
    },
    // 设置 cid pid 公共函数
    handleSelect (type, item, index) {
      if (type == "cidType") {
        this.selectCidItem = item.id;
        this.$bus.$emit("cid", item.id); //改变分类选中项（样式）
        this.categoryId = item.id;
        this.pidData = this.cidData[index];
        //选择一级重置二级分类
        this.selectPidItem = 0;
        this.categoryForm.type = 0;
      } else {
        this.selectCidItem = this.categoryId;
        this.selectPidItem = item.id;
        this.pidNumber = item.id;
        this.categoryForm.type = item.id;
      }
      this.handelOpenUrl();
      this.categoryForm.pages = 1;
      this.pagemsg.page = 1;
      this.$bus.$emit("pid", this.selectPidItem);

      // 设置调取 card数据 ---
      this.handleSelectCard(this.selectCidItem, this.selectPidItem);
    },
    handleSelectCard (selectCidItem, selectPidItem) {
      if (this.cp == "0") {
        if (this.xid == "0") {
          // 调取课程的数据
          this.getCourseCardList(selectCidItem, selectPidItem);
        } else {
          this.getCourseCardChooseList(selectCidItem, selectPidItem);
        }
      } else {
        // 调取项目的数据
        // 点击学院 分类为 0
        this.getProjectCardList(selectCidItem, selectPidItem);
      }
    },
    // 学院 item
    selectCid (item, index) {
      this.isUrl = false;
      this.handleSelect("cidType", item, index);
    },
    // 分类 item
    selectPid (item, index) {
      this.isUrl = false;
      this.handleSelect("pidType", item, index);
    },
    // 点击cid pid 获取 card列表
    setParamsPidCid (itemCid, itemPid) {
      this.categoryForm.cids = itemCid;
      this.categoryForm.pids = itemPid;
    },
    // 课程 card 列表
    getCourseCardList (itemCid, itemPid) {
      this.loadCourseAll = true;
      this.setParamsPidCid(itemCid, itemPid);
      category.curriculumListNew(this.categoryForm).then(res => {
        if (res.status === 0) {
          this.categoryData = res.data.curriculumList;
          this.pagemsg.total = res.data.pageCount;
        }
        this.isUrl = true;
        this.loadCourseAll = false;
      });
    },

    // 选课 card 列表
    getCourseCardChooseList (itemCid, itemPid) {
      this.loadCourse = true;
      this.setParamsPidCid(itemCid, itemPid);
      category.chooseCurriculumList(this.categoryForm).then(res => {
        if (res.status === 0) {
          this.categoryDataChoose = res.data.curriculumList;
          this.pagemsg.total = res.data.pageCount;
          this.allCheckedId = [];
          for (let item of res.data.curriculumList) {
            this.allCheckedId.push(item.id);
          }
        }
        this.loadCourse = false;
        this.isUrl = true;
      });
    },
    // 项目 card列表
    getProjectCardList (itemCid, itemPid) {
      this.loadCourseAll = true;
      // this.setParamsPidCid(itemCid, itemPid);
      //项目列表-二级分类：pid:0,用type区分
      this.categoryForm.cids = itemCid;
      this.categoryForm.pids = 0;
      this.categoryForm.type = itemPid;

      category.curriculumProjectList(this.categoryForm).then(res => {
        if (res.status === 0) {
          this.categoryData = res.data.curriculumProjectList;
          this.pagemsg.total = res.data.pageCount;
        }
        this.isUrl = true;
        this.loadCourseAll = false;
      });
    },

    // 我要选课页面 点击全选
    allChecked () {
      this.idsForm.cartid = this.allCheckedId;
      this.changeData = this.allCheckedId;
      category.addShopCart(this.idsForm).then(response => {
        if (response.status === 0) {
          this.categoryDataChoose.forEach(function (v, i, arr) {
            v.is_checked = true;
          });
          this.setProductsNum({
            //设置购物车数量
            pn: response.data.curriculumNumber
          });
          this.$message({
            showClose: true,
            type: "success",
            message: response.msg
          });
        } else {
          this.$message({
            showClose: true,
            type: "error",
            message: response.msg
          });
        }
      });
    },
    // 点击 最新最热 筛选
    selectActiveTab (item) {
      this.categoryForm.pages = 1;
      this.pagemsg.page = 1;

      let categoryId = matchSplits("cid");
      let pids = matchSplits("pid");
      item.name === "first"
        ? (this.categoryForm.sortBy = 0)
        : item.name === "second"
          ? (this.categoryForm.sortBy = 1)
          : (this.categoryForm.sortBy = 2);

      if (this.cp == "0") {
        if (this.xid == "0") {
          this.getCourseCardList(categoryId, pids);
        } else {
          this.getCourseCardChooseList(categoryId, pids);
        }
      } else {
        this.getProjectCardList(categoryId, pids);
      }
    },
    // 点击 底部分页分页事件
    handlePageChange (val) {
      this.loadCourse = false;
      this.pagemsg.page = val;
      this.categoryForm.pages = val;
      let categoryId = matchSplits("cid");
      let pids = matchSplits("pid");
      if (this.xid == "0") {
        this.getCourseCardList(categoryId, pids);
      } else {
        this.getCourseCardChooseList(categoryId, pids);
      }
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    //处理单选
    selCheckboxChange (val) {
      if (val.is_checked === false) {
        //不勾选 增加全选值
        this.allCheckedId.push(val.id);
      } else {
        //勾选  删除全选值
        this.allCheckedId.forEach((item, index) => {
          if (item === val.id) {
            this.allCheckedId.splice(index, 1);
          }
        });
      }
    },
    // 初始化params参数
    initParams () {
      // categoryId 学院 id
      this.categoryId = matchSplits("cid");
      // cp(1)项目 cp(0)
      this.cp = matchSplits("cp");

      // 获取是 选课(1) 还是 学院(0)
      this.xid = matchSplits("xid");
      // pid 分类的id
      this.pids = matchSplits("pids");
      // 初始化背景
      this.cidBg = matchSplits("cid");
      this.pidBg = matchSplits("pids");

      this.vid = matchSplits("vid");
    },
    initListCard () {
      // cp(0) 课程 cp(1)项目
      if (this.cp == "0") {
        this.getHeaderList("course");
      } else {
        this.getHeaderList("project");
      }
      this.handleSelectCard(this.categoryId, this.pids);
    },
    reload () {
      if (this.isUrl) {
        location.reload();
      }
    }
  },
  mounted () {
    this.initParams();
    this.initListCard();
  },
  head () {
    return {
      title: "终身教育课程_互联网培训课程_课程中心-1911学堂",
      meta: [
        { hid: 'keywords', name: 'keywords', content: '人工智能，商学院，干部培训，k12，大健康，新闻传播，体育培训，互联网培训' }
      ]
    }
  },
  watch: {
    $route (v, oldv) {
      if (v.query !== oldv.query) {
        this.reload();
      }
    }
  },
  updated () {
    if (matchSplits("cp") === "0") {
      if (matchSplits("vid") === "-1") {
        setTitle("终身教育课程_互联网培训课程_课程中心-1911学堂");
      } else {
        //课程
        setTitle("终身教育课程_互联网培训课程_课程中心-1911学堂");
      }
    } else if (matchSplits("cp") === "1") {
      //项目
      setTitle("培训项目-1911学堂");
    }
  }
};
</script>

<style scoped lang="scss">
// 因兼容问题暂时组件引入
@import "~assets/style/course/category";
.minheights {
  min-height: 500px;
}
</style>
