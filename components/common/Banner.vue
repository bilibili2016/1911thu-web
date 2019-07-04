<template>
    <div>
        <template v-if="config.banner_type === 'news' || config.banner_type === 'outNews'">
          <div class="news-banner">
            <img :src="bannerImg" alt>
            <div v-if="config.banner_type === 'news'" class="newLsit-desc">
              <p class="title">NEWS</p>
              <span class="line"></span>
              <p class="small-title">学堂资讯</p>
              <p class="desc">School Information</p>
            </div>
            <div v-if="config.banner_type === 'outNews'" class="newLsit-desc">
              <p class="title">NEWS</p>
              <span class="line"></span>
              <p class="small-title">媒体报道</p>
              <p class="desc">Media Coverage</p>
            </div>
          </div>
</template>

<template v-if="config.banner_type === 'famousList'">
    <div class="famousTeacher" id="famousTeacher">
    </div>
</template>

<template v-if="config.banner_type === 'profile'">
    <div class="profile-banner">
        <div class="center-box">
            <div class="headImg">
                <img :class="{noImg :!userInfo.head_img,topImg:userInfo.head_img}" :src="userInfo.head_img">
                <div class="up-user-avtor" v-show="isShowUpAvtor">
                    <div class="upload-img">
                        <input type="file" @change="add_img" accept="image/png, image/gif, image/jpeg">
                    </div>
                    <div class="mask">
                        <span>更换图片</span>
                    </div>
                </div>
            </div>

            <!-- <div class="avator">
                <div class="img"></div>
              </div> -->
            <div class="name">
                <p class="nickName">{{userInfo.nick_name}}<span>{{userInfo.is_teacher=='1'?"导师":"学生"}}</span></p>
                <!-- <p class="companyName">{{userInfo.company_name}}</p> -->
                <p class="studyTime">已学{{userInfo.study_time}}学时 <span class="line">|</span> {{time.hour}}小时{{time.minutes}}分钟</p>
                <!-- <p class="vipCard">
                    <span v-for="(vip,index) in userInfo.vipPrivateList" :key="index">
                    <el-popover placement="bottom-start" :title="vip.title" width="180" trigger="hover" :content="'剩余'+(vip.expire_days)+'天'">
                      <el-button slot="reference" @click="goVipInfo(vip)">
                        <img :src="vip.vip_icon">
                      </el-button>
                    </el-popover>
                  </span>
                </p> -->
            </div>
            <!-- <div class="teacher" v-if="!userInfo.is_teacher_recruit" @click="goTeacher">申请成为导师</div> -->
        </div>
    </div>
</template>
  </div>
</template>

<script>
// banner 组件
// 学堂资讯组件
import { store as persistStore } from "~/lib/core/store";
import { banner } from "~/lib/v1_sdk/index";
import { mapGetters, mapActions } from "vuex";
import { message } from "@/lib/util/helper";
export default {
    props: ["bannerImg", "config", "isShowUpAvtor", "userInfo"],
    computed: {
        ...mapGetters("auth", ["isAuthenticated"])
    },
    data() {
        return {
            time: {
                hour: null,
                minutes: null,
                second: null
            },
            fileForm: {
                FILESS: [],
                fileName: ""
            },
            imgs: []
        };
    },
    watch: {
        userInfo() {
            // 已学习时长
            this.changeTime(this.userInfo.study_curriculum_time);
        }
    },
    methods: {
        ...mapActions("auth", ["signOut"]),
        add_img(event) {
            // var that = this
            var reader = new FileReader();
            let imgFiles = event.target.files[0];
            var formdata = new window.FormData();
            formdata.append("image", imgFiles);
            formdata.image = imgFiles;
            reader.readAsDataURL(imgFiles);
            this.fileForm.FILESS = [];
            reader.onloadend = () => {
                this.fileForm.FILESS.push(reader.result);
                this.fileForm.fileName = imgFiles.name;
                banner.uploadHeadImg(this.fileForm).then(response => {
                    this.userInfo.head_img = response.data.full_path;
                    message(this, "success", response.msg);
                    this.$bus.$emit("changeimg", response.data.full_path);
                });
            };
        },
        goTeacher() {
            this.$router.push("/home/teacher/beTeacher");
        },
        goVipInfo(vip) {
            this.$router.push({
                path: "/home/vip/collegeDetail",
                query: {
                    id: vip.id,
                    cid: vip.category_id,
                    title: vip.en_title
                }
            });
        },
        changeTime(timing) {
            this.time.hour = parseInt(timing / 3600);
            this.time.minutes = parseInt(
                (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
            );
            this.time.second = parseInt(
                (parseFloat(
                        (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
                    ) -
                    parseInt(
                        (parseFloat(timing / 3600.0) - parseInt(timing / 3600.0)) * 60
                    )) *
                60
            );
        }
    }
};
</script>

<style scoped lang="scss">
@import "~assets/style/components/banner";
</style>
