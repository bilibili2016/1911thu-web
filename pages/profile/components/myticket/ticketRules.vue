<template>
  <!-- 开票规则 -->
  <div class="ticketRules">
    <p v-for="(rule,index) in rules" :key="index">{{rule.text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {
          text:
            '1.提交开具发票申请后，1911学堂将在收款后5个工作日内为您寄出发票；'
        },
        {
          text:
            '2.根据国家税务相关政策规定，发票内容需据实开具，您可以选择“培训费”等项目；'
        },
        {
          text: '3.发票金额以实际支付的金额为准；'
        },
        {
          text: '4.如发票抬头为单位的，请严格按照网站要求填写各项发票信息；'
        },
        {
          text:
            '5.如您错填发票抬头信息需要进行修改，请您及时联系1911学堂工作人员为您处理;如果发票已经寄出，还请您收到发票后立即跟客服人员联系。'
        }
      ]
    }
  }
}
</script>
