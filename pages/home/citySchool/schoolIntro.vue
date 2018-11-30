<template>
  <div class="schoolIntro">
    <div class="schoolBanner">
      <h4>1911学堂城市分校校长招募计划</h4>
      <p>1911学堂是一所源自清华、面向世界、致力于终身教育的互联网学校。学堂愿景是成为全球优质的终身教育提供者，让努力奋进的人都能享受到全球最好的教育；学堂的目标是构建全球教育共同体。基于此，现面向全球招募分校校长，首先开启国内城市分校校长招募计划。</p>
      <p>国内城市分校校长招募计划是1911学堂推动全球布局、实现多方共赢的重大战略举措，旨在打造全球终身教育网络，惠及世界各国的终身学习者。</p>
      <p>成为1911学堂分校校长，您会得到1911学堂总部的大力支持，并在以下方面获得成长与收益：</p>
    </div>
    <div class="schoolInfo">
      <img
        class="schoolImg topImg"
        src="http://static-image.1911edu.com/schoolIntro2.png"
        alt=""
      >
      <div class="color">
        <div class="img"></div>
        <!-- <img class="schoolImg" src="http://static-image.1911edu.com/schoolIntro3.png" alt=""> -->
      </div>
      <img
        class="schoolImg"
        src="http://static-image.1911edu.com/schoolIntro4.png"
        alt=""
      >
      <!-- <p><span @click="handleLink('/home/citySchool/viewSchoolAddress')">查看已有分校</span></p> -->
      <img
        style="margin-top:80px"
        class="schoolImg"
        src="http://static-image.1911edu.com/schoolIntro5.png"
        alt=""
      >
      <!-- <p class="bottom"><span @click="handleLink('/home/citySchool/schoolApplication')">立即申请</span></p> -->
      <div class="apply">
        <div class="applyInputs">
          <!-- <div class="con-item counsel clearfix">
            <div class="fl">申请咨询：</div>
            <div class="fr">
              <p>闫雨辰&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15117961911&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yanyuchen@1911thu.com</p>
              <p>谢晓辉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18614061911&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xiexiaohui@1911thu.com</p>
            </div>
          </div> -->

          <div class="con-item name clearfix">
            <div class="fl"><i class="red">*</i>城市：</div>
            <div class="fr selectFr">
              <div class="text">请选择您要申请成为分校校长的城市</div>
              <el-select
                v-model="schoolForm.province_name"
                placeholder="请选择省份"
                @change="provinceChange"
              >
                <el-option
                  v-for="(p,index) in province"
                  :key="'prov'+index"
                  :label="p.label"
                  :value="p.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="schoolForm.city_name"
                placeholder="请选择城市"
                no-data-text="请先选择所在省份"
                @change="cityChange"
              >
                <el-option
                  v-for="(p,index) in city"
                  :key="'city'+index"
                  :label="p.label"
                  :value="p.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl"><i class="red">*</i>姓名：</div>
            <div class="fr">
              <el-input
                v-model="schoolForm.name"
                placeholder="请输入您的姓名"
              ></el-input>
            </div>
          </div>
          <div class="con-item name clearfix">
            <div class="fl"><i class="red">*</i>电话：</div>
            <div class="fr">
              <el-input
                v-model="schoolForm.tel"
                placeholder="请输入您的手机号"
              ></el-input>
              <!-- <el-input class="tel" v-model="teacherForm.tel" placeholder="请填写手机号"></el-input> -->
              <!-- <el-input class="verification" v-model="teacherForm.code" placeholder="请填写短信验证码"></el-input> -->
              <!-- <span class="code" @click="smsCodes">{{telCodes.getCode}}</span> -->
            </div>
          </div>

          <div class="con-item name clearfix">
            <div class="fl"><i class="red">*</i>邮箱：</div>
            <div class="fr">
              <el-input
                v-model="schoolForm.email"
                placeholder="请输入您的邮箱"
              ></el-input>
            </div>
          </div>
          <div class="submit">
            <el-button
              :disabled="isClick"
              @click="validate"
            >提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Trim, matchSplits, setTitle, message } from "@/lib/util/helper";
import { personalset, school } from "~/lib/v1_sdk/index";

export default {
  data() {
    return {
      isClick: false,
      province: [],
      city: [],
      mapregionList: {},
      schoolForm: {
        province: "", //省份编码
        province_name: "", //省份名称
        city: "", //城市编码
        city_name: "", //城市名称
        name: "", //姓名
        tel: "", //电话
        email: "" //邮箱
        // companyName: '', //公司名称
        // markAnalyze: '', //当地市场分析
        // advantageIntro: '', //自身优势介绍
        // jobImagine: '', //未来工作设想
        // businessLicense: '' //营业执照
      }
    };
  },
  methods: {
    handleLink(link) {
      this.$router.push(link);
    },
    provinceChange(val) {
      this.schoolForm.city_name = "";
      this.schoolForm.city = "";
      if (!this.province && this.province.length == 0) {
        this.getRegionList();
      }
      this.city = this.getRegion(this.province, val);
      for (let item of this.province) {
        if (val == item.region_code) {
          this.schoolForm.province_name = item.name;
          this.schoolForm.province = item.region_code;
        }
      }
    },
    cityChange(val) {
      if (!this.city && this.city.length == 0) {
        this.getRegionList();
      }
      for (let item of this.city) {
        if (val == item.region_code) {
          this.schoolForm.city_name = item.name;
          this.schoolForm.city = item.region_code;
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
    //表单验证
    validate() {
      if (this.isClick) {
        return false;
      }
      this.isClick = true;
      const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      const telReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
      try {
        if (Trim(this.schoolForm.province) === "") throw "请选择省份";
        if (Trim(this.schoolForm.city) === "") throw "请选择城市";
        if (Trim(this.schoolForm.name) === "") throw "请输入姓名";
        if (Trim(this.schoolForm.tel) === "") throw "请输入手机号码";
        if (!telReg.test(Trim(this.schoolForm.tel)))
          throw "请输入正确的手机号码";
        if (Trim(this.schoolForm.email) === "") throw "请输入邮箱";
        if (!emailReg.test(Trim(this.schoolForm.email)))
          throw "请输入正确的邮箱";
      } catch (err) {
        message(this, "error", err);
        this.isClick = false;
        return false;
      }
      this.applicationSchoolmaster();
    },
    //申请分校长
    applicationSchoolmaster() {
      school.doRecruit(this.schoolForm).then(res => {
        this.isClick = false;
        if (res.status == 0) {
          this.isClick = true; //页面跳转之前不允许点击
          this.$router.push("/home/citySchool/submitSuccess");
        } else {
          message(this, "error", res.msg);
        }
      });
    }
  },
  mounted() {
    setTitle("城市分校-1911学堂");
    this.getRegionList();
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/citySchool/schoolIntro.scss";
</style>