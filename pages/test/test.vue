<template>
  <div>
    <div class="centers">
      <img :src="searchi" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchi: require('@/assets/images/searchi.png')
      }
    },
    methods: {
        // async smsCodes ({ phones, types }) {
        //   let data = await this.http.post('Publics/PhoneSms/appSendSms?', {
        //     phone: phones,
        //     type: types
        //   })
        //   return data
        // }
    }
  }
</script>

<style scoped>
.centers {
  width: 244px;
  height: 200px;
  margin: 133px auto;
}
.centers img{
  width: 244px;
  height: 200px;;
}
</style>
