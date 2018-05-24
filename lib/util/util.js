class UTIL {
  // 截取url参数
  getQueryString () {
    this.qs = location.search.substr(1)
    this.args = {} // 保存参数数据的对象
    this.items = this.qs.length ? this.qs.split('&') : []
    this.item = null
    this.len = this.items.length

    for (var i = 0; i < this.len; i++) {
      this.item = this.items[i].split('=')
      this.name = decodeURIComponent(this.item[0])

      this.value = decodeURIComponent(this.item[1])
      if (this.name) {
        this.args[this.name] = this.value
      }
    }
    return this.args
  }

}
export default new UTIL()
