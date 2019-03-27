<template>
  <div class="infoDetail">
    <p class="pCss">{{detailData.message}}</p>
    <p class="time">{{detailData.send_time}}</p>
  </div>
</template>
<script>
export default {
  props: ["detailData"]
};
</script>