<template>
    <div class="customerProject" @click="documentHandler">
        <div class="title">项目信息</div>
        <div class="content">
            <div class="con-item name clearfix">
                <div class="fl">项目名称：</div>
                <div class="fr">
                    <el-input placeholder=""></el-input>
                    <span class="input-inner">不超过30字</span>
                </div>
            </div>
            <div class="con-item desc clearfix">
                <div class="fl">项目简介：</div>
                <div class="fr">
                    <el-input type="textarea" :rows="3" maxlength="500" placeholder=""></el-input>
                </div>
                <span class="input-inner">不超过500字</span>
            </div>
            <div class="con-item obj clearfix">
                <div class="fl">培训对象：</div>
                <div class="fr">
                    <el-radio v-model="objRadio" label="1">党政/事业单位</el-radio>
                    <el-radio v-model="objRadio" label="2">企业单位</el-radio>
                </div>
            </div>
            <div class="con-item num clearfix">
                <div class="fl">培训人数：</div>
                <div class="fr selectFr">
                    <div @click.stop="handleNumSelect">
                        <el-input placeholder="请选择人数" v-model="trainNum" readonly="true"></el-input>
                        <span class="pull-down">
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                    </div>

                    <div class="pull-down-text" v-if="isShowNumSelect">
                        <ul>
                            <li v-for="(n) in 31" :key="n" @click.stop="chooseNum(n)">{{(n-1)+20}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="con-item style clearfix">
                <div class="fl">培训方式：</div>
                <div class="fr ">
                    <el-radio v-model="styleRadio" label="1">线上</el-radio>
                    <el-radio v-model="styleRadio" label="2">线上+线下</el-radio>
                </div>
            </div>
            <div class="con-item style clearfix" v-if="styleRadio==='2'">
                <div class="fl"></div>
                <div class="fr selectFr">
                    <div @click.stop="handleDaySelect" class="select-con">
                        <span>线下培训天数</span>
                        <el-input placeholder="请选择天数" v-model="trainDay" readonly="true"></el-input>
                        <span class="pull-down">
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                        <span>
                            <span class="price" v-if="objRadio==='1'">60000</span>
                            <span class="price" v-else>80000</span>
                            元/天
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
                                    <el-input placeholder="请选择分类" v-model="trainCollege" readonly="true"></el-input>
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
                                    <el-input placeholder="请选择分类" v-model="trainCourse" readonly="true"></el-input>
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
                                    <el-input placeholder="请选择分类" v-model="trainSearch" readonly="true"></el-input>
                                    <span class="pull-down">
                                        <i class="el-icon-caret-bottom"></i>
                                    </span>
                                </div>
                                <div class="pull-down-text" v-if="isShowSearchSelect">
                                    <ul>
                                        <li v-for="(n) in 31" :key="n" class="clearfix" @click.stop="chooseSearch(n)">
                                            <div class="text">{{n}}</div>

                                            <div class="liChecked">
                                                <input type="checkbox" class="el-checkbox singleCheckbox" ref="checkbox" :id="n">
                                                <label :for="n" class="el-checkbox-label"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="item">
                            <span class="add">确认添加</span>
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
                            <div class="operater">删除</div>
                        </div>
                    </div>
                </div>
                <div class="deatil-item clearfix">
                    <div class="detail-title">课程结算</div>
                    <div class="deTable">
                        <div class="deItem courseItem clearfix" v-for="(item,index) in courseData" :key="index">
                            <div class="courseTitle">{{item.title}}</div>
                            <div class="time">{{item.time}}学时</div>
                            <div class="price">{{item.price}}元</div>
                            <div class="num">x {{item.num}}</div>
                            <div class="total">= {{item.total}}元</div>
                        </div>
                        <div>
                            <p class="discount">
                                <span class="discount-left">9.5折</span>
                                <span>优惠20500元</span>
                            </p>
                            <p class="totalPrice">
                                <span class="totalPrice-left">总计</span>
                                <span>20500元</span>
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
      objRadio: '1',
      styleRadio: '1',
      isShowNumSelect: false,
      isShowDaySelect: false,
      isShowCollegeSelect: false,
      isShowCourseSelect: false,
      isShowSearchSelect: false,
      trainNum: 20,
      trainDay: 1,
      trainCollege: '',
      trainCourse: '',
      trainSearch: '',
      checkedCourseData: [
        {
          title: '抓住用户心里，就能精准运营抓住用户心里',
          time: '10',
          price: '200'
        },
        {
          title: '数据挖掘：理论与算法',
          time: '10',
          price: '200'
        },
        {
          title: '经营决策分析',
          time: '10',
          price: '200'
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
      ]
    }
  },
  methods: {
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
      this.trainNum = val
      this.isShowNumSelect = false
    },
    //选择线下培训天数
    chooseDay(val) {
      this.trainDay = val
      this.isShowDaySelect = false
    },
    //选择学院分类
    chooseCollege(val) {
      this.trainCollege = val
      this.isShowCollegeSelect = false
    },
    //选择课程分类
    chooseCourse(val) {
      this.trainCourse = val
      this.isShowCourseSelect = false
    },
    //选择按课程搜索
    chooseSearch(val) {
      this.trainSearch = val
      this.isShowSearchSelect = true
    },
    documentHandler(e) {
      this.isShowNumSelect = false
      this.isShowDaySelect = false
      this.isShowCollegeSelect = false
      this.isShowCourseSelect = false
      this.isShowSearchSelect = false
    }
  }
}
</script>

