<template>
  <div class="cheta-info-height">
    <ul v-if="pushList.length!== 0" class="cheta-overflow-s cheta-height-full">
      <li v-for="item in pushList" class="cheta-flex-between cheta-font14 cheta-plr-30-54 cheta-font-height44">
      <span>
        <img src="/image/carsecurity/emergency.png"/>
        <span class="cheta-mlr-10">{{ item.warning }}</span>
        <span class="cheta-ml-30">{{ item.time }}</span>
      </span>
        <span class="cheta-color"><a href="#">立即处理>></a></span>
      </li>
    </ul>
    <div v-else class="cheta-flex-center cheta-height-full" ><img src="/image/carsecurity/push.png" class="cheta-push-img"/></div>
  </div>

</template>

<script>
  export default {
    name: 'Push',
    data (){
      return {
        pushList: [
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
          {warning:"【粤A56664】 驶出围栏，请注意", time:"9-13 11:22"},
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-plr-30-54{padding-left: 30px;padding-right: 54px;}
  .cheta-info-height{height:calc(100% - 60px);}
  .cheta-push-img{height:95px;}
  .cheta-img-center{vertical-align: middle;text-align: center;}
  .cheta-shandian{color: #EA3E3A;}
</style>