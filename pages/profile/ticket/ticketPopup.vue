<template>
  <div class="invoiceTicket">
    <div class="invoiceInfo" ref="invoiceInfo">
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

          <p class="fl"></p>
          <p @click="chooseCompany('2')" :class="ticketForm.saveioc === true?'fr addInvoice check':'fr addInvoice'">
            <input type="text" v-model="ticketForm.companyname" placeholder="新增单位发票抬头">
          </p>
        </div>
        <div class="formLi clearfix" v-show="ticketForm.saveioc">
          <p class="fl">纳税人识别号</p>
          <p class="fr">
            <input type="text" v-model="ticketForm.number" @blur="retfNumber" placeholder="输入纳税人识别号">
          </p>
        </div>
        <div class="formLi clearfix">
          <p class="fl">发票内容</p>
          <p class="fr radioBtn">
            <el-radio-group v-model="ticketForm.radio" @change="isTicket">
              <el-radio :label="1">培训费
                <i></i>
              </el-radio>
              <el-radio :label="2">其他
                <i></i>
              </el-radio>
            </el-radio-group>
          </p>
          <p class="word" v-show="!ticketForm.isRadio">
            <i class="el-icon-warning"> </i>3个工作日内会有工作人员联系您确认发票内容信息，请您留意电话，感谢支持！
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
          <p class="fl">收票人省份</p>
          <p class="fr province">
            <el-select v-model="ticketForm.province" placeholder="省" @change="changeTicketp">
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
          <p class="fl">详细地址</p>
          <p class="fr">
            <input type="text" v-model="ticketForm.address" placeholder="请输入收票人的详细地址">
          </p>
        </div>
        <p class="smallTip">发票将在订单完成之后3-5个工作日寄出</p>
        <div class="operation">
          <span class="a" @click="addInvoiceBefor">保存</span>
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
                <el-radio :label="1">培训费
                  <i></i>
                </el-radio>
                <el-radio :label="2">其他
                  <i></i>
                </el-radio>
              </el-radio-group>
            </p>
            <p class="word" v-show="!zzTicketForm.isRadio">
              <i class="el-icon-warning"> </i>3个工作日内会有工作人员联系您确认发票内容信息，请您留意电话，感谢支持！
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
            <p class="fl">开票方式</p>
            <p class="fr readyOrderTicket">
              <span>订单完成后开票
                <i></i>
              </span>
            </p>
          </div>
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
              <input type="text" v-model="zzTicketForm.companyname" @change="reCompanyname" placeholder="请输入单位名称">
              <span class="tips" v-show="tipsCompanyname&&companyname">
                <i class="el-icon-success"></i>
              </span>
              <span class="tips" v-show="!tipsCompanyname&&companyname">
                <i class="el-icon-warning"></i>单位名称不正确！</span>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">
              <i>*</i>纳税人识别号</p>
            <p class="fr">
              <input type="text" v-model="zzTicketForm.number" @change="reNumber" placeholder="请输入纳税人识别号">
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
              <input type="text" v-model="zzTicketForm.zcadd" @change="reZcadd" placeholder="请输入注册地址">
              <span class="tips" v-show="tipsZcadd&&zcadd">
                <i class="el-icon-success"></i>
              </span>
              <span class="tips" v-show="!tipsZcadd&&zcadd">
                <i class="el-icon-warning"></i>注册地址不能为空！</span>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">
              <i>*</i>联系电话</p>
            <p class="fr">
              <input type="text" v-model="zzTicketForm.phones" @change="rePhone" placeholder="请输入联系电话">
              <span class="tips" v-show="tipsPhones&&phones">
                <i class="el-icon-success"></i>
              </span>
              <span class="tips" v-show="!tipsPhones&&phones">
                <i class="el-icon-warning"></i>联系电话不正确！</span>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">
              <i>*</i>开户银行</p>
            <p class="fr">
              <input type="text" v-model="zzTicketForm.bank" @change="reBank" placeholder="请输入开户银行">
              <span class="tips" v-show="tipsBank&&bank">
                <i class="el-icon-success"></i>
              </span>
              <span class="tips" v-show="!tipsBank&&bank">
                <i class="el-icon-warning"></i>开户银行不能为空！</span>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">
              <i>*</i>银行账号</p>
            <p class="fr">
              <input type="text" v-model="zzTicketForm.account" @change="reAccount" placeholder="请输入银行账号">
              <span class="tips" v-show="tipsAccount&&account">
                <i class="el-icon-success"></i>
              </span>
              <span class="tips" v-show="!tipsAccount&&account">
                <i class="el-icon-warning"></i>银行账号不正确！</span>
            </p>
          </div>
          <div class="operation">
            <span @click="nextStep('stepThree')">下一步</span>
            <span @click="nextStep('stepOne')">返回</span>
          </div>
        </div>
        <div class="stepThree" v-show="stepThree">
          <div class="formLi clearfix">
            <p class="fl">开票方式</p>
            <p class="fr readyOrderTicket">
              <span>订单完成后开票
                <i></i>
              </span>
            </p>
          </div>
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
            <p class="fl">收票人省份</p>
            <p class="fr province">
              <el-select v-model="zzTicketForm.province" placeholder="省" @change="changezzTicketp">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in zzprovince" :key="'prov'+index"></el-option>
              </el-select>
              <el-select v-model="zzTicketForm.city" placeholder="市">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in zzcity" :key="'city'+index"></el-option>
              </el-select>
              <el-select v-model="zzTicketForm.area" placeholder="区">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in zzarea" :key="'area'+index"></el-option>
              </el-select>
            </p>
          </div>
          <div class="formLi clearfix">
            <p class="fl">详细地址</p>
            <p class="fr">
              <input type="text" v-model="zzTicketForm.address" placeholder="请输入收票人的详细地址">
            </p>
          </div>
          <div class="operation">
            <span class="333" @click="addZZTicketBefore">保存</span>
            <span @click="nextStep('stepTwo')">返回</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ticketorder } from '~/lib/v1_sdk/index'
