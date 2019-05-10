<template>
  <div>
    <div>
      <el-form :model="psnForm" :rules="rules" ref="psnForm" label-width="135px" class="psnForm">
        <el-form-item label="真实姓名" prop="real_name">
          <el-input v-model="psnForm.real_name" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="student_number">
          <el-input v-model="psnForm.student_number" readonly></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nick_name">
          <el-input v-model="psnForm.nick_name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="psnForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker v-model="psnForm.birthday" type="date" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="所在地区" prop="province" class="location">
          <el-select v-model="psnForm.province_name" placeholder="省" @change="provinceChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in province" :key="'prov'+index"></el-option>
          </el-select>
          <el-select v-model="psnForm.city_name" placeholder="市" no-data-text="请先选择所在省份" @change="cityChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
          </el-select>
          <el-select class="lastSelect" v-model="psnForm.area_name" placeholder="区" no-data-text="请先选择所在城市" @change="areaChange">
            <el-option :label="p.label" :value="p.value" v-for="(p,index) in area" :key="'area'+index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职业" prop="position" class="">
          <el-select v-model="psnForm.position" placeholder="请选择" class="profession">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="psnForm.email" maxlength="50" placeholder="请输入您的邮箱地址"></el-input>
        </el-form-item>
        <el-form-item class="telForm" disable label="手机号">
          <el-input class="telephone" v-model="psnForm.user_name" disabled></el-input>
          <span v-if="psnForm.user_name==''" @click="handleBindPhone" class="teledit">
            <img src="~assets/images/binding.png" alt>绑定
          </span>
          <span v-else class="teledit" @click="modifyPhone">
            <img src="~assets/images/edit.png" alt>修改
          </span>
        </el-form-item>
        <el-form-item label="单位名称" v-if="hasCompany" key="psnForm.company_name">
          <el-input v-model="psnForm.company_name" maxlength="30" placeholder="请输入您的单位名称"></el-input>
        </el-form-item>
        <el-form-item label="单位名称" v-else>
          <el-input v-model="psnForm.company_name" maxlength="30" placeholder="请输入您的单位名称"></el-input>
        </el-form-item>
        <el-form-item label="银行卡信息" class="bankInfo" v-if="userInfo.is_teacher==1" prop="bank_card">
          <el-input v-model="psnForm.bank_name"  placeholder="请输入开户银行"></el-input>
          <el-input class="cardInput" v-model="psnForm.bank_card"  maxlength="20" placeholder="请输入银行卡号"></el-input>
        </el-form-item>
        <el-form-item size="large" class="submit">
          <el-button type="primary" class="submitAble" @click="onSubmit('psnForm')" round>提交</el-button>
        </el-form-item>
      </el-form>
      <p class="alertText">您的个人信息与申请证书资料相关，请填写真实信息。</p>
    </div>
    <!-- 修改手机号弹窗 -->
    <div class="bindBg" v-show="showBindBg">
      <v-bindphone :bindTelData="bindTelData" :numPhone="psnForm.user_name" @close="close" @getUserData="getUserData"></v-bindphone>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { personalset } from "~/lib/v1_sdk/index";
import bindPhone from "@/pages/profile/components/mysetting/bindPhone.vue";
import { checkPhone, checkCode } from "~/lib/util/validatefn";
import { IEPopup } from "~/lib/util/helper";

