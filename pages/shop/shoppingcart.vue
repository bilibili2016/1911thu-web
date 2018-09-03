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
            <div class="select-all-course" v-if="this.courseList.length> 0">
              <el-checkbox v-model="selectAllCourse" @change="handleSelectCourseAll">课程</el-checkbox>
            </div>
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
                    <p>讲师：{{course.teacher_name}}</p>
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
                  <p>讲师：{{course.teacher_name}}</p>
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
        <div class="noMsg-con" v-if="isNoMsg">
          <div class="noMsg-img">
            <img :src="noMsg" alt="">
            <p>您的购物车为空</p>
          </div>
        </div>
        <div id="computedHeight"></div>
        <div class="tableFooter" id="tableFooter" ref="tableFooter" :class="{tableFooterFixed:isFixed}" v-if="(courseList && courseList.length > 0) || (projectList&& projectList.length>0)">
          <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
          <span class="courseNumber clearfix">
            <span class="deleteChecked" @click="handleDeleteAll">删除选中的课程</span>
            <span class="person">购买人数：</span>
            <!-- onselectstart方法为禁止多次点击选中文本 -->
            <span class="number clearfix" unselectable="on" onselectstart="return false;">
              <span class="fl minus" v-if="numForm.number<=1">
                <i>-</i>
              </span>
              <span class="fl minus" v-else @click="delNumber">
                <i>-</i>
              </span>
              <input type="text" class="fl num" v-model="numForm.number" @blur="changeNumber">
              <span class="fl add" v-if="numForm.number>=9999">
                <i>+</i>
              </span>
              <span class="fl add" v-else @click="addNumber">
                <i>+</i>
              </span>
            </span>
          </span>
          <span class="commitOrder fr">
            <el-button class="notGray" @click="showCommit" v-if="canSubmit">去结算</el-button>
            <el-button class="isGray" v-else @click="showMsg">去结算</el-button>
          </span>
          <span class="allPrice fr">￥{{prices}}</span>
          <span class="checkedNUmber fr">已选择
            <i>{{Number(this.addArray.curriculumcartid.length) + Number(this.projectAddArray.projectcartid.length)}} </i> 门课程</span>
        </div>
      </div>
    </div>
    <!-- 提交公司信息 -->
    <div class="information" @click.self="close" v-show="showInfo">
      <div class="info">
        <div class="infoTitle">
          <h4>为方便我们的沟通，请填写下列信息</h4>
        </div>
        <el-form :model="companyInfo" :rules="rules" ref="companyInfo" label-width="136px" class="companyInfo">
          <el-form-item label="公司名称：" prop="companyname">
            <!-- <el-input placeholder="请输入公司名称" v-model="companyInfo.companyname"></el-input> -->
            <el-autocomplete v-model="companyInfo.companyname" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
          </el-form-item>
          <el-form-item label="公司地址：" prop="companyaddress">
            <el-input placeholder="请输入公司地址" v-model="companyInfo.companyaddress"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contactperson">
            <el-input placeholder="请输入联系人姓名" v-model="companyInfo.contactperson"></el-input>
          </el-form-item>
          <el-form-item label="联系方法：" prop="phones">
            <el-input placeholder="请输入手机号" v-model.number="companyInfo.phones"></el-input>
          </el-form-item>
          <el-form-item class="code" label="验证码：" prop="codes">
            <el-input placeholder="请输入短信验证码" v-model="companyInfo.codes"></el-input>
            <span @click="handleGetCode">{{companyInfo.getCode}}</span>
          </el-form-item>
          <el-form-item class="btnCommit">
            <el-button type="primary" @click="addPaySubmit('companyInfo')">提交</el-button>
            <!-- <el-button type="primary" @click="submitForm('companyInfo')">提交</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { indexOf } from 'lodash'
