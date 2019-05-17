<template>
  <!-- 项目详情——问题 -->
  <div class="problems">
    <div v-if="projectDetail.common_problem==''">
      <div class="qustion" v-for="(qus,index) in problems" :key="index">
        <h5>
          <span>Q{{index+1}}.</span>{{qus.qustion}}
        </h5>
        <p>{{qus.answer}}</p>
      </div>
    </div>
    <div v-else>
      <div v-html="projectDetail.common_problem"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projectDetail'],
  data () {
    return {
      problems: [
        {
          qustion: "如何加入班级同学群？",
          answer:
            '参加本项目的学员，由单位组织者建群或添加1911学堂老师微信"xuetang-1911"，备注"项目名称"，负责老师会在1个工作日内邀请您加入本项目的班级同学群。'
        },
        {
          qustion: "提供什么参考资料？",
          answer: "本项目提供相关课程的PPT、逐字稿等资料供大家下载学习。"
        },
        {
          qustion: "证书怎么申请？",
          answer:
            "学完本项目课程并考核通过者，可获得相应认证证书。考核权重为：视频观看学习完成度占50%，选择题测试占30%，讨论题互动发言量占20%。"
        },
        {
          qustion: "该项目所学课程是否可以换算成学位项目的学分?",
          answer:
            "该项目所学课程中，部分学时数可以换算成学位项目的学分，具体换算标准需参考学位项目的要求。"
        },
        {
          qustion: "学习有效期是多久？",
          answer: "本项目自购买之日起，一年之内有效。"
        },
        {
          qustion: "购买之后还能退费吗？",
          answer:
            "线上课程属于虚拟产品，课程购买之后不予退费。谢谢谅解！线下课程可申请退费。"
        },
        {
          qustion: "对于项目还有其他问题，怎么办？",
          answer:
            '请添加1911学堂老师微信"xuetang-1911"咨询，添加时请备注项目名称,老师会耐心解答。'
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "~assets/style/project/commonproblems.scss";
</style>