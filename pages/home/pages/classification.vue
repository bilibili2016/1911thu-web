<template>
    <div class="classification">
        <div class="starters">
            <div class="classItem" v-for="(item,index) in classify" :key="index" @mouseenter="showItem(index)" @mouseleave="leave">
                <div class="tabs-title">{{item}}</div>
                <div class="tabs-content" v-show="index===itemID">
                    <div class="subClass">
                        <h4>全部<span><i></i></span></h4>
                        <p>
                            <span  v-for="(items,index) in classtext" :key="items.id" @click="handlePid(item,index)">
                                <span>{{items.name}}</span>
                            </span>
                        </p>
                    </div>

                    <div class="courseMsg">
                        <div class="courseOne clearfix" v-for="(cus,index) in courses" :key="index" @click="getMore">
                            <img class="fl" :src="cus.src" alt="">
                            <div class="fl hover">
                                <h5>{{cus.title}}</h5>
                                <p>{{cus.author}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tabsContent:false,
                itemID:null,
                classify: [
                    "干部通用",
                    "党政系统学院",
                    "在线商学院",
                    "行业学院",
                    "职场学院",
                    "热点学院"
                ],
                classtext: [ 
                    {
                        name: "公共管理/履职能力",
                        id: 9
                    },
                    {
                        name: "时政解读",
                        id: 10
                    },
                    {
                        name: "法律法规",
                        id: 11
                    },
                    {
                        name: "政府绩效管理",
                        id: 12
                    },
                    {
                        name: "经济治理与城市规划",
                        id: 13
                    },
                    {
                        name: "城市管理",
                        id: 14
                    },
                    {
                        name: "新闻宣传国际形式及安全治理",
                        id: 15
                    },
                    {
                        name: "创新驱动发展",
                        id: 16
                    },
                    {
                        name: "一带一路与国际合作",
                        id: 17
                    },
                    {
                        name: "乡村振兴",
                        id: 18
                    },
                    {
                        name: "人文素养",
                        id: 19
                    },
                    {
                        name: "社会治理",
                        id: 20
                    }
                ],
                courses: [
                    {
                    src: require("@/assets/images/course1.png"),
                    title: "高效团队与卓越执行力 高效团队",
                    author: "王建林 清华大学电子工程系教授"
                    },
                    {
                    src: require("@/assets/images/course2.png"),
                    title: "高效团队与卓越执行力 高效团队",
                    author: "王建林 清华大学电子工程系教授"
                    },
                    {
                    src: require("@/assets/images/course1.png"),
                    title: "高效团队与卓越执行力 高效团队",
                    author: "王建林 清华大学电子工程系教授"
                    },
                    {
                    src: require("@/assets/images/course2.png"),
                    title: "高效团队与卓越执行力 高效团队",
                    author: "王建林 清华大学电子工程系教授"
                    }
                ],
            }
        },
        methods:{
            showItem(index){
                this.itemID = index;
            },
            leave(){
                this.itemID = null;
            }
            
        }
    }
</script>

<style scoped lang="scss">
.classification {
  width: 1100px;
  margin: 0 auto;
  height: 636px;
  .starters {
    width: 178px;
    height: 100%;
    background-color: #6417A6;
    position: relative;
    .classItem {
      .tabs-title {
        width: 178px;
        height: 76px;
        line-height: 76px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-family: 'microsoft YaHei';
        cursor: pointer;
        transition: all 400ms;
      }
      .tabs-content {
        opacity: 0.92;
        position: absolute;
        left: 178px;
        top: 0;
        width: 922px;
        height: 456px;
        padding: 25px 0 25px 42px;
        overflow-y: auto;
        background-color: #eee;
        z-index: 2;
        .subClass {
          font-size: 14px;
          line-height: 34px;
          h4 {
            width: 100%;
            line-height: 30px;
            color: #6417a6;
            span {
              width: 82%;
              margin-left: 40px;
              i {
                display: inline-block;
                width: 100%;
                height: 1px;
                margin-bottom: 6px;
                background-color: #E8D6F7;
              }
            }
          }
          p {
            span {
              margin-right: 20px;
              cursor: pointer;
              &:hover {
                color: #6417a6;
              }
            }
          }
        }
        .courseMsg {
          width: 100%;
          height: 254px;
          padding: 20px 0;
          background-color: #fff;
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          bottom: 0;
          left: 0;
          .courseOne {
            width: 414px;
            margin: 20px 0 20px 44px;
            cursor: pointer;
            img {
              width: 104px;
              height: 66px;
              border-radius: 6px;
              margin-right: 10px;
              overflow: hidden;
            }
            h5 {
              line-height: 34px;
              width: 300px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            p {
              color: #666;
              line-height: 34px;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
      &:hover .tabs-title {
        color: #6417A6;
        background: rgba(240, 233, 247, 0.9);
      }
    //   &:hover .tabs-content {
    //     opacity: 0.94;
    //     z-index: 2;
    //   }
    }
  }
}

    
</style>