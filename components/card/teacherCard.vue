<template>
    <div class="teacherCard clearfix">
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="img">
                <img :src="item.picture" alt="">
                <div class="topic">
                    <div class="topicTitle">TA擅长的话题</div>
                    <div class="topicItem" v-if="index<=2" v-for="(topic,index) in item.questionList" :key="'topic'+index">#{{topic.title}}</div>
                </div>
            </div>
            <div class="info">
                <div class="name">{{item.teacher_name}}</div>
                <div class="desc">{{item.graduate}}</div>
                <div class="bottom"><span class="num">{{item.bookingNum}}</span>人约聊过</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']

}
</script>

<style lang="scss" scoped>
@import "~assets/style/components/teacherCard";
</style>
