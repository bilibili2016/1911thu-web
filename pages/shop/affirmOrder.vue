<template>
  <div>
    <div class="noMsg-con" v-if="isNoMsg">
      <div class="noMsg-img">
        <img :src="noMsg" alt="">
        <p>您的购物车为空,{{backSeconds}}s后将会跳转到首页！</p>
      </div>
    </div>
    <div class="affirmOrder" v-else>
      <div class="contain" v-loading="loadGoods">
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
                <span>{{company.company_name}}</span>
                <span>{{company.phone}}</span>
              </p>
            </div>

          </div>
        </div>
        <div class="goodsList">
          <div class="topBar clearfix">
            <span>商品信息</span>
            <span class="fr goBack" @click="goLink">
              <i class="el-icon-edit-outline"></i> 返回修改购物车</span>
          </div>
          <div class="goods">
            <div class="oneGoods clearfix" v-for="(course,index) in curriculumLists" :key="index">
              <div class="fl">
                <img :src="course.picture" alt="">
              </div>
              <div class="fl">
                <h5>{{course.title}}</h5>
                <h6>{{course.curriculum_time}}学时</h6>
                <p>讲师：{{course.teacher_name}}</p>
              </div>
              <div class="fr">¥{{course.present_price}}</div>
            </div>
          </div>
          <div class="invoiceMsg clearfix">
            <h4>
              发票信息
            </h4>
            <p>
              <span class="invoiceWord" v-show="isShowTicket">不开发票</span>
              <span class="invoiceWord" v-show="!isShowTicket">
                <i>普通发票</i>
                <i>{{invoiceForm.companyname}}</i>
                <i>商品明细</i>
              </span>
              <span class="changeInvoice" @click="showIoc">修改</span>
            </p>
          </div>
          <div class="orderInfo">
            <h5>
              <span>商品数量：{{curriculumSum}}</span>
              <span>学习人数：{{payNumber}}人</span>
              <span>商品总金额：¥{{allPrise}}</span>
            </h5>
            <p>购买账号：{{nickName}}</p>
          </div>
        </div>
        <div class="bottomBtn clearfix">
          <p class="allPrice">应付金额：¥{{allPrise}}</p>
          <p class="commitOrder" @click="commitOrder">提交订单</p>
          <h6>我有疑问，需要反馈?</h6>
        </div>
      </div>

    </div>
    <!-- 发票信息 -->
    <div class="invoiceShadow" @click.self="close" v-show="showInvoice">
      <div class="invoiceInfo">
        <h3 class="clearfix">发票信息
          <i class="el-icon-close fr" @click="close"></i>
        </h3>
        <div class="invoiceForm">
          <div class="formLi clearfix">
            <p class="fl">发票抬头</p>
            <!-- <h6 class="fr check">个人</h6> -->
            <h6 :class="invoiceForm.saveioc === false?'fr check':'fr'">个人</h6>
          </div>
          <div class="formLi clearfix">
            <h5 @click="addInvoice" v-show="invoiceForm.ticket">新增机构发票</h5>
            <p class="fl"></p>
            <p class="fr addInvoice" v-show="!invoiceForm.ticket && !invoiceForm.saveioc">
              <input type="text" v-model="invoiceForm.companyname" placeholder="新增机构发票抬头">
              <span @click="saveInvoice">保存</span>
            </p>
            <p class="fr addInvoice saveioc check" v-show="invoiceForm.saveioc">
              <input type="text" v-model="invoiceForm.companyname" disabled>
              <span @click="changeInvoice">编辑</span>
              <span @click="deleteInvoice">删除</span>
            </p>

          </div>
          <div class="formLi clearfix" v-show="!invoiceForm.ticket">
            <p class="fl">纳税人识别号</p>
            <p class="fr">
              <input type="text" v-model="invoiceForm.number" placeholder="输入纳税人识别号">
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">发票内容</p>
            <p class="fr radioBtn">
              <el-radio-group v-model="invoiceForm.radio" @change="isTicket">
                <el-radio :label="1">不开发票
                  <i></i>
                </el-radio>
                <el-radio :label="2">商品明细
                  <i></i>
                </el-radio>
              </el-radio-group>
            </p>
            <p class="word" v-show="invoiceForm.isRadio">
              <i class="el-icon-warning"> </i> 发票内容将显示详细商品名称与价格信息</p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">收货地址</p>
            <p class="fr">
              <input type="text" v-model="invoiceForm.address" placeholder="输入收货地址">
            </p>
          </div>
        </div>
        <div class="operation">
          <span @click="addInvoiceInfo">保存</span>
          <span @click="close">取消</span>
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
      isNoMsg: false,
      backSeconds: 5,
      loadGoods: true,
      curriculumLists: [],
      curriculumSum: null,
      payNumber: null,
      allPrise: null,
      nickName: null,
      showInvoice: false,
      isShowTicket: true,
      noMsg: 'http://pam8iyw9q.bkt.clouddn.com/noMsg.png',
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
      invoiceForm: {
        companyname: null,
        ticket: true,
        number: null,
        address: null,
        radio: 1,
        types: 1, //发票类型
        saveioc: false,
        isRadio: false,
        ids: null
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
    this.goodsList()
    this.getTicket()
  },
  methods: {
    buyType(type) {
      if (type === '1') {
        this.person = true
      } else {
        this.person = false
      }
    },
    showIoc() {
      this.showInvoice = true
    },
    addInvoice() {
      // 添加发票
      this.invoiceForm.ticket = false
    },
    saveInvoice() {
      // 保存机构发票抬头
      console.log(this.invoiceForm.companyname)

      if (
        this.invoiceForm.companyname === '' ||
        this.invoiceForm.companyname === null
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请填写机构发票抬头'
        })
      } else {
        this.invoiceForm.saveioc = true
      }
    },
    changeInvoice() {
      // 编辑机构发票抬头
      this.invoiceForm.saveioc = false
      // console.log('编辑机构发票抬头')
    },
    deleteInvoice() {
      // 删除机构发票抬头
      this.invoiceForm.saveioc = false
      this.invoiceForm.ticket = true
      // console.log('删除机构发票抬头')
    },
    addInvoiceInfo() {
      // 添加发票 invoiceForm
      if (this.invoiceForm.radio === 2) {
        if (this.invoiceForm.saveioc) {
          this.invoiceForm.types = 2
        } else {
          this.invoiceForm.types = 1
          this.invoiceForm.companyname = '个人'
        }
        this.invoiceForm.ids = this.commitOrders.ticketId
        return new Promise((resolve, reject) => {
          home.addInvoiceInfo(this.invoiceForm).then(res => {
            if (res.status === 0) {
              this.$message({
                showClose: true,
                type: 'success',
                message: res.msg
              })
              this.isShowTicket = false
              this.commitOrders.ticketId = res.data.invoice_id
              this.close()
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
      } else {
        this.isShowTicket = true
        this.close()
      }
    },
    // Wapi/Invoice/invoiceDetail
    getTicket() {
      this.invoiceForm.types = 2
      return new Promise((resolve, reject) => {
        home.getTicket(this.invoiceForm).then(res => {
          if (res.status === 0) {
            this.invoiceForm.companyname = res.data.invoice_name
            this.invoiceForm.number = res.data.invoice_number
            this.invoiceForm.address = res.data.address
            this.commitOrders.ticketId = res.data.id
            this.isShowTicket = false
          }
          resolve(true)
        })
      })
    },
    isTicket(item) {
      if (item === 2) {
        this.invoiceForm.isRadio = true
      } else {
        this.invoiceForm.isRadio = false
      }
    },
    goLink() {
      this.$router.push('/shop/shoppingcart')
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
      this.loadGoods = true
      return new Promise((resolve, reject) => {
        home.goodsList(this.addArray).then(res => {
          if (res.status === 0) {
            this.curriculumLists = res.data.curriculumLists
            this.curriculumSum = res.data.curriculumSum
            this.payNumber = res.data.payNumber
            this.allPrise = res.data.goodsAmount
            this.nickName = persistStore.get('nickName')
            if (res.data.companyInfo) {
              this.company = res.data.companyInfo
              this.person = false
              this.flag = false
            }
            this.loadGoods = false
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: res.msg
            })
            let timer = setInterval(() => {
              if (this.backSeconds <= 1) {
                clearInterval(timer)
                this.$router.push('/')
              }
              this.backSeconds--
            }, 1000)
            this.isNoMsg = true
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
                this.company.company_name = this.companyInfo.companyname
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
      this.showInvoice = false
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

