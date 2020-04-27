<template>
    <div class="cheta-car-security cheta-width-full cheta-height-full cheta-ptblr">
      <div class="cheta-block cheta-mb-10"><span class="cheta-font-b14">检点详情</span></div>
      <div class="cheta-bcolor-white cheta-flex-around cheta-width-full cheta-font-height80">
        <span>胎压：{{ serityInfo.pressure }}</span>
        <span>启动：{{ serityInfo.start }}</span>
        <span>倒车：{{ serityInfo.brake }}</span>
        <span>出车里程：{{ serityInfo.mileage }}</span>
        <span>油量：{{ serityInfo.oil }}</span>
      </div>
      <b class="cheta-arrow"></b>
    </div>
</template>
<script>
  export default {
    name: 'securityInfo',
    data () {
      return {
        serityInfo:
          {pressure:"正常",start:"正常",brake:"异常",mileage:"500km",oil:"50L"}

      }
    }
  }
</script>
<style lang="less">
  .cheta-car-security .ant-table-tbody > tr > td:first-child{display: none!important;}
</style>
<style lang="less" scoped>
  .cheta-ptblr{padding:0px 150px;}
  .cheta-arrow{position: absolute;left: 172px;top: 19px;width: 0;height: 0;border-width: 6px 6px;border-style: solid;border-color: transparent transparent white transparent;}
</style>