<template>
  <div>
    <template v-if="config.banner_type === 'news'">
      <div class="news-banner">
        <img :src="bannerImg" alt="">
      </div>
    </template>
    <template v-if="config.banner_type === 'profile'">
      <div class="profile-banner">
        <div class="center-box">
          <div class="avator">
            <div class="img">
              <img :src="avator" />
              <div class="up-user-avtor" v-show="isShowUpAvtor">
                <input type="file" @change="add_img" accept="image/png,image/gif,image/jpeg" />
                <span>更换图片</span>
              </div>
            </div>
          </div>
          <div class="name">
            <p>{{userInfo.nick_name}}</p>
            <p>{{userInfo.company_name}}</p>
            <!-- <p style="color:black">{{userInfo}}</p> -->
          </div>
          <div class="time">
            <p class="fr">{{time.hour}}小时{{time.minutes}}分钟{{time.second}}秒</p>
            <p class="fr">总学习时长</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
export default {
  props: ['bannerImg', 'config', 'isUpdate', 'isShowUpAvtor'],
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
    if (this.isAuthenticated) {
      this.getUserInfo()
    }
  },
  watch: {
    isUpdate(val) {
      if (val) {
        this.getUserInfo()
      }
    }
  },
  methods: {
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
        home.uploadHeadImg(this.fileForm).then(response => {
          this.avator = response.data.full_path
          this.$message({
            showClose: true,
            message: response.msg,
            type: 'success'
          })
          this.$bus.$emit('changeimg', this.avator)
        })
      }
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
      let h = date.getHours() + ':'
      let m =
        (date.getMinutes() * 1 < 10
          ? '0' + date.getMinutes()
          : date.getMinutes()) + ':'
      let s =
        date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    },
    getUserInfo() {
      home.getUserInfo().then(res => {
        this.userInfo = res.data.userInfo
        this.time.hour = parseInt(this.userInfo.study_curriculum_time / 3600)
        this.time.minutes = parseInt(
          (parseFloat(this.userInfo.study_curriculum_time / 3600.0) -
            parseInt(this.userInfo.study_curriculum_time / 3600.0)) *
            60
        )
        this.time.second = parseInt(
          (parseFloat(
            (parseFloat(this.userInfo.study_curriculum_time / 3600.0) -
              parseInt(this.userInfo.study_curriculum_time / 3600.0)) *
              60
          ) -
            parseInt(
              (parseFloat(this.userInfo.study_curriculum_time / 3600.0) -
                parseInt(this.userInfo.study_curriculum_time / 3600.0)) *
                60
            )) *
            60
        )

        if (this.userInfo.head_img && this.userInfo.head_img != '') {
          this.avator = this.userInfo.head_img
        } else {
          this.avator = 'http://papn9j3ys.bkt.clouddn.com/profile_avator01.png'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.news-banner {
  height: 148px;
  overflow: hidden;
  position: relative;
  img {
    width: 1920px;
    height: 148px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -960px;
  }
}
</style>
