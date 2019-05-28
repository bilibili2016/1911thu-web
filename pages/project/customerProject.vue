<template>
  <div class="customerProject" @click="documentHandler">
    <div class="banner-cus">
      <div class="con">
        <div class="con-text">
          <div class="text-one">1911学堂可为您所在单位提供量身定制的内部培训项目。</div>
          <div class="text-two">贵单位可在学堂自行选择在线学院，并提出线下学习具体的内容需求，形成定制式、个性化、针对性的人才培养规划及培训项目设置方案。</div>
          <div class="text-three">支付完成后，自定制项目即时生效。</div>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="pro-title">自定制流程</div>
      <div class="pro-step clearfix">
        <span class="step">1.填写项目定制信息</span>
        <span class="arrow">
          <img :src="imgUlr" alt>
        </span>
        <span class="step">2.立即购买</span>
        <span class="arrow">
          <img :src="imgUlr" alt>
        </span>
        <span class="step">3.支付</span>
        <span class="arrow">
          <img :src="imgUlr" alt>
        </span>
        <span class="step step4">4.直接学习或绑定兑换码后学习</span>
      </div>
      <div class="pro-text">自定制项目是您所在单位的专属项目，不对其他单位展示。除项目定制者之外，其余人员需绑定兑换码才能观看项目。如有任何问题，请拨打咨询电话：18516821911</div>
    </div>
    <div class="title">项目信息</div>
    <div class="content">
      <div class="con-item name clearfix">
        <div class="fl">项目名称：</div>
        <div class="fr">
          <el-input v-model.trim="projectForm.name" maxlength="30" placeholder="请输入项目名称"></el-input>
          <span class="input-inner">还可以输入{{nameLength}}字</span>
        </div>
      </div>
      <div class="con-item desc clearfix">
        <div class="fl">项目简介：</div>
        <div class="fr">
          <el-input type="textarea" v-model.trim="projectForm.desc" :rows="3" maxlength="500" placeholder="请输入项目简介" autosize></el-input>
        </div>
        <span class="input-inner">还可以输入{{descLength}}字</span>
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
        <div class="fr">
          <!-- <el-radio v-model="projectForm.styleRadio" label="1">线上</el-radio> -->
          <el-radio v-model="projectForm.styleRadio" label="2">混合式</el-radio>
          <!-- <el-radio v-model="projectForm.styleRadio" label="3">互动</el-radio> -->
          <i class="el-icon-question styleAsk">
            <div class="descript-text">
              <div>
                <!-- <p>纯线上：完全在线学习</p> -->
                <p>混合式：线上+线下</p>
                <!-- <p>互动式：线下为主，线上为辅</p>  -->
              </div>
            </div>
          </i>
        </div>
      </div>
      <div class="con-item num clearfix">
        <div class="fl">培训人数：</div>
        <div class="fr selectFr">
          <div class="divClick" @click.stop="handleNumSelect">
            <el-input placeholder="请输入1-200的数字" v-model="projectForm.trainNum" maxlength="3" @keyup.native="proving"></el-input>
          </div>
        </div>
      </div>
      <div class="con-item style day clearfix" v-if="projectForm.styleRadio!=='1'">
        <div class="fl">线下培训天数：</div>
        <div class="fr selectFr">
          <div class="select-con">
            <div class="divClick" @click.stop="handleDaySelect">
              <span>
                <el-input placeholder="请选择天数" v-model="projectForm.trainDay" readonly></el-input>
              </span>
              <span class="pull-down">
                <i class="el-icon-caret-bottom"></i>
              </span>
            </div>
            <span>
              <span class="price">{{projectForm.offlinePrice}}</span>元/天
              <i class="el-icon-question priceAsk" @click.stop="handledesc">
                <div class="descript-text">
                  <div v-if="projectForm.objRadio == '1'">
                    <p>
                      <span>1-50人：</span>
                      <span>{{one.number_50}}</span>元/天
                    </p>
                    <p>
                      <span>51-80人：</span>
                      <span>{{one.number_80}}</span>元/天
                    </p>
                    <p>
                      <span>81-100人：</span>
                      <span>{{one.number_100}}</span>元/天
                    </p>
                    <p>
                      <span>100人以上：</span>
                      <span>{{one.number_more}}</span>元/天，具体费用请与工作人员联系
                    </p>
                  </div>
                  <div v-else>
                    <p>
                      <span>1-50人：</span>
                      <span>{{two.number_50}}</span>元/天
                    </p>
                    <p>
                      <span>51-80人：</span>
                      <span>{{two.number_80}}</span>元/天
                    </p>
                    <p>
                      <span>81-100人：</span>
                      <span>{{two.number_100}}</span>元/天
                    </p>
                    <p>
                      <span>100人以上：</span>
                      <span>{{two.number_more}}</span>元/天，具体费用请与工作人员联系
                    </p>
                  </div>
                </div>
              </i>
            </span>
          </div>
          <div class="pull-down-text" v-if="isShowDaySelect">
            <ul>
              <li v-for="(item,index) in maxDays" :key="index" @click.stop="chooseDay(item)">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con-detail">
        <div class="deatil-item clearfix">
          <div class="detail-title">选择学院</div>
          <div class="itemCon courseSearch">
            <div class="item clearfix">
              <div class="fl">学院分类：</div>
              <div class="fr selectFr">
                <div @click.stop="handleSearchSelect ">
                  <el-input placeholder="请选择学院分类 " v-model="projectForm.trainSearch " readonly></el-input>
                  <span class="pull-down">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <div class="pull-down-text" v-if="isShowSearchSelect">
                    <div>
                      <ul>
                        <li v-for="(item,index) in CategoryListData " :key="index " class="clearfix">
                          <div class="liChecked">
                            <input type="checkbox" v-model="item.checked" class="item-checkbox" ref="checkbox" :id="item.id">
                            <label :for="item.id " class="item-checkbox-label"  @click="chooseSearchInput(item) ">{{item.title}}</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="item">
              <span class="add" :class="{active:checkedCourseData.length}" @click="addChooseCourse ">确认添加</span>
            </div> -->
          </div>
        </div>
        <div class="deatil-item clearfix" v-if="checkedCourseData.length !=0 ">
          <div class="detail-title">已选学院</div>
          <div class="deTable">
            <div class="deItem clearfix" v-for="(item,index) in checkedCourseData " :key="index ">
              <div class="courseTitle">{{item.title}}</div>
              <!-- <div class="time ">{{item.study_time}}学时</div> -->
              <div class="price" v-if="item.is_free=='2'">0元</div>
              <div class="price" v-else>{{item.present_price}}元</div>
              <div class="operater">
                <span @click="deleteChooseCourse(index) ">删除</span>
              </div>
            </div>
          </div>
        </div>
        <div class="deatil-item clearfix">
          <div class="detail-title">金额结算</div>
          <div class="deTable">
            <div class="deItem courseItem clearfix" v-for="(item,index) in checkedCourseData " :key="index ">
              <div class="courseTitle">{{item.title}}</div>
              <div class="time"></div>
              <div class="price">{{item.present_price}}元/人</div>
              <div class="num">x {{projectForm.trainNum}}人</div>
              <div class="total" :data="onlineTotalPrice">= {{item.present_price*projectForm.trainNum}}元</div>
            </div>
            <!-- 线下课程（培训方式为线上+线上显示） -->
            <div class="deItem courseItem clearfix" v-if="projectForm.styleRadio!=='1' ">
              <div class="courseTitle">线下课程</div>
              <div class="time">{{projectForm.trainDay*offlineRangeTime}}学时</div>
              <div class="price">{{projectForm.offlinePrice}}元/天</div>
              <div class="num">x {{projectForm.trainDay}}天</div>
              <div class="total">= {{offlineTotalPrice.toFixed(2)}}元</div>
            </div>
            <div>
              <p class="discount" v-if="discount !='1'">
                <span class="discount-left">{{discount*10}}折</span>
                <span>优惠{{discountPrice.toFixed(2)}}元</span>
              </p>
              <p class="totalPrice">
                <span class="totalPrice-left">总计</span>
                <span :data="totalPrice ">{{projectForm.projectPrice}}元</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <span class="btn save active" @click="saveProject(1) ">保存</span>
        <span class="btn buy" @click="saveProject(2)">立即购买</span>
      </div>
    </div>
    <v-mask v-show="showPop" @handleConfirm="handleConfirm" @handleCancle="handleCancle"></v-mask>
  </div>
