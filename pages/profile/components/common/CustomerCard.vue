<template>
  <!-- 定制项目 -->
  <div class="card-category profile ">
    <div class="card-list " v-for="(item,index) in customerProjectListData" :key="index">
      <el-card shadow="never " body-style="padding: 0; " class="itemBox">
        <div>
          <!-- <div class="line-icon">
            <img v-if="item.study_type==='1'" class="onlineIcon" src="https://static-image.1911edu.com/online-icon.png" alt="">
            <img v-if="item.study_type==='2'" class="onlineIcon" src="https://static-image.1911edu.com/mixture-icon.png" alt="">
            <img v-if="item.study_type==='3'" class="onlineIcon" src="https://static-image.1911edu.com/interaction-icon.png" alt="">
          </div> -->
          <div class="bgImgs " @click="gotoDetail(item)">
            <img :src="item.picture" alt=" ">
          </div>
          <el-row>
            <div class="item ">
              <p class="itemBox-name " @click="gotoDetail(item)">
                <span :title="item.title">{{item.title}}</span>
              </p>
              <div class="deputyTitleOverTime">{{exchangeTime(item.create_time)}}</div>
              <!-- 自定义项目下单和已经够买的，不可以修改和删除 -->
              <div class="operate" v-if="item.is_edit==='1'">
                <span @click="editCustomerProject(item)"><img src="https://static-image.1911edu.com/edit-icon.png" alt=""></span>
                <span @click="deleteCustomerProject(item)"><img src="https://static-image.1911edu.com/delete-icon.png" alt=""></span>
              </div>
              <!-- 暂不显示已够买字段 -->
              <!-- <div v-else class="buied" @click="handleBuied">已购买</div> -->
            </div>
          </el-row>
        </div>

      </el-card>
    </div>

  </div>
</template>
<script>
import { timestampToYMD, message } from '@/lib/util/helper'
export default {
  props: ['customerProjectListData'],
  methods: {
    //跳转项目详情页
    gotoDetail (item) {
      this.$router.push({
        path: '/project/projectdetail',
        query: {
          kid: item.id,
          type: 2
        }
      })
    },
    //编辑
    editCustomerProject (item) {
      this.$router.push({
        path: '/project/customerProject',
        query: {
          sid: item.id,
          edit: 2
        }
      })
    },
    //删除
    deleteCustomerProject (item) {
      this.$emit('deleteCustomerProject', item.id)
    },
    //已购买
    handleBuied () {
      message(
        this,
        'warning',
        '尊敬的用户，已购买的自定制项目不可再编辑，如需修改，请重新定制，谢谢。'
      )
    },
    // 时间戳转日期格式
    exchangeTime (time) {
      return timestampToYMD(time)
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/profile/card";
</style>
