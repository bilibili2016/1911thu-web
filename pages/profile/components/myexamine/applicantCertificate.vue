<template>
  <!-- 审核中 -->
  <div class="applicant">
    <p>您已参加过<i>{{number}}</i>次考试，剩余考试次数<i>{{testPaper.surplusFrequency}}</i>次。最高成绩<i>{{testPaper.optimumAchievement}}</i>分，等级<i>{{testPaper.optimumScoreRank}}</i>，我们会以您的最高成绩颁发证书！证书下发后，您可以在个人中心查看电子版证书，也可申请纸质证书。</p>
    <!-- <el-checkbox :label="perfileForm.needPaper" @change="IsNeedPaper">需要纸质证书</el-checkbox> -->
    <div class="conList clearfix">
      <div class="fl">收货人：</div>
      <div class="fr">
        <el-input v-model="perfileForm.name" placeholder="请输入收货人姓名"></el-input>
      </div>
    </div>
    <div class="conList clearfix">
      <div class="fl">手机号：</div>
      <div class="fr">
        <el-input v-model="perfileForm.tel" placeholder="请输入手机号"></el-input>
      </div>
    </div>
    <div class="conList clearfix">
      <div class="fl">所在地区：</div>
      <div class="fr">
        <el-select v-model="perfileForm.province_name" placeholder="省" @change="provinceChange">
          <el-option v-for="(p,index) in province" :key="'prov'+index" :label="p.label" :value="p.value"></el-option>
        </el-select>
        <el-select v-model="perfileForm.city_name" placeholder="市" no-data-text="请先选择所在省份" @change="cityChange">
          <el-option v-for="(p,index) in city" :key="'city'+index" :label="p.label" :value="p.value"></el-option>
        </el-select>
        <el-select v-model="perfileForm.area_name" placeholder="区" no-data-text="请先选择所在城市" @change="areaChange">
          <el-option v-for="(p,index) in area" :key="'area'+index" :label="p.label" :value="p.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="conList clearfix">
      <div class="fl">详细地址：</div>
      <div class="fr">
        <el-input v-model="perfileForm.add" placeholder="请输入详细地址"></el-input>
      </div>
    </div>
    <div class="applicantBtn">
      <span @click="handleNext">提交</span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { store as persistStore } from "~/lib/core/store";
import { examine, personalset } from "~/lib/v1_sdk/index";
import { Trim, message, matchSplits, getNet } from "@/lib/util/helper";
export default {
  data () {
    return {
      isClick: false,
      examForm: {
        examId: ""
      },
      area: [],
      province: [],
      city: [],
      testPaper: {},
      number: 0,
      perfileForm: {
        vipID: "",
        needPaper: 1,
        name: "",
        tel: "",
        province_name: "",
        province: "",
        city_name: "",
        city: "",
        area_name: "",
        area: "",
        add: ""
      },
      mapregionList: {},
      gidForm: {
        gids: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["setGid"]),
    IsNeedPaper (val) {
      if (val) {
        this.perfileForm.needPaper = 2;
      } else {
        this.perfileForm.needPaper = 1;
      }
    },
    handleNext () {
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      const IDreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      try {
        if (Trim(this.perfileForm.name) === "") throw "请填写姓名";
        if (Trim(this.perfileForm.tel) === "") throw "请填写手机号码";
        if (!telReg.test(Trim(this.perfileForm.tel)))
          throw "请填写正确的手机号码";
        if (Trim(this.perfileForm.province_name) === "") throw "请选择省份";
        if (Trim(this.perfileForm.city_name) === "") throw "请选择市区";
        if (Trim(this.perfileForm.area_name) === "") throw "请选择区县";
        if (Trim(this.perfileForm.add) === "") throw "请填写收货详细地址";
      } catch (err) {
        message(this, "error", err);
        return false;
      }
      this.addApplyCertificate();
    },
    // 获取省市区
    getRegionList () {
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
    provinceChange (val) {
      this.perfileForm.city_name = "";
      this.perfileForm.area_name = "";
      this.perfileForm.city = "";
      this.perfileForm.area = "";
      if (!this.province && this.province.length == 0) {
        this.getRegionList();
      }
      this.city = this.getRegion(this.province, val);
      for (let item of this.province) {
        if (val == item.region_code) {
          this.perfileForm.province_name = item.name;
          this.perfileForm.province = item.region_code;
        }
      }
    },
    cityChange (val) {
      this.perfileForm.area_name = "";
      this.perfileForm.area = "";
      if (!this.city && this.city.length == 0) {
        this.getRegionList();
      }
      this.area = this.getRegion(this.city, val);
      for (let item of this.city) {
        if (val == item.region_code) {
          this.perfileForm.city_name = item.name;
          this.perfileForm.city = item.region_code;
        }
      }
    },
    areaChange (val) {
      for (let item of this.area) {
        if (val == item.region_code) {
          this.perfileForm.area_name = item.name;
          this.perfileForm.area = item.region_code;
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
    // 获取成绩信息
    getPaperDetail () {
      examine.submitTestPaper(this.examForm).then(response => {
        if (response.status == 0) {
          this.testPaper = response.data;
          this.number = 3 - response.data.surplusFrequency;
          if (!response.data.isApplyExamCertificate) {
            message(this, "error", "请查看考试记录，不能申请记录！");
            this.goProfile("tab-tenth");
          }
        } else {
          message(this, "error", response.msg);
        }
      });
    },
    // 提交
    addApplyCertificate () {
      if (this.isClick) {
        return false;
      }
      this.isClick = true;
      examine.addApplyCertificate(this.perfileForm).then(response => {
        this.isClick = false;
        if (response.status == 0) {
          message(this, "success", "提交成功");
          this.$router.push("/profile/components/myexamine/reviewing");
        } else {
          /**
           * 已申请过证书
           * 未获取到考试信息，请先进行考试
           */
          this.goProfile("tab-tenth");
          message(this, "error", response.msg);
        }
      });
    },
    // 跳转个人中心
    goProfile (item) {
      this.gidForm.gids = item;
      this.setGid(this.gidForm);
      this.$router.push("/profile");
    },
    setHeight () {
      let headerHeight = document.getElementsByClassName("headerBox")[0]
        .offsetHeight;
      let footerHeight = document.getElementsByClassName("footerBox")[0]
        .offsetHeight;
      let windowHeight = document.documentElement.clientHeight;
      document.getElementsByClassName("applicant")[0].style.minHeight =
        windowHeight - headerHeight - footerHeight + "px";
    }
  },
  watch: {
    province (val) {
      this.city = this.getRegion(val, this.perfileForm.province);
      this.area = this.getRegion(this.city, this.perfileForm.city);
    }
  },
  mounted () {
    if (persistStore.get("token")) {
      if (window.location.search) {
        this.perfileForm.vipID = matchSplits("vipID");
        this.examForm.examId = matchSplits("id");
        // 省市县
        this.getRegionList();
        this.getPaperDetail();
      } else {
        this.$router.push("/profile");
      }
    } else {
      this.$router.push("/");
    }
    this.setHeight();
  }
};
</script>


<style scoped lang="scss">
@import "~assets/style/profile/applicantCertificate.scss";
</style>