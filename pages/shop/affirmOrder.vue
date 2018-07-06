<template>
  <div>
    <div class="noMsg-con" v-if="isNoMsg">
      <div class="noMsg-img">
        <img :src="noMsg" alt="">
        <p>您没有正在进行的订单,{{backSeconds}}s后将会跳转到首页！</p>
      </div>
    </div>
    <div class="affirmOrder" ref="affirmOrder" v-else>
      <div class="contain" v-loading="loadGoods">
        <h3>确认订单</h3>
        <div class="buyType" v-if="payNumber>1">
          <div class="buy">
            <h4>购买方式：</h4>
            <p>
              <span :class={checked:person} @click="buyType('1')">个人购买</span>
              <span :class={checked:!person} @click="buyType('2')">机构购买</span>
            </p>
          </div>
          <div class="company" v-show="!person">
            <h4 class="clearfix">
              <span class="fl">机构信息：</span>
              <span class="fr addCompany" v-if="flag" @click="openCompanyInfo">
                <i class="el-icon-circle-plus-outline"></i> 添加机构信息</span>
              <!-- <span class="fr addCompany" v-else @click="openCompanyInfo">
                <i class="el-icon-edit-outline"></i> 修改</span> -->
            </h4>
            <div class="cpnInfo" v-if="flag">
              <p>暂无信息，请您添加。</p>
            </div>
            <div class="cpnInfo" v-else>
              <p class="cpnInfoLi">
                <span>
                  <strong>联系人:</strong>{{company.contact_person}}</span>
                <span>
                  <strong>公司名称:</strong>{{company.company_name}}</span>
                <span>
                  <strong>公司地址:</strong>{{company.address}}</span>
                <span>
                  <strong>手机号:</strong>{{company.phone}}</span>
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
            <!-- {{isShowTicket}} -->
            <h4>
              发票信息
              <span>开机构抬头发票须填写纳税人识别号，以免影响报销</span>
            </h4>
            <div class="invoice">
              <span class="changeInvoice" @click="showIoc">修改</span>
              <!-- <span v-show="isShowTicket" style="display:inline-block;padding-right:20px;">
                <strong style="display:inline-block;padding-right:8px;">发票类型:</strong>个人</span> -->
              <p>
                <span v-show="isShowTicket">
                  <strong class="choose" v-show="invoiceForm.choose=='1'">普通发票</strong>
                  <strong class="choose" v-show="invoiceForm.choose=='2'">增值税专用发票</strong>
                  <strong>发票抬头:</strong>
                  <span v-if="invoiceForm.ticket === true">个人</span>
                  <span v-if="invoiceForm.ticket === false">{{invoiceForm.companyname}}</span>
                  <span v-if="invoiceForm.ticket === false">{{invoiceForm.number}}</span>
                </span>
                <!-- 显示发票抬头 -->
                <span class="invoiceWord" v-show="isShowTicket">
                  <strong>发票内容:</strong>
                  <span v-if="invoiceForm.radio == 1">培训费</span>
                  <span v-if="invoiceForm.radio == 2">{{invoiceForm.others}}</span>
                </span>
                <span v-show="isShowTicket">
                  <strong>收货地址:</strong>{{invoiceForm.address}}
                </span>

                <span class="invoiceWord" v-show="!isShowTicket">
                  <span>不开发票</span>
                </span>
              </p>
              <!-- 显示发票抬头 -->
            </div>

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
          <!-- <h6>我有疑问，需要反馈?</h6> -->
        </div>
      </div>

    </div>
    <!-- 发票信息 -->
    <div class="invoiceShadow" v-show="showInvoice">
      <div class="invoiceInfo">
        <h3 class="clearfix">发票信息
          <i class="el-icon-close fr" @click="close"></i>
        </h3>
        <div class="header">
          <span :class="{checked:choose=='1'?true:false}" @click="chooseTicket('1')">普通发票
            <i></i>
          </span>
          <span :class="{checked:choose=='2'?true:false}" @click="chooseTicket('2')">增值税专用发票
            <i></i>
          </span>
        </div>
        <div class="invoiceForm" v-show="choose=='1'">
          <div class="formLi clearfix">
            <p class="fl">发票抬头</p>
            <h6 @click="chooseCompany('1')" :class="ticketForm.saveioc === false?'fr check':'fr'">个人</h6>
          </div>
          <div class="formLi clearfix">
            <!-- <h5 @click="addInvoice" v-show="ticketForm.ticket">新增机构发票</h5> -->
            <p class="fl"></p>
            <p @click="chooseCompany('2')" :class="ticketForm.saveioc === true?'fr addInvoice check':'fr addInvoice'">
              <input type="text" v-model="ticketForm.companyname" placeholder="新增机构发票抬头">
            </p>
          </div>
          <div class="formLi clearfix" v-show="ticketForm.saveioc">
            <p class="fl">纳税人识别号</p>
            <p class="fr">
              <input type="text" v-model="ticketForm.number" placeholder="输入纳税人识别号">
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">发票内容</p>
            <p class="fr radioBtn">
              <el-radio-group v-model="ticketForm.radio" @change="isTicket">
                <el-radio :label="1">商品类别
                  <i></i>
                </el-radio>
                <el-radio :label="2">其他
                  <i></i>
                </el-radio>
              </el-radio-group>
            </p>
            <p class="word" v-show="ticketForm.isRadio">
              <i class="el-icon-warning"> </i> 发票内容将显示培训费</p>
            <p class="word" v-show="!ticketForm.isRadio">
              <input type="text" v-model="ticketForm.others" placeholder="请输入发票内容">
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">收票人姓名</p>
            <p class="fr">
              <input type="text" v-model="ticketForm.name" placeholder="输入收票人姓名">
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">收票人手机</p>
            <p class="fr">
              <input type="text" v-model="ticketForm.tel" placeholder="输入收票人手机号">
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">收货省份</p>
            <p class="fr province">
              <el-select v-model="ticketForm.province" placeholder="省">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in province" :key="'prov'+index"></el-option>
              </el-select>
              <el-select v-model="ticketForm.city" placeholder="市">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
              </el-select>
              <el-select v-model="ticketForm.area" placeholder="区">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in area" :key="'area'+index"></el-option>
              </el-select>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">收货详细地址</p>
            <p class="fr">
              <input type="text" v-model="ticketForm.address" placeholder="请输入收票人的详细地址">
            </p>
          </div>
          <div class="operation">
            <span @click="addInvoiceBefor">保存</span>
            <span @click="close">取消</span>
          </div>
        </div>
        <div class="invoiceForm zzTicket" v-show="choose=='2'">
          <div class="stepOne" v-show="stepOne">
            <div class="formLi clearfix">
              <p class="fl">开票方式</p>
              <p class="fr readyOrderTicket">
                <span>订单完成后开票
                  <i></i>
                </span>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">发票内容</p>
              <p class="fr radioBtn">
                <el-radio-group v-model="zzTicketForm.radio" @change="iszzTicket">
                  <el-radio :label="1">商品类别
                    <i></i>
                  </el-radio>
                  <el-radio :label="2">其他
                    <i></i>
                  </el-radio>
                </el-radio-group>
              </p>
              <p class="word" v-show="zzTicketForm.isRadio">
                <i class="el-icon-warning"> </i> 发票内容将显示培训费</p>
              <p class="word" v-show="!zzTicketForm.isRadio">
                <input type="text" v-model="zzTicketForm.others" placeholder="请输入发票内容">
              </p>
            </div>
            <div class="formLi clearfix">
              <div class="step">
                <span class="stepCheck">1.选择开票方式</span>
                <i></i>
                <span>2.填写或核对公司信息</span>
                <i></i>
                <span>3.填写收票人信息</span>
              </div>
              <p class="smallTip">发票将在订单完成之后3-5个工作日寄出</p>
            </div>
            <div class="operation">
              <span @click="nextStep('stepTwo')">下一步</span>
              <span @click="close">取消</span>
            </div>
          </div>
          <div class="stepTwo" v-show="stepTwo">
            <div class="formLi clearfix">
              <div class="step">
                <span class="stepCheck">1.选择开票方式</span>
                <i></i>
                <span class="stepCheck">2.填写或核对公司信息</span>
                <i></i>
                <span>3.填写收票人信息</span>
              </div>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>单位名称</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.companyname" placeholder="请输入单位名称">
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>纳税人识别码</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.number" @change="reNumber" placeholder="请输入纳税人识别码">
                <span class="tips" v-show="tipsNumber&&number">
                  <i class="el-icon-success"></i>
                </span>
                <span class="tips" v-show="!tipsNumber&&number">
                  <i class="el-icon-warning"></i>纳税人识别号不正确！</span>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>注册地址</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.zcadd" @blur="zzTicketForm.zcadd==''?(tipsZcadd=false,zcadd=true):(tipsZcadd=true,zcadd=true)" placeholder="请输入注册地址">
                <span class="tips" v-show="tipsZcadd&&zcadd">
                  <i class="el-icon-success"></i>
                </span>
                <span class="tips" v-show="!tipsZcadd&&zcadd">
                  <i class="el-icon-warning"></i>注册地址不能为空！</span>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>注册电话</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.phones" @change="rePhone" placeholder="请输入注册电话">
                <span class="tips" v-show="tipsPhones&&phones">
                  <i class="el-icon-success"></i>
                </span>
                <span class="tips" v-show="!tipsPhones&&phones">
                  <i class="el-icon-warning"></i>注册电话不正确！</span>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>开户银行</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.bank" @blur="zzTicketForm.bank==''?(tipsBank=false,bank=true):(tipsBank=true,bank=true)" placeholder="请输入开户银行">
                <span class="tips" v-show="tipsBank&&bank">
                  <i class="el-icon-success"></i>
                </span>
                <span class="tips" v-show="!tipsBank&&bank">
                  <i class="el-icon-warning"></i>开户银行不能为空！</span>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">
                <i>*</i>银行账户</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.account" @change="reAccount" placeholder="请输入银行账户">
                <span class="tips" v-show="tipsAccount&&account">
                  <i class="el-icon-success"></i>
                </span>
                <span class="tips" v-show="!tipsAccount&&account">
                  <i class="el-icon-warning"></i>银行账户不正确！</span>
              </p>
            </div>
            <div class="operation">
              <span @click="nextStep('stepThree')">下一步</span>
              <span @click="nextStep('stepOne')">返回</span>
            </div>
          </div>
          <div class="stepThree" v-show="stepThree">
            <div class="formLi clearfix">
              <div class="step">
                <span class="stepCheck">1.选择开票方式</span>
                <i></i>
                <span class="stepCheck">2.填写或核对公司信息</span>
                <i></i>
                <span class="stepCheck">3.填写收票人信息</span>
              </div>
            </div>
            <div class="formLi clearfix">
              <p class="fl">收票人姓名</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.name" placeholder="输入收票人姓名">
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">收票人手机</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.tel" placeholder="输入收票人手机号">
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">收货省份</p>
              <p class="fr province">
                <el-select v-model="ticketForm.province" placeholder="省">
                  <el-option :label="p.label" :value="p.value" v-for="(p,index) in province" :key="'prov'+index"></el-option>
                </el-select>
                <el-select v-model="ticketForm.city" placeholder="市">
                  <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
                </el-select>
                <el-select v-model="ticketForm.area" placeholder="区">
                  <el-option :label="p.label" :value="p.value" v-for="(p,index) in area" :key="'area'+index"></el-option>
                </el-select>
              </p>
            </div>
            <div class="formLi clearfix">
              <p class="fl">收货详细地址</p>
              <p class="fr">
                <input type="text" v-model="zzTicketForm.address" placeholder="请输入收票人的详细地址">
              </p>
            </div>
            <div class="operation">
              <span @click="addZZTicketBefore">保存</span>
              <span @click="nextStep('stepTwo')">返回</span>
            </div>
          </div>
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
          <!-- prop="companyaddress" -->
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
      address: '',
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
      isShowTicket: false,
      noMsg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      province: [],
      city: [],
      area: [],
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
        choose: '1',
        companyname: null,
        ticket: true,
        number: null,
        address: null,
        radio: 1,
        types: 1, //发票类型
        saveioc: false,
        isRadio: true,
        others: null,
        ids: null
      },
      ticketForm: {
        companyname: null,
        ticket: true,
        number: null,
        province: null,
        city: null,
        area: null,
        name: null,
        tel: null,
        others: null,
        address: null,
        radio: 1,
        types: 1, //发票类型
        saveioc: false,
        isRadio: true,
        ids: null
      },
      zzTicketForm: {
        companyname: '',
        ticket: true,
        number: '',
        zcadd: '',
        phones: '',
        bank: '',
        account: '',
        tel: '',
        name: '',
        province: null,
        city: null,
        area: null,
        address: null,
        others: '',
        radio: 1,
        isRadio: true,
        types: 3
      },
      tipsNumber: null,
      tipsAccount: null,
      tipsBank: null,
      tipsPhones: null,
      tipsZcadd: null,
      number: false,
      zcadd: false,
      phones: false,
      bank: false,
      account: false,
      restaurants: [],
      company: {
        id: null
      },
      getInvoice: {
        isDefault: 1
      },
      choose: '1',
      stepOne: true,
      stepTwo: false,
      stepThree: false,
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
  watch: {
    province(val) {
      this.city = this.getRegion(val, this.ticketForm.province)
      this.area = this.getRegion(this.city, this.ticketForm.city)
    },
    'ticketForm.province'(val, oldval) {
      if (!this.province && this.province.length == 0) {
        this.getRegionList()
      }
      if (oldval != '') {
        this.ticketForm.city = ''
      }
      this.city = this.getRegion(this.province, val)
    },
    'ticketForm.city'(val, oldval) {
      if (!this.city && this.city.length == 0) {
        this.getRegionList()
      }
      if (oldval != '') {
        this.ticketForm.area = ''
      }
      this.area = this.getRegion(this.city, val)
    },
    address(val) {
      if (val) {
        persistStore.set('address', val)
      }
    }
  },
  mounted() {
    this.goodsList()
    this.getInvoiceDetail()
    this.getRegionList()
    this.resize()
  },
  methods: {
    resize() {
      let headerHeight = document.getElementsByClassName('headerBox')[0]
        .offsetHeight
      let footerHeight = document.getElementsByClassName('footerBox')[0]
        .offsetHeight
      let windowHeight = document.documentElement.clientHeight
      console.log(windowHeight)
      this.$refs.affirmOrder.style.minHeight =
        windowHeight - headerHeight - footerHeight + 'px'
    },
    reNumber() {
      if (
        this.zzTicketForm.number == '' ||
        !/^[A-Za-z0-9]+$/.test(this.zzTicketForm.number)
      ) {
        this.tipsNumber = false
        this.number = true
      } else {
        this.tipsNumber = true
        this.number = true
      }
    },
    rePhone() {
      if (
        this.zzTicketForm.phones == '' ||
        !/^((0\d{2,3}-?\d{7,8}$)|(1[35678]\d{9}))$/.test(
          this.zzTicketForm.phones
        )
      ) {
        this.tipsPhones = false
        this.phones = true
      } else {
        this.tipsPhones = true
        this.phones = true
      }
    },
    reAccount() {
      if (
        this.zzTicketForm.account == '' ||
        !/^[0-9]+$/.test(this.zzTicketForm.account)
      ) {
        this.tipsAccount = false
        this.account = true
      } else {
        this.tipsAccount = true
        this.account = true
      }
    },
    buyType(type) {
      if (type === '1') {
        this.person = true
      } else {
        this.person = false
      }
    },
    chooseTicket(v) {
      if (v === '1') {
        this.choose = '1'
        this.invoiceForm.types = '1'
        this.nextStep('stepOne')
      } else {
        this.choose = '2'
        this.invoiceForm.types = '3'
      }
      this.getTicket()
    },
    chooseCompany(v) {
      if (v === '1') {
        this.ticketForm.saveioc = false
        this.invoiceForm.types = '1'
      } else {
        this.ticketForm.saveioc = true
        this.invoiceForm.types = '2'
      }
      this.getTicket()
    },
    showIoc() {
      this.showInvoice = true
      this.getTicket()
    },
    nextStep(item) {
      if (item === 'stepOne') {
        this.stepOne = true
        this.stepTwo = false
        this.stepThree = false
      }
      if (item === 'stepTwo') {
        if (!this.zzTicketForm.isRadio) {
          if (this.zzTicketForm.others == '') {
            this.$message({
              showClose: true,
              type: 'error',
              message: '请输入发票内容！'
            })
            return false
          }
        }
        this.stepOne = false
        this.stepTwo = true
        this.stepThree = false
      }
      if (item === 'stepThree') {
        if (this.zzTicketForm.companyname == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入单位名称！'
          })
          return false
        } else if (
          this.zzTicketForm.number == '' ||
          !/^[A-Za-z0-9]+$/.test(this.zzTicketForm.number)
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的纳税人识别码！'
          })
          return false
        } else if (this.zzTicketForm.zcadd == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入注册地址！'
          })
          return false
        } else if (
          this.zzTicketForm.phones == '' ||
          !/^((0\d{2,3}-?\d{7,8}$)|(1[35678]\d{9}))$/.test(
            this.zzTicketForm.phones
          )
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的注册电话！'
          })
          return false
        } else if (this.zzTicketForm.bank == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入开户银行！'
          })
          return false
        } else if (
          this.zzTicketForm.account == '' ||
          !/^[0-9]+$/.test(this.zzTicketForm.account)
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的开户银行账户！'
          })
          return false
        }

        this.stepOne = false
        this.stepTwo = false
        this.stepThree = true
      }
    },
    addInvoiceBefor() {
      //普通发票、个人发票
      if (this.ticketForm.saveioc) {
        this.ticketForm.types = 2
      } else {
        this.ticketForm.types = 1
        this.ticketForm.number = ''
      }
      if (!this.ticketForm.isRadio) {
        if (this.ticketForm.others == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入发票内容！'
          })
          return false
        }
      }
      if (this.ticketForm.types == 2) {
        if (
          this.ticketForm.number == '' ||
          !/^[A-Za-z0-9]+$/.test(this.ticketForm.number)
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的纳税人识别号！'
          })
          return false
        }
      }
      if (
        this.ticketForm.tel === '' ||
        !/^[1][3,5,6,7,8][0-9]{9}$/.test(this.ticketForm.tel)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的手机号！'
        })
        return false
      }
      this.addInvoiceInfo()
    },
    addZZTicketBefore() {
      if (
        this.zzTicketForm.number == '' ||
        !/^[A-Za-z0-9]+$/.test(this.zzTicketForm.number)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的纳税人识别号！'
        })
        return false
      }

      if (
        this.zzTicketForm.tel === '' ||
        !/^[1][3,5,6,7,8][0-9]{9}$/.test(this.zzTicketForm.tel)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的手机号！'
        })
        return false
      }
      this.zzTicketForm.province = this.ticketForm.province
      this.zzTicketForm.city = this.ticketForm.city
      this.zzTicketForm.area = this.ticketForm.area
      this.addInvoiceInfo()
    },
    addInvoiceInfo() {
      //保存发票信息
      if (this.choose === '1') {
        return new Promise((resolve, reject) => {
          home.addInvoiceInfo(this.ticketForm).then(res => {
            if (res.status === 0) {
              this.$message({
                showClose: true,
                type: 'success',
                message: res.msg
              })
              this.invoiceForm.choose = this.choose
              this.invoiceForm.types = this.ticketForm.types
              this.commitOrders.ticketId = res.data.invoice_id
              this.invoiceForm.companyname = this.ticketForm.companyname
              this.invoiceForm.number = this.ticketForm.number
              this.invoiceForm.address = this.ticketForm.address
              this.invoiceForm.others = this.ticketForm.others
              this.invoiceForm.radio = Number(this.ticketForm.radio)
              this.invoiceForm.ticket = false
              this.isShowTicket = true
              this.commitOrders.ticketId = res.data.invoice_id
              this.close()
              if (this.ticketForm.types == 1) {
                this.invoiceForm.ticket = true
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
      } else {
        return new Promise((resolve, reject) => {
          home.addInvoiceInfo(this.zzTicketForm).then(res => {
            if (res.status === 0) {
              this.$message({
                showClose: true,
                type: 'success',
                message: res.msg
              })
              this.invoiceForm.choose = this.choose
              this.invoiceForm.types = this.zzTicketForm.types
              this.invoiceForm.companyname = this.zzTicketForm.companyname
              this.invoiceForm.number = this.zzTicketForm.number
              this.invoiceForm.address = this.zzTicketForm.address
              this.invoiceForm.others = this.zzTicketForm.others
              this.invoiceForm.radio = Number(this.zzTicketForm.radio)
              this.invoiceForm.ticket = false
              this.isShowTicket = true
              this.commitOrders.ticketId = res.data.invoice_id
              this.close()
              this.stepOne = true
              this.stepTwo = false
              this.stepThree = false
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
      }
    },
    getTicket() {
      return new Promise((resolve, reject) => {
        home.getTicket(this.invoiceForm).then(res => {
          if (res.status === 0) {
            if (this.invoiceForm.types == 1 || this.invoiceForm.types == 2) {
              this.ticketForm.saveioc = res.data.type == '1' ? false : true
              if (this.invoiceForm.types == 1) {
                this.ticketForm.companyname = ''
              } else {
                this.ticketForm.companyname = res.data.invoice_name
              }
              this.ticketForm.number = res.data.invoice_number
              this.ticketForm.name = res.data.consignee
              this.ticketForm.tel = res.data.phone
              this.ticketForm.province = res.data.province
              this.ticketForm.city = res.data.city
              this.ticketForm.area = res.data.area
              this.ticketForm.address = res.data.address
              this.ticketForm.radio = Number(res.data.content_type)
              this.ticketForm.others = res.data.content
              this.ticketForm.ticket = false
              this.commitOrders.ticketId = res.data.id
              if (this.ticketForm.radio == 2) {
                this.ticketForm.isRadio = false
              } else {
                this.ticketForm.isRadio = true
              }
            }
            if (this.invoiceForm.types == 3) {
              this.ticketForm.saveioc = res.data.type == '1' ? false : true
              this.zzTicketForm.companyname = res.data.invoice_name
              this.zzTicketForm.zcadd = res.data.company_address
              this.zzTicketForm.phones = res.data.company_phone
              this.zzTicketForm.bank = res.data.bank_name
              this.zzTicketForm.account = res.data.bank_card
              this.zzTicketForm.number = res.data.invoice_number
              this.zzTicketForm.name = res.data.consignee
              this.zzTicketForm.tel = res.data.phone
              this.ticketForm.province = res.data.province
              this.ticketForm.city = res.data.city
              this.ticketForm.area = res.data.area
              this.zzTicketForm.address = res.data.address
              this.zzTicketForm.others = res.data.content
              this.zzTicketForm.radio = Number(res.data.content_type)
              this.commitOrders.ticketId = res.data.id
              if (this.zzTicketForm.radio == 2) {
                this.zzTicketForm.isRadio = false
              } else {
                this.zzTicketForm.isRadio = true
              }
            }
            this.getRegion('', this.ticketForm.province)
          }
          resolve(true)
        })
      })
    },
    getRegion(data, val) {
      let tmp = []
      for (let item of data) {
        if (item.region_code == val) {
          for (let cit of item.city) {
            tmp.push(
              Object.assign({}, cit, {
                label: cit.name,
                value: cit.region_code
              })
            )
          }
        }
      }
      return tmp
    },
    isTicket(item) {
      if (item === 2) {
        this.ticketForm.isRadio = false
      } else {
        this.ticketForm.isRadio = true
      }
    },
    iszzTicket(item) {
      if (item === 2) {
        this.zzTicketForm.isRadio = false
      } else {
        this.zzTicketForm.isRadio = true
      }
    },
    goLink() {
      this.$router.push('/shop/shoppingcart')
    },
    commitOrder() {
      // console.log(this.company.id, 'this.company.id')

      this.company.id
        ? (this.commitOrders.companyId = this.company.id)
        : (this.commitOrders.companyId = '')
      if (this.person) {
        this.commitOrders.types = 1
      } else {
        this.commitOrders.types = 2
        if (this.commitOrders.companyId == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '您还没有绑定机构，请选择个人购买！'
          })
          return false
        }
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
    getInvoiceDetail() {
      //获取发票信息
      return new Promise((resolve, reject) => {
        home.getInvoiceDetail(this.getInvoice).then(res => {
          if (res.status == 0) {
            // 发票信息放到页面
            if (res.data.type == '1') {
              this.invoiceForm.choose = '1'
              this.choose = '1'
              this.invoiceForm.ticket = true
            } else if (res.data.type == '2') {
              this.invoiceForm.choose = '1'
              this.choose = '1'
              this.invoiceForm.ticket = false
            } else {
              this.invoiceForm.choose = '2'
              this.choose = '2'
              this.invoiceForm.ticket = false
            }
            this.invoiceForm.types = res.data.type
            this.invoiceForm.companyname = res.data.invoice_name
            this.invoiceForm.number = res.data.invoice_number
            this.invoiceForm.others = res.data.content
            this.invoiceForm.radio = Number(res.data.content_type)
            this.ticketForm.province = res.data.province
            this.ticketForm.city = res.data.city
            this.ticketForm.area = res.data.area
            this.invoiceForm.address = res.data.address
            this.invoiceForm.radio = res.data.content_type
            this.isShowTicket = true
            this.commitOrders.ticketId = res.data.id
          }
        })
      })
    },
    addCompanyInfo(formName) {
      //提交机构信息表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            home.addCompanyInfo(this.companyInfo).then(response => {
              // console.log(response, '这是获取')
              if (response.status === '100100') {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: response.msg
                })
              } else if (response.status === 0) {
                persistStore.set('phone', this.companyInfo.phones)
                this.company.id = response.data.id
                this.company.contact_person = this.companyInfo.contactperson
                this.company.company_name = this.companyInfo.companyname
                this.company.phone = this.companyInfo.phones
                this.company.address = this.companyInfo.companyaddress
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
      //搜索机构
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
    //搜索机构 接口
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
    },
    getRegionList() {
      home.getRegionList({ region_code: '' }).then(res => {
        this.mapregionList = res.data.regionList
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.invoice {
  span {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
