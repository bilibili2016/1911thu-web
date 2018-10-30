<template>
    <div class="">
        <div class="lists">
            <div class="item clearfix" v-for="(item,index) in examineListData" :key="index">
                <div class="item_left">
                    <img :src="item.book_picture" alt="">
                    <span>{{item.book_title}}</span>
                </div>
                <div class="item_right">
                    <!-- 存在证书（证书状态）-->
                    <div v-if="item.isApplyExam==2">
                        <span v-if="item.isExamRecord!=0" class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                        <span v-if="item.isDoneExamStatus==1" class="btn btn_five">查看证书</span>
                        <span v-if="item.isDoneExamStatus==2" class="btn btn_four" @click="handleInreview">审核中</span>
                    </div>
                    <!-- 不存在证书（申请 ）-->
                    <div v-if="item.isApplyExam==0">
                        <!-- 不存在考试记录 -->
                        <div v-if="item.isExamRecord==0">
                            <span class="btn btn_one" @click="gotoExamine(item)">去考试</span>
                        </div>
                        <!-- 存在考试记录 -->
                        <div v-if="item.isExamRecord ==1">
                            <!-- 考试次数用完，都不及格 -->
                            <div v-if="item.isDoingExamStatus==2">
                                <span class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                                <span class="btn btn_six">不具备认证资格</span>
                            </div>
                            <!-- 考试及格，考试次数没用完，可以具备申请证书 -->
                            <div v-if="item.isDoingExamStatus==1">
                                <span class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                                <span v-if="item.examRecordNum <3 && item.examRecordNum>0" class="btn btn_one" @click="gotoExamine(item)">去考试</span>
                                <span class="btn btn_three">申请证书</span>
                            </div>
                            <!-- 未申请过证书 或者 有考试机会，但考试的都不及格 -->
                            <div v-if="item.isDoingExamStatus==0">
                                <span v-if="item.isExamRecord==1" class="btn btn_two" @click="viewRecord(item)">考试记录</span>
                                <span v-if="item.examRecordNum!=0" class="btn btn_one" @click="gotoExamine(item)">去考试</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { certificate } from '~/lib/v1_sdk/index'
export default {
  props: ['examineListData'],
  data() {
    return {
      pageData: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    //去考试
    gotoExamine(item, page) {
      this.pageData.id = item.id
      certificate.validateExamPrivilege({ id: item.id }).then(res => {
        if (res.status == 100201) {
          this.pageData.name = 'info'
          this.$bus.$emit('whichShow', this.pageData)
        } else if (res.status == 0) {
          this.pageData.name = 'intro'
          this.$bus.$emit('whichShow', this.pageData)
        }
      })
    },
    //审核中
    handleInreview() {
      this.$router.push('/profile/components/myexamine/reviewing')
    },
    //查看考试记录
    viewRecord(item) {
      this.pageData.id = item.id
      this.pageData.name = 'record'
      this.$bus.$emit('whichShow', pageData)
    }
  },
  mounted() {}
}
</script>