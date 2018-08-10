<template>
  <div class="main">
    <div class="personalSet">
      <img class="person-edit" src="http://papn9j3ys.bkt.clouddn.com/edit-info.png" @click="changeCard()" v-if="!hasPersonalInfo&&showIcon" />
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 填写个人信息 -->
        <el-tab-pane label="基础信息" name="first">
          <el-form v-if="hasPersonalInfo" :model="psnForm" :rules="rules" ref="psnForm" label-width="135px" class="psnForm">
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
            <el-form-item label="所在地区" prop="province">
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
            <el-form-item disable label="手机号">
              <el-input v-model="psnForm.user_name" disabled></el-input>
            </el-form-item>
            <el-form-item label="单位信息" v-if="hasCompany" key="psnForm.company_name">
              <el-input v-model="psnForm.company_name"></el-input>
            </el-form-item>
            <el-form-item label="单位信息" v-else>
              <el-input v-model="psnForm.company_name"></el-input>
            </el-form-item>
            <el-form-item size="large" class="submit">
              <el-button type="primary" class="submitAble" @click="onSubmit('psnForm')" round>提交</el-button>
            </el-form-item>
          </el-form>
          <!-- 展示个人信息 -->
          <v-showPer v-if="showInfo" :data="psnForm"></v-showPer>
        </el-tab-pane>
        <!-- 修改密码 -->
        <el-tab-pane label="修改密码" name="second">
          <div v-show="showPwd" class="changePwd">
            <input type="password" class="hideInput">
            <el-form :model="changePwd" status-icon :rules="pwdRules" ref="changePwd" label-width="135px" class="demo-ruleForm" autoComplete="off">
              <el-form-item label="原密码：" prop="oldPass" id="onlyForm">
                <el-input type="password" name="noauto" v-model="changePwd.oldPass" auto-complete="off" id="onlyOne"></el-input>
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

            <input type="password" class="hideInput">
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <transition name="fade">
      <div class="success" v-show="updateSuccess">
        <img src="http://papn9j3ys.bkt.clouddn.com/bindingSuccess.png">
        <p>恭喜您操作成功</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { personalset } from '~/lib/v1_sdk/index'
