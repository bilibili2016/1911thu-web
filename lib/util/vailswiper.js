class Swiper {
  constructor() {
    // 滑块边长
    this.l = 42
    // canvas宽度
    this.r = 10
    // canvas高度
    this.w = 310
    this.h = 155
    this.PI = Math.PI
    // 滑块实际边长
    this.L = this.l + this.r * 2
  }

  getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start)
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
  }

  createImg(onload) {
    const img = document.createElement('img')
    img.crossOrigin = 'Anonymous'
    img.onload = onload
    img.onerror = () => {
      img.src = this.getRandomImg()
    }
    img.src = this.getRandomImg()
    return img
  }

  createElement(tagName) {
    return document.createElement(tagName)
  }

  addClass(tag, className) {
    tag.classList.add(className)
  }

  removeClass(tag, className) {
    tag.classList.remove(className)
  }

  getRandomImg() {
    return (
      'https://picsum.photos/300/150/?image=' +
      this.getRandomNumberByRange(0, 100)
    )
  }

  draw(ctx, operation, x, y) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + this.l / 2, y)
    ctx.arc(x + this.l / 2, y - this.r + 2, this.r, 0, 2 * this.PI)
    ctx.lineTo(x + this.l / 2, y)
    ctx.lineTo(x + this.l, y)
    ctx.lineTo(x + this.l, y + this.l / 2)
    ctx.arc(x + this.l + this.r - 2, y + this.l / 2, this.r, 0, 2 * this.PI)
    ctx.lineTo(x + this.l, y + this.l / 2)
    ctx.lineTo(x + this.l, y + this.l)
    ctx.lineTo(x, y + this.l)
    ctx.lineTo(x, y)
    ctx.fillStyle = '#fff'
    ctx[operation]()
    ctx.beginPath()
    ctx.arc(x, y + this.l / 2, this.r, 1.5 * this.PI, 0.5 * this.PI)
    ctx.globalCompositeOperation = 'xor'
    ctx.fill()
  }

  sum(x, y) {
    return x + y
  }

  square(x) {
    return x * x
  }
}

export class SwiperImg extends Swiper {
  constructor(el, success, fail) {
    super(el, success, fail)
    this.el = el
    this.success = success
    this.fail = fail
    console.log(el, 'el')
    console.log(success, 'success')
    this.init()
  }

  init() {
    this.initDOM()
    this.initImg()
    this.draw()
    this.bindEvents()
  }

  initDOM() {
    console.log('123')
    const canvas = this.createCanvas(this.w, this.h) // 画布
    const block = canvas.cloneNode(true) // 滑块
    const sliderContainer = document.createElement('div')
    const refreshIcon = document.createElement('div')
    const sliderMask = document.createElement('div')
    const slider = document.createElement('div')
    const sliderIcon = document.createElement('span')
    const text = document.createElement('span')

    block.className = 'block'
    sliderContainer.className = 'sliderContainer'
    refreshIcon.className = 'refreshIcon'
    sliderMask.className = 'sliderMask'
    slider.className = 'slider'
    sliderIcon.className = 'sliderIcon'
    text.innerHTML = '向右滑动滑块填充拼图'
    text.className = 'sliderText'

    const el = this.el
    console.log(canvas, '这是获取的canvas')
    console.log(this.el, '这是获取的el')
    el.appendChild(canvas)
    el.appendChild(refreshIcon)
    el.appendChild(block)
    slider.appendChild(sliderIcon)
    sliderMask.appendChild(slider)
    sliderContainer.appendChild(sliderMask)
    sliderContainer.appendChild(text)
    el.appendChild(sliderContainer)

    Object.assign(this, {
      canvas,
      block,
      sliderContainer,
      refreshIcon,
      slider,
      sliderMask,
      sliderIcon,
      text,
      canvasCtx: canvas.getContext('2d'),
      blockCtx: block.getContext('2d')
    })
  }

  initImg() {
    const img = document.createImg(() => {
      this.canvasCtx.drawImage(img, 0, 0, this.w, this.h)
      this.blockCtx.drawImage(img, 0, 0, this.w, this.h)
      const y = this.y - this.r * 2 + 2
      const ImageData = this.blockCtx.getImageData(this.x, y, this.L, this.L)
      this.block.width = L
      this.blockCtx.putImageData(ImageData, 0, y)
    })
    this.img = img
  }

  draw() {
    // 随机创建滑块的位置
    this.x = this.getRandomNumberByRange(this.L + 10, this.w - (this.L + 10))
    this.y = this.getRandomNumberByRange(
      10 + this.r * 2,
      this.h - (this.L + 10)
    )
    this.draw(this.canvasCtx, 'fill', this.x, this.y)
    this.draw(this.blockCtx, 'clip', this.x, this.y)
  }

  clean() {
    this.canvasCtx.clearRect(0, 0, this.w, this.h)
    this.blockCtx.clearRect(0, 0, this.w, this.h)
    this.block.width = this.w
  }

  bindEvents() {
    this.el.onselectstart = () => false
    this.refreshIcon.onclick = () => {
      this.reset()
    }

    let originX
    let originY
    let trail = []
    let isMouseDown = false
    this.slider.addEventListener('mousedown', function(e) {
      let originX = e.x
      let originY = e.y
      isMouseDown = true
    })
    document.addEventListener('mousemove', e => {
      if (!isMouseDown) return false
      const moveX = e.x - originX
      const moveY = e.y - originY
      if (moveX < 0 || moveX + 38 >= this.w) return false
      this.slider.style.left = moveX + 'px'
      var blockLeft = ((w - 40 - 20) / (this.w - 40)) * moveX
      this.block.style.left = blockLeft + 'px'

      this.addClass(this.sliderContainer, 'sliderContainer_active')
      this.sliderMask.style.width = moveX + 'px'
      trail.push(moveY)
    })
    document.addEventListener('mouseup', e => {
      if (!isMouseDown) return false
      isMouseDown = false
      if (e.x === originX) return false
      this.removeClass(this.sliderContainer, 'sliderContainer_active')
      this.trail = trail
      const { spliced, TuringTest } = this.verify()
      if (spliced) {
        if (TuringTest) {
          this.addClass(this.sliderContainer, 'sliderContainer_success')
          this.success && this.success()
        } else {
          this.addClass(this.sliderContainer, 'sliderContainer_fail')
          this.text.innerHTML = '再试一次'
          this.reset()
        }
      } else {
        this.addClass(this.sliderContainer, 'sliderContainer_fail')
        this.fail && this.fail()
        setTimeout(() => {
          this.reset()
        }, 1000)
      }
    })
  }

  verify() {
    const arr = this.trail // 拖动时y轴的移动距离
    const average = arr.reduce(this.sum()) / arr.length // 平均值
    const deviations = arr.map(x => x - average) // 偏差数组
    const stddev = Math.sqrt(
      deviations.map(this.square()).reduce(this.sum()) / arr.length
    ) // 标准差
    const left = parseInt(this.block.style.left)
    return {
      spliced: Math.abs(left - this.x) < 10,
      TuringTest: average !== stddev // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
    }
  }

  reset() {
    this.sliderContainer.className = 'sliderContainer'
    this.slider.style.left = 0
    this.block.style.left = 0
    this.sliderMask.style.width = 0
    this.clean()
    this.img.src = this.getRandomImg()
    this.draw()
  }
}
export default new SwiperImg()