</template>


<script>
import { customerProject, home } from "@/lib/v1_sdk/index";
import { Trim, message, matchSplits, setTitle } from "~/lib/util/helper";
import { mapState, mapActions, mapGetters } from "vuex";
import Mask from "@/pages/project/components/CustomerPop";
export default {
  components: {
    "v-mask": Mask
  },
  data () {
    return {
      showPop: false,
      imgUlr: "https://static-image.1911edu.com/customer-arrow.png",
      showDesc: false,
      isClick: false,
      searchInput: "",
      isShowNumSelect: false,
      isShowDaySelect: false,
      isShowCollegeSelect: false,
      isShowCourseSelect: false,
      isShowSearchSelect: false,
      minNum: 0, //最小培训人数
      maxNum: 0, //最大培训人数
      maxDays: [], //最大培训天数
      offlineRangeTime: 0, //线下课时
      offlineCount1: 0, //党政事业线下每天培训费用
      offlineCount2: 0, //企业单位线下每天培训费用
      discount: 0, //折扣
      chooseCourseData: [], //课程搜索下拉多选列表
      searchCourseData: [], //课程搜索
      checkedCourseData: [], //已选课程
      CategoryListData: [], //学院分类
      courseCategoryData: [], //课程分类
      one: "", //党政线下培训天数区间对应各费用
      two: "", //企业线下培训天数区间对应各费用
      reuseData: [],
      searchCourseForm: {
        first_ID: "",
        second_ID: ""
      },
      gidForm: {
        gids: null
      },
      projectForm: {
        type: "", //新增/编辑
        customerID: "", //项目ID (编辑)
        name: "", //项目名称
        desc: "", //项目简介
        objRadio: "1", //培训对象
        trainNum: "", //培训人数
        styleRadio: "2", //培训方式
        trainDay: "", //线下培训天数
        trainCollege: "", //学院分类
        trainCourse: "", //课程分类
        trainSearch: "", //课程搜索
        onlineTime: 0, //课程结算-线上课程总学时
        onlinePrice: 0, //课程结算-线上课程价钱
        onlineTotalPrice: "", //课程结算-线上课程总价钱
        offlinePrice: "", //线下培训费用
        offlineTotalPrice: "", //课程结算-线上课程总价钱
        discountPrice: 0, //优惠价钱
        totalPrice: 0, //项目总价钱
        projectPrice: 0, //项目优惠后的价钱
        checkedCourse: []
      },
      responseData: { type: true, res: "" }
    };
  },
  computed: {
    nameLength () {
      return 30 - this.projectForm.name.length;
    },
    descLength (desc) {
      return 500 - this.projectForm.desc.length;
    },
    //计算线下课程总价钱
    offlineTotalPrice () {
      this.projectForm.offlineTotalPrice =
        this.projectForm.offlinePrice * this.projectForm.trainDay;
      return this.projectForm.offlineTotalPrice;
    },
    //计算线上课程总价钱
    onlineTotalPrice () {
      let price = 0;
      this.checkedCourseData.forEach((item, index) => {
        price += item.present_price * this.projectForm.trainNum;
      });
      this.projectForm.onlineTotalPrice = price;
      return this.projectForm.onlineTotalPrice;
    },
    //计算自定制项目总价钱
    totalPrice () {
      if (this.projectForm.styleRadio !== "1") {
        //线上+线下
        this.projectForm.totalPrice =
          this.projectForm.offlineTotalPrice +
          this.projectForm.onlineTotalPrice;
        this.projectForm.projectPrice = (
          this.projectForm.totalPrice - this.projectForm.discountPrice
        ).toFixed(2);
      } else {
        //线上
        this.projectForm.totalPrice = this.projectForm.onlineTotalPrice;
        this.projectForm.projectPrice = (
          this.projectForm.totalPrice - this.projectForm.discountPrice
        ).toFixed(2);
      }

      return this.projectForm.totalPrice;
    },
    //计算自定制项目的优惠价钱
    discountPrice () {
      this.projectForm.discountPrice =
        this.projectForm.totalPrice * (1 - this.discount).toFixed(2);
      return this.projectForm.discountPrice;
    }
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    proving () {
      this.projectForm.trainNum = this.projectForm.trainNum.replace(
        /[^\.\d]/g,
        ""
      );
      this.projectForm.trainNum = this.projectForm.trainNum.replace(".", "");
    },
    //定制项目模式信息
    customerInfo () {
      customerProject.customerInfo().then(response => {
        if (response.status == 0) {
          let result = response.data;
          this.minNum = result.min_study_person_number; //最小培训人数
          this.maxNum = result.max_study_person_number; //最大培训人数
          this.maxDays = result.max_study_days; //最大培训天数
          this.offlineRangeTime = result.offline_oneday_time; //线下课时
          // this.offlineCount1 = result.study_object_cost_amount_one //党政事业线下每天培训费用
          // this.offlineCount2 = result.study_object_cost_amount_two //企业单位线下每天培训费用
          this.discount = result.discount; //折扣

          this.one = result.study_object_cost_amount_one;
          this.two = result.study_object_cost_amount_two;
          // 获取已编辑信息  解决异步加载顺序的问题
          if (this.projectForm.type == "2") {
            //1:新增 2:编辑
            this.getCustomerProjectInfo();
          }
        }
      });
    },
    //搜索
    handleSearchChange (val) {
      var len = this.reuseData.length;
      var arr = [];
      var reg = new RegExp(val);
      if (val == "") {
        arr = this.reuseData;
      } else {
        for (var i = 0; i < len; i++) {
          //如果字符串中不包含目标字符会返回-1
          if (this.reuseData[i].title.match(reg)) {
            arr.push(this.reuseData[i]);
          }
        }
      }

      this.searchCourseData = [];
      arr.forEach(item => {
        this.searchCourseData.push(item);
      });
    },
    handleCancle () {
      this.showPop = false;
      this.isClick = false;
      message(this, "info", "已取消");
    },
    handleConfirm () {
      this.showPop = false;
      this.save(2);
    },
    //保存
    saveProject (type) {
      if (this.isClick) {
        return false;
      }
      this.isClick = true;
      this.projectForm.checkedCourse = [];
      this.checkedCourseData.forEach((item, index) => {
        this.projectForm.checkedCourse.push(item.id);
      });
      try {
        if (Trim(this.projectForm.name) == "") throw "请填写项目名称";
        if (Trim(this.projectForm.desc) == "") throw "请填写项目简介";
        if (this.projectForm.objRadio == "") throw "请选择培训对象";
        if (this.projectForm.trainNum == "") throw "请输入培训人数";
        if (this.projectForm.trainNum > 200) throw "培训人数不能超过200人";
        if (this.projectForm.styleRadio == "") throw "请选择培训方式";
        if (
          this.projectForm.styleRadio !== "1" &&
          this.projectForm.trainDay == ""
        ) {
          throw "请选择线下培训天数";
        }

        if (this.projectForm.type == "1") {
          //保存操作才验证
          // if (this.projectForm.trainSearch == '') {
          //   throw '请选择学院分类'
          // }
          // if (this.projectForm.trainCourse == '') {
          //   throw '请选择课程分类'
          // }
        }

        if (this.projectForm.checkedCourse.length == 0) {
          throw "请添加学院";
        }

        if (parseFloat(this.projectForm.projectPrice) == 0) {
          throw "您自定制的项目中不能全部为免费课程，请重新选课";
        }
      } catch (err) {
        message(this, "error", err);
        this.isClick = false;
        return false;
      }

      //线上课程，线下培训天数参数置空
      if (this.projectForm.styleRadio !== "1") {
        this.projectForm.trainDay = this.projectForm.trainDay;
      } else {
        this.projectForm.trainDay = "";
      }

      if (type == 2) {
        this.showPop = true;
      } else {
        this.save(type);
      }
    },
    save (type) {
      customerProject.createProject(this.projectForm).then(response => {
        this.isClick = false;
        if (response.status == 0) {
          if (this.projectForm.type == "1") {
            message(this, "success", "创建成功");
          } else {
            message(this, "success", "修改成功");
          }
          if (type == 1) {
            //保存跳转个人中心定制项目
            this.gidForm.gids = "tab-ninth";
            this.setGid(this.gidForm);
            this.$router.push("/profile");
            this.$bus.$emit("selectProfileIndex", "tab-ninth");
          } else {
            //立即购买跳转确认订单
            this.$router.push({
              path: "/shop/affirmorder",
              query: { id: response.data.curriculum_project_id, type: 1 }
            });
          }
        } else {
          if (response.msg == "存在下架课程") {
            let msgData = "";
            if (response.data.length == 1) {
              response.data.forEach((item, index) => {
                msgData += item.title;
              });
            } else {
              response.data.forEach((item, index) => {
                if (index == 0) {
                  msgData += item.title;
                } else {
                  msgData += "," + item.title;
                }
              });
            }
            message(
              this,
              "error",
              `您制定的项目中存在下架课程《${msgData}》，请删除后再提交`
            );
          } else {
            message(this, "error", response.msg);
          }
        }
      });
    },
    //学院/课程分类
    CategoryList () {
      home.vipGoodsList().then(response => {
        if (response.status == 0) {
          this.CategoryListData = response.data.vipGoodsList;
          this.CategoryListData.forEach((item, index) => {
            item.checked = false
          });
        }
      });
    },
    //添加已选课程
    addChooseCourse () {
      this.chooseCourseData.forEach((item, index) => {
        this.checkedCourseData.push(item);
      });
      //数组去重
      let obj = {};
      this.checkedCourseData = this.checkedCourseData.reduce((cur, next) => {
        obj[next.id] ? "" : (obj[next.id] = true && cur.push(next));
        return cur;
      }, []); //设置cur默认类型为数组，并且初始值为空的数组
      this.projectForm.onlineTime = 0;
      this.projectForm.onlinePrice = 0;
      //重新计算去重后数组
      this.courseComputed();
    },
    //删除已选课程
    deleteChooseCourse (index) {
      let indexItem = this.checkedCourseData[index]
      this.checkedCourseData.splice(index, 1);
      this.CategoryListData.forEach((item, index) => {
        if(item.id == indexItem.id){
          this.CategoryListData[index].checked = false;
        }
      });
      this.computedPrice();
    },
    //课程结算
    courseComputed () {
      this.checkedCourseData.forEach((n, index) => {
        if (n.is_free == "2") {
          n.present_price = 0;
        }
        this.projectForm.onlineTime += Number(n.study_time);
        this.projectForm.onlinePrice += Number(n.present_price);
      });

      //重新计算线上课程价钱
       let price = 0;
      this.checkedCourseData.forEach((item, index) => {
        price += item.present_price * this.projectForm.trainNum;
      });
      this.projectForm.onlineTotalPrice = price;

    },
    handleFocus () {
      this.isShowSearchSelect = true;
    },
    //培训人数-下拉
    handleNumSelect () {
      this.isShowNumSelect = !this.isShowNumSelect;
      this.isShowDaySelect = false;
      this.isShowCollegeSelect = false;
      this.isShowCourseSelect = false;
      this.isShowSearchSelect = false;
    },
    //线下培训天数-下拉
    handleDaySelect () {
      this.isShowDaySelect = !this.isShowDaySelect;
      this.isShowNumSelect = false;
      this.isShowCollegeSelect = false;
      this.isShowCourseSelect = false;
      this.isShowSearchSelect = false;
    },
    //学院分类-下拉
    handleCollegeSelect () {
      this.isShowCollegeSelect = !this.isShowCollegeSelect;
      this.isShowNumSelect = false;
      this.isShowDaySelect = false;
      this.isShowCourseSelect = false;
      this.isShowSearchSelect = false;
    },
    //课程分类-下拉
    handleCourseSelect () {
      this.isShowCourseSelect = !this.isShowCourseSelect;
      this.isShowNumSelect = false;
      this.isShowDaySelect = false;
      this.isShowCollegeSelect = false;
      this.isShowSearchSelect = false;
    },
    //按课程搜索-下拉
    handleSearchSelect () {
      this.isShowSearchSelect = !this.isShowSearchSelect;
      this.isShowNumSelect = false;
      this.isShowDaySelect = false;
      this.isShowCollegeSelect = false;
      this.isShowCourseSelect = false;
      // this.searchCourseData.forEach((item, index) => {
      //   this.chooseCourseData.forEach(course => {
      //     if (course.id == item.id) {
      //       this.searchCourseData[index].checked = true;
      //     }
      //   });
      // });
    },
    //选择培训人数
    chooseNum (val) {
      this.projectForm.trainNum = val;
      this.isShowNumSelect = false;
    },
    //选择线下培训天数
    chooseDay (val) {
      this.projectForm.trainDay = val;
      this.isShowDaySelect = false;
    },
    //选择学院分类
    chooseCollege (val) {
      this.searchCourseData = []; //切换清空
      this.projectForm.trainCollege = val.title;
      this.searchCourseForm.first_ID = val.id;
      this.courseCategoryData = val.childList;
      this.projectForm.trainCourse = "";
      this.isShowCollegeSelect = false;
    },
    //选择课程分类
    chooseCourse (val) {
      this.chooseCourseData = [];
      this.projectForm.trainSearch = "";
      this.projectForm.trainCourse = val.title;
      this.searchCourseForm.second_ID = val.id;
      this.isShowCourseSelect = false;
      this.searchCourse();
    },
    //课程搜索
    searchCourse () {
      customerProject.searchCourse(this.searchCourseForm).then(response => {
        this.searchCourseData = response.data.curriculumList;
        this.reuseData = response.data.curriculumList;
        this.searchCourseData.forEach((item, index) => {
          this.searchCourseData[index].checked = false;
        });
      });
    },
    //选择按课程搜索
    chooseSearch (item) {
      let arrIndex;
      this.chooseCourseData.forEach((n, index) => {
        if (n.id == item.id) {
          arrIndex = index;
        }
      });
      this.isShowSearchSelect = true;
      if (item.checked) {
        item.checked = false
        //未选中
        this.chooseCourseData.splice(arrIndex, 1);
      } else {
        item.checked = true
        //选中
        this.chooseCourseData.push(item);
      }
    },
    //选择学院
    chooseSearchInput (item) {
      if(!item.checked){
        item.checked = true
        this.checkedCourseData.push(item);
        this.courseComputed();
      }else{
        item.checked = false
        for(var j=0;j<this.checkedCourseData.length;j++){
          if(this.checkedCourseData[j]['id'] == item.id){
                this.checkedCourseData.splice(j,1);
                break;
          }
       }
        this.computedPrice();
      }
    },
    //获取编辑状态信息
    getCustomerProjectInfo () {
      customerProject
        .getCustomerProjectInfo(this.projectForm)
        .then(response => {
          if (response.status == 0) {
            let data = response.data.curriculumProjectDetail;
            this.projectForm.name = data.title; //项目标题
            this.projectForm.desc = data.introduction; //项目简介
            this.projectForm.styleRadio = data.study_type; //培训方式
            this.checkedCourseData = data.curriculumList; //已选课程
            this.projectForm.trainDay =
              parseFloat(data.offline_days) == 0 ? "" : data.offline_days; //线下培训天数
            this.projectForm.trainNum = Number(data.study_persion_number); //培训人数
            this.projectForm.objRadio = data.study_object; //培训对象
            this.courseComputed();
          }
        });
    },
    handledesc () {
      this.showDesc = !this.showDesc;
    },
    documentHandler (e) {
      this.isShowNumSelect = false;
      this.isShowDaySelect = false;
      this.isShowCollegeSelect = false;
      this.isShowCourseSelect = false;
      this.isShowSearchSelect = false;
      this.showDesc = false;
    },
    computedPrice () {
      //初始化
      this.projectForm.onlineTime = 0;
      this.projectForm.onlinePrice = 0;
      this.courseComputed();
    },
    computedNum () {
      let num = this.projectForm.trainNum;
      if (this.projectForm.objRadio == "1") {
        //党政
        if (num > 0 && num <= 50) {
          this.projectForm.offlinePrice = this.one.number_50;
        } else if (num > 50 && num <= 80) {
          this.projectForm.offlinePrice = this.one.number_80;
        } else if (num > 80 && num <= 100) {
          this.projectForm.offlinePrice = this.one.number_100;
        } else if (num > 100) {
          this.projectForm.offlinePrice = this.one.number_more;
        } else {
          this.projectForm.offlinePrice = "";
        }
      } else {
        //企业
        if (num > 0 && num <= 50) {
          this.projectForm.offlinePrice = this.two.number_50;
        } else if (num > 50 && num <= 80) {
          this.projectForm.offlinePrice = this.two.number_80;
        } else if (num > 80 && num <= 100) {
          this.projectForm.offlinePrice = this.two.number_100;
        } else if (num > 100) {
          this.projectForm.offlinePrice = this.two.number_more;
        } else {
          this.projectForm.offlinePrice = "";
        }
      }
    },
    init () {
      this.customerInfo();
      this.computedPrice();
      this.CategoryList();
      this.projectForm.customerID = matchSplits("sid");
      this.projectForm.type = matchSplits("edit");
    }
  },
  mounted () {
    this.init();
  },
  watch: {
    checkedCourseData (val) {
      this.projectForm.trainSearch = "";
      if (val.length == 1) {
        val.forEach((n, index) => {
          this.projectForm.trainSearch += n.title;
        });
      } else {
        val.forEach((n, index) => {
          if (index == 0) {
            this.projectForm.trainSearch += n.title;
          } else {
            this.projectForm.trainSearch += "," + n.title;
          }
        });
      }
    },
    //培训对象 --线下课程费用
    "projectForm.objRadio" (val) {
      this.computedNum();
    },
    "projectForm.trainNum" (val) {
      this.computedNum();
    }
  },
  updated () {
    setTitle("自定制项目-1911学堂");
  }
};
</script>

