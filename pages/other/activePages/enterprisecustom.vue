<template>
  <div class="custom">
    <div class="topImg">
      <div class="top-con">
        <p class="top-title">企业课程定制服务</p>
        <div class="line">
          <span></span>
        </div>
        <p class="top-desc">1911学堂可根据各政府单位、企事业单位及团体有针对性的培训需求</p>
        <p class="top-desc">承接相应的内训业务，提供定制化的、与其发展战略相结合的培训解决方案</p>
      </div>
    </div>
    <div class="serviceDetails">

      <h2>服务详情</h2>
      <div class="service-list clearfix">
        <div class="service-line"></div>
        <div class="service-item" v-for="(item,index) in serviceList" :key="index">
          <div class="top-line">

          </div>
          <div class="line-inner"></div>
          <div class="item-title">
            <span class="item-index">{{item.num}}.</span>
            <span>{{item.title}}</span>
          </div>
          <div class="item-desc">
            {{item.content}}
          </div>
        </div>
      </div>

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
            '根据政府单位、企事业单位及团体的培训需求，以问题解决为导向，进行需求调研分析。',
          num: '01'
        },
        {
          title: '提交方案',
          content:
            '根据培训需求分析的结果提交初步的培训解决方案，由委托单位培训负责人提出修改意见。',
          num: '02'
        },
        {
          title: '沟通细节',
          content:
            '对学员的职业、岗位、年龄、学历、认知、态度等细节信息进行沟通分析，了解委托单位的现状及发展战略愿景目标。',
          num: '03'
        },
        {
          title: '完善方案',
          content:
            '根据分析调整修改完善课程内容及授课方式，根据培训需求选择最佳课程及师资人选，并与委托单位达成共识，提交正式的培训方案。',
          num: '04'
        },
        {
          title: '签订合同',
          content:
            '根据双方确认的培训方案，确定培训费用、时间，明确实施计划和双方的责任义务，签订培训合同。',
          num: '05'
        },
        {
          title: '课前准备',
          content:
            '准备上课所需资料、设备、环境布置，与师资沟通协调并调整细节，提前一天布置现场，确保培训质量。',
          num: '06'
        },
        {
          title: '培训实施',
          content:
            '按照培训方案和教学计划组织教师上课，开展课前介绍、课中沟通调整、课后总结点评，根据学员需求反馈调整相关安排。',
          num: '07'
        },
        {
          title: '评估反馈',
          content:
            '培训结束后开展评估工作，了解学员对课程内容、教师及培训整体效果的意见，并提交培训总结报告。',
          num: '08'
        },
        {
          title: '备案存档',
          content: '将委托单位的培训资料档案存档,已备后续服务及跟踪调查使用.',
          num: '09'
        },
        {
          title: '跟进回访',
          content:
            '培训结束一段时间后开展后续跟进回访,并提出针对性的建议,形成长期持续的合作,详情可联系我们.',
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
<style lang="scss" scoped>
@import '~assets/style/other/enterpriseCustom';
</style>

