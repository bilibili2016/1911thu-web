<template>
  <div>
    <el-form :model="psnForm" :rules="rules" ref="psnForm" label-width="135px" class="psnForm">
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
        <el-select v-model="psnForm.city" placeholder="市" no-data-text="请先选择所在省份">
          <el-option :label="p.label" :value="p.value" v-for="(p,index) in city" :key="'city'+index"></el-option>
        </el-select>
        <el-select v-model="psnForm.area" placeholder="区" no-data-text="请先选择所在城市">
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
      <el-form-item label="单位名称" v-if="hasCompany" key="psnForm.company_name">
        <el-input v-model="psnForm.company_name"></el-input>
      </el-form-item>
      <el-form-item label="单位名称" v-else>
        <el-input v-model="psnForm.company_name"></el-input>
      </el-form-item>
      <el-form-item size="large" class="submit">
        <el-button type="primary" class="submitAble" @click="onSubmit('psnForm')" round>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
import { personalset } from '~/lib/v1_sdk/index'
export default {
  props: ['data', 'hasCompany'],
  data() {
    var nickName = (rule, value, callback) => {
      if (!/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        callback(
          new Error('请输入至少4位最多18位，可包含汉字，英文字母，数字，下划线')
        )
      }
      callback()
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
    return {
      area: [],
      province: [],
      city: [],
      options: [],
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
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
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
    // 获取职业列表
    getPositionList() {
      personalset.positionList().then(res => {
        let tmp = res.data
        this.options = tmp.map(item => {
          return { label: item.position_name, value: item.id }
        })
      })
    },
    // 获取用户信息
    getUserInfo() {
      personalset.getUserInfo().then(res => {
        this.psnForm = res.data.userInfo

        var setObj = {}
        if (this.psnForm.company_name && this.psnForm.company_name != '') {
          setObj.hasCompany = true
          persistStore.set('cpnc', this.psnForm.company_code)
        } else {
          setObj.hasCompany = false
        }
        if (res.data.userInfo.is_update === 1) {
          setObj.showInfo = true
          setObj.hasPersonalInfo = false
        } else {
          setObj.showInfo = false
          setObj.hasPersonalInfo = true
        }
        this.$emit('changeStatus', setObj)
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
            // this.$emit('update', flag)
            // this.$bus.$emit('updateUserInfo', flag)
            this.$emit('updateUserInfo', flag)
            if (res.status == 0) {
              // this.getUserInfo()
              this.$emit('getUserInfo')
              this.$bus.$emit('reUserInfo')
            } else {
              this.$message({
                showClose: true,
                type: 'error',
                message: res.msg
              })
            }
          })
        }
      })
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
  mounted() {
    this.psnForm = this.data
    if (persistStore.get('token')) {
      this.getPositionList()
      this.getRegionList()
    }
  }
}
</script>

<style scoped>
</style>
