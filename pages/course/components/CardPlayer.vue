<template>
  <div class="playInner" ref="playInner">
    <div id="mediaPlayer" ref="mediaPlayer" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
import { coursedetail, players } from '~/lib/v1_sdk/index'
import { store as persistStore } from '~/lib/core/store'
export default {
  data() {
    return {
      playerForm: {
        curriculumId: '',
        catalogId: ''
      },
      tcplayer: {
        mp4: '',
        width: '100%',
        height: '100%',
        live: false //是否是直播类型
      },
      autoplay: false,
      playerDetailForm: {
        curriculumId: ''
      },
      defaultPlayerInfo: {
        curriculumId: ''
      },
      getdefaultForm: {
        curriculumid: ''
      }
    }
  },
  methods: {
    // 课程-获取默认 的课程id 以及小节id
    getdefaultCurriculumCatalog() {
      this.getdefaultForm.curriculumid = persistStore.get('curriculumId')
      coursedetail
        .getdefaultCurriculumCatalog(this.getdefaultForm)
        .then(res => {
          console.log(res, '这是返回')
          this.playerForm.curriculumId =
            res.data.defaultCurriculumCatalog.curriculum_id
          this.playerForm.catalogId = res.data.defaultCurriculumCatalog.id
          // 获取播放的url
          this.getdefaultPlayerUrl()
        })
    },
    // 根据 课程id以及小节id 获取url
    getdefaultPlayerUrl() {
      players.getPlayerInfos(this.playerForm).then(res => {
        this.tcplayer.mp4 = res.data.playAuthInfo.video_address
        this.players = new TcPlayer('mediaPlayer', this.tcplayer)
        window.qcplayer = this.players
      })
    }
  },
  mounted() {
    this.getdefaultCurriculumCatalog()
  }
}
</script>

<style scoped>
.playInner {
  width: 480px;
  height: 312px;
}
</style>
