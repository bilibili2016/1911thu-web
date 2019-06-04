<template>
    <div class="welcome">
        <div class="logo fl">
            <img src="https://static-image.1911edu.com/logofooter.png" alt="">
        </div>
        <div class="btn fr">
            <span
            v-for="(item,index) in selectList"
            :key="index"
            :class="{'select':select==item.url,'items':true}"
            @click="handleClick(item.url)">
            {{item.title}}</span>
            <span class="toggle" @click="handleToggle">中</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: 'home',
            selectList: [
                { url: 'home', title: 'Home' },
                { url: 'thinkTank', title: 'Think Tank' },
                { url: 'cityBranch', title: 'City Branch' },
                { url: 'businessSchool', title: 'Business School' }
            ]
        }
    },
    methods:{
      handleClick(url){
        this.$router.push(`/english/${url}`)
      },
      handleToggle(){
        this.$bus.$emit('headerFooterShow')
        document.body.style.paddingTop = '80px'

        this.$router.push('/')
      }
    },
    mounted() {
        this.select = location.pathname.split("/")[2]
        document.body.style.paddingTop = 0
    },
}
</script>
<style lang="scss">
@import "~assets/style/english/welcome.scss";
</style>