<template>
  <div class="custom">
    <div class="topImg">
      <img src="http://pam8iyw9q.bkt.clouddn.com/custom.png" alt="">
    </div>
    <div class="serviceDetails">
      <h2>服务详情</h2>
      <div class="serviceList" v-for="(item,index) in serviceList" :key="index">
        <h4>{{item.title}}</h4>
        <h6>{{item.content}}</h6>
        <p>{{item.num}}</p>
      </div>
      <img class="serviceImg_top" src="http://pam8iyw9q.bkt.clouddn.com/serviceImg_top.png" alt="">
      <img class="serviceImg_center" src="http://pam8iyw9q.bkt.clouddn.com/serviceImg_center.png" alt="">
      <img class="serviceImg_bottom" src="http://pam8iyw9q.bkt.clouddn.com/serviceImg_bottom.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceList: [
        {
          title: '了解需求',
          content:
            '根据政府机构、企事业单位及团体的培训需求，以问题解决为导向，进行需求调研分析。',
          num: '1'
        },
        {
          title: '提交方案',
          content:
            '根据培训需求分析的结果提交初步的培训解决方案，由委托单位培训负责人提出修改意见。',
          num: '2'
        },
        {
          title: '沟通细节',
          content:
            '对学员的职业、岗位、年龄、学历、认知、态度等细节信息进行沟通分析，了解委托单位的现状及发展战略愿景目标。',
          num: '3'
        },
        {
          title: '完善方案',
          content:
            '根据分析调整修改完善课程内容及授课方式，根据培训需求选择最佳课程及师资人选，并与委托单位达成共识，提交正式的培训方案。',
          num: '4'
        },
        {
          title: '签订合同',
          content:
            '根据双方确认的培训方案，确定培训费用、时间，明确实施计划和双方的责任义务，签订培训合同。',
          num: '5'
        },
        {
          title: '课前准备',
          content:
            '准备上课所需资料、设备、环境布置，与师资沟通协调并调整细节，提前一天布置现场，确保培训质量。',
          num: '6'
        },
        {
          title: '培训实施',
          content:
            '按照培训方案和教学计划组织教师上课，开展课前介绍、课中沟通调整、课后总结点评，根据学员需求反馈调整相关安排。',
          num: '7'
        },
        {
          title: '评估反馈',
          content:
            '培训结束后开展评估工作，了解学员对课程内容、教师及培训整体效果的意见，并提交培训总结报告。',
          num: '8'
        },
        {
          title: '培训实施',
          content:
            '按照培训方案和教学计划组织教师上课，开展课前介绍、课中沟通调整、课后总结点评，根据学员需求反馈调整相关安排。',
          num: '9'
        },
        {
          title: '评估反馈',
          content:
            '培训结束后开展评估工作，了解学员对课程内容、教师及培训整体效果的意见，并提交培训总结报告。',
          num: '10'
        }
      ]
    }
  },
  mounted() {
    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>

