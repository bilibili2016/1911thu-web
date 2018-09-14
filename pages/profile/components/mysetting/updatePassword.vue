<template>
  <div class="changePwd">
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
</template>

<script>
import { personalset } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
import { mapGetters, mapActions } from 'vuex'
import { encryption } from '~/lib/util/helper'
export default {
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
    return {
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    // 提交修改密码
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let tmp = {
            oldps: encryption(this.changePwd.oldPass),
            newpass: encryption(this.changePwd.newPass),
            newpasso: encryption(this.changePwd.checkPass)
          }
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
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>