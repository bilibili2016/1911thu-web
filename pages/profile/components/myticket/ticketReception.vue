<template>
  <div class="ticketInfo">
    <div class="invoiceInfo" ref="invoiceInfo">
      <h3 class="clearfix">发票信息
        <i class="el-icon-close fr" @click="close"></i>
      </h3>
      <h5>接收方式</h5>
      <el-form :model="electronicData" :rules="electronicRules" label-width="135px" ref="electronicData" class="ticketReception" v-show="flag">
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="electronicData.email" placeholder="用于向您发送电子邮件"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="electronicData.phone" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item class="operation">
          <el-button @click="handBack" round>返回</el-button>
          <el-button type="primary" @click="submitElectronic('electronicData')" round>下一步</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="mailData" :rules="mailRules" label-width="135px" ref="mailData" class="ticketReception" v-show="!flag">
        <el-form-item label="收件人" prop="name">
          <el-input v-model="mailData.name" placeholder="请输入您的姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="mailData.phone" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item label="所在地区" prop="province" class="province" ref="province">
          <el-select v-model="mailData.province_name" placeholder="省" @change="provinceChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in province" :key="'prov'+index"></el-option>
          </el-select>
          <el-select v-model="mailData.city_name" placeholder="市" no-data-text="请先选择所在省份" @change="cityChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
          </el-select>
          <el-select v-model="mailData.area_name" placeholder="区" no-data-text="请先选择所在城市" @change="areaChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in area" :key="'area'+index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="mailData.address" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item class="operation">
          <el-button @click="handBack" round>返回</el-button>
          <el-button type="primary" @click="submitMail('mailData')" round>下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ticketorder } from "~/lib/v1_sdk/index";
import { Trim } from "~/lib/util/helper";
import { store as persistStore } from "~/lib/core/store";
export default {
  data () {
    var validateTel = (rule, value, callback) => {
      if (Trim(value) == "" ||
        !/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
        callback(new Error("请输入正确的手机号！"));
      }
      callback();
    };
    var validateEmail = (rule, value, callback) => {
      if (
        !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱！"));
      }
      callback();
    };
    var validateProvince = (rule, value, callback) => {
      if (this.mailData.area_name == '') {
        callback(new Error("请选择您的所在地区！"));
      }
      callback();
    }
    return {
      flag: true,
      province: [],
      city: [],
      area: [],
      electronicData: {
        email: '',
        phone: '',
      },
      invoiceData: '',
      mailData: {
        name: '',
        phone: '',
        province: "", //所在省编码
        province_name: "", //所在省名称
        city: "", //所在市编码
        city_name: "", //所在市名称
        area: "", //所在区编码
        area_name: "", //区名称
        address: '',
      },
      electronicRules: {
        email: [
          {
            required: true,
            message: "请输入正确的邮箱地址",
            trigger: ["blur"]
          },
          {
            validator: validateEmail,
            trigger: "blur"
          }
        ],
        phone: [{
          required: true,
          validator: validateTel,
          trigger: "blur"
        }
        ],
      },
      mailRules: {
        name: [
          {
            required: true,
            message: "请输入您的姓名",
            trigger: "change"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入联系电话",
            trigger: "blur"
          }, {
            validator: validateTel,
            trigger: "blur"
          }
        ],
        province: [
          {
            required: true,
            message: "请选择您的所在地区！",
            trigger: "blur"
          },
          {
            validator: validateProvince,
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "请输入您的详细地址",
            trigger: "blur"
          }
        ]
      },
    }
  },
  methods: {
    // 关闭表单
    close () {
      this.$emit("handleClose");
    },
    closeForm () {
      this.$emit('closeForm')
    },
    handBack () {
      this.$emit("handBack");
    },
    // 点击下一步，保存数据 电子
    submitElectronic (data) {
      this.$refs[data].validate(valid => {
        if (valid) {
          this.closeForm()
          //  设置填写内容保存到缓存里
          this.invoiceData = Object.assign(persistStore.get("invoiceData"), this.electronicData);
          persistStore.set("invoiceData", this.invoiceData)
          //  进入到提交信息开发票页
          this.$bus.$emit("showConfirm", this.electronicData);
        }
      })
    },
    // 点击下一步，保存数据 纸质
    submitMail (data) {
      this.$refs[data].validate(valid => {
        if (valid) {
          this.closeForm()
          //   设置填写内容保存到缓存里
          this.invoiceData = Object.assign(persistStore.get("invoiceData"), this.mailData);
          persistStore.set("invoiceData", this.invoiceData)
          //  进入到提交信息开发票页
          this.$bus.$emit("showConfirm", this.mailData);
        }
      })
    },
    // 切换省市区
    provinceChange (val) {
      this.mailData.city_name = "";
      this.mailData.area_name = "";
      this.mailData.city = "";
      this.mailData.area = "";
      if (!this.province && this.province.length == 0) {
        this.getRegionList();
      }
      this.city = this.getRegion(this.province, val);
      for (let item of this.province) {
        if (val == item.region_code) {
          this.mailData.province_name = item.name;
          this.mailData.province = item.region_code;
        }
      }
    },
    // 切换市区
    cityChange (val) {
      this.mailData.area_name = "";
      this.mailData.area = "";
      if (!this.city && this.city.length == 0) {
        this.getRegionList();
      }
      this.area = this.getRegion(this.city, val);

      for (let item of this.city) {
        if (val == item.region_code) {
          this.mailData.city_name = item.name;
          this.mailData.city = item.region_code;
        }
      }
    },
    // 切换区
    areaChange (val) {
      for (let item of this.area) {
        if (val == item.region_code) {
          this.mailData.area_name = item.name;
          this.mailData.area = item.region_code;
        }
      }
    },
    // 整理省市区
    getRegion (data, val) {
      let tmp = [];
      for (let item of data) {
        if (item.region_code == val) {
          for (let cit of item.city) {
            tmp.push(
              Object.assign({}, cit, {
                label: cit.name,
                value: cit.region_code
              })
            );
          }
        }
      }
      return tmp;
    },
    // 获取省市区
    getRegionList () {
      ticketorder.getRegionList({ region_code: "" }).then(res => {
        this.mapregionList = res.data.regionList;
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          });
        });
      });
    },
    // 拿到数据赋值
    processData (data) {
      if (data.select == 1) {
        this.flag = true
      } else {
        this.flag = false
      }
      if (data.select == 1) {
        this.electronicData.email = data.email
        data.email ? this.electronicData.phone = data.phone : this.electronicData.phone = ''

      } else {
        this.mailData.name = data.name
        data.name ? this.mailData.phone = data.phone : this.mailData.phone = ''
        this.mailData.province = data.province
        this.mailData.province_name = data.province_name
        this.mailData.city = data.city
        this.mailData.city_name = data.city_name
        this.mailData.area = data.area
        this.mailData.area_name = data.area_name
        this.mailData.address = data.address
      }
    }
  },
  watch: {
    province (val) {
      this.city = this.getRegion(val, this.mailData.province);
      this.area = this.getRegion(this.city, this.mailData.city);
    },
  },
  mounted () {
    this.getRegionList();
    this.$nextTick(() => {
      this.$refs['electronicData'].clearValidate();
      this.$refs['mailData'].clearValidate();
    });
    if (persistStore.get("invoiceData") && persistStore.get("invoiceData") != '') {
      this.processData(persistStore.get("invoiceData"))
    }
  },
}
</script>

<style scoped lang="scss">
@import "~assets/style/profile/ticketInfo";
</style>