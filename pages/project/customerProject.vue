<template>
  <div class="customerProject" @click="documentHandler">
    <div class="title">项目信息</div>
    <div class="content">
      <div class="con-item name clearfix">
        <div class="fl">项目名称：</div>
        <div class="fr">
          <el-input v-model.trim="projectForm.name" maxlength="30"></el-input>
          <span class="input-inner">不超过30字</span>
        </div>
      </div>
      <div class="con-item desc clearfix">
        <div class="fl">项目简介：</div>
        <div class="fr">
          <el-input type="textarea" v-model="projectForm.desc" :rows="3" maxlength="500" placeholder="" autosize></el-input>
        </div>
        <span class="input-inner">不超过500字</span>
      </div>
      <div class="con-item obj clearfix">
        <div class="fl">培训对象：</div>
        <div class="fr">
          <el-radio v-model="projectForm.objRadio" label="1">党政/事业单位</el-radio>
          <el-radio v-model="projectForm.objRadio" label="2">企业单位</el-radio>
        </div>
      </div>
      <div class="con-item style clearfix">
        <div class="fl">培训方式：</div>
        <div class="fr ">
          <el-radio v-model="projectForm.styleRadio" label="1">线上</el-radio>
          <el-radio v-model="projectForm.styleRadio" label="2">线上+线下</el-radio>
        </div>
      </div>
      <div class="con-item num clearfix">
        <!-- <div class="fl">请选择培训人数区间：</div> -->
        <div class="fl">培训人数：</div>
        <div class="fr selectFr">
          <div class="divClick" @click.stop="handleNumSelect">
            <el-input placeholder="请输入培训人数" v-model="projectForm.trainNum" maxlength="4" @keyup.native="proving"></el-input>
            <!-- <span class="pull-down">
              <i class="el-icon-caret-bottom"></i>
            </span> -->
          </div>

          <!-- <div class="pull-down-text" v-if="isShowNumSelect">
            <ul>
              <li v-for="(n) in (maxNum-minNum+1)" :key="n" @click.stop="chooseNum((n-1)+minNum)">{{(n-1)+minNum}}</li>
            </ul>
          </div> -->
        </div>
      </div>
      <!-- <div class="con-item name clearfix">
        <div class="fl">请输入具体人数：</div>
        <div class="fr">
          <el-input v-model.trim="projectForm.name" placeholder="请输入1-9999的数字"></el-input>
        </div>
      </div> -->
      <div class="con-item style day clearfix" v-if="projectForm.styleRadio==='2'">
        <div class="fl">线下培训天数：</div>
        <div class="fr selectFr">
          <div class="select-con ">
            <div class="divClick">
              <span @click.stop="handleDaySelect">
                <el-input placeholder="请选择天数" v-model="projectForm.trainDay" readonly="true"></el-input>
              </span>
              <span class="pull-down">
                <i class="el-icon-caret-bottom"></i>
              </span>
            </div>
            <span>
              <span class="price">{{projectForm.offlinePrice}}</span>元/天
              <i class="el-icon-question priceAsk"></i>
            </span>
          </div>
          <div class="descript">

          </div>

          <div class="pull-down-text" v-if="isShowDaySelect">
            <ul>
              <li v-for="(n) in maxDays" :key="n" @click.stop="chooseDay(n)">{{n}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con-detail">
        <div class="deatil-item clearfix">
          <div class="detail-title">选择线上课程</div>
          <div class="itemCon">
            <div class="item clearfix">
              <div class="fl">学院分类：</div>
              <div class="fr selectFr">
                <div @click.stop="handleCollegeSelect">
                  <el-input placeholder="请选择分类" v-model="projectForm.trainCollege" readonly="true"></el-input>
                  <span class="pull-down">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                </div>
                <div class="pull-down-text" v-if="isShowCollegeSelect">
                  <ul>
                    <li v-for="(item,index) in CategoryListData" :key="index" @click.stop="chooseCollege(item)">{{item.category_name}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item clearfix">
              <div class="fl">课程分类：</div>
              <div class="fr selectFr">
                <div @click.stop="handleCourseSelect">
                  <el-input placeholder="请选择分类" v-model="projectForm.trainCourse" readonly="true"></el-input>
                  <span class="pull-down">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                </div>

                <div class="pull-down-text" v-if="isShowCourseSelect">
                  <ul v-if="courseCategoryData.length !=0">
                    <li v-for=" (course,index) in courseCategoryData " :key="index " @click.stop="chooseCourse(course) ">{{course.category_name}}</li>
                  </ul>
                  <p v-else>请先选择学院分类</p>
                </div>
              </div>
            </div>
          </div>
          <div class="itemCon ">
            <div class="item clearfix ">
              <div class="fl ">按课程搜索：</div>
              <div class="fr selectFr ">
                <div @click.stop="handleSearchSelect ">
                  <el-input placeholder="请选择分类 " v-model="projectForm.trainSearch " readonly="true"></el-input>
                  <span class="pull-down ">
                    <i class="el-icon-caret-bottom "></i>
                  </span>
                </div>
                <div class="pull-down-text " v-if="isShowSearchSelect">
                  <div>
                    <div class="search " @click.stop="handleFocus ">
                      <input placeholder="请输入搜索内容" v-model="searchInput" type="text" v-on:input="handleSearchChange(searchInput)">
                      <i class="el-icon-search "></i>
                    </div>
                    <ul v-if="searchCourseData.length!=0">
                      <li v-for="(item,index) in searchCourseData " :key="index " class="clearfix ">
                        <div class="liChecked" @click.stop="chooseSearch(item) ">
                          <input type="checkbox" v-model="item.checked" class="item-checkbox " ref="checkbox " :id="item.id " @click.stop="chooseSearchInput ">
                          <label :for="item.id " class="item-checkbox-label ">{{item.title}}</label>
                        </div>
                      </li>
                    </ul>
                    <p v-else>暂无课程</p>
                  </div>

                </div>
              </div>

            </div>
            <div class="item ">
              <span class="add" :class="{active:chooseCourseData.length}" @click="addChooseCourse ">确认添加</span>
            </div>

          </div>
        </div>
        <div class="deatil-item clearfix ">
          <div class="detail-title ">已选课程</div>
          <div class="deTable " v-if="checkedCourseData.length !=0 ">
            <div class="deItem clearfix " v-for="(item,index) in checkedCourseData " :key="index ">
              <div class="courseTitle ">{{item.title}}</div>
              <div class="time ">{{item.study_time}}学时</div>
              <div class="price ">{{item.present_price}}元</div>
              <div class="operater " @click="deleteChooseCourse(index) ">删除</div>
            </div>
          </div>
        </div>
        <div class="deatil-item clearfix ">
          <div class="detail-title ">课程结算</div>
          <div class="deTable ">
            <!-- 线上课程 -->
            <div class="deItem courseItem clearfix ">
              <div class="courseTitle ">线上课程</div>
              <div class="time ">{{projectForm.onlineTime}}学时</div>
              <div class="price ">{{projectForm.onlinePrice.toFixed(2)}}元/人</div>
              <div class="num ">x {{projectForm.trainNum}}人</div>
              <div class="total ">= {{onlineTotalPrice.toFixed(2)}}元</div>
            </div>
            <!-- 线下课程（培训方式为线上+线上显示） -->
            <div class="deItem courseItem clearfix " v-if="projectForm.styleRadio==='2' ">
              <div class="courseTitle ">线下课程</div>
              <div class="time ">{{projectForm.trainDay*offlineRangeTime}}学时</div>
              <div class="price ">{{projectForm.offlinePrice}}元/天</div>
              <div class="num ">x {{projectForm.trainDay}}天</div>
              <div class="total ">= {{offlineTotalPrice.toFixed(2)}}元</div>
            </div>
            <div>
              <p class="discount " v-if="discount !='1'">
                <span class="discount-left ">{{discount*10}}折</span>
                <span>优惠{{discountPrice.toFixed(2)}}元</span>
              </p>
              <p class="totalPrice ">
                <span class="totalPrice-left ">总计</span>
                <span :data="totalPrice ">{{projectForm.projectPrice}}元</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="btns ">
        <span class="btn save active " @click="saveProject(1) ">保存</span>
        <span class="btn buy " @click="saveProject(2)">立即购买</span>
      </div>
    </div>
  </div>
</template>


<script>
import { customerProject } from '@/lib/v1_sdk/index'
import { Trim, message, matchSplits } from '~/lib/util/helper'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isClick: false,
      searchInput: '',
      isShowNumSelect: false,
      isShowDaySelect: false,
      isShowCollegeSelect: false,
      isShowCourseSelect: false,
      isShowSearchSelect: false,
      minNum: 0, //最小培训人数
      maxNum: 0, //最大培训人数
      maxDays: 0, //最大培训天数
      offlineRangeTime: 0, //线下课时
      offlineCount1: 0, //党政事业线下每天培训费用
      offlineCount2: 0, //企业单位线下每天培训费用
      discount: 0, //折扣
      chooseCourseData: [], //课程搜索下拉多选列表
      searchCourseData: [], //课程搜索
      checkedCourseData: [], //已选课程
      CategoryListData: [], //学院分类
      courseCategoryData: [], //课程分类
      one: '', //党政线下培训天数区间对应各费用
      two: '', //企业线下培训天数区间对应各费用
      reuseData: [],
      searchCourseForm: {
        first_ID: '',
        second_ID: ''
      },
      gidForm: {
        gids: null
      },
      projectForm: {
        type: '', //新增/编辑
        customerID: '', //项目ID (编辑)
        name: '', //项目名称
        desc: '', //项目简介
        objRadio: '1', //培训对象
        trainNum: '', //培训人数
        styleRadio: '1', //培训方式
        trainDay: '', //线下培训天数
        trainCollege: '', //学院分类
        trainCourse: '', //课程分类
        trainSearch: '', //课程搜索
        onlineTime: 0, //课程结算-线上课程总学时
        onlinePrice: 0, //课程结算-线上课程价钱
        onlineTotalPrice: '', //课程结算-线上课程总价钱
        offlinePrice: '', //线下培训费用
        offlineTotalPrice: '', //课程结算-线上课程总价钱
        discountPrice: 0, //优惠价钱
        totalPrice: 0, //项目总价钱
        projectPrice: 0, //项目优惠后的价钱
        checkedCourse: []
      }
    }
  },
  computed: {
    //计算线下课程总价钱
    offlineTotalPrice() {
      this.projectForm.offlineTotalPrice =
        this.projectForm.offlinePrice * this.projectForm.trainDay
      return this.projectForm.offlineTotalPrice
    },
    //计算线上课程总价钱
    onlineTotalPrice() {
      this.projectForm.onlineTotalPrice =
        this.projectForm.onlinePrice * this.projectForm.trainNum
      return this.projectForm.onlineTotalPrice
    },
    //计算自定制项目总价钱
    totalPrice() {
      if (this.projectForm.styleRadio === '2') {
        //线上+线下
        this.projectForm.totalPrice =
          this.projectForm.offlineTotalPrice + this.projectForm.onlineTotalPrice
        this.projectForm.projectPrice = (
          this.projectForm.totalPrice - this.projectForm.discountPrice
        ).toFixed(2)
      } else {
        //线上
        this.projectForm.totalPrice = this.projectForm.onlineTotalPrice
        this.projectForm.projectPrice = (
          this.projectForm.totalPrice - this.projectForm.discountPrice
        ).toFixed(2)
      }

      return this.projectForm.totalPrice
    },
    //计算自定制项目的优惠价钱
    discountPrice() {
      this.projectForm.discountPrice =
        this.projectForm.totalPrice * (1 - this.discount).toFixed(2)
      return this.projectForm.discountPrice
    }
  },
  methods: {
    ...mapActions('auth', ['setGid']),
    proving() {
      this.projectForm.trainNum = this.projectForm.trainNum.replace(
        /[^\.\d]/g,
        ''
      )
      this.projectForm.trainNum = this.projectForm.trainNum.replace('.', '')
    },
    //定制项目模式信息
    customerInfo() {
      customerProject.customerInfo().then(response => {
        let result = response.data
        this.minNum = result.min_study_person_number //最小培训人数
        this.maxNum = result.max_study_person_number //最大培训人数
        this.maxDays = result.max_study_days //最大培训天数
        this.offlineRangeTime = result.offline_oneday_time //线下课时
        // this.offlineCount1 = result.study_object_cost_amount_one //党政事业线下每天培训费用
        // this.offlineCount2 = result.study_object_cost_amount_two //企业单位线下每天培训费用
        this.discount = result.discount //折扣

        this.one = result.study_object_cost_amount_one
        this.two = result.study_object_cost_amount_two
      })
    },
    //搜索
    handleSearchChange(val) {
      var len = this.reuseData.length
      var arr = []
      var reg = new RegExp(val)
      if (val === '') {
        arr = this.reuseData
      } else {
        for (var i = 0; i < len; i++) {
          //如果字符串中不包含目标字符会返回-1
          if (this.reuseData[i].title.match(reg)) {
            arr.push(this.reuseData[i])
          }
        }
      }

      this.searchCourseData = []
      arr.forEach(item => {
        this.searchCourseData.push(item)
      })
    },
    //保存
    saveProject(type) {
      if (this.isClick) {
        return false
      }
      this.isClick = true
      this.projectForm.checkedCourse = []
      this.checkedCourseData.forEach((item, index) => {
        this.projectForm.checkedCourse.push(item.id)
      })
      try {
        if (Trim(this.projectForm.name) === '') throw '请填写项目名称'
        if (Trim(this.projectForm.desc) === '') throw '请填写项目简介'
        if (this.projectForm.objRadio === '') throw '请选择培训对象'
        if (this.projectForm.trainNum === '') throw '请选择培训人数'
        if (this.projectForm.styleRadio === '') throw '请选择培训方式'
        if (
          this.projectForm.styleRadio === '2' &&
          this.projectForm.trainDay === ''
        ) {
          throw '请选择线下培训天数'
        }

        if (this.projectForm.type === '1') {
          //保存操作才验证
          if (this.projectForm.trainCollege === '') {
            throw '请选择学院分类'
          }
          if (this.projectForm.trainCourse === '') {
            throw '请选择课程分类'
          }
        }

        if (this.projectForm.checkedCourse.length === 0) {
          throw '请添加课程'
        }
      } catch (err) {
        message(this, 'error', err)
        return false
      }

      //线上课程，线下培训天数参数置空
      if (this.projectForm.styleRadio === '2') {
        this.projectForm.trainDay = this.projectForm.trainDay
      } else {
        this.projectForm.trainDay = ''
      }

      customerProject.createProject(this.projectForm).then(response => {
        this.isClick = false
        if (response.status == 0) {
          if (this.projectForm.type === '1') {
            message(this, 'success', '创建成功')
          } else {
            message(this, 'success', '修改成功')
          }
          if (type === 1) {
            //保存跳转个人中心定制项目
            this.gidForm.gids = 'tab-nine'
            this.setGid(this.gidForm)
            this.$router.push('/profile')
            this.$bus.$emit('selectProfileIndex', 'tab-nine')
          } else {
            //立即购买跳转确认订单
            this.$router.push({
              path: '/shop/affirmorder',
              query: { id: response.data.curriculum_project_id }
            })
          }
        } else {
          message(this, 'error', response.msg)
        }
      })
    },
    //学院/课程分类
    CategoryList() {
      customerProject.CategoryList().then(response => {
        this.CategoryListData = response.data.categoryList
      })
    },
    //添加已选课程
    addChooseCourse() {
      this.chooseCourseData.forEach((item, index) => {
        this.checkedCourseData.push(item)
      })

      //数组去重
      let obj = {}
      this.checkedCourseData = this.checkedCourseData.reduce((cur, next) => {
        obj[next.id] ? '' : (obj[next.id] = true && cur.push(next))
        return cur
      }, []) //设置cur默认类型为数组，并且初始值为空的数组
      this.projectForm.onlineTime = 0
      this.projectForm.onlinePrice = 0

      //重新计算去重后数组
      this.courseComputed()
    },
    //删除已选课程
    deleteChooseCourse(index) {
      this.checkedCourseData.splice(index, 1)
      this.computedPrice()
    },
    //课程结算
    courseComputed() {
      this.checkedCourseData.forEach((n, index) => {
        this.projectForm.onlineTime += Number(n.study_time)
        this.projectForm.onlinePrice += Number(n.present_price)
      })
    },
    handleFocus() {
      this.isShowSearchSelect = true
    },
    //培训人数-下拉
    handleNumSelect() {
      this.isShowNumSelect = !this.isShowNumSelect
      this.isShowDaySelect = false
      this.isShowCollegeSelect = false
      this.isShowCourseSelect = false
      this.isShowSearchSelect = false
    },
    //线下培训天数-下拉
    handleDaySelect() {
      this.isShowDaySelect = !this.isShowDaySelect
      this.isShowNumSelect = false
      this.isShowCollegeSelect = false
      this.isShowCourseSelect = false
      this.isShowSearchSelect = false
    },
    //学院分类-下拉
    handleCollegeSelect() {
      this.isShowCollegeSelect = !this.isShowCollegeSelect
      this.isShowNumSelect = false
      this.isShowDaySelect = false
      this.isShowCourseSelect = false
      this.isShowSearchSelect = false
    },
    //课程分类-下拉
    handleCourseSelect() {
      this.isShowCourseSelect = !this.isShowCourseSelect
      this.isShowNumSelect = false
      this.isShowDaySelect = false
      this.isShowCollegeSelect = false
      this.isShowSearchSelect = false
    },
    //按课程搜索-下拉
    handleSearchSelect() {
      this.isShowSearchSelect = !this.isShowSearchSelect
      this.isShowNumSelect = false
      this.isShowDaySelect = false
      this.isShowCollegeSelect = false
      this.isShowCourseSelect = false

      this.searchCourseData.forEach((item, index) => {
        this.chooseCourseData.forEach(course => {
          if (course.id === item.id) {
            this.searchCourseData[index].checked = true
          }
        })
      })
    },
    //选择培训人数
    chooseNum(val) {
      this.projectForm.trainNum = val
      this.isShowNumSelect = false
    },
    //选择线下培训天数
    chooseDay(val) {
      this.projectForm.trainDay = val
      this.isShowDaySelect = false
    },
    //选择学院分类
    chooseCollege(val) {
      this.searchCourseData = [] //切换清空
      this.projectForm.trainCollege = val.category_name
      this.searchCourseForm.first_ID = val.id
      this.courseCategoryData = val.childList
      this.projectForm.trainCourse = ''
      this.isShowCollegeSelect = false
    },
    //选择课程分类
    chooseCourse(val) {
      this.chooseCourseData = []
      this.projectForm.trainSearch = ''
      this.projectForm.trainCourse = val.category_name
      this.searchCourseForm.second_ID = val.id
      this.isShowCourseSelect = false
      this.searchCourse()
    },
    //课程搜索
    searchCourse() {
      customerProject.searchCourse(this.searchCourseForm).then(response => {
        this.searchCourseData = response.data.curriculumList
        this.reuseData = response.data.curriculumList
        this.searchCourseData.forEach((item, index) => {
          this.searchCourseData[index].checked = false
        })
      })
    },
    //选择按课程搜索
    chooseSearch(item) {
      let arrIndex
      this.chooseCourseData.forEach((n, index) => {
        if (n.id === item.id) {
          arrIndex = index
        }
      })

      this.isShowSearchSelect = true
      if (arrIndex >= 0) {
        //未选中
        this.chooseCourseData.splice(arrIndex, 1)
      } else {
        //选中
        this.chooseCourseData.push(item)
      }
    },
    //选择按课程搜索，阻止点击li时，label触发两次
    chooseSearchInput(e) {
      e.stopPropagation()
    },
    //获取编辑状态信息
    getCustomerProjectInfo() {
      customerProject
        .getCustomerProjectInfo(this.projectForm)
        .then(response => {
          let data = response.data.curriculumProjectDetail
          this.projectForm.name = data.title //项目标题
          this.projectForm.desc = data.introduction //项目简介
          this.projectForm.styleRadio = data.study_type //培训方式
          this.checkedCourseData = data.curriculumList //已选课程
          this.projectForm.trainDay = data.offline_days //线下培训天数
          this.projectForm.trainNum = data.study_persion_number //培训人数
          this.projectForm.objRadio = data.study_object //培训对象
          this.courseComputed()
        })
    },
    documentHandler(e) {
      this.isShowNumSelect = false
      this.isShowDaySelect = false
      this.isShowCollegeSelect = false
      this.isShowCourseSelect = false
      this.isShowSearchSelect = false
    },
    computedPrice() {
      //初始化
      this.projectForm.onlineTime = 0
      this.projectForm.onlinePrice = 0
      this.courseComputed()
    },
    computedNum() {
      let num = this.projectForm.trainNum
      if (this.projectForm.objRadio === '1') {
        //党政
        if (num > 0 && num <= 50) {
          this.projectForm.offlinePrice = this.one.number_50
        } else if (num > 50 && num <= 80) {
          this.projectForm.offlinePrice = this.one.number_80
        } else if (num > 80 && num <= 100) {
          this.projectForm.offlinePrice = this.one.number_100
        } else if (num > 100) {
          this.projectForm.offlinePrice = this.one.number_more
        } else {
          this.projectForm.offlinePrice = ''
        }
      } else {
        //企业
        if (num > 0 && num <= 50) {
          this.projectForm.offlinePrice = this.two.number_50
        } else if (num > 50 && num <= 80) {
          this.projectForm.offlinePrice = this.two.number_80
        } else if (num > 80 && num <= 100) {
          this.projectForm.offlinePrice = this.two.number_100
        } else if (num > 100) {
          this.projectForm.offlinePrice = this.two.number_more
        } else {
          this.projectForm.offlinePrice = ''
        }
      }
    },
    init() {
      this.customerInfo()
      this.computedPrice()
      this.CategoryList()
      this.projectForm.customerID = matchSplits('sid')
      this.projectForm.type = matchSplits('edit')
      if (this.projectForm.type === '2') {
        //1:新增 2:编辑
        this.getCustomerProjectInfo()
      }
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    chooseCourseData(val) {
      this.projectForm.trainSearch = ''
      val.forEach((n, index) => {
        if (val.length == 1) {
          this.projectForm.trainSearch += n.title
        } else {
          this.projectForm.trainSearch += n.title + ','
        }
      })
    },
    //培训对象 --线下课程费用
    'projectForm.objRadio'(val) {
      this.computedNum()
      // if (val === '1') {
      //   this.projectForm.offlinePrice = this.offlineCount1
      // } else {
      //   this.projectForm.offlinePrice = this.offlineCount2
      // }
    },
    'projectForm.trainNum'(val) {
      this.computedNum()
    }
  }
}
</script>

