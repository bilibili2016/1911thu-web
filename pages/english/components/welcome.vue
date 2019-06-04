<template>
    <div class="welcome">
        <div class="logo fl">
            <img src="https://static-image.1911edu.com/logofooter.png" alt="">
        </div>
        <div class="btn fr">
            <span
            v-for="(item,index) in selectList"
            :key="index"
            :class="{'select':select==item.id}"
            @click="handleClick(item.id)">{{item.title}}</span>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: 'home',
            selectList: [
                { id: 'home', title: 'Home' },
                { id: 'thinkTank', title: 'Think Tank' },
                { id: 'cityBranch', title: 'City Branch' },
                { id: 'businessSchool', title: 'Business School' }
            ]
        }
    },
    methods:{
      handleClick(url){
        this.$router.push(`/english/${url}`)
      }
    },
    mounted() {
        this.select = location.pathname.split("/")[2]
        document.body.style.paddingTop = 0
    },
}
</script>

<style scoped lang="scss">
@import "~assets/style/english/welcome.scss";
</style>