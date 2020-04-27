<template>
  <div  style="border-radius: 4px; text-align: center;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;">
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" style="padding: 38px 0px"/>
    <p style="padding-bottom: 15px;margin-top: 30px">
      <span>提醒日期:</span>
      <span>2019-8-14</span>
    </p>
    <p style="padding-bottom: 120px">
      <span>提醒事件:</span>
      <span>AAA公司车辆入网信息采集</span>
    </p>

  </div>
</template>
<script>
  export default {
    methods: {
      onPanelChange(value, mode) {
        console.log(value, mode);
      }
    }
  }
</script>
