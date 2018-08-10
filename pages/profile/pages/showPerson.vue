<template>
    <!-- 展示个人信息 -->
    <div class="psnInfo">
        <ul>
            <li>
                <span>昵称：</span>
                <span>{{data.nick_name}}</span>
            </li>
            <li>
                <span>性别：</span>
                <span>{{getSex(data.sex)}}</span>
            </li>
            <li>
                <span>生日：</span>
                <span>{{formatDate(data.birthday)}}</span>
            </li>
            <li>
                <span>所在地区：</span>
                <span>{{data.province_name}}{{data.city_name}}{{data.area_name}}</span>
            </li>
            <li>
                <span>职位：</span>
                <span>{{data.position_name}}</span>
            </li>
            <li>
                <span>邮箱：</span>
                <span>{{data.email}}</span>
            </li>
            <li>
                <span>手机号：</span>
                <span class="default">{{data.user_name}}</span>
            </li>
            <li>
                <span>单位信息：</span>
                <span class="default">{{data.company_name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
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