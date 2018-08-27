<template>
    <div class="card-category profile ">
        <div class="card-list " v-for="(item,index) in customerProjectListData" :key="index">
            <el-card shadow="never " body-style="padding: 0; " class="itemBox collect">
                <div>
                    <div class="line-icon">
                        <img v-if="item.study_type==='1'" class="onlineIcon" src="http://papn9j3ys.bkt.clouddn.com/online-icon.png" alt="">
                        <img v-if="item.study_type==='2'" class="offlineIcon" src="http://papn9j3ys.bkt.clouddn.com/offline-icon.png" alt="">
                    </div>
                    <div class="bgImgs ">
                        <img src="http://papn9j3ys.bkt.clouddn.com/cusProject-icon.png" alt=" ">
                    </div>
                    <el-row>
                        <div class="item ">
                            <p class="itemBox-name ">
                                <span>{{item.title}}</span>
                            </p>
                            <div class="deputyTitleOverTime">{{exchangeTime(item.create_time)}}</div>
                            <div class="operate">
                                <span @click="editCustomerProject(item)"><img src="http://papn9j3ys.bkt.clouddn.com/edit-icon.png" alt=""></span>
                                <span><img src="http://papn9j3ys.bkt.clouddn.com/delete-icon.png" alt=""></span>
                            </div>
                        </div>

                    </el-row>
                </div>

            </el-card>
        </div>

    </div>
</template>
<script>
import { timestampToYMD, open } from '@/lib/util/helper'
export default {
  props: ['customerProjectListData'],
  data() {
    return {
      customerProject: {
        base: '/project/customerProject',
        sid: '-1',
        edit: 1
      }
    }
  },
  methods: {
    //编辑
    editCustomerProject(item) {
      this.customerProject.sid = item.id
      open(this.customerProject)
    },
    // 时间戳转日期格式
    exchangeTime(time) {
      return timestampToYMD(time)
    }
  }
}
</script>
