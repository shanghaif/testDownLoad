<template>
  <div class="cheta-car-dispatch cheta-width-full cheta-height-full cheta-ptblr">
    <div class="cheta-block cheta-mb-10"><span class="cheta-font-b14">检点详情</span></div>
    <a-row :gutter="16" class="cheta-bcolor-white cheta-width-full cheta-font-height80 cheta-p10-30">
      <a-col :span="8">
        <div class="cheta-detail-item">
          <span>车牌号码：</span><span>粤ACT871</span>
        </div>
        <div class="cheta-detail-item">
          <span>申请人：</span><span>李晓明</span>
        </div>
        <div class="cheta-detail-item">
          <span>加油升数：</span><span>50L</span>
        </div>
        <div class="cheta-detail-item">
          <span>对接地点：</span><span>李晓明</span>
        </div>
        <div class="cheta-detail-item">
          <span>回车停放点：</span><span>50L</span>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="cheta-detail-item">
          <span>乘车人数：</span><span>3</span>
        </div>
        <div class="cheta-detail-item">
          <span>驾驶员：</span><span>成小明</span>
        </div>
        <div class="cheta-detail-item">
          <span>行车里程：</span><span>50L</span>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="cheta-detail-item">
          <span>出车时间：</span><span>粤ACT871</span>
        </div>
        <div class="cheta-detail-item">
          <span>用车时间：</span><span>李晓明</span>
        </div>
        <div class="cheta-detail-item">
          <span>出车地点：</span><span>50L</span>
        </div>
      </a-col>
    </a-row>
    <b class="cheta-arrow"></b>
  </div>
</template>
<script>
  export default {
    name: 'HistoryDetail',
    data () {
      return {
        serityInfo:
          {carNum:"正常",applyPerson:"正常",oil:"异常",mileage:"500km",oil1:"50L"}

      }
    }
  }
</script>
<style lang="less">
  .cheta-car-dispatch .ant-table-tbody > tr > td:first-child{display: none!important;}
</style>
<style lang="less" scoped>
  .cheta-ptblr{padding:0px 150px;}
  .cheta-arrow{position: absolute;left: 172px;top: 19px;width: 0;height: 0;border-width: 6px 6px;border-style: solid;border-color: transparent transparent white transparent;}
  .cheta-detail-item{line-height: 32px;}
  .cheta-detail-item span:first-child{
    font-size: 14px;font-family:Microsoft YaHei;font-weight:400;color:#999999;
  }
  .cheta-detail-item span:last-child{
    font-size: 14px;font-family:Microsoft YaHei;font-weight:400;color:#666666;
  }
</style>