import { shopcart, auth } from '@/lib/v1_sdk/index'
import { mapState, mapActions, mapGetters } from 'vuex'
// import { mapGetters } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { store as persistStore } from '~/lib/core/store'
import List from '@/pages/shop/components/List'
import { message, open } from '@/lib/util/helper'
export default {
  components: {
    'v-list': List
  },
  data() {
    return {
      courseType: {
        type: 'course'
      },
      projectType: {
        type: 'project'
      },
      headerHeight: '',
      tableFooteroffsetTop: '',
      index: 0,
      isFixed: false,
      scroll: '',
      isNoMsg: false,
      loding: true,
      noMsg: 'http://papn9j3ys.bkt.clouddn.com/shopCart-empty.png',
      showInfo: false,
      selectAll: false,
      checked: [],
      loseEfficacyc: [], //失效课程列表
      loseEfficacyp: [], //失效项目列表
      isIndeterminate: true,
      numForm: {
        number: 1
      },
      courseList: '',
      restaurants: [
        {
          value: '11111'
        },
        {
          value: '22'
        },
        {
          value: '222'
        },
        {
          value: '1'
        },
        {
          value: '111'
        }
      ],
      companyInfo: {
        companyname: '',
        companyaddress: '',
        contactperson: '',
        phones: '',
        codes: '',
        types: 6,
        getCode: '获取验证码',
        seconds: 30,
        captchaDisable: true
      },
      rules: {
        companyname: [
          {
            required: true,
            message: '请输入公司名称',
            trigger: 'blur'
          }
        ],
        companyaddress: [
          {
            required: true,
            message: '请填写公司地址',
            trigger: 'blur'
          }
        ],
        contactperson: [
          {
            required: true,
            message: '请填写联系人姓名',
            trigger: 'blur'
          }
        ],
        phones: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: checkPhone,
            trigger: 'blur'
          }
        ],
        codes: [
          {
            required: true,
            message: '请填写短信验证码',
            trigger: 'blur'
          }
        ]
      },
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
        companyname: '1911'
      },
      restaurants: [],
      timeout: null,
      windowHeight: '',
      computedHeight: '',
      projectList: '',
      selectAllCourse: '',
      selectAllProject: '',
      projectImg: 'http://papn9j3ys.bkt.clouddn.com/p4.png',
      deleteAllData: {
        projectcartid: [],
        curriculumcartid: []
      }
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    if (this.isAuthenticated) {
      // 获取购车列表
      this.shopCartList()
    }
    // this.$bus.$emit('bannerShow', false)
    // this.$bus.$on('handleSelectChange', data => {
    //   this.handleSelectChange(data.course, data.index)
    // })
    // this.$bus.$on('goDetail', data => {
    //   this.goDetail(data.course, data.index)
    // })
    // this.$bus.$on('handleDeleteCourse', data => {
    //   this.handleDeleteCourse(data.course, data.index)
    // })

    // this.$bus.$on('handleSelectProjectChange', data => {
    //   this.handleSelectProjectChange(data.project, data.index)
    // })
    // this.$bus.$on('goProjectDetail', data => {
    //   this.goProjectDetail(data.project, data.index)
    // })
    // this.$bus.$on('handleDeleteProject', data => {
    //   this.handleDeleteProject(data.project, data.index)
    // })
    // this.getNum()
    // this.restaurants = this.loadAll()

    // 寛高设置
    this.headerHeight = document.getElementsByClassName(
      'headerBox'
    )[0].offsetHeight
    let footerHeight = document.getElementsByClassName('footerBox')[0]
      .offsetHeight

    this.windowHeight = document.documentElement.clientHeight

    this.$refs.shopCart.style.minHeight =
      this.windowHeight - this.headerHeight - footerHeight + 5 + 'px'

    window.addEventListener('scroll', this.addClass)
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    ...mapGetters('auth', ['isAuthenticated']),
    prices() {
      let p = (
        Number(this.arraySum + this.projectArraySum) *
        10 *
        (Number(this.numForm.number) * 10) /
        100
      ).toFixed(2)

      return Math.abs(p)
    },
    canSubmit() {
      // console.log(
      //   this.addArray.curriculumcartid.length <= 0,
      //   'this.addArray.curriculumcartid.length'
      // )
      // console.log(
      //   this.projectAddArray.projectcartid.length <= 0,
      //   'this.projectAddArray.projectcartid.length'
      // )
      if (
        this.addArray.curriculumcartid.length <= 0 &&
        this.projectAddArray.projectcartid.length <= 0
      ) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    selectAll(val) {
      if (this.isRest) {
        this.handleSelectAllChange(val)
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setProductsNum', 'setKid']),
    goDetail(item) {
      let kidForm = {
        kids: item.id
      }
      let urlLink = {
        base: '/course/coursedetail',
        kid: item.id,
        bid: '',
        page: 0
      }
      open(urlLink)
      // window.open(
      //   window.location.origin +
      //     '/course/coursedetail?kid=' +
      //     item.id +
      //     '&page=0'
      // )
    },
    goProjectDetail(item) {
      let urlLink = {
        base: '/project/projectdetail',
        kid: item.id,
        type: 1
      }
      open(urlLink)
      // window.open(
      //   window.location.origin +
      //     '/project/projectdetail?kid=' +
      //     item.id +
      //     '&type=1'
      // )
    },
    loadAll() {
      return []
    },
    showMsg() {
      this.$message({
        message: '请您先选择课程哦',
        duration: 1000
      })
    },
    querySearchAsync(queryString, cb) {
      queryString = queryString.replace(/^\s+|\s+$/g, '')
      if (queryString === '') {
        return false
      }
      this.searchCompanyList()
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants
      clearTimeout(this.timeout)
      cb(results)
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.company_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleSelect(item) {
      this.companyInfo.companyname = item
    },
    //搜索单位 接口
    searchCompanyList() {
      if (this.companyInfo.companyname === '') {
        return false
      } else {
        shopcart.searchCompanyList(this.companyInfo).then(res => {
          for (var i = 0; i < res.data.companyList.length; i++) {
            this.$set(
              res.data.companyList[i],
              'value',
              res.data.companyList[i].company_name
            )
          }
          this.restaurants = res.data.companyList
        })
      }
    },
    handleSelect(item) {
      this.companyInfo.companyname = item
    },
    // 点击全选 课程 + 项目
    handleSelectAll() {
      this.isRest = true
    },
    // 点击全选 --- 课程
    handleSelectCourseAll() {
      this.handleSelectCourseAllChange(this.selectAllCourse)
    },
    // 点击全选 --- 项目
    handleSelectProjectAll() {
      this.handleSelectProjectAllChange(this.selectAllProject)
    },
    // 获取 购物车列表
    shopCartList() {
      this.arraySum = 0
      this.projectArraySum = 0
      this.addArray.curriculumcartid = []
      this.projectAddArray.projectcartid = []

      shopcart.shopCartList().then(response => {
        if (response.status === 0) {
          let body = response.data.curriculumCartList.map(item => {
            // this.addArray.curriculumcartid.push(item.id)      //默认不选中
            // this.arraySum =
            //   (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
            //   10

            this.removeArray.curriculumcartid.push(item.id)

            if (item.is_checked === 0) {
              //未选中
              return Object.assign({}, item, {
                checkMsg: false
              })
            } else if (item.is_checked === 1) {
              //选中
              this.addArray.curriculumcartid.push(item.id)

              this.arraySum =
                (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
                10

              return Object.assign({}, item, {
                checkMsg: true
              })
            }
          })

          this.courseList = body
          // this.selectAll = true
          this.loding = false

          this.numForm.number = response.data.number
          let count =
            Number(response.data.curriculumCartList.length) +
            Number(response.data.projectCartList.length)

          this.setProductsNum({ pn: count })

          // 判断最初获取课程长度是否相等
          if (this.addArray.curriculumcartid.length == this.courseList.length) {
            // console.log('1')
            this.selectAllCourse = true
            this.isRest = true
          } else {
            // console.log('2')
            this.selectAllCourse = false
            this.isRest = false
          }

          // 获取项目列表
          let projectListData = response.data.projectCartList.map(item => {
            this.removeProjectArray.projectcartid.push(item.id)
            if (item.is_checked === 0) {
              return Object.assign({}, item, {
                checkMsg: false
              })
            } else if (item.is_checked === 1) {
              this.projectAddArray.projectcartid.push(item.id)
              // 计算 项目价格
              this.projectArraySum =
                (Number(this.projectArraySum) * 10 +
                  Number(item.present_price) * 10) /
                10

              return Object.assign({}, item, {
                checkMsg: true
              })
            }
          })
          // 将处理后数据给了projectList

          this.projectList = projectListData

          // 判断课程长度是否相等
          if (
            this.projectAddArray.projectcartid.length == this.projectList.length
          ) {
            this.selectAllProject = true
            this.isRest = true
          } else {
            this.selectAllProject = false
            this.isRest = false
          }
          if (this.selectAllCourse === true && this.selectAllProject === true) {
            this.selectAll = true
          }

          // 判断课程和项目都没有时候显示购物车为空 img
          if (this.courseList.length == 0 && this.projectList.length == 0) {
            this.isNoMsg = true
            // this.selectAll = false
          }
          // 获取下架课程、项目列表
          this.loseEfficacyc = response.data.downCurriculumCartList
          this.loseEfficacyp = response.data.downProjectCartList
        } else {
          message(this, 'warning', response.msg)
        }
      })
    },
    // 点击选中 取消课程的复选框   ----课程 单选
    handleSelectChange(item, index) {
      let shopIndex = indexOf(this.addArray.curriculumcartid, item.id)
      if (shopIndex >= 0) {
        //未选中
        shopcart
          .shopCartremoveChecked({ curriculumcartid: item.id })
          .then(res => {
            this.addArray.curriculumcartid.splice(shopIndex, 1)
            this.arraySum =
              (Number(this.arraySum) * 10 - Number(item.present_price) * 10) /
              10

            if (
              this.addArray.curriculumcartid.length == this.courseList.length
            ) {
              this.selectAllCourse = true
              this.isRest = true
            } else {
              this.selectAllCourse = false

              // 单选 时候取消一个取消所有全选
              this.selectAll = false
              this.isRest = false
            }
          })
      } else {
        //选中
        shopcart.shopCartaddChecked({ curriculumcartid: item.id }).then(res => {
          // 将选中课程id放入到课程数组
          this.addArray.curriculumcartid.push(item.id)
          // 计算价钱
          this.arraySum =
            (Number(this.arraySum) * 10 + Number(item.present_price) * 10) / 10
          // 当选中id数组长度和获取数据长度相同时，全选
          if (this.addArray.curriculumcartid.length == this.courseList.length) {
            this.selectAllCourse = true
            this.isRest = true
            // 当一个一个点单选时候若全部单选选中，顶部全选状态的改变判断
            if (
              this.selectAllCourse === true &&
              this.selectAllProject === true
            ) {
              this.selectAll = true
              this.isRest = true
            }
          } else {
            this.selectAllCourse = false
            this.isRest = false
          }
        })

        // if (this.selectAllCourse === true && this.selectAllProject === true) {
        //   this.selectAll = true
        //   this.isRest = false
        // }
      }
    },
    // 点击选中 项目的复选框   ---项目 单选
    handleSelectProjectChange(item, index) {
      let shopIndex = indexOf(this.projectAddArray.projectcartid, item.id)
      if (shopIndex >= 0) {
        //未选中

        shopcart
          .shopCartremoveProjectChecked({ projectcartid: item.id })
          .then(res => {
            this.projectAddArray.projectcartid.splice(shopIndex, 1)
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 -
                Number(item.present_price) * 10) /
              10

            if (
              this.projectAddArray.projectcartid.length ==
              this.projectList.length
            ) {
              this.selectAllProject = true
              this.isRest = true
            } else {
              this.selectAllProject = false

              // 单选 时候取消一个取消所有全选
              this.selectAll = false
              this.isRest = false
            }
          })
      } else {
        //选中
        shopcart
          .shopCartaddProjectChecked({ projectcartid: item.id })
          .then(res => {
            this.projectAddArray.projectcartid.push(item.id)
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10
            if (
              this.projectAddArray.projectcartid.length ==
              this.projectList.length
            ) {
              this.selectAllProject = true
              this.isRest = true

              // 当一个一个点单选时候若全部单选选中，顶部全选状态的改变判断
              if (
                this.selectAllCourse === true &&
                this.selectAllProject === true
              ) {
                this.selectAll = true
                this.isRest = true
              }
            } else {
              this.selectAllProject = false
              this.isRest = false
            }
          })

        // if (this.selectAllCourse === true && this.selectAllProject === true) {
        //   this.selectAll = true
        //   this.isRest = false
        // }
      }
    },
    // 点击选择全部  ---- 项目 +课程
    handleSelectAllChange(val) {
      if (
        (this.courseList && this.courseList.length > 0) ||
        (this.projectList && this.projectList.length > 0)
      ) {
        // 课程全选按钮 的选择
        this.selectAllCourse = val
        // 课程部分全选
        this.courseList.forEach(item => {
          item.checkMsg = val
        })
        this.arraySum = 0
        this.addArray.curriculumcartid = []
        if (val) {
          this.courseList.forEach(item => {
            this.addArray.curriculumcartid.push(item.id)
            this.arraySum =
              (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
              10
          })
        }

        if (this.addArray.curriculumcartid.length == this.courseList.length) {
          //全选

          shopcart.shopCartaddChecked(this.addArray).then(res => {})
        } else {
          //全不选

          shopcart.shopCartremoveChecked(this.removeArray).then(res => {})
        }

        // 项目部分 全选
        this.selectAllProject = val
        this.projectList.forEach(item => {
          item.checkMsg = val
        })
        this.projectArraySum = 0
        this.projectAddArray.projectcartid = []
        if (val) {
          this.projectList.forEach(item => {
            this.projectAddArray.projectcartid.push(item.id)
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10
          })
        }

        if (
          this.projectAddArray.projectcartid.length == this.projectList.length
        ) {
          //全选

          shopcart
            .shopCartaddProjectChecked(this.projectAddArray)
            .then(res => {})
        } else {
          //全不选

          shopcart
            .shopCartremoveProjectChecked(this.removeProjectArray)
            .then(res => {})
        }
      }
    },

    // 点击选择全部 ---- 课程
    handleSelectCourseAllChange(val) {
      if (this.courseList && this.courseList.length > 0) {
        // 课程部分全选

        this.courseList.forEach(item => {
          item.checkMsg = val
        })
        this.arraySum = 0
        this.addArray.curriculumcartid = []
        if (val) {
          this.courseList.forEach(item => {
            this.addArray.curriculumcartid.push(item.id)
            this.arraySum =
              (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
              10
          })
        }

        if (this.addArray.curriculumcartid.length == this.courseList.length) {
          //全选

          shopcart.shopCartaddChecked(this.addArray).then(res => {})
        } else {
          //全不选

          shopcart.shopCartremoveChecked(this.removeArray).then(res => {})
        }
        // 设置整个全选按钮状态

        if (val === false) {
          this.selectAll = val
          this.isRest = false
        } else {
          if (this.selectAllCourse === true && this.selectAllProject === true) {
            this.selectAll = true
            this.isRest = false
          }
        }
      }
    },
    // 点击选择全部 ---- 项目
    handleSelectProjectAllChange(val) {
      if (this.projectList && this.projectList.length > 0) {
        // 项目部分 全选
        this.projectList.forEach(item => {
          item.checkMsg = val
        })
        this.projectArraySum = 0
        this.projectAddArray.projectcartid = []
        if (val) {
          this.projectList.forEach(item => {
            this.projectAddArray.projectcartid.push(item.id)
            this.projectArraySum =
              (Number(this.projectArraySum) * 10 +
                Number(item.present_price) * 10) /
              10
          })
        }
        if (
          this.projectAddArray.projectcartid.length == this.projectList.length
        ) {
          //全选

          shopcart
            .shopCartaddProjectChecked(this.projectAddArray)
            .then(res => {})
        } else {
          //全不选

          shopcart
            .shopCartremoveProjectChecked(this.removeProjectArray)
            .then(res => {})
        }
      }
      // 设置整个全选按钮状态

      if (val === false) {
        this.selectAll = val
        this.isRest = false
      } else {
        if (this.selectAllCourse === true && this.selectAllProject === true) {
          this.selectAll = true
          this.isRest = false
        }
      }
    },
    // deleteChecked() {
    //   this.courseList.forEach(item => {
    //     if (item.checkMsg) {
    //       let shopIndex = indexOf(this.addArray.curriculumcartid, item.id);
    //       this.addArray.curriculumcartid.splice(shopIndex, 1);
    //       this.arraySum = this.arraySum - Number(item.present_price).toFixed(2);
    //     }
    //   });
    // },
    showCommit() {
      // 去结算如果购物车数量是1就要判断，要结算的商品内是否存在学习中的课程
      // 否则的话就提醒如何绑定

      if (this.numForm.number == '1') {
        shopcart.existCourse().then(res => {
          if (
            res.data.is_exist_curriculum === 1 ||
            res.data.is_exist_project === 1
          ) {
            this.$confirm(
              '您所购买的商品与已购商品重复，建议您慎重选择，如果您继续购买，该订单将生成专属兑换码，需绑定后学习，绑定后重复商品将进行有效期累加。',
              {
                confirmButtonText: '去结算',
                cancelButtonText: '取消',
                closeOnHashChange: false,
                // type: 'warning',
                center: true,
                customClass: 'shopcartPop'
              }
            )
              .then(() => {
                this.$router.push('/shop/affirmorder') //单个选择完后台记录状态，结算按钮就不用调接口
              })
              .catch(() => {})
          } else {
            this.$router.push('/shop/affirmorder')
          }
        })
      } else {
        this.$confirm(
          '您购买了多份课程，支付成功后请前往‘个人中心-兑换码管理’查看生成的兑换码，绑定兑换码后，购买的课程或项目即可观看。',
          {
            confirmButtonText: '去结算',
            cancelButtonText: '取消',
            closeOnHashChange: false,
            // type: 'warning',
            center: true,
            customClass: 'shopcartPop'
          }
        )
          .then(() => {
            this.$router.push('/shop/affirmorder') //单个选择完后台记录状态，结算按钮就不用调接口
          })
          .catch(() => {
            message(this, 'info', '已取消结算！')
          })
        // this.$router.push('/shop/affirmorder')
      }

      // this.showInfo = true
      // this.$router.push('/shop/checkedcourse');
      //this.$router.push('/shop/affirmorder') //单个选择完后台记录状态，结算按钮就不用调接口
      // return new Promise((resolve, reject) => {
      //   home.addChecked(this.addArray).then(res => {
      //     if (res.status === 0) {
      //       this.$router.push('/shop/affirmorder')
      //       // this.shopCartList()
      //     } else {
      //       this.$message({
      //         showClose: true,
      //         type: 'error',
      //         message: res.msg
      //       })
      //     }
      //     resolve(true)
      //   })
      // })
    },
    close() {
      this.showInfo = false
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    handleSelect(item, index) {},
    delNumber() {
      if (this.numForm.number <= 1) {
        this.numForm.number = 1
      } else {
        this.numForm.number--
      }
      this.changeCartNumber()
    },
    addNumber() {
      this.numForm.number++
      this.changeCartNumber()
    },
    // 点击购物车下面加减
    changeNumber() {
      if (!/^[0-9]*$/.test(this.numForm.number) || this.numForm.number < 1) {
        this.numForm.number = 1
      }
      if (
        !/^[0-9]*$/.test(this.numForm.number) ||
        this.numForm.number >= 9999
      ) {
        this.numForm.number = 9999
      }
      this.changeCartNumber()
    },
    // 发送购物车的购买人数
    changeCartNumber() {
      shopcart.changeCartNumber(this.numForm).then(res => {})
    },
    addPaySubmit(formName) {
      this.$router.push('/shop/checkedcourse')
      this.$refs[formName].validate(valid => {
        if (valid) {
          shopcart.addPaySubmit(this.companyInfo).then(response => {
            if (response.status === '100100') {
              message(this, 'error', response.msg)
            } else if (response.status === 0) {
              this.setProductsNum(0)
              this.$bus.$emit('updateCount')

              this.showInfo = false
            }
          })
        } else {
          return false
        }
      })
    },
    // 删除课程  ---- 课程
    handleDeleteCourse(item, index) {
      this.curriculumcartids.cartid = item.id
      this.loding = true

      shopcart.delCourseShopCart(this.curriculumcartids).then(response => {
        message(this, 'success', '删除成功')
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList()
        // this.getNum()
        this.loding = false
      })
    },
    // 删除 项目 ---- 项目
    handleDeleteProject(item, index) {
      this.projectcartids.cartid = item.id
      this.loding = true

      shopcart.delProjectShopCart(this.projectcartids).then(response => {
        message(this, 'success', '删除成功')
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList()
        // this.getNum()
        this.loding = false
      })
    },
    // 全选删除  --- 项目 + 课程
    handleDeleteAll() {
      this.deleteAllData.projectcartid = this.projectAddArray.projectcartid
      this.deleteAllData.curriculumcartid = this.addArray.curriculumcartid
      this.loding = true
      if (
        this.deleteAllData.projectcartid.length === 0 &&
        this.deleteAllData.curriculumcartid.length === 0
      ) {
        message(this, 'info', '请选择要删除的课程/项目')
        this.loding = false
        return false
      }
      shopcart.delAllShopCart(this.deleteAllData).then(response => {
        message(this, 'success', '删除成功')
        // this.handleSelectChange(item, index);
        // this.courseList.splice(index, 1);
        this.shopCartList()
        // this.getNum()
        this.loding = false
      })
    },
    async handleGetCode() {
      if (
        this.companyInfo.phones &&
        /^[1][3,5,6,7,8][0-9]{9}$/.test(this.companyInfo.phones) &&
        this.companyInfo.seconds === 30
      ) {
        if (this.companyInfo.captchaDisable === true) {
          auth.smsCodes(this.companyInfo).then(response => {
            message(
              this,
              response.status === 0 ? 'success' : 'error',
              response.msg
            )
            this.companyInfo.captchaDisable = false
            this.companyInfo.getCode = this.companyInfo.seconds + '秒后重新发送'
            let interval = setInterval(() => {
              if (this.companyInfo.seconds <= 0) {
                this.companyInfo.getCode = '获取验证码'
                this.companyInfo.seconds = 30
                this.companyInfo.captchaDisable = true
                clearInterval(interval)
              } else {
                this.companyInfo.getCode =
                  --this.companyInfo.seconds + '秒后重新发送'
              }
            }, 1000)
          })
        }
      }
    },
    //tableFooter根据页面滚动位置设置定位
    addClass() {
      if (document.getElementById('computedHeight')) {
        var computedHeight = parseInt(
          document.getElementById('computedHeight').offsetTop + 170 //170:computedHeight本身的高、距离固定元素的下边距、header的高以及10px页面小的误差
        )
      }
      this.scroll = parseInt(
        document.documentElement.scrollTop || document.body.scrollTop
      )
      let scrollIns = parseInt(this.scroll + this.windowHeight)

      if (scrollIns > this.tableFooteroffsetTop || scrollIns > computedHeight) {
        this.isFixed = false
      } else {
        this.isFixed = true
      }
    }
  },
  updated() {
    this.index++
    if (this.index === 1 && document.getElementById('tableFooter')) {
      this.tableFooteroffsetTop =
        document.getElementById('tableFooter').offsetTop +
        this.headerHeight +
        10
      if (this.tableFooteroffsetTop > this.windowHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  deactivated() {
    window.removeEventListener('scroll', this.addClass)
  }
}
</script>


