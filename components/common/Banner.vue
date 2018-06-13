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
              <img :src="avator" alt="" />
              <div class="up-user-avtor">
                <input type="file" @change="add_img" accept="image/png,image/gif,image/jpeg" />
                <span>更换图片</span>
              </div>
              <!-- <img :src="avator" alt="" v-if="userInfo.head_img"> -->
              <!-- <img :src="userInfo.head_img" alt="" v-if="userInfo.head_img">
                <img :src="avator" alt="" v-else> -->
              <!-- <el-upload v-show="isShowUpAvtor" class="up-user-avtor"
                  action="http://www.1911edu.com/Wapi/MyInfo/uploadHeadImg"
                  accept='image/*'
                  :on-success="upSuccess"
                  :on-error="failUp"
                  :show-file-list="false">
                  <el-button size="medium" type="primary">更换图片</el-button>
                </el-upload> -->
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
      avator: require('@/assets/images/profile_avator01.png'),
      userInfo: {
        nick_name: '',
        company_name: '',
        head_img: ''
      },
      fileForm: {
        FILESS: ''
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
      console.log(formdata, '这是formdata')
      that.fileForm.FILESS = formdata.image
      console.log(that.fileForm, 'fileForm')
      home.uploadHeadImg(that.fileForm).then(response => {
        console.log(response)
      })
      // reader.readAsDataURL(img1)
      // reader.onloadend = function() {
      //   console.log(reader.result, '上传图片')
      //   that.fileForm.FILESS.push(reader.result)
      //   console.log(that.fileForm, '3233434')
      //   home.uploadHeadImg(that.fileForm).then(response => {
      //     console.log(response)
      //   })
      // }
    },
    uploadImg(e) {
      let param = new FormData() //创建form对象
      param.append('file', e.target.files[0]) //通过append向form对象添加数据
      // param.append('chunk','0');//添加form表单中其他数据
      console.log('param------', param.get('file'))

      home.upImg({ file: param }).then(res => {
        console.log('res-------', res)
      })
      //添加请求头
      // this.axios.post('http://upload.qiniu.com/',param,config)
      // .then(response=>{
      //   console.log(response.data);
      // })
    },
    getUserInfo() {
      home.getUserInfo().then(res => {
        this.userInfo = res.data.userInfo
      })
    },
    upSuccess(res, file) {
      this.userInfo.head_img = res.data.full_path
    },
    failUp() {}
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