import { encryption } from '~/lib/util/helper'
import { mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import ShowPerson from '@/pages/profile/pages/showPerson'
export default {
  components: {
    'v-showPer': ShowPerson
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.changePwd.checkPass !== '') {
          this.$refs.changePwd.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8 || value.length > 17) {
        callback(new Error('请输入至少8位最多16位的密码'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.changePwd.newPass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (
        !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
          value
        )
      ) {
        callback(new Error('请输入正确的邮箱！'))
      }
      callback()
    }
    var nickName = (rule, value, callback) => {
      if (!/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        callback(
          new Error('请输入至少4位最多18位，可包含汉字，英文字母，数字，下划线')
        )
      }
      callback()
    }
    return {
      hasCompany: true,
      showInfo: false,
      showIcon: true,
      regionList: [],
      area: [],
      province: [],
      city: [],
      activeName: 'first',
      hasPersonalInfo: true,
      showPwd: true,
      updateSuccess: false,
      options: [],
      changePwd: {
        oldPass: '',
        newPass: '',
        checkPass: ''
      },
      pwdRules: {
        oldPass: [
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ],
        newPass: [
          {
            validator: validatePass2,
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            validator: validatePass3,
            trigger: 'blur'
          }
        ]
      },
      psnForm: {
        user_name: '', //用户名
        head_img: '', //头像
        nick_name: '', //昵称
        real_name: '', //真实姓名
        birthday: '', //生日
        sex: '1', //性别
        position: '', //公司职位
        province: '', //所在省编码
        province_name: '', //所在省名称
        city: '', //所在市编码
        city_name: '', //所在市名称
        area: '', //所在区编码
        area_name: '', //区名称
        company_name: '', //所在公司名称
        company_code: '' //所在公司名称
      },
      rules: {
        nick_name: [
          { required: true, message: '昵称不能为空' },
          {
            min: 4,
            max: 18,
            message:
              '请输入至少4位最多18位，可包含汉字，英文字母，数字，下划线',
            trigger: 'blur'
          },
          {
            validator: nickName,
            trigger: 'blur'
          }
        ],
        sex: [
          {
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }
        ],
        birthday: [
          {
            required: true,
            type: 'string',
            message: '请选择生日',
            trigger: 'change'
          }
        ],
        province: [
          {
            required: true,
            message: '请选择您的所在地',
            trigger: 'change'
          }
        ],
        position: [
          { required: true, message: '职业不能为空' },
          {
            required: true,
            message: '请填写您的职业',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '请输入正确的邮箱地址',
            trigger: ['blur']
          },
          {
            validator: validateEmail,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    province(val) {
      this.city = this.getRegion(val, this.psnForm.province)
      this.area = this.getRegion(this.city, this.psnForm.city)
    },
    'psnForm.province'(val, oldval) {
      if (!this.province && this.province.length == 0) {
        this.getRegionList()
      }
      if (oldval != '') {
        this.psnForm.city = ''
      }
      this.city = this.getRegion(this.province, val)
    },
    'psnForm.city'(val, oldval) {
      if (!this.city && this.city.length == 0) {
        this.getRegionList()
      }
      if (oldval != '') {
        this.psnForm.area = ''
      }
      this.area = this.getRegion(this.city, val)
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    // 切换展示/编辑个人信息
    changeCard() {
      this.showInfo = false
      this.hasPersonalInfo = true
    },
    // 切换性别
    getSex(sex) {
      if (sex == 1) {
        return '男'
      } else if (sex == 2) {
        return '女'
      } else {
        return '保密'
      }
    },
    // 格式化生日
    formatDate(date) {
      if (date && date != '') {
        let tmp = new Date(date)
        let year = tmp.getFullYear()
        let mon = tmp.getMonth() + 1
        let day = tmp.getDate()
        return year + '年' + mon + '月' + day + '日'
      } else {
        return ''
      }
    },
    // 整理省市区
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
    // 切换个人信息/修改密码
    handleClick(tab, event) {
      if (tab.name == 'first') {
        this.showIcon = true
        this.getUserInfo()
      } else {
        this.showIcon = false
      }
    },
    // 获取用户信息
    getUserInfo() {
      personalset.getUserInfo().then(res => {
        this.psnForm = res.data.userInfo
        if (this.psnForm.company_name && this.psnForm.company_name != '') {
          this.hasCompany = true
          persistStore.set('cpnc', this.psnForm.company_code)
        } else {
          this.hasCompany = false
        }
        if (res.data.userInfo.is_update === 1) {
          this.showInfo = true
          this.hasPersonalInfo = false
        } else {
          this.showInfo = false
          this.hasPersonalInfo = true
        }
      })
    },
    // 提交个 人信息表单
    onSubmit(formName) {
      if (this.psnForm.province !== '') {
        if (this.psnForm.city == '' || this.psnForm.area == '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请选择地址信息！'
          })
          return false
        }
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          personalset.perInformation(this.psnForm).then(res => {
            let flag = res.status != 0 ? false : true
            this.$emit('update', flag)
            if (res.status == 0) {
              this.getUserInfo()
              this.showInfo = true
              this.hasPersonalInfo = false
            } else {
              this.$message({
                showClose: true,
                type: 'error',
                message: res.msg
              })
              this.showInfo = false
              this.hasPersonalInfo = true
            }
          })
        }
      })
    },
    // 获取省市区
    getRegionList() {
      personalset.getRegionList({ region_code: '' }).then(res => {
        this.mapregionList = res.data.regionList
        this.province = this.mapregionList.map(item => {
          return Object.assign({}, item, {
            label: item.name,
            value: item.region_code
          })
        })
      })
    },
    // 提交修改密码
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let tmp = {
            oldps: encryption(this.changePwd.oldPass),
            newpass: encryption(this.changePwd.newPass),
            newpasso: encryption(this.changePwd.checkPass)
          }
          return new Promise((resolve, reject) => {
            personalset.editPassWord(tmp).then(res => {
              this.changePwd = {
                oldPass: '',
                newPass: '',
                checkPass: ''
              }
              if (res.status == 0) {
                this.$alert('修改成功，请重新登录！', '温馨提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$router.push('/')
                    this.signOut()
                    this.$bus.$emit('loginShow', true)
                  }
                })
                persistStore.clearAll()
              } else {
                let msg = res.msg
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: res.msg
                })
              }
            })
          })
        } else {
          return false
        }
      })
    },
    // 获取职业列表
    getPositionList() {
      personalset.positionList().then(res => {
        let tmp = res.data
        this.options = tmp.map(item => {
          return { label: item.position_name, value: item.id }
        })
      })
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.getUserInfo()
      this.getPositionList()
      this.getRegionList()
    }
  }
}
</script>

