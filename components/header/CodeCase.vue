<template>
    <!-- 兑换码弹框 -->
    <div class="exchange">
        <div class="innerWord">
            <i class="el-icon-close closeEcg" @click="closeEcg"></i>
            <div class="changeContent">
                <div class="changeInput">
                    <span>兑换码:</span>
                    <input v-model="bindForm.courseId" placeholder="请输入您的兑换码，区分大小写。">
                    <p>
                        <span>{{bindForm.error}}</span>
                    </p>
                </div>
                <div class="changeTips">
                    <p>兑换码说明：</p>
                    <p>1.输入兑换码，绑定兑换购买的课程</p>
                    <p>2.绑定成功后，不可更改。</p>
                </div>
                <div :class="['bind',{input:bindForm.isInput}]" @click="detection">绑定</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['bindForm'],
  methods: {
    closeEcg() {
      this.$bus.$emit('closeEcg')
    },
    detection() {
      this.$bus.$emit('detection')
    }
  }
}
</script>

<style scoped>
</style>