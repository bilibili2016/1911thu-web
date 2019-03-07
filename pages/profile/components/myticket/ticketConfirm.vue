<template>
  <div class="ticketConfirm" v-show="confirmInvoice">
    <div class="ticketPop">
      <h3 class="clearfix">开具{{ticketForm.select==1?'电子':'纸质'}}发票
        <i class="el-icon-close fr" @click="close"></i>
      </h3>
      <!-- 电子发票 普通发票  个人  单位 -->
      <div class="ticketBox" v-if="ticketForm.select==1">
        <p>发票类型：普通发票</p>
        <p v-if="ticketForm.invoiceType ==2">发票抬头：个人</p>
        <p v-else>发票抬头：{{ticketForm.invoicename}}</p>
        <p v-if="ticketForm.invoiceType ==1">纳税人识别号：{{ticketForm.number}}</p>
        <p>发票内容：{{ticketForm.content}}</p>
        <p v-if="ticketForm.invoiceType ==1">注册地址：{{ticketForm.zcadd}}</p>
        <p v-if="ticketForm.invoiceType ==1">联系电话：{{ticketForm.telephone}}</p>
        <p v-if="ticketForm.invoiceType ==1">开户银行：{{ticketForm.bank}}</p>
        <p v-if="ticketForm.invoiceType ==1">银行账号：{{ticketForm.account}}</p>

        <p>联系邮箱：{{ticketForm.email}}</p>
        <p>联系电话：{{ticketForm.phone}}</p>
        <p>备注：{{ticketForm.note}}</p>
        <p>发票金额：{{price}}元</p>
      </div>

      <!-- 纸质发票  普通发票  个人  单位 -->
      <div class="ticketBox" v-if="ticketForm.select!=1&&ticketForm.types ==1">
        <p>发票类型：普通发票</p>
        <p v-if="ticketForm.invoiceType ==2">发票抬头：个人</p>
        <p v-else>发票抬头：{{ticketForm.invoicename}}</p>
        <p v-if="ticketForm.invoiceType ==1">纳税人识别号：{{ticketForm.number}}</p>
        <p>发票内容：{{ticketForm.content}}</p>
        <p v-if="ticketForm.invoiceType ==1">注册地址：{{ticketForm.zcadd}}</p>
        <p v-if="ticketForm.invoiceType ==1">联系电话：{{ticketForm.telephone}}</p>
        <p v-if="ticketForm.invoiceType ==1">开户银行：{{ticketForm.bank}}</p>
        <p v-if="ticketForm.invoiceType ==1">银行账号：{{ticketForm.account}}</p>

        <p>收件人：{{ticketForm.name}}</p>
        <p>联系电话：{{ticketForm.phone}}</p>
        <p>所在地区：{{ticketForm.province_name}}{{ticketForm.city_name}}{{ticketForm.area_name}}</p>
        <p>详细地址：{{ticketForm.address}}</p>
        <p>备注：{{ticketForm.note}}</p>
        <p>发票金额：{{price}}元</p>
      </div>
      <!-- 纸质发票  增值税发票   -->
      <div class="ticketBox" v-if="ticketForm.select!=1&&ticketForm.types ==2">
        <p>发票类型：增值税专用发票</p>
        <p>单位名称：{{ticketForm.companyname}}</p>
        <p>注册地址：{{ticketForm.zcadd}}</p>
        <p>联系电话：{{ticketForm.telephone}}</p>
        <p>开户银行：{{ticketForm.bank}}</p>
        <p>银行账号：{{ticketForm.account}}</p>
        <p>税号：{{ticketForm.number}}</p>

        <p>发票内容：{{ticketForm.content}}</p>
        <p>收件人：{{ticketForm.name}}</p>
        <p>联系电话：{{ticketForm.phone}}</p>
        <p>所在地区：{{ticketForm.province_name}}{{ticketForm.city_name}}{{ticketForm.area_name}}</p>
        <p>详细地址：{{ticketForm.address}}</p>
        <p>备注：{{ticketForm.note}}</p>
        <p>发票金额：{{price}}元</p>
      </div>
      <!-- <p class="tips">{{tip}}</p> -->
      <div class="confirm">
        <span v-if="isHistory" @click="backFirst" class="back">编辑</span>
        <span v-else @click="back" class="back">返回</span>
        <span @click="traverseData">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ticketorder } from "~/lib/v1_sdk/index";
