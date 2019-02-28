<template>
  <div class="ticketInfo">
    <div class="invoiceInfo">
      <h3 class="clearfix">发票信息
        <i class="el-icon-close fr" @click="close"></i>
      </h3>
      <!-- 选择开发票的种类 -->
      <div class="header">
        <span :class="{checked:select==1?true:false}" @click="selectTicket(1)">电子发票
          <i></i>
        </span>
        <span :class="{checked:select==2?true:false}" @click="selectTicket(2)">纸质发票
          <i></i>
        </span>
      </div>
      <!-- 类型和内容选择 -->
      <el-form label-width="135px" class="oneForm">
        <el-form-item label="发票类型">
          <el-select v-model="invoiceForm.types" placeholder="请选择发票类型" @change="typeChange">
            <el-option :label="p.name" :value="p.types" v-for="(p,index) in invoiceArr" :key="'prov'+index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发票内容">
          <el-select v-model="invoicecon.contentId" placeholder="请选择发票内容" @change="change">
            <el-option :label="p.content" :value="p.id" v-for="(p,index) in invoiceList" :key="'prov'+index"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-form :model="ticketInfo" :rules="rules" label-width="135px" class="psnForm" ref="ticketInfo" v-show="invoiceForm.types==1||invoiceForm.types==''">
        <el-form-item label="发票抬头">
          <el-radio-group v-model="ticketInfo.invoiceType" @change="changeType">
            <el-radio label="1">单位</el-radio>
            <el-radio label="2">个人</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="" prop="companyname" v-if="ticketInfo.invoiceType==1">
          <el-input v-model="ticketInfo.companyname" placeholder="请输入单位发票抬头"></el-input>
        </el-form-item>
        <el-form-item label="纳税人识别号" prop="number" v-if="ticketInfo.invoiceType==1">
          <el-input v-model="ticketInfo.number" placeholder="请输入纳税人识别号"></el-input>
        </el-form-item>
        <el-form-item label="" prop="number" v-else>
          <el-input v-model="ticketInfo.person" placeholder="个人" readonly></el-input>
        </el-form-item>
        <el-form-item class="operation">
          <el-button type="primary" @click="ticketSubmit('ticketInfo')" round>下一步</el-button>
          <el-button @click="close" round>取消</el-button>
        </el-form-item>
      </el-form>

      <el-form :model="invoiceInfo" :rules="addRules" label-width="135px" class="psnForm" ref="invoiceInfo" v-show="invoiceForm.types==2">
        <el-form-item label="单位名称" prop="companyname">
          <el-input v-model="invoiceInfo.companyname" placeholder="请输入单位名称"></el-input>
        </el-form-item>
        <el-form-item label="纳税人识别号" prop="number">
          <el-input v-model="invoiceInfo.number" placeholder="请输入纳税人识别号"></el-input>
        </el-form-item>
        <el-form-item label="注册地址" prop="zcadd">
          <el-input v-model="invoiceInfo.zcadd" placeholder="请输入注册地址"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="telephone">
          <el-input v-model="invoiceInfo.telephone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="开户银行" prop="bank">
          <el-input v-model="invoiceInfo.bank" placeholder="请输入开户银行"></el-input>
        </el-form-item>
        <el-form-item label="银行账号" prop="account">
          <el-input v-model="invoiceInfo.account" placeholder="请输入银行账号"></el-input>
        </el-form-item>
        <el-form-item class="operation">
          <el-button type="primary" @click="invoiceSubmit('invoiceInfo')" round>下一步</el-button>
          <el-button @click="close" round>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ticketorder } from "~/lib/v1_sdk/index";
