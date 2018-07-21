<template>
  <div>
    <v-home></v-home>
  </div>
</template>
<script>
import Home from '@/pages/home/index.vue'
export default {
  components: {
    'v-home': Home
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
    this.$bus.$emit('bannerShow', false)
    var isIE = function(ver) {
      var b = document.createElement('b')
      b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
      return b.getElementsByTagName('i').length === 1
    }
    // this.$router.push('/ie')
    // let a = new Vue()
    // // console.log(Vue, '这是this')
    // console.log(new Vue())
    // a.$router.push('/ie')
    alert(
      'ie6:' +
        isIE(6) +
        '\n' +
        'ie7:' +
        isIE(7) +
        '\n' +
        'ie8:' +
        isIE(8) +
        '\n' +
        'ie9:' +
        isIE(9) +
        '\n' +
        'ie:' +
        isIE()
    )
  }
}
</script>

