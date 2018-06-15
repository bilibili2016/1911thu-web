<template>
    <div class="teacher">
        <div class="tcInfo">
            <img :src="teacherBg" alt="">
            <div>
                <p><img :src="teacherData.head_img" alt=""></p>
                <h4>{{teacherData.teacher_name}}</h4>
                <h5>{{teacherData.graduate}}</h5>
                <h6>{{teacherData.content}}</h6>
            </div>
           
        </div>
        <div class="courseList">
            <h3>在教的课程</h3>
            <div class="list">
                <v-card :data="teacherCourse" :config="config"></v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { home } from '~/lib/v1_sdk/index'
    import { mapState, mapActions, mapGetters } from 'vuex'
    import CustomCard from "@/components/common/Card.vue";
    export default {
        components: {
            "v-card": CustomCard
        },
        computed: {
            ...mapState('auth', ['tid'])
        },
        data(){
            return{
                config: {
                    card_type: "profile",
                    card: 'home',
                },
                teacherData:{},
                teacherCourse:[],
                teacherID:null,
                tidForm:{
                    tids:null
                },
                teacherBg:require("~/assets/images/teacher_bg.png"),
            }
        },
        methods:{
            getTeacherInfo(){
                return new Promise((resolve, reject) => {
                    home.getTeacherInfo(this.tidForm).then(response => {
                        // console.log(response.data);
                        this.teacherData = response.data.teacherInfo
                    })
                })
            },
            getTeacherCourse(){
                return new Promise((resolve, reject) => {
                    home.getTeacherCourse(this.tidForm).then(response => {
                        this.teacherCourse = response.data.curriculumList
                    })
                })
            }
            
        },
        mounted() {
            this.tidForm.tids = this.tid;
            this.getTeacherInfo();
            this.getTeacherCourse();
        }
    }
</script>

<style scoped>
.teacher{
    background-color: #fafafa;

}
.tcInfo{
    width: 100%;
    height: 458px;
    padding-top: 42px;
    overflow: hidden;
    position: relative;
}
.tcInfo > img{
    position: absolute;
    width: 1920px;
    height: 458px;
    left: 50%;
    margin-left: -960px;
    top: 0;
    z-index: 1;
}
.tcInfo div{
    z-index: 2;
    position: absolute;
    left: 50%;
    width: 1100px;
    margin-left: -550px;
}
.tcInfo p{
    width: 110px;
    height: 110px;
    margin: 0 auto;
    border-radius: 50%;
    text-align: center;
    background-color: #BA94EA;
}
.tcInfo p img{
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top: 5px;
}
.tcInfo h4{
    height: 80px;
    line-height: 80px;
    color: #fff;
    text-align: center;
}
.tcInfo h5{
    font-size: 16px;
    color: #fff;
    text-align: center;
}
.tcInfo h6{
    width: 660px;
    height: 75px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 40px;
    line-height: 25px;
    color: #fff;
}
.courseList h3{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    color: #222;
}
.courseList .list{
    width: 1100px;
    margin: 0 auto;
    padding: 0 0 100px;
}
</style>