export default {
  props: ["data", "hasCompany","userInfo"],
  data() {
     var bankCard = (rule, value, callback) => {
      if(this.oldCard !=this.psnForm.bank_card && this.psnForm.bank_card!=''){
        if (!((/^[0-9]{16,20}$/).test(value))){
          callback(
            new Error("请输入16-20位数字")
          );
        }
      }

      callback();
    };
    var nickName = (rule, value, callback) => {
      if (!/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        callback(
          new Error("请输入至少2位最多18位，可包含汉字，英文字母，数字，下划线")
        );
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
    return {
      oldCard:"",
      showBindBg: false,
      area: [],
      province: [],
      city: [],
      options: [],
      psnForm: {
        student_number: "", //学号
        user_name: "", //用户名
        head_img: "", //头像
        nick_name: "", //昵称
        real_name: "", //真实姓名
        birthday: "", //生日
        sex: "1", //性别
        position: "", //公司职位
        province: "", //所在省编码
        province_name: "", //所在省名称
        city: "", //所在市编码
        city_name: "", //所在市名称
        area: "", //所在区编码
        area_name: "", //区名称
        company_name: "", //所在公司名称
        company_code: "", //所在公司名称
        bank_name:'',//银行名称
        bank_card:''//银行卡号
      },
      rules: {
        real_name: [
          {
            required: true,
            message: "请填写您的真实姓名",
            trigger: "change"
          }
        ],
        nick_name: [
          { required: true, message: "昵称不能为空" },
          {
            min: 2,
            max: 18,
            message:
              "请输入至少2位最多18位，可包含汉字，英文字母，数字，下划线",
            trigger: "blur"
          },
          {
            validator: nickName,
            trigger: "blur"
          }
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change"
          }
        ],
        birthday: [
          {
            required: true,
            type: "string",
            message: "请选择生日",
            trigger: "change"
          }
        ],
        province: [
          {
            required: true,
            message: "请选择您的所在地",
            trigger: "change"
          }
        ],
        position: [
          { required: true, message: "职业不能为空" },
          {
            required: true,
            message: "请填写您的职业",
            trigger: "blur"
          }
        ],
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
        bank_card: [
          { required: false, message: "请输入16-20位数字" },
          {
            min: 8,
            max: 20,
            message:
              "请输入16-20位数字",
            trigger: "blur"
          },
          {
            validator: bankCard,
            trigger: "blur"
          }
        ],
      },
      bindTelData: {
        phones: "",
        codes: "",
        getCode: "获取验证码",
        seconds: 30,
        types: 1,
        openid: null,
        companyCodes: "",
        captchaDisable: false,
        exist: false,
        checked: false
      }
    };
  },
  components: {
    "v-bindphone": bindPhone
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    provinceChange(val) {
      this.psnForm.city_name = "";
      this.psnForm.area_name = "";
      this.psnForm.city = "";
      this.psnForm.area = "";
      if (!this.province && this.province.length == 0) {
        this.getRegionList();
      }
      this.city = this.getRegion(this.province, val);
      for (let item of this.province) {
        if (val == item.region_code) {
          this.psnForm.province_name = item.name;
          this.psnForm.province = item.region_code;
        }
      }
    },
    cityChange(val) {
      this.psnForm.area_name = "";
      this.psnForm.area = "";
      if (!this.city && this.city.length == 0) {
        this.getRegionList();
      }
      this.area = this.getRegion(this.city, val);

      for (let item of this.city) {
        if (val == item.region_code) {
          this.psnForm.city_name = item.name;
          this.psnForm.city = item.region_code;
        }
      }
    },
    areaChange(val) {
      for (let item of this.area) {
        if (val == item.region_code) {
          this.psnForm.area_name = item.name;
          this.psnForm.area = item.region_code;
        }
      }
    },
    // 整理省市区
    getRegion(data, val) {
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
    getRegionList() {
      personalset.getRegionList({ region_code: "" }).then(res => {
        this.mapregionList = res.data.regionList;
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          });
        });
      });
    },
    // 获取职业列表
    getPositionList() {
      personalset.positionList().then(res => {
        let tmp = res.data;
        this.options = tmp.map(item => {
          return { label: item.position_name, value: item.id };
        });
      });
    },
    // 提交个 人信息表单
    onSubmit(formName) {
      if (this.psnForm.province !== "") {
        if (this.psnForm.city === "" || this.psnForm.area === "") {
          this.$message({
            showClose: true,
            type: "error",
            message: "请选择地址信息！"
          });
          return false;
        }
      }

      this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.oldCard == this.psnForm.bank_card){
            //老数据和新数据一样时，不传此字段（不能传带有*的数据）
            delete this.psnForm.bank_card
            // this.psnForm.bank_card =''
          }
          personalset.perInformation(this.psnForm).then(res => {
            if (res.status == 0) {
              this.getUserData();
            } else {
              this.$message({
                showClose: true,
                type: "error",
                message: res.msg
              });
            }
          });
        }
      });
    },
    getUserData() {
      this.$emit("getUserData");
    },
    //修改手机号
    modifyPhone() {
      IEPopup("pane-tab-sixth", "-ms-page", 0);

      this.showBindBg = true;
    },
    //关闭弹框
    close() {
      IEPopup("pane-tab-sixth", "relative", 1);
      this.showBindBg = false;
    },
    //绑定手机号
    handleBindPhone() {
      IEPopup("pane-tab-sixth", "-ms-page", 0);

      this.showBindBg = true;
      this.$bus.$emit("openTwo");
    }
  },
  watch: {
    data(val) {
      this.psnForm = this.data;
    },
    province(val) {
      this.city = this.getRegion(val, this.psnForm.province);
      this.area = this.getRegion(this.city, this.psnForm.city);
    }
  },
  mounted() {
    this.oldCard = this.data.bank_card
    this.psnForm = this.data;
    if (persistStore.get("gid") && persistStore.get("gid") == "tab-sixth") {
      this.getPositionList();
      this.getRegionList();
    }
    this.$bus.$on("getPositionList", data => {
      this.getPositionList();
      this.getRegionList();
    });
  }
};
</script>

<style scoped>
</style>
