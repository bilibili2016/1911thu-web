<template>
  <div class="main">
    <div class="personalSet">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">
          <!-- 填写个人信息 -->
          <el-form v-if="hasPersonalInfo" :model="psnForm" :rules="rules" ref="psnForm" label-width="135px" class="psnForm">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="psnForm.nick_name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="psnForm.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-date-picker v-model="psnForm.birthday" type="date"></el-date-picker>
            </el-form-item>
            <el-form-item label="所在地区" prop="address">
              <el-select v-model="psnForm.province" placeholder="省">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in province" :key="'prov'+index"></el-option>
              </el-select>
              <el-select v-model="psnForm.city" placeholder="市">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
              </el-select>
              <el-select v-model="psnForm.area" placeholder="区">
                <el-option :label="p.label" :value="p.value" v-for="(p,index) in area" :key="'area'+index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职业" prop="position">
              <el-select v-model="psnForm.position" placeholder="请选择" class="profession">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="psnForm.email"></el-input>
            </el-form-item>
            <el-form-item disable label="手机号" prop="name">
              <el-input v-model="psnForm.user_name" disabled></el-input>
            </el-form-item>
            <el-form-item label="公司信息" prop="name">
              <el-input v-model="psnForm.company_name" disabled></el-input>
            </el-form-item>
            <el-form-item size="large" class="submit">
              <el-button type="primary" @click="onSubmit" round>提交</el-button>
            </el-form-item>
          </el-form>
          <!-- 展示个人信息 -->
          <div v-else class="psnInfo">
            <ul>
              <li><span>昵称：</span><span>{{psnInfo.name}}</span></li>
              <li><span>性别：</span><span>{{psnInfo.sex}}</span></li>
              <li><span>生日：</span><span>{{psnInfo.birthday}}</span></li>
              <li><span>所在地区：</span><span>{{psnInfo.address}}</span></li>
              <li><span>职位：</span><span>{{psnInfo.position}}</span></li>
              <li><span>邮箱：</span><span>{{psnInfo.email}}</span></li>
              <li><span>手机号：</span><span class="default">{{psnInfo.tel}}</span></li>
              <li><span>公司信息：</span><span class="default">{{psnInfo.company}}</span></li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">
          <!-- 修改密码 -->
          <div v-show="showPwd" class="changePwd">
            <el-form :model="changePwd" status-icon :rules="pwdRules" ref="changePwd" label-width="135px" class="demo-ruleForm">
              <el-form-item label="原密码：" prop="oldPass">
                <el-input type="password" v-model="changePwd.oldPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="newPass">
                <el-input type="password" v-model="changePwd.newPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码：" prop="checkPass">
                <el-input type="password" v-model="changePwd.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('changePwd')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <transition name="fade">
      <div class="success" v-show="updateSuccess">
        <img src="@/assets/images/bindingSuccess.png">
        <p>恭喜您操作成功</p>
    </div>
    </transition>
  </div>
</template>

<script>
import { home } from "~/lib/v1_sdk/index";
export default {
  watch: {
    "psnForm.province"(val) {
      this.city = [];
      this.psnForm.city = "";
      if(this.mapregionList){
        for (let item of this.mapregionList) {
        if (item.region_code == val) {
          for (let cit of item.city) {
            this.city.push(
              Object.assign({},cit,{ label: cit.name, value: cit.region_code })
            );
          }
        }
      }
      }
    },
    "psnForm.city"(val) {
      this.area = [];
      for (let item of this.city) {
        if (item.region_code == val) {
          for (let cit of item.city) {
            this.area.push(
              Object.assign({},cit,{ label: cit.name, value: cit.region_code })
            );
          }
        }
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab == "first") {
        this.getUserInfo();
      }
    },
    getUserInfo() {
      home.getUserInfo().then(res => {
        this.psnForm = res.data.userInfo;
        this.getRegionList(this.psnForm.region_code);
      });
    },
    onSubmit() {
      home.perInformation(this.psnForm).then(res => {
        let flag = res.status !=0 ? false : true
        this.$emit('update',flag)
      });
    },
    getRegionList(regionCode) {
      home.getRegionList({ region_code: regionCode }).then(res => {
        this.mapregionList = res.data.regionList;
        this.province = this.mapregionList.map(item => {
          return { label: item.name, value: item.region_code };
        });
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let tmp = {
            oldps: this.changePwd.oldPass,
            newpass: this.changePwd.newPass,
            newpasso: this.changePwd.checkPass
          };
          return new Promise((resolve, reject) => {
            home.editPassWord(tmp).then(res => {
              this.changePwd = {
                oldPass: "",
                newPass: "",
                checkPass: ""
              };
              this.updateSuccess = true;
              setTimeout(() => {
                this.updateSuccess = false;
              }, 1000);
            });
          });
        } else {
          return false;
        }
      });
    },
    getPositionList(){
      home.positionList().then(res => {
        let tmp = res.data;
        this.options = tmp.map(item => {
          return { label: item.position_name, value: item.id };
        });
      });
    }
  },
  mounted() {
    this.getUserInfo();
    this.getPositionList()
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.changePwd.checkPass !== "") {
          this.$refs.changePwd.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changePwd.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regionList: [],
      area: [],
      province: [],
      city: [],
      activeName: "first",
      hasPersonalInfo: true,
      showPwd: true,
      updateSuccess: false,
      options: [],
      changePwd: {
        oldPass: "",
        newPass: "",
        checkPass: ""
      },
      pwdRules: {
        oldPass: [
          {
            validator: validatePass,
            trigger: "blur",
            message: "请输入旧密码"
          }
        ],
        newPass: [
          {
            validator: validatePass,
            trigger: "blur",
            message: "请输入至少6位的密码"
          }
        ],
        checkPass: [
          {
            validator: validatePass2,
            trigger: "blur",
            message: "请再次输入密码"
          }
        ]
      },
      psnInfo: {
        name: "王大锤丢了锤",
        sex: "男",
        birthday: "2018-05-31",
        address: "河南省郑州市郑东新区",
        position: "技术",
        email: "163735467@qq.com",
        tel: "19728166173",
        company: "北京那么大科技有限公司"
      },
      psnForm: {
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
        company_name: "" //所在公司名称
      },
      rules: {
        name: [
          {
            message: "请输入昵称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 8,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        sex: [
          {
            message: "请选择性别",
            trigger: "change"
          }
        ],
        birthday: [
          {
            type: "date",
            message: "请选择生日",
            trigger: "change"
          }
        ],
        address: [
          {
            message: "请选择您的所在地",
            trigger: "change"
          }
        ],
        position: [
          {
            message: "请填写您的职位",
            trigger: "blur"
          }
        ],
        email: [
          {
            message: "请输入邮箱地址",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  }
};
</script>

