<template>
  <div class="submitSuccess">
    <div class="icon">
      <img src="@/assets/images/submit-success.png" alt="">
    </div>
    <div class="alert">提交成功！</div>
    <div class="desc">感谢您对1911学堂城市分校的关注，我们会在48小时内与您取得联系！</div>
  </div>
</template>
<script>
import { matchSplits, setTitle, message } from '@/lib/util/helper'
export default {
  mounted() {
    setTitle('提交成功-1911学堂')
  }
}
</script>
<style scoped lang="scss">
.submitSuccess {
  margin-top: 200px;
  width: 100%;
  text-align: center;

  .alert {
    color: #6417a6;
    font-size: 24px;
    margin: 30px 0;
  }
  .desc {
    width: 300px;
    margin: 0 auto;
    color: #222;
    font-size: 18px;
    line-height: 36px;
  }
}
</style>