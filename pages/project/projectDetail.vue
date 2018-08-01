<template>
  <div class="projectDetail">
    <div class="proHeader">
      <div class="headerTop clearfix">
        <div class="headerL fl">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="main-crumbs">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="headerR fr">
          <span class="collection">
            <i class="el-icon-star-on"></i>
            <span>收藏 </span>
          </span>
          <span class="">
            <i class="el-icon-share"></i>
            <span>分享 </span>
          </span>
        </div>
      </div>
      <h1>党政干部综合能力提升项目</h1>
      <h3>纯线上与线上下下混合授课模式</h3>
      <h5>
        <span>52 课时</span>
        <i></i>
        <span>学习人数 1201</span>
        <i></i>
        <el-rate v-model="rateModel" disabled></el-rate>
      </h5>
      <div class="price clearfix">
        <div class="fl">
          <i>￥</i>599.00</div>
        <div class="fr">
          <i>加入购物车</i>
          <span>
            <img src="~assets/images/pro_cart.png" alt="">
          </span>
        </div>
      </div>
    </div>
    <!-- 左侧的课程目录和介绍 -->
    <div class="proContent">
      <el-tabs v-model="activeName" class="proTab">
        <el-tab-pane label="介绍" name="first">
          <div class="detail" v-html="projectInfo.content" v-loading="loadMsg"></div>
        </el-tab-pane>
        <el-tab-pane label="线上课程介绍" name="second">
          <v-procourse :projectCourseData="projectCourseData"></v-procourse>
        </el-tab-pane>
        <el-tab-pane label="线下课程介绍" name="third">
          <v-procourse :projectCourseData="projectCourseData"></v-procourse>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="fourth">
          <v-proevaluate :evaluateData="evaluateData"></v-proevaluate>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="fifth">
          <v-proproblems :problems="problems"></v-proproblems>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Procourse from '@/pages/project/projectcourse'
