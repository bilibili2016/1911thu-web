<template>
  <!-- 混合式教学 -->
  <div class="examAuth">
    <div class="banner">
      <h4>考试认证</h4>
      <p class="line"></p>
      <p class="text">在线人工智能考试系统</p>
      <p class="text">1911学堂结业证书</p>
    </div>
    <div class="hybridCon">
      <div class="introduce">
        <p>1911学堂学员在学院完成学习后，即可参加在线认证考试，考试系统和认证方式对学员来说是至关重要的，下面将分别介绍。</p>
      </div>
      <h3 class="headline">一、1911学堂人工智能考试系统</h3>
      <div class="contentText">
        <p class="topContent">1911学堂人工智能考试系统能够实现对试卷自动批改、统计分析，考试完成后可即刻查看考试成绩及参考答案，系统自动保存答案和成绩供学员随时查看，另具有断电数据保存等若干实用性功能，真正有效的实现了考试系统智能化。人工智能考试系统出题策略灵活，支持固定试卷、抽题试卷和题库随机生成试卷等多种方式，方便学员按照自己的需求选择测评，从而帮助其实现个性化学习、针对性测评。</p>
        <p class="topContent">1911学堂人工智能考试系统界面清晰，操作简单，功能实用，并配有Web模式和App模式，帮助学员快速实现网上考试和作业练习。</p>
      </div>
      <div class="bottomCon clearfix">
        <div class="fl">
          <h4>二、认证方式</h4>
          <p>学员通过学习相关课程，并达到考试要求时即可通过1911学堂人工智能考试系统进行在线考试，考试通过者将获得1911学堂结业证书，证书均配有可在官方网站进行查询的唯一认证编码。</p>
        </div>
        <div class="fr">
          <img src="https://static-image.1911edu.com/examAuth_bottom.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { setTitle } from "~/lib/util/helper";
export default {
  mounted () {
    setTitle("核心优势-考试认证-1911学堂");
  }
};
</script>
<style  scoped lang="scss">
@import "~assets/style/core/examAuth";
</style>