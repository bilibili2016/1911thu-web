<template>
  <div>
    <p>
      {{checkList}}
    </p>
    <p>
      <input type="checkbox" id="all" @click="checkAll" v-model="isCheckAll" />
      <label for="all">全选</label>
    </p>
    <span v-for="(item,index) in checkboxList" :key="index">
      <input type="checkbox" :id="item" @click="checked(item)" :checked="checkList.indexOf(item)>-1" />
      <label :for="item">{{item}}123</label>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxList: ['A', 'B', 'C'],
      checkList: [],
      isCheckAll: false
    }
  },
  watch: {
    checkList: function(val) {
      if (val.length === this.checkboxList.length) {
        this.isCheckAll = true
      } else {
        this.isCheckAll = false
      }
    }
  },
  methods: {
    checkAll() {
      if (this.isCheckAll) {
        Object.assign(this.checkList, this.checkboxList)
      } else {
        this.checkList = []
      }
    },
    checked(item) {
      if (this.checkList.indexOf(item) > -1) {
        let index = this.checkList.indexOf(item)
        this.checkList.splice(index, 1)
      } else {
        this.checkList.push(item)
      }
    }
  }
}
</script>

<style scoped>
.input-checkbox {
  width: 40px;
  height: 40px;
  -webkit-appearance: none;
  position: absolute;
  outline: none;
  border: none;
  &::after {
    left: 0;
    top: 0;
    /* content: url('../assets/images/round.svg'); */
  }
  &:checked:after {
    left: 0;
    top: 0;
    /* content: url('../assets/images/done.svg'); */
  }
}
label {
  padding-left: 50px;
  height: 40px;
  line-height: 45px;
}
</style>