import { mapActions } from 'vuex'
import { checkPhone, checkCode } from '~/lib/util/validatefn'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['checkedArr'],
  data() {
    return {
      ticketType: {
        type: 'ticket'
      },
      noMsgImg: 'http://papn9j3ys.bkt.clouddn.com/noMsg.png',
      orderPrice: 0,
      orderNum: 0,
      ticketOrderData: [],
      singleCheck: '',
      index: 0,
      checkedNum: 1,
      isFixed: false,
      // checkedArr: [],
      bottomBaroffsetTop: '',
      windowHeight: '',
      headerHeight: '',
      bottomPositionHeight: '',
      restaurants: [],
      checkMsg: false,
      noData: false,
      orderForm: {
        pages: 1,
        limits: null,
        payStatus: null,
        ids: null
      },
      kidForm: {
        kid: ''
      },
      orderID: [],
      gidForm: { gids: null },
      choose: '1',
      commitOrders: {},
      ticketForm: {
        companyname: null,
        ticket: true,
        number: null,
        province: null,
        province_name: null,
        city: null,
        city_name: null,
        area: null,
        area_name: null,
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

      invoiceForm: {
        invoiceId: '',
        choose: '1',
        companyname: null,
        ticket: true,
        number: null,
        phones: null,
        bank: null,
        account: null,
        address: null,
        province: null,
        city: null,
        area: null,
        name: null,
        tel: null,
        radio: 1,
        types: '', //发票类型
        saveioc: false,
        isRadio: true,
        others: null,
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
        province_name: null,
        city: null,
        city_name: null,
        area: null,
        area_name: null,
        address: null,
        others: '',
        radio: 1,
        isRadio: true,
        types: 3
      },
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      showInvoice: false,
      tipsCompanyname: null,
      tipsNumber: null,
      tipsAccount: null,
      tipsBank: null,
      tipsPhones: null,
      tipsZcadd: null,
      companyname: false,
      number: false,
      zcadd: false,
      phones: false,
      bank: false,
      account: false,
      province: [],
      city: [],
      area: [],
      zzprovince: [],
      zzcity: [],
      zzarea: [],
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
  methods: {
    ...mapActions('auth', ['setGid', 'setKid']),
    // 验证普通发票 中的纳税人识别号
    retfNumber() {
      if (
        this.ticketForm.number == '' ||
        !/^[A-Z0-9]+$/.test(this.ticketForm.number)
      ) {
        this.$message({
          showClose: true,
          type: 'error',
          message: '请输入正确的纳税人识别号！'
        })
        this.tfNumber = false
      } else {
        if (
          this.ticketForm.number.length == 15 ||
          this.ticketForm.number.length == 18 ||
          this.ticketForm.number.length == 20
        ) {
          this.tfNumber = true
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的纳税人识别号！'
          })
          this.tfNumber = false
          return false
        }
      }
    },
    // 验证增值税发票 中的纳税人识别号
    reCompanyname() {
      if (this.zzTicketForm.companyname == '') {
        this.tipsCompanyname = false
        this.companyname = true
      } else {
        this.tipsCompanyname = true
        this.companyname = true
      }
    },
    // 验证增值税发票 中的纳税人识别号
    reNumber() {
      if (
        this.zzTicketForm.number == '' ||
        !/^[A-Z0-9]+$/.test(this.zzTicketForm.number)
      ) {
        this.tipsNumber = false
        this.number = true
      } else {
        if (
          this.zzTicketForm.number.length == 15 ||
          this.zzTicketForm.number.length == 18 ||
          this.zzTicketForm.number.length == 20
        ) {
          this.tipsNumber = true
          this.number = true
        } else {
          this.tipsNumber = false
          this.number = true
        }
      }
    },
    // 验证增值税发票 注册地址
    reZcadd() {
      if (this.zzTicketForm.zcadd == '') {
        this.tipsZcadd = false
        this.zcadd = true
      } else {
        this.tipsZcadd = true
        this.zcadd = true
      }
    },
    // 验证增值税发票 注册地址
    reBank() {
      if (this.zzTicketForm.bank == '') {
        this.tipsBank = false
        this.bank = true
      } else {
        this.tipsBank = true
        this.bank = true
      }
    },
    // 添加增值税发票验证
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
      this.addInvoiceInfo()
    },
    // 验证增值税发票 中的联系电话
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
    // 验证增值税发票 中的银行卡号
    reAccount() {
      // !/^[0-9 ]+$/.test(this.zzTicketForm.account)
      if (
        this.zzTicketForm.account == '' ||
        this.zzTicketForm.account.length > 50
      ) {
        this.tipsAccount = false
        this.account = true
      } else {
        this.tipsAccount = true
        this.account = true
      }
    },
    // 切换发票内容
    isTicket(item) {
      if (item === 2) {
        this.ticketForm.isRadio = false
        this.ticketForm.others = '其他'
      } else {
        this.ticketForm.isRadio = true
        this.ticketForm.others = '培训费'
      }
    },
    // 切换普通发票下的省
    changeTicketp(v) {
      this.ticketForm.city = ''
      this.ticketForm.area = ''
    },
    // 切换增值税发票下的省
    changezzTicketp(v) {
      this.zzTicketForm.city = ''
      this.zzTicketForm.area = ''
    },
    // 切换增值税发票内容
    iszzTicket(item) {
      if (item === 2) {
        this.zzTicketForm.isRadio = false
        this.zzTicketForm.others = '其他'
      } else {
        this.zzTicketForm.isRadio = true
        this.zzTicketForm.others = '培训费'
      }
    },
    //普通发票、个人发票 验证
    addInvoiceBefor() {
      if (this.ticketForm.saveioc) {
        this.ticketForm.types = 2
      } else {
        this.ticketForm.types = 1
        this.ticketForm.number = ''
      }
      if (this.ticketForm.types == 2) {
        if (!this.tfNumber) {
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
    //根据省市区列表 摘出对应省市区
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
    // 根据省编码循环省名字
    getProvince(arr, val) {
      var province = ''
      arr.forEach(function(v, i) {
        if (v.region_code === val) {
          province = v.name
        }
      })
      return province
    },
    // 根据市编码循环市名字
    getCity(arr, val) {
      var city = ''
      arr.forEach(function(v, i) {
        if (v.region_code === val) {
          city = v.name
        }
      })
      return city
    },
    // 根据区编码循环区名字
    getArea(arr, val) {
      var area = ''
      arr.forEach(function(v, i) {
        if (v.region_code === val) {
          area = v.name
        }
      })
      return area
    },
    // 获取三级联动省市县列表
    getRegionList() {
      ticketorder.getRegionList({ region_code: '' }).then(res => {
        this.mapregionList = res.data.regionList
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          })
        })
        this.zzprovince = this.province
      })
    },
    // 切换普通发票/增值税发票
    chooseTicket(v) {
      if (v === '1') {
        this.choose = '1'
        this.invoiceForm.types = '1'
        this.chooseCompany('1')
        this.nextStep('stepOne')
      } else {
        this.choose = '2'
        this.invoiceForm.types = '3'
      }
      this.getTicket()
    },
    // 增值税发票 下一步
    nextStep(item) {
      if (item === 'stepOne') {
        this.stepOne = true
        this.stepTwo = false
        this.stepThree = false
      }
      if (item === 'stepTwo') {
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
            message: '请输入正确的联系电话！'
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
          this.zzTicketForm.account.length > 50
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的银行账号！'
          })
          return false
        }
        if (
          this.zzTicketForm.number == '' ||
          !/^[A-Z0-9]+$/.test(this.zzTicketForm.number)
        ) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请输入正确的纳税人识别号！'
          })
          return false
        } else {
          if (
            this.zzTicketForm.number.length == 15 ||
            this.zzTicketForm.number.length == 18 ||
            this.zzTicketForm.number.length == 20
          ) {
          } else {
            this.$message({
              showClose: true,
              type: 'error',
              message: '请输入正确的纳税人识别号！'
            })
            return false
          }
        }

        this.stepOne = false
        this.stepTwo = false
        this.stepThree = true
      }
    },
    // 普通发票 选择个人/企业
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
    // 添加发票信息
    addInvoiceInfo() {
      this.ticketForm.orderID = this.checkedArr
      this.zzTicketForm.orderID = this.checkedArr
      // console.log(this.ticketForm)

      if (this.choose === '1') {
        if (this.ticketForm.isRadio) {
          this.ticketForm.others = '培训费'
        } else {
          this.ticketForm.others = '其他'
        }

        return new Promise((resolve, reject) => {
          ticketorder.addInvoiceInfo(this.ticketForm).then(res => {
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
              this.invoiceForm.tel = this.ticketForm.tel
              this.invoiceForm.name = this.ticketForm.name
              this.invoiceForm.province_name = this.getProvince(
                this.province,
                this.ticketForm.province
              )
              this.invoiceForm.city_name = this.getCity(
                this.city,
                this.ticketForm.city
              )
              this.invoiceForm.area_name = this.getArea(
                this.area,
                this.ticketForm.area
              )
              this.invoiceForm.radio = Number(this.ticketForm.radio)
              this.invoiceForm.ticket = false
              this.isShowTicket = true
              this.commitOrders.ticketId = res.data.invoice_id

              if (this.ticketForm.types == 1) {
                this.invoiceForm.ticket = true
              }
              this.orderNum = 0
              this.orderPrice = 0
              // this.getUnTicketData()
              this.$bus.$emit('chengeItem')
              this.$emit('getUnTicketData')
              this.$emit('handleClose')
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
        if (this.zzTicketForm.isRadio) {
          this.zzTicketForm.others = '培训费'
        } else {
          this.zzTicketForm.others = '其他'
        }
        return new Promise((resolve, reject) => {
          ticketorder.addInvoiceInfo(this.zzTicketForm).then(res => {
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
              this.invoiceForm.zcadd = this.zzTicketForm.zcadd
              this.invoiceForm.address = this.zzTicketForm.address
              this.invoiceForm.name = this.zzTicketForm.name
              this.invoiceForm.tel = this.zzTicketForm.tel
              this.invoiceForm.others = this.zzTicketForm.others
              this.invoiceForm.bank = this.zzTicketForm.bank
              this.invoiceForm.account = this.zzTicketForm.account
              this.invoiceForm.phones = this.zzTicketForm.phones
              this.invoiceForm.province_name = this.getProvince(
                this.zzprovince,
                this.zzTicketForm.province
              )
              this.invoiceForm.city_name = this.getCity(
                this.zzcity,
                this.zzTicketForm.city
              )
              this.invoiceForm.area_name = this.getArea(
                this.zzarea,
                this.zzTicketForm.area
              )
              this.invoiceForm.radio = Number(this.zzTicketForm.radio)
              this.invoiceForm.ticket = false
              this.isShowTicket = true
              this.commitOrders.ticketId = res.data.invoice_id
              // this.close()
              this.$emit('handleClose')
              this.stepOne = true
              this.stepTwo = false
              this.stepThree = false
              // this.getUnTicketData()
              this.$bus.$emit('chengeItem')
              this.$emit('getUnTicketData')
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
    // 获取发票信息
    getTicket() {
      ticketorder.getLastTicket(this.invoiceForm).then(res => {
        if (res.status === 0) {
          if (res.data.type == '1' || res.data.type == '2') {
            this.ticketForm.saveioc = res.data.type == '1' ? false : true
            if (res.data.type == '1') {
              this.ticketForm.companyname = ''
            } else {
              this.ticketForm.companyname = res.data.invoice_name
            }
            this.choose = '1'
            this.ticketForm.number = res.data.invoice_number
            this.ticketForm.name = res.data.consignee
            this.ticketForm.tel = res.data.phone
            this.ticketForm.province = res.data.province
            this.ticketForm.city = res.data.city
            this.city = this.getRegion(this.province, this.ticketForm.province)
            this.ticketForm.area = res.data.area
            this.area = this.getRegion(this.city, this.ticketForm.city)
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
          if (res.data.type == '3') {
            this.choose = '2'
            this.ticketForm.saveioc = res.data.type == '1' ? false : true
            this.zzTicketForm.companyname = res.data.invoice_name
            this.zzTicketForm.zcadd = res.data.company_address
            this.zzTicketForm.phones = res.data.company_phone
            this.zzTicketForm.bank = res.data.bank_name
            this.zzTicketForm.account = res.data.bank_card
            this.zzTicketForm.number = res.data.invoice_number
            this.zzTicketForm.name = res.data.consignee
            this.zzTicketForm.tel = res.data.phone
            this.zzTicketForm.province = res.data.province
            this.zzcity = this.getRegion(
              this.zzprovince,
              this.zzTicketForm.province
            )
            this.zzTicketForm.city = res.data.city
            this.zzarea = this.getRegion(this.zzcity, this.zzTicketForm.city)
            this.zzTicketForm.area = res.data.area
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
        }
      })
    },
    // 关闭表单
    close() {
      this.$emit('handleClose')
      // this.showInfo = false
      // this.showInvoice = false
    }
  },
  mounted() {
    this.getRegionList()
    this.getTicket()
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
      this.city = this.getRegion(this.province, val)
    },
    'ticketForm.city'(val, oldval) {
      if (!this.city && this.city.length == 0) {
        this.getRegionList()
      }
      this.area = this.getRegion(this.city, val)
    },
    zzprovince(val) {
      this.zzcity = this.getRegion(val, this.zzTicketForm.province)
      this.zzarea = this.getRegion(this.zzcity, this.zzTicketForm.city)
    },
    'zzTicketForm.province'(val, oldval) {
      if (!this.zzprovince && this.zzprovince.length == 0) {
        this.getRegionList()
      }
      this.zzcity = this.getRegion(this.zzprovince, val)
    },
    'zzTicketForm.city'(val, oldval) {
      if (!this.zzcity && this.zzcity.length == 0) {
        this.getRegionList()
      }
      this.zzarea = this.getRegion(this.zzcity, val)
    },
    address(val) {
      if (val) {
        persistStore.set('address', val)
      }
    }
  }
}
</script>

<style scoped>
</style>