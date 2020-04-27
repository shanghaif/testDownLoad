<template>
    <div class="two">
      <div class="picture"><img src="~@/assets/index/toumingyuan.png" alt=""></div>
      <div class="number">5,6800</div>
      <div class="date">即将到期</div>
      <div class="chart"><img src="@/assets/index/yellow.png" alt=""></div>
    </div>
</template>

<script>
  export default {
    name: 'InsuranceSonTwo'
  }
</script>

<style scoped>
  .two{
    padding: 30px 30px 20px 40px;
  }
  .picture{
    width: 60%;
    position: absolute;
  }
  .picture img{
    margin: 0 auto;
  }
  .number{
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
    z-index: 2;
    margin: 0 auto;
    position: relative;
  }
.background img{
  position: relative;
  margin: 0 auto;
}
</style>