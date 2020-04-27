<template>
  <div class="two">
    <div class="picture"><img src="~@/assets/index/toumingyuan.png" alt=""></div>
    <div class="number">{{config[0].numberOne}}</div>
    <div class="date">{{config[0].numberTwo}}</div>
    <div class="chart"><img src="@/assets/index/yellow.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style scoped>
  .two{
    margin: 10px 5px 10px 0px;
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    padding: 25px;
  }
  .picture{
    width: 60%;
    position: absolute;
  }
  .picture img{
    margin: 0 auto;
  }
  .number{
    padding: 8px 0px;
    position: relative;
    font-size:34px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .date{
    padding-bottom: 5px;
    position: relative;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .chart img{
    padding: 10px 0px;
    z-index: 2;
    margin: 0 auto;
    position: relative;
  }
  .background img{
    position: relative;
    margin: 0 auto;
  }
</style>