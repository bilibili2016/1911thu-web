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
        <div class="oneID" v-for="(id,index) in courseList.courseID" :key="index">
          <span>课程ID:</span>
          <span>{{id}}</span>
        </div>
      </div>
      <div v-show="courseList.addNewID">
        <div class="courseID">
          <span>绑定课程ID:</span>
          <input v-model="courseList.inputID" @blur.stop="verify" placeholder="请输入您的课程ID">
          <span class="error" v-show="courseList.showErr">请输入正确的企业ID</span>
        </div>
        <div class="bindInfo">
          <p>绑定企业ID说明：</p>
          <p>1.公司hr提供的企业ID，兑换后可以学习企业购买的课程。</p>
          <p>2.绑定成功后，不可更改。</p>
        </div>
        <div :class="{presentAble:!courseList.showErr,present:courseList.present}">
          <el-button :disabled="courseList.presentAble" round @click="doSubmit">提交</el-button>
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
      addID() {
        this.courseList.addNewID = true;
      },
      doSubmit() {
        this.binding.success = true;
        this.courseList.success = true;
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
          courseID: ["A02817633", "A30257682", "A74219360"]
        },
        bindImg: require('~/assets/images/bindingSuccess.png')
      };
    },
    mounted () {
      document.getElementsByClassName("headerBox")[0].style.display="inline"
      document.getElementsByClassName("footerBox")[0].style.display="inline"
    }
  };
</script>
