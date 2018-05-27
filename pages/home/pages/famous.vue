<template>
  <div class="teachers">
      <v-title :data = "titleThree"></v-title>
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
</template>

<script>
import CustomTitle from "@/components/common/Title.vue";

export default {
  props: ["teachers", "titleThree"],
  components: {
    "v-title": CustomTitle
  }
};
</script>

<style scoped lang="scss">
// 名师大咖秀
.teachers {
  width: 100%;
  height: 740px;
  position: relative;
  margin: 20px 0;
  border: 1px rgba(250, 250, 250, 1) solid;

  background-color: rgba(250, 250, 250, 1);

  .align-center {
    // margin: 100px 0px;
    margin-top: 100px;
    font-size: 36px;
    font-family: MicrosoftYaHei;
    color: rgba(34, 34, 34, 1);
    line-height: 0px;
  }
  .blueBar {
    width: 100%;
    height: 200px;
    background-color: #6417a6;
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 1;
  }
  .cardList {
    z-index: 3;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .card {
      width: 366px;
      height: 500px;
      position: relative;
      cursor: pointer;
      &:hover .diaphaneity {
        display: block;
      }
      img {
        width: 300px;
        height: 450px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -150px;
      }
      .diaphaneity {
        display: none;
        width: 366px;
        height: 500px;
        box-shadow: 4px 0px 18px rgba(73, 28, 156, 0.36);
        border-radius: 6px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        .octImg {
          width: 100%;
          height: 280px;
        }
        .abstract {
          width: 100%;
          height: 220px;
          background-color: #fff;
          h4 {
            font-size: 20px;
            line-height: 70px;
            padding: 0 32px;
          }
          p {
            font-size: 14px;
            line-height: 24px;
            padding: 0 32px;
          }
        }
      }
    }
  }
}
</style>