import { message } from "@/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
export default {
  data () {
    var validateTel = (rule, value, callback) => {
      if (!/^((0\d{2,3}-?\d{7,8}$)|(1[35678]\d{9}))$/.test(value)) {
        callback(new Error("请输入正确的联系电话！"));
      }
      callback();
    };
    var validateNumber = (rule, value, callback) => {
      if (this.ticketInfo.invoiceType == 1) {
        if (value == '') {
          callback(new Error("请输入正确的纳税人识别号！"));
        } else {
          if (value.length == 15 || value.length == 18 || value.length == 20) {
          } else {
            callback(new Error("请输入正确的纳税人识别号！"));
          }
        }
      }
      callback();
    };
    return {
      select: 1,
      invoiceForm: {
        types: '',
      },
      invoicecon: {
        contentId: '',
        content: '',
      },
      invoiceArr: [
        {
          name: '普通发票',
          types: "1" //发票类型
        },
      ],
      invoiceArr1: [
        {
          name: '普通发票',
          types: "1" //发票类型
        },
      ],
      invoiceArr2: [
        {
          name: '普通发票',
          types: "1" //发票类型
        },
        {
          name: '增值税专用发票',
          types: "2" //发票类型
        },
      ],
      invoiceList: [
        {
          content: '网络培训费',
          id: "1"
        },
        {
          content: '网络课程',
          id: "2"
        },
        {
          content: '技术服务费',
          id: "3"
        },
        {
          content: '其他',
          id: "4"
        },
      ],
      ticketInfo: {
        select: '', //电子发票|纸质发票
        types: '', //普通发票 | 增值税发票
        contentId: '', // 发票内容id
        content: '', // 发票内容id
        invoiceType: '1', // 发票抬头 ：单位 | 个人
        companyname: "", // 单位名称
        number: '',  // 纳税人识别号
        person: '', // 个人抬头，没啥用
      },
      invoiceInfo: {
        select: '', //电子发票|纸质发票
        types: '', //普通发票 | 增值税发票
        contentId: '', // 发票内容id
        content: '', // 发票内容
        companyname: '', // 发票抬头 
        number: '', // 纳税人识别号
        telephone: '', //联系电话
        zcadd: '', // 联系地址
        bank: '',   // 银行
        account: '', // 银行账号
      },
      flag: false,
      invoiceData: {},
      rules: {
        companyname: [
          {
            required: true,
            message: "请输入单位发票抬头",
            trigger: ["blur"]
          }
        ],
        number: [
          {
            validator: validateNumber,
            trigger: ["blur"]
          }
        ],
      },
      addRules: {
        companyname: [{
          required: true,
          message: "请输入单位名称",
          trigger: ["blur"]
        }],
        number: [{
          required: true,
          message: "请输入纳税人识别号",
          trigger: ["blur"]
        },
        {
          validator: validateNumber,
          trigger: ["blur"]
        }],
        telephone: [{
          required: true,
          message: "请输入联系电话",
          trigger: ["blur"]
        }, {
          validator: validateTel,
          trigger: ["blur"]
        }],
        zcadd: [{
          required: true,
          message: "请输入注册地址",
          trigger: ["blur"]
        }],
        bank: [{
          required: true,
          message: "请输入开户银行",
          trigger: "blur"
        }],
        account: [{
          required: true,
          max: 50,
          message: "请输入银行账号",
          trigger: "blur"
        }],
      }
    }
  },
  methods: {
    // 关闭表单 清除数据
    close () {
      this.$emit("handleClose");
    },
    closeForm () {
      this.$emit("closeForm")
    },
    // 切换 发票内容
    change (val) {
      let _this = this
      this.invoiceList.forEach(function (v, i) {
        if (v.id == val) {
          _this.invoicecon.content = v.content
          return false
        }
      })
    },
    // 开具发票的类型：电子发票 | 纸质发票
    selectTicket (v) {
      this.select = v
      v == 1 ? this.invoiceArr = this.invoiceArr1 : this.invoiceArr = this.invoiceArr2
      this.invoiceForm.types = ''
    },
    // 清除切换发票类型的时候的表单验证
    typeChange () {
      this.$refs['ticketInfo'].clearValidate();
      this.$refs['invoiceInfo'].clearValidate();
    },
    // 切换单位 | 个人
    changeType (v) {
      if (v == 1) {
        this.ticketInfo.companyname = ''
      } else {
        this.ticketInfo.companyname = '个人'
      }
      this.$refs['ticketInfo'].clearValidate();
    },
    // 获取发票内容列表
    invoiceContentList () {
      ticketorder.invoiceContentList().then(res => {
        if (res.status == 0) {
          this.invoiceList = res.data.invoiceContentList
        } else {
          message(this, "error", res.message);
        }
      })
    },
    // 普通发票  下一步
    ticketSubmit (data) {
      if (this.invoiceForm.types == '' || this.invoicecon.contentId == '') {
        message(this, "error", '请先完善发票信息后提交！');
        return false
      }
      this.$refs[data].validate(valid => {
        if (valid) {
          this.ticketInfo.select = this.select
          this.ticketInfo.types = this.invoiceForm.types
          this.ticketInfo.contentId = this.invoicecon.contentId
          this.ticketInfo.content = this.invoicecon.content
          this.changeData(this.ticketInfo)
          this.$emit('onTicket')
          this.closeForm()
        }
      })
    },
    // 增值税发票下一步
    invoiceSubmit (data) {
      if (this.invoiceForm.types == '' || this.invoicecon.contentId == '') {
        message(this, "error", '请先完善发票信息后提交！');
        return false
      }
      this.$refs[data].validate(valid => {
        if (valid) {
          this.invoiceInfo.select = this.select
          this.invoiceInfo.types = this.invoiceForm.types
          this.invoiceInfo.contentId = this.invoicecon.contentId
          this.invoiceInfo.content = this.invoicecon.content
          this.changeData(this.invoiceInfo)
          this.$emit('onTicket')
          this.closeForm()
        }
      })
    },
    // 把newData数据赋值到oldData上
    changeData (newData) {
      if (this.flag) {
        for (const key in newData) {
          this.invoiceData[key] = newData[key]
        }
      } else {
        this.invoiceData = newData
      }

      persistStore.set("invoiceData", this.invoiceData)
    },
    // 拿到数据赋值
    processData (data) {
      if (data.types == 1) {
        this.ticketInfo.select = data.select
        this.select = data.select
        this.ticketInfo.types = data.types
        this.invoiceForm.types = data.types
        if (data.select == 1) {
          this.invoiceArr = this.invoiceArr1
        } else {
          this.invoiceArr = this.invoiceArr2
        }
        this.ticketInfo.contentId = data.contentId
        this.ticketInfo.content = data.content
        this.invoicecon.contentId = data.contentId
        this.invoicecon.content = data.content
        this.ticketInfo.invoiceType = data.invoiceType
        this.ticketInfo.companyname = data.companyname
        this.ticketInfo.number = data.number
        this.ticketInfo.person = data.person
      } else {
        this.invoiceInfo.select = data.select
        this.select = data.select
        if (data.select == 1) {
          this.invoiceArr = this.invoiceArr1
        } else {
          this.invoiceArr = this.invoiceArr2
        }
        this.invoiceForm.types = data.types
        this.invoiceInfo.types = data.types
        this.invoiceInfo.contentId = data.contentId
        this.invoiceInfo.content = data.content
        this.invoicecon.contentId = data.contentId
        this.invoicecon.content = data.content
        this.invoiceInfo.companyname = data.companyname
        this.invoiceInfo.number = data.number
        this.invoiceInfo.telephone = data.telephone
        this.invoiceInfo.zcadd = data.zcadd
        this.invoiceInfo.bank = data.bank
        this.invoiceInfo.account = data.account
      }
    },
  },
  mounted () {
    this.invoiceContentList()
    if (persistStore.get("invoiceData") && persistStore.get("invoiceData") != '') {
      this.invoiceData = persistStore.get("invoiceData")
      this.processData(this.invoiceData)
      this.flag = true
    }
  },
}
</script>
<style scoped lang="scss">
@import "~assets/style/profile/ticketInfo";
</style>