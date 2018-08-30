<template>
  <div>

  </div>
</template>

<script>
export default {
  methods: {
    aa(data) {
      const step = step1 => step2 => param => step2(step1(param))
      step(data => (this.getCodeListForm.code = data))(this.bb)(data)
    },
    bb(item) {
      profileHome.getRecordList(this.getCodeListForm).then(response => {
        // this.recordData = response.data.usedInvitationCodeList
        // this.getCodeListForm.code = ''
      })
    }
  }
}
</script>

<style scoped>
</style>
