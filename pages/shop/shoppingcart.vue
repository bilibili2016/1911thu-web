<template>
  <div class="shopCart" ref="shopCart">
    <!-- 购物车列表 -->
    <div class="main" v-loading="loding">
      <div class="table">
        <!-- 头部 -->
        <div class="tableHeader" v-if="!isNoMsg">
          <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
          <span class="courseName">课程</span>
          <span class="price">单价</span>
          <span class="operation">操作</span>
        </div>
        <div style="min-height:500px;" v-if="!isNoMsg">
          <div class="maintable">
            <!-- 课程全选 checkbox-->
            <!-- 无课程不显示全选 -->
            <!-- <div class="select-all-course" v-if="this.courseList.length> 0">
              <el-checkbox v-model="selectAllCourse" @change="handleSelectCourseAll">课程</el-checkbox>
            </div> -->
            <!-- 课程列表 start -->
            <!-- <v-list :config="courseType" :data="courseList" v-if="!isNoMsg"></v-list> -->
            <div class="tableBody" v-if="!isNoMsg">
              <div v-for="(course,index) in courseList" :key="index">
                <el-checkbox v-model="course.checkMsg" @change="handleSelectChange(course,index)"></el-checkbox>
                <div class="courseInfo clearfix">
                  <img class="fl" :src="course.picture" @click="goDetail(course)">
                  <div class="fl">
                    <h4 @click="goDetail(course)">{{course.title}}</h4>
                    <h6>{{course.study_time}}学时</h6>
                    <p>导师：{{course.teacher_name}}</p>
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
            <!-- 课程列表 end -->

            <!-- 项目全选 checkbox-->
            <div class="select-all-project" v-if="this.projectList.length> 0">
              <el-checkbox v-model="selectAllProject" @change="handleSelectProjectAll">项目</el-checkbox>
            </div>
            <!-- 项目列表 start-->
            <!-- <v-list :config="projectType" :data="projectList" v-if="!isNoMsg"></v-list> -->
            <div class="tableBody" v-if="!isNoMsg">
              <div v-for="(project,index) in projectList" :key="index">
                <el-checkbox v-model="project.checkMsg" @change="handleSelectProjectChange(project,index)"></el-checkbox>
                <div class="courseInfo clearfix">
                  <div class="project-img">
                    <img class="fl" :src="project.picture" @click="goProjectDetail(project)">
                    <img :src="projectImg" alt="" class="pmsg">
                  </div>

                  <div class="fl">
                    <h4 @click="goProjectDetail(project)">{{project.title}}</h4>
                    <h6>{{project.study_time}}学时 </h6>

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
          </div>
          <!-- 项目列表 end -->

          <!-- 失效课程列表 start -->
          <div class="tableBody loseEfficacy" v-if="!isNoMsg">
            <div v-for="(course,index) in loseEfficacyc" :key="index">
              <div class="lost">失效</div>
              <div class="courseInfo clearfix">
                <img class="fl" :src="course.picture" @click="goDetail(course)">
                <div class="fl">
                  <h4 @click="goDetail(course)">{{course.title}}</h4>
                  <h6>{{course.study_time}}学时</h6>
                  <p>导师：{{course.teacher_name}}</p>
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
          <!-- 失效课程列表 end -->

          <!-- 失效项目列表 start -->
          <div class="tableBody loseEfficacy" v-if="!isNoMsg">
            <div v-for="(project,index) in loseEfficacyp" :key="index">
              <div class="lost">失效</div>
              <div class="courseInfo clearfix">
                <div class="project-img">
                  <img class="fl" :src="project.picture" @click="goProjectDetail(project)">
                  <img :src="projectImg" alt="" class="pmsg">
                </div>

                <div class="fl">
                  <h4 @click="goProjectDetail(project)">{{project.title}}</h4>
                  <h6>{{project.study_time}}学时 </h6>

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
          <!-- 失效项目列表 end -->
        </div>
        <!-- 底部团购优惠提示 -->
        <!-- <div class="tips" id="tips" v-if="!isNoMsg"> -->
        <!-- <img src="@/assets/images/sale.png" alt="">购买多人课程，价格更优惠，详情请咨询010-6217 1911 -->
        <!-- </div> -->

        <!-- 无课程以及项目显示提示  -->
        <v-nodata class="shopCartNoData" :pageType="pageType" v-if="isNoMsg"></v-nodata>

        <div id="computedHeight"></div>
        <div class="tableFooter" id="tableFooter" ref="tableFooter" :class="{tableFooterFixed:isFixed}" v-if="(courseList && courseList.length > 0) || (projectList&& projectList.length>0)">
          <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
          <span class="courseNumber clearfix">
            <span class="deleteChecked" @click="handleDeleteAll">删除选中的内容</span>
            <span class="person">购买人数：</span>
            <!-- onselectstart方法为禁止多次点击选中文本 -->
            <span class="number clearfix" unselectable="on" onselectstart="return false;">
              <span class="fl minus unClick" v-if=" numForm.number<=1">
                <i>-</i>
              </span>
              <span class="fl minus" v-else @click="delNumber">
                <i>-</i>
              </span>
              <input type="text" class="fl num" v-model="numForm.number" @focus="handleFocus" @blur="changeNumber">
              <span class="fl add" v-if="numForm.number>=999" @click="moreNumber">
                <i>+</i>
              </span>
              <span class="fl add" v-else @click="addNumber">
                <i>+</i>
              </span>
            </span>
          </span>
          <span class="commitOrder fr">
            <el-button class="notGray" @click="showCommit" v-if="canSubmit">去支付</el-button>
            <el-button class="isGray" v-else @click="showMsg">去支付</el-button>
          </span>
          <span class="allPrice fr">￥{{prices}}</span>
          <span class="checkedNUmber fr">已选择
            <i>{{Number(this.addArray.curriculumcartid.length) + Number(this.projectAddArray.projectcartid.length)}} </i> 项内容</span>
        </div>
      </div>
    </div>
    <!-- 超出限制提醒 -->
    <div class="alertMask" v-show="isShowAlert">
      <div class="alertPop">
        <i class="el-icon-close" @click="handlePopClick"></i>
        <img src="https://static-image.1911edu.com/alert.png" alt="">
        <p>{{alertText}}</p>
        <el-button @click="handlePopClick">知道了</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { indexOf } from "lodash";
