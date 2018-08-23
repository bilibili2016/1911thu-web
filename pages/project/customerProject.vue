<template>
    <div class="customerProject" @click="documentHandler">
        <div class="title">项目信息</div>
        <div class="content">
            <div class="con-item name clearfix">
                <div class="fl">项目名称：</div>
                <div class="fr">
                    <el-input v-model="projectForm.name"></el-input>
                    <span class="input-inner">不超过30字</span>
                </div>
            </div>
            <div class="con-item desc clearfix">
                <div class="fl">项目简介：</div>
                <div class="fr">
                    <el-input type="textarea" v-model="projectForm.desc" :rows="3" maxlength="500" placeholder=""></el-input>
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
            <div class="con-item num clearfix">
                <div class="fl">培训人数：</div>
                <div class="fr selectFr">
                    <div @click.stop="handleNumSelect">
                        <el-input placeholder="请选择人数" v-model="projectForm.trainNum" readonly="true"></el-input>
                        <span class="pull-down">
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                    </div>

                    <div class="pull-down-text" v-if="isShowNumSelect">
                        <ul>
                            <li v-for="(n) in 31" :key="n" @click.stop="chooseNum((n-1)+20)">{{(n-1)+20}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="con-item style clearfix">
                <div class="fl">培训方式：</div>
                <div class="fr ">
                    <el-radio v-model="projectForm.styleRadio" label="1">线上</el-radio>
                    <el-radio v-model="projectForm.styleRadio" label="2">线上+线下</el-radio>
                </div>
            </div>
            <div class="con-item style day clearfix" v-if="projectForm.styleRadio==='2'">
                <div class="fl"></div>
                <div class="fr selectFr">
                    <div @click.stop="handleDaySelect" class="select-con">
                        <span>线下培训天数</span>
                        <el-input placeholder="请选择天数" v-model="projectForm.trainDay" readonly="true"></el-input>
                        <span class="pull-down">
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                        <span>
                            <span class="price">{{projectForm.offlinePrice}}</span>元/天
                        </span>
                    </div>

                    <div class="pull-down-text" v-if="isShowDaySelect">
                        <ul>
                            <li v-for="(n) in 15" :key="n" @click.stop="chooseDay(n)">{{n}}</li>
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
                                        <li v-for="(n) in 31" :key="n" @click.stop="chooseCollege(n)">{{n}}</li>
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
                                    <ul>
                                        <li v-for="(n) in 31" :key="n" @click.stop="chooseCourse(n)">{{n}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="itemCon">
                        <div class="item clearfix">
                            <div class="fl">按课程搜索：</div>
                            <div class="fr selectFr">
                                <div @click.stop="handleSearchSelect">
                                    <el-input placeholder="请选择分类" v-model="projectForm.trainSearch" readonly="true"></el-input>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                                <div class="pull-down-text" v-if="isShowSearchSelect">
                                    <div class="search" @click.stop="handleFocus">
                                        <el-input placeholder="请输入搜索内容"></el-input>
                                        <i class="el-icon-search"></i>
                                    </div>
                                    <ul>
                                        <li v-for="(item,index) in searchCourseData" :key="index" class="clearfix" @click.stop="chooseSearch(item)">
                                            <div class="liChecked">
                                                <input type="checkbox" class="el-checkbox" ref="checkbox" :id="item.id" @click.stop="chooseSearchInput">
                                                <label :for="item.id" class="el-checkbox-label">{{item.title}}</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="item">
                            <span class="add" @click="addChooseCourse">确认添加</span>
                        </div>

                    </div>
                </div>
                <div class="deatil-item clearfix">
                    <div class="detail-title">已选课程</div>
                    <div class="deTable">
                        <div class="deItem clearfix" v-for="(item,index) in checkedCourseData" :key="index">
                            <div class="courseTitle">{{item.title}}</div>
                            <div class="time">{{item.time}}学时</div>
                            <div class="price">{{item.price}}元</div>
                            <div class="operater" @click="deleteChooseCourse(index)">删除</div>
                        </div>
                    </div>
                </div>
                <div class="deatil-item clearfix">
                    <div class="detail-title">课程结算</div>
                    <div class="deTable">
                        <!-- 线上课程 -->
                        <div class="deItem courseItem clearfix">
                            <div class="courseTitle">线上课程</div>
                            <div class="time">{{projectForm.onlineTime}}学时</div>
                            <div class="price">{{projectForm.onlinePrice}}元/人</div>
                            <div class="num">x {{projectForm.trainNum}}人</div>
                            <div class="total">= {{onlineTotalPrice}}元</div>
                        </div>
                        <!-- 线下课程（培训方式为线上+线上显示） -->
                        <div class="deItem courseItem clearfix" v-if="projectForm.styleRadio==='2'">
                            <div class="courseTitle">线下课程</div>
                            <div class="time">{{projectForm.trainDay*8}}学时</div>
                            <div class="price">{{projectForm.offlinePrice}}元/天</div>
                            <div class="num">x {{projectForm.trainDay}}天</div>
                            <div class="total">= {{offlineTotalPrice}}元</div>
                        </div>
                        <div>
                            <p class="discount">
                                <span class="discount-left">9.5折</span>
                                <span>优惠{{discountPrice}}元</span>
                            </p>
                            <p class="totalPrice">
                                <span class="totalPrice-left">总计</span>
                                <span>{{totalPrice}}元</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
                <span class="btn save active">保存</span>
                <span class="btn buy">立即购买</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      isShowNumSelect: false,
      isShowDaySelect: false,
      isShowCollegeSelect: false,
      isShowCourseSelect: false,
      isShowSearchSelect: false,
      chooseCourseData: [],
      searchCourseData: [
        {
          title: '抓住用户心里，就能精准运营抓住用户心里',
          time: '10',
          price: '200',
          id: 1
        },
        {
          title: '数据挖掘：理论与算法',
          time: '10',
          price: '200',
          id: 2
        },
        {
          title: '经营决策分析',
          time: '10',
          price: '200',
          id: 3
        }
      ],
      checkedCourseData: [
        {
          title: '抓住用户心里，就能精准运营抓住用户心里',
          time: 100,
          price: 100,
          id: 1
        },
        {
          title: '数据挖掘：理论与算法',
          time: 20,
          price: 200,
          id: 2
        },
        {
          title: '经营决策分析',
          time: 30,
          price: 300,
          id: 3
        }
      ],
      courseData: [
        {
          title: '线下课程',
          time: '30',
          price: '200',
          num: '20人',
          total: '4000'
        },
        {
          title: '线上课程',
          time: '30',
          price: '200',
          num: '20人',
          total: '4000'
        }
      ],
      projectForm: {
        name: '', //项目名称
        desc: '', //项目简介
        objRadio: '1', //培训对象
        trainNum: 20, //培训人数
        styleRadio: '1', //培训方式
        trainDay: 1, //线下培训天数
        trainCollege: '', //学院分类
        trainCourse: '', //课程分类
        trainSearch: '', //课程搜索
        onlineTime: 0, //课程结算-线上课程总学时
        onlinePrice: 0, //课程结算-线上课程价钱
        onlineTotalPrice: '', //课程结算-线上课程总价钱
        offlinePrice: 60000, //线下培训费用
        offlineTotalPrice: '', //课程结算-线上课程总价钱
        discountPrice: 0, //优惠价钱
        totalPrice: 0 //项目总价钱
      },
      offlinePrice: 0,
      onlinePrice: 0
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
      this.projectForm.totalPrice =
        this.projectForm.offlineTotalPrice + this.projectForm.onlineTotalPrice
      return this.projectForm.totalPrice
    },
    //计算自定制项目的优惠价钱（9.5折）
    discountPrice() {
      this.projectForm.discountPrice =
        this.projectForm.totalPrice * (1 - 0.95).toFixed(2)
      return this.projectForm.discountPrice
    }
  },
  methods: {
    //添加已选课程
    addChooseCourse() {
      //   this.checkedCourseData = this.chooseCourseData
    },
    //删除已选课程
    deleteChooseCourse(index) {
      this.checkedCourseData.splice(index, 1)
      console.log(this.checkedCourseData)

      this.computedPrice()
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
      this.projectForm.trainCollege = val
      this.isShowCollegeSelect = false
    },
    //选择课程分类
    chooseCourse(val) {
      this.projectForm.trainCourse = val
      this.isShowCourseSelect = false
    },
    //选择按课程搜索，阻止点击li时，label触发两次
    chooseSearchInput(e) {
      e.stopPropagation()
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
      this.checkedCourseData.forEach((n, index) => {
        this.projectForm.onlineTime += Number(n.time)
        this.projectForm.onlinePrice += Number(n.price)
      })
    }
  },
  mounted() {
    this.computedPrice()
  },
  watch: {
    chooseCourseData(val) {
      this.projectForm.trainSearch = ''
      val.forEach((n, index) => {
        this.projectForm.trainSearch += n.title + ','
      })
    },
    //培训对象 --线下课程费用
    'projectForm.objRadio'(val) {
      if (val === '1') {
        //党政
        this.projectForm.offlinePrice = 60000
      } else {
        //企业
        this.projectForm.offlinePrice = 80000
      }
    }
  }
}
</script>

