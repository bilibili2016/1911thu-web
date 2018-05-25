<template>
  <div class="container">
    <div class="banner">
      <!-- banner -->
      <el-carousel :interval="5000" arrow="never">
        <el-carousel-item v-for="(img,index) in items" :key="index">
            <img :src="img.src" alt="">
        </el-carousel-item>
      </el-carousel>

      <!-- 分类 -->
      <div class="classify">
        <el-tabs v-model="activeName" @tab-click="handleClick" tabPosition="left">
          <el-tab-pane v-for="item in classify" :key="item.id" :label="item">
            <div class="subClass">
              <h4>全部<span><i></i></span></h4>
              <p>
                <span>{{item}}</span>
                <span>{{item}}</span>
                <span>{{item}}</span>
              </p>
            </div>
            <div class="courseMsg">
              <div class="courseOne clearfix" v-for="(cus,index) in courses" :key="index">
                <img class="fl" :src="cus.src" alt="">
                <div class="fl">
                  <h5>{{cus.title}}</h5>
                  <p>{{cus.author}}</p>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 定制 -->
      <div class="customization">
        <div class="pro clearfix" v-for="(pro,index) in projects" :key="index">
          <img :src="pro.src" alt="" class="fl">
          <div class="fl">
            <h5>{{pro.title}}</h5>
            <p>{{pro.content}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 名师大咖秀 -->
    <div class="teachers">
      <div class="blueBar"></div>
      <div class="cardList">
        <div class="card" v-for="(teacher,index) in teachers" :key="index">
          <img :src="teacher.src" class="image">
          <div class="diaphaneity">
            <div class="octImg"></div>
            <div class="abstract">
              <h4>{{teacher.name}}</h4>
              <p>{{teacher.abstract}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作伙伴 -->
    <div class="partner">
      <h4>合作伙伴</h4>
      <p>50+国内外知名企业使用1911课堂</p>
      <div class="partnerList">
        <span v-for="(img,index) in partnerList" :key="index">
          <img :src="img.src" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
export default{
    components : {Footer,Header},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    data (){
      return{
        items:[
        {src:require('../assets/images/banner.png')},{src:require('../assets/images/banner.png')},{src:require('../assets/images/banner.png')}
        ]
        ,
        classify: ["干部通用","党政系统学院","在线商学院","行业学院","职场学院","热点学院"],
        activeName: "",
        projects:[
          {
            src:require('../assets/images/pro1.png'),
            title:'面授、线下活动',
            content:'中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...'
          },
          {
            src:require('../assets/images/pro2.png'),
            title:'企业课程定制',
            content:'中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...'
          },
          {
            src:require('../assets/images/pro3.png'),
            title:'企业课程定制',
            content:'中共中央办公厅、国务院办公厅印发《关于党政机关停止新建楼堂馆所和清理办...'
          }
        ],
        courses:[
          {
            src:require('../assets/images/course1.png'),
            title:'高效团队与卓越执行力 高效团队',
            author:'王建林 清华大学电子工程系教授'
          },
          {
            src:require('../assets/images/course2.png'),
            title:'高效团队与卓越执行力 高效团队',
            author:'王建林 清华大学电子工程系教授'
          },
          {
            src:require('../assets/images/course1.png'),
            title:'高效团队与卓越执行力 高效团队',
            author:'王建林 清华大学电子工程系教授'
          },
          {
            src:require('../assets/images/course2.png'),
            title:'高效团队与卓越执行力 高效团队',
            author:'王建林 清华大学电子工程系教授'
          }
        ],
        teachers:[
          {
            src:require('../assets/images/teacher1.png'),
            name:'张邵阳',
            abstract:'源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。'
          },
          {
            src:require('../assets/images/teacher2.png'),
            name:'张邵阳',
            abstract:'源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。'
          },
          {
            src:require('../assets/images/teacher3.png'),
            name:'张邵阳',
            abstract:'源自清华、面向世界，以传播清华文化、服务创新创业、推动健康品质生活为己任，旗下布局四大业务板块：1911创客空间、1911资本、1911商城及1911教育。'
          }
        ],
        partnerList:[
          {src:require('../assets/images/ptn1.png'),},{src:require('../assets/images/ptn2.png'),},{src:require('../assets/images/ptn3.png'),},{src:require('../assets/images/ptn4.png'),},{src:require('../assets/images/ptn5.png'),},{src:require('../assets/images/ptn6.png'),},{src:require('../assets/images/ptn7.png'),},{src:require('../assets/images/ptn8.png'),},{src:require('../assets/images/ptn9.png'),},{src:require('../assets/images/ptn10.png'),}
        ]
      }
    }
}
</script>

<style lang="scss">
@import "~assets/style/config";
@import "~assets/style/index";
</style>