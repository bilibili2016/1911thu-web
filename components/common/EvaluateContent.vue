<template>
    <!-- 用户评价内容（查看更多）弹框 -->
    <div>
        <div class="commentator clearfix" v-for="(item,index) in evaluteData" :key="index" v-if="index<3">
            <img class="fl" :src="item.head_img" alt="">
            <div class="fl">
                <p class="title">{{item.nick_name}}</p>
                <p class="time">{{item.create_time}}</p>
            </div>
            <div style="margin-top:10px;">
                <el-rate disabled v-model="item.score" class="itemBox-rate fr"></el-rate>
            </div>
            <h5 v-if="item.tags ===''">{{item.evaluate_content}}</h5>
            <h5 v-else-if="item.evaluate_content===''">{{item.tags}}</h5>
            <h5 v-else>{{item.tags}}，{{item.evaluate_content}}</h5>
        </div>
    </div>
</template>

<script>
export default {
  props: ['evaluteData']
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/evaluateCase.scss';
</style>