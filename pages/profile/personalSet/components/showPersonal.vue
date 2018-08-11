<template>
  <!-- 展示个人信息 -->
  <div class="psnInfo">
    <ul>
      <li>
        <span>昵称：</span>
        <span>{{psnForm.nick_name}}</span>
      </li>
      <li>
        <span>性别：</span>
        <span>{{getSex(psnForm.sex)}}</span>
      </li>
      <li>
        <span>生日：</span>
        <span>{{formatDate(psnForm.birthday)}}</span>
      </li>
      <li>
        <span>所在地区：</span>
        <span>{{psnForm.province_name}}{{psnForm.city_name}}{{psnForm.area_name}}</span>
      </li>
      <li>
        <span>职位：</span>
        <span>{{psnForm.position_name}}</span>
      </li>
      <li>
        <span>邮箱：</span>
        <span>{{psnForm.email}}</span>
      </li>
      <li>
        <span>手机号：</span>
        <span class="default">{{psnForm.user_name}}</span>
      </li>
      <li>
        <span>单位信息：</span>
        <span class="default">{{psnForm.company_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  props: ['data'],
  data() {
    return {
      psnForm: ''
    }
  },
  computed: {
    ...mapState('auth', ['personalForm']),
    ...mapGetters('auth', ['personalForm'])
  },
  mounted() {
    console.log(222)

    this.psnForm = this.personalForm
    console.log(this.personalForm)
  },
  methods: {
    ...mapActions('auth', ['personalForm']),
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
    }
  }
}
</script>

<style scoped>
</style>