import { shopcart, auth } from "@/lib/v1_sdk/index";
import { mapState, mapActions, mapGetters } from "vuex";
// import { mapGetters } from 'vuex'
import { checkPhone, checkCode } from "~/lib/util/validatefn";
import { store as persistStore } from "~/lib/core/store";
import List from "@/pages/shop/components/List";
import NoData from "@/components/common/NoData.vue";
import { message, setTitle, open } from "@/lib/util/helper";
export default {
  components: {
    "v-list": List,
    "v-nodata": NoData
  },
  data () {
    return {
      pageType: {
        page: "shoppingCart",
        text: "您的购物车为空，快去逛逛吧！",
        imgUrl: "https://static-image.1911edu.com/shopCart-empty.png"
      },
      noMsg: "https://static-image.1911edu.com/shopCart-empty.png",
      lastNum: "",
      isShowAlert: false,
      alertText: "商品数量不能大于999",
      courseType: {
        type: "course"
      },
      projectType: {
        type: "project"
      },
      headerHeight: "",
      tableFooteroffsetTop: "",
      index: 0,
      isFixed: false,
      scroll: "",
      isNoMsg: false,
      loding: true,
      selectAll: false,
      checked: [],
      loseEfficacyc: [], //失效课程列表
      loseEfficacyp: [], //失效项目列表
      isIndeterminate: true,
      numForm: {
        number: 1, //输入的数量 不能直接用于计算  但是两个值必须随时都相等
        beforeNumber: 1 // 用于计算的数量，避免输入数量时金额跟着改变
      },
      courseList: "",
      arraySum: 0,
      projectArraySum: 0,
      // 删除课程 data
      curriculumcartids: {
        cartid: null
      },
      // 删除项目 data
      projectcartids: {
        cartid: null
      },
      addArray: {
        curriculumcartid: []
      },
      removeArray: {
        //记录所有兑换码，全不选作为参数传入，没有修改
        curriculumcartid: []
      },
      projectAddArray: {
        projectcartid: []
      },
      removeProjectArray: {
        //记录所有兑换码，全不选作为参数传入，没有修改
        projectcartid: []
      },
      isRest: true,
      companyForm: {
        companyname: "1911"
      },
      timeout: null,
      windowHeight: "",
      computedHeight: "",
      projectList: "",
      selectAllCourse: "",
      selectAllProject: "",
      projectImg: "https://static-image.1911edu.com/p4.png",
      deleteAllData: {
        projectcartid: [],
        curriculumcartid: []
      },
      courseUrl: {
        base: "/course/coursedetail",
        kid: 0,
        bid: "",
        page: 0
      }
    };
  },
  computed: {
    ...mapState("auth", ["token", "productsNum"]),
    ...mapGetters("auth", ["isAuthenticated"]),
    prices () {
      let p = (
        (Number(this.arraySum + this.projectArraySum) *
          10 *
          (Number(this.numForm.beforeNumber) * 10)) /
        100
      ).toFixed(2);
      return Math.abs(p);
    },
    canSubmit () {
      if (
        this.addArray.curriculumcartid.length <= 0 &&
        this.projectAddArray.projectcartid.length <= 0
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    selectAll (val) {
      if (this.isRest) {
        this.handleSelectAllChange(val);
      }
    }
  },
  methods: {
    ...mapActions("auth", ["setProductsNum", "setKid"]),
    goDetail (item) {
      let kidForm = {
        kids: item.id
      };
      this.courseUrl.kid = item.id;
      open(this.courseUrl);
    },
    // 购物车暂时没项目
    goProjectDetail (item) {
      this.$router.push({
        path: "/project/projectdetail",
        query: {
          kid: item.id,
          type: 1
        }
      });
    },
    loadAll () {
      return [];
    },
    showMsg () {
      this.$message({
        message: "请您先选择课程哦",
        duration: 1000
      });
    },
    // 点击全选 课程 + 项目
    handleSelectAll () {
      this.isRest = true;
    },
    // 点击全选 --- 课程
    handleSelectCourseAll () {
      this.handleSelectCourseAllChange(this.selectAllCourse);
    },
    // 点击全选 --- 项目
    handleSelectProjectAll () {
      this.handleSelectProjectAllChange(this.selectAllProject);
    },
    // 获取 购物车列表
    shopCartList () {
      this.arraySum = 0;
      this.projectArraySum = 0;
      this.addArray.curriculumcartid = [];
      this.projectAddArray.projectcartid = [];

      shopcart.shopCartList().then(response => {
        if (response.status === 0) {
          let body = response.data.curriculumCartList.map(item => {
            // this.addArray.curriculumcartid.push(item.id)      //默认不选中
            // this.arraySum =
            //   (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
            //   10

            this.removeArray.curriculumcartid.push(item.id);

            if (item.is_checked === 0) {
              //未选中
              return Object.assign({}, item, {
                checkMsg: false
              });
            } else if (item.is_checked === 1) {
              //选中
              this.addArray.curriculumcartid.push(item.id);

              this.arraySum =
                (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
                10;

              return Object.assign({}, item, {
                checkMsg: true
              });
            }
          });

          this.courseList = body;
          // this.selectAll = true
          this.loding = false;

          this.numForm.number = response.data.number;
          this.numForm.beforeNumber = response.data.number;
          let count =
            Number(response.data.curriculumCartList.length) +
            Number(response.data.projectCartList.length);

          this.setProductsNum({ pn: count });

          // 判断最初获取课程长度是否相等
          if (this.addArray.curriculumcartid.length == this.courseList.length) {
            this.selectAllCourse = true;
            this.isRest = true;
          } else {
            this.selectAllCourse = false;
            this.isRest = false;
          }

          // 获取项目列表
          let projectListData = response.data.projectCartList.map(item => {
            this.removeProjectArray.projectcartid.push(item.id);
            if (item.is_checked === 0) {
              return Object.assign({}, item, {
                checkMsg: false
              });
            } else if (item.is_checked === 1) {
              this.projectAddArray.projectcartid.push(item.id);
              // 计算 项目价格
              this.projectArraySum =
                (Number(this.projectArraySum) * 10 +
                  Number(item.present_price) * 10) /
                10;

              return Object.assign({}, item, {
                checkMsg: true
              });
            }
          });
          // 将处理后数据给了projectList

          this.projectList = projectListData;

          // 判断课程长度是否相等
          if (
            this.projectAddArray.projectcartid.length == this.projectList.length
          ) {
            this.selectAllProject = true;
            this.isRest = true;
          } else {
            this.selectAllProject = false;
            this.isRest = false;
          }
          if (this.selectAllCourse === true && this.selectAllProject === true) {
            this.selectAll = true;
          }

          // 判断课程和项目都没有时候显示购物车为空 img
          if (this.courseList.length == 0 && this.projectList.length == 0) {
            this.isNoMsg = true;
            // this.selectAll = false
          }
          // 获取下架课程、项目列表
          this.loseEfficacyc = response.data.downCurriculumCartList;
          this.loseEfficacyp = response.data.downProjectCartList;
        } else {
          message(this, "warning", response.msg);
        }
      });
    },
    // 点击选中 取消课程的复选框   ----课程 单选
    handleSelectChange (item, index) {
      let shopIndex = indexOf(this.addArray.curriculumcartid, item.id);
      if (shopIndex >= 0) {
        //未选中
        shopcart
          .shopCartremoveChecked({ curriculumcartid: item.id })
          .then(res => {
            this.addArray.curriculumcartid.splice(shopIndex, 1);
            this.arraySum =
              (Number(this.arraySum) * 10 - Number(item.present_price) * 10) /
              10;

            if (
              this.addArray.curriculumcartid.length == this.courseList.length
            ) {
              this.selectAllCourse = true;
              this.isRest = true;
            } else {
              this.selectAllCourse = false;

              // 单选 时候取消一个取消所有全选
              this.selectAll = false;
              this.isRest = false;
            }
          });
      } else {
        //选中
        shopcart.shopCartaddChecked({ curriculumcartid: item.id }).then(res => {
          // 将选中课程id放入到课程数组
          this.addArray.curriculumcartid.push(item.id);
          // 计算价钱
          this.arraySum =
            (Number(this.arraySum) * 10 + Number(item.present_price) * 10) / 10;
          // 当选中id数组长度和获取数据长度相同时，全选
          if (this.addArray.curriculumcartid.length == this.courseList.length) {
            this.selectAllCourse = true;
            this.isRest = true;
            // 当一个一个点单选时候若全部单选选中，顶部全选状态的改变判断
            if (
              this.selectAllCourse === true &&
              this.selectAllProject === true
            ) {
              this.selectAll = true;
              this.isRest = true;
            }
          } else {
            this.selectAllCourse = false;
            this.isRest = false;
          }
        });

        // if (this.selectAllCourse === true && this.selectAllProject === true) {
        //   this.selectAll = true
        //   this.isRest = false
        // }
      }
    },
    // 点击选中 项目的复选框   ---项目 单选
    handleSelectProjectChange (item, index) {
      let shopIndex = indexOf(this.projectAddArray.projectcartid, item.id);
      if (shopIndex >= 0) {
        //未选中

        shopcart
          .shopCartremoveProjectChecked({ projectcartid: item.id })
          .then(res => {
            this.projectAddArray.projectcartid.splice(shopIndex, 1);
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 -
                Number(item.present_price) * 10) /
              10;

            if (
              this.projectAddArray.projectcartid.length ==
              this.projectList.length
            ) {
              this.selectAllProject = true;
              this.isRest = true;
            } else {
              this.selectAllProject = false;

              // 单选 时候取消一个取消所有全选
              this.selectAll = false;
              this.isRest = false;
            }
          });
      } else {
        //选中
        shopcart
          .shopCartaddProjectChecked({ projectcartid: item.id })
          .then(res => {
            this.projectAddArray.projectcartid.push(item.id);
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10;
            if (
              this.projectAddArray.projectcartid.length ==
              this.projectList.length
            ) {
              this.selectAllProject = true;
              this.isRest = true;

              // 当一个一个点单选时候若全部单选选中，顶部全选状态的改变判断
              if (
                this.selectAllCourse === true &&
                this.selectAllProject === true
              ) {
                this.selectAll = true;
                this.isRest = true;
              }
            } else {
              this.selectAllProject = false;
              this.isRest = false;
            }
          });
      }
    },
    // 点击选择全部  ---- 项目 +课程
    handleSelectAllChange (val) {
      if (
        (this.courseList && this.courseList.length > 0) ||
        (this.projectList && this.projectList.length > 0)
      ) {
        // 课程全选按钮 的选择
        this.selectAllCourse = val;
        // 课程部分全选
        this.courseList.forEach(item => {
          item.checkMsg = val;
        });
        this.arraySum = 0;
        this.addArray.curriculumcartid = [];
        if (val) {
          this.courseList.forEach(item => {
            this.addArray.curriculumcartid.push(item.id);
            this.arraySum =
              (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
              10;
          });
        }
        if (this.addArray.curriculumcartid.length == this.courseList.length) {
          //全选
          if (this.courseList.length) {
            shopcart.shopCartaddChecked(this.addArray).then(res => { });
          }
        } else {
          //全不选

          shopcart.shopCartremoveChecked(this.removeArray).then(res => { });
        }

        // 项目部分 全选
        this.selectAllProject = val;
        this.projectList.forEach(item => {
          item.checkMsg = val;
        });
        this.projectArraySum = 0;
        this.projectAddArray.projectcartid = [];
        if (val) {
          this.projectList.forEach(item => {
            this.projectAddArray.projectcartid.push(item.id);
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10;
          });
        }

        if (
          this.projectAddArray.projectcartid.length == this.projectList.length
        ) {
          //全选
          if (this.projectList.length) {
            shopcart
              .shopCartaddProjectChecked(this.projectAddArray)
              .then(res => { });
          }
        } else {
          //全不选

          shopcart
            .shopCartremoveProjectChecked(this.removeProjectArray)
            .then(res => { });
        }
      }
    },

    // 点击选择全部 ---- 课程
    handleSelectCourseAllChange (val) {
      if (this.courseList && this.courseList.length > 0) {
        // 课程部分全选

        this.courseList.forEach(item => {
          item.checkMsg = val;
        });
        this.arraySum = 0;
        this.addArray.curriculumcartid = [];
        if (val) {
          this.courseList.forEach(item => {
            this.addArray.curriculumcartid.push(item.id);
            this.arraySum =
              (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
              10;
          });
        }

        if (this.addArray.curriculumcartid.length == this.courseList.length) {
          //全选

          shopcart.shopCartaddChecked(this.addArray).then(res => { });
        } else {
          //全不选

          shopcart.shopCartremoveChecked(this.removeArray).then(res => { });
        }
        // 设置整个全选按钮状态

        if (val === false) {
          this.selectAll = val;
          this.isRest = false;
        } else {
          if (this.selectAllCourse === true && this.selectAllProject === true) {
            this.selectAll = true;
            this.isRest = false;
          }
        }
      }
    },
    // 点击选择全部 ---- 项目
    handleSelectProjectAllChange (val) {
      if (this.projectList && this.projectList.length > 0) {
        // 项目部分 全选
        this.projectList.forEach(item => {
          item.checkMsg = val;
        });
        this.projectArraySum = 0;
        this.projectAddArray.projectcartid = [];
        if (val) {
          this.projectList.forEach(item => {
            this.projectAddArray.projectcartid.push(item.id);
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10;
          });
        }
        if (
          this.projectAddArray.projectcartid.length == this.projectList.length
        ) {
          //全选
          shopcart
            .shopCartaddProjectChecked(this.projectAddArray)
            .then(res => { });
        } else {
          //全不选

          shopcart
            .shopCartremoveProjectChecked(this.removeProjectArray)
            .then(res => { });
        }
      }
      // 设置整个全选按钮状态

      if (val === false) {
        this.selectAll = val;
        this.isRest = false;
      } else {
        if (this.selectAllCourse === true && this.selectAllProject === true) {
          this.selectAll = true;
          this.isRest = false;
        }
      }
    },
    showCommit () {
      // 去结算如果购物车数量是1就要判断，要结算的商品内是否存在学习中的课程
      // 否则的话就提醒如何绑定
      if (this.numForm.number == "1") {
        shopcart.existCourse().then(res => {
          if (
            res.data.is_exist_curriculum === 1 ||
            res.data.is_exist_project === 1
          ) {
            this.$confirm(
              "您所购买的商品与已购商品重复，建议您慎重选择，如果您继续购买，该订单将生成专属兑换码，需绑定后学习，绑定后重复商品将进行有效期累加。",
              {
                confirmButtonText: "去结算",
                cancelButtonText: "取消",
                closeOnHashChange: false,
                // type: 'warning',
                center: true,
                customClass: "shopcartPop"
              }
            )
              .then(() => {
                this.$router.push({
                  path: "/shop/affirmorder",
                  query: { id: -1, type: 1 }
                });
                // this.$router.push('/shop/affirmorder') //单个选择完后台记录状态，结算按钮就不用调接口
              })
              .catch(() => { });
          } else {
            this.$router.push({
              path: "/shop/affirmorder",
              query: { id: -1, type: 1 }
            });
            // this.$router.push('/shop/affirmorder')
          }
        });
      } else {
        this.$confirm(
          "您购买了多份学习内容，支付成功后请前往“个人中心-兑换码管理”查看生成的兑换码，绑定后即可学习所购买的学院或课程等内容。",
          {
            confirmButtonText: "去结算",
            cancelButtonText: "取消",
            closeOnHashChange: false,
            // type: 'warning',
            center: true,
            customClass: "shopcartPop"
          }
        )
          .then(() => {
            this.$router.push({
              path: "/shop/affirmorder",
              query: { id: -1, type: 1 }
            });
            // this.$router.push('/shop/affirmorder') //单个选择完后台记录状态，结算按钮就不用调接口
          })
          .catch(() => {
            message(this, "info", "已取消结算！");
          });
      }
    },
    delNumber () {
      if (this.numForm.number <= 1) {
        this.numForm.number = 1;
        this.numForm.beforeNumber = 1;
      } else {
        this.numForm.number--;
        this.numForm.beforeNumber--;
      }
      this.changeCartNumber();
    },
    addNumber () {
      this.numForm.number++;
      this.numForm.beforeNumber++;
      this.changeCartNumber();
    },
    moreNumber () {
      this.isShowAlert = true;
      this.alertText = "商品数量不能大于999";
    },
    // 购买人数输入框获取焦点记录当前数字
    handleFocus () {
      this.lastNum = this.numForm.number;
    },
    // 购买人数输入框失去焦点
    changeNumber () {
      let reg = /^[0-9]*$/;
      if (!reg.test(this.numForm.number)) {
        this.isShowAlert = true;
        this.alertText = "商品数量超限";
        this.numForm.number = this.lastNum;
        return false;
      }
      if (this.numForm.number <= 0) {
        this.isShowAlert = true;
        this.alertText = "商品数量必须大于0";
        this.numForm.number = this.lastNum;
        return false;
      }
      if (!/^[0-9]*$/.test(this.numForm.number) || this.numForm.number < 1) {
        this.numForm.number = 1;
      }
      if (!/^[0-9]*$/.test(this.numForm.number) || this.numForm.number >= 999) {
        this.numForm.number = 999;
      }
      this.numForm.beforeNumber = this.numForm.number;
      this.changeCartNumber();
    },
    // 发送购物车的购买人数
    changeCartNumber () {
      shopcart.changeCartNumber(this.numForm).then(res => { });
    },
    // 删除课程  ---- 课程
    handleDeleteCourse (item, index) {
      this.curriculumcartids.cartid = item.id;
      this.loding = true;

      shopcart.delCourseShopCart(this.curriculumcartids).then(response => {
        message(this, "success", "删除成功");
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList();
        // this.getNum()
        this.loding = false;
      });
    },
    // 删除 项目 ---- 项目
    handleDeleteProject (item, index) {
      this.projectcartids.cartid = item.id;
      this.loding = true;

      shopcart.delProjectShopCart(this.projectcartids).then(response => {
        message(this, "success", "删除成功");
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList();
        // this.getNum()
        this.loding = false;
      });
    },
    // 全选删除  --- 项目 + 课程
    handleDeleteAll () {
      this.deleteAllData.projectcartid = this.projectAddArray.projectcartid;
      this.deleteAllData.curriculumcartid = this.addArray.curriculumcartid;
      this.loding = true;
      if (
        this.deleteAllData.projectcartid.length === 0 &&
        this.deleteAllData.curriculumcartid.length === 0
      ) {
        message(this, "info", "请选择要删除的课程/项目");
        this.loding = false;
        return false;
      }
      shopcart.delAllShopCart(this.deleteAllData).then(response => {
        message(this, "success", "删除成功");
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList();
        // this.getNum()
        this.loding = false;
      });
    },
    //tableFooter根据页面滚动位置设置定位
    addClass () {
      if (document.getElementById("computedHeight")) {
        var computedHeight = parseInt(
          document.getElementById("computedHeight").offsetTop + 170 //170:computedHeight本身的高、距离固定元素的下边距、header的高以及10px页面小的误差
        );
      }
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollIns = parseInt(this.scroll + this.windowHeight);

      if (scrollIns > this.tableFooteroffsetTop || scrollIns > computedHeight) {
        this.isFixed = false;
      } else {
        this.isFixed = true;
      }
    },
    // 关闭超出限制弹窗
    handlePopClick () {
      this.isShowAlert = false;
    }
  },
  updated () {
    this.index++;
    if (this.index === 1 && document.getElementById("tableFooter")) {
      this.tableFooteroffsetTop =
        document.getElementById("tableFooter").offsetTop +
        this.headerHeight +
        10;
      if (this.tableFooteroffsetTop > this.windowHeight) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  deactivated () {
    window.removeEventListener("scroll", this.addClass);
  },
  mounted () {
    setTitle("购物车-1911学堂");
    if (persistStore.get("token")) {
      // 获取购车列表
      this.shopCartList();
    }
    // 寛高设置
    this.headerHeight = document.getElementsByClassName(
      "headerBox"
    )[0].offsetHeight;
    let footerHeight = document.getElementsByClassName("footerBox")[0]
      .offsetHeight;

    this.windowHeight = document.documentElement.clientHeight;

    this.$refs.shopCart.style.minHeight =
      this.windowHeight - this.headerHeight - footerHeight + 5 + "px";

    window.addEventListener("scroll", this.addClass);
  }
};
</script>
<style lang="scss">
@import "~assets/style/shop/shoppingCart.scss";
</style>

