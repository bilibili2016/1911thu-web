// 用于播放视频切换上一级
import '@/assets/style/components/nextPrevious.scss'

export default class playerPreviousComponent {
  constructor(clickHandle) {
    this.clickHandle = clickHandle
    this.$html = $(
      '<div class="player-olympic-player-previous"><div class="player-olympic-player-previous-tip">上一节</div></div>'
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
