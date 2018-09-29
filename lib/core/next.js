// 用于播放视频切换下一集
import '@/assets/style/components/nextPrevious.scss'
import $ from 'jquery'

export default class playerNextComponent {
  constructor(clickHandle) {
    this.clickHandle = clickHandle
    this.$html = $(
      '<div class="player-olympic-player-next"><div class="player-olympic-player-next-tip">下一节</div></div>'
    )
  }

  createEl(el) {
    this.$html.click(this.clickHandle)
    console.log($(el).find('.prism-play-btn'))
    $(el)
      .find('.prism-play-btn')
      .after(this.$html)
  }
}
