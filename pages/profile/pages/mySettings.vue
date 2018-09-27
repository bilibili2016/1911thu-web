<template>
  <div class="main">
    <div class="personalSet">
      <img class="person-edit" src="http://papn9j3ys.bkt.clouddn.com/edit-info.png" @click="changeCard()" v-if="!hasPersonalInfo&&showIcon" />
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 填写个人信息 -->
        <el-tab-pane label="基础信息" name="first">
          <!-- 设置个人信息 -->
          <v-setPer v-if="hasPersonalInfo" :data="psnForm" :hasCompany="hasCompany" @changeStatus="changeStatus" @getUserInfo="getUserInfo" @updateUserInfo=" updateUserInfo"></v-setPer>
          <!-- 展示个人信息 -->
          <v-showPer v-if="showInfo" :psnForm="psnForm"></v-showPer>
        </el-tab-pane>
        <!-- 修改密码 -->
        <el-tab-pane label="修改密码" name="second">
          <v-password v-show="showPwd"></v-password>
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
import ShowPerson from '@/pages/profile/components/mysetting/showPersonal'
import SetPerson from '@/pages/profile/components/mysetting/setPersonal'
import SetPassword from '@/pages/profile/components/mysetting/updatePassword'
export default {
  components: {
    'v-showPer': ShowPerson,
    'v-setPer': SetPerson,
    'v-password': SetPassword
  },
  data() {
    return {
      hasCompany: true,
      showInfo: false,
      showIcon: true,
      regionList: [],
      area: [],
      province: [],
      city: [],
      activeName: 'first',
      hasPersonalInfo: false,
      showPwd: true,
      updateSuccess: false,
      options: [],
      changePwd: {
        oldPass: '',
        newPass: '',
        checkPass: ''
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
    // 切换展示/编辑个人信息
    changeCard() {
      this.showInfo = false
      this.hasPersonalInfo = true
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
      if (persistStore.get('token')) {
        if (tab.name == 'first') {
          this.showIcon = true
          this.getUserInfo()
        } else {
          this.showIcon = false
        }
      } else {
        this.$router.push('/')
        this.$bus.$emit('loginShow', true)
      }
    },
    // 获取用户信息
    getUserInfo() {
      personalset.getUserInfo().then(res => {
        if (res.status === 0) {
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
        }
      })
    },
    //提交个人信息表单成功后根据用户信息更新值
    changeStatus(setObj) {
      this.showInfo = setObj.showInfo
      this.hasCompany = setObj.hasCompany
      this.hasPersonalInfo = setObj.hasPersonalInfo
    },
    updateUserInfo(val) {
      this.$emit('updateUserInfo', val)
    }
  },
  mounted() {
    if (persistStore.get('token')) {
      this.getUserInfo()
      // this.getPositionList()
      // this.getRegionList()
    }
    this.$bus.$on('activeSet', () => {
      this.activeName = 'first'
    })
  }
}
</script>

