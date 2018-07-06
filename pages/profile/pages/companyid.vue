<template>
  <div class="main clearfix bindCourse">
    <div class="binding" v-if="hasId">
      <div class="title">
        <h4>绑定机构ID</h4>
      </div>
      <div class="courseID">
        <span>绑定机构ID:</span>
        <input v-model="binding.inputID" @change="changeID(binding.inputID)" placeholder="请输入您的机构ID">
        <span class="error" v-show="binding.showErr">请输入正确的机构ID</span>
      </div>
      <div class="bindInfo">
        <p>绑定机构ID说明1：</p>
        <p>1、由课程负责人提供机构ID，每家机构具备唯一机构ID。</p>
        <p>2.绑定成功后，不可更改1。</p>
      </div>
      <div :class="{presentAble:binding.presentAble,present:binding.present}">
        <el-button :disabled="!binding.presentAble" round @click="doSubmit">提交</el-button>
      </div>
      <div class="success" v-show="binding.success">
        <img :src="bindImg" alt="">
        <p>恭喜您绑定成功</p>
      </div>
    </div>

    <div class="courseList" v-else>
      <div class="title">
        <span>绑定机构ID</span>
      </div>
      <div class="courseIDList">
        <div class="oneID">
          <span>机构ID:</span>
          <span>{{companyId.cpnid}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { home } from '~/lib/v1_sdk/index'
import { mapGetters } from 'vuex'
import { store as persistStore } from '~/lib/core/store'
export default {
  props: ['cpnData'],
  data() {
    return {
      binding: {
        inputID: '',
        showErr: false,
        presentAble: false,
        present: true,
        success: false
      },
      courseList: {
        inputID: '',
        showErr: false,
        success: false
      },
      bindImg: 'http://papn9j3ys.bkt.clouddn.com/bindingSuccess.png',
      bindForm: {
        companyId: ''
      },
      companyId: {
        cpnid: null
      },
      i: '',
      intervalid: null,
      hasId: false,
      seconds: 1
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    changeID(item) {
      if (item == '') {
        this.binding.showErr = true
        this.binding.presentAble = false
      } else {
        this.binding.showErr = false
        this.binding.presentAble = true
      }
    },
    doSubmit() {
      this.bindForm.companyId = this.binding.inputID
      return new Promise((resolve, reject) => {
        home.bindingCompanyId(this.bindForm).then(res => {
          if (res.status === 0) {
            this.companyId.cpnid = this.bindForm.companyId
            this.courseList.success = true
            this.hasId = false
            let interval = setInterval(() => {
              if (this.seconds <= 0) {
                this.seconds = 1
                clearInterval(interval)
                this.courseList.success = false
                this.courseList.inputID = ''
              } else {
                this.seconds--
              }
            }, 1000)
          } else if (res.status === '100100') {
            this.courseList.showErr = true
            this.$message({
              showClose: true,
              type: 'error',
              message: res.msg
            })
          }
        })
      })
    }
  },
  watch: {},
  mounted() {
    if (persistStore.get('cpnc')) {
      this.companyId.cpnid = persistStore.get('cpnc')
      this.hasId = false
    }

    document.getElementsByClassName('headerBox')[0].style.display = 'inline'
    document.getElementsByClassName('footerBox')[0].style.display = 'inline'
  }
}
</script>
