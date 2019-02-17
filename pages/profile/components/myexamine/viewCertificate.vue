<template>
  <!-- 查看证书 -->
  <div class="viewCertificate">
    <div class="con">
      <img :src="certification" alt="">
    </div>
  </div>
</template>
<script>
import { matchSplits, message } from '~/lib/util/helper'
import { examine } from '~/lib/v1_sdk/index'

export default {
  props: [],
  data() {
    return {
      vipID: '',
      certification: '',
      responseData: {
        type: true,
        res: ''
      }
    }
  },
  methods: {
    examCertificateDetail() {
      examine.examCertificateDetail({ id: this.vipID }).then(res => {
        if (res.status == 0) {
          this.certification = res.data.examCertificateDetail.certificate_url
        } else if (res.status === 100008) {
          this.responseData.res = res
          this.$router.push('/')
          return false
        } else {
          message(this, 'error', res.msg)
        }
      })
    }
  },
  mounted() {
    this.vipID = matchSplits('id')
    this.examCertificateDetail()
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/profile/viewCertificate.scss';
</style>