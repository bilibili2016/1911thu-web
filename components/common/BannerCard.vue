<template>
  <div>
    <template v-if="config.card_type === 'ding'">
      <div class="customization">
        <div class="pro clearfix" v-for="(pro,index) in dingData" :key="index" @click="getMore(pro.link_url)">
          <i class="fl">
            <img :src="pro.picture" alt="">
          </i>
          <div class="fr con">
            <h5>{{pro.title}}</h5>
            <p>{{pro.content}}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
