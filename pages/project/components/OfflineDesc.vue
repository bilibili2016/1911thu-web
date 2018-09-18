<template>
    <div class="offlineDesc">
        <!-- 普通项目的线下课程介绍 -->
        <div v-if="project.types==='1'">
            <div v-if="data.offline_content" v-html="data.offline_content"></div>
            <div class="noData" v-else>
                <img src="http://papn9j3ys.bkt.clouddn.com/noMsg.png" alt="">
                <p>暂无线下课程介绍！</p>
            </div>
        </div>
        <!-- 自定义项目的线下课程介绍 -->
        <div v-if="project.types==='2'">
            <div class="time">
                {{data.offline_days}}天线下课程，共{{data.offline_study_time}}学时
            </div>
            <div class="con">
                <div class="teach-info">
                    <div class="item clearfix">
                        <div class="left">
                            <div class="down">
                                <div class="up"></div>
                            </div>
                        </div>
                        <div class="right">
                            <p class="title-con">线下面授课程的课程内容、上课时间、地点及食宿安排等具体事宜，由本项目联络人负责通知。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  props: ['project', 'data']
}
</script>

