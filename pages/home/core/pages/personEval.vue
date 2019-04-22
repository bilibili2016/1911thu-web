<template>
  <!-- 人才测评 -->
  <div class="personEval">
    <div class="banner">
      <h4>人才测评</h4>
      <p class="line"></p>
      <p class="text">清华大学测评领域专家研发</p>
      <p class="text">“互联网+教育”人才测评体系新模式</p>
      <p class="text">了解学习需求，定位能力短板，制定个性化解决方案</p>
    </div>
    <div class="con">
      <div class="con-one">
        <div class="clearfix">
          <div class="left">
            <img src="https://static-image.1911edu.com/person-icon1.png" alt="" class="oneImg">
          </div>
          <div class="right">
            <p>1911学堂携手清华大学苏世民书院实践责任教授、经济管理学院领导力与组织管理系人才测评专家张进教授成立科研课题，张进教授担任测评课题专家组组长，并邀请十几位来自清华大学、北京大学、中国教育学会、中科院心理研究所、中国教育国际交流协会等权威机构的测评专家，组成1911学堂人才测评体系课题组，共同研发互联网背景下的多元智能人才测评体系新模式，形成相关调研报告并开发符合党政干部与企业单位经营管理人员等职场人士特点的测评体系。</p>
          </div>
        </div>

      </div>
      <div class="con-two">
        <div class="two-detail">
          <div class="details detail-one clearfix">
            <div class="left"><span>测评内容</span></div>
            <div class="right clearfix">
              <div class="item">职业性格</div>
              <div class="item">学习风格</div>
              <div class="item">学习动机</div>
              <div class="item">学习需求</div>
              <div class="item">成长规划</div>
              <div class="item">岗位胜任力</div>
              <div class="item">工作价值观</div>
              <div class="item">环境适应性</div>
            </div>
          </div>
          <div class="details detail-two clearfix">
            <div class="left"><span>测评形式</span></div>
            <div class="right clearfix">
              <div class="item icon1">
                <img src="https://static-image.1911edu.com/person-icon3.png" alt="">
                <span>迫选题目</span>
              </div>
              <div class="item icon2">
                <img src="https://static-image.1911edu.com/person-icon4.png" alt="">
                <span>李克特量表</span>
              </div>
              <div class="item icon3">
                <img src="https://static-image.1911edu.com/person-icon5.png" alt="">
                <span>情景模拟题</span>
              </div>
              <div class="item icon4">测试时长为15-30分钟，题目从题库中随机生成。</div>
            </div>
          </div>
          <div class="details detail-three clearfix">
            <div class="left"><span>测评报告</span></div>
            <div class="right clearfix">
              <p class="text">测评体系能根据用户输入的个人信息免费生成相应的测评报告，对个人的测评结果进行解析，提出相应的职业成长建议。</p>
              <img src="https://static-image.1911edu.com/person-icon2.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="con-three">
        <div class="three">
          <p>测评体系基于用户输入的个人背景信息及测评结果免费生成相应的测评报告，对个人的测评结果进行解析，并提出相应的职业成长建议。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setTitle } from "~/lib/util/helper";
export default {
  mounted () {
    setTitle("核心优势-人才测评-1911学堂");
  }
};
</script>
<style  scoped lang="scss">
@import "~assets/style/core/personEval";
</style>