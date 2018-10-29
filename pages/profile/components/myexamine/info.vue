<template>
    <!-- 个人信息填写 -->
    <div class="examine-info">
        <div class="examine-top">
            <span class="goBack" @click="handleBack">
                <i class=" el-icon-arrow-left icon"></i>个人信息填写
            </span>
        </div>
        <div class="bottom">
            <div class="bottom-title">请填写您的真实信息，用于申请认证，信息填写完成后不可更改！</div>
            <div class="inputs">
                <div class="items clearfix">
                    <div class="fl">您的姓名：</div>
                    <div class="fr">
                        <el-input></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的手机号：</div>
                    <div class="fr">
                        <el-input></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的身份证号：</div>
                    <div class="fr">
                        <el-input></el-input>
                    </div>
                </div>
                <div class="items clearfix">
                    <div class="fl">您的单位名称：</div>
                    <div class="fr">
                        <el-input></el-input>
                    </div>
                </div>
                <div class="examine-btn " @click="handleNext">下一步</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    handleBack() {
      this.$bus.$emit('whichShow', 'list')
    },
    handleNext() {
      this.$bus.$emit('whichShow', 'intro')
    }
  }
}
</script>