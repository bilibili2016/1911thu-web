<template>
    <div class="offlineDesc">
        <!-- 普通项目：暂时用默认的；自定义项目直接用字段 -->
        <!-- 线下课程介绍暂时是固定的  普通项目的线下课程介绍后台还没做 -->
        <div class="time" v-if="project.types==='1'">
            3天线下课程，共24学时
        </div>
        <div class="time" v-else>
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
                        <p class="title-con">
                            线下课堂面授
                        </p>
                        <p class="text">
                            通过课堂面对面的讨论交流、互动答疑以及现场教学、参观考察等方式，针对课程中存疑的内容结合工作实践进行全面分析，并解决实际的问题。 线下培训费用包含资料费、授课费、场地费，不含往返交通费、食宿费等。
                        </p>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">
                        <div class="down">
                            <div class="up"></div>
                        </div>

                    </div>
                    <div class="right">
                        <p class="title-con">
                            学习方式
                        </p>
                        <p class="text">
                            课堂面授+专题讲座+小组研讨+现场教学
                        </p>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">
                        <div class="down">
                            <div class="up"></div>
                        </div>

                    </div>
                    <div class="right">
                        <p class="title-con">
                            学习时间
                        </p>
                        <p class="text">
                            有效期12个月，在有效期内委托单位可根据时间自行选择两天，进行灵活安排。
                        </p>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">
                        <div class="down">
                            <div class="up"></div>
                        </div>

                    </div>
                    <div class="right">
                        <p class="title-con">
                            学习地点
                        </p>
                        <p class="text">
                            清华大学
                        </p>
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

