<template>
    <div class="number">
        <div class="title">1911学堂，让努力奋进的人享受到最优质的教育！</div>
        <div class="con">
            <div class="item">
                <div class="num">{{teacherNum}}+</div>
                <div class="text">国内知名专家</div>
            </div>
            <div class="item">
                <div class="num">{{registerNum}}+</div>
                <div class="text">注册用户</div>
            </div>
            <div class="item">
                <div class="num">{{courseNum}}+</div>
                <div class="text">在线课程</div>
            </div>
            <div class="item">
                <div class="num">{{serviceNum}}+</div>
                <div class="text">定制服务</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teacherNum: 0,
            registerNum: 1,
            courseNum: 0,
            serviceNum: 0,
            timer1: '',
            timer2: '',
            timer3: '',
            timer4: '',

        }
    },
    methods: {
        computedNum() {
            this.timer1 = setInterval(() => {
                this.teacherNum += 2
                if (this.teacherNum >= 1000) {
                    this.teacherNum = '1,000'
                    clearInterval(this.timer1)
                }
            }, 1);
            this.timer2 = setInterval(() => {
                this.registerNum += 150
                if (this.registerNum >= 100000) {
                    this.registerNum = '100,000'
                    clearInterval(this.timer2)
                }
            }, 1);
            this.timer3 = setInterval(() => {
                this.courseNum += 10
                if (this.courseNum >= 5000) {
                    this.courseNum = '5,000'
                    clearInterval(this.timer3)
                }
            }, 1);
            this.timer4 = setInterval(() => {
                this.serviceNum += 10
                if (this.serviceNum >= 6000) {
                    this.serviceNum = '6,000'
                    clearInterval(this.timer4)
                }
            }, 1);

        }
    },
    mounted() {
        clearInterval(this.timer1)
        clearInterval(this.timer2)
        clearInterval(this.timer3)
        clearInterval(this.timer4)
        this.computedNum()
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/style/home/num";
</style>