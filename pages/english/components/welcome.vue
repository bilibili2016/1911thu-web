<template>
  <div class="welcome">
    <div class="logo fl">
      <img src="https://static-image.1911edu.com/logofooter.png" alt="">
    </div>
    <div class="btn fr">
      <span :class="{'select':select=='home'}">Home</span>
      <span :class="{'select':select=='thinkTank'}">Think Tank</span>
      <span :class="{'select':select=='cityBranch'}">City Branch</span>
      <span :class="{'select':select=='businessSchool'}">Business School</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'home',
    }
  },
  mounted () {
    this.select = location.pathname.split("/")[2]
    console.log(this.select);

    document.body.style.paddingTop = 0
  },
}
</script>
<style lang="scss">
@import "~assets/style/english/welcome.scss";
</style>