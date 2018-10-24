<template>
  <div>
    <template v-if="config.banner_type === 'news'">
      <div class="news-banner">
        <img :src="bannerImg" alt="">
        <div v-if="config.banner_type === 'news'" class="newLsit-desc">
          <p class="title">NEWS</p>
          <span class="line"></span>
          <p class="small-title">学堂资讯</p>
          <p class="desc">School Information</p>
        </div>
      </div>
    </template>
    <template v-if="config.banner_type === 'famousList'">
      <div class="famousTeacher"></div>
    </template>

    <template v-if="config.banner_type === 'profile'">
      <div class="profile-banner">
        <div class="center-box">
          <!-- <img :class="{avator ==''?'noImg':'topImg'}" :src="avator" /> -->
          <img :class="{noImg :!avator,topImg:avator}" :src="avator" />
          <div class="up-user-avtor" v-show="isShowUpAvtor">
            <input type="file" @change="add_img" accept="image/png,image/gif,image/jpeg" />
            <span>更换图片</span>
          </div>
          <div class="avator">
            <div class="img">
            </div>
          </div>
          <div class="name">
            <p class="nickName">{{userInfo.nick_name}}</p>
            <!-- <p class="companyName">{{userInfo.company_name}}</p> -->
            <p class="vipCard">
              <span v-for="(vip,index) in userInfo.vipPrivateList" :key="index">
                <el-popover placement="bottom-start" :title="vip.title" width="180" trigger="hover" :content="'剩余'+(vip.expire_days)+'天'">
                  <el-button slot="reference">
                    <!-- expire_days -->
                    <img :src="vip.vip_icon" @click="goVipInfo(vip)">
                  </el-button>
                </el-popover>
              </span>

            </p>
          </div>
          <div class="time">
            <p>{{time.hour}}小时{{time.minutes}}分钟</p>
            <p>已学习时长</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// banner 组件
// 学堂资讯组件
import { store as persistStore } from '~/lib/core/store'
import { banner } from '~/lib/v1_sdk/index'
import { mapGetters, mapActions } from 'vuex'
import { message } from '@/lib/util/helper'
export default {
  props: ['bannerImg', 'config', 'isShowUpAvtor'],
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  data() {
    return {
      avator: '',
      userInfo: {
        nick_name: '',
        company_name: '',
        head_img: ''
      },
      time: {
        hour: null,
        minutes: null,
        second: null
      },
      fileForm: {
        FILESS: []
      },
      imgs: []
    }
  },
  mounted() {
    if (persistStore.get('token') && this.config.banner_type === 'profile') {
      this.getUserInfo()
    }
    this.$bus.$on('reUserInfo', data => {
      this.getUserInfo()
    })
  },

  methods: {
    ...mapActions('auth', ['signOut']),
    add_img(event) {
      // var that = this
      var reader = new FileReader()
      let imgFiles = event.target.files[0]
      var formdata = new window.FormData()
      formdata.append('image', imgFiles)
      formdata.image = imgFiles
      reader.readAsDataURL(imgFiles)
      this.fileForm.FILESS = []
      reader.onloadend = () => {
        this.fileForm.FILESS.push(reader.result)
        banner.uploadHeadImg(this.fileForm).then(response => {
          this.avator = response.data.full_path
          message(this, 'success', response.msg)
          this.$bus.$emit('changeimg', this.avator)
        })
      }
    },
    goVipInfo(vip) {
      this.$router.push({
        path: '/home/vip/vipPage',
        query: {
          id: vip.id,
          cid: vip.category_id
        }
      })
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      let D =
        (date.getDate() * 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      let h =
        (date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()) +
        ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    },
    getUserInfo() {
      banner.getUserInfo().then(res => {
        if (res.status === 0) {
          this.userInfo = res.data.userInfo
          // 已学习时长
          this.changeTime(this.userInfo.study_curriculum_time)
          // 头像
          if (this.userInfo.head_img && this.userInfo.head_img != '') {
            this.avator = this.userInfo.head_img
          } else {
            this.avator =
              'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
          }
        }
      })
    },
    changeTime(timing) {
      this.time.hour = parseInt(timing / 3600)
      this.time.minutes = parseInt(
        (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
      )
      this.time.second = parseInt(
        (parseFloat(
          (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
        ) -
          parseInt(
            (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
          )) *
          60
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/style/components/banner';
</style>
