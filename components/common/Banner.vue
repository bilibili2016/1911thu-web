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
          </div>
          <div class="time">
            <p class="fr">18小时32分钟</p>
            <p class="fr">总学习时长</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
export default {
  props: ['bannerImg', 'config', 'isUpdate', 'isShowUpAvtor'],
  data() {
    return {
      avator: '',
      userInfo: {
        nick_name: '',
        company_name: '',
        head_img: ''
      },
      fileForm: {
        FILESS: []
      },
      imgs: []
    }
  },
  mounted() {
    this.getUserInfo()
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
      var that = this
      var reader = new FileReader()
      let img1 = event.target.files[0]
      var formdata = new window.FormData()
      formdata.append('image', img1)
      formdata.image = img1
      reader.readAsDataURL(img1)
      reader.onloadend = function() {
        that.fileForm.FILESS.push(reader.result)
        home.uploadHeadImg(that.fileForm).then(response => {
          this.avator = response.data.full_path
          console.log(this.avator)
        })
      }
    },
    getUserInfo() {
      home.getUserInfo().then(res => {
        this.userInfo = res.data.userInfo
        if (this.userInfo.head_img && this.userInfo.head_img != '') {
          this.avator = this.userInfo.head_img
        } else {
          this.avator = require('@/assets/images/profile_avator01.png')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.news-banner {
  height: 148px;
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
