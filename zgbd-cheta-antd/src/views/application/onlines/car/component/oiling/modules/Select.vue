<template>
<div class="Oilselect">
  <div class="titleOne">{{config[0].titleOne}}</div>
  <div class="titleTwo">{{config[0].titleTwo}}</div>
  <div class="OilselectImg">

    <span class="OilselectImg-One" v-if="config[0].select == 1"><img src="/image/Oiling/red.png" alt=""></span>
    <span class="OilselectImg-Two" v-else-if="config[0].select == 2"><img src="/image/Oiling/green.png" alt=""></span>
    <span class="OilselectImg-Three" v-else-if="config[0].select == 3"><img src="/image/Oiling/purple.png" alt=""></span>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Select',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>
  .Oilselect{
    margin: 10px;
    text-align: center;
  }
  .titleOne{
    font-size:34px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .titleTwo{
    font-size:16px;
    margin: 10px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .OilselectImg img{
    height: 55px;
    width: 155px;
  }
  /*.OilselectImg-One {*/
    /*display: none;*/
  /*}*/
  /*.OilselectImg-Two {*/
    /*display: none;*/
  /*}*/
  /*.OilselectImg-Three{*/
    /*display: none;*/
  /*}*/

</style>