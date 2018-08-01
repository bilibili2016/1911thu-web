<template>
  <div class="problems">
    <div class="qustion" v-for="(qus,index) in problems" :key="index">
      <h5>
        <span>Q{{index+1}}.</span>{{qus.qustion}}
      </h5>
      <p>{{qus.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['problems']
}
</script>

<style scoped lang="scss">
.problems {
  width: 1100px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 8px 0px 21px rgba(39, 0, 77, 0.07);
  padding: 30px 30px 40px;
  .qustion {
    margin-bottom: 50px;
    &:last-child {
      padding-bottom: 0;
    }
    h5 {
      font-size: 16px;
      color: #222;
      line-height: 30px;
      span {
        color: #69189f;
        font-size: 20px;
        margin-right: 16px;
      }
    }
    p {
      font-size: 14px;
      line-height: 30px;
      color: #666;
      margin-top: 5px;
      padding-left: 46px;
    }
  }
}
</style>