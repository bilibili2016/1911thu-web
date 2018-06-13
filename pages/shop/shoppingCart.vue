<template>
  <div class="shopCart">
    <!-- 购物车列表 -->
    <div class="main" v-loading="loding">
      <div class="table">
        <div class="tableHeader" v-if="!isNoMsg">
          <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
          <span class="courseName">课程名称</span>
          <span class="price">单价</span>
          <span class="operation">操作</span>
        </div>
        <div class="tableBody">
          <div v-for="(course,index) in courseList" :key="index">
            <el-checkbox v-model="course.checkMsg" @change="handleSelectChange(course,index)"></el-checkbox>
            <div class="courseInfo clearfix">
              <img class="fl" :src="course.picture">
              <div class="fl">
                <h4>{{course.title}}</h4>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher}}</p>
              </div>
            </div>
            <div class="coursePrice">
              ￥{{course.present_price}}
            </div>
            <div class="courseOperation" @click="handleDelete(course,index)">
              删除
            </div>
          </div>
        </div>
        <div class="noMsg-con" v-if="isNoMsg">
          <div class="noMsg-img">
            <img :src="noMsg" alt="">
            <p>您的购物车为空</p>
          </div>
        </div>
        <div class="tableFooter" v-if="courseList && courseList.length > 0">
          <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
          <span class="courseNumber clearfix">
            <!-- <span class="deleteChecked">删除选中的课程</span> -->
            <span class="person">购买人数：</span>
            <el-input-number v-model="numForm.number" :step="1" :min="1" :max="6000" class="courseNumberInput"></el-input-number>
            <!-- <span class="number clearfix">
                <i class="fl minus el-icon-minus"  @click="delNumber"></i>
                <input type="text" class="fl num" v-model="numForm.number" @input="setPatten" @blur="changeNumber">
                <i class="fl add el-icon-plus" @click="addNumber"></i>
              </span> -->
          </span>
          <span class="commitOrder fr">
            <el-button @click="showCommit">提交</el-button>
          </span>
          <span class="allPrice fr">￥{{prices}}</span>
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
            <el-autocomplete v-model="companyInfo.companyname" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
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
import { home, auth } from '@/lib/v1_sdk/index'
import { mapState, mapActions } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
export default {
  data() {
    return {
      isNoMsg: false,
      loding: true,
      noMsg: require('~/assets/images/noMsg.png'),
      showInfo: false,
      selectAll: false,
      checked: [],
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
      curriculumcartids: {
        cartid: null
      },
      addArray: {
        curriculumcartid: []
      },
      isRest: true,
      companyForm: {
        companyname: '1911'
      },
      restaurants: [],
      timeout: null
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.shopCartList()
    this.getNum()
    this.searchCompanyList()
    this.restaurants = this.loadAll()
  },
  computed: {
    ...mapState('auth', ['token', 'productsNum']),
    prices() {
      return (
        Number(this.arraySum) *
        10 *
        (Number(this.numForm.number) * 10) /
        100
      ).toFixed(2)
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
    ...mapActions('auth', ['setProductsNum']),
    loadAll() {
      return []
    },
    querySearchAsync(queryString, cb) {
      // console.log(queryString, '查询字符串')
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants
      // console.log(results, '这是查询出来的')
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
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
      console.log(item)
    },
    //搜索企业 接口
    searchCompanyList() {
      return new Promise((resolve, reject) => {
        home.searchCompanyList(this.companyForm).then(res => {
          for (var i = 0; i < res.data.companyList.length; i++) {
            this.$set(
              res.data.companyList[i],
              'value',
              res.data.companyList[i].company_name
            )
          }
          this.restaurants = res.data.companyList
          resolve(true)
        })
      })
    },
    handleSelect(item) {
      console.log(item)
    },
    setPatten() {
      let reg = new RegExp('/^[0-9]*$/')
      if (!reg.test(this.numForm.number)) {
        let str = this.numForm.number.toString()
        this.numForm.number = str.replace(this.numForm.number, 1)
      }
    },
    handleSelectAll() {
      this.isRest = true
    },
    getNum() {
      return new Promise((resolve, reject) => {
        home.changeCartNumber(this.numForm).then(res => {
          this.numForm.number = Number(res.data.cart_number)
          resolve(true)
        })
      })
    },
    shopCartList() {
      this.arraySum = 0
      this.addArray.curriculumcartid = []
      return new Promise((resolve, reject) => {
        home.shopCartList().then(response => {
          let body = response.data.curriculumCartList.map(item => {
            this.addArray.curriculumcartid.push(item.id)
            this.arraySum =
              (Number(this.arraySum) * 10 + Number(item.present_price) * 10) /
              10
            return Object.assign({}, item, {
              checkMsg: true
            })
          })
          this.courseList = body
          this.selectAll = true
          this.loding = false
          this.setProductsNum({
            pn: this.courseList.length
          })
          if (this.courseList.length == 0) {
            this.isNoMsg = true
            this.selectAll = false
          }
        })
      })
    },
    handleSelectChange(item, index) {
      let shopIndex = indexOf(this.addArray.curriculumcartid, item.id)
      if (shopIndex >= 0) {
        this.addArray.curriculumcartid.splice(shopIndex, 1)
        this.arraySum =
          (Number(this.arraySum) * 10 - Number(item.present_price) * 10) / 10
      } else {
        this.addArray.curriculumcartid.push(item.id)
        this.arraySum =
          (Number(this.arraySum) * 10 + Number(item.present_price) * 10) / 10
      }
      if (this.addArray.curriculumcartid.length == this.courseList.length) {
        this.selectAll = true
        this.isRest = true
      } else {
        this.selectAll = false
        this.isRest = false
      }
    },
    handleSelectAllChange(val) {
      if (this.courseList && this.courseList.length > 0) {
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
      this.showInfo = true
      // this.$router.push('/shop/checkedCourse');
      return new Promise((resolve, reject) => {
        home.addChecked(this.addArray).then(res => {
          if (res.status == 0) {
            this.shopCartList()
          }
          resolve(true)
        })
      })
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
    addNumber() {
      this.numForm.number = this.numForm.number + 1
      this.changeCartNumber()
    },
    changeCartNumber() {
      return new Promise((resolve, reject) => {
        home.changeCartNumber(this.numForm).then(res => {
          resolve(true)
        })
      })
    },
    delNumber() {
      if (this.numForm.number > 1) {
        this.numForm.number = this.numForm.number - 1
      } else {
        this.numForm.number = Number(1)
      }
      this.changeCartNumber()
    },
    changeNumber() {
      if (typeof this.number !== 'number' || this.number < 1) {
        this.number = 1
      }
      this.changeCartNumber()
    },
    addPaySubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            home.addPaySubmit(this.companyInfo).then(response => {
              if (response.status === '1000100') {
                this.$message({
                  type: 'error',
                  message: response.msg
                })
              } else {
                this.$router.push('/shop/checkedCourse')
              }
              this.showInfo = false
              resolve(true)
            })
          })
        } else {
          return false
        }
      })
    },
    handleDelete(item, index) {
      this.curriculumcartids.cartid = item.id
      this.loding = true
      return new Promise((resolve, reject) => {
        home.delShopCart(this.curriculumcartids).then(response => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          // this.handleSelectChange(item, index);
          // this.courseList.splice(index, 1);
          this.shopCartList()
          this.getNum()
          this.loding = false
        })
      })
    },
    async handleGetCode() {
      if (this.companyInfo.phones) {
        if (this.companyInfo.captchaDisable === true) {
          return new Promise((resolve, reject) => {
            auth.smsCodes(this.companyInfo).then(response => {
              this.$message({
                type: response.status === 0 ? 'success' : 'error',
                message: response.msg
              })
              this.companyInfo.captchaDisable = false
              this.companyInfo.getCode =
                this.companyInfo.seconds + '秒后重新发送'
              let interval = setInterval(() => {
                if (this.companyInfo.seconds <= 0) {
                  this.companyInfo.getCode = '获取验证码'
                  this.companyInfo.seconds = 60
                  this.companyInfo.captchaDisable = true
                  clearInterval(interval)
                } else {
                  this.companyInfo.getCode =
                    --this.companyInfo.seconds + '秒后重新发送'
                }
              }, 1000)
            })
          })
        }
      } else {
        this.$message({
          type: 'error',
          message: '请填写手机号'
        })
      }
    }
  }
}
</script>