import { IEPopup } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
export default {
  props: ["price", 'checkedArr'],
  data () {
    return {
      tip: "邮费：全部免邮费。",
      confirmInvoice: false,
      ticketForm: {},
      invoiceForm: {},
      dataOne: { // 电子发票 普通发票  个人
        select: '', // 电子发票 | 普通发票
        types: '', // 普通发票 | 增值税发票
        invoiceType: '', // 个人 | 企业
        content: '', // 发票内容
        contentId: '',// 发票内容ID
        invoicename: '个人', // 发票抬头
        email: '', // 联系邮箱
        phone: '',  // 联系电话
        note: '',
      },
      dataTwo: { // 电子发票 普通发票  单位
        select: '',
        types: '',
        invoiceType: '',
        content: '',
        contentId: '',
        invoicename: '',
        number: '',
        zcadd: '',
        telephone: '',
        bank: '',
        account: '',
        email: '',
        phone: '',
        note: '',
      },
      dataThree: {// 纸质发票  普通发票  个人
        select: '',
        types: '',
        invoiceType: '',
        content: '',
        contentId: '',

        invoicename: '个人',
        name: '',
        phone: '',
        province_name: '',
        city_name: '',
        area_name: '',
        province: '',
        city: '',
        area: '',
        address: '',
        note: '',
      },
      dataFour: {// 纸质发票  普通发票  单位
        select: '', // 电子发票 | 普通发票
        types: '', // 普通发票 | 增值税发票
        invoiceType: '', // 个人 | 企业
        content: '', // 发票内容
        contentId: '',// 发票内容ID
        zcadd: '',
        telephone: '',
        bank: '',
        account: '',
        invoicename: '',
        number: '',
        name: '',
        phone: '',
        province_name: '',
        city_name: '',
        area_name: '',
        province: '',
        city: '',
        area: '',
        address: '',
        note: '',
      },
      dataFive: {// 纸质发票  增值税发票
        select: '', // 电子发票 | 普通发票
        types: '', // 普通发票 | 增值税发票
        content: '', // 发票内容
        contentId: '',// 发票内容ID

        companyname: '',
        number: '',
        zcadd: '',
        telephone: '',
        bank: '',
        account: '',

        name: '',
        phone: '',
        province_name: '',
        city_name: '',
        area_name: '',
        province: '',
        city: '',
        area: '',
        address: '',
        note: '',
      },
      isHistory: false,
    };
  },
  methods: {
    traverseData () {
      // 电子发票 普通发票  个人
      if (this.ticketForm.select == 1 && this.ticketForm.invoiceType == 2) {
        this.ergodicData(this.dataOne)
      }
      // 电子发票 普通发票  单位
      if (this.ticketForm.select == 1 && this.ticketForm.invoiceType == 1) {
        this.ergodicData(this.dataTwo)
      }
      // 纸质发票 普通发票  个人
      if (this.ticketForm.select == 2 && this.ticketForm.types == 1 && this.ticketForm.invoiceType == 2) {
        this.ergodicData(this.dataThree)
      }
      // 纸质发票 普通发票  单位
      if (this.ticketForm.select == 2 && this.ticketForm.types == 1 && this.ticketForm.invoiceType == 1) {
        this.ergodicData(this.dataFour)
      }
      // 纸质发票 增值税发票
      if (this.ticketForm.select == 2 && this.ticketForm.types == 2) {
        this.ergodicData(this.dataFive)
      }

    },
    ergodicData (data) {
      for (const key in data) {
        data[key] = this.ticketForm[key]
      }
      this.confirm(data)
    },
    confirm (data) {
      data.orderID = this.checkedArr;
      ticketorder.addInvoiceInfo(data).then(res => {
        if (res.status === 0) {
          this.$message({
            showClose: true,
            type: "success",
            message: res.msg
          });
          persistStore.set("invoiceData", '')
          this.close();
          this.$emit("chengeItem");
          this.$emit("getUnTicketData");
          this.$bus.$emit("historyOrderDataChange");
        } else {
          this.$message({
            showClose: true,
            type: "error",
            message: res.msg
          });
        }
      });
    },
    // 关闭当前的提交框 返回上一步
    back () {
      this.confirmInvoice = false;
      IEPopup("pane-tab-eighth", "relative", 1);
      this.$emit("goBack");
    },
    // 有历史记录，返回第一步修改发票
    backFirst () {
      this.confirmInvoice = false;
      IEPopup("pane-tab-eighth", "relative", 1);
      this.$emit("backFirst");
    },
    // 关闭当前提交框
    close () {
      this.confirmInvoice = false;
      IEPopup("pane-tab-eighth", "relative", 1);
      persistStore.set("invoiceData", '')
    },
    // 拿到数据赋值
    processData (data) {
      this.ticketForm.select = data.send_type
      this.ticketForm.types = data.type
      if (data.send_type == 1) {
        if (data.invoice_type == 1) {
          this.ticketForm.number = data.invoice_number
          this.ticketForm.invoicename = data.invoice_name
          this.ticketForm.zcadd = data.company_address
          this.ticketForm.telephone = data.company_phone
          this.ticketForm.bank = data.bank_name
          this.ticketForm.account = data.bank_card
        } else {
          this.ticketForm.invoicename = '个人'
        }
        this.ticketForm.invoiceType = data.invoice_type
        this.ticketForm.email = data.email
      }
      if (data.send_type != 1 && data.type == 1) {
        this.ticketForm.invoiceType = data.invoice_type
        if (data.invoice_type == 1) {
          this.ticketForm.invoicename = data.invoice_name
          this.ticketForm.number = data.invoice_number
          this.ticketForm.zcadd = data.company_address
          this.ticketForm.telephone = data.company_phone
          this.ticketForm.bank = data.bank_name
          this.ticketForm.account = data.bank_card
        } else {
          this.ticketForm.invoicename = '个人'
        }
        this.ticketForm.name = data.consignee
        this.ticketForm.province_name = data.province_name
        this.ticketForm.province = data.province
        this.ticketForm.city_name = data.city_name
        this.ticketForm.city = data.city
        this.ticketForm.area_name = data.area_name
        this.ticketForm.area = data.area
        this.ticketForm.address = data.address
      }
      if (data.send_type != 1 && data.type == 2) {
        this.ticketForm.companyname = data.company_name
        this.ticketForm.number = data.invoice_number
        this.ticketForm.zcadd = data.company_address
        this.ticketForm.telephone = data.company_phone
        this.ticketForm.bank = data.bank_name
        this.ticketForm.account = data.bank_card
        this.ticketForm.name = data.consignee
        this.ticketForm.province_name = data.province_name
        this.ticketForm.province = data.province
        this.ticketForm.city_name = data.city_name
        this.ticketForm.city = data.city
        this.ticketForm.area_name = data.area_name
        this.ticketForm.area = data.area
        this.ticketForm.address = data.address
      }
      this.ticketForm.phone = data.phone
      this.ticketForm.content = data.content
      this.ticketForm.contentId = data.content_type
      this.ticketForm.note = data.remake
      persistStore.set("invoiceData", this.ticketForm)
    },
  },
  mounted () {
    //   展示发票填写内容
    this.$bus.$on("showConfirm", (data, flag) => {
      //  存在发票记录，直接调取记录 渲染数据
      if (flag) {
        this.isHistory = flag
        this.processData(data)
      } else {
        //  不存在发票记录，从缓存拿数据渲染
        this.isHistory = false
        this.ticketForm = persistStore.get("invoiceData")
      }
      IEPopup("pane-tab-eighth", "-ms-page", 0);
      this.confirmInvoice = true;
    });
  }
};
</script>

<style scoped>
</style>
