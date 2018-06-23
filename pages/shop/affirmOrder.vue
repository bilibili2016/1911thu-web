<template>
  <div>
    <div class="affirmOrder">
      <div class="topImg">
        <!-- <i></i> -->
      </div>
      <div class="contain">
        <h3>确认订单</h3>
        <div class="buyType" v-if="payNumber>1">
          <div class="buy">
            <h4>购买方式：</h4>
            <p>
              <span :class={checked:person} @click="buyType('1')">个人购买</span>
              <span :class={checked:!person} @click="buyType('2')">企业购买</span>
            </p>
          </div>
          <div class="company" v-show="!person">
            <h4 class="clearfix">
              <span class="fl">企业信息：</span>
              <span class="fr addCompany" v-if="flag" @click="openCompanyInfo">
                <i class="el-icon-circle-plus-outline"></i> 添加企业信息</span>
              <span class="fr addCompany" v-else @click="openCompanyInfo">
                <i class="el-icon-edit-outline"></i> 修改</span>
            </h4>
            <div class="cpnInfo" v-if="flag">
              <p>暂无信息，请您添加。</p>
            </div>
            <div class="cpnInfo" v-else>
              <p class="cpnInfoLi">
                <span>{{company.contact_person}}</span>
                <span>{{company.address}}</span>
                <span>{{company.phone}}</span>
              </p>
            </div>

          </div>
        </div>
        <div class="goodsList">
          <div class="topBar clearfix">
            <span>商品信息</span>
            <span class="fr">我有疑问，需要反馈?</span>
          </div>
          <div class="goods">
            <div class="oneGoods clearfix" v-for="(course,index) in curriculumLists" :key="index">
              <div class="fl">
                <img :src="course.picture" alt="">
              </div>
              <div class="fl">
                <h5>{{course.title}}</h5>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：</p>
              </div>
              <div class="fr">¥{{course.present_price}}</div>
            </div>
          </div>

          <div class="orderInfo">
            <h5>
              <span>商品数量：{{curriculumSum}}</span>
              <span>学习人数：{{payNumber}}人</span>
              <span>商品总金额：¥{{allPrise}}</span>
            </h5>
            <p>购买账号：mmmmmm</p>
          </div>
        </div>
        <div class="bottomBtn clearfix">
          <p class="allPrice">应付金额：¥{{allPrise}}</p>
          <p class="commitOrder" @click="commitOrder">提交订单</p>
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
            <el-button type="primary" @click="addCompanyInfo('companyInfo')">提交</el-button>
            <!-- <el-button type="primary" @click="submitForm('companyInfo')">提交</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { home, auth } from '@/lib/v1_sdk/index'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      flag: true,
      person: true,
      showInfo: false,
      curriculumLists: [],
      curriculumSum: null,
      payNumber: null,
      allPrise: null,
      commitOrders: {},
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
      restaurants: [],
      company: {
        id: null
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
      }
    }
  },
  mounted() {
    // this.setProductsNum(0)
    this.goodsList()
  },
  methods: {
    buyType(type) {
      if (type === '1') {
        this.person = true
      } else {
        this.person = false
      }
    },
    commitOrder() {
      this.company.id
        ? (this.commitOrders.companyId = this.company.id)
        : (this.commitOrders.companyId = '')
      if (this.person) {
        this.commitOrders.types = 1
      } else {
        this.commitOrders.types = 2
      }
      return new Promise((resolve, reject) => {
        home.commitOrder(this.commitOrders).then(res => {
          if (res.status === 0) {
            console.log(res.data)
            persistStore.set('cpyid', res.data.id)
            this.$router.push('/shop/wepay')
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: res.msg
            })
          }
          resolve(true)
        })
      })
    },
    goodsList() {
      //获取商品信息
      return new Promise((resolve, reject) => {
        home.goodsList(this.addArray).then(res => {
          if (res.status === 0) {
            this.curriculumLists = res.data.curriculumLists
            this.curriculumSum = res.data.curriculumSum
            this.payNumber = res.data.payNumber
            this.allPrise = res.data.goodsAmount
            if (res.data.companyInfo) {
              this.company = res.data.companyInfo
              this.person = false
              this.flag = false
              console.log(this.company)
            }
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: res.msg
            })
          }
          resolve(true)
        })
      })
    },
    addCompanyInfo(formName) {
      //提交企业信息表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            home.addCompanyInfo(this.companyInfo).then(response => {
              if (response.status === '100100') {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: response.msg
                })
              } else if (response.status === 0) {
                this.company.id = response.data.id
                this.company.contact_person = this.companyInfo.contactperson
                this.company.address = this.companyInfo.companyaddress
                this.company.phone = this.companyInfo.phones
                this.showInfo = false
                this.flag = false
              }
              resolve(true)
            })
          })
        } else {
          return false
        }
      })
    },
    openCompanyInfo() {
      this.showInfo = true
    },
    close() {
      // 关闭表单
      this.showInfo = false
    },
    handleSelect(item) {
      this.companyInfo.companyname = item.company_name
    },
    querySearchAsync(queryString, cb) {
      //搜索企业
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
    //搜索企业 接口
    searchCompanyList() {
      if (this.companyInfo.companyname === '') {
        return false
      } else {
        return new Promise((resolve, reject) => {
          home.searchCompanyList(this.companyInfo).then(res => {
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
      }
    },
    async handleGetCode() {
      if (
        this.companyInfo.phones &&
        /^[1][3,5,6,7,8][0-9]{9}$/.test(this.companyInfo.phones) &&
        this.companyInfo.seconds === 30
      ) {
        if (this.companyInfo.captchaDisable === true) {
          return new Promise((resolve, reject) => {
            auth.smsCodes(this.companyInfo).then(response => {
              this.$message({
                showClose: true,
                type: response.status === 0 ? 'success' : 'error',
                message: response.msg
              })
              this.companyInfo.captchaDisable = false
              this.companyInfo.getCode =
                this.companyInfo.seconds + '秒后重新发送'
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
          })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/shop/affirmOrder';
</style>
