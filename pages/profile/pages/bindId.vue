<template>
  <div class="main">
    <div class="binding" style="display: none;">
      <div class="title">
        <h4>绑定课程ID</h4>
      </div>
      <div class="courseID">
        <span>绑定课程ID:</span>
        <input v-model="binding.inputID" @blur.stop="verify" placeholder="请输入您的课程ID">
        <span class="error" v-show="binding.showErr">请输入正确的企业ID</span>
      </div>
      <div class="bindInfo">
        <p>绑定企业ID说明：</p>
        <p>1.公司hr提供的企业ID，兑换后可以学习企业购买的课程。</p>
        <p>2.绑定成功后，不可更改。</p>
      </div>
      <div :class="{presentAble:binding.presentAble,present:binding.present}">
        <el-button :disabled="!binding.presentAble" round @click="doSubmit">提交</el-button>
      </div>
      <div class="success" v-show="binding.success">
         <img :src="bindImg" alt="">
        <p>恭喜您绑定成功</p>
      </div>
    </div>

    <div class="courseList">
      <div class="title clearfix">
        <span>绑定课程ID</span>
        <el-button class="fr" @click="addID" round>新增课程ID</el-button>
      </div>
      <div class="courseIDList">
        <div class="oneID" v-for="(item,index) in courseList.courseID" :key="index">
          <span>课程ID:</span>
          <span>{{item.invitation_code}}</span>
        </div>
      </div>
      <div v-show="courseList.addNewID">
        <div class="courseID">
          <span>绑定课程ID:</span>
          <input v-model="courseList.inputID" @blur.stop="courseVerify" placeholder="请输入您的课程ID">
          <span class="error" v-show="courseList.showErr">请输入正确的企业ID</span>
        </div>
        <div class="bindInfo">
          <p>绑定企业ID说明：</p>
          <p>1.公司hr提供的企业ID，兑换后可以学习企业购买的课程。</p>
          <p>2.绑定成功后，不可更改。</p>
        </div>
        <div :class="{presentAble:!courseList.showErr,present:courseList.present}">
          <el-button :disabled="!courseList.presentAble" round @click="doSubmit">提交</el-button>
        </div>
      </div>
      <div class="success" v-show="courseList.success">
        <img :src="bindImg" alt="">
        <p>恭喜您绑定成功</p>
      </div>
    </div>


  </div>
</template>

<script>
 import { home } from "~/lib/v1_sdk/index";
  export default {
    methods: {
      verify() {
        if (this.binding.inputID == "") {
          this.binding.showErr = true;
          this.binding.presentAble = false;
        } else {
          this.binding.showErr = false;
          this.binding.presentAble = true;
        }
      },
      courseVerify(){
        if (this.courseList.inputID == "") {
          console.log(1);
          
          this.courseList.showErr = true;
          this.courseList.presentAble = false;
        } else {
          console.log(2);
          
          this.courseList.showErr = false;
          this.courseList.presentAble = true;
        }
      },
      addID() {
        this.courseList.addNewID = true;
      },
      doSubmit() {
        // this.binding.success = true;
        return new Promise((resolve, reject) => {
           home.bindingCurriculumPrivate({invitation_code: this.courseList.inputID}).then(res=>{
             if(res.status ==0){
               this.getUsedInvitationCodeList()
             }
             this.courseList.showErr = res.status !=0 ? true : false
             this.courseList.success = res.status !=0 ? false : true
           })
        })
      },
      getUsedInvitationCodeList(){
        return new Promise((resolve, reject) => {
           home.getUsedInvitationCodeList(this.curruntForm).then(response => {
            this.courseList.courseID = response.data.usedInvitationCodeList

            if(!this.courseList.courseID || this.courseList.courseID.length<=0){
              this.$emit('isShowMsg',true)
            }else{
              this.$emit('isShowMsg',false)
            }
          })
        })
      }
    },
    data() {
      return {
        binding: {
          inputID: "",
          showErr: false,
          presentAble: false,
          present: true,
          success: false
        },
        courseList: {
          addNewID: false,
          inputID: "",
          showErr: false,
          presentAble: false,
          present: true,
          success: false,
          addCourse:true,
          courseID: []
        },
        bindImg: require('~/assets/images/bindingSuccess.png')
      };
    },
    mounted () {
      this.getUsedInvitationCodeList()
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