import Proevaluate from '@/pages/project/projectevaluate'
import Commonproblems from '@/pages/project/commonproblems'
export default {
  components: {
    'v-procourse': Procourse,
    'v-proevaluate': Proevaluate,
    'v-proproblems': Commonproblems
  },
  data() {
    return {
      rateModel: 3,
      activeName: 'first',
      loadMsg: false,
      projectInfo: {
        content: ''
      },
      projectCourseData: {
        title: '2门经典线上学课',
        system: [
          {
            title: '公共管理',
            course: [
              {
                headImg: require('@/assets/images/pro_headImg.png'),
                title: '创新驱动发展的现状与趋势',
                teacher: '吴维库',
                position: '名师学院领域学院院',
                word:
                  '吴维库，北京师范大学法学院副教授、清华大学法学博士。基本功扎实，英语专业八级熟悉初高中英语重点，深入研究中高考命题动向讲课生动活波，擅长和学生做朋友。'
              },
              {
                headImg: require('@/assets/images/pro_headImg.png'),
                title: '创新驱动发展的现状与趋势',
                teacher: '吴维库',
                position: '名师学院领域学院院',
                word:
                  '吴维库，北京师范大学法学院副教授、清华大学法学博士。基本功扎实，英语专业八级熟悉初高中英语重点，深入研究中高考命题动向讲课生动活波，擅长和学生做朋友。'
              }
            ]
          },
          {
            title: '时政解读',
            course: [
              {
                headImg: require('@/assets/images/pro_headImg.png'),
                title: '创新驱动发展的现状与趋势',
                teacher: '吴维库',
                position: '名师学院领域学院院',
                word:
                  '吴维库，北京师范大学法学院副教授、清华大学法学博士。基本功扎实，英语专业八级熟悉初高中英语重点，深入研究中高考命题动向讲课生动活波，擅长和学生做朋友。'
              },
              {
                headImg: require('@/assets/images/pro_headImg.png'),
                title: '创新驱动发展的现状与趋势',
                teacher: '吴维库',
                position: '名师学院领域学院院',
                word:
                  '吴维库，北京师范大学法学院副教授、清华大学法学博士。基本功扎实，英语专业八级熟悉初高中英语重点，深入研究中高考命题动向讲课生动活波，擅长和学生做朋友。'
              }
            ]
          }
        ]
      },
      evaluateData: {
        grade: 9.8,
        rate: 5,
        number: 50,
        degree: 99,
        evlList: [
          {
            headImg: require('@/assets/images/pro_headImg.png'),
            evlUser: '小菠萝萝',
            time: '2018-06-30',
            rate: 4,
            evlWord:
              '基础语法学习到二维数组，希望自己再接再厉，坚持学习，完成基础课程的学习，加油！ 对课程的总结有几点： 1、基础知识点讲解比较细致，易懂，哪怕你只有一点计算机基础，认真听完全可以听懂的。'
          },
          {
            headImg: require('@/assets/images/pro_headImg.png'),
            evlUser: '小菠萝萝',
            time: '2018-06-30',
            rate: 4,
            evlWord:
              '基础语法学习到二维数组，希望自己再接再厉，坚持学习，完成基础课程的学习，加油！ 对课程的总结有几点： 1、基础知识点讲解比较细致，易懂，哪怕你只有一点计算机基础，认真听完全可以听懂的。'
          },
          {
            headImg: require('@/assets/images/pro_headImg.png'),
            evlUser: '小菠萝萝',
            time: '2018-06-30',
            rate: 4,
            evlWord:
              '基础语法学习到二维数组，希望自己再接再厉，坚持学习，完成基础课程的学习，加油！ 对课程的总结有几点： 1、基础知识点讲解比较细致，易懂，哪怕你只有一点计算机基础，认真听完全可以听懂的。'
          },
          {
            headImg: require('@/assets/images/pro_headImg.png'),
            evlUser: '小菠萝萝',
            time: '2018-06-30',
            rate: 4,
            evlWord:
              '基础语法学习到二维数组，希望自己再接再厉，坚持学习，完成基础课程的学习，加油！ 对课程的总结有几点： 1、基础知识点讲解比较细致，易懂，哪怕你只有一点计算机基础，认真听完全可以听懂的。'
          },
          {
            headImg: require('@/assets/images/pro_headImg.png'),
            evlUser: '小菠萝萝',
            time: '2018-06-30',
            rate: 4,
            evlWord:
              '基础语法学习到二维数组，希望自己再接再厉，坚持学习，完成基础课程的学习，加油！ 对课程的总结有几点： 1、基础知识点讲解比较细致，易懂，哪怕你只有一点计算机基础，认真听完全可以听懂的。'
          }
        ]
      },
      problems: [
        {
          qustion: '购买课程之后如何加入学员群？',
          answer:
            '请购买课程后的同学务必添加学堂老师微信号：xuetangx1，备注“党政学位”，老师会在1～3个工作日内拉大家加入课程学员群。'
        },
        {
          qustion: '本课程是否有参考教材？',
          answer: '该课程没有参考教材，但每门课程都有专业的参考书目分享给大家。'
        },
        {
          qustion: '证书怎么申请？',
          answer:
            '并完成课后题目，即可获得单课证书。学完19门线上课程中的8门课程并完成课后题目，即可获得微学位大证书。'
        },
        {
          qustion: '学习有效期是多久？',
          answer: '本课程自购买之日起，一年之内长期有效'
        },
        {
          qustion: '能否开发票？',
          answer:
            '添加学堂老师微信号：xuetangx1，备注“微学位发票”，老师会在1～3个工作日内私聊联系。'
        },
        {
          qustion: '关于：新商科微学位与商科微学位',
          answer:
            '新商科微学位是商科微学位的升级版课程。新商科微学位于3月16日上午8:00正式上线，面向人群为：3月16日上午8:00以后报名学员。3月16日之前购买商科微学位学员依然享有原商科微学位的所有权益。'
        },
        {
          qustion: '课程购买之后还能退费吗？',
          answer: '线上课程属于虚拟产品，课程购买之后不予退费。谢谢谅解'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/project/projectDetail';
</style>