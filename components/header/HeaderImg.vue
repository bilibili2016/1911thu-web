<template>
  <div class="headImg">
    <span>
      <img :src="data.userImg" alt="" @click="handleLinkProfile('tab-first')">
    </span>
    <!-- 个人中心下拉框 -->
    <ul class="subPages">
      <li v-for="(item,index) in subPagesData" :key="index" @click="handleLinkProfile(item.link)">{{item.text}}</li>
      <li @click="handleSignOut">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      subPagesData: [
        {
          link: 'tab-first',
          text: '我的首页'
        },
        {
          link: 'tab-second',
          text: '我的课程'
        },
        {
          link: 'tab-third',
          text: '我的项目'
        },
        {
          link: 'tab-fourth',
          text: '我的订单'
        },
        {
          link: 'tab-fifth',
          text: '我的消息'
        },
        {
          link: 'tab-sixth',
          text: '个人设置'
        },
        {
          link: 'tab-seventh',
          text: '兑换码管理'
        },
        {
          link: 'tab-eighth',
          text: '发票管理'
        }
      ]
    }
  },
  methods: {
    handleLinkProfile(data) {
      this.$emit('handleLinkProfile', data)
    },
    handleSignOut() {
      this.$emit('handleSignOut')
    }
  }
}
</script>

<style scoped>
</